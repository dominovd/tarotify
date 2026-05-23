// ════════════════════════════════════════════════════════════════════════════
// JournalPatterns — per-user pattern insights above the journal timeline
// ════════════════════════════════════════════════════════════════════════════
//
// Shown only when the user has accumulated at least MIN_ENTRIES_FOR_PATTERNS
// readings. Below the threshold there isn't enough signal — a couple of
// random pulls aren't a "pattern" of anything.
//
// All computation runs client-side from the same UnifiedEntry[] that
// JournalClient already holds. No new network round-trips, no DB schema.
// ════════════════════════════════════════════════════════════════════════════

'use client'

import Link from 'next/link'
import type { Card } from '@/lib/cards'
import { localizeCardSlug } from '@/lib/i18n/slugs'
import {
  computeJournalPatterns,
  MIN_ENTRIES_FOR_PATTERNS,
  type JournalPatterns as PatternsDoc,
  type PatternsEntryInput,
} from '@/lib/journal/patterns'

interface Props {
  entries: PatternsEntryInput[]
  cardByName: Map<string, Card>
  locale: 'en' | 'es'
}

// ─── locale-aware copy ────────────────────────────────────────────────────

interface PatternsCopy {
  eyebrow: string
  headline: (n: number) => string
  intro: (since: string) => string
  sinceShort: (date: string) => string
  notEnoughYet: (n: number) => string
  mostDrawnAllTime: string
  mostDrawnLast30: string
  recurringThemes: string
  recurringHelp: string
  risingThisMonth: string
  risingHelp: string
  rangePrev: (a: number, b: number) => string
  drawsLabel: (n: number) => string
  totalsLabel: (n: number, distinct: number) => string
  emptyKeywords: string
  ctaSuffix: string
}

const COPY: Record<'en' | 'es', PatternsCopy> = {
  en: {
    eyebrow: 'Your patterns',
    headline: (n: number) => `What the cards have been saying — across ${n} of your readings`,
    intro: (since: string) =>
      `These patterns are built only from your own saved readings, ${since}. They are private — only you see them.`,
    sinceShort: (date: string) => `starting ${date}`,
    notEnoughYet: (n: number) =>
      `Save ${MIN_ENTRIES_FOR_PATTERNS - n} more reading${MIN_ENTRIES_FOR_PATTERNS - n === 1 ? '' : 's'} to unlock your personal pattern view.`,
    mostDrawnAllTime: 'Most drawn — all time',
    mostDrawnLast30: 'Most drawn — last 30 days',
    recurringThemes: 'Recurring themes',
    recurringHelp: 'Keywords aggregated from every card you have drawn',
    risingThisMonth: 'Rising this month',
    risingHelp: 'Cards appearing more than in the prior 30 days',
    rangePrev: (a: number, b: number) => `${a} → ${b} draws`,
    drawsLabel: (n: number) => `${n} draw${n === 1 ? '' : 's'}`,
    totalsLabel: (n: number, distinct: number) =>
      `${n} reading${n === 1 ? '' : 's'} · ${distinct} distinct card${distinct === 1 ? '' : 's'} so far`,
    emptyKeywords: 'No themes yet — keep journalling.',
    ctaSuffix: '→',
  },
  es: {
    eyebrow: 'Tus patrones',
    headline: (n: number) => `Lo que las cartas vienen diciendo — a lo largo de ${n} de tus lecturas`,
    intro: (since: string) =>
      `Estos patrones se calculan solo desde tus propias lecturas guardadas, ${since}. Son privados — solo tú los ves.`,
    sinceShort: (date: string) => `desde ${date}`,
    notEnoughYet: (n: number) =>
      `Guarda ${MIN_ENTRIES_FOR_PATTERNS - n} lectura${MIN_ENTRIES_FOR_PATTERNS - n === 1 ? '' : 's'} más para desbloquear tu vista personal de patrones.`,
    mostDrawnAllTime: 'Más sacadas — de todos los tiempos',
    mostDrawnLast30: 'Más sacadas — últimos 30 días',
    recurringThemes: 'Temas recurrentes',
    recurringHelp: 'Palabras clave agregadas de cada carta que has sacado',
    risingThisMonth: 'En alza este mes',
    risingHelp: 'Cartas que aparecen más que en los 30 días anteriores',
    rangePrev: (a: number, b: number) => `${a} → ${b} tiradas`,
    drawsLabel: (n: number) => `${n} ${n === 1 ? 'tirada' : 'tiradas'}`,
    totalsLabel: (n: number, distinct: number) =>
      `${n} ${n === 1 ? 'lectura' : 'lecturas'} · ${distinct} cartas distintas hasta ahora`,
    emptyKeywords: 'Aún no hay temas — sigue escribiendo en el diario.',
    ctaSuffix: '→',
  },
}

// ─── helpers ───────────────────────────────────────────────────────────────

function fmtDate(iso: string, locale: 'en' | 'es'): string {
  try {
    return new Date(iso).toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-GB', {
      day: 'numeric', month: 'long', year: 'numeric',
    })
  } catch {
    return iso.slice(0, 10)
  }
}

function cardHref(slug: string, locale: 'en' | 'es'): string {
  if (locale === 'es') return `/es/cartas/${localizeCardSlug(slug, 'es')}`
  return `/cards/${slug}`
}

function fmtPct(delta: number): string {
  return `+${Math.round(delta * 100)}%`
}

// ─── main component ───────────────────────────────────────────────────────

export default function JournalPatterns({ entries, cardByName, locale }: Props) {
  const t = COPY[locale]
  const n = entries.length

  // Below the threshold, render a tiny teaser so the feature is at least
  // visible — it gives motivation to keep journalling.
  if (n < MIN_ENTRIES_FOR_PATTERNS) {
    return (
      <section style={teaserStyle}>
        <div style={eyebrowStyle}>{t.eyebrow}</div>
        <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.6, margin: 0 }}>
          {t.notEnoughYet(n)}
        </p>
      </section>
    )
  }

  const patterns: PatternsDoc = computeJournalPatterns(entries, cardByName)
  const since = patterns.firstDate ? t.sinceShort(fmtDate(patterns.firstDate, locale)) : ''

  return (
    <section style={wrapperStyle}>
      <header style={{ marginBottom: '1.25rem' }}>
        <div style={eyebrowStyle}>{t.eyebrow}</div>
        <h2 style={headlineStyle}>{t.headline(patterns.total)}</h2>
        {since && (
          <p style={{ color: 'var(--muted)', fontSize: '.82rem', lineHeight: 1.6, margin: '.4rem 0 0' }}>
            {t.intro(since)}
          </p>
        )}
        <p style={{ color: 'var(--muted)', fontSize: '.72rem', opacity: .65, marginTop: '.4rem' }}>
          {t.totalsLabel(patterns.total, patterns.distinct)}
        </p>
      </header>

      {/* All-time leaderboard */}
      <PatternBlock title={t.mostDrawnAllTime}>
        <CardLeaderboard items={patterns.top} t={t} locale={locale} />
      </PatternBlock>

      {/* Last 30 days */}
      {patterns.topLast30d.length > 0 && (
        <PatternBlock title={t.mostDrawnLast30}>
          <CardLeaderboard items={patterns.topLast30d} t={t} locale={locale} />
        </PatternBlock>
      )}

      {/* Rising */}
      {patterns.rising.length > 0 && (
        <PatternBlock title={t.risingThisMonth} subtitle={t.risingHelp}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))', gap: '.55rem' }}>
            {patterns.rising.map(r => (
              <Link
                key={r.slug}
                href={cardHref(r.slug, locale)}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div style={{ background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 10, padding: '.65rem .85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '.5rem' }}>
                    <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)' }}>
                      {r.name}
                    </div>
                    <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', color: 'var(--gold)', opacity: .85 }}>
                      {fmtPct(r.delta)}
                    </div>
                  </div>
                  <div style={{ marginTop: '.25rem', color: 'var(--muted)', fontSize: '.7rem', opacity: .65 }}>
                    {t.rangePrev(r.previous, r.current)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </PatternBlock>
      )}

      {/* Recurring themes */}
      <PatternBlock title={t.recurringThemes} subtitle={t.recurringHelp}>
        {patterns.keywords.length === 0 ? (
          <p style={{ color: 'var(--muted)', fontSize: '.85rem', margin: 0 }}>{t.emptyKeywords}</p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
            {patterns.keywords.map(k => (
              <span
                key={k.keyword}
                style={{
                  padding: '.25rem .7rem',
                  borderRadius: 20,
                  fontSize: '.72rem',
                  fontFamily: "'Cinzel',serif",
                  letterSpacing: '.04em',
                  background: 'rgba(201,168,76,.08)',
                  border: '1px solid rgba(201,168,76,.25)',
                  color: 'var(--gold)',
                }}
              >
                {k.keyword} · {k.count}
              </span>
            ))}
          </div>
        )}
      </PatternBlock>
    </section>
  )
}

// ─── sub-components ────────────────────────────────────────────────────────

function PatternBlock({
  title, subtitle, children,
}: {
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{ marginBottom: '.7rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase' }}>
          {title}
        </div>
        {subtitle && (
          <div style={{ color: 'var(--muted)', fontSize: '.72rem', opacity: .55, marginTop: '.2rem' }}>
            {subtitle}
          </div>
        )}
      </div>
      {children}
    </div>
  )
}

function CardLeaderboard({
  items, t, locale,
}: {
  items: { slug: string; name: string; count: number }[]
  t: PatternsCopy
  locale: 'en' | 'es'
}) {
  if (items.length === 0) return null
  const max = items[0]!.count
  return (
    <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.35rem' }}>
      {items.map((item, i) => {
        const ratio = max > 0 ? item.count / max : 0
        return (
          <li key={item.slug} style={{ display: 'grid', gridTemplateColumns: '1.4rem 1fr auto', gap: '.7rem', alignItems: 'center', padding: '.3rem 0' }}>
            <span style={{ color: 'var(--muted)', fontSize: '.72rem', opacity: .5, fontFamily: "'Cinzel',serif", textAlign: 'right' }}>
              {i + 1}
            </span>
            <Link href={cardHref(item.slug, locale)} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.2rem' }}>
                {item.name}
              </div>
              <div style={{ height: 4, borderRadius: 4, background: 'var(--on-bg-04)', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${ratio * 100}%`, background: 'var(--gold)', opacity: .55 }} />
              </div>
            </Link>
            <span style={{ color: 'var(--muted)', fontSize: '.74rem', minWidth: '4ch', textAlign: 'right' }}>
              {t.drawsLabel(item.count)}
            </span>
          </li>
        )
      })}
    </ol>
  )
}

// ─── styles ────────────────────────────────────────────────────────────────

const wrapperStyle: React.CSSProperties = {
  background: 'var(--on-bg-025)',
  border: '1px solid var(--border)',
  borderRadius: 14,
  padding: '1.5rem',
  marginBottom: '2rem',
}

const teaserStyle: React.CSSProperties = {
  background: 'var(--on-bg-02)',
  border: '1px dashed var(--border)',
  borderRadius: 12,
  padding: '1rem 1.25rem',
  marginBottom: '1.5rem',
}

const eyebrowStyle: React.CSSProperties = {
  fontFamily: "'Cinzel',serif",
  fontSize: '.66rem',
  letterSpacing: '.22em',
  color: 'var(--gold)',
  opacity: .6,
  textTransform: 'uppercase',
  marginBottom: '.5rem',
}

const headlineStyle: React.CSSProperties = {
  fontFamily: "'Cinzel',serif",
  fontSize: 'clamp(1.05rem,2.5vw,1.35rem)',
  color: 'var(--gold)',
  margin: 0,
  letterSpacing: '.04em',
  lineHeight: 1.35,
}
