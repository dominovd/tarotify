// ════════════════════════════════════════════════════════════════════════════
// /trends — public trends page sourced from public.trends_snapshot
// ════════════════════════════════════════════════════════════════════════════
//
// Renders the latest aggregated card-draw stats from the compute-trends
// cron. Server-rendered, ISR every 30 min so day-to-day visitors hit a
// pre-built HTML page without re-querying Supabase on every request.
//
// Sections shown:
//   - Top cards drawn this week (last 7d)
//   - Top cards drawn this month (last 30d)
//   - Cards trending up vs the prior week
//   - Frequent card pairings (multi-card spreads, last 30d)
//   - All-time top cards across the project
//
// When no snapshot exists yet (fresh install / cron hasn't run / data is
// still accruing post-migration), the page shows a friendly "data is
// accruing" placeholder rather than 500-ing.
// ════════════════════════════════════════════════════════════════════════════

import type { Metadata } from 'next'
import Link from 'next/link'
import { CARDS_BY_SLUG } from '@/lib/cards'
import { loadLatestSnapshot, type TrendsSnapshot } from '@/lib/trends/compute'

export const revalidate = 1800 // 30 minutes — snapshot only changes once a day

export const metadata: Metadata = {
  title: 'Tarot Trends — Most Drawn Cards This Week | TarotAxis',
  description:
    'Live tarot trends from across TarotAxis: most-drawn cards this week, trending archetypes, and frequent card pairings. Updated daily from real reading data — unique to TarotAxis.',
  alternates: {
    canonical: 'https://tarotaxis.com/trends',
    languages: {
      en: 'https://tarotaxis.com/trends',
      es: 'https://tarotaxis.com/es/tendencias',
      'x-default': 'https://tarotaxis.com/trends',
    },
  },
  openGraph: {
    title: 'Tarot Trends — Most Drawn Cards This Week',
    description:
      'What the deck has been saying lately. Most-drawn cards, trending archetypes, and frequent pairings — updated daily from real TarotAxis readings.',
    type: 'website',
    url: 'https://tarotaxis.com/trends',
  },
}

// ─── helpers ───────────────────────────────────────────────────────────────

function cardName(slug: string): string {
  return CARDS_BY_SLUG[slug]?.name ?? slug
}

function fmtPct(delta: number): string {
  const pct = Math.round(delta * 100)
  return `+${pct}%`
}

function dateRange(start: string): string {
  const from = new Date(start)
  const to = new Date()
  const fmt = (d: Date) =>
    d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
  return `${fmt(from)} – ${fmt(to)}`
}

// ─── page ─────────────────────────────────────────────────────────────────

export default async function TrendsPage() {
  const snapshot = await loadLatestSnapshot()

  return (
    <div style={{ maxWidth: 880, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

      <Header snapshot={snapshot} />

      {snapshot
        ? <SnapshotBody snapshot={snapshot} />
        : <NoDataYet />
      }

      <Methodology />
    </div>
  )
}

// ─── header ────────────────────────────────────────────────────────────────

function Header({ snapshot }: { snapshot: TrendsSnapshot | null }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
      <div style={{ fontSize: '.66rem', letterSpacing: '.22em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
        Tarot Trends
      </div>
      <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '.6rem' }}>
        What the deck is saying lately
      </h1>
      <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, maxWidth: 540, margin: '0 auto' }}>
        Live signals from the readings happening across TarotAxis right now —
        which cards keep showing up, which archetypes are rising, and which
        pairings the deck has been laying out together. Recomputed daily from
        anonymous draw data.
      </p>
      {snapshot && (
        <p style={{ color: 'var(--muted)', fontSize: '.72rem', opacity: .55, marginTop: '.9rem' }}>
          Updated {new Date(snapshot.computedAt).toLocaleString('en-GB', {
            day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit',
          })} UTC · {snapshot.totals.readings30d.toLocaleString('en-GB')} readings
          analysed in the last 30 days
        </p>
      )}
    </div>
  )
}

// ─── snapshot body ─────────────────────────────────────────────────────────

function SnapshotBody({ snapshot }: { snapshot: TrendsSnapshot }) {
  return (
    <>
      <TopCards
        title="Most drawn this week"
        subtitle={dateRange(snapshot.windows.sevenDayStart)}
        items={snapshot.topCards7d.slice(0, 10)}
      />

      <TrendingUp items={snapshot.trendingUp} />

      <TopPairs items={snapshot.topCombinations30d} />

      <TopCards
        title="Most drawn this month"
        subtitle={dateRange(snapshot.windows.thirtyDayStart)}
        items={snapshot.topCards30d.slice(0, 10)}
      />

      <TopCards
        title="All-time most drawn"
        subtitle="Since TarotAxis launched"
        items={snapshot.topCardsAll.slice(0, 10)}
      />

      <Sources items={snapshot.sources30d} />
    </>
  )
}

// ─── reusable section heading ──────────────────────────────────────────────

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .6, textTransform: 'uppercase', marginBottom: '.35rem' }}>
        {title}
      </div>
      {subtitle && (
        <div style={{ color: 'var(--muted)', fontSize: '.72rem', opacity: .55 }}>
          {subtitle}
        </div>
      )}
    </div>
  )
}

// ─── top cards (bar list) ──────────────────────────────────────────────────

function TopCards({
  title, subtitle, items,
}: {
  title: string
  subtitle?: string
  items: { slug: string; count: number }[]
}) {
  if (items.length === 0) return null
  const max = items[0]!.count

  return (
    <section style={{ marginBottom: '2.5rem', background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem' }}>
      <SectionHeading title={title} subtitle={subtitle} />
      <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
        {items.map((item, i) => {
          const ratio = max > 0 ? item.count / max : 0
          return (
            <li key={item.slug} style={{ display: 'grid', gridTemplateColumns: '1.4rem 1fr auto', gap: '.75rem', alignItems: 'center', padding: '.4rem 0' }}>
              <span style={{ color: 'var(--muted)', fontSize: '.72rem', opacity: .55, fontFamily: "'Cinzel',serif", textAlign: 'right' }}>
                {i + 1}
              </span>
              <Link
                href={`/cards/${item.slug}`}
                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
              >
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.84rem', color: 'var(--gold)', marginBottom: '.25rem' }}>
                  {cardName(item.slug)}
                </div>
                <div style={{ height: 4, borderRadius: 4, background: 'var(--on-bg-04)', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${ratio * 100}%`, background: 'var(--gold)', opacity: .55 }} />
                </div>
              </Link>
              <span style={{ color: 'var(--muted)', fontSize: '.78rem', minWidth: '3ch', textAlign: 'right' }}>
                {item.count}
              </span>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

// ─── trending up (delta list) ──────────────────────────────────────────────

function TrendingUp({
  items,
}: {
  items: { slug: string; current: number; previous: number; delta: number }[]
}) {
  if (items.length === 0) return null
  return (
    <section style={{ marginBottom: '2.5rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.18)', borderRadius: 14, padding: '1.5rem' }}>
      <SectionHeading title="Rising this week" subtitle="Cards drawn more than last week" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '.6rem' }}>
        {items.map(item => (
          <Link key={item.slug} href={`/cards/${item.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 10, padding: '.75rem .9rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '.5rem' }}>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)' }}>
                  {cardName(item.slug)}
                </div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.74rem', color: 'var(--gold)', opacity: .85 }}>
                  {fmtPct(item.delta)}
                </div>
              </div>
              <div style={{ marginTop: '.3rem', color: 'var(--muted)', fontSize: '.7rem', opacity: .65 }}>
                {item.previous} → {item.current} draws
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

// ─── pair leaderboard ──────────────────────────────────────────────────────

function TopPairs({
  items,
}: {
  items: { slugs: [string, string]; count: number }[]
}) {
  if (items.length === 0) return null
  return (
    <section style={{ marginBottom: '2.5rem', background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem' }}>
      <SectionHeading title="Frequent pairings" subtitle="Cards that keep showing up together — last 30 days" />
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
        {items.map(({ slugs, count }) => {
          const [a, b] = slugs
          return (
            <li key={`${a}|${b}`} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '.75rem', alignItems: 'center', padding: '.5rem 0', borderBottom: '1px solid var(--border)' }}>
              <Link
                href={`/combination/${a}/${b}`}
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '.5rem', flexWrap: 'wrap' }}
              >
                <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)' }}>{cardName(a)}</span>
                <span style={{ color: 'var(--muted)', opacity: .45 }}>+</span>
                <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)' }}>{cardName(b)}</span>
              </Link>
              <span style={{ color: 'var(--muted)', fontSize: '.78rem', minWidth: '3ch', textAlign: 'right' }}>
                {count}×
              </span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

// ─── source breakdown (small pill row) ─────────────────────────────────────

const SOURCE_LABEL: Record<string, string> = {
  'free-reading': 'Free reading',
  'reading-analysis': 'Reading analysis',
  saved: 'Saved journal',
  unknown: 'Other',
}

function Sources({ items }: { items: { source: string; count: number }[] }) {
  if (items.length === 0) return null
  const total = items.reduce((acc, s) => acc + s.count, 0)
  return (
    <section style={{ marginBottom: '2.5rem' }}>
      <SectionHeading title="Where readings come from" subtitle="Last 30 days" />
      <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        {items.map(s => {
          const pct = total > 0 ? Math.round((s.count / total) * 100) : 0
          return (
            <span key={s.source} style={{ padding: '.35rem .8rem', borderRadius: 20, fontSize: '.72rem', fontFamily: "'Cinzel',serif", letterSpacing: '.06em', background: 'var(--on-bg-04)', color: 'var(--muted)', border: '1px solid var(--border)' }}>
              {SOURCE_LABEL[s.source] ?? s.source} · {pct}%
            </span>
          )
        })}
      </div>
    </section>
  )
}

// ─── methodology block ────────────────────────────────────────────────────

function Methodology() {
  return (
    <section style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 12 }}>
      <SectionHeading title="How this page is built" />
      <p style={{ color: 'var(--muted)', fontSize: '.82rem', lineHeight: 1.8, margin: 0 }}>
        Every reading on TarotAxis logs the cards drawn (slug + orientation
        only — never the question, never the interpretation). A daily cron job
        aggregates the last 30 days of draws and writes a single snapshot to
        the database. This page reads that snapshot, so what you see here
        reflects the actual collective experience of the site — not a
        marketing list. Data accrues over time; rare cards and newly
        launched spreads need a few days to show up.{' '}
        <Link href="/methodology" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
          Read our full methodology
        </Link>.
      </p>
    </section>
  )
}

// ─── empty state ──────────────────────────────────────────────────────────

function NoDataYet() {
  return (
    <section style={{ background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 14, padding: '2rem', textAlign: 'center' }}>
      <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.8, margin: 0 }}>
        The trends snapshot is still being assembled. Check back tomorrow —
        the daily cron runs at 00:15 UTC. In the meantime, you can{' '}
        <Link href="/free-reading" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
          draw your own three-card spread
        </Link>{' '}
        and contribute to the next snapshot.
      </p>
    </section>
  )
}
