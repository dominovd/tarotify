import type { Metadata } from 'next'
import Link from 'next/link'
import CombinationClient from './CombinationClient'
import { CARDS, CARDS_BY_SLUG } from '@/lib/cards'
import { makeComboSlug } from '@/lib/combinations'

export const metadata: Metadata = {
  title: 'Tarot Card Combination Calculator — What Two Cards Mean Together | TarotAxis',
  description: 'Discover what any two tarot cards mean together. Select any combination and get an instant interpretation across love, career and personal growth.',
  alternates: {
    canonical: 'https://tarotaxis.com/combination',
    languages: {
      'en': 'https://tarotaxis.com/combination',
      'es': 'https://tarotaxis.com/es/combinaciones',
      'x-default': 'https://tarotaxis.com/combination',
    },
  },
}

const TOP_MAJOR = [
  'the-fool', 'the-magician', 'the-high-priestess', 'the-empress',
  'the-emperor', 'the-lovers', 'the-chariot', 'strength',
  'the-hermit', 'wheel-of-fortune', 'justice', 'death',
  'the-devil', 'the-tower', 'the-star', 'the-moon', 'the-sun', 'the-world',
]

const SUITS = [
  { key: 'wands',     label: 'Wands' },
  { key: 'cups',      label: 'Cups' },
  { key: 'swords',    label: 'Swords' },
  { key: 'pentacles', label: 'Pentacles' },
] as const

const COURT_RANKS = ['Page', 'Knight', 'Queen', 'King'] as const

const POPULAR_PIPS = [
  'two-of-cups', 'three-of-cups', 'six-of-cups', 'nine-of-cups', 'ten-of-cups',
  'three-of-swords', 'five-of-cups', 'eight-of-cups',
  'three-of-pentacles', 'nine-of-pentacles', 'ten-of-pentacles',
  'eight-of-wands', 'three-of-wands', 'ten-of-wands',
  'two-of-swords', 'eight-of-swords', 'ten-of-swords', 'five-of-pentacles',
]

function getMajorPairs(minorSlug: string, count = 9) {
  return TOP_MAJOR.slice(0, count).map(majSlug => ({
    comboSlug: makeComboSlug(minorSlug, majSlug),
    majName: CARDS_BY_SLUG[majSlug]?.name ?? majSlug,
  }))
}

function CardRow({ slug, pairCount = 9 }: { slug: string; pairCount?: number }) {
  const card = CARDS_BY_SLUG[slug]
  if (!card) return null
  const pairs = getMajorPairs(slug, pairCount)
  return (
    <div style={{ padding: '.85rem 1rem', background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 10, marginBottom: '.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', marginBottom: '.65rem' }}>
        {/* eslint-disable-next-line */}
        <img src={`/cards/${slug}.webp`} alt={card.name} style={{ width: 24, height: 38, objectFit: 'cover', borderRadius: 3, border: '1px solid rgba(201,168,76,.2)', flexShrink: 0 }} />
        <span style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem' }}>{card.name}</span>
        <span style={{ color: 'var(--muted)', fontSize: '.7rem' }}>{card.element}</span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.35rem' }}>
        {pairs.map(({ comboSlug, majName }) => (
          <Link
            key={comboSlug}
            href={`/combination/${comboSlug}`}
            style={{ padding: '.22rem .6rem', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 100, color: 'var(--muted)', fontSize: '.73rem', textDecoration: 'none', fontFamily: "'Cinzel',serif", letterSpacing: '.03em', whiteSpace: 'nowrap' }}
          >
            + {majName}
          </Link>
        ))}
      </div>
    </div>
  )
}

const detailsStyle: React.CSSProperties = {
  background: 'var(--on-bg-025)',
  border: '1px solid var(--border)',
  borderRadius: 12,
  marginBottom: '1rem',
  overflow: 'hidden',
}

const summaryStyle: React.CSSProperties = {
  padding: '1rem 1.25rem',
  cursor: 'pointer',
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontFamily: "'Cinzel',serif",
  color: 'var(--gold)',
  fontSize: '.95rem',
  letterSpacing: '.06em',
  userSelect: 'none',
}

export default function CombinationPage() {
  return (
    <>
      <CombinationClient />

      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 1.5rem 6rem' }}>
        <div style={{ borderTop: '1px solid rgba(201,168,76,.12)', paddingTop: '3.5rem' }}>

          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.25rem', letterSpacing: '.07em', margin: '0 0 .6rem' }}>
              Minor Arcana Combinations
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, maxWidth: 500, margin: '0 auto' }}>
              How Aces, court cards and key pip cards interact with the Major Arcana.
            </p>
          </div>

          {/* Aces */}
          <details style={detailsStyle}>
            <summary style={summaryStyle}>
              <span>Aces &amp; Major Arcana</span>
              <span style={{ opacity: .4, fontSize: '.75rem' }}>4 cards · {4 * 9} combinations ▾</span>
            </summary>
            <div style={{ padding: '0 1rem 1rem' }}>
              {SUITS.map(({ key }) => (
                <CardRow key={key} slug={`ace-of-${key}`} pairCount={9} />
              ))}
            </div>
          </details>

          {/* Courts */}
          {COURT_RANKS.map(rank => (
            <details key={rank} style={detailsStyle}>
              <summary style={summaryStyle}>
                <span>{rank}s &amp; Major Arcana</span>
                <span style={{ opacity: .4, fontSize: '.75rem' }}>4 cards · {4 * 8} combinations ▾</span>
              </summary>
              <div style={{ padding: '0 1rem 1rem' }}>
                {SUITS.map(({ key }) => (
                  <CardRow key={key} slug={`${rank.toLowerCase()}-of-${key}`} pairCount={8} />
                ))}
              </div>
            </details>
          ))}

          {/* Popular pips */}
          <details style={detailsStyle}>
            <summary style={summaryStyle}>
              <span>Popular Pip Cards</span>
              <span style={{ opacity: .4, fontSize: '.75rem' }}>{POPULAR_PIPS.length} cards ▾</span>
            </summary>
            <div style={{ padding: '0 1rem 1rem' }}>
              {POPULAR_PIPS.map(slug => (
                <CardRow key={slug} slug={slug} pairCount={6} />
              ))}
            </div>
          </details>

        </div>
      </div>

      <style>{`
        details > summary::-webkit-details-marker { display: none; }
        details[open] > summary { border-bottom: 1px solid var(--border); }
      `}</style>
    </>
  )
}
