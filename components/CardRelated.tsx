// ════════════════════════════════════════════════════════════════════════════
// CardRelated — knowledge-graph block for /cards/{slug} pages
// ════════════════════════════════════════════════════════════════════════════
//
// Renders up to four sections relating the current card to other cards in
// the deck. Designed to live near the bottom of the card page, above the
// combinations grid.
//
//   1. "Often appears with" — from trends_snapshot.pairsByCard[slug].
//      Surfaces the unique-to-TarotAxis data layer. Skipped if empty
//      (rare card / pre-cron / no recent multi-card spreads).
//   2. "Same number/rank" — structural relationship (pip + court only).
//   3. "Same element" — Fire/Water/Air/Earth resonance.
//   4. "More from the suit" — sibling cards in the same suit.
//
// Pure presentational component — receives `pairs` already resolved by the
// caller so it doesn't need DB access. Both EN and ES card pages render
// the same component with a different `locale`.
// ════════════════════════════════════════════════════════════════════════════

import Image from 'next/image'
import Link from 'next/link'
import { CARDS_BY_SLUG, type Card } from '@/lib/cards'
import {
  ELEMENT_LABELS_ES,
  RANK_LABELS_ES,
  RELATION_LABELS,
  majorPrevNext,
  relatedByElement,
  relatedByNumber,
  relatedBySuit,
} from '@/lib/cards/related'
import { localizeCardSlug } from '@/lib/i18n/slugs'
import cardsEsRaw from '@/messages/es/cards.json'

interface EsCardRecord { name?: string; suitLabel?: string }
const cardsEs = cardsEsRaw as Record<string, EsCardRecord>

export interface RelatedPair {
  other: string
  count: number
}

interface Props {
  card: Card
  locale: 'en' | 'es'
  /** Pre-loaded partner list from trends_snapshot.pairsByCard[card.slug]. */
  pairs?: RelatedPair[]
}

// ─── helpers ──────────────────────────────────────────────────────────────

function cardHref(slug: string, locale: 'en' | 'es'): string {
  if (locale === 'es') return `/es/cartas/${localizeCardSlug(slug, 'es')}`
  return `/cards/${slug}`
}

function cardName(slug: string, locale: 'en' | 'es'): string {
  if (locale === 'es') return cardsEs[slug]?.name ?? CARDS_BY_SLUG[slug]?.name ?? slug
  return CARDS_BY_SLUG[slug]?.name ?? slug
}

function suitLabel(card: Card, locale: 'en' | 'es'): string {
  if (locale === 'es') return cardsEs[card.slug]?.suitLabel ?? card.suitLabel
  return card.suitLabel
}

function elementLabel(element: string, locale: 'en' | 'es'): string {
  if (locale === 'es') return ELEMENT_LABELS_ES[element] ?? element
  return element
}

function rankLabel(number: string, locale: 'en' | 'es'): string {
  if (locale === 'es') return RANK_LABELS_ES[number] ?? number
  return number
}

// ─── shared row-of-cards renderer ─────────────────────────────────────────

function CardRow({
  cards, locale,
}: {
  cards: Card[]
  locale: 'en' | 'es'
}) {
  if (cards.length === 0) return null
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(170px,1fr))', gap: '.55rem' }}>
      {cards.map(c => (
        <Link
          key={c.slug}
          href={cardHref(c.slug, locale)}
          style={{ display: 'flex', alignItems: 'center', gap: '.6rem', padding: '.55rem .8rem', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 10, fontSize: '.82rem', color: 'var(--muted)', textDecoration: 'none' }}
        >
          <div style={{ position: 'relative', width: 22, height: 33, borderRadius: 3, overflow: 'hidden', flexShrink: 0 }}>
            <Image
              src={`/cards/${c.slug}.webp`}
              alt={cardName(c.slug, locale)}
              fill
              sizes="22px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <span style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)' }}>
            {cardName(c.slug, locale)}
          </span>
        </Link>
      ))}
    </div>
  )
}

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div style={{ marginBottom: '.85rem' }}>
      <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', margin: 0 }}>
        {title}
      </h2>
      {subtitle && (
        <div style={{ color: 'var(--muted)', fontSize: '.72rem', opacity: .55, marginTop: '.25rem' }}>
          {subtitle}
        </div>
      )}
    </div>
  )
}

// ─── main component ───────────────────────────────────────────────────────

export default function CardRelated({ card, locale, pairs }: Props) {
  const L = RELATION_LABELS[locale]

  const numberSiblings = relatedByNumber(card)
  const elementSiblings = relatedByElement(card, 6)
  const suitSiblings = relatedBySuit(card, 6)
  const { prev, next } = majorPrevNext(card)

  // Partner pairs — resolve slugs to actual Card objects, drop unknown slugs.
  const partnerCards = (pairs ?? [])
    .map(p => CARDS_BY_SLUG[p.other])
    .filter((c): c is Card => Boolean(c))

  // Pick the right rank-label form: court vs pip.
  const isCourt = ['Page', 'Knight', 'Queen', 'King'].includes(card.number)
  const numberHeading = isCourt
    ? L.sameNumberCourt(rankLabel(card.number, locale))
    : L.sameNumberPip(rankLabel(card.number, locale))

  const hasContent =
    partnerCards.length > 0
    || numberSiblings.length > 0
    || elementSiblings.length > 0
    || suitSiblings.length > 0
    || prev || next

  if (!hasContent) return null

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '2.5rem' }}>

      {/* ─── Often appears with (data-driven) ──────────────────────────── */}
      {partnerCards.length > 0 && (
        <section style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <SectionHeading title={L.oftenAppearsWith} subtitle={L.oftenAppearsHelp} />
          <CardRow cards={partnerCards} locale={locale} />
        </section>
      )}

      {/* ─── Same number / rank ────────────────────────────────────────── */}
      {numberSiblings.length > 0 && (
        <section>
          <SectionHeading title={numberHeading} />
          <CardRow cards={numberSiblings} locale={locale} />
        </section>
      )}

      {/* ─── Same element ──────────────────────────────────────────────── */}
      {elementSiblings.length > 0 && (
        <section>
          <SectionHeading title={L.sameElement(elementLabel(card.element, locale))} />
          <CardRow cards={elementSiblings} locale={locale} />
        </section>
      )}

      {/* ─── More from the same suit ───────────────────────────────────── */}
      {suitSiblings.length > 0 && (
        <section>
          <SectionHeading title={L.moreFromSuit(suitLabel(card, locale))} />
          <CardRow cards={suitSiblings} locale={locale} />
        </section>
      )}

      {/* ─── Major Arcana journey ─────────────────────────────────────── */}
      {(prev || next) && (
        <section style={{ background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.25rem' }}>
          <SectionHeading title={L.journey} subtitle={L.journeyHelp} />
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '.75rem', flexWrap: 'wrap' }}>
            {prev ? (
              <Link href={cardHref(prev.slug, locale)} style={{ display: 'flex', alignItems: 'center', gap: '.6rem', padding: '.55rem .9rem', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontSize: '.82rem', textDecoration: 'none' }}>
                <span style={{ opacity: .5 }}>←</span>
                <span style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)' }}>{cardName(prev.slug, locale)}</span>
              </Link>
            ) : <span />}
            {next && (
              <Link href={cardHref(next.slug, locale)} style={{ display: 'flex', alignItems: 'center', gap: '.6rem', padding: '.55rem .9rem', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontSize: '.82rem', textDecoration: 'none' }}>
                <span style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)' }}>{cardName(next.slug, locale)}</span>
                <span style={{ opacity: .5 }}>→</span>
              </Link>
            )}
          </div>
        </section>
      )}

    </div>
  )
}
