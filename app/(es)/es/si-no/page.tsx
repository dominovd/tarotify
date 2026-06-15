import type { Metadata } from 'next'
import Link from 'next/link'
import YesNoClient from './YesNoClient'
import { CARDS } from '@/lib/cards'
import { getCard } from '@/lib/i18n/get-card'
import { localizeCardSlug } from '@/lib/i18n/slugs'

export const metadata: Metadata = {
  title: 'Tarot Sí o No — Oráculo Gratuito de Una Carta | TarotAxis',
  description: 'Haz una pregunta de sí o no y saca una sola carta del tarot para una respuesta instantánea del oráculo. Lectura gratuita de tarot sí no con las 78 cartas.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/si-no',
    languages: {
      'en': 'https://tarotaxis.com/yes-no',
      'es': 'https://tarotaxis.com/es/si-no',
      'x-default': 'https://tarotaxis.com/yes-no',
    },
  },
  openGraph: {
    title: 'Tarot Sí o No — Oráculo Gratuito | TarotAxis',
    description: 'Saca una carta y recibe una respuesta sí/no del mazo completo de 78 cartas.',
    url: 'https://tarotaxis.com/es/si-no',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const SUITS = [
  { key: 'major',     label: 'Arcanos Mayores' },
  { key: 'wands',     label: 'Bastos' },
  { key: 'cups',      label: 'Copas' },
  { key: 'swords',    label: 'Espadas' },
  { key: 'pentacles', label: 'Pentáculos' },
] as const

const YN_COLOR: Record<string, string> = {
  yes:   '#3daa6a',
  no:    '#aa3d3d',
  maybe: '#c9a84c',
}

const YN_LABEL_ES: Record<string, string> = {
  yes:   'SÍ',
  no:    'NO',
  maybe: 'QUIZÁS',
}

const FAQS = [
  {
    q: '¿Cómo funciona el tarot sí o no?',
    a: 'El tarot sí o no usa una sola carta como señal enfocada para una pregunta simple. Algunas cartas se inclinan al sí, otras al no y otras responden quizás porque la situación necesita tiempo, elección o más información.',
  },
  {
    q: '¿Qué tipo de pregunta conviene hacer?',
    a: 'Haz una pregunta clara a la vez. El tarot sí o no funciona mejor para decisiones concretas como contactar a alguien, aceptar una oferta, esperar, avanzar o reconsiderar. Evita mezclar varias preguntas en una sola frase.',
  },
  {
    q: '¿Las cartas invertidas cuentan en la respuesta?',
    a: 'Sí. Una carta invertida puede suavizar un sí, reforzar un no, señalar demora o mostrar un bloqueo interno alrededor de la pregunta. Las páginas individuales de cada carta explican el significado sí/no del derecho e invertido.',
  },
  {
    q: '¿Puedo repetir la misma pregunta de sí o no?',
    a: 'Puedes hacerlo, pero normalmente es mejor esperar hasta que algo cambie. Repetir la misma pregunta de inmediato suele reflejar ansiedad más que nueva guía. Si te sientes bloqueado/a, reformula la pregunta hacia lo que puedes hacer a continuación.',
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

export default async function YesNoPageEs() {
  // Pre-resolve Spanish name + yn explanation for all 78 cards. Falls back to
  // English per-key when messages/es/cards.json doesn't yet have a translation.
  const entries = await Promise.all(
    CARDS.map(async c => {
      const localized = await getCard(c.slug, 'es')
      return {
        slug: c.slug,
        name: localized?.name ?? c.name,
        yn_exp: localized?.yn_exp ?? c.yn_exp,
      }
    })
  )
  const cardNamesEs: Record<string, string> = Object.fromEntries(entries.map(e => [e.slug, e.name]))
  const cardYnExpEs: Record<string, string> = Object.fromEntries(entries.map(e => [e.slug, e.yn_exp]))

  const bySuit = SUITS.map(s => ({
    ...s,
    cards: CARDS.filter(c => c.suit === s.key),
  }))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <YesNoClient cardNamesEs={cardNamesEs} cardYnExpEs={cardYnExpEs} />

      {/* Card directory */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div style={{ borderTop: '1px solid rgba(201,168,76,.15)', paddingTop: '3rem', marginTop: '1rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.2rem', letterSpacing: '.07em', marginBottom: '.5rem', textAlign: 'center' }}>
            Sí o No por Carta
          </h2>
          <p style={{ color: 'var(--muted)', textAlign: 'center', fontSize: '.9rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Mira la respuesta sí/no de cada carta del mazo — del derecho, invertida y por tema.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {bySuit.map(({ key, label, cards }) => (
              <div key={key}>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.16em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1rem' }}>
                  {label}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: '.6rem' }}>
                  {cards.map(card => {
                    const esSlug = localizeCardSlug(card.slug, 'es')
                    const esName = cardNamesEs[card.slug] ?? card.name
                    return (
                      <Link
                        key={card.slug}
                        href={`/es/si-no/${esSlug}`}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '.55rem .85rem', background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 10, textDecoration: 'none', gap: '.4rem' }}
                      >
                        <span style={{ color: 'var(--text)', fontSize: '.82rem', fontFamily: "'Cinzel',serif", letterSpacing: '.03em', lineHeight: 1.3 }}>
                          {esName}
                        </span>
                        <span style={{ flexShrink: 0, fontSize: '.65rem', fontWeight: 600, letterSpacing: '.08em', color: YN_COLOR[card.yn], border: `1px solid ${YN_COLOR[card.yn]}`, borderRadius: 100, padding: '1px 7px', opacity: .9 }}>
                          {YN_LABEL_ES[card.yn]}
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <section style={{ borderTop: '1px solid rgba(201,168,76,.15)', paddingTop: '2.5rem', marginTop: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.2rem', letterSpacing: '.07em', marginBottom: '.5rem', textAlign: 'center' }}>
            Preguntas frecuentes sobre tarot sí o no
          </h2>
          <div style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}>
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
    </>
  )
}
