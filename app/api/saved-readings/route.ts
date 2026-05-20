// ════════════════════════════════════════════════════════════════════════════
// /api/saved-readings — cloud journal CRUD
// ════════════════════════════════════════════════════════════════════════════
//
// Auth-required (401 for anonymous). All operations target the caller's own
// rows via RLS policy "readings_self_all" (saved_readings table from
// migration 001).
//
//   POST   /api/saved-readings        Insert a new reading
//   GET    /api/saved-readings        List up to 100 of caller's readings
//   DELETE /api/saved-readings?id=…   Remove one
//
// Anonymous users continue to use localStorage on the client; the journal
// page merges both sources for logged-in users.
// ════════════════════════════════════════════════════════════════════════════

import { createClient as createServerClient } from '@/lib/supabase/server'

export const runtime = 'edge'

const MAX_CARDS = 22
const MAX_QUESTION = 500
const MAX_INTERPRETATION = 20_000
const MAX_NOTES = 5_000
const LIST_LIMIT = 100

interface CardJson {
  slug: string
  reversed: boolean
  position?: string | null
}

function badRequest(message: string): Response {
  return new Response(JSON.stringify({ error: message }), {
    status: 400,
    headers: { 'content-type': 'application/json' },
  })
}

function unauthorized(): Response {
  return new Response(JSON.stringify({ error: 'auth-required' }), {
    status: 401,
    headers: { 'content-type': 'application/json' },
  })
}

// ─── POST ──────────────────────────────────────────────────────────────────

export async function POST(req: Request): Promise<Response> {
  const supabase = createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return unauthorized()

  let body: unknown
  try { body = await req.json() } catch { return badRequest('Body must be JSON.') }
  if (!body || typeof body !== 'object') return badRequest('Body must be an object.')
  const b = body as Record<string, unknown>

  const rawCards = Array.isArray(b.cards) ? b.cards : null
  if (!rawCards || rawCards.length === 0) return badRequest('cards is required.')
  if (rawCards.length > MAX_CARDS) return badRequest(`Too many cards (max ${MAX_CARDS}).`)
  const cards: CardJson[] = []
  for (const c of rawCards) {
    if (!c || typeof c !== 'object') return badRequest('Each card must be an object.')
    const cc = c as Record<string, unknown>
    const slug = typeof cc.slug === 'string' ? cc.slug.trim() : ''
    if (!slug) return badRequest('Each card requires a slug.')
    cards.push({
      slug,
      reversed: cc.reversed === true,
      position: typeof cc.position === 'string' ? cc.position.slice(0, 60) : null,
    })
  }

  const question = typeof b.question === 'string'
    ? b.question.slice(0, MAX_QUESTION) : null
  const spreadId = typeof b.spreadId === 'string'
    ? b.spreadId.slice(0, 80) : null
  const interpretation = typeof b.interpretation === 'string'
    ? b.interpretation.slice(0, MAX_INTERPRETATION) : null
  const notes = typeof b.notes === 'string'
    ? b.notes.slice(0, MAX_NOTES) : null

  const { data, error } = await supabase
    .from('saved_readings')
    .insert({
      user_id: user.id,
      question,
      spread_id: spreadId,
      cards,
      interpretation,
      notes,
    })
    .select('id, created_at, date')
    .single()

  if (error) {
    console.error('[saved-readings] insert failed:', error.message)
    return new Response(JSON.stringify({ error: 'insert-failed' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    })
  }

  return new Response(JSON.stringify({
    ok: true,
    id: data.id,
    createdAt: data.created_at,
    date: data.date,
  }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  })
}

// ─── GET ───────────────────────────────────────────────────────────────────

export async function GET(): Promise<Response> {
  const supabase = createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return unauthorized()

  const { data, error } = await supabase
    .from('saved_readings')
    .select('id, created_at, date, question, spread_id, cards, interpretation, notes')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(LIST_LIMIT)

  if (error) {
    console.error('[saved-readings] list failed:', error.message)
    return new Response(JSON.stringify({ error: 'list-failed' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    })
  }

  return new Response(JSON.stringify({ readings: data ?? [] }), {
    status: 200,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  })
}

// ─── DELETE ────────────────────────────────────────────────────────────────

export async function DELETE(req: Request): Promise<Response> {
  const supabase = createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return unauthorized()

  const url = new URL(req.url)
  const id = url.searchParams.get('id')
  if (!id) return badRequest('id query param required.')
  // Minimal sanity check — Supabase will reject malformed UUIDs anyway.
  if (id.length > 64) return badRequest('id too long.')

  const { error } = await supabase
    .from('saved_readings')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id) // belt-and-braces; RLS already enforces

  if (error) {
    console.error('[saved-readings] delete failed:', error.message)
    return new Response(JSON.stringify({ error: 'delete-failed' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    })
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  })
}
