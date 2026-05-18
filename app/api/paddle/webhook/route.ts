/**
 * Paddle webhook handler.
 *
 * Three things this route must get right:
 *
 * 1. HMAC verification — every request body is HMAC-SHA256 signed against
 *    `PADDLE_WEBHOOK_SECRET`. Reject mismatches.
 * 2. Replay protection — Paddle includes a timestamp in the signature
 *    header. Reject anything older than 5 minutes.
 * 3. Idempotency — Paddle retries failed deliveries for ~3 days. We dedupe
 *    on `event_id` via the `webhook_events` table; second attempt sees the
 *    row exists and returns 200 without re-processing.
 *
 * After verification, the body is parsed and the relevant `subscriptions`
 * row is upserted. Subscription events covered:
 *   subscription.created / activated / updated / paused / resumed / past_due
 *   subscription.canceled (full cancel)
 * Transaction events tracked but not acted on (yet) — they appear for
 * one-off payments. Currently only subscriptions are sold.
 */

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Edge-incompatible — uses node:crypto. Force Node runtime.
export const runtime = 'nodejs'

const MAX_TIMESTAMP_SKEW_SECONDS = 5 * 60 // 5 minutes — Paddle's standard recommendation

function getWebhookSecret(): string {
  const s = process.env.PADDLE_WEBHOOK_SECRET
  if (!s) throw new Error('PADDLE_WEBHOOK_SECRET is not set')
  return s
}

function getServiceRoleSupabase() {
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) {
    throw new Error('Supabase server credentials are not set')
  }
  return createClient(url, key, { auth: { persistSession: false } })
}

/**
 * Verify Paddle signature header.
 *
 * Header format: `ts=<unix_seconds>;h1=<hex_hmac>`
 * The HMAC input is `<ts>:<raw_body>` and the secret is PADDLE_WEBHOOK_SECRET.
 * Reference: https://developer.paddle.com/webhooks/signature-verification
 */
async function verifySignature(rawBody: string, header: string | null): Promise<{
  ok: boolean
  reason?: string
}> {
  if (!header) return { ok: false, reason: 'missing signature header' }

  const parts = Object.fromEntries(
    header.split(';').map(p => {
      const [k, ...rest] = p.split('=')
      return [k.trim(), rest.join('=').trim()]
    }),
  )

  const ts = parts['ts']
  const h1 = parts['h1']
  if (!ts || !h1) return { ok: false, reason: 'malformed signature header' }

  const tsNum = Number(ts)
  if (!Number.isFinite(tsNum)) {
    return { ok: false, reason: 'non-numeric timestamp' }
  }

  const nowSec = Math.floor(Date.now() / 1000)
  if (Math.abs(nowSec - tsNum) > MAX_TIMESTAMP_SKEW_SECONDS) {
    return { ok: false, reason: 'timestamp out of window (replay protection)' }
  }

  // Compute expected HMAC
  const { createHmac, timingSafeEqual } = await import('node:crypto')
  const mac = createHmac('sha256', getWebhookSecret())
  mac.update(`${ts}:${rawBody}`)
  const expected = mac.digest('hex')

  const expectedBuf = Buffer.from(expected, 'hex')
  const providedBuf = Buffer.from(h1, 'hex')
  if (expectedBuf.length !== providedBuf.length) {
    return { ok: false, reason: 'signature length mismatch' }
  }
  if (!timingSafeEqual(expectedBuf, providedBuf)) {
    return { ok: false, reason: 'signature mismatch' }
  }

  return { ok: true }
}

interface PaddleSubscriptionData {
  id: string
  status: string
  customer_id?: string
  custom_data?: { user_id?: string } | null
  items?: Array<{
    price?: { id?: string; billing_cycle?: { interval?: string; frequency?: number } }
  }>
  current_billing_period?: { ends_at?: string } | null
  scheduled_change?: { action?: string; effective_at?: string } | null
  canceled_at?: string | null
}

interface PaddleEvent {
  event_id?: string
  notification_id?: string
  event_type?: string
  data?: PaddleSubscriptionData & Record<string, unknown>
}

/** Map a Paddle subscription record to our DB row. */
function mapSubscription(data: PaddleSubscriptionData): {
  user_id: string | null
  status: string
  plan: string
  ls_subscription_id: string
  ls_customer_id: string | null
  current_period_end: string | null
  cancel_at: string | null
} | null {
  const userId = data.custom_data?.user_id ?? null
  if (!userId) return null // can't link without user_id

  // Normalise status to our enum (status set in 001_auth_foundation.sql).
  // Paddle statuses: active, trialing, past_due, paused, canceled.
  const statusMap: Record<string, string> = {
    active: 'active',
    trialing: 'trialing',
    past_due: 'past_due',
    paused: 'past_due',         // collapse paused → past_due in our model
    canceled: 'cancelled',
  }
  const status = statusMap[data.status] ?? 'expired'

  // Plan: monthly vs yearly based on billing cycle interval.
  const interval = data.items?.[0]?.price?.billing_cycle?.interval
  const plan = interval === 'year' ? 'premium-yearly' : 'premium-monthly'

  return {
    user_id: userId,
    status,
    plan,
    ls_subscription_id: data.id,
    ls_customer_id: data.customer_id ?? null,
    current_period_end: data.current_billing_period?.ends_at ?? null,
    cancel_at:
      data.scheduled_change?.action === 'cancel'
        ? data.scheduled_change.effective_at ?? null
        : data.canceled_at ?? null,
  }
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text()
  const sigHeader = req.headers.get('paddle-signature')

  const verify = await verifySignature(rawBody, sigHeader)
  if (!verify.ok) {
    return NextResponse.json(
      { error: 'invalid_signature', reason: verify.reason },
      { status: 401 },
    )
  }

  let event: PaddleEvent
  try {
    event = JSON.parse(rawBody)
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  const eventId = event.notification_id ?? event.event_id
  const eventType = event.event_type
  if (!eventId || !eventType) {
    return NextResponse.json({ error: 'missing_event_id_or_type' }, { status: 400 })
  }

  const supabase = getServiceRoleSupabase()

  // Idempotency check — INSERT with ON CONFLICT DO NOTHING returns nothing
  // for duplicate event IDs, allowing us to early-return 200 on retries.
  const { error: insertErr } = await supabase
    .from('webhook_events')
    .insert({
      id: eventId,
      provider: 'paddle',
      event_type: eventType,
      payload: event as unknown as Record<string, unknown>,
    })

  if (insertErr) {
    // Duplicate key (Postgres code 23505) means we've already processed.
    // Return 200 so Paddle stops retrying.
    if (insertErr.code === '23505') {
      return NextResponse.json({ ok: true, duplicate: true })
    }
    // eslint-disable-next-line no-console
    console.error('[paddle webhook] insert webhook_events failed:', insertErr)
    return NextResponse.json({ error: 'storage_failed' }, { status: 500 })
  }

  // Act on subscription.* events. Transaction events are recorded above
  // (for debugging) but not used to update state yet.
  if (eventType.startsWith('subscription.') && event.data) {
    const row = mapSubscription(event.data)
    if (row) {
      const { error: upsertErr } = await supabase
        .from('subscriptions')
        .upsert(
          { ...row, updated_at: new Date().toISOString() },
          { onConflict: 'ls_subscription_id' },
        )
      if (upsertErr) {
        // eslint-disable-next-line no-console
        console.error('[paddle webhook] upsert subscriptions failed:', upsertErr)
        // Don't return 500 — webhook_events row is already in, returning
        // failure would cause Paddle to retry, which would dedupe. We log
        // and return 200; manual reconciliation can replay if needed.
      }
    } else {
      // eslint-disable-next-line no-console
      console.warn(
        `[paddle webhook] subscription event ${eventId} had no custom_data.user_id`,
      )
    }
  }

  return NextResponse.json({ ok: true })
}
