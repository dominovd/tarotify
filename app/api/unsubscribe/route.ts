import { NextResponse } from 'next/server'

export const runtime = 'edge'

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

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return diff === 0
}

async function markUnsubscribed(apiKey: string, audienceId: string, email: string): Promise<boolean> {
  // Resend Audiences contacts can be addressed by email in the PATCH endpoint.
  const url = `https://api.resend.com/audiences/${audienceId}/contacts/${encodeURIComponent(email)}`
  const res = await fetch(url, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ unsubscribed: true }),
  })
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    console.error('[unsubscribe] Resend PATCH failed', res.status, body)
    return false
  }
  return true
}

function redirect(to: string): Response {
  return new Response(null, {
    status: 302,
    headers: { Location: to },
  })
}

async function handle(req: Request): Promise<Response> {
  const url = new URL(req.url)
  const email = (url.searchParams.get('e') || '').trim().toLowerCase()
  const token = (url.searchParams.get('t') || '').trim()

  if (!email) {
    return redirect(`${SITE_URL}/unsubscribed?status=missing`)
  }

  const apiKey = process.env.RESEND_API_KEY
  const audienceId = process.env.RESEND_AUDIENCE_ID
  const secret = process.env.UNSUBSCRIBE_SECRET

  if (!apiKey || !audienceId) {
    console.error('[unsubscribe] env vars missing')
    return redirect(`${SITE_URL}/unsubscribed?status=error`)
  }

  // HMAC check only when a secret is configured. If a recipient clicks an
  // older link sent before secret rotation, we still let them out.
  if (secret) {
    if (!token) {
      console.warn('[unsubscribe] token missing, allowing fallback')
    } else {
      const expected = await hmacToken(secret, email)
      if (!constantTimeEqual(token, expected)) {
        console.warn('[unsubscribe] token mismatch', { email })
        return redirect(`${SITE_URL}/unsubscribed?status=invalid`)
      }
    }
  }

  const ok = await markUnsubscribed(apiKey, audienceId, email)
  return redirect(`${SITE_URL}/unsubscribed?status=${ok ? 'ok' : 'error'}`)
}

export async function GET(req: Request) {
  return handle(req)
}

// RFC 8058 one-click unsubscribe: clients POST the link body
export async function POST(req: Request) {
  return handle(req)
}
