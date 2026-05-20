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

// ─── usage logging ──────────────────────────────────────────────────────────

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
  })
  if (error) {
    // Don't fail the user-facing request on a logging error — just record it.
    console.warn('[ai_usage] insert failed:', error.message)
  }
}
