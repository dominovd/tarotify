import type { Metadata } from 'next'
import Link from 'next/link'
import { CARDS, CARDS_BY_SLUG } from '@/lib/cards'
import { getCard } from '@/lib/i18n/get-card'
import { makeComboSlug } from '@/lib/combinations'

export const metadata: Metadata = {
  title: 'Combinaciones de Cartas del Tarot — Qué Significan Dos Cartas Juntas | TarotAxis',
  description: 'Descubre qué significan dos cartas del tarot juntas. Explora las combinaciones más populares con interpretaciones de amor, carrera y crecimiento personal.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/combinaciones',
    languages: {
      'en': 'https://tarotaxis.com/combination',
      'es': 'https://tarotaxis.com/es/combinaciones',
      'x-default': 'https://tarotaxis.com/combination',
    },
  },
  openGraph: {
    title: 'Combinaciones de Cartas del Tarot — TarotAxis',
    description: 'Qué significan dos cartas del tarot juntas: combinaciones populares con interpretación completa.',
    url: 'https://tarotaxis.com/es/combinaciones',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'website',
  },
}

// Popular combinations (search-volume driven, same EN slugs since combo slugs
// stay English-based for clean hreflang mapping)
const POPULAR_COMBOS = [
  'the-high-priestess-and-page-of-swords',
  'the-world-and-the-star',
  'the-sun-and-the-moon',
  'justice-and-judgement',
  'death-and-judgement',
  'death-and-justice',
  'the-moon-and-the-tower',
  'death-and-the-tower',
  'the-lovers-and-the-devil',
  'the-hierophant-and-the-lovers',
  'death-and-strength',
  'death-and-the-devil',
  'the-magician-and-temperance',
  'judgement-and-temperance',
  'the-empress-and-the-lovers',
  'the-chariot-and-strength',
  'the-hermit-and-the-high-priestess',
  'death-and-the-hermit',
  'the-star-and-the-moon',
  'the-devil-and-the-world',
  'the-emperor-and-strength',
  'the-hanged-man-and-death',
  'the-fool-and-the-magician',
  'the-chariot-and-death',
]

const TOP_MAJOR = [
  'the-fool', 'the-magician', 'the-high-priestess', 'the-empress',
  'the-emperor', 'the-lovers', 'the-chariot', 'strength',
  'the-hermit', 'wheel-of-fortune', 'justice', 'death',
  'the-devil', 'the-tower', 'the-star', 'the-moon', 'the-sun', 'the-world',
]

const SUITS = [
  { key: 'wands',     label: 'Bastos' },
  { key: 'cups',      label: 'Copas' },
  { key: 'swords',    label: 'Espadas' },
  { key: 'pentacles', label: 'Pentáculos' },
] as const

const COURT_RANKS: Array<{ key: string; label: string }> = [
  { key: 'page',   label: 'Sotas' },
  { key: 'knight', label: 'Caballeros' },
  { key: 'queen',  label: 'Reinas' },
  { key: 'king',   label: 'Reyes' },
]

const POPULAR_PIPS = [
  'two-of-cups', 'three-of-cups', 'six-of-cups', 'nine-of-cups', 'ten-of-cups',
  'three-of-swords', 'five-of-cups', 'eight-of-cups',
  'three-of-pentacles', 'nine-of-pentacles', 'ten-of-pentacles',
  'eight-of-wands', 'three-of-wands', 'ten-of-wands',
  'two-of-swords', 'eight-of-swords', 'ten-of-swords', 'five-of-pentacles',
]

const ELEMENT_ES: Record<string, string> = {
  Air: 'Aire',
  Water: 'Agua',
  Fire: 'Fuego',
  Earth: 'Tierra',
}

const FAQS = [
  {
    q: '¿Cómo se leen dos cartas del tarot juntas?',
    a: 'Primero lee cada carta por separado y después observa la relación entre ambas. Fíjate si sus elementos se apoyan, se desafían o se equilibran, y pregunta cómo la primera carta modifica la expresión de la segunda.',
  },
  {
    q: '¿Las combinaciones de tarot tienen significados fijos?',
    a: 'Tienen patrones recurrentes, pero no son guiones cerrados. La misma pareja puede hablar de forma distinta en amor, carrera o crecimiento personal según la pregunta, la posición de cada carta y las cartas cercanas.',
  },
  {
    q: '¿Qué es lo más importante en una combinación de tarot?',
    a: 'Las señales más fuertes son los temas repetidos, la relación elemental, los números, los palos y si las cartas se refuerzan o se contradicen. Una combinación es más útil cuando muestra el movimiento entre dos energías.',
  },
  {
    q: '¿Puedo usar estas combinaciones para una tirada de tres cartas?',
    a: 'Sí. Lee primero las cartas uno y dos, después dos y tres, y luego uno y tres. Cuando las tres parejas estén claras, da un paso atrás y lee toda la tirada como una sola historia.',
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

export default async function CombinacionesHub() {
  // Pre-resolve Spanish names for all cards used in this hub.
  const nameMap: Record<string, string> = {}
  for (const c of CARDS) {
    const card = await getCard(c.slug, 'es')
    nameMap[c.slug] = card?.name ?? c.name
  }

  function comboLabel(comboSlug: string): string {
    // Find the split point that yields two valid slugs.
    const parts = comboSlug.split('-and-')
    for (let i = 1; i < parts.length; i++) {
      const s1 = parts.slice(0, i).join('-and-')
      const s2 = parts.slice(i).join('-and-')
      if (CARDS_BY_SLUG[s1] && CARDS_BY_SLUG[s2]) {
        return `${nameMap[s1] ?? s1} & ${nameMap[s2] ?? s2}`
      }
    }
    return comboSlug
  }

  function CardRow({ slug, pairCount = 9 }: { slug: string; pairCount?: number }) {
    const card = CARDS_BY_SLUG[slug]
    if (!card) return null
    const localizedName = nameMap[slug] ?? card.name
    const pairs = TOP_MAJOR.slice(0, pairCount).map(majSlug => ({
      comboSlug: makeComboSlug(slug, majSlug),
      majName: nameMap[majSlug] ?? CARDS_BY_SLUG[majSlug]?.name ?? majSlug,
    }))
    return (
      <div style={{ padding: '.85rem 1rem', background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 10, marginBottom: '.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', marginBottom: '.65rem' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/cards/${slug}.webp`} alt={localizedName} style={{ width: 24, height: 38, objectFit: 'cover', borderRadius: 3, border: '1px solid rgba(201,168,76,.2)', flexShrink: 0 }} />
          <span style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem' }}>{localizedName}</span>
          <span style={{ color: 'var(--muted)', fontSize: '.7rem' }}>{ELEMENT_ES[card.element] ?? card.element}</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.35rem' }}>
          {pairs.map(({ comboSlug, majName }) => (
            <Link
              key={comboSlug}
              href={`/es/combinaciones/${comboSlug}`}
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '3rem 1.5rem 2rem' }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href="/es" style={{ color: 'var(--muted)' }}>Inicio</Link>
          <span>/</span>
          <span style={{ color: 'var(--gold)' }}>Combinaciones</span>
        </nav>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.4rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Combinaciones de Cartas del Tarot
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Descubre cómo interactúan las energías de dos cartas — en el amor, la carrera y el crecimiento personal. Explora las combinaciones más buscadas, cada una con una interpretación completa.
          </p>
        </div>

        {/* Popular combinations */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
            Combinaciones populares
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Las parejas de cartas más buscadas, con interpretación completa para amor, carrera y crecimiento personal.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '.6rem' }}>
            {POPULAR_COMBOS.map(slug => (
              <Link key={slug} href={`/es/combinaciones/${slug}`} style={{ display: 'flex', alignItems: 'center', gap: '.6rem', padding: '.65rem .9rem', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontSize: '.82rem', fontFamily: "'Lato',sans-serif" }}>
                <span style={{ color: 'var(--gold)', opacity: .5, fontSize: '.7rem' }}>✦</span>
                {comboLabel(slug)}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Minor Arcana × Major combinations browser */}
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 1.5rem 4rem' }}>
        <div style={{ borderTop: '1px solid rgba(201,168,76,.12)', paddingTop: '3.5rem' }}>

          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.25rem', letterSpacing: '.07em', margin: '0 0 .6rem' }}>
              Combinaciones con Arcanos Menores
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, maxWidth: 500, margin: '0 auto' }}>
              Cómo interactúan los Ases, las cartas de la corte y los pips clave con los Arcanos Mayores.
            </p>
          </div>

          {/* Aces */}
          <details style={detailsStyle}>
            <summary style={summaryStyle}>
              <span>Ases y Arcanos Mayores</span>
              <span style={{ opacity: .4, fontSize: '.75rem' }}>4 cartas · {4 * 9} combinaciones ▾</span>
            </summary>
            <div style={{ padding: '0 1rem 1rem' }}>
              {SUITS.map(({ key }) => (
                <CardRow key={key} slug={`ace-of-${key}`} pairCount={9} />
              ))}
            </div>
          </details>

          {/* Courts */}
          {COURT_RANKS.map(({ key, label }) => (
            <details key={key} style={detailsStyle}>
              <summary style={summaryStyle}>
                <span>{label} y Arcanos Mayores</span>
                <span style={{ opacity: .4, fontSize: '.75rem' }}>4 cartas · {4 * 8} combinaciones ▾</span>
              </summary>
              <div style={{ padding: '0 1rem 1rem' }}>
                {SUITS.map(({ key: suitKey }) => (
                  <CardRow key={suitKey} slug={`${key}-of-${suitKey}`} pairCount={8} />
                ))}
              </div>
            </details>
          ))}

          {/* Popular pips */}
          <details style={detailsStyle}>
            <summary style={summaryStyle}>
              <span>Cartas pip populares</span>
              <span style={{ opacity: .4, fontSize: '.75rem' }}>{POPULAR_PIPS.length} cartas ▾</span>
            </summary>
            <div style={{ padding: '0 1rem 1rem' }}>
              {POPULAR_PIPS.map(slug => (
                <CardRow key={slug} slug={slug} pairCount={6} />
              ))}
            </div>
          </details>

        </div>

        {/* Cómo funcionan las combinaciones */}
        <div style={{ marginTop: '3rem', borderTop: '1px solid rgba(201,168,76,.1)', paddingTop: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>Cómo funcionan las combinaciones de tarot</h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: '.95rem', marginBottom: '.75rem' }}>
            En una lectura de tarot, las cartas rara vez hablan solas. Cada carta porta su propia energía arquetípica — pero el mensaje real surge cuando dos cartas entran en diálogo. Sus naturalezas elementales interactúan: el Fuego y el Aire se amplifican mutuamente en una acción rápida e inspirada; la Tierra y el Agua crean un crecimiento paciente y nutritivo; el Fuego y el Agua generan una tensión cargada y apasionada; el Aire y la Tierra tienden un puente entre la visión y la realidad práctica. Estas relaciones elementales forman la base de cómo debe leerse cualquier pareja.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: '.95rem', marginBottom: '.75rem' }}>
            Cada combinación se analiza en tres capas. Primero, identifica la relación elemental entre las dos cartas y describe la dinámica energética que se produce. Segundo, recoge las palabras clave principales del derecho y los temas arquetípicos de cada carta — no solo sus significados de superficie, sino las corrientes más profundas que representan. Tercero, traduce esa energía combinada a tres contextos específicos: amor y relaciones, carrera y dinero, y crecimiento personal. El resultado es una lectura que honra la complejidad de la pareja en lugar de reducirla a una sola línea.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: '.95rem' }}>
            Usa esta herramienta de tres formas: para analizar una pareja que apareció junta en una lectura; para estudiar el mazo con mayor profundidad explorando cómo se relacionan cartas que te resultan difíciles con cartas que entiendes bien; o para investigar una combinación concreta que te despierta curiosidad antes de que aparezca en una tirada. Cuanto más explores cómo se hablan las cartas entre sí, más ricas serán tus lecturas.
          </p>
        </div>

        {/* Cómo leer tres cartas */}
        <div style={{ marginTop: '3rem', borderTop: '1px solid rgba(201,168,76,.1)', paddingTop: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>Cómo leer combinaciones de tres cartas</h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: '.95rem', marginBottom: '.75rem' }}>
            Cuando aterrizan tres cartas juntas en una tirada, el enfoque más fiable es leerlas por pares primero: cartas 1 y 2, después 2 y 3, después 1 y 3. Cada pareja cuenta una parte de la historia. Una vez que has leído los tres pares, da un paso atrás y pregúntate qué están diciendo las tres cartas como grupo unificado — un mensaje triádico que suele ser mayor que la suma de sus partes.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: '.95rem', marginBottom: '.75rem' }}>
            Presta especial atención a los palos repetidos: dos o tres cartas del mismo palo señalan que la energía de ese elemento — Copas para las emociones, Bastos para la pasión y el impulso, Espadas para el pensamiento y el conflicto, Pentáculos para la vida material — es la corriente dominante de la lectura. Los números repetidos cargan peso numerológico: tres cartas que llevan el número 7, por ejemplo, apuntan a un periodo de reflexión interior y reevaluación con independencia de sus significados individuales.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: '.95rem' }}>
            Para una guía completa de cómo leer tres cartas juntas — incluidas las variaciones de posición más útiles y cómo encontrar el hilo narrativo — visita la página de la <Link href="/es/tiradas/tres-cartas" style={{ color: 'var(--gold)', opacity: .8 }}>Tirada de Tres Cartas</Link>.
          </p>
        </div>

        <section style={{ marginTop: '3rem', borderTop: '1px solid rgba(201,168,76,.1)', paddingTop: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>Preguntas frecuentes sobre combinaciones</h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {FAQS.map(faq => (
              <div key={faq.q}>
                <h3 style={{ fontFamily: "'Cinzel',serif", color: 'var(--text)', fontSize: '.95rem', letterSpacing: '.03em', marginBottom: '.4rem' }}>
                  {faq.q}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style>{`
        details > summary::-webkit-details-marker { display: none; }
        details[open] > summary { border-bottom: 1px solid var(--border); }
      `}</style>
    </>
  )
}
