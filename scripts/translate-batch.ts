/**
 * Translate English source content to a target locale using Anthropic's
 * Message Batches API (50% discount vs synchronous).
 *
 * Run with:
 *   ANTHROPIC_API_KEY=sk-ant-... npx tsx scripts/translate-batch.ts es
 *
 * Optional flags:
 *   --force       Retranslate cards that already exist in target
 *   --slugs=a,b   Translate only specific slugs
 *   --dry-run     Print plan without submitting batch
 *
 * Architecture:
 *   - One batch per language, ~78 requests (one per card).
 *   - Each request packages ALL 5 content modules for that card into a single
 *     JSON payload, asks Sonnet to translate, returns merged JSON.
 *   - Glossary is injected as the system prompt — fixes Major Arcana names,
 *     suit names, and core tarot terminology so output is consistent.
 *   - Idempotent: skips cards already present in target locale unless --force.
 *
 * Cost estimate (Spanish, ~78 cards × ~5k words each):
 *   ~1.1M input tokens × $1.50/M = $1.65
 *   ~1.1M output tokens × $7.50/M = $8.25
 *   Total ≈ $10 per language run.
 *
 * Static (non-card) page translations are NOT handled here — those live in
 * content/<locale>/*.json and will be handled by scripts/translate-pages.ts
 * (Phase 2).
 */

import { promises as fs } from 'node:fs'
import path from 'node:path'
import { loadEnvConfig } from '@next/env'

// Load .env.local (and .env) — tsx does not auto-load env files like Next.js
// dev server does. @next/env ships with Next.js so no extra dependency needed.
loadEnvConfig(process.cwd())

// Anthropic SDK is loaded dynamically so this file type-checks before the
// dependency is installed locally. Denis runs `npm install @anthropic-ai/sdk`
// before the first batch run.
type AnthropicClient = {
  messages: {
    batches: {
      create: (params: { requests: BatchRequest[] }) => Promise<{ id: string }>
      retrieve: (id: string) => Promise<{ processing_status: string; results_url?: string }>
      results: (id: string) => AsyncIterable<BatchResult>
    }
  }
}

type BatchRequest = {
  custom_id: string
  params: {
    model: string
    max_tokens: number
    system: string
    messages: Array<{ role: 'user'; content: string }>
  }
}

type BatchResult = {
  custom_id: string
  result: {
    type: 'succeeded' | 'errored' | 'canceled' | 'expired'
    message?: { content: Array<{ type: 'text'; text: string }> }
    error?: { type: string; message: string }
  }
}

const CARD_SOURCE_FILES = [
  'cards.json',
  'cards-extended.json',
  'cards-reversed.json',
  'cards-love.json',
  'cards-feelings.json',
] as const

type SourceFile = typeof CARD_SOURCE_FILES[number]

const MODEL = 'claude-sonnet-4-6'
// 16k accommodates the longest card translations (Majors + court). 8k was too
// tight — some Spanish outputs ran ~7-8k tokens and got truncated mid-string,
// breaking JSON parse on the resulting payload.
const MAX_TOKENS = 16000
const POLL_INTERVAL_MS = 30_000

// ---------------------------------------------------------------------------

function parseArgs(argv: string[]) {
  const positional = argv.filter(a => !a.startsWith('--'))
  const locale = positional[0]
  if (!locale) {
    console.error('Usage: tsx scripts/translate-batch.ts <locale> [--force] [--slugs=a,b] [--dry-run] [--batch-id=<id>]')
    process.exit(1)
  }
  const force = argv.includes('--force')
  const dryRun = argv.includes('--dry-run')
  const slugsArg = argv.find(a => a.startsWith('--slugs='))?.slice('--slugs='.length)
  const slugs = slugsArg ? slugsArg.split(',').map(s => s.trim()).filter(Boolean) : null
  const batchIdArg = argv.find(a => a.startsWith('--batch-id='))?.slice('--batch-id='.length) ?? null
  return { locale, force, dryRun, slugs, batchId: batchIdArg }
}

async function readJson<T = unknown>(p: string): Promise<T | null> {
  try {
    const raw = await fs.readFile(p, 'utf8')
    return JSON.parse(raw) as T
  } catch (err: any) {
    if (err?.code === 'ENOENT') return null
    throw err
  }
}

async function writeJson(p: string, payload: unknown) {
  await fs.mkdir(path.dirname(p), { recursive: true })
  await fs.writeFile(p, JSON.stringify(payload, null, 2) + '\n', 'utf8')
}

function buildSystemPrompt(glossary: any): string {
  return [
    `You are a professional tarot translator working in ${glossary.languageName} (${glossary.language}).`,
    ``,
    `Register: ${glossary.register}`,
    ``,
    `Guidelines:`,
    ...(glossary.notes ?? []).map((n: string) => `  - ${n}`),
    ``,
    `Fixed terminology — use these exact translations:`,
    ``,
    `Major Arcana card names (key = English slug, value = target name):`,
    ...Object.entries(glossary.majorArcana).map(([k, v]) => `  ${k} → ${v}`),
    ``,
    `Minor Arcana card names:`,
    ...Object.entries(glossary.minorArcana).map(([k, v]) => `  ${k} → ${v}`),
    ``,
    `Suits: ${Object.entries(glossary.suits).map(([k, v]) => `${k}=${v}`).join(', ')}`,
    `Court ranks: ${Object.entries(glossary.courtRanks).map(([k, v]) => `${k}=${v}`).join(', ')}`,
    `Elements: ${Object.entries(glossary.elements).map(([k, v]) => `${k}=${v}`).join(', ')}`,
    `Yes/No: ${Object.entries(glossary.yesNo).map(([k, v]) => `${k}=${v}`).join(', ')}`,
    ``,
    `Core tarot concepts (use these consistently):`,
    ...Object.entries(glossary.concepts).map(([en, es]) => `  "${en}" → "${es}"`),
    ``,
    `OUTPUT FORMAT:`,
    `Return ONLY valid JSON matching the exact structure of the input. Translate every string value while preserving:`,
    `  - All keys (do NOT translate JSON keys).`,
    `  - All arrays in the same order.`,
    `  - Paragraph structure within strings (line breaks, "\\n\\n" separators).`,
    `  - Proper nouns of card names should match the fixed terminology above.`,
    `  - For null values, return null.`,
    `  - For FAQ items {q, a}, translate both the question and the answer.`,
    ``,
    `Do not add any commentary, markdown, or text outside the JSON.`,
  ].join('\n')
}

function buildUserPrompt(slug: string, payload: Record<SourceFile, unknown>): string {
  return [
    `Card slug: "${slug}"`,
    ``,
    `Translate the following JSON object to the target language. Each top-level key is the name of a content module; each value is that module's content for this card. Return the translated JSON with identical structure.`,
    ``,
    '```json',
    JSON.stringify(payload, null, 2),
    '```',
  ].join('\n')
}

function parseAssistantJson(text: string): Record<SourceFile, unknown> {
  // Allow optional code-fence wrapping (model sometimes adds ```json).
  let body = text.trim()
  if (body.startsWith('```')) {
    body = body.replace(/^```(?:json)?\s*/, '').replace(/\s*```\s*$/, '')
  }
  return JSON.parse(body) as Record<SourceFile, unknown>
}

// ---------------------------------------------------------------------------

async function main() {
  const { locale, force, dryRun, slugs: onlySlugs, batchId: existingBatchId } = parseArgs(process.argv.slice(2))

  console.log(`Translation batch → locale="${locale}"`)
  if (dryRun) console.log('  (dry-run mode — no API call will be made)')

  const cwd = process.cwd()
  const srcDir = path.join(cwd, 'messages', 'en')
  const tgtDir = path.join(cwd, 'messages', locale)
  const glossaryPath = path.join(cwd, 'lib', 'i18n', `glossary-${locale}.json`)

  const glossary = await readJson<any>(glossaryPath)
  if (!glossary) {
    console.error(`Missing glossary: ${glossaryPath}`)
    console.error('Build a glossary-<locale>.json first with the canonical Major Arcana names, suits, and core terms.')
    process.exit(1)
  }
  console.log(`  glossary loaded: ${glossary.languageName}`)

  // Load source and target dictionaries for all 5 card modules.
  const source: Record<SourceFile, Record<string, unknown>> = {} as any
  const target: Record<SourceFile, Record<string, unknown>> = {} as any
  for (const file of CARD_SOURCE_FILES) {
    const s = await readJson<Record<string, unknown>>(path.join(srcDir, file))
    if (!s) {
      console.error(`Missing source: ${path.join(srcDir, file)}. Run extract-en-messages.ts first.`)
      process.exit(1)
    }
    source[file] = s
    target[file] = (await readJson<Record<string, unknown>>(path.join(tgtDir, file))) ?? {}
  }

  // Determine which slugs to translate. Universe = all slugs that appear in
  // any source module. A slug is "done" only if it exists in EVERY source it
  // was present in.
  const allSlugs = new Set<string>()
  for (const file of CARD_SOURCE_FILES) {
    for (const slug of Object.keys(source[file])) allSlugs.add(slug)
  }
  const universe = onlySlugs ? onlySlugs : Array.from(allSlugs)

  const pending: string[] = []
  for (const slug of universe) {
    if (force) { pending.push(slug); continue }
    let complete = true
    for (const file of CARD_SOURCE_FILES) {
      if (source[file][slug] && !target[file][slug]) { complete = false; break }
    }
    if (!complete) pending.push(slug)
  }

  console.log(`  total slugs: ${universe.length}, pending: ${pending.length}, already done: ${universe.length - pending.length}`)

  if (pending.length === 0) {
    console.log('Nothing to translate. Use --force to retranslate.')
    return
  }

  // Build batch requests. Per-module skip: a request payload only includes
  // modules that source has AND target lacks (unless --force). This preserves
  // already-translated modules (e.g. manually crafted cards.json) and skips
  // sending them to the model, cutting cost.
  let skippedModuleCount = 0
  const requests: BatchRequest[] = pending
    .map(slug => {
      const payload: Record<SourceFile, unknown> = {} as any
      for (const file of CARD_SOURCE_FILES) {
        if (source[file][slug] && (force || !target[file][slug])) {
          payload[file] = source[file][slug]
        } else if (source[file][slug] && target[file][slug]) {
          skippedModuleCount++
        }
      }
      // Skip slugs whose payload is now empty (everything already translated).
      if (Object.keys(payload).length === 0) return null
      return {
        // custom_id must match ^[a-zA-Z0-9_-]{1,64}$ (Anthropic Batch API rule).
        // Slugs already satisfy this (kebab-case under 64 chars); locale is
        // implicit in the run.
        custom_id: slug,
        params: {
          model: MODEL,
          max_tokens: MAX_TOKENS,
          system: buildSystemPrompt(glossary),
          messages: [{ role: 'user', content: buildUserPrompt(slug, payload) }],
        },
      }
    })
    .filter((r): r is BatchRequest => r !== null)

  console.log(`  built ${requests.length} batch requests (${skippedModuleCount} module entries already translated, skipped)`)

  if (dryRun) {
    const sample = requests[0]
    console.log('--- sample request (first slug) ---')
    console.log(`  custom_id: ${sample.custom_id}`)
    console.log(`  model: ${sample.params.model}`)
    console.log(`  system length: ${sample.params.system.length} chars`)
    console.log(`  user length: ${sample.params.messages[0].content.length} chars`)
    console.log('--- end sample ---')
    return
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('ANTHROPIC_API_KEY is not set in the environment.')
    process.exit(1)
  }

  // Lazy import so type-check passes without the SDK installed.
  const Anthropic = (await import('@anthropic-ai/sdk')).default
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY }) as any

  // In @anthropic-ai/sdk v0.32 the Message Batches API lives under
  // `client.beta.messages.batches`. Newer versions expose it directly at
  // `client.messages.batches`. Probe for both so the script is forward-compat.
  const batches = client.messages?.batches ?? client.beta?.messages?.batches
  if (!batches?.create || !batches?.retrieve || !batches?.results) {
    console.error('Anthropic SDK does not expose the Message Batches API.')
    console.error('Required: @anthropic-ai/sdk >= 0.32 (Batches under beta.messages.batches).')
    process.exit(1)
  }

  let batchId: string
  if (existingBatchId) {
    // Resume mode — skip create+poll, just fetch results from an existing
    // batch (e.g. previous run created the batch but crashed on result parsing).
    console.log(`Resuming existing batch: ${existingBatchId}`)
    const polled = await batches.retrieve(existingBatchId)
    if (polled.processing_status !== 'ended') {
      console.error(`Batch ${existingBatchId} is not ended yet (status: ${polled.processing_status}). Wait and retry.`)
      process.exit(1)
    }
    batchId = existingBatchId
  } else {
    console.log('Submitting batch...')
    const batch = await batches.create({ requests })
    console.log(`  batch id: ${batch.id}`)
    batchId = batch.id

    // Poll until ended.
    let status = 'in_progress'
    while (status !== 'ended') {
      await new Promise(r => setTimeout(r, POLL_INTERVAL_MS))
      const polled = await batches.retrieve(batchId)
      status = polled.processing_status
      console.log(`  batch ${batchId} status: ${status}`)
    }
  }

  // Collect results.
  // SDK's `results()` returns Promise<JSONLDecoder>. Await it first, THEN
  // iterate. Direct `for await` over the call works in some Node versions but
  // not all — be explicit.
  console.log('Collecting results...')
  const resultsStream = await batches.results(batchId)
  let successes = 0
  let failures = 0
  for await (const item of resultsStream) {
    if (item.result.type !== 'succeeded' || !item.result.message) {
      console.warn(`  ${item.custom_id} → ${item.result.type}: ${item.result.error?.message ?? 'unknown'}`)
      failures++
      continue
    }
    const text = item.result.message.content.map((c: { text: string }) => c.text).join('')
    const slug = item.custom_id
    try {
      const translated = parseAssistantJson(text)
      for (const file of CARD_SOURCE_FILES) {
        if (translated[file]) target[file][slug] = translated[file]
      }
      successes++
    } catch (err) {
      console.warn(`  ${item.custom_id} → JSON parse failed: ${(err as Error).message}`)
      failures++
    }
  }

  // Write all target files.
  for (const file of CARD_SOURCE_FILES) {
    await writeJson(path.join(tgtDir, file), target[file])
  }

  console.log('')
  console.log(`Done. Successes: ${successes}, failures: ${failures}`)
  console.log(`Wrote messages/${locale}/{${CARD_SOURCE_FILES.join(',')}}`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
