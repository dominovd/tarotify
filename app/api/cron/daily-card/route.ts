/**
 * Daily card cron — fires every morning at 07:00 UTC (Europe morning slot).
 * Picks the date-seeded card-of-the-day, creates a Resend Broadcast, and
 * sends it to the entire TarotAxis Audience in one call.
 *
 * Scheduling:  vercel.json → "0 7 * * *" → /api/cron/daily-card
 * Auth:        Vercel Cron sets `Authorization: Bearer ${CRON_SECRET}`
 *              automatically when the env var is present.
 */

import { NextResponse } from 'next/server'
import { getDailyCard } from '@/lib/daily-card'
import { buildDailyEmail } from '@/lib/emails/daily'

export const runtime = 'edge'

const SITE_URL = 'https://tarotaxis.com'

interface BroadcastCreateResponse {
  id?: string
  data?: { id?: string }
  error?: { message?: string }
}

async function createBroadcast(opts: {
  apiKey: string
  audienceId: string
  fromEmail: string
  subject: string
  html: string
  text: string
}): Promise<{ ok: boolean; id?: string; status: number; body?: string }> {
  const res = await fetch('https://api.resend.com/broadcasts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${opts.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      audience_id: opts.audienceId,
      from: opts.fromEmail,
      subject: opts.subject,
      html: opts.html,
      text: opts.text,
    }),
  })
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    return { ok: false, status: res.status, body }
  }
  const json = (await res.json().catch(() => ({}))) as BroadcastCreateResponse
  const id = json.id || json.data?.id
  if (!id) {
    return { ok: false, status: res.status, body: 'No broadcast id returned' }
  }
  return { ok: true, id, status: res.status }
}

async function sendBroadcast(apiKey: string, id: string): Promise<{ ok: boolean; status: number; body?: string }> {
  const res = await fetch(`https://api.resend.com/broadcasts/${id}/send`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  })
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    return { ok: false, status: res.status, body }
  }
  return { ok: true, status: res.status }
}

async function handle(req: Request): Promise<Response> {
  const cronSecret = process.env.CRON_SECRET
  const auth = req.headers.get('authorization') || ''

  if (!cronSecret) {
    console.error('[cron/daily-card] CRON_SECRET not configured')
    return NextResponse.json({ error: 'Cron secret not configured' }, { status: 500 })
  }
  if (auth !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const audienceId = process.env.RESEND_AUDIENCE_ID
  const fromEmail = process.env.RESEND_FROM_EMAIL

  if (!apiKey || !audienceId || !fromEmail) {
    console.error('[cron/daily-card] Resend env vars missing', {
      hasApiKey: !!apiKey,
      hasAudienceId: !!audienceId,
      hasFromEmail: !!fromEmail,
    })
    return NextResponse.json({ error: 'Resend env vars missing' }, { status: 500 })
  }

  const now = new Date()
  const { card, reversed } = getDailyCard(now)
  const { subject, html, text } = buildDailyEmail({
    siteUrl: SITE_URL,
    date: now,
    card,
    reversed,
  })

  const created = await createBroadcast({ apiKey, audienceId, fromEmail, subject, html, text })
  if (!created.ok) {
    console.error('[cron/daily-card] broadcast create failed', created.status, created.body)
    return NextResponse.json({ error: 'Broadcast create failed', detail: created.body }, { status: 502 })
  }
  console.log('[cron/daily-card] broadcast created', { id: created.id, card: card.slug, reversed })

  const sent = await sendBroadcast(apiKey, created.id!)
  if (!sent.ok) {
    console.error('[cron/daily-card] broadcast send failed', sent.status, sent.body)
    return NextResponse.json({ error: 'Broadcast send failed', detail: sent.body, broadcastId: created.id }, { status: 502 })
  }
  console.log('[cron/daily-card] broadcast sent', { id: created.id })

  return NextResponse.json({
    ok: true,
    broadcastId: created.id,
    card: card.slug,
    reversed,
    date: now.toISOString().slice(0, 10),
  })
}

export async function GET(req: Request) {
  return handle(req)
}

// Vercel Cron makes GET requests, but some operators prefer POST — accept both
export async function POST(req: Request) {
  return handle(req)
}
