// ════════════════════════════════════════════════════════════════════════════
// AI Reading — quota & rate-limit check
// ════════════════════════════════════════════════════════════════════════════
//
// Three-layer policy:
//
//   1. Registered user → 5 AI readings per rolling 24h, tracked by user_id.
//   2. Anonymous user  → 1 AI reading per rolling 24h per browser, tracked
//                        by browser_id from the signed cookie.
//   3. IP failsafe     → 5 AI readings per rolling 24h per ip_hash, to slow
//                        down cookie-wiping abuse.
//
// All counts query the same `ai_usage` table via the service-role client
// (bypasses RLS). The function returns a structured result for the endpoint
// to either reject (429) or carry on.
// ════════════════════════════════════════════════════════════════════════════

import { createAdminClient } from '@/lib/supabase/admin'

export const QUOTA_REG_PER_DAY = 5
export const QUOTA_ANON_PER_DAY = 1
export const QUOTA_IP_PER_DAY = 5

// Hard daily ceiling on AI spend across ALL users. Acts as a circuit
// breaker — if something goes wrong (abuse, bug, viral spike) the
// service throttles before bills explode. Adjust via env var to
// loosen/tighten without a redeploy.
export const DAILY_BUDGET_USD = Number(process.env.AI_DAILY_BUDGET_USD ?? 5)
export const DAILY_BUDGET_MICRO = Math.max(0, Math.round(DAILY_BUDGET_USD * 1_000_000))

// Best-effort per-call cost estimate written into ai_usage.cost_usd_micro
// at insert time. Sonnet 4.6 averages ~$0.025-0.04 per call (cached vs
// cold cache). We pick the higher end to be conservative when summing.
export const ESTIMATED_COST_MICRO_PER_CALL = 40_000 // $0.04

export interface QuotaInput {
  userId: string | null
  browserId: string | null
  ipHash: string | null
}

export interface QuotaResult {
  allowed: boolean
  remaining: number
  /** When the quota refreshes, ISO string. null for lifetime anon limit. */
  resetsAt: string | null
  /** Kind of limit being applied — UI uses this to render appropriate copy. */
  scope: 'registered' | 'anonymous' | 'ip'
  reason?: 'quota-exceeded' | 'ip-rate-limited'
}

const ONE_DAY_MS = 24 * 60 * 60 * 1000

export async function checkQuota(input: QuotaInput): Promise<QuotaResult> {
  const supabase = createAdminClient()
  const oneDayAgo = new Date(Date.now() - ONE_DAY_MS).toISOString()

  // ─── registered user path ────────────────────────────────────────────────
  if (input.userId) {
    const { count, error } = await supabase
      .from('ai_usage')
      .select('id', { count: 'exact', head: true })
      .eq('user_id', input.userId)
      .gte('created_at', oneDayAgo)
    if (error) {
      // Fail open on DB hiccup so the user isn't blocked. Logged for ops.
      console.warn('[quota] reg count error:', error.message)
      return { allowed: true, remaining: QUOTA_REG_PER_DAY, resetsAt: null, scope: 'registered' }
    }
    const used = count ?? 0
    const remaining = Math.max(0, QUOTA_REG_PER_DAY - used)
    return {
      allowed: remaining > 0,
      remaining,
      resetsAt: new Date(Date.now() + ONE_DAY_MS).toISOString(),
      scope: 'registered',
      reason: remaining > 0 ? undefined : 'quota-exceeded',
    }
  }

  // ─── anonymous path: browser_id rolling-24h check ────────────────────────
  if (input.browserId) {
    const { count, error } = await supabase
      .from('ai_usage')
      .select('id', { count: 'exact', head: true })
      .eq('browser_id', input.browserId)
      .gte('created_at', oneDayAgo)
    if (error) {
      console.warn('[quota] anon count error:', error.message)
      return {
        allowed: true, remaining: QUOTA_ANON_PER_DAY,
        resetsAt: new Date(Date.now() + ONE_DAY_MS).toISOString(),
        scope: 'anonymous',
      }
    }
    const used = count ?? 0
    const remaining = Math.max(0, QUOTA_ANON_PER_DAY - used)
    if (remaining <= 0) {
      return {
        allowed: false, remaining: 0,
        resetsAt: new Date(Date.now() + ONE_DAY_MS).toISOString(),
        scope: 'anonymous', reason: 'quota-exceeded',
      }
    }
    // Anon still has quota. Pass through to the IP failsafe.
  }

  // ─── ip failsafe (applies to anonymous only) ─────────────────────────────
  if (!input.userId && input.ipHash) {
    const { count, error } = await supabase
      .from('ai_usage')
      .select('id', { count: 'exact', head: true })
      .eq('ip_hash', input.ipHash)
      .is('user_id', null)
      .gte('created_at', oneDayAgo)
    if (error) {
      console.warn('[quota] ip count error:', error.message)
    } else if ((count ?? 0) >= QUOTA_IP_PER_DAY) {
      return {
        allowed: false,
        remaining: 0,
        resetsAt: new Date(Date.now() + ONE_DAY_MS).toISOString(),
        scope: 'ip',
        reason: 'ip-rate-limited',
      }
    }
  }

  return {
    allowed: true,
    remaining: input.browserId ? QUOTA_ANON_PER_DAY : QUOTA_REG_PER_DAY,
    resetsAt: new Date(Date.now() + ONE_DAY_MS).toISOString(),
    scope: input.userId ? 'registered' : 'anonymous',
  }
}

// ─── daily budget check ─────────────────────────────────────────────────────
// Sums cost_usd_micro from ai_usage rows in the last 24h. If the total
// reaches DAILY_BUDGET_MICRO, the service returns 503 and waits out the
// rolling window. Cache hits write cost=0 so they don't count toward the
// cap (their actual marginal cost is near zero).

export interface BudgetResult {
  allowed: boolean
  /** Total spent in the last 24h, in micros. */
  spentMicros: number
  /** Configured cap, in micros. */
  budgetMicros: number
}

export async function checkDailyBudget(): Promise<BudgetResult> {
  const supabase = createAdminClient()
  const oneDayAgo = new Date(Date.now() - ONE_DAY_MS).toISOString()

  // Read just the cost column for last-24h rows and sum client-side.
  // At ~125 rows/day max (when we hit the cap), this is cheap.
  const { data, error } = await supabase
    .from('ai_usage')
    .select('cost_usd_micro')
    .gte('created_at', oneDayAgo)

  if (error) {
    // Fail open on DB hiccup — better to slightly overspend than to block
    // the whole site on a transient Postgres glitch.
    console.warn('[budget] check error:', error.message)
    return { allowed: true, spentMicros: 0, budgetMicros: DAILY_BUDGET_MICRO }
  }
  const spent = (data ?? []).reduce(
    (acc, row) => acc + ((row.cost_usd_micro as number | null) ?? 0),
    0,
  )
  return {
    allowed: spent < DAILY_BUDGET_MICRO,
    spentMicros: spent,
    budgetMicros: DAILY_BUDGET_MICRO,
  }
}

// ─── usage logging ──────────────────────────────────────────────────────────

/** Card shape persisted to ai_usage.cards for trend aggregation. */
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
  /**
   * Cards that were drawn for this reading. Stored as jsonb so the
   * compute-trends cron can aggregate "most drawn cards" without joining
   * to other tables. Pre-migration-004 rows have NULL here; the trend
   * aggregator tolerates that and falls back to saved_readings for
   * historical context.
   */
  cards?: LoggedCard[]
}

export async function logUsage(input: LogUsageInput): Promise<void> {
  const supabase = createAdminClient()
  const { error } = await supabase.from('ai_usage').insert({
    user_id: input.userId,
    browser_id: input.browserId,
    ip_hash: input.ipHash,
    feature: 'ai-reading',
    source: input.source,
    locale: input.locale,
    tokens_in: input.tokensIn,
    tokens_out: input.tokensOut,
    cost_usd_micro: input.costUsdMicro,
    cards: input.cards && input.cards.length > 0 ? input.cards : null,
  })
  if (error) {
    // Don't fail the user-facing request on a logging error — just record it.
    console.warn('[ai_usage] insert failed:', error.message)
  }
}
