/**
 * Paddle Billing API client — minimal fetch wrapper.
 *
 * Environment switching:
 * - `PADDLE_ENVIRONMENT=sandbox`     → https://sandbox-api.paddle.com
 * - `PADDLE_ENVIRONMENT=production`  → https://api.paddle.com
 *
 * Auth: server-only API key (`PADDLE_API_KEY`).
 *
 * This file is server-side ONLY. Importing it from a client component
 * leaks the API key. Use only in route handlers / server components.
 */

type PaddleEnv = 'sandbox' | 'production'

function getEnv(): PaddleEnv {
  const v = process.env.PADDLE_ENVIRONMENT
  if (v === 'production') return 'production'
  return 'sandbox'
}

export function paddleApiBase(): string {
  return getEnv() === 'production'
    ? 'https://api.paddle.com'
    : 'https://sandbox-api.paddle.com'
}

function getApiKey(): string {
  const k = process.env.PADDLE_API_KEY
  if (!k) throw new Error('PADDLE_API_KEY is not set')
  return k
}

export interface PaddleApiError extends Error {
  status: number
  body: unknown
}

/** Low-level Paddle API call. Returns parsed `data` field on success, throws on non-2xx. */
export async function paddleFetch<T = unknown>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const url = path.startsWith('http') ? path : `${paddleApiBase()}${path}`
  const headers = new Headers(init.headers)
  headers.set('Authorization', `Bearer ${getApiKey()}`)
  if (!headers.has('Content-Type') && init.body) {
    headers.set('Content-Type', 'application/json')
  }
  headers.set('Paddle-Version', '1')

  const res = await fetch(url, { ...init, headers })
  const text = await res.text()
  let json: unknown
  try {
    json = text ? JSON.parse(text) : {}
  } catch {
    json = { raw: text }
  }

  if (!res.ok) {
    const err = new Error(
      `Paddle API error ${res.status}: ${
        typeof json === 'object' && json && 'error' in json
          ? JSON.stringify((json as { error: unknown }).error)
          : text.slice(0, 300)
      }`,
    ) as PaddleApiError
    err.status = res.status
    err.body = json
    throw err
  }

  // Paddle wraps successful responses in { data, meta }
  if (typeof json === 'object' && json && 'data' in json) {
    return (json as { data: T }).data
  }
  return json as T
}

/** Returns true if minimal Paddle env vars are present. Used in fail-fast checks. */
export function paddleConfigured(): boolean {
  return Boolean(
    process.env.PADDLE_API_KEY &&
    process.env.PADDLE_PRICE_MONTHLY_ID &&
    process.env.PADDLE_PRICE_YEARLY_ID,
  )
}
