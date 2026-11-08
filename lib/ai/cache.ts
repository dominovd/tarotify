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
// Storage is Redis (see lib/kv.ts). Entries carry a native TTL, so nothing
// has to sweep stale rows — the old Postgres table needed a `created_at >
// now() - ttl` filter on every read and grew forever.
//
// Config:
//   AI_CACHE_TTL_HOURS   default 24   how long an entry stays servable
//   AI_CACHE_DISABLED    set to "1" to bypass the cache entirely
//
// A cache miss is never an error: if Redis is down or unconfigured we simply
// generate a fresh reading, exactly as we would on a cold key.
// ════════════════════════════════════════════════════════════════════════════

import { kv, kvConfigured } from '@/lib/kv'

const TTL_HOURS = Number(process.env.AI_CACHE_TTL_HOURS ?? 24)
const DEFAULT_TTL_MS = Math.max(1, TTL_HOURS) * 60 * 60 * 1000
const TTL_SECONDS = Math.max(60, Math.round(DEFAULT_TTL_MS / 1000))

const DISABLED = process.env.AI_CACHE_DISABLED === '1'

const KEY_PREFIX = 'ai:cache'
const HITS_KEY = 'ai:cache:stats:hits'
const MISSES_KEY = 'ai:cache:stats:misses'

interface CachedEntry {
  /** Response text. */
  t: string
  /** Created-at, epoch ms — lets a caller enforce a stricter freshness bound
   *  than the key's own TTL. */
  c: number
  locale: 'en' | 'es'
  source: 'free-reading' | 'reading-analysis'
}

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

/**
 * Look up a cached response. Returns the response text if a fresh entry
 * exists, null otherwise.
 *
 * `ttlMs` is an optional stricter freshness bound for this particular read —
 * entries older than it are treated as a miss even though the key itself has
 * not expired. Omit it to accept anything Redis is still holding.
 */
export async function lookupCachedReading(
  cacheKey: string,
  ttlMs: number = DEFAULT_TTL_MS,
): Promise<string | null> {
  if (DISABLED || !kvConfigured) return null

  try {
    const [raw] = await kv(['GET', `${KEY_PREFIX}:${cacheKey}`])
    if (typeof raw !== 'string' || raw.length === 0) {
      void bump(MISSES_KEY)
      return null
    }

    const entry = JSON.parse(raw) as CachedEntry
    if (!entry || typeof entry.t !== 'string') {
      void bump(MISSES_KEY)
      return null
    }
    if (typeof entry.c === 'number' && Date.now() - entry.c > ttlMs) {
      // Stored under a longer TTL than this caller is willing to accept.
      void bump(MISSES_KEY)
      return null
    }

    void bump(HITS_KEY)
    return entry.t
  } catch (err) {
    // Fail open — a cache miss is just slower, never harmful.
    console.warn('[ai-cache] lookup failed:',
      err instanceof Error ? err.message : String(err))
    return null
  }
}

/** Insert a freshly generated response into the cache. Idempotent by nature:
 *  a concurrent worker writing the same key simply overwrites an identical
 *  value. */
export async function insertCachedReading(args: {
  cacheKey: string
  responseText: string
  locale: 'en' | 'es'
  source: 'free-reading' | 'reading-analysis'
}): Promise<void> {
  if (DISABLED || !kvConfigured) return
  if (!args.responseText) return

  const entry: CachedEntry = {
    t: args.responseText,
    c: Date.now(),
    locale: args.locale,
    source: args.source,
  }

  try {
    await kv(['SET', `${KEY_PREFIX}:${args.cacheKey}`, JSON.stringify(entry), 'EX', TTL_SECONDS])
  } catch (err) {
    console.warn('[ai-cache] insert failed:',
      err instanceof Error ? err.message : String(err))
  }
}

/** Fire-and-forget counter for "is the cache actually earning its keep".
 *  Never awaited by the request path. */
async function bump(key: string): Promise<void> {
  try {
    await kv(['INCR', key])
  } catch {
    // Stats are the first thing we are happy to lose.
  }
}
