// ════════════════════════════════════════════════════════════════════════════
// Upstash Redis — minimal REST client (edge-safe, zero dependencies)
// ════════════════════════════════════════════════════════════════════════════
//
// Why hand-rolled instead of `@upstash/redis`: we use six commands total
// (INCR, DECR, EXPIRE, TTL, GET, SET). The REST protocol is a JSON array per
// command, so the whole client is ~60 lines and adds nothing to the edge
// bundle. Swap in the SDK later if we ever need pub/sub or scripting.
//
// Credentials come from the Upstash Vercel integration, which injects
// UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN automatically. The
// KV_REST_API_* names are the legacy Vercel KV aliases — accepted as a
// fallback so an older store keeps working without a redeploy dance.
// ════════════════════════════════════════════════════════════════════════════

const REST_URL =
  process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || ''
const REST_TOKEN =
  process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN || ''

/** Whether a Redis store is wired up at all. Callers decide what to do when
 *  it is not — quota fails closed in production, the cache just misses. */
export const kvConfigured: boolean = Boolean(REST_URL && REST_TOKEN)

/** Upstash occasionally has a slow cold path. We would rather serve the user
 *  than hang on the counter, so every call is bounded. */
const TIMEOUT_MS = Number(process.env.KV_TIMEOUT_MS ?? 1500)

export class KvUnavailableError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'KvUnavailableError'
  }
}

type Command = (string | number)[]

/**
 * Run one or more Redis commands in a single HTTP round trip.
 * Returns the `result` field of each command, in order.
 * Throws KvUnavailableError on misconfiguration, timeout, or transport error.
 */
export async function kv(...commands: Command[]): Promise<unknown[]> {
  if (!kvConfigured) {
    throw new KvUnavailableError('UPSTASH_REDIS_REST_URL / _TOKEN are not set')
  }
  if (commands.length === 0) return []

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    const res = await fetch(`${REST_URL.replace(/\/$/, '')}/pipeline`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${REST_TOKEN}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(commands.map(c => c.map(String))),
      signal: controller.signal,
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new KvUnavailableError(`Upstash responded ${res.status}`)
    }

    const payload = (await res.json()) as Array<{ result?: unknown; error?: string }>
    if (!Array.isArray(payload)) {
      throw new KvUnavailableError('Upstash returned a non-array pipeline result')
    }

    return payload.map(entry => {
      if (entry && typeof entry === 'object' && 'error' in entry && entry.error) {
        throw new KvUnavailableError(`Redis error: ${entry.error}`)
      }
      return entry?.result ?? null
    })
  } catch (err) {
    if (err instanceof KvUnavailableError) throw err
    const reason = err instanceof Error ? err.message : String(err)
    throw new KvUnavailableError(`Upstash request failed: ${reason}`)
  } finally {
    clearTimeout(timer)
  }
}

/** Coerce an Upstash reply to a number. Redis returns integers as numbers over
 *  REST, but strings sneak through for some commands — normalise both. */
export function asInt(value: unknown, fallback = 0): number {
  if (typeof value === 'number' && Number.isFinite(value)) return value
  if (typeof value === 'string') {
    const n = Number(value)
    if (Number.isFinite(n)) return n
  }
  return fallback
}
