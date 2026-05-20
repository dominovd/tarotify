// ════════════════════════════════════════════════════════════════════════════
// AI Reading cache — server-only, content-addressed by (cards + locale + source)
// ════════════════════════════════════════════════════════════════════════════
//
// We cache AI reading responses ONLY when the user did not supply a personal
// question. Same archetypal input → same archetypal output is a fair and
// privacy-respecting trade.
//
// Biggest win: /daily, where the date-seeded card is identical for every
// visitor. One generation per locale per day serves everyone.
//
// Cache lookup pricing on Supabase free tier is negligible compared to
// $0.04/call to Anthropic, so cache hits are effectively free.
// ════════════════════════════════════════════════════════════════════════════

import { createAdminClient } from '@/lib/supabase/admin'

const DEFAULT_TTL_MS = 24 * 60 * 60 * 1000 // 24 hours

interface CardSeed {
  slug: string
  reversed: boolean
  position?: string
}

interface CacheKeyArgs {
  locale: 'en' | 'es'
  source: 'free-reading' | 'reading-analysis'
  cards: CardSeed[]
  question?: string
}

/** Build a stable cache key for the given inputs, or null when the reading
 *  is not eligible for caching (because the user supplied a personal
 *  question, which we treat as private context). */
export async function buildCacheKey(args: CacheKeyArgs): Promise<string | null> {
  if (args.question && args.question.trim().length > 0) return null

  // Canonicalise cards: position matters (Past != Future), so preserve
  // their order as given. slug + reversed flag fully identify the card.
  const canonical = args.cards
    .map(c => `${(c.position ?? '').toLowerCase()}::${c.slug}::${c.reversed ? '1' : '0'}`)
    .join('|')

  const input = `${args.source}|${args.locale}|${canonical}`
  return await sha256Hex(input)
}

async function sha256Hex(s: string): Promise<string> {
  const data = new TextEncoder().encode(s)
  const hash = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

/** Look up a cached response by cache key. Returns the response text if a
 *  fresh row is found (within ttl), null otherwise. Side effect: bumps
 *  hit_count on the row (fire-and-forget; safe to lose). */
export async function lookupCachedReading(
  cacheKey: string,
  ttlMs: number = DEFAULT_TTL_MS,
): Promise<string | null> {
  const supabase = createAdminClient()
  const oldest = new Date(Date.now() - ttlMs).toISOString()

  const { data, error } = await supabase
    .from('ai_reading_cache')
    .select('response_text')
    .eq('cache_key', cacheKey)
    .gte('created_at', oldest)
    .limit(1)
    .maybeSingle()

  if (error) {
    // Fail open — cache miss is just slower, never harmful.
    console.warn('[ai-cache] lookup error:', error.message)
    return null
  }
  if (!data) return null

  // Bump hit counter atomically via the helper function from migration 003.
  // Fire-and-forget; we don't want cache analytics to block the user path.
  void supabase.rpc('bump_ai_cache_hit', { p_cache_key: cacheKey })

  return data.response_text
}

/** Insert a freshly generated response into the cache. Idempotent: a
 *  concurrent worker may have inserted the same key first; we swallow the
 *  resulting unique-violation. */
export async function insertCachedReading(args: {
  cacheKey: string
  responseText: string
  locale: 'en' | 'es'
  source: 'free-reading' | 'reading-analysis'
}): Promise<void> {
  const supabase = createAdminClient()
  const { error } = await supabase
    .from('ai_reading_cache')
    .insert({
      cache_key: args.cacheKey,
      response_text: args.responseText,
      locale: args.locale,
      source: args.source,
    })
  if (error) {
    // 23505 = unique_violation, expected on cache stampede. Anything else
    // is worth a console note but doesn't fail the user-facing request.
    if (error.code !== '23505') {
      console.warn('[ai-cache] insert error:', error.message)
    }
  }
}
