// ════════════════════════════════════════════════════════════════════════════
// lib/journal/patterns.ts — per-user pattern aggregation over journal entries
// ════════════════════════════════════════════════════════════════════════════
//
// Takes the user's UnifiedEntry[] (already merged cloud + localStorage in
// JournalClient) and returns a compact "patterns" document the
// JournalPatterns component renders above the timeline.
//
// Pure, client-side, dependency-free. Runs in microseconds for any
// realistic journal size (typically < 200 entries).
//
// Patterns surfaced:
//   - Most-drawn cards across ALL entries.
//   - Cards drawn in the last 30 days, with a delta vs the prior 30 days.
//   - Top keywords (kw_up) aggregated across all drawn cards — emergent
//     themes of the seeker's reflection.
//   - Totals: number of readings, distinct cards seen, first reading date.
//
// We deliberately do NOT save these to the DB. The journal is the source
// of truth; recomputing on render keeps the patterns in step with
// deletions, edits, and newly added entries without any sync logic.
// ════════════════════════════════════════════════════════════════════════════

import type { Card } from '@/lib/cards'

const ONE_DAY_MS = 24 * 60 * 60 * 1000
const TOP_CARDS = 6
const TOP_KEYWORDS = 8
const RISING_LIST = 6
const RISING_MIN = 2     // ignore cards drawn fewer than N times in last 30d
const KEYWORDS_PER_CARD = 3  // first N upright keywords of each drawn card

/** Minimum total entries required before patterns are meaningful. */
export const MIN_ENTRIES_FOR_PATTERNS = 10

export interface PatternCardCount {
  slug: string
  name: string
  count: number
}

export interface PatternRising {
  slug: string
  name: string
  current: number   // last 30d
  previous: number  // 30–60d ago
  delta: number     // fraction, positive only in list
}

export interface PatternKeyword {
  keyword: string
  count: number
}

export interface JournalPatterns {
  total: number
  distinct: number
  /** First entry's date (oldest by sortKey). */
  firstDate: string | null
  top: PatternCardCount[]
  topLast30d: PatternCardCount[]
  rising: PatternRising[]
  keywords: PatternKeyword[]
}

/** Minimal entry shape — matches UnifiedEntry's relevant fields. */
export interface PatternsEntryInput {
  cards: string[]
  sortKey: string
}

/** Resolve a journal card display string to a Card, using the same
 *  cardByName lookup the JournalClient already builds. We tolerate
 *  "Position: Card Name (Reversed)" formats. */
function entryCardToCard(raw: string, cardByName: Map<string, Card>): Card | null {
  const reversedSuffix = ' (Reversed)'
  const reversedSuffixEs = ' (Invertida)'
  let s = raw
  if (s.endsWith(reversedSuffix)) s = s.slice(0, -reversedSuffix.length)
  else if (s.endsWith(reversedSuffixEs)) s = s.slice(0, -reversedSuffixEs.length)
  const colonAt = s.indexOf(': ')
  const cleanName = colonAt >= 0 ? s.slice(colonAt + 2) : s
  return cardByName.get(cleanName) ?? null
}

function entryTimestamp(e: PatternsEntryInput): number {
  const t = Date.parse(e.sortKey)
  return Number.isFinite(t) ? t : 0
}

/** Build the patterns document. `cardByName` is the Map JournalClient
 *  already maintains (locale-aware name → Card object). */
export function computeJournalPatterns(
  entries: PatternsEntryInput[],
  cardByName: Map<string, Card>,
): JournalPatterns {
  const now = Date.now()
  const lastThirtyStart = now - 30 * ONE_DAY_MS
  const prevThirtyStart = now - 60 * ONE_DAY_MS

  const countAll = new Map<string, number>()
  const countLast30 = new Map<string, number>()
  const countPrev30 = new Map<string, number>()
  const keywordCount = new Map<string, number>()
  const cardNames = new Map<string, string>()   // slug → display name
  let firstTs = Number.POSITIVE_INFINITY

  for (const entry of entries) {
    const ts = entryTimestamp(entry)
    if (ts > 0 && ts < firstTs) firstTs = ts
    const inLast30 = ts > 0 && ts >= lastThirtyStart
    const inPrev30 = ts > 0 && ts >= prevThirtyStart && ts < lastThirtyStart

    for (const raw of entry.cards) {
      const card = entryCardToCard(raw, cardByName)
      if (!card) continue
      const slug = card.slug
      cardNames.set(slug, card.name)
      countAll.set(slug, (countAll.get(slug) ?? 0) + 1)
      if (inLast30) countLast30.set(slug, (countLast30.get(slug) ?? 0) + 1)
      if (inPrev30) countPrev30.set(slug, (countPrev30.get(slug) ?? 0) + 1)
      for (const kw of card.kw_up.slice(0, KEYWORDS_PER_CARD)) {
        const k = kw.trim().toLowerCase()
        if (k.length === 0) continue
        keywordCount.set(k, (keywordCount.get(k) ?? 0) + 1)
      }
    }
  }

  function topCardsFrom(m: Map<string, number>, n: number): PatternCardCount[] {
    return Array.from(m.entries(), ([slug, count]) => ({
      slug,
      name: cardNames.get(slug) ?? slug,
      count,
    }))
      .sort((a, b) => b.count - a.count || a.slug.localeCompare(b.slug))
      .slice(0, n)
  }

  const rising: PatternRising[] = []
  Array.from(countLast30.entries()).forEach(([slug, current]) => {
    if (current < RISING_MIN) return
    const previous = countPrev30.get(slug) ?? 0
    const delta = previous === 0 ? 1 : (current - previous) / previous
    if (delta > 0) {
      rising.push({
        slug,
        name: cardNames.get(slug) ?? slug,
        current,
        previous,
        delta,
      })
    }
  })
  rising.sort((a, b) => b.delta - a.delta || b.current - a.current)

  const keywords: PatternKeyword[] = Array.from(keywordCount.entries(), ([keyword, count]) => ({ keyword, count }))
  keywords.sort((a, b) => b.count - a.count || a.keyword.localeCompare(b.keyword))

  return {
    total: entries.length,
    distinct: countAll.size,
    firstDate: firstTs === Number.POSITIVE_INFINITY ? null : new Date(firstTs).toISOString(),
    top:        topCardsFrom(countAll,      TOP_CARDS),
    topLast30d: topCardsFrom(countLast30,   TOP_CARDS),
    rising:     rising.slice(0, RISING_LIST),
    keywords:   keywords.slice(0, TOP_KEYWORDS),
  }
}
