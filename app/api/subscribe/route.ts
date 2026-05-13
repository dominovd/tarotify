import { NextResponse } from 'next/server'
import { buildWelcomeEmail } from '@/lib/emails/welcome'

export const runtime = 'edge'

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

const SITE_URL = 'https://tarotaxis.com'

async function hmacToken(secret: string, message: string, length = 16): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message))
  return Array.from(new Uint8Array(sig))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
    .slice(0, length)
}

async function unsubscribeUrl(email: string, secret: string | undefined): Promise<string> {
  const e = encodeURIComponent(email)
  if (!secret) {
    // No secret configured — fall back to unsigned (works but spoofable);
    // server still validates on receive when secret becomes available.
    return `${SITE_URL}/api/unsubscribe?e=${e}`
  }
  const token = await hmacToken(secret, email)
  return `${SITE_URL}/api/unsubscribe?e=${e}&t=${token}`
}

async function sendWelcomeEmail(opts: {
  apiKey: string
  fromEmail: string
  toEmail: string
  unsubscribeUrl: string
}): Promise<{ ok: boolean; status: number; body?: string }> {
  const { subject, html, text } = buildWelcomeEmail({
    siteUrl: SITE_URL,
    unsubscribeUrl: opts.unsubscribeUrl,
  })

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${opts.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: opts.fromEmail,
      to: [opts.toEmail],
      subject,
      html,
      text,
      headers: {
        // RFC 8058 one-click unsubscribe — most major clients honour it
        'List-Unsubscribe': `<${opts.unsubscribeUrl}>`,
        'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
      },
    }),
  })

  if (!res.ok) {
    const body = await res.text().catch(() => '')
    return { ok: false, status: res.status, body }
  }
  return { ok: true, status: res.status }
}

export async function POST(req: Request) {
  let payload: { email?: string; source?: string }
  try {
    payload = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const rawEmail = typeof payload.email === 'string' ? payload.email.trim() : ''
  const source = typeof payload.source === 'string' ? payload.source.slice(0, 64) : 'unknown'

  if (!rawEmail || !EMAIL_RE.test(rawEmail) || rawEmail.length > 254) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }
  const email = rawEmail.toLowerCase()

  const apiKey = process.env.RESEND_API_KEY
  const audienceId = process.env.RESEND_AUDIENCE_ID
  const fromEmail = process.env.RESEND_FROM_EMAIL
  const unsubSecret = process.env.UNSUBSCRIBE_SECRET

  if (!apiKey || !audienceId) {
    console.error('[subscribe] Resend env vars missing')
    return NextResponse.json(
      { error: 'Subscriptions are temporarily unavailable. Please try again later.' },
      { status: 503 },
    )
  }

  // 1. Add to audience
  try {
    const audRes = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    })

    // 409 = already exists; treat as success but skip the welcome email
    if (!audRes.ok && audRes.status !== 409) {
      const errText = await audRes.text().catch(() => '')
      console.error('[subscribe] audience add error', audRes.status, errText)
      return NextResponse.json(
        { error: 'Could not add you right now. Please try again in a minute.' },
        { status: 502 },
      )
    }

    const alreadySubscribed = audRes.status === 409
    console.log('[subscribe] audience ok', { email, source, status: audRes.status })

    // 2. Send welcome email (skip if duplicate signup or sender not configured)
    if (!alreadySubscribed && fromEmail) {
      const unsubUrl = await unsubscribeUrl(email, unsubSecret)
      const sendRes = await sendWelcomeEmail({
        apiKey,
        fromEmail,
        toEmail: email,
        unsubscribeUrl: unsubUrl,
      })
      if (!sendRes.ok) {
        // Don't fail the subscription — they're in the audience.
        console.error('[subscribe] welcome email failed', sendRes.status, sendRes.body)
      } else {
        console.log('[subscribe] welcome sent', { email })
      }
    } else if (!fromEmail) {
      console.warn('[subscribe] RESEND_FROM_EMAIL not set; skipping welcome send')
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('[subscribe] handler error', e)
    return NextResponse.json({ error: 'Network error. Please try again.' }, { status: 500 })
  }
}
