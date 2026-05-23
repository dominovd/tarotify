// ════════════════════════════════════════════════════════════════════════════
// POST /api/ai-reading — streaming Claude-Sonnet AI tarot reading
// ════════════════════════════════════════════════════════════════════════════
//
// Body (JSON):
//   {
//     cards:    [{ slug: string, reversed: boolean, position?: string }],
//     question?: string,
//     locale:   'en' | 'es',
//     source:   'free-reading' | 'reading-analysis',
//     spreadName?: string,
//   }
//
// Auth:
//   - If a Supabase session cookie is present → registered, user_id resolved.
//   - Otherwise → anonymous, identified by the `tarotify_bid` signed cookie
//     issued by middleware.
//
// Quota (see lib/ai/quota.ts):
//   - Registered: 5 readings per rolling 24h.
//   - Anonymous:  1 reading lifetime per browser_id.
//   - IP failsafe: 5 readings per rolling 24h per ip_hash.
//
// Response:
//   - 200 with a streaming text/plain body (Claude tokens as they arrive).
//   - 400 on bad input.
//   - 429 when quota exceeded — headers include x-quota-* metadata so the UI
//     can render the right paywall/sign-up prompt.
//   - 500 on upstream failure.
//
// Cost & accounting:
//   - System prompt (~6k tokens) is cached via cache_control: 'ephemeral'.
//     Cache writes happen ~once per cold worker per 5 min; cache reads are
//     10% of input price. See lib/ai/prompts.ts for the cached block.
//   - After stream completes, a row is inserted into ai_usage with token
//     counts and cost in micro-USD.
// ════════════════════════════════════════════════════════════════════════════

import Anthropic from '@anthropic-ai/sdk'
import { CARDS_BY_SLUG } from '@/lib/cards'
import { createClient as createServerClient } from '@/lib/supabase/server'
import {
  BROWSER_ID_COOKIE,
  hashIp,
  verifyBrowserId,
} from '@/lib/cookies/browser-id'
import {
  checkQuota,
  checkDailyBudget,
  logUsage,
} from '@/lib/ai/quota'
import {
  buildUserMessage,
  getSystemPrompt,
  type CardInput,
} from '@/lib/ai/prompts'
import {
  buildCacheKey,
  insertCachedReading,
  lookupCachedReading,
} from '@/lib/ai/cache'

export const runtime = 'edge'

const MAX_TOKENS = 1200
const MAX_CARDS = 22
const MAX_QUESTION_LEN = 500

// ─── per-source model routing ──────────────────────────────────────────────
// Haiku 4.5 is ~5× cheaper than Sonnet 4.6 ($0.008/call vs $0.04/call) and
// handles the standard "card meaning + apply to context" task well. We
// keep Sonnet for /reading-analysis where the synthesis across many cards
// is more nuanced.
//
// Each model carries its own per-call cost estimate that we write into
// ai_usage.cost_usd_micro, so the daily budget cap stays accurate when
// mixing both models.
type ModelChoice = {
  model: string
  estimatedCostMicro: number
  // Pricing per million tokens for accurate post-stream logging.
  priceInputPerM: number
  priceCacheWritePerM: number
  priceCacheReadPerM: number
  priceOutputPerM: number
}

const SONNET: ModelChoice = {
  model: 'claude-sonnet-4-6',
  estimatedCostMicro: 40_000, // ~$0.04
  priceInputPerM: 3.0,
  priceCacheWritePerM: 3.75,
  priceCacheReadPerM: 0.3,
  priceOutputPerM: 15.0,
}
const HAIKU: ModelChoice = {
  model: 'claude-haiku-4-5-20251001',
  estimatedCostMicro: 8_000, // ~$0.008
  priceInputPerM: 1.0,
  priceCacheWritePerM: 1.25,
  priceCacheReadPerM: 0.1,
  priceOutputPerM: 5.0,
}

function pickModel(source: 'free-reading' | 'reading-analysis'): ModelChoice {
  if (source === 'reading-analysis') return SONNET
  return HAIKU
}

function badRequest(message: string): Response {
  return new Response(JSON.stringify({ error: message }), {
    status: 400,
    headers: { 'content-type': 'application/json' },
  })
}

function quotaExceeded(
  reason: string,
  scope: string,
  remaining: number,
  resetsAt: string | null,
): Response {
  return new Response(JSON.stringify({ error: 'quota-exceeded', reason, scope }), {
    status: 429,
    headers: {
      'content-type': 'application/json',
      'x-quota-remaining': String(remaining),
      'x-quota-scope': scope,
      ...(resetsAt ? { 'x-quota-resets-at': resetsAt } : {}),
    },
  })
}

function getIp(req: Request): string {
  // Vercel sets x-forwarded-for; the leftmost value is the original client.
  const xff = req.headers.get('x-forwarded-for')
  if (xff) return xff.split(',')[0]!.trim()
  const xr = req.headers.get('x-real-ip')
  if (xr) return xr.trim()
  return '0.0.0.0'
}

function getCookie(req: Request, name: string): string | null {
  const raw = req.headers.get('cookie')
  if (!raw) return null
  for (const part of raw.split(';')) {
    const [k, ...rest] = part.trim().split('=')
    if (k === name) return rest.join('=')
  }
  return null
}

export async function POST(req: Request): Promise<Response> {
  // ─── parse body ────────────────────────────────────────────────────────
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return badRequest('Body must be JSON.')
  }
  if (!body || typeof body !== 'object') return badRequest('Body must be a JSON object.')
  const b = body as Record<string, unknown>

  const locale: 'en' | 'es' = b.locale === 'es' ? 'es' : 'en'
  const source = b.source === 'reading-analysis' ? 'reading-analysis'
                : b.source === 'free-reading'    ? 'free-reading'
                : null
  if (!source) return badRequest('source must be "free-reading" or "reading-analysis".')

  const rawCards = Array.isArray(b.cards) ? b.cards : null
  if (!rawCards || rawCards.length === 0) return badRequest('cards must be a non-empty array.')
  if (rawCards.length > MAX_CARDS) return badRequest(`cards must contain at most ${MAX_CARDS} entries.`)

  const cards: CardInput[] = []
  for (const c of rawCards) {
    if (!c || typeof c !== 'object') return badRequest('Each card must be an object.')
    const cc = c as Record<string, unknown>
    const slug = typeof cc.slug === 'string' ? cc.slug : ''
    if (!CARDS_BY_SLUG[slug]) return badRequest(`Unknown card slug: ${slug}`)
    cards.push({
      slug,
      reversed: cc.reversed === true,
      position: typeof cc.position === 'string' ? cc.position.slice(0, 60) : undefined,
    })
  }

  const question = typeof b.question === 'string'
    ? b.question.slice(0, MAX_QUESTION_LEN)
    : undefined
  const spreadName = typeof b.spreadName === 'string' ? b.spreadName.slice(0, 80) : undefined

  // ─── auth + identity ───────────────────────────────────────────────────
  const supabase = createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  const userId = user?.id ?? null

  const cookieSecret = process.env.UNSUBSCRIBE_SECRET || process.env.COOKIE_SECRET
  if (!cookieSecret) {
    return new Response(JSON.stringify({ error: 'server-config' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    })
  }

  const signedBid = getCookie(req, BROWSER_ID_COOKIE)
  const browserId = userId ? null : await verifyBrowserId(cookieSecret, signedBid)
  const ipHash = await hashIp(cookieSecret, getIp(req))

  // Anonymous without a valid browser_id cookie can't have their quota
  // reliably tracked — block them and ask the middleware to set the cookie
  // first (we set it on every request, so this should only happen if the
  // client refuses cookies).
  if (!userId && !browserId) {
    return new Response(JSON.stringify({ error: 'no-browser-id', hint: 'cookies are required' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    })
  }

  // ─── quota ─────────────────────────────────────────────────────────────
  const quota = await checkQuota({ userId, browserId, ipHash })
  if (!quota.allowed) {
    return quotaExceeded(quota.reason ?? 'quota-exceeded', quota.scope, quota.remaining, quota.resetsAt)
  }

  const nextRemaining = Math.max(0, quota.remaining - 1)

  // ─── cache lookup ──────────────────────────────────────────────────────
  // Empty-question readings on /free-reading and /daily are eligible for
  // caching. Same cards + same locale + same source = same response → we
  // serve from cache, log the usage row at cost=0, and skip Anthropic.
  const cacheKey = await buildCacheKey({ locale, source, cards, question })
  if (cacheKey) {
    const cached = await lookupCachedReading(cacheKey)
    if (cached) {
      // Log usage so the call counts toward the user's quota — quota is a
      // fairness control, not a cost control. Cache hits are free of spend.
      // We still record `cards` so the trends aggregator sees the draw.
      await logUsage({
        userId, browserId, ipHash, source, locale,
        tokensIn: 0, tokensOut: 0, costUsdMicro: 0,
        cards,
      })
      return streamingTextResponse(cached, {
        nextRemaining,
        scope: quota.scope,
        resetsAt: quota.resetsAt,
      })
    }
  }

  // ─── daily budget circuit-breaker ──────────────────────────────────────
  // Hard cap on AI spend across all users in any rolling 24h window. If we
  // are over the cap, refuse new generations but still let cache hits
  // through (already returned above). Adjust via AI_DAILY_BUDGET_USD env.
  const budget = await checkDailyBudget()
  if (!budget.allowed) {
    return new Response(JSON.stringify({
      error: 'budget-exceeded',
      message: 'AI service is taking a rest. Please try again later.',
      spentMicros: budget.spentMicros,
      budgetMicros: budget.budgetMicros,
    }), {
      status: 503,
      headers: {
        'content-type': 'application/json',
        'x-quota-remaining': String(nextRemaining),
        'x-quota-scope': quota.scope,
        'retry-after': '3600',
      },
    })
  }

  // ─── call Anthropic with streaming ─────────────────────────────────────
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'ai-unavailable' }), {
      status: 503,
      headers: { 'content-type': 'application/json' },
    })
  }

  // Pick a model based on the surface. Cheaper Haiku for /daily and
  // /free-reading; Sonnet for /reading-analysis where the 22-card synthesis
  // benefits from the bigger model.
  const chosen = pickModel(source)

  // ─── pre-insert usage row (BEFORE streaming) ───────────────────────────
  // We log the usage row BEFORE starting the stream so quota enforcement is
  // deterministic regardless of the Edge runtime lifecycle. Cost is the
  // chosen model's per-call estimate so the daily budget sum stays accurate
  // when mixing Haiku + Sonnet traffic.
  //
  // (Previously the insert lived in a fire-and-forget `finally` block AFTER
  //  the stream finished. Edge workers were sometimes terminated as soon as
  //  the client finished reading the stream, before `finally` ran — so rows
  //  never landed in ai_usage and quota appeared to never enforce.)
  await logUsage({
    userId, browserId, ipHash, source, locale,
    tokensIn: 0, tokensOut: 0,
    costUsdMicro: chosen.estimatedCostMicro,
    cards,
  })

  const anthropic = new Anthropic({ apiKey })

  const systemText = getSystemPrompt(locale)
  const userMessage = buildUserMessage({ locale, source, spreadName, cards, question })

  // We use SDK's stream() which gives us an async iterable of events. We
  // bridge it into a TransformStream so the response is streamed end-to-end.
  const encoder = new TextEncoder()
  const { readable, writable } = new TransformStream<Uint8Array, Uint8Array>()
  const writer = writable.getWriter()

  ;(async () => {
    let tokensIn = 0
    let cacheCreate = 0
    let cacheRead = 0
    let tokensOut = 0
    let collected = ''  // accumulate text for cache insert

    try {
      // cache_control is documented but not yet in the v0.32 SDK type for
      // TextBlockParam — cast to satisfy TS while still sending the field.
      const systemBlock = [{
        type: 'text',
        text: systemText,
        cache_control: { type: 'ephemeral' },
      }] as unknown as Anthropic.TextBlockParam[]

      const stream = anthropic.messages.stream({
        model: chosen.model,
        max_tokens: MAX_TOKENS,
        system: systemBlock,
        messages: [{ role: 'user', content: userMessage }],
      })

      for await (const event of stream) {
        if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
          collected += event.delta.text
          await writer.write(encoder.encode(event.delta.text))
        } else if (event.type === 'message_delta') {
          // usage trickles in on message_delta + message_stop
          if (event.usage) {
            tokensOut = event.usage.output_tokens ?? tokensOut
          }
        } else if (event.type === 'message_start') {
          // message_start carries the initial usage (input + cache stats).
          // Cache stats are not in the v0.32 SDK Usage type yet — cast.
          const u = event.message.usage as Anthropic.Usage & {
            cache_creation_input_tokens?: number
            cache_read_input_tokens?: number
          } | undefined
          if (u) {
            tokensIn   = u.input_tokens ?? 0
            cacheCreate = u.cache_creation_input_tokens ?? 0
            cacheRead   = u.cache_read_input_tokens ?? 0
          }
        }
      }
    } catch (err) {
      console.error('[ai-reading] stream error:', err)
      try {
        await writer.write(encoder.encode('\n\n[stream error — please try again]'))
      } catch { /* writer might already be closed */ }
    } finally {
      // ─── cache insert BEFORE closing the writer ─────────────────────────
      // We must `await` the insert here, not fire-and-forget. The Edge
      // worker stays alive only while the response stream is open; once
      // writer.close() runs, the client receives EOF and the worker may
      // be terminated immediately — killing any unfinished microtasks.
      //
      // Doing the insert before close() also adds ~50-200ms between the
      // last streamed token and connection close. Imperceptible to the
      // user, and the only way to make the cache write reliable in this
      // runtime.
      if (cacheKey && collected.length > 200) {
        try {
          await insertCachedReading({
            cacheKey,
            responseText: collected,
            locale,
            source,
          })
        } catch (e) {
          console.warn('[ai-reading] cache insert failed:', e)
        }
      }

      // Best-effort: log token counts to the console for spot-check observability.
      const cost =
        (tokensIn      * chosen.priceInputPerM)       +
        (cacheCreate   * chosen.priceCacheWritePerM)  +
        (cacheRead     * chosen.priceCacheReadPerM)   +
        (tokensOut     * chosen.priceOutputPerM)
      console.info('[ai-reading] usage', {
        model: chosen.model,
        in: tokensIn, cacheCreate, cacheRead, out: tokensOut,
        costMicroUsd: Math.round(cost),
        locale, source, cachedKey: cacheKey ? cacheKey.slice(0, 8) : null,
      })

      // Now close the writer so the client sees EOF.
      try { await writer.close() } catch { /* already closed */ }
    }
  })()

  return streamingTextResponse(readable, {
    nextRemaining,
    scope: quota.scope,
    resetsAt: quota.resetsAt,
  })
}

// ─── helpers ────────────────────────────────────────────────────────────────

interface StreamHeaders {
  nextRemaining: number
  scope: 'registered' | 'anonymous' | 'ip'
  resetsAt: string | null
}

/** Wrap a ReadableStream or static string in a 200 text/plain response with
 *  the quota headers the front-end expects. Cache hits pass a string; live
 *  Anthropic streams pass the TransformStream's readable. */
function streamingTextResponse(
  body: ReadableStream<Uint8Array> | string,
  headers: StreamHeaders,
): Response {
  const responseHeaders: Record<string, string> = {
    'content-type': 'text/plain; charset=utf-8',
    'cache-control': 'no-store',
    'x-quota-remaining': String(headers.nextRemaining),
    'x-quota-scope': headers.scope,
  }
  if (headers.resetsAt) responseHeaders['x-quota-resets-at'] = headers.resetsAt
  return new Response(body, { status: 200, headers: responseHeaders })
}
