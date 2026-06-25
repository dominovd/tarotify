// ════════════════════════════════════════════════════════════════════════════
// /es/tendencias — Spanish counterpart of /trends
// ════════════════════════════════════════════════════════════════════════════
//
// Mirrors /trends 1:1, but pulls localised card names from
// messages/es/cards.json and uses Spanish copy / metadata. Both pages
// render the same trends_snapshot data — there's no separate ES snapshot.
// ════════════════════════════════════════════════════════════════════════════

import type { Metadata } from 'next'
import Link from 'next/link'
import { CARDS_BY_SLUG } from '@/lib/cards'
import { localizeCardSlug } from '@/lib/i18n/slugs'
import cardsEsRaw from '@/messages/es/cards.json'
import { loadLatestSnapshot, type TrendsSnapshot } from '@/lib/trends/compute'

export const revalidate = 1800

interface EsCardRecord { name?: string }
const cardsEs = cardsEsRaw as Record<string, EsCardRecord>

export const metadata: Metadata = {
  title: 'Tendencias del tarot — Cartas más sacadas esta semana | TarotAxis',
  description:
    'Tendencias del tarot en vivo en TarotAxis: las cartas más sacadas esta semana, arquetipos en alza y combinaciones frecuentes. Actualizado cada día con datos reales de lecturas.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tendencias',
    languages: {
      en: 'https://tarotaxis.com/trends',
      es: 'https://tarotaxis.com/es/tendencias',
      'x-default': 'https://tarotaxis.com/trends',
    },
  },
  openGraph: {
    title: 'Tendencias del tarot — Cartas más sacadas esta semana',
    description:
      'Lo que la baraja viene diciendo últimamente. Cartas más sacadas, arquetipos en alza y combinaciones frecuentes — actualizado cada día con lecturas reales de TarotAxis.',
    type: 'website',
    url: 'https://tarotaxis.com/es/tendencias',
  },
}

const FAQS = [
  {
    q: '¿De dónde salen las tendencias de TarotAxis?',
    a: 'Salen de datos anónimos de cartas sacadas en TarotAxis. El sistema guarda identificadores internos de cartas y orientación para estadísticas agregadas, pero esta página pública no guarda la pregunta del visitante ni la interpretación personal.',
  },
  {
    q: '¿Cada cuánto se actualizan las tendencias del tarot?',
    a: 'La instantánea de tendencias se recalcula a diario y la página se revalida cada 30 minutos. Si la instantánea más reciente todavía no está disponible, la página muestra un estado temporal de datos en acumulación.',
  },
  {
    q: '¿Qué significa que una carta esté en tendencia?',
    a: 'Significa que esa carta apareció con más frecuencia en lecturas recientes que en la ventana anterior de comparación. Es una señal colectiva de actividad del sitio, no una predicción para cada visitante individual.',
  },
  {
    q: '¿Para qué sirven las combinaciones frecuentes?',
    a: 'Las combinaciones frecuentes muestran qué cartas están apareciendo juntas en lecturas de varias cartas. Sirven para estudiar combinaciones de tarot y ver qué temas arquetípicos se agrupan en tiradas reales.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: FAQS.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

// ─── helpers ───────────────────────────────────────────────────────────────

function cardName(slug: string): string {
  return cardsEs[slug]?.name ?? CARDS_BY_SLUG[slug]?.name ?? slug
}

function fmtPct(delta: number): string {
  const pct = Math.round(delta * 100)
  return `+${pct}%`
}

function dateRange(start: string): string {
  const from = new Date(start)
  const to = new Date()
  const fmt = (d: Date) =>
    d.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })
  return `${fmt(from)} – ${fmt(to)}`
}

// ─── page ─────────────────────────────────────────────────────────────────

export default async function TendenciasPage() {
  const snapshot = await loadLatestSnapshot()

  return (
    <div style={{ maxWidth: 880, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header snapshot={snapshot} />
      {snapshot
        ? <SnapshotBody snapshot={snapshot} />
        : <NoDataYet />
      }
      <Methodology />
      <TrendsFAQ />
    </div>
  )
}

// ─── header ────────────────────────────────────────────────────────────────

function Header({ snapshot }: { snapshot: TrendsSnapshot | null }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
      <div style={{ fontSize: '.66rem', letterSpacing: '.22em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
        Tendencias del tarot
      </div>
      <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '.6rem' }}>
        Lo que la baraja viene diciendo
      </h1>
      <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, maxWidth: 540, margin: '0 auto' }}>
        Señales en vivo de las lecturas que se hacen ahora mismo en TarotAxis —
        qué cartas siguen apareciendo, qué arquetipos están en alza y qué
        combinaciones repite la baraja. Recalculado a diario a partir de datos
        anónimos de tirada.
      </p>
      {snapshot && (
        <p style={{ color: 'var(--muted)', fontSize: '.72rem', opacity: .55, marginTop: '.9rem' }}>
          Actualizado el {new Date(snapshot.computedAt).toLocaleString('es-ES', {
            day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit',
          })} UTC · {snapshot.totals.readings30d.toLocaleString('es-ES')} lecturas
          analizadas en los últimos 30 días
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
        title="Más sacadas esta semana"
        subtitle={dateRange(snapshot.windows.sevenDayStart)}
        items={snapshot.topCards7d.slice(0, 10)}
      />

      <TrendingUp items={snapshot.trendingUp} />

      <TopPairs items={snapshot.topCombinations30d} />

      <TopCards
        title="Más sacadas este mes"
        subtitle={dateRange(snapshot.windows.thirtyDayStart)}
        items={snapshot.topCards30d.slice(0, 10)}
      />

      <TopCards
        title="Más sacadas de todos los tiempos"
        subtitle="Desde el lanzamiento de TarotAxis"
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

// ─── top cards ─────────────────────────────────────────────────────────────

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
                href={`/es/cartas/${localizeCardSlug(item.slug, 'es')}`}
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

// ─── trending ──────────────────────────────────────────────────────────────

function TrendingUp({
  items,
}: {
  items: { slug: string; current: number; previous: number; delta: number }[]
}) {
  if (items.length === 0) return null
  return (
    <section style={{ marginBottom: '2.5rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.18)', borderRadius: 14, padding: '1.5rem' }}>
      <SectionHeading title="En alza esta semana" subtitle="Cartas sacadas más que la semana pasada" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '.6rem' }}>
        {items.map(item => (
          <Link key={item.slug} href={`/es/cartas/${localizeCardSlug(item.slug, 'es')}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
                {item.previous} → {item.current} tiradas
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

// ─── pairs ─────────────────────────────────────────────────────────────────

function TopPairs({
  items,
}: {
  items: { slugs: [string, string]; count: number }[]
}) {
  if (items.length === 0) return null
  return (
    <section style={{ marginBottom: '2.5rem', background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem' }}>
      <SectionHeading title="Combinaciones frecuentes" subtitle="Cartas que aparecen juntas — últimos 30 días" />
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
        {items.map(({ slugs, count }) => {
          const [a, b] = slugs
          return (
            <li key={`${a}|${b}`} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '.75rem', alignItems: 'center', padding: '.5rem 0', borderBottom: '1px solid var(--border)' }}>
              <Link
                href={`/es/combinaciones/${a}/${b}`}
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

// ─── sources ───────────────────────────────────────────────────────────────

const SOURCE_LABEL_ES: Record<string, string> = {
  'free-reading': 'Lectura gratuita',
  'reading-analysis': 'Análisis de lectura',
  saved: 'Diario guardado',
  unknown: 'Otro',
}

function Sources({ items }: { items: { source: string; count: number }[] }) {
  if (items.length === 0) return null
  const total = items.reduce((acc, s) => acc + s.count, 0)
  return (
    <section style={{ marginBottom: '2.5rem' }}>
      <SectionHeading title="De dónde vienen las lecturas" subtitle="Últimos 30 días" />
      <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        {items.map(s => {
          const pct = total > 0 ? Math.round((s.count / total) * 100) : 0
          return (
            <span key={s.source} style={{ padding: '.35rem .8rem', borderRadius: 20, fontSize: '.72rem', fontFamily: "'Cinzel',serif", letterSpacing: '.06em', background: 'var(--on-bg-04)', color: 'var(--muted)', border: '1px solid var(--border)' }}>
              {SOURCE_LABEL_ES[s.source] ?? s.source} · {pct}%
            </span>
          )
        })}
      </div>
    </section>
  )
}

// ─── methodology ───────────────────────────────────────────────────────────

function Methodology() {
  return (
    <section style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 12 }}>
      <SectionHeading title="Cómo se construye esta página" />
      <p style={{ color: 'var(--muted)', fontSize: '.82rem', lineHeight: 1.8, margin: 0 }}>
        Cada lectura en TarotAxis registra las cartas sacadas (identificador
        interno y orientación únicamente — nunca la pregunta, nunca la interpretación).
        Un cron diario agrega los últimos 30 días y guarda una sola
        instantánea en la base de datos. Esta página lee esa instantánea, así
        que lo que ves aquí refleja la experiencia colectiva real del sitio —
        no es una lista promocional. Los datos se acumulan con el tiempo;
        cartas poco frecuentes y tiradas recién lanzadas necesitan unos días
        para aparecer.{' '}
        <Link href="/es/metodologia" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
          Lee nuestra metodología completa
        </Link>.
      </p>
    </section>
  )
}

function TrendsFAQ() {
  return (
    <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 12 }}>
      <SectionHeading title="Preguntas frecuentes sobre tendencias" />
      <div style={{ display: 'grid', gap: '1rem' }}>
        {FAQS.map(faq => (
          <div key={faq.q}>
            <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', letterSpacing: '.04em', marginBottom: '.4rem' }}>
              {faq.q}
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '.82rem', lineHeight: 1.8, margin: 0 }}>
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── empty state ──────────────────────────────────────────────────────────

function NoDataYet() {
  return (
    <section style={{ background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 14, padding: '2rem', textAlign: 'center' }}>
      <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.8, margin: 0 }}>
        La instantánea de tendencias aún se está armando. Vuelve mañana — el
        cron diario corre a las 00:15 UTC. Mientras tanto, puedes{' '}
        <Link href="/es/lectura-gratis" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
          sacarte tu propia tirada de tres cartas
        </Link>{' '}
        y contribuir a la próxima instantánea.
      </p>
    </section>
  )
}
