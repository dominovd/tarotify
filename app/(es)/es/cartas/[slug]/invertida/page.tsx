import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CARDS } from '@/lib/cards'
import {
  CARD_SLUGS,
  canonicalCardSlug,
  localizeCardSlug,
} from '@/lib/i18n/slugs'
import {
  getCard,
  getCardExtended,
  getCardReversed,
} from '@/lib/i18n/get-card'
import CardImage from '@/components/CardImage'

interface Props { params: { slug: string } }

// Static params: every card has a Spanish slug for the /invertida sub-route.
export async function generateStaticParams() {
  return CARDS.map(c => ({ slug: localizeCardSlug(c.slug, 'es') }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const enSlug = canonicalCardSlug(params.slug, 'es')
  const card = await getCard(enSlug, 'es')
  if (!card) return {}

  const title = `${card.name} Invertida — Significado de la Carta del Tarot | TarotAxis`
  const description = `${card.name} invertida: significado en el amor, la carrera y lo espiritual. Palabras clave invertidas: ${card.kw_rev.slice(0, 4).join(', ')}. La sombra que esta carta te invita a mirar.`

  return {
    title,
    description,
    alternates: {
      canonical: `https://tarotaxis.com/es/cartas/${params.slug}/invertida`,
      languages: {
        'en': `https://tarotaxis.com/cards/${enSlug}/reversed`,
        'es': `https://tarotaxis.com/es/cartas/${params.slug}/invertida`,
        'x-default': `https://tarotaxis.com/cards/${enSlug}/reversed`,
      },
    },
    openGraph: {
      title: `${card.name} Invertida — Carta del Tarot | TarotAxis`,
      description: `${card.name} invertida en el amor, la carrera y el espíritu. Guía honesta y matizada sobre lo que significa esta carta cuando aparece al revés.`,
      url: `https://tarotaxis.com/es/cartas/${params.slug}/invertida`,
      locale: 'es_ES',
      alternateLocale: ['en_US'],
      images: [{
        url: `https://tarotaxis.com/og?slug=${enSlug}&rev=1&locale=es`,
        width: 1200,
        height: 630,
        alt: `${card.name} carta de tarot invertida`,
      }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${card.name} Invertida — Carta del Tarot | TarotAxis`,
      images: [`https://tarotaxis.com/og?slug=${enSlug}&rev=1&locale=es`],
    },
  }
}

export default async function SpanishCardReversedPage({ params }: Props) {
  const enSlug = canonicalCardSlug(params.slug, 'es')

  // Validate that the incoming Spanish slug is one we recognise. If not, 404.
  const validEsSlug = CARD_SLUGS.es[enSlug] === params.slug
  if (!validEsSlug) notFound()

  const card = await getCard(enSlug, 'es')
  if (!card) notFound()

  const ext = await getCardExtended(enSlug, 'es')
  const revExt = await getCardReversed(enSlug, 'es')

  // Prev/Next neighbour cards in the canonical Major→Suits order.
  const idx = CARDS.findIndex(c => c.slug === enSlug)
  const prevBase = CARDS[idx - 1]
  const nextBase = CARDS[idx + 1]
  const [prevCard, nextCard] = await Promise.all([
    prevBase ? getCard(prevBase.slug, 'es') : null,
    nextBase ? getCard(nextBase.slug, 'es') : null,
  ])

  // FAQs come from revExt (already in target locale, with EN fallback per-key).
  const reversedFaqs = revExt?.reversedFaqs ?? []

  const faqSchema = reversedFaqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'es',
    mainEntity: reversedFaqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } : null

  // Split paragraphs for rendering long-form sections.
  const splitParas = (text: string) =>
    text.split(/\n\n+/).map(p => p.trim()).filter(Boolean)

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Breadcrumb */}
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <Link href="/es" style={{ color: 'var(--muted)' }}>Inicio</Link>
        <span>/</span>
        <Link href="/es/cartas" style={{ color: 'var(--muted)' }}>Significado de las Cartas</Link>
        <span>/</span>
        <Link href={`/es/cartas/${params.slug}`} style={{ color: 'var(--muted)' }}>{card.name}</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Invertida</span>
      </nav>

      {/* Hero — rotated card image */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ width: 200, height: 300, margin: '0 auto 1.5rem', borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,.4)', transform: 'rotate(180deg)' }}>
          <CardImage slug={enSlug} alt={`${card.name} carta de tarot invertida`} />
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.4rem,4vw,1.9rem)', color: 'var(--gold)', marginBottom: '.5rem' }}>
          {card.name} Invertida
        </h1>
        <div style={{ display: 'flex', gap: '.6rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ padding: '.25rem .85rem', border: '1px solid var(--border)', borderRadius: 20, fontSize: '.72rem', color: 'var(--muted)', fontFamily: "'Cinzel',serif", letterSpacing: '.08em' }}>
            {card.suitLabel} · {card.number}
          </span>
          <span style={{ padding: '.25rem .85rem', borderRadius: 20, fontSize: '.72rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', background: 'rgba(122,45,45,.18)', color: '#d27a7a', border: '1px solid rgba(210,122,122,.3)' }}>
            ↻ INVERTIDA
          </span>
        </div>
      </div>

      {/* Intro */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem', marginBottom: '1.5rem' }}>
        <p style={{ color: 'var(--text)', lineHeight: 1.75, margin: 0 }}>
          Cuando {card.name} aparece invertida, su energía se vuelve hacia adentro o se encuentra bloqueada. Lee el significado en el amor, la carrera y lo espiritual — más cuatro preguntas frecuentes sobre cómo trabajar con cartas invertidas.
        </p>
      </div>

      {/* Section nav (anchor links) */}
      {revExt && (
        <div style={{ display: 'flex', gap: '.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {[
            { href: '#amor', label: 'En el amor' },
            { href: '#carrera', label: 'En la carrera' },
            { href: '#espiritu', label: 'En lo espiritual' },
          ].map(item => (
            <a key={item.href} href={item.href} style={{ padding: '.3rem .8rem', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 20, color: 'var(--muted)', fontSize: '.72rem', fontFamily: "'Cinzel',serif", letterSpacing: '.06em', textDecoration: 'none' }}>
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* Reversed Keywords */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.6rem' }}>
          Palabras clave (invertida)
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.35rem' }}>
          {card.kw_rev.map(k => (
            <span key={k} style={{ padding: '.2rem .55rem', background: 'rgba(210,122,122,.08)', border: '1px solid rgba(210,122,122,.18)', borderRadius: 20, fontSize: '.72rem', color: 'var(--muted)' }}>{k}</span>
          ))}
        </div>
      </div>

      {/* Main Reversed Meaning */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem', marginBottom: '1.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", fontSize: '.75rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase', marginBottom: '.75rem' }}>
          Significado invertido
        </h2>
        <p style={{ color: 'var(--text)', lineHeight: 1.75, marginBottom: ext?.rev2 ? '1rem' : 0 }}>{card.rev}</p>
        {ext?.rev2 && <p style={{ color: 'var(--text)', lineHeight: 1.75, margin: 0 }}>{ext.rev2}</p>}
      </div>

      {/* Long-form Love / Career / Spirit (Reversed) — primary content for long-tail SEO */}
      {revExt && (
        <>
          <section id="amor" style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem', scrollMarginTop: 80 }}>
            <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              <span style={{ fontSize: '1.1rem' }}>❤️</span> {card.name} invertida en el amor
            </h2>
            {splitParas(revExt.loveLong).map((p, i) => (
              <p key={i} style={{ color: 'var(--text)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '.93rem' }}>{p}</p>
            ))}
          </section>

          <section id="carrera" style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem', scrollMarginTop: 80 }}>
            <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              <span style={{ fontSize: '1.1rem' }}>💼</span> {card.name} invertida en la carrera
            </h2>
            {splitParas(revExt.careerLong).map((p, i) => (
              <p key={i} style={{ color: 'var(--text)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '.93rem' }}>{p}</p>
            ))}
          </section>

          <section id="espiritu" style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem', marginBottom: '1.5rem', scrollMarginTop: 80 }}>
            <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              <span style={{ fontSize: '1.1rem' }}>🌿</span> {card.name} invertida en lo espiritual
            </h2>
            {splitParas(revExt.spiritLong).map((p, i) => (
              <p key={i} style={{ color: 'var(--text)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '.93rem' }}>{p}</p>
            ))}
          </section>
        </>
      )}

      {/* Upright + Feelings + Free reading CTAs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '.75rem', marginBottom: '2.5rem' }}>
        <Link href={`/es/cartas/${params.slug}`} style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.25)', borderRadius: 12, textDecoration: 'none' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase', marginBottom: '.3rem' }}>◐ Lectura del derecho</div>
          <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Ver {card.name} del derecho — significado completo, amor, carrera, espíritu →</div>
        </Link>
        <Link href={`/es/cartas/${params.slug}/sentimientos`} style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.25)', borderRadius: 12, textDecoration: 'none' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase', marginBottom: '.3rem' }}>❦ En una lectura de sentimientos</div>
          <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>{card.name} como sentimientos — qué revela sobre cómo se sienten contigo →</div>
        </Link>
        <Link href="/es" style={{ display: 'block', padding: '1rem 1.1rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, textDecoration: 'none' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase', marginBottom: '.3rem' }}>✦ Lectura completa</div>
          <div style={{ color: 'var(--gold)', fontSize: '.88rem' }}>✦ Lectura completa →</div>
        </Link>
      </div>

      {/* FAQ */}
      {reversedFaqs.length > 0 && (
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
            Preguntas frecuentes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {reversedFaqs.map(({ q, a }) => (
              <div key={q} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{q}</div>
                <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Prev / Next */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        {prevBase && prevCard ? (
          <Link
            href={`/es/cartas/${localizeCardSlug(prevBase.slug, 'es')}/invertida`}
            style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}
          >
            ← {prevCard.name}
          </Link>
        ) : <span />}
        {nextBase && nextCard && (
          <Link
            href={`/es/cartas/${localizeCardSlug(nextBase.slug, 'es')}/invertida`}
            style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}
          >
            {nextCard.name} →
          </Link>
        )}
      </div>
    </div>
  )
}
