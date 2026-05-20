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
import { checkQuota, logUsage } from '@/lib/ai/quota'
import {
  buildUserMessage,
  getSystemPrompt,
  type CardInput,
} from '@/lib/ai/prompts'

export const runtime = 'edge'

const MODEL = 'claude-sonnet-4-6'
const MAX_TOKENS = 1800
const MAX_CARDS = 22
const MAX_QUESTION_LEN = 500

// Pricing per million tokens (USD). Sonnet 4.6 as of 2026-05.
const PRICE_INPUT_PER_M = 3.0
const PRICE_CACHE_WRITE_PER_M = 3.75
const PRICE_CACHE_READ_PER_M = 0.3
const PRICE_OUTPUT_PER_M = 15.0

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

  // ─── call Anthropic with streaming ─────────────────────────────────────
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'ai-unavailable' }), {
      status: 503,
      headers: { 'content-type': 'application/json' },
    })
  }

  // ─── pre-insert usage row (BEFORE streaming) ───────────────────────────
  // We log the usage row BEFORE starting the stream so quota enforcement is
  // deterministic regardless of the Edge runtime lifecycle. Token counts and
  // cost are placeholders (0) at this point — Anthropic dashboard provides
  // accurate per-request usage if we need it. The trade-off keeps quota
  // reliable, which is the user-facing contract; cost analytics are nice-to-
  // have on top of that.
  //
  // (Previously the insert lived in a fire-and-forget `finally` block AFTER
  //  the stream finished. Edge workers were sometimes terminated as soon as
  //  the client finished reading the stream, before `finally` ran — so rows
  //  never landed in ai_usage and quota appeared to never enforce.)
  await logUsage({
    userId, browserId, ipHash, source, locale,
    tokensIn: 0, tokensOut: 0, costUsdMicro: 0,
  })

  const anthropic = new Anthropic({ apiKey })

  const systemText = getSystemPrompt(locale)
  const userMessage = buildUserMessage({ locale, source, spreadName, cards, question })

  // We use SDK's stream() which gives us an async iterable of events. We
  // bridge it into a TransformStream so the response is streamed end-to-end.
  const encoder = new TextEncoder()
  const { readable, writable } = new TransformStream<Uint8Array, Uint8Array>()
  const writer = writable.getWriter()

  // Pre-compute the next remaining count for the response header. We've
  // already verified quota allows ≥1; subtract 1 for this call.
  const nextRemaining = Math.max(0, quota.remaining - 1)

  ;(async () => {
    let tokensIn = 0
    let cacheCreate = 0
    let cacheRead = 0
    let tokensOut = 0

    try {
      // cache_control is documented but not yet in the v0.32 SDK type for
      // TextBlockParam — cast to satisfy TS while still sending the field.
      const systemBlock = [{
        type: 'text',
        text: systemText,
        cache_control: { type: 'ephemeral' },
      }] as unknown as Anthropic.TextBlockParam[]

      const stream = anthropic.messages.stream({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        system: systemBlock,
        messages: [{ role: 'user', content: userMessage }],
      })

      for await (const event of stream) {
        if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
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
      try { await writer.close() } catch { /* already closed */ }

      // Best-effort: log token counts to the console for spot-check observability.
      // (We can't reliably UPDATE the pre-inserted row from here because Edge
      //  workers may have already been terminated. The Anthropic dashboard is
      //  the authoritative source for accurate per-request usage.)
      const cost =
        (tokensIn      * PRICE_INPUT_PER_M)       +
        (cacheCreate   * PRICE_CACHE_WRITE_PER_M) +
        (cacheRead     * PRICE_CACHE_READ_PER_M)  +
        (tokensOut     * PRICE_OUTPUT_PER_M)
      console.info('[ai-reading] usage', {
        in: tokensIn, cacheCreate, cacheRead, out: tokensOut,
        costMicroUsd: Math.round(cost),
        locale, source,
      })
    }
  })()

  return new Response(readable, {
    status: 200,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'no-store',
      'x-quota-remaining': String(nextRemaining),
      'x-quota-scope': quota.scope,
      ...(quota.resetsAt ? { 'x-quota-resets-at': quota.resetsAt } : {}),
    },
  })
}
