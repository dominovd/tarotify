// ════════════════════════════════════════════════════════════════════════════
// POST /api/ai-reading — streaming AI tarot reading
// ════════════════════════════════════════════════════════════════════════════
//
// Body (JSON):
//   { cards: [{ slug, reversed, position? }], question?, locale: 'en'|'es',
//     source: 'free-reading'|'reading-analysis', spreadName? }
//
// Identity: signed-in user when NEXT_PUBLIC_AUTH_ENABLED=1, otherwise the
// anonymous `tarotify_bid` cookie issued by middleware, plus an IP hash.
//
// Limits: lib/ai/quota.ts (hourly + daily windows, IP failsafe, spend cap).
// Provider: lib/ai/providers.ts (DeepSeek first, Claude as fallback).
//
// Response:
//   200  streaming text/plain
//   400  bad input / no cookie
//   429  limit hit. Headers: x-quota-remaining, x-quota-scope,
//        x-quota-window (hour|day), x-quota-resets-at
//   503  spend cap reached (error: budget-exceeded) or no provider available
// On 200 the same headers are sent, plus x-quota-next-at when this reading
// used up the hourly allowance.
// ════════════════════════════════════════════════════════════════════════════

import { CARDS_BY_SLUG } from '@/lib/cards'
import { createClient as createServerClient } from '@/lib/supabase/server'
import { AUTH_ENABLED } from '@/lib/features'
import {
  BROWSER_ID_COOKIE,
  hashIp,
  verifyBrowserId,
} from '@/lib/cookies/browser-id'
import {
  checkQuota,
  checkDailyBudget,
  logUsage,
  type QuotaResult,
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
import { anyProviderConfigured, openReading, type OpenedReading } from '@/lib/ai/providers'

export const runtime = 'edge'

const MAX_TOKENS = 1200
const MAX_CARDS = 22
const MAX_QUESTION_LEN = 500

function json(status: number, payload: unknown, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'content-type': 'application/json', ...headers },
  })
}

function badRequest(message: string): Response {
  return json(400, { error: message })
}

function quotaHeaders(q: QuotaResult, remaining: number): Record<string, string> {
  const h: Record<string, string> = {
    'x-quota-remaining': String(remaining),
    'x-quota-scope': q.scope,
    'x-quota-window': q.window,
  }
  if (q.resetsAt) h['x-quota-resets-at'] = q.resetsAt
  if (q.nextAt) h['x-quota-next-at'] = q.nextAt
  return h
}

function getIp(req: Request): string {
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

async function resolveUserId(): Promise<string | null> {
  if (!AUTH_ENABLED) return null
  try {
    const supabase = createServerClient()
    const { data: { user } } = await supabase.auth.getUser()
    return user?.id ?? null
  } catch (err) {
    console.warn('[ai-reading] auth lookup failed, treating as anonymous:', err)
    return null
  }
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

  // ─── identity ──────────────────────────────────────────────────────────
  const userId = await resolveUserId()

  const cookieSecret = process.env.UNSUBSCRIBE_SECRET || process.env.COOKIE_SECRET
  if (!cookieSecret) return json(500, { error: 'server-config' })

  const signedBid = getCookie(req, BROWSER_ID_COOKIE)
  const browserId = userId ? null : await verifyBrowserId(cookieSecret, signedBid)
  const ipHash = await hashIp(cookieSecret, getIp(req))

  if (!userId && !browserId) {
    return json(400, { error: 'no-browser-id', hint: 'cookies are required' })
  }

  // ─── quota (consumes a slot) ───────────────────────────────────────────
  const quota = await checkQuota({ userId, browserId, ipHash })
  if (!quota.allowed) {
    return json(429,
      { error: 'quota-exceeded', reason: quota.reason ?? 'quota-exceeded', scope: quota.scope, window: quota.window },
      quotaHeaders(quota, quota.remaining))
  }
  const headers = quotaHeaders(quota, Math.max(0, quota.remaining - 1))

  // ─── cache (empty-question readings only) ──────────────────────────────
  const cacheKey = await buildCacheKey({ locale, source, cards, question })
  if (cacheKey) {
    const cached = await lookupCachedReading(cacheKey)
    if (cached) return textResponse(cached, headers)
  }

  // ─── spend cap ─────────────────────────────────────────────────────────
  const budget = await checkDailyBudget()
  if (!budget.allowed) {
    return json(503, {
      error: 'budget-exceeded',
      message: 'AI service is taking a rest. Please try again later.',
    }, { ...headers, 'retry-after': '3600' })
  }

  if (!anyProviderConfigured()) return json(503, { error: 'ai-unavailable' })

  // ─── open the provider (DeepSeek, falling back to Claude) ──────────────
  let opened: OpenedReading
  try {
    opened = await openReading({
      system: getSystemPrompt(locale),
      user: buildUserMessage({ locale, source, spreadName, cards, question }),
      maxTokens: MAX_TOKENS,
      tier: source === 'reading-analysis' ? 'deep' : 'fast',
    })
  } catch (err) {
    console.error('[ai-reading] no provider available:', err)
    return json(503, { error: 'ai-unavailable' }, headers)
  }

  // Charge the budget BEFORE streaming: the edge worker can be killed as
  // soon as the client finishes reading, so anything after the stream is
  // best effort only.
  await logUsage({
    userId, browserId, ipHash, source, locale,
    tokensIn: 0, tokensOut: 0,
    costUsdMicro: opened.estimatedCostMicro,
    cards,
  })

  const encoder = new TextEncoder()
  const { readable, writable } = new TransformStream<Uint8Array, Uint8Array>()
  const writer = writable.getWriter()

  ;(async () => {
    let collected = ''
    let failed = false
    try {
      for await (const chunk of opened.stream) {
        collected += chunk
        await writer.write(encoder.encode(chunk))
      }
    } catch (err) {
      failed = true
      console.error(`[ai-reading] ${opened.provider} stream error:`, err)
      try {
        await writer.write(encoder.encode('\n\n[stream error — please try again]'))
      } catch { /* writer may be closed */ }
    } finally {
      // Await the cache write before closing: after close() the worker may die.
      if (!failed && cacheKey && collected.length > 200) {
        try {
          await insertCachedReading({ cacheKey, responseText: collected, locale, source })
        } catch (e) {
          console.warn('[ai-reading] cache insert failed:', e)
        }
      }
      console.info('[ai-reading] usage', {
        provider: opened.provider,
        model: opened.model,
        ...(opened.usage() ?? {}),
        locale, source, cachedKey: cacheKey ? cacheKey.slice(0, 8) : null,
      })
      try { await writer.close() } catch { /* already closed */ }
    }
  })()

  return textResponse(readable, { ...headers, 'x-ai-provider': opened.provider })
}

function textResponse(body: ReadableStream<Uint8Array> | string, headers: Record<string, string>): Response {
  return new Response(body, {
    status: 200,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'no-store',
      ...headers,
    },
  })
}
