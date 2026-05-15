/**
 * Locale-aware card content resolver.
 *
 * Server-side helpers used by page.tsx in the [locale]/cards/[slug] route to
 * load card content for the active locale. Falls back to English (the TS
 * source modules) when a translation key is missing — this is intentional, so
 * partial translation rollouts don't 404 a page.
 *
 * The Spanish content comes from messages/es/cards-*.json (filled by
 * scripts/translate-batch.ts). English content stays in lib/*.ts for
 * authoring ergonomics — JSON-only would lose type-checking on long content.
 *
 * To add a new locale: drop a glossary-<locale>.json into lib/i18n/, run the
 * extract + translate scripts, and the resolver picks it up automatically.
 */

import { promises as fs } from 'node:fs'
import path from 'node:path'

import { CARDS, type Card } from '../cards'
import { CARD_EXTENDED, type ExtendedContent } from '../card-extended'
import { CARD_REVERSED_EXTENDED, type ReversedContext } from '../card-reversed-extended'
import { CARD_LOVE_EXTENDED, type LoveContext } from '../card-love-extended'
import { CARD_FEELINGS_EXTENDED, type FeelingsContext } from '../card-feelings-extended'
import type { Locale } from './slugs'

// Per-locale JSON dictionaries. Loaded lazily on first use and cached for the
// process lifetime. Reading via fs (not dynamic import) avoids bundler edge
// cases with template-string import paths and makes graceful fallback simple.
type LocaleDict = Record<string, Record<string, unknown>>
const cache: Partial<Record<Locale, LocaleDict>> = {}

async function loadLocale(locale: Locale): Promise<LocaleDict> {
  if (cache[locale]) return cache[locale]!
  if (locale === 'en') {
    cache.en = {}
    return cache.en!
  }
  const dict: LocaleDict = {}
  for (const file of ['cards', 'cards-extended', 'cards-reversed', 'cards-love', 'cards-feelings']) {
    try {
      const filePath = path.join(process.cwd(), 'messages', locale, `${file}.json`)
      const raw = await fs.readFile(filePath, 'utf8')
      dict[file] = JSON.parse(raw) as Record<string, unknown>
    } catch {
      dict[file] = {}
    }
  }
  cache[locale] = dict
  return dict
}

const CARDS_BY_SLUG: Record<string, Card> = Object.fromEntries(CARDS.map(c => [c.slug, c]))

/**
 * Return the base Card for `slug` in the active locale.
 * Falls back to English fields per-key when a translation is missing.
 */
export async function getCard(slug: string, locale: Locale): Promise<Card | null> {
  const base = CARDS_BY_SLUG[slug]
  if (!base) return null
  if (locale === 'en') return base
  const dict = await loadLocale(locale)
  const t = (dict['cards']?.[slug] ?? {}) as Partial<Card>
  return {
    ...base,
    name: (t.name as string) ?? base.name,
    suitLabel: (t.suitLabel as string) ?? base.suitLabel,
    yn_exp: (t.yn_exp as string) ?? base.yn_exp,
    kw_up: (t.kw_up as string[]) ?? base.kw_up,
    kw_rev: (t.kw_rev as string[]) ?? base.kw_rev,
    up: (t.up as string) ?? base.up,
    rev: (t.rev as string) ?? base.rev,
    love: (t.love as string) ?? base.love,
    career: (t.career as string) ?? base.career,
    spirit: (t.spirit as string) ?? base.spirit,
  }
}

export async function getCardExtended(slug: string, locale: Locale): Promise<ExtendedContent | null> {
  const base = CARD_EXTENDED[slug]
  if (!base) return null
  if (locale === 'en') return base
  const dict = await loadLocale(locale)
  const t = (dict['cards-extended']?.[slug] ?? {}) as Partial<ExtendedContent>
  return {
    up2: (t.up2 as string) ?? base.up2,
    rev2: (t.rev2 as string) ?? base.rev2,
    love2: (t.love2 as string) ?? base.love2,
    career2: (t.career2 as string) ?? base.career2,
    spirit2: (t.spirit2 as string) ?? base.spirit2,
    faq: (t.faq as ExtendedContent['faq']) ?? base.faq,
  }
}

export async function getCardReversed(slug: string, locale: Locale): Promise<ReversedContext | null> {
  const base = CARD_REVERSED_EXTENDED[slug]
  if (!base) return null
  if (locale === 'en') return base
  const dict = await loadLocale(locale)
  const t = (dict['cards-reversed']?.[slug] ?? {}) as Partial<ReversedContext>
  return {
    loveLong: (t.loveLong as string) ?? base.loveLong,
    careerLong: (t.careerLong as string) ?? base.careerLong,
    spiritLong: (t.spiritLong as string) ?? base.spiritLong,
    reversedFaqs: (t.reversedFaqs as ReversedContext['reversedFaqs']) ?? base.reversedFaqs,
  }
}

export async function getCardLove(slug: string, locale: Locale): Promise<LoveContext | null> {
  const base = CARD_LOVE_EXTENDED[slug]
  if (!base) return null
  if (locale === 'en') return base
  const dict = await loadLocale(locale)
  const t = (dict['cards-love']?.[slug] ?? {}) as Partial<LoveContext>
  return {
    loveLong: (t.loveLong as string) ?? base.loveLong,
    loveFaqs: (t.loveFaqs as LoveContext['loveFaqs']) ?? base.loveFaqs,
  }
}

export async function getCardFeelings(slug: string, locale: Locale): Promise<FeelingsContext | null> {
  const base = CARD_FEELINGS_EXTENDED[slug]
  if (!base) return null
  if (locale === 'en') return base
  const dict = await loadLocale(locale)
  const t = (dict['cards-feelings']?.[slug] ?? {}) as Partial<FeelingsContext>
  return {
    uprightLong: (t.uprightLong as string) ?? base.uprightLong,
    reversedLong: (t.reversedLong as string) ?? base.reversedLong,
    howTheyFeel: (t.howTheyFeel as string) ?? base.howTheyFeel,
    feelingsFaqs: (t.feelingsFaqs as FeelingsContext['feelingsFaqs']) ?? base.feelingsFaqs,
  }
}
