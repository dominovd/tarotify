/**
 * Checkout entry point.
 *
 * GET /api/paddle/checkout/monthly  → redirects to Paddle hosted checkout
 * GET /api/paddle/checkout/yearly   → same
 *
 * Requires sign-in. The user_id is embedded in `custom_data` so the webhook
 * can link the subscription back to the Supabase user.
 */

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createCheckoutTransaction, type PaddleInterval } from '@/lib/paddle/checkout'

export const runtime = 'nodejs'

const INTERVAL_VALUES: Record<string, PaddleInterval> = {
  monthly: 'monthly',
  yearly: 'yearly',
}

export async function GET(
  req: NextRequest,
  { params }: { params: { interval: string } },
) {
  const interval = INTERVAL_VALUES[params.interval]
  if (!interval) {
    return NextResponse.json({ error: 'invalid_interval' }, { status: 400 })
  }

  // Require signed-in user.
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    const signinUrl = new URL('/auth/signin', req.url)
    signinUrl.searchParams.set('next', `/api/paddle/checkout/${interval}`)
    return NextResponse.redirect(signinUrl)
  }
  if (!user.email) {
    return NextResponse.json({ error: 'no_email_on_account' }, { status: 400 })
  }

  // Build the post-checkout return URL — Paddle sends the user back here.
  const origin = new URL(req.url).origin
  const successUrl = `${origin}/account?checkout=success`

  try {
    const { url } = await createCheckoutTransaction({
      userId: user.id,
      email: user.email,
      interval,
      successUrl,
    })
    return NextResponse.redirect(url)
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[paddle checkout] createTransaction failed:', err)
    const fallback = new URL('/pricing', req.url)
    fallback.searchParams.set('error', 'checkout_failed')
    return NextResponse.redirect(fallback)
  }
}
