// ════════════════════════════════════════════════════════════════════════════
// Signed browser_id cookie
// ════════════════════════════════════════════════════════════════════════════
//
// Anonymous AI-reading quota needs a stable identifier per browser. We use
// a signed cookie:
//
//   tarotify_bid = <uuid>.<hmac-sha256(uuid)>
//
// • UUID is opaque, no PII.
// • HMAC keeps users from forging cookies to reset their quota.
// • Edge-runtime safe — only uses Web Crypto APIs.
//
// The cookie is httpOnly (no JS read), secure (HTTPS), sameSite=lax, 365d.
// ════════════════════════════════════════════════════════════════════════════

export const BROWSER_ID_COOKIE = 'tarotify_bid'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 365 days

const enc = new TextEncoder()

async function hmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify'],
  )
}

function toHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

async function sign(secret: string, value: string): Promise<string> {
  const key = await hmacKey(secret)
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(value))
  return toHex(sig).slice(0, 32) // truncated to keep cookie compact
}

/** Create a new signed browser_id from scratch. */
export async function createBrowserId(secret: string): Promise<{ raw: string; signed: string }> {
  const raw = crypto.randomUUID()
  const sig = await sign(secret, raw)
  return { raw, signed: `${raw}.${sig}` }
}

/** Verify a signed cookie and return the raw UUID, or null if invalid. */
export async function verifyBrowserId(secret: string, signed: string | null | undefined): Promise<string | null> {
  if (!signed) return null
  const dot = signed.indexOf('.')
  if (dot < 0) return null
  const raw = signed.slice(0, dot)
  const sig = signed.slice(dot + 1)
  if (!/^[0-9a-f-]{36}$/.test(raw)) return null
  if (!/^[0-9a-f]{32}$/.test(sig)) return null
  const expected = await sign(secret, raw)
  // Constant-time compare not strictly necessary with truncated hex but safe to do:
  if (sig.length !== expected.length) return null
  let ok = 0
  for (let i = 0; i < sig.length; i++) ok |= sig.charCodeAt(i) ^ expected.charCodeAt(i)
  return ok === 0 ? raw : null
}

/** Compute the Set-Cookie header value for a freshly issued browser_id. */
export function setCookieHeader(signed: string): string {
  const parts = [
    `${BROWSER_ID_COOKIE}=${signed}`,
    'Path=/',
    `Max-Age=${COOKIE_MAX_AGE}`,
    'HttpOnly',
    'SameSite=Lax',
  ]
  if (process.env.NODE_ENV === 'production') parts.push('Secure')
  return parts.join('; ')
}

/** Hash a value (typically the client IP) with a server secret. Stored in
 *  ai_usage.ip_hash so we never persist raw IP addresses. */
export async function hashIp(secret: string, ip: string): Promise<string> {
  const key = await hmacKey(secret)
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(ip))
  return toHex(sig).slice(0, 32)
}
