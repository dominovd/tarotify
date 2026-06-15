import type { Metadata } from 'next'
import Link from 'next/link'
import { CARDS, SUITS } from '@/lib/cards'
import { getCard } from '@/lib/i18n/get-card'
import { localizeCardSlug } from '@/lib/i18n/slugs'
import CardImage from '@/components/CardImage'
import AIReadingPromo from '@/components/AIReadingPromo'

export const metadata: Metadata = {
  title: 'Significado de las Cartas del Tarot — Las 78 Cartas | TarotAxis',
  description: 'Guía completa del significado de las 78 cartas del tarot — del derecho e invertidas, más perspectivas para amor, carrera y crecimiento espiritual.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/cartas',
    languages: {
      'en': 'https://tarotaxis.com/cards',
      'es': 'https://tarotaxis.com/es/cartas',
      'x-default': 'https://tarotaxis.com/cards',
    },
  },
  openGraph: {
    title: 'Significado de las Cartas del Tarot — TarotAxis',
    description: 'Las 78 cartas del tarot con sus significados completos.',
    url: 'https://tarotaxis.com/es/cartas',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const YN_STYLE: Record<string, { bg: string; color: string; label: string }> = {
  yes:   { bg: 'rgba(45,122,79,.2)',   color: '#3daa6a', label: 'SÍ' },
  no:    { bg: 'rgba(122,45,45,.2)',   color: '#aa3d3d', label: 'NO' },
  maybe: { bg: 'rgba(122,94,26,.2)',   color: '#c9a84c', label: 'QUIZÁS' },
}

const SUIT_LABELS_ES: Record<string, string> = {
  major: 'Arcanos Mayores',
  wands: 'Bastos',
  cups: 'Copas',
  swords: 'Espadas',
  pentacles: 'Pentáculos',
}

const FAQS = [
  {
    q: '¿Cuál es la mejor forma de aprender las 78 cartas del tarot?',
    a: 'Empieza por los Arcanos Mayores y después aprende un palo a la vez. Lee primero cada carta del derecho; luego añade significados invertidos, sentimientos, amor, carrera y sí/no cuando la imagen y las palabras clave ya te resulten familiares.',
  },
  {
    q: '¿Conviene aprender primero las cartas del derecho o invertidas?',
    a: 'Aprende primero los significados del derecho. Las cartas invertidas son más fáciles cuando ya conoces la energía principal, porque una inversión suele mostrar demora, bloqueo, exceso o una versión interiorizada del mismo tema.',
  },
  {
    q: '¿Por qué una carta cambia de significado en amor, carrera o sentimientos?',
    a: 'Cada carta tiene un arquetipo central, pero ese arquetipo habla de forma distinta según el contexto. Los Enamorados pueden indicar elección en general, atracción en amor, alineación en carrera y apertura emocional como sentimientos.',
  },
  {
    q: '¿Los significados de tarot sí o no son fijos?',
    a: 'Son una guía útil, no reglas absolutas. Una carta puede inclinarse al sí, no o quizás, pero la pregunta, las cartas cercanas y si aparece invertida pueden cambiar la fuerza de esa respuesta.',
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

type View = 'meaning' | 'reversed' | 'feelings'

interface Props {
  searchParams?: { view?: string }
}

export default async function SpanishCardsIndex({ searchParams }: Props) {
  const rawView = (searchParams?.view ?? 'meaning').toLowerCase()
  const view: View = rawView === 'reversed' ? 'reversed' : rawView === 'feelings' ? 'feelings' : 'meaning'
  const slugSuffix = view === 'reversed' ? '/invertida' : view === 'feelings' ? '/sentimientos' : ''
  const viewLabel = view === 'reversed' ? 'invertida' : view === 'feelings' ? 'como sentimientos' : 'al derecho'

  // Resolve Spanish names for each card via getCard (falls back to English).
  const localized = await Promise.all(
    CARDS.map(async c => ({
      base: c,
      localized: await getCard(c.slug, 'es'),
    }))
  )

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
          Significado de las Cartas del Tarot
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
          Las 78 cartas — significados del derecho e invertidos, orientación de Sí/No, e interpretaciones para el amor, la carrera y el crecimiento personal.
        </p>
      </div>

      {/* View toggle */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        <span style={{ alignSelf: 'center', fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.12em', color: 'var(--muted)', textTransform: 'uppercase', marginRight: '.5rem' }}>
          Ver cartas como
        </span>
        {([
          { key: 'meaning',  href: '/es/cartas',                  label: 'Significado' },
          { key: 'reversed', href: '/es/cartas?view=reversed',    label: 'Invertidas' },
          { key: 'feelings', href: '/es/cartas?view=feelings',    label: 'Como Sentimientos' },
        ] as const).map(item => {
          const active = view === item.key
          return (
            <Link
              key={item.key}
              href={item.href}
              style={{
                padding: '.4rem .95rem',
                background: active ? 'rgba(201,168,76,.15)' : 'var(--on-bg-03)',
                border: active ? '1px solid var(--gold)' : '1px solid var(--border)',
                borderRadius: 20,
                color: active ? 'var(--gold)' : 'var(--muted)',
                fontSize: '.74rem',
                fontFamily: "'Cinzel',serif",
                letterSpacing: '.06em',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </Link>
          )
        })}
      </div>

      {/* Promo de lectura con IA */}
      <div style={{ marginBottom: '2rem' }}>
        <AIReadingPromo locale="es" />
      </div>

      {/* CTA de tendencias — datos únicos del propio sitio */}
      <Link
        href="/es/tendencias"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '.85rem 1.1rem', marginBottom: '2.5rem', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, textDecoration: 'none', flexWrap: 'wrap' }}
      >
        <div>
          <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.82rem', letterSpacing: '.04em', marginBottom: '.25rem' }}>
            Tendencias del tarot →
          </div>
          <div style={{ color: 'var(--muted)', fontSize: '.75rem', lineHeight: 1.5 }}>
            Qué cartas se están sacando más esta semana en TarotAxis
          </div>
        </div>
      </Link>

      {SUITS.map(suit => {
        const suitCards = localized.filter(c => c.base.suit === suit.key)
        return (
          <section key={suit.key} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.1em', marginBottom: '1.25rem', paddingBottom: '.6rem', borderBottom: '1px solid var(--border)' }}>
              {SUIT_LABELS_ES[suit.key] ?? suit.label}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))', gap: '.75rem' }}>
              {suitCards.map(({ base, localized: card }) => {
                const yn = YN_STYLE[base.yn]
                const esSlug = localizeCardSlug(base.slug, 'es')
                const name = card?.name ?? base.name
                return (
                  <Link
                    key={base.slug}
                    href={`/es/cartas/${esSlug}${slugSuffix}`}
                    style={{ display: 'flex', flexDirection: 'column', gap: '.4rem', padding: '1rem', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, transition: 'border-color .2s, background .2s' }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        aspectRatio: '2/3',
                        borderRadius: 8,
                        overflow: 'hidden',
                        marginBottom: '.4rem',
                        transform: view === 'reversed' ? 'rotate(180deg)' : undefined,
                      }}
                    >
                      <CardImage slug={base.slug} alt={`${name} carta de tarot ${viewLabel}`} />
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '.35rem .4rem', background: 'linear-gradient(to top, rgba(0,0,0,.85) 0%, transparent 100%)', textAlign: 'center' }}>
                        <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.6rem', color: '#e8d5a0', letterSpacing: '.06em', lineHeight: 1.2, display: 'block' }}>
                          {name}
                        </span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                      <span style={{ padding: '.15rem .5rem', borderRadius: 20, fontSize: '.62rem', fontFamily: "'Cinzel',serif", letterSpacing: '.06em', background: yn.bg, color: yn.color }}>
                        {yn.label}
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        )
      })}

      <section style={{ maxWidth: 760, margin: '1rem auto 0', borderTop:'1px solid var(--border)', paddingTop:'2.5rem' }}>
        <h2 style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'1rem', letterSpacing:'.08em', textTransform:'uppercase', marginBottom:'1rem' }}>
          Preguntas frecuentes sobre las cartas
        </h2>
        <div style={{ display:'grid', gap:'1rem' }}>
          {FAQS.map(faq => (
            <div key={faq.q}>
              <h3 style={{ fontFamily:"'Cinzel',serif", color:'var(--text)', fontSize:'.95rem', letterSpacing:'.03em', marginBottom:'.4rem' }}>
                {faq.q}
              </h3>
              <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.7, margin:0 }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
