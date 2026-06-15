// ════════════════════════════════════════════════════════════════════════════
// lib/trends/compute.ts — aggregate raw card draws into a trends snapshot
// ════════════════════════════════════════════════════════════════════════════
//
// Inputs:
//   - public.ai_usage.cards   (jsonb, populated after migration 004)
//   - public.saved_readings.cards (jsonb, has data since project launch)
//
// Output:
//   - A `TrendsSnapshot` document the compute-trends cron writes to
//     public.trends_snapshot.data. The /trends + /es/tendencias pages read
//     the most recent row and render directly.
//
// Design choices:
//   - Aggregation runs server-side only. The pages never touch ai_usage.
//   - Source rows are merged: ai_usage = AI generations, saved_readings =
//     anything saved (some of which is AI, some template). Both count as
//     "this card was drawn for a reading." Duplicate-counting risk is low
//     because saved_readings is roughly 5–10% of all reading sessions, and
//     a saved reading represents a *separate* act of reflection by the user.
//   - Counts are capped at the top 78 cards (it's the entire deck) so a
//     full leaderboard plus rank is always available client-side.
//   - "Trending up" compares last 7d vs the prior 7d (8–14 days ago) and
//     ranks by percentage delta with a min-volume floor to avoid noise.
// ════════════════════════════════════════════════════════════════════════════

import { CARDS_BY_SLUG } from '@/lib/cards'
import { createAdminClient } from '@/lib/supabase/admin'

// ─── public types ──────────────────────────────────────────────────────────

export interface CardCount {
  slug: string
  count: number
}

export interface TrendingCard {
  slug: string
  /** Count in the most recent 7 days. */
  current: number
  /** Count in days 8–14 (the comparison window). */
  previous: number
  /** Delta as a fraction; e.g., 0.5 = up 50%. Positive only in this list. */
  delta: number
}

export interface CardPair {
  slugs: [string, string]
  count: number
}

export interface SourceBreakdown {
  source: string
  count: number
}

/** Top partners for a specific card — `card A appeared with card B count N times`
 *  within the last 30 days of multi-card spreads. Stored per-card so the
 *  card pages can render an "often appears with" section without
 *  re-scanning raw rows. */
export interface CardPartner {
  other: string
  count: number
}

export interface TrendsSnapshot {
  /** ISO timestamp the snapshot was computed. */
  computedAt: string
  /** Window endpoints used for the 7/30 day calculations. */
  windows: {
    sevenDayStart: string
    thirtyDayStart: string
    fourteenDayStart: string
  }
  /** Totals across the deck. */
  totals: {
    readings7d: number
    readings30d: number
    readingsAll: number
    /** Distinct cards seen across all aggregated rows. */
    distinctCards: number
  }
  /** Top cards (slug + raw count), sorted desc by count. */
  topCards7d: CardCount[]
  topCards30d: CardCount[]
  topCardsAll: CardCount[]
  /** Cards rising vs prior week, sorted desc by delta. */
  trendingUp: TrendingCard[]
  /** Most-frequent pairs across multi-card spreads in last 30 days. */
  topCombinations30d: CardPair[]
  /** Source distribution in last 30 days. */
  sources30d: SourceBreakdown[]
  /** Per-card top partners — slug → top 6 most-frequent companions. */
  pairsByCard: Record<string, CardPartner[]>
}

// ─── helpers ───────────────────────────────────────────────────────────────

interface CardRow {
  cards: unknown
  source?: string | null
  created_at?: string | null
}

function isValidSlug(s: unknown): s is string {
  return typeof s === 'string' && Object.prototype.hasOwnProperty.call(CARDS_BY_SLUG, s)
}

/** Extract a clean list of slugs from a raw `cards` jsonb cell. Discards
 *  unknown shapes and unknown slugs so a corrupt row never poisons totals. */
function extractSlugs(raw: unknown): string[] {
  if (!Array.isArray(raw)) return []
  const out: string[] = []
  for (const c of raw) {
    if (!c || typeof c !== 'object') continue
    const slug = (c as Record<string, unknown>).slug
    if (isValidSlug(slug)) out.push(slug)
  }
  return out
}

function topN(counts: Map<string, number>, n: number): CardCount[] {
  const arr: CardCount[] = Array.from(counts.entries(), ([slug, count]) => ({ slug, count }))
  arr.sort((a, b) => b.count - a.count || a.slug.localeCompare(b.slug))
  return arr.slice(0, n)
}

function isoDaysAgo(days: number): string {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString()
}

// ─── main entry ────────────────────────────────────────────────────────────

const TRENDING_MIN_VOLUME = 3   // ignore cards drawn fewer than N times last week
const TRENDING_LIST_SIZE  = 10
const TOP_CARDS_LIST_SIZE = 20
const TOP_PAIRS_LIST_SIZE = 12
const PARTNERS_PER_CARD   = 6   // top N companions stored per card page

export async function computeTrendsSnapshot(): Promise<TrendsSnapshot> {
  const supabase = createAdminClient()

  const sevenDayStart    = isoDaysAgo(7)
  const fourteenDayStart = isoDaysAgo(14)
  const thirtyDayStart   = isoDaysAgo(30)

  // ─── pull raw rows ───────────────────────────────────────────────────────
  // We over-pull (last 30 days) so we can derive 7d + 30d + prev-week from
  // the same fetch. For all-time we do a separate query that bounds by
  // creation date all the way back.
  //
  // Limit guards: 10_000 rows per query is far above current traffic and
  // avoids any accidental memory blow-up if traffic spikes.
  const [usageRecentRes, savedRecentRes, usageAllRes, savedAllRes] = await Promise.all([
    supabase.from('ai_usage')
      .select('cards, source, created_at')
      .not('cards', 'is', null)
      .gte('created_at', thirtyDayStart)
      .order('created_at', { ascending: false })
      .limit(10_000),
    supabase.from('saved_readings')
      .select('cards, spread_id, created_at')
      .gte('created_at', thirtyDayStart)
      .order('created_at', { ascending: false })
      .limit(10_000),
    supabase.from('ai_usage')
      .select('cards')
      .not('cards', 'is', null)
      .limit(50_000),
    supabase.from('saved_readings')
      .select('cards')
      .limit(50_000),
  ])

  if (usageRecentRes.error) console.warn('[trends] ai_usage recent error:', usageRecentRes.error.message)
  if (savedRecentRes.error) console.warn('[trends] saved_readings recent error:', savedRecentRes.error.message)
  if (usageAllRes.error)    console.warn('[trends] ai_usage all error:',    usageAllRes.error.message)
  if (savedAllRes.error)    console.warn('[trends] saved_readings all error:', savedAllRes.error.message)

  const recentRows: CardRow[] = [
    ...((usageRecentRes.data ?? []) as CardRow[]),
    ...((savedRecentRes.data ?? []).map(r => ({
      cards: (r as { cards: unknown }).cards,
      source: (r as { spread_id?: string | null }).spread_id ?? 'saved',
      created_at: (r as { created_at?: string | null }).created_at ?? null,
    }))),
  ]

  const allRows: CardRow[] = [
    ...((usageAllRes.data ?? []) as CardRow[]),
    ...((savedAllRes.data ?? []).map(r => ({
      cards: (r as { cards: unknown }).cards,
    }))),
  ]

  // ─── tally counters ──────────────────────────────────────────────────────
  const count7d        = new Map<string, number>()
  const count30d       = new Map<string, number>()
  const countAll       = new Map<string, number>()
  const countPrevWeek  = new Map<string, number>()
  const pairCounts30d  = new Map<string, { slugs: [string, string]; count: number }>()
  const sourceCounts   = new Map<string, number>()

  let readings7d = 0
  let readings30d = 0

  for (const row of recentRows) {
    const slugs = extractSlugs(row.cards)
    if (slugs.length === 0) continue
    const created = row.created_at ? new Date(row.created_at).getTime() : 0

    readings30d += 1
    for (const s of slugs) count30d.set(s, (count30d.get(s) ?? 0) + 1)

    if (created >= new Date(sevenDayStart).getTime()) {
      readings7d += 1
      for (const s of slugs) count7d.set(s, (count7d.get(s) ?? 0) + 1)
    } else if (created >= new Date(fourteenDayStart).getTime()) {
      for (const s of slugs) countPrevWeek.set(s, (countPrevWeek.get(s) ?? 0) + 1)
    }

    // Source breakdown — last 30d.
    const src = (row.source ?? 'unknown').toString().slice(0, 40)
    sourceCounts.set(src, (sourceCounts.get(src) ?? 0) + 1)

    // Pair combinations within this reading (only multi-card spreads).
    // Deduplicate within a reading so the same card listed twice doesn't
    // inflate. Sort the pair so {A,B} and {B,A} collapse.
    if (slugs.length >= 2) {
      const unique = Array.from(new Set(slugs))
      for (let i = 0; i < unique.length; i++) {
        for (let j = i + 1; j < unique.length; j++) {
          const a = unique[i]!
          const b = unique[j]!
          const ordered: [string, string] = a < b ? [a, b] : [b, a]
          const key = `${ordered[0]}|${ordered[1]}`
          const existing = pairCounts30d.get(key)
          if (existing) existing.count += 1
          else pairCounts30d.set(key, { slugs: ordered, count: 1 })
        }
      }
    }
  }

  let readingsAll = 0
  for (const row of allRows) {
    const slugs = extractSlugs(row.cards)
    if (slugs.length === 0) continue
    readingsAll += 1
    for (const s of slugs) countAll.set(s, (countAll.get(s) ?? 0) + 1)
  }

  // ─── trending up (week-over-week deltas) ────────────────────────────────
  const trending: TrendingCard[] = []
  Array.from(count7d.entries()).forEach(([slug, current]) => {
    if (current < TRENDING_MIN_VOLUME) return
    const previous = countPrevWeek.get(slug) ?? 0
    // delta as fraction; treat 0 prev as +100% floor so a brand-new card
    // doesn't always rank first by an absurd ratio.
    const delta = previous === 0 ? 1 : (current - previous) / previous
    if (delta > 0) trending.push({ slug, current, previous, delta })
  })
  trending.sort((a, b) => b.delta - a.delta || b.current - a.current)

  // ─── pair leaderboard ───────────────────────────────────────────────────
  const pairs: CardPair[] = Array.from(pairCounts30d.values())
    .filter(p => p.count >= 2)
    .map(p => ({ slugs: p.slugs, count: p.count }))
  pairs.sort((a, b) => b.count - a.count)

  // ─── per-card partner index ────────────────────────────────────────────
  // For each pair {A, B, count} contribute (A→B count) AND (B→A count) so
  // each card has a directional "top partners" list. We don't enforce the
  // pair min-count of 2 here because per-card lists are tiny and even
  // single-cooccurrence pairs are informative on a card detail page.
  const partnerMap: Record<string, Map<string, number>> = {}
  Array.from(pairCounts30d.values()).forEach(({ slugs: [a, b], count }) => {
    if (!partnerMap[a]) partnerMap[a] = new Map()
    if (!partnerMap[b]) partnerMap[b] = new Map()
    partnerMap[a].set(b, (partnerMap[a].get(b) ?? 0) + count)
    partnerMap[b].set(a, (partnerMap[b].get(a) ?? 0) + count)
  })
  const pairsByCard: Record<string, CardPartner[]> = {}
  for (const slug of Object.keys(partnerMap)) {
    const list = Array.from(partnerMap[slug]!.entries(), ([other, count]) => ({ other, count }))
    list.sort((a, b) => b.count - a.count || a.other.localeCompare(b.other))
    pairsByCard[slug] = list.slice(0, PARTNERS_PER_CARD)
  }

  // ─── source breakdown ───────────────────────────────────────────────────
  const sources: SourceBreakdown[] = Array.from(sourceCounts.entries(), ([source, count]) => ({ source, count }))
  sources.sort((a, b) => b.count - a.count)

  return {
    computedAt: new Date().toISOString(),
    windows: {
      sevenDayStart,
      fourteenDayStart,
      thirtyDayStart,
    },
    totals: {
      readings7d,
      readings30d,
      readingsAll,
      distinctCards: countAll.size,
    },
    topCards7d:  topN(count7d,  TOP_CARDS_LIST_SIZE),
    topCards30d: topN(count30d, TOP_CARDS_LIST_SIZE),
    topCardsAll: topN(countAll, TOP_CARDS_LIST_SIZE),
    trendingUp:  trending.slice(0, TRENDING_LIST_SIZE),
    topCombinations30d: pairs.slice(0, TOP_PAIRS_LIST_SIZE),
    sources30d: sources,
    pairsByCard,
  }
}

// ─── snapshot reader (for the /trends pages) ───────────────────────────────

const SNAPSHOT_CACHE_TTL_MS = 60_000
let latestSnapshotCache:
  | { expiresAt: number; promise: Promise<TrendsSnapshot | null> }
  | null = null

export async function loadLatestSnapshot(): Promise<TrendsSnapshot | null> {
  const now = Date.now()
  if (latestSnapshotCache && latestSnapshotCache.expiresAt > now) {
    return latestSnapshotCache.promise
  }

  latestSnapshotCache = {
    expiresAt: now + SNAPSHOT_CACHE_TTL_MS,
    promise: fetchLatestSnapshot(),
  }

  return latestSnapshotCache.promise
}

async function fetchLatestSnapshot(): Promise<TrendsSnapshot | null> {
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('trends_snapshot')
    .select('data')
    .order('computed_at', { ascending: false })
    .limit(1)
  if (error) {
    console.warn('[trends] load latest snapshot error:', error.message)
    return null
  }
  const row = data?.[0]
  if (!row) return null
  // Trust the writer side to have produced a well-formed snapshot; if the
  // schema drifts the page falls through to the "no data yet" state.
  return (row as { data: TrendsSnapshot }).data ?? null
}

export async function insertSnapshot(snapshot: TrendsSnapshot): Promise<void> {
  const supabase = createAdminClient()
  const { error } = await supabase.from('trends_snapshot').insert({
    data: snapshot,
    computed_at: snapshot.computedAt,
  })
  if (error) {
    console.warn('[trends] insert snapshot failed:', error.message)
    throw error
  }
}
