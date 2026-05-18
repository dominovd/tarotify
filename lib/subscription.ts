/**
 * Subscription utility — `getSubscription(userId)` and `isPremium(userId)`.
 *
 * Reads the `subscriptions` table, returns the most recent row per user.
 * Wraps the lookup in React `cache()` so server components within the same
 * request share a single DB query.
 *
 * Source of truth for "is this user premium" — never check Paddle directly
 * from app code. The webhook keeps `subscriptions` in sync.
 */

import { cache } from 'react'
import { createClient as createServiceClient } from '@supabase/supabase-js'

export interface Subscription {
  id: string
  user_id: string
  status: 'trialing' | 'active' | 'past_due' | 'cancelled' | 'expired'
  plan: 'premium-monthly' | 'premium-yearly'
  ls_subscription_id: string | null
  ls_customer_id: string | null
  current_period_end: string | null
  cancel_at: string | null
  created_at: string
  updated_at: string
}

const ACTIVE_STATUSES = new Set<Subscription['status']>(['active', 'trialing'])

function admin() {
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) {
    throw new Error('Supabase server credentials are not set')
  }
  return createServiceClient(url, key, { auth: { persistSession: false } })
}

/** Most recent subscription row for the user. `null` if user has never subscribed. */
export const getSubscription = cache(async (userId: string): Promise<Subscription | null> => {
  if (!userId) return null
  const { data, error } = await admin()
    .from('subscriptions')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()
  if (error) {
    // eslint-disable-next-line no-console
    console.error('[subscription] getSubscription failed:', error)
    return null
  }
  return (data as Subscription | null) ?? null
})

/**
 * Is the user a paying premium right now?
 *
 * `active` and `trialing` count. `past_due` does NOT — payment failed and
 * the user has a dunning grace period, but we treat premium as off during
 * that window. Once Paddle resolves it the status flips back.
 *
 * If `cancel_at` is set, the subscription is scheduled to end but is still
 * active through `current_period_end`. We honour it until the period ends.
 */
export async function isPremium(userId: string | null | undefined): Promise<boolean> {
  if (!userId) return false
  const sub = await getSubscription(userId)
  if (!sub) return false
  if (!ACTIVE_STATUSES.has(sub.status)) return false
  // If period has demonstrably ended, treat as not premium even if status
  // hasn't been updated yet (webhook lag protection).
  if (sub.current_period_end) {
    if (new Date(sub.current_period_end).getTime() < Date.now()) {
      return false
    }
  }
  return true
}

/** Display-friendly status label (English). */
export function statusLabel(sub: Subscription | null): string {
  if (!sub) return 'Free'
  switch (sub.status) {
    case 'active': return 'Premium · active'
    case 'trialing': return 'Premium · trial'
    case 'past_due': return 'Premium · payment due'
    case 'cancelled': return 'Premium · cancelled'
    case 'expired': return 'Free'
  }
}

/** Display-friendly status label (Spanish). */
export function statusLabelEs(sub: Subscription | null): string {
  if (!sub) return 'Gratis'
  switch (sub.status) {
    case 'active': return 'Premium · activa'
    case 'trialing': return 'Premium · prueba'
    case 'past_due': return 'Premium · pago pendiente'
    case 'cancelled': return 'Premium · cancelada'
    case 'expired': return 'Gratis'
  }
}
