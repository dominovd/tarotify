import { NextResponse } from 'next/server'

export const runtime = 'edge'

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

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

  if (!apiKey || !audienceId) {
    console.error('[subscribe] Resend env vars missing')
    return NextResponse.json(
      { error: 'Subscriptions are temporarily unavailable. Please try again later.' },
      { status: 503 },
    )
  }

  try {
    const res = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    })

    if (!res.ok && res.status !== 409) {
      const errText = await res.text().catch(() => '')
      console.error('[subscribe] Resend error', res.status, errText)
      return NextResponse.json(
        { error: 'Could not add you right now. Please try again in a minute.' },
        { status: 502 },
      )
    }

    // Log source for analytics (visible in Vercel logs)
    console.log('[subscribe] ok', { email, source, status: res.status })

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('[subscribe] Network error', e)
    return NextResponse.json({ error: 'Network error. Please try again.' }, { status: 500 })
  }
}
