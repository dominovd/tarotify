/**
 * Paddle Customer Portal redirect.
 *
 * GET /api/paddle/portal → redirects to Paddle's hosted self-service portal
 * where the user can update payment method, cancel, see invoices.
 *
 * Requires sign-in AND an existing subscription with a customer_id.
 */

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createClient as createServiceClient } from '@supabase/supabase-js'
import { getCustomerPortalUrl } from '@/lib/paddle/checkout'

export const runtime = 'nodejs'

export async function GET(req: NextRequest) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    const signinUrl = new URL('/auth/signin', req.url)
    signinUrl.searchParams.set('next', '/api/paddle/portal')
    return NextResponse.redirect(signinUrl)
  }

  // Read the most recent subscription row (service role bypasses RLS just
  // for the customer_id lookup — the user already authenticated above).
  const admin = createServiceClient(
    process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } },
  )

  const { data: sub } = await admin
    .from('subscriptions')
    .select('ls_customer_id, status')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (!sub?.ls_customer_id) {
    // No subscription yet — bounce to pricing instead of crashing.
    const pricingUrl = new URL('/pricing', req.url)
    pricingUrl.searchParams.set('reason', 'no_active_subscription')
    return NextResponse.redirect(pricingUrl)
  }

  const portalUrl = await getCustomerPortalUrl(sub.ls_customer_id)
  if (!portalUrl) {
    const accountUrl = new URL('/account', req.url)
    accountUrl.searchParams.set('error', 'portal_unavailable')
    return NextResponse.redirect(accountUrl)
  }

  return NextResponse.redirect(portalUrl)
}
