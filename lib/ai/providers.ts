// ════════════════════════════════════════════════════════════════════════════
// AI providers — DeepSeek first, Anthropic as fallback (edge-safe)
// ════════════════════════════════════════════════════════════════════════════
//
// openReading() connects to the primary provider and only returns once the
// upstream has accepted the request (HTTP 200). If the primary cannot be
// reached, answers non-200, or does not answer within the connect timeout,
// the next provider is tried. Once text has started streaming there is no
// switch-over: a mid-stream failure surfaces as an error to the caller.
//
// Env:
//   AI_PROVIDER              deepseek (default) | anthropic   primary provider
//   AI_FALLBACK              unset = on; "0" disables the fallback
//   DEEPSEEK_API_KEY         required for DeepSeek
//   DEEPSEEK_BASE_URL        default https://api.deepseek.com
//   DEEPSEEK_MODEL           default deepseek-flash      (fast tier)
//   DEEPSEEK_MODEL_DEEP      default = DEEPSEEK_MODEL    (/reading-analysis)
//   DEEPSEEK_CONNECT_TIMEOUT_MS  default 8000
//   ANTHROPIC_API_KEY        required for the Anthropic fallback
//
// DeepSeek V4.x models think by default; readings do not need it, so every
// request sends thinking: {type: "disabled"}. Any reasoning_content that
// still arrives is dropped. DeepSeek caches repeated prompt prefixes on its
// side automatically, so the long system prompt is cheap on repeat calls.
// ════════════════════════════════════════════════════════════════════════════

import Anthropic from '@anthropic-ai/sdk'

export type ProviderName = 'deepseek' | 'anthropic'
/** fast = /free-reading, /daily, prewarm; deep = /reading-analysis */
export type Tier = 'fast' | 'deep'

export interface ReadingRequest {
  system: string
  user: string
  maxTokens: number
  tier: Tier
}

export interface UsageReport {
  inputTokens: number
  cachedInputTokens: number
  cacheWriteTokens: number
  outputTokens: number
  costMicro: number
}

export interface OpenedReading {
  provider: ProviderName
  model: string
  /** Conservative per-call estimate, charged to the budget before streaming. */
  estimatedCostMicro: number
  /** Text deltas as they arrive. */
  stream: AsyncGenerator<string, void, void>
  /** Filled in once the stream has finished (best effort). */
  usage: () => UsageReport | null
}

// ─── pricing (USD per 1M tokens) ────────────────────────────────────────────
// DeepSeek Flash peak rates (off-peak is half). We budget at peak so the
// circuit-breaker stays conservative.
const DEEPSEEK_PRICE = { input: 0.30, cachedInput: 0.006, output: 1.20 }
const DEEPSEEK_ESTIMATE_MICRO = 3_000 // ~$0.003 per reading, generous

const ANTHROPIC_MODELS: Record<Tier, { model: string; estimate: number; input: number; cacheWrite: number; cacheRead: number; output: number }> = {
  fast: { model: 'claude-haiku-4-5-20251001', estimate: 8_000, input: 1.0, cacheWrite: 1.25, cacheRead: 0.1, output: 5.0 },
  deep: { model: 'claude-sonnet-4-6', estimate: 40_000, input: 3.0, cacheWrite: 3.75, cacheRead: 0.3, output: 15.0 },
}

function providerOrder(): ProviderName[] {
  const primary: ProviderName = process.env.AI_PROVIDER === 'anthropic' ? 'anthropic' : 'deepseek'
  const secondary: ProviderName = primary === 'deepseek' ? 'anthropic' : 'deepseek'
  return process.env.AI_FALLBACK === '0' ? [primary] : [primary, secondary]
}

function configured(name: ProviderName): boolean {
  return name === 'deepseek' ? Boolean(process.env.DEEPSEEK_API_KEY) : Boolean(process.env.ANTHROPIC_API_KEY)
}

export class NoProviderError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'NoProviderError'
  }
}

/** True if at least one provider has a key, so callers can 503 early. */
export function anyProviderConfigured(): boolean {
  return providerOrder().some(configured)
}

export async function openReading(req: ReadingRequest): Promise<OpenedReading> {
  const errors: string[] = []
  for (const name of providerOrder()) {
    if (!configured(name)) {
      errors.push(`${name}: no API key`)
      continue
    }
    try {
      return name === 'deepseek' ? await openDeepSeek(req) : openAnthropic(req)
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      console.warn(`[ai-provider] ${name} failed to open, trying next:`, msg)
      errors.push(`${name}: ${msg}`)
    }
  }
  throw new NoProviderError(errors.join('; ') || 'no provider configured')
}

/** Non-streaming convenience for crons: open, drain, return the full text. */
export async function generateReading(req: ReadingRequest): Promise<{ text: string; provider: ProviderName; model: string }> {
  const opened = await openReading(req)
  let text = ''
  for await (const chunk of opened.stream) text += chunk
  return { text, provider: opened.provider, model: opened.model }
}

// ─── DeepSeek (OpenAI-compatible Chat Completions, SSE) ─────────────────────

async function openDeepSeek(req: ReadingRequest): Promise<OpenedReading> {
  const base = (process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com').replace(/\/$/, '')
  const fastModel = process.env.DEEPSEEK_MODEL || 'deepseek-flash'
  const model = req.tier === 'deep' ? (process.env.DEEPSEEK_MODEL_DEEP || fastModel) : fastModel
  const timeoutMs = Number(process.env.DEEPSEEK_CONNECT_TIMEOUT_MS ?? 8000)

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  let res: Response
  try {
    res = await fetch(`${base}/chat/completions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        'content-type': 'application/json',
        accept: 'text/event-stream',
      },
      body: JSON.stringify({
        model,
        max_tokens: req.maxTokens,
        stream: true,
        stream_options: { include_usage: true },
        thinking: { type: 'disabled' },
        messages: [
          { role: 'system', content: req.system },
          { role: 'user', content: req.user },
        ],
      }),
      signal: controller.signal,
    })
  } catch (err) {
    clearTimeout(timer)
    const reason = controller.signal.aborted ? `no response within ${timeoutMs}ms` : (err instanceof Error ? err.message : String(err))
    throw new Error(reason)
  }
  // Headers are in; the connect timeout must not kill the body stream.
  clearTimeout(timer)

  if (!res.ok || !res.body) {
    let detail = ''
    try { detail = (await res.text()).slice(0, 300) } catch { /* ignore */ }
    throw new Error(`HTTP ${res.status} ${detail}`.trim())
  }

  let usage: UsageReport | null = null
  const body = res.body

  async function* stream(): AsyncGenerator<string, void, void> {
    for await (const event of sseEvents(body)) {
      if (event === '[DONE]') break
      let json: DeepSeekChunk
      try { json = JSON.parse(event) as DeepSeekChunk } catch { continue }
      const delta = json.choices?.[0]?.delta?.content
      if (typeof delta === 'string' && delta.length > 0) yield delta
      if (json.usage) usage = deepseekUsage(json.usage)
    }
  }

  return {
    provider: 'deepseek',
    model,
    estimatedCostMicro: DEEPSEEK_ESTIMATE_MICRO,
    stream: stream(),
    usage: () => usage,
  }
}

interface DeepSeekChunk {
  choices?: Array<{ delta?: { content?: string | null; reasoning_content?: string | null } }>
  usage?: {
    prompt_tokens?: number
    completion_tokens?: number
    prompt_cache_hit_tokens?: number
    prompt_cache_miss_tokens?: number
  }
}

function deepseekUsage(u: NonNullable<DeepSeekChunk['usage']>): UsageReport {
  const cached = u.prompt_cache_hit_tokens ?? 0
  const miss = u.prompt_cache_miss_tokens ?? Math.max(0, (u.prompt_tokens ?? 0) - cached)
  const out = u.completion_tokens ?? 0
  return {
    inputTokens: miss,
    cachedInputTokens: cached,
    cacheWriteTokens: 0,
    outputTokens: out,
    costMicro: Math.round(miss * DEEPSEEK_PRICE.input + cached * DEEPSEEK_PRICE.cachedInput + out * DEEPSEEK_PRICE.output),
  }
}

/** Split an SSE byte stream into `data:` payloads. Exported for tests. */
export async function* sseEvents(body: ReadableStream<Uint8Array>): AsyncGenerator<string, void, void> {
  const reader = body.getReader()
  const decoder = new TextDecoder()
  let buf = ''
  try {
    while (true) {
      const { value, done } = await reader.read()
      if (done) break
      buf += decoder.decode(value, { stream: true })
      let nl: number
      while ((nl = buf.indexOf('\n')) !== -1) {
        const line = buf.slice(0, nl).replace(/\r$/, '')
        buf = buf.slice(nl + 1)
        if (line.startsWith('data:')) yield line.slice(5).trim()
        // Comment lines (": keep-alive") and blank separators are ignored.
      }
    }
    buf += decoder.decode()
    const last = buf.replace(/\r$/, '')
    if (last.startsWith('data:')) yield last.slice(5).trim()
  } finally {
    reader.releaseLock()
  }
}

// ─── Anthropic ──────────────────────────────────────────────────────────────

function openAnthropic(req: ReadingRequest): OpenedReading {
  const m = ANTHROPIC_MODELS[req.tier]
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY, fetch: (...args: Parameters<typeof fetch>) => fetch(...args) })
  let usage: UsageReport | null = null

  // cache_control is not in the v0.32 SDK types yet; cast to send it anyway.
  const system = [{ type: 'text', text: req.system, cache_control: { type: 'ephemeral' } }] as unknown as Anthropic.TextBlockParam[]

  async function* stream(): AsyncGenerator<string, void, void> {
    let input = 0, cacheWrite = 0, cacheRead = 0, out = 0
    const s = anthropic.messages.stream({
      model: m.model,
      max_tokens: req.maxTokens,
      system,
      messages: [{ role: 'user', content: req.user }],
    })
    for await (const event of s) {
      if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
        yield event.delta.text
      } else if (event.type === 'message_start') {
        const u = event.message.usage as Anthropic.Usage & { cache_creation_input_tokens?: number; cache_read_input_tokens?: number }
        input = u?.input_tokens ?? 0
        cacheWrite = u?.cache_creation_input_tokens ?? 0
        cacheRead = u?.cache_read_input_tokens ?? 0
      } else if (event.type === 'message_delta' && event.usage) {
        out = event.usage.output_tokens ?? out
      }
    }
    usage = {
      inputTokens: input,
      cachedInputTokens: cacheRead,
      cacheWriteTokens: cacheWrite,
      outputTokens: out,
      costMicro: Math.round(input * m.input + cacheWrite * m.cacheWrite + cacheRead * m.cacheRead + out * m.output),
    }
  }

  return {
    provider: 'anthropic',
    model: m.model,
    estimatedCostMicro: m.estimate,
    stream: stream(),
    usage: () => usage,
  }
}
