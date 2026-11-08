// ════════════════════════════════════════════════════════════════════════════
// AI Reading — quota, rate limits & spend cap (Redis-backed)
// ════════════════════════════════════════════════════════════════════════════
//
// Two windows per identity, both fixed (TTL set on the first hit, EXPIRE NX):
//
//   actor = signed-in user, else the anonymous browser_id cookie
//     AI_QUOTA_PER_HOUR      default 1    readings per hour
//     AI_QUOTA_PER_DAY       default 5    readings per 24h
//     AI_QUOTA_REG_PER_HOUR  default = AI_QUOTA_PER_HOUR  (signed-in users)
//     AI_QUOTA_REG_PER_DAY   default = AI_QUOTA_PER_DAY
//
//   IP failsafe (anonymous only, slows cookie-wiping)
//     AI_QUOTA_IP_PER_HOUR   default 3
//     AI_QUOTA_IP_PER_DAY    default 15
//
// Plus a hard spend ceiling across all users:
//     AI_DAILY_BUDGET_USD    default 5    (0 = no ceiling)
//     KV_TIMEOUT_MS          default 1500
//
// Any per-window limit set to 0 disables that window.
//
// All counters for a request are INCRemented in one pipelined round trip. If
// any of them is over its limit the request is refused and every counter it
// touched is DECRemented back, so a refused request never costs allowance.
//
// `remaining` is the DAILY allowance before this call (callers subtract 1).
// `nextAt` is set when this call uses up the hourly allowance while the day
// still has room, so the UI can say "next reading at 14:20".
//
// Redis missing or down: fail CLOSED in production (no unmetered endpoint on
// a paid API key), fail open in dev so `npm run dev` works without Upstash.
// ════════════════════════════════════════════════════════════════════════════

import { kv, asInt, kvConfigured, KvUnavailableError } from '@/lib/kv'

function envInt(name: string, fallback: number): number {
  const raw = process.env[name]
  if (raw === undefined || raw === '') return fallback
  const n = Number(raw)
  return Number.isFinite(n) && n >= 0 ? Math.floor(n) : fallback
}

export const QUOTA_PER_HOUR = envInt('AI_QUOTA_PER_HOUR', 1)
export const QUOTA_PER_DAY = envInt('AI_QUOTA_PER_DAY', 5)
export const QUOTA_REG_PER_HOUR = envInt('AI_QUOTA_REG_PER_HOUR', QUOTA_PER_HOUR)
export const QUOTA_REG_PER_DAY = envInt('AI_QUOTA_REG_PER_DAY', QUOTA_PER_DAY)
export const QUOTA_IP_PER_HOUR = envInt('AI_QUOTA_IP_PER_HOUR', 3)
export const QUOTA_IP_PER_DAY = envInt('AI_QUOTA_IP_PER_DAY', 15)

const HOUR_SECONDS = 3600
const DAY_SECONDS = 86400
/** Window of the spend counter. */
const WINDOW_SECONDS = DAY_SECONDS

export const DAILY_BUDGET_USD = Number(process.env.AI_DAILY_BUDGET_USD ?? 5)
export const DAILY_BUDGET_MICRO = Math.max(0, Math.round(DAILY_BUDGET_USD * 1_000_000))

/** Fallback per-call estimate when a caller has no model-specific figure. */
export const ESTIMATED_COST_MICRO_PER_CALL = 40_000 // $0.04

const KEY_PREFIX = 'ai'
const BUDGET_KEY = `${KEY_PREFIX}:budget`

export interface QuotaInput {
  userId: string | null
  browserId: string | null
  ipHash: string | null
}

export type QuotaWindow = 'hour' | 'day'

export interface QuotaResult {
  allowed: boolean
  /** Daily allowance remaining BEFORE this call is counted. */
  remaining: number
  /** When the binding limit refreshes (ISO). On refusal: the window that refused. */
  resetsAt: string | null
  /** Which window resetsAt refers to. */
  window: QuotaWindow
  /** On success: when the next reading becomes possible, if this call used up the hour. */
  nextAt: string | null
  scope: 'registered' | 'anonymous' | 'ip'
  reason?: 'quota-exceeded' | 'ip-rate-limited' | 'storage-unavailable'
}

const FAIL_CLOSED = process.env.NODE_ENV === 'production'

interface Counter {
  key: string
  limit: number
  windowSeconds: number
  window: QuotaWindow
  layer: 'actor' | 'ip'
}

function isoIn(seconds: number, fallback: number): string {
  const s = seconds > 0 ? seconds : fallback
  return new Date(Date.now() + s * 1000).toISOString()
}

function unavailable(scope: QuotaResult['scope']): QuotaResult {
  return { allowed: false, remaining: 0, resetsAt: null, window: 'day', nextAt: null, scope, reason: 'storage-unavailable' }
}

function devOpen(scope: QuotaResult['scope']): QuotaResult {
  return { allowed: true, remaining: QUOTA_PER_DAY, resetsAt: null, window: 'day', nextAt: null, scope }
}

export async function checkQuota(input: QuotaInput): Promise<QuotaResult> {
  const scope: QuotaResult['scope'] = input.userId ? 'registered' : 'anonymous'

  if (!kvConfigured) {
    if (FAIL_CLOSED) {
      console.error('[quota] no Redis configured, refusing AI requests')
      return unavailable(scope)
    }
    console.warn('[quota] no Redis configured, limits disabled (dev only)')
    return devOpen(scope)
  }

  const actorId = input.userId ? `u:${input.userId}` : input.browserId ? `b:${input.browserId}` : null
  const perHour = input.userId ? QUOTA_REG_PER_HOUR : QUOTA_PER_HOUR
  const perDay = input.userId ? QUOTA_REG_PER_DAY : QUOTA_PER_DAY

  const counters: Counter[] = []
  if (actorId) {
    if (perHour > 0) counters.push({ key: `${KEY_PREFIX}:q:${actorId}:h`, limit: perHour, windowSeconds: HOUR_SECONDS, window: 'hour', layer: 'actor' })
    if (perDay > 0) counters.push({ key: `${KEY_PREFIX}:q:${actorId}:d`, limit: perDay, windowSeconds: DAY_SECONDS, window: 'day', layer: 'actor' })
  }
  if (!input.userId && input.ipHash) {
    const ip = `i:${input.ipHash}`
    if (QUOTA_IP_PER_HOUR > 0) counters.push({ key: `${KEY_PREFIX}:q:${ip}:h`, limit: QUOTA_IP_PER_HOUR, windowSeconds: HOUR_SECONDS, window: 'hour', layer: 'ip' })
    if (QUOTA_IP_PER_DAY > 0) counters.push({ key: `${KEY_PREFIX}:q:${ip}:d`, limit: QUOTA_IP_PER_DAY, windowSeconds: DAY_SECONDS, window: 'day', layer: 'ip' })
  }

  if (counters.length === 0) {
    return { allowed: true, remaining: perDay, resetsAt: null, window: 'day', nextAt: null, scope }
  }

  try {
    // INCR, EXPIRE NX, TTL per counter, all in one round trip.
    const replies = await kv(...counters.flatMap(c => [
      ['INCR', c.key],
      ['EXPIRE', c.key, c.windowSeconds, 'NX'],
      ['TTL', c.key],
    ]))
    const state = counters.map((c, i) => ({
      ...c,
      used: asInt(replies[i * 3], 1),
      ttl: asInt(replies[i * 3 + 2], c.windowSeconds),
    }))

    // Actor limits are checked before IP so the user sees their own limit
    // first; within a layer the day limit wins over the hour (longer wait).
    const order = (x: typeof state[number]) => (x.layer === 'actor' ? 0 : 2) + (x.window === 'day' ? 0 : 1)
    const over = state.filter(x => x.used > x.limit).sort((a, b) => order(a) - order(b))[0]

    if (over) {
      try {
        await kv(...counters.map(c => ['DECR', c.key]))
      } catch {
        // A lost refund costs at most one reading in this window.
      }
      return {
        allowed: false,
        remaining: 0,
        resetsAt: isoIn(over.ttl, over.windowSeconds),
        window: over.window,
        nextAt: null,
        scope: over.layer === 'ip' ? 'ip' : scope,
        reason: over.layer === 'ip' ? 'ip-rate-limited' : 'quota-exceeded',
      }
    }

    const day = state.find(x => x.layer === 'actor' && x.window === 'day')
    const hour = state.find(x => x.layer === 'actor' && x.window === 'hour')
    const remaining = day ? Math.max(0, day.limit - (day.used - 1)) : perDay
    const hourSpent = hour ? hour.used >= hour.limit : false
    const dayLeftAfter = day ? day.used < day.limit : true

    return {
      allowed: true,
      remaining,
      resetsAt: day ? isoIn(day.ttl, DAY_SECONDS) : null,
      window: 'day',
      nextAt: hour && hourSpent && dayLeftAfter ? isoIn(hour.ttl, HOUR_SECONDS) : null,
      scope,
    }
  } catch (err) {
    const message = err instanceof KvUnavailableError ? err.message : String(err)
    if (FAIL_CLOSED) {
      console.error('[quota] Redis unavailable, refusing request:', message)
      return unavailable(scope)
    }
    console.warn('[quota] Redis unavailable, allowing request (dev):', message)
    return devOpen(scope)
  }
}

// ─── spend cap ──────────────────────────────────────────────────────────────

export interface BudgetResult {
  allowed: boolean
  /** Total spent in the current window, in micros. */
  spentMicros: number
  /** Configured cap, in micros. */
  budgetMicros: number
}

export async function checkDailyBudget(): Promise<BudgetResult> {
  if (DAILY_BUDGET_MICRO === 0) {
    // An explicit 0 means "no ceiling" rather than "spend nothing" — a zero
    // budget that blocked everything would be a nasty way to read the config.
    return { allowed: true, spentMicros: 0, budgetMicros: 0 }
  }
  if (!kvConfigured) {
    return { allowed: !FAIL_CLOSED, spentMicros: 0, budgetMicros: DAILY_BUDGET_MICRO }
  }

  try {
    const [spent] = await kv(['GET', BUDGET_KEY])
    const spentMicros = asInt(spent, 0)
    return {
      allowed: spentMicros < DAILY_BUDGET_MICRO,
      spentMicros,
      budgetMicros: DAILY_BUDGET_MICRO,
    }
  } catch (err) {
    // Fail open on a transient Redis glitch: the per-user quota already
    // bounds the blast radius, so a brief overspend beats a dead feature.
    console.warn('[budget] check failed, allowing:',
      err instanceof Error ? err.message : String(err))
    return { allowed: true, spentMicros: 0, budgetMicros: DAILY_BUDGET_MICRO }
  }
}

// ─── usage accounting ───────────────────────────────────────────────────────

/** Card shape the old implementation persisted for trend aggregation.
 *  Kept in the signature so callers compile unchanged; see the note in
 *  logUsage() about where trends data now has to come from. */
export interface LoggedCard {
  slug: string
  reversed: boolean
  position?: string
}

export interface LogUsageInput {
  userId: string | null
  browserId: string | null
  ipHash: string | null
  source: 'free-reading' | 'reading-analysis'
  locale: 'en' | 'es'
  tokensIn: number
  tokensOut: number
  /** Cost in USD micros (1 USD = 1,000,000). Kept as int to avoid float drift. */
  costUsdMicro: number
  cards?: LoggedCard[]
}

/**
 * Charge a call against the window's spend counter.
 *
 * Quota is no longer touched here — checkQuota() consumed the slot when it
 * ran, so this is purely about money. Cache hits arrive with
 * costUsdMicro = 0 and are skipped entirely rather than costing a round trip.
 *
 * Note: `tokensIn`/`tokensOut`/`cards` are accepted but not persisted. The
 * per-reading history that fed /trends lived in `ai_usage`; if trends come
 * back, they need their own store rather than a free ride on the quota keys.
 */
export async function logUsage(input: LogUsageInput): Promise<void> {
  if (!kvConfigured) return
  if (!input.costUsdMicro || input.costUsdMicro <= 0) return

  try {
    await kv(
      ['INCRBY', BUDGET_KEY, Math.round(input.costUsdMicro)],
      ['EXPIRE', BUDGET_KEY, WINDOW_SECONDS, 'NX'],
    )
  } catch (err) {
    // Never fail a user-facing request because accounting hiccuped.
    console.warn('[budget] charge failed:',
      err instanceof Error ? err.message : String(err))
  }
}
