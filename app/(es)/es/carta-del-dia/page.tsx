import type { Metadata } from 'next'
import Link from 'next/link'
import { getDailyCard } from '@/lib/daily-card'
import { getCard, getCardExtended } from '@/lib/i18n/get-card'
import { localizeCardSlug } from '@/lib/i18n/slugs'
import ShareButton from '@/components/ShareButton'
import CardImage from '@/components/CardImage'
import AIReadingBlock from '@/components/AIReadingBlock'

// Re-render on every request so the card matches today's date
export const dynamic = 'force-dynamic'

// ─── Suit / element labels (ES) ──────────────────────────────────────────────

const SUIT_LABELS_ES: Record<string, string> = {
  major: 'Arcanos Mayores',
  wands: 'Bastos',
  cups: 'Copas',
  swords: 'Espadas',
  pentacles: 'Pentáculos',
}

const ELEMENT_ES: Record<string, string> = {
  Air: 'Aire',
  Water: 'Agua',
  Fire: 'Fuego',
  Earth: 'Tierra',
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata(): Promise<Metadata> {
  const { card } = getDailyCard()
  const esCard = await getCard(card.slug, 'es')
  const esName = esCard?.name ?? card.name
  const keywords = (esCard?.kw_up ?? card.kw_up).slice(0, 4).join(', ')
  const dateEs = new Date().toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const title = `Carta del Día de Tarot — ${esName} | TarotAxis`
  const description = `La carta del tarot de hoy es ${esName}: ${keywords}. Lectura diaria gratuita para ${dateEs}. Vuelve mañana para una nueva carta.`

  return {
    title,
    description,
    alternates: {
      canonical: 'https://tarotaxis.com/es/carta-del-dia',
      languages: {
        'en': 'https://tarotaxis.com/daily',
        'es': 'https://tarotaxis.com/es/carta-del-dia',
        'x-default': 'https://tarotaxis.com/daily',
      },
    },
    openGraph: {
      title,
      description,
      url: 'https://tarotaxis.com/es/carta-del-dia',
      locale: 'es_ES',
      alternateLocale: ['en_US'],
      images: [{
        url: `https://tarotaxis.com/og?slug=${card.slug}&type=daily&locale=es`,
        width: 1200,
        height: 630,
        alt: `${esName} — Carta del Día de Tarot`,
      }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Carta del Día — ${esName} | TarotAxis`,
      images: [`https://tarotaxis.com/og?slug=${card.slug}&type=daily&locale=es`],
    },
  }
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function SpanishDailyPage() {
  const { card, reversed } = getDailyCard()
  const esCard = await getCard(card.slug, 'es')
  const ext = await getCardExtended(card.slug, 'es')

  // Fallback to English base card if translation lookup failed for any reason.
  const name = esCard?.name ?? card.name
  const upText = esCard?.up ?? card.up
  const revText = esCard?.rev ?? card.rev
  const loveText = esCard?.love ?? card.love
  const careerText = esCard?.career ?? card.career
  const spiritText = esCard?.spirit ?? card.spirit
  const kwUp = esCard?.kw_up ?? card.kw_up
  const kwRev = esCard?.kw_rev ?? card.kw_rev

  const interpretation = reversed
    ? (ext?.rev2 ?? revText)
    : (ext?.up2  ?? upText)

  const keywords = (reversed ? kwRev : kwUp).slice(0, 5)

  const dateEs = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const suitLabel = SUIT_LABELS_ES[card.suit] ?? card.suitLabel
  const elementLabel = ELEMENT_ES[card.element] ?? card.element

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'es',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué es la carta del día del tarot?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La carta del día del tarot es una sola carta que se saca cada mañana para establecer una intención o un tema para el día. Funciona como un espejo diario — reflejando la energía, el desafío o la oportunidad más relevante para ti en este momento. Una carta es suficiente para invitar a la reflexión y afinar tu enfoque para el día.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo se usa la carta del día del tarot?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lee el mensaje de la carta por la mañana y mantenlo presente con suavidad durante el día. Observa dónde aparecen sus temas en tus experiencias, interacciones y decisiones. No tienes que actuar sobre ello literalmente — piénsalo como una lente que te ayuda a prestar atención a algo que podrías pasar por alto. Anotar una breve respuesta cada día profundiza la práctica considerablemente.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Todo el mundo recibe la misma carta del día?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'En TarotAxis, sí — la carta del día es la misma para todos en cualquier día dado, determinada por la fecha. Esto es intencional: crea una reflexión diaria compartida y facilita hablar de la carta con otros. El significado de la carta resonará igualmente diferente para cada persona dependiendo de su propia situación.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuándo cambia la carta del día del tarot?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La carta cambia cada día a medianoche. Cada día del calendario trae una nueva carta sacada del mazo completo de 78 cartas, incluyendo inversiones ocasionales. Hacer un chequeo cada mañana — antes de mirar el teléfono o las noticias — tiende a hacer la práctica más efectiva.',
        },
      },
    ],
  }

  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.22em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Tarot Diario
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '.6rem' }}>
          Carta del Día
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '.82rem', letterSpacing: '.04em' }}>{dateEs}</p>
      </div>

      {/* Card */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2.5rem', gap: '1.25rem' }}>

        {/* Image */}
        <div style={{ width: 200, height: 300, borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(201,168,76,.45)', boxShadow: '0 8px 40px rgba(0,0,0,.5)' }}>
          <CardImage slug={card.slug} alt={`${name}${reversed ? ' Invertida' : ''}`} reversed={reversed} />
        </div>

        {/* Name + badge */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.25rem', marginBottom: '.4rem' }}>
            {name}
          </div>
          <div style={{ display: 'flex', gap: '.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ padding: '.2rem .7rem', borderRadius: 20, fontSize: '.65rem', fontFamily: "'Cinzel',serif", letterSpacing: '.07em', background: reversed ? 'rgba(180,130,60,.12)' : 'rgba(201,168,76,.12)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,.25)' }}>
              {reversed ? 'Invertida' : 'Del Derecho'}
            </span>
            <span style={{ padding: '.2rem .7rem', borderRadius: 20, fontSize: '.65rem', fontFamily: "'Cinzel',serif", letterSpacing: '.07em', background: 'var(--on-bg-04)', color: 'var(--muted)', border: '1px solid var(--border)' }}>
              {suitLabel}
            </span>
            <span style={{ padding: '.2rem .7rem', borderRadius: 20, fontSize: '.65rem', fontFamily: "'Cinzel',serif", letterSpacing: '.07em', background: 'var(--on-bg-04)', color: 'var(--muted)', border: '1px solid var(--border)' }}>
              {elementLabel}
            </span>
          </div>
        </div>

        {/* Keywords */}
        <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {keywords.map(kw => (
            <span key={kw} style={{ padding: '.15rem .55rem', background: 'rgba(201,168,76,.07)', border: '1px solid rgba(201,168,76,.18)', borderRadius: 20, fontSize: '.65rem', color: 'var(--gold)', fontFamily: "'Cinzel',serif" }}>
              {kw}
            </span>
          ))}
        </div>

        {/* Share */}
        <ShareButton type="daily" cardName={name} />
      </div>

      {/* AI Reading — directamente bajo la carta como CTA principal */}
      <AIReadingBlock
        locale="es"
        source="free-reading"
        spreadName="Carta del Día"
        cards={[{ slug: card.slug, reversed, position: 'Hoy' }]}
      />

      {/* Interpretation */}
      <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .6, textTransform: 'uppercase', marginBottom: '.9rem' }}>
          {reversed ? 'Invertida — mensaje de hoy' : 'Del derecho — mensaje de hoy'}
        </div>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
          {interpretation}
        </p>
      </div>

      {/* Amor / Carrera / Espíritu snippets */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(190px,1fr))', gap: '.75rem', marginBottom: '2.5rem' }}>
        {[
          { label: 'Amor',     text: reversed ? (ext?.love2   ?? loveText)   : loveText },
          { label: 'Carrera',  text: reversed ? (ext?.career2 ?? careerText) : careerText },
          { label: 'Espíritu', text: spiritText },
        ].map(({ label, text }) => (
          <div key={label} style={{ background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.62rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .6, textTransform: 'uppercase', marginBottom: '.5rem' }}>
              {label}
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '.8rem', lineHeight: 1.7, margin: 0 }}>{text}</p>
          </div>
        ))}
      </div>

      {/* Tomorrow note */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem', padding: '1rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 12 }}>
        <p style={{ color: 'var(--muted)', fontSize: '.8rem', lineHeight: 1.7, margin: 0, opacity: .75 }}>
          Una nueva carta aparece a medianoche. Vuelve mañana para ver qué tiene el mazo para ti.
        </p>
      </div>

      {/* CTA links */}
      <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <Link href="/es/lectura-gratis" style={{ padding: '.75rem 1.5rem', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.35)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Lectura completa →
        </Link>
        <Link href={`/es/cartas/${localizeCardSlug(card.slug, 'es')}`} style={{ padding: '.75rem 1.5rem', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Significado completo de {name} →
        </Link>
      </div>

      {/* FAQ */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1.25rem', opacity: .9 }}>
          Sobre la Carta del Día
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={{ background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.5rem' }}>
                {item.name}
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.8, margin: 0 }}>
                {item.acceptedAnswer.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Explore spreads */}
      <div style={{ textAlign: 'center' }}>
        <Link href="/es" style={{ fontSize: '.75rem', color: 'var(--muted)', opacity: .5, fontFamily: "'Cinzel',serif", letterSpacing: '.06em' }}>
          Explorar todas las tiradas →
        </Link>
      </div>

    </div>
  )
}
