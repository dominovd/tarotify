// ════════════════════════════════════════════════════════════════════════════
// POST /api/ai-reading/email — emails a finished AI reading to the user
// ════════════════════════════════════════════════════════════════════════════
//
// Auth required: returns 401 for anonymous users (the UI gates this behind
// a lock icon anyway, but the server enforces the contract).
//
// Body (JSON):
//   {
//     cards:     [{slug, reversed, position?}],
//     question?: string,
//     spreadName?: string,
//     text:      string,        // the full AI reading text
//     locale:    'en' | 'es',
//   }
//
// Rate limit: 1 send per user per rolling 30 minutes via ai_usage rows
// with feature='ai-reading-email'. Cheap enough to share the existing
// table. The interval is short so users can email a corrected reading
// soon after, but long enough to slow inbox spamming.
// ════════════════════════════════════════════════════════════════════════════

import { createClient as createServerClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { buildAiReadingEmail } from '@/lib/emails/ai-reading'

export const runtime = 'edge'

const MAX_TEXT = 20_000
const MAX_QUESTION = 500
const MAX_CARDS = 22
const EMAIL_COOLDOWN_MS = 30 * 60 * 1000 // 30 minutes

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tarotaxis.com'

function badRequest(message: string): Response {
  return new Response(JSON.stringify({ error: message }), {
    status: 400,
    headers: { 'content-type': 'application/json' },
  })
}

export async function POST(req: Request): Promise<Response> {
  // ─── parse body ────────────────────────────────────────────────────────
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return badRequest('Body must be JSON.')
  }
  if (!body || typeof body !== 'object') return badRequest('Body must be a JSON object.')
  const b = body as Record<string, unknown>

  const locale: 'en' | 'es' = b.locale === 'es' ? 'es' : 'en'
  const rawText = typeof b.text === 'string' ? b.text : ''
  if (!rawText || rawText.length < 20) return badRequest('text is required.')
  const text = rawText.slice(0, MAX_TEXT)

  const rawCards = Array.isArray(b.cards) ? b.cards : null
  if (!rawCards || rawCards.length === 0) return badRequest('cards is required.')
  if (rawCards.length > MAX_CARDS) return badRequest(`cards must contain at most ${MAX_CARDS} entries.`)
  const cards = rawCards.map((c) => {
    const cc = c as Record<string, unknown>
    return {
      slug: typeof cc.slug === 'string' ? cc.slug : '',
      reversed: cc.reversed === true,
      position: typeof cc.position === 'string' ? cc.position.slice(0, 60) : undefined,
    }
  }).filter(c => c.slug.length > 0)
  if (cards.length === 0) return badRequest('No valid cards in payload.')

  const question = typeof b.question === 'string' ? b.question.slice(0, MAX_QUESTION) : undefined
  const spreadName = typeof b.spreadName === 'string' ? b.spreadName.slice(0, 80) : undefined

  // ─── auth ──────────────────────────────────────────────────────────────
  const supabase = createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || !user.email) {
    return new Response(JSON.stringify({ error: 'auth-required' }), {
      status: 401,
      headers: { 'content-type': 'application/json' },
    })
  }

  // ─── rate-limit ────────────────────────────────────────────────────────
  // 1 emailed reading per rolling 30 minutes. We check by looking at the
  // most recent row of feature='ai-reading-email' for this user and
  // rejecting if it's within the cooldown window. Returns the retry-after
  // value so the UI can show "try again in N minutes".
  const admin = createAdminClient()
  const cooldownStart = new Date(Date.now() - EMAIL_COOLDOWN_MS).toISOString()
  const { count: sentRecently } = await admin
    .from('ai_usage')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', user.id)
    .eq('feature', 'ai-reading-email')
    .gte('created_at', cooldownStart)
  if ((sentRecently ?? 0) >= 1) {
    return new Response(JSON.stringify({
      error: 'rate-limited',
      message: 'Please wait up to 30 minutes between emailed readings.',
      cooldownMinutes: 30,
    }), {
      status: 429,
      headers: {
        'content-type': 'application/json',
        'retry-after': String(30 * 60),
      },
    })
  }

  // ─── env ───────────────────────────────────────────────────────────────
  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.RESEND_FROM_EMAIL
  if (!apiKey || !fromEmail) {
    console.warn('[ai-reading/email] Resend env missing')
    return new Response(JSON.stringify({ error: 'mail-unavailable' }), {
      status: 503,
      headers: { 'content-type': 'application/json' },
    })
  }

  // ─── build + send ──────────────────────────────────────────────────────
  const built = buildAiReadingEmail({
    locale,
    siteUrl: SITE_URL,
    spreadName,
    cards,
    question,
    text,
  })

  const sendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [user.email],
      subject: built.subject,
      html: built.html,
      text: built.text,
    }),
  })

  if (!sendRes.ok) {
    const errText = await sendRes.text().catch(() => '')
    console.error('[ai-reading/email] resend send failed', sendRes.status, errText)
    return new Response(JSON.stringify({ error: 'send-failed' }), {
      status: 502,
      headers: { 'content-type': 'application/json' },
    })
  }

  // ─── log usage (for rate-limit accounting) ─────────────────────────────
  const { error: logErr } = await admin.from('ai_usage').insert({
    user_id: user.id,
    feature: 'ai-reading-email',
    source: 'email',
    locale,
    tokens_in: 0, tokens_out: 0, cost_usd_micro: 0,
  })
  if (logErr) console.warn('[ai-reading/email] log failed:', logErr.message)

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  })
}
