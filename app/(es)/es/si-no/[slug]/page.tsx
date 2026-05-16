import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CARDS } from '@/lib/cards'
import {
  CARD_SLUGS,
  canonicalCardSlug,
  localizeCardSlug,
} from '@/lib/i18n/slugs'
import { getCard } from '@/lib/i18n/get-card'
import CardImage from '@/components/CardImage'

interface Props { params: { slug: string } }

// Static params: every card has a Spanish slug for the /si-no sub-route.
export async function generateStaticParams() {
  return CARDS.map(c => ({ slug: localizeCardSlug(c.slug, 'es') }))
}

const YN_META: Record<string, { label: string; color: string; bg: string; summary: string }> = {
  yes:   { label: 'Sí',     color: '#3daa6a', bg: 'rgba(45,122,79,.18)',  summary: 'una carta de sí positiva' },
  no:    { label: 'No',     color: '#aa3d3d', bg: 'rgba(122,45,45,.18)',  summary: 'una carta de no' },
  maybe: { label: 'Quizás', color: '#c9a84c', bg: 'rgba(122,94,26,.18)', summary: 'una carta de quizás — la respuesta aún no está clara' },
}

const YN_ICON: Record<string, string> = { yes: '✓', no: '✗', maybe: '?' }

const SUIT_LABEL_ES: Record<string, string> = {
  'Major Arcana': 'Arcanos Mayores',
  Cups: 'Copas',
  Wands: 'Bastos',
  Swords: 'Espadas',
  Pentacles: 'Pentáculos',
}

const ELEMENT_ES: Record<string, string> = {
  Air: 'Aire',
  Water: 'Agua',
  Fire: 'Fuego',
  Earth: 'Tierra',
}

function ynContext(yn: string): string {
  if (yn === 'yes')   return 'se inclina hacia el sí'
  if (yn === 'no')    return 'se inclina hacia el no'
  return 'se sitúa en el espacio del quizás'
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const enSlug = canonicalCardSlug(params.slug, 'es')
  const card = await getCard(enSlug, 'es')
  if (!card) return {}
  const m = YN_META[card.yn]

  const title = `${card.name} Sí o No — Respuesta del Tarot | TarotAxis`
  const description = `¿Es ${card.name} una carta de sí o no? ${card.yn_exp} Respuesta completa para amor, carrera y preguntas generales.`

  return {
    title,
    description,
    alternates: {
      canonical: `https://tarotaxis.com/es/si-no/${params.slug}`,
      languages: {
        'en': `https://tarotaxis.com/yes-no/${enSlug}`,
        'es': `https://tarotaxis.com/es/si-no/${params.slug}`,
        'x-default': `https://tarotaxis.com/yes-no/${enSlug}`,
      },
    },
    openGraph: {
      title: `${card.name} Sí o No | TarotAxis`,
      description: `${card.name} es ${m.summary}. ${card.yn_exp}`,
      url: `https://tarotaxis.com/es/si-no/${params.slug}`,
      locale: 'es_ES',
      alternateLocale: ['en_US'],
      images: [{
        url: `https://tarotaxis.com/og?slug=${enSlug}&locale=es`,
        width: 1200,
        height: 630,
        alt: `${card.name} carta de tarot — sí o no`,
      }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${card.name} Sí o No | TarotAxis`,
      images: [`https://tarotaxis.com/og?slug=${enSlug}&locale=es`],
    },
  }
}

export default async function SpanishYesNoSlugPage({ params }: Props) {
  const enSlug = canonicalCardSlug(params.slug, 'es')

  // Validate that the incoming Spanish slug is one we recognise. If not, 404.
  const validEsSlug = CARD_SLUGS.es[enSlug] === params.slug
  if (!validEsSlug) notFound()

  const card = await getCard(enSlug, 'es')
  if (!card) notFound()

  const m = YN_META[card.yn]

  // Related cards: same yn answer, same suit first, then others (max 8, exclude self)
  const relatedBase = CARDS
    .filter(c => c.yn === card.yn && c.slug !== enSlug)
    .sort((a, b) => {
      if (a.suit === card.suit && b.suit !== card.suit) return -1
      if (b.suit === card.suit && a.suit !== card.suit) return 1
      if (a.suit === 'major' && b.suit !== 'major') return -1
      if (b.suit === 'major' && a.suit !== 'major') return 1
      return 0
    })
    .slice(0, 8)

  // Resolve Spanish names for related cards.
  const relatedTranslated = await Promise.all(
    relatedBase.map(async rel => {
      const t = await getCard(rel.slug, 'es')
      return { slug: rel.slug, name: t?.name ?? rel.name }
    })
  )

  const suitLabelEs = SUIT_LABEL_ES[card.suitLabel] ?? card.suitLabel
  const elementEs = ELEMENT_ES[card.element] ?? card.element

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'es',
    mainEntity: [
      {
        '@type': 'Question',
        name: `¿Es ${card.name} una carta de sí o no?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${card.name} es ${m.summary}. ${card.yn_exp}`,
        },
      },
      {
        '@type': 'Question',
        name: `¿Qué significa ${card.name} invertida en una lectura de sí/no?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Invertida, ${card.name} cambia su energía. ${card.rev}`,
        },
      },
      {
        '@type': 'Question',
        name: `¿Es ${card.name} una buena carta para preguntas de amor?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: card.love,
        },
      },
      {
        '@type': 'Question',
        name: `¿Qué dice ${card.name} sobre preguntas de carrera?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: card.career,
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/es/si-no" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Sí/No Tarot</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>{card.name}</span>
        </div>

        {/* Hero */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
          {/* Card image */}
          <div style={{ flexShrink: 0, width: 130, height: 205, borderRadius: 10, overflow: 'hidden', border: '2px solid rgba(201,168,76,.35)' }}>
            <CardImage slug={enSlug} alt={`${card.name} carta de tarot`} />
          </div>

          {/* Text */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', padding: '.35rem 1.2rem', borderRadius: 100, background: m.bg, border: `1px solid ${m.color}`, color: m.color, fontFamily: "'Cinzel',serif", fontSize: '1rem', letterSpacing: '.1em', marginBottom: '.9rem' }}>
              <span>{YN_ICON[card.yn]}</span>
              <span>{m.label.toUpperCase()}</span>
            </div>
            <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.3rem,3.5vw,1.9rem)', color: 'var(--gold)', margin: '0 0 .4rem', lineHeight: 1.25 }}>
              {card.name} Sí o No
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '.82rem', margin: '0 0 1rem', letterSpacing: '.04em' }}>
              {suitLabelEs} · {elementEs} · {card.kw_up.slice(0, 3).join(', ')}
            </p>
            <p style={{ color: 'var(--text)', lineHeight: 1.75, fontSize: '1rem', margin: 0 }}>
              {card.yn_exp}
            </p>
          </div>
        </div>

        {/* Love / Career / Spirit */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { label: 'Amor', text: card.love },
            { label: 'Carrera', text: card.career },
            { label: 'Espiritualidad', text: card.spirit },
          ].map(({ label, text }) => (
            <div key={label} style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase', marginBottom: '.5rem' }}>{label}</div>
              <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.65, margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>

        {/* Why this card leans yes/no/maybe */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.05rem', letterSpacing: '.06em', margin: '0 0 .9rem' }}>
            Por qué {card.name} {ynContext(card.yn)}
          </h2>
          <p style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.95rem', margin: '0 0 1rem' }}>{card.up}</p>
          {card.yn === 'maybe' && (
            <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: '.88rem', margin: 0, borderTop: '1px solid var(--border)', paddingTop: '.9rem' }}>
              <strong style={{ color: 'var(--gold)', fontWeight: 400 }}>En una lectura de sí/no:</strong> cuando aparece {card.name}, la situación aún se está desarrollando. Busca más información, confía en tu intuición y vuelve a la pregunta cuando el camino se sienta más claro.
            </p>
          )}
          {card.yn === 'no' && (
            <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: '.88rem', margin: 0, borderTop: '1px solid var(--border)', paddingTop: '.9rem' }}>
              <strong style={{ color: 'var(--gold)', fontWeight: 400 }}>En una lectura de sí/no:</strong> {card.name} aconseja precaución o señala que ahora no es el momento adecuado. No es un no permanente — más bien una invitación a reevaluar antes de avanzar.
            </p>
          )}
          {card.yn === 'yes' && (
            <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: '.88rem', margin: 0, borderTop: '1px solid var(--border)', paddingTop: '.9rem' }}>
              <strong style={{ color: 'var(--gold)', fontWeight: 400 }}>En una lectura de sí/no:</strong> {card.name} trae una energía alentadora que impulsa hacia adelante. La carta apoya tu pregunta con una respuesta positiva — confía en la señal y avanza con confianza.
            </p>
          )}
        </div>

        {/* Reversed note */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.05rem', letterSpacing: '.06em', margin: '0 0 .9rem' }}>
            {card.name} Invertida — ¿Sí o No?
          </h2>
          <p style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.95rem', margin: 0 }}>{card.rev}</p>
        </div>

        {/* FAQ */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.05rem', letterSpacing: '.06em', margin: '0 0 1.1rem' }}>
            Preguntas frecuentes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {[
              {
                q: `¿Es ${card.name} una carta de sí o no?`,
                a: `${card.name} es ${m.summary}. ${card.yn_exp}`,
              },
              {
                q: `¿Qué significa ${card.name} invertida en una lectura de sí/no?`,
                a: `Invertida, ${card.name} cambia su energía. ${card.rev}`,
              },
              {
                q: `¿Es ${card.name} una buena carta para preguntas de amor?`,
                a: card.love,
              },
              {
                q: `¿Qué dice ${card.name} sobre preguntas de carrera?`,
                a: card.career,
              },
            ].map(({ q, a }, i, arr) => (
              <div key={q} style={{ paddingBottom: i < arr.length - 1 ? '1.2rem' : 0, borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <p style={{ fontFamily: "'Cinzel',serif", fontSize: '.88rem', color: 'var(--gold)', margin: '0 0 .5rem', lineHeight: 1.5 }}>{q}</p>
                <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related cards */}
        {relatedTranslated.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.05rem', letterSpacing: '.06em', margin: '0 0 1rem' }}>
              Otras cartas de {m.label}
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem' }}>
              {relatedTranslated.map(rel => (
                <Link
                  key={rel.slug}
                  href={`/es/si-no/${localizeCardSlug(rel.slug, 'es')}`}
                  style={{ padding: '.35rem .9rem', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 100, color: 'var(--muted)', fontSize: '.82rem', textDecoration: 'none', fontFamily: "'Cinzel',serif", letterSpacing: '.04em' }}
                >
                  {rel.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA links */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
          <Link href={`/es/cartas/${params.slug}`} style={{ display: 'block', padding: '1rem 1.2rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.25)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase', marginBottom: '.3rem' }}>Significado completo</div>
            <div style={{ color: 'var(--text)', fontSize: '.92rem' }}>{card.name} significado de la carta →</div>
          </Link>
          <Link href="/es/si-no" style={{ display: 'block', padding: '1rem 1.2rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.25)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase', marginBottom: '.3rem' }}>Prueba el oráculo</div>
            <div style={{ color: 'var(--text)', fontSize: '.92rem' }}>Lectura sí/no gratis →</div>
          </Link>
        </div>

        {/* Bottom explainer */}
        <div style={{ borderTop: '1px solid rgba(201,168,76,.1)', paddingTop: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.9rem' }}>
            Cómo interpretar el tarot sí/no
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.92rem', margin: 0 }}>
            En el tarot sí/no, cada carta lleva una energía inherente — algunas se inclinan hacia la expansión y la afirmación, otras hacia la cautela y el bloqueo, y varias se sitúan en un espacio liminal de "todavía no". {card.name} {ynContext(card.yn)} debido a su energía arquetípica fundamental: {card.kw_up.join(', ')}. Al leer el tarot sí/no, considera la energía del derecho de la carta como la señal principal, y deja que tu intuición sienta si esa energía está amplificada o atenuada en tu situación actual.
          </p>
        </div>

      </div>
    </>
  )
}
