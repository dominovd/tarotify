'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

/**
 * Returns the current user's premium status from the `subscriptions` table.
 *
 * Treats `active` and `trialing` (within `current_period_end`) as premium.
 * `past_due`, `cancelled`, `expired` → not premium. Anonymous users → not premium.
 *
 * Read-only client-side query — does not affect server caching. The server
 * source of truth is `lib/subscription.ts`; this hook is for UI gating only.
 */
export function usePremium(): { isPremium: boolean; loading: boolean } {
  const [isPremium, setIsPremium] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    const supabase = createClient()

    async function check() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        if (!cancelled) {
          setIsPremium(false)
          setLoading(false)
        }
        return
      }
      const { data } = await supabase
        .from('subscriptions')
        .select('status, current_period_end')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle()

      if (cancelled) return
      const active = data?.status === 'active' || data?.status === 'trialing'
      const notExpired = !data?.current_period_end ||
        new Date(data.current_period_end).getTime() > Date.now()
      setIsPremium(Boolean(active && notExpired))
      setLoading(false)
    }

    check()

    // Re-check when auth state changes.
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      check()
    })

    return () => {
      cancelled = true
      subscription.unsubscribe()
    }
  }, [])

  return { isPremium, loading }
}
