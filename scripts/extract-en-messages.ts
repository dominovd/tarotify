/**
 * Extract English source content from lib/ TypeScript modules and write
 * messages/en/*.json — the source-of-truth files that the translation
 * pipeline (scripts/translate-batch.ts) reads to produce localised dictionaries.
 *
 * Run with:
 *   npx tsx scripts/extract-en-messages.ts
 *
 * Outputs into ./messages/en/:
 *   cards.json            — name, suitLabel, kw_up, kw_rev, up, rev, love, career, spirit, yn_exp
 *   cards-extended.json   — up2, rev2, love2, career2, spirit2, faq[]
 *   cards-reversed.json   — loveLong, careerLong, spiritLong, reversedFaqs[]
 *   cards-love.json       — loveLong, loveFaqs[]
 *   cards-feelings.json   — uprightLong, reversedLong, howTheyFeel, feelingsFaqs[]
 *
 * Idempotent — overwrites existing files. Run any time the source TS modules
 * change to refresh the EN baseline. The translation pipeline diffs against
 * existing target locale and only re-translates changed keys.
 */

import { promises as fs } from 'node:fs'
import path from 'node:path'

import { CARDS } from '../lib/cards'
import { CARD_EXTENDED } from '../lib/card-extended'
import { CARD_REVERSED_EXTENDED } from '../lib/card-reversed-extended'
import { CARD_LOVE_EXTENDED } from '../lib/card-love-extended'
import { CARD_FEELINGS_EXTENDED } from '../lib/card-feelings-extended'

const OUT_DIR = path.resolve(process.cwd(), 'messages', 'en')

async function ensureDir(dir: string) {
  await fs.mkdir(dir, { recursive: true })
}

async function writeJson(filename: string, payload: unknown) {
  const target = path.join(OUT_DIR, filename)
  const json = JSON.stringify(payload, null, 2) + '\n'
  await fs.writeFile(target, json, 'utf8')
  const sizeKb = (Buffer.byteLength(json, 'utf8') / 1024).toFixed(1)
  console.log(`  wrote ${filename} (${sizeKb} KB, ${Object.keys(payload as object).length} keys)`)
}

function extractCards() {
  const out: Record<string, {
    name: string
    suitLabel: string
    yn_exp: string
    kw_up: string[]
    kw_rev: string[]
    up: string
    rev: string
    love: string
    career: string
    spirit: string
  }> = {}
  for (const c of CARDS) {
    out[c.slug] = {
      name: c.name,
      suitLabel: c.suitLabel,
      yn_exp: c.yn_exp,
      kw_up: c.kw_up,
      kw_rev: c.kw_rev,
      up: c.up,
      rev: c.rev,
      love: c.love,
      career: c.career,
      spirit: c.spirit,
    }
  }
  return out
}

function extractExtended() {
  const out: Record<string, unknown> = {}
  for (const [slug, ext] of Object.entries(CARD_EXTENDED ?? {})) {
    if (!ext) continue
    out[slug] = {
      up2: (ext as any).up2 ?? null,
      rev2: (ext as any).rev2 ?? null,
      love2: (ext as any).love2 ?? null,
      career2: (ext as any).career2 ?? null,
      spirit2: (ext as any).spirit2 ?? null,
      faq: (ext as any).faq ?? [],
    }
  }
  return out
}

function extractReversed() {
  const out: Record<string, unknown> = {}
  for (const [slug, ext] of Object.entries(CARD_REVERSED_EXTENDED ?? {})) {
    if (!ext) continue
    out[slug] = {
      loveLong: (ext as any).loveLong ?? null,
      careerLong: (ext as any).careerLong ?? null,
      spiritLong: (ext as any).spiritLong ?? null,
      reversedFaqs: (ext as any).reversedFaqs ?? [],
    }
  }
  return out
}

function extractLove() {
  const out: Record<string, unknown> = {}
  for (const [slug, ext] of Object.entries(CARD_LOVE_EXTENDED ?? {})) {
    if (!ext) continue
    out[slug] = {
      loveLong: (ext as any).loveLong ?? null,
      loveFaqs: (ext as any).loveFaqs ?? [],
    }
  }
  return out
}

function extractFeelings() {
  const out: Record<string, unknown> = {}
  for (const [slug, ext] of Object.entries(CARD_FEELINGS_EXTENDED ?? {})) {
    if (!ext) continue
    out[slug] = {
      uprightLong: (ext as any).uprightLong ?? null,
      reversedLong: (ext as any).reversedLong ?? null,
      howTheyFeel: (ext as any).howTheyFeel ?? null,
      feelingsFaqs: (ext as any).feelingsFaqs ?? [],
    }
  }
  return out
}

async function main() {
  console.log('Extracting English source content...')
  await ensureDir(OUT_DIR)

  const cards = extractCards()
  const extended = extractExtended()
  const reversed = extractReversed()
  const love = extractLove()
  const feelings = extractFeelings()

  await writeJson('cards.json', cards)
  await writeJson('cards-extended.json', extended)
  await writeJson('cards-reversed.json', reversed)
  await writeJson('cards-love.json', love)
  await writeJson('cards-feelings.json', feelings)

  // Sanity counts
  console.log('')
  console.log(`Cards (base):     ${Object.keys(cards).length}`)
  console.log(`Cards (extended): ${Object.keys(extended).length}`)
  console.log(`Cards (reversed): ${Object.keys(reversed).length}`)
  console.log(`Cards (love):     ${Object.keys(love).length}`)
  console.log(`Cards (feelings): ${Object.keys(feelings).length}`)
  console.log('')
  console.log(`Output dir: ${OUT_DIR}`)
}

main().catch((err) => {
  console.error('Extraction failed:', err)
  process.exit(1)
})
