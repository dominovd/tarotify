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
  getCardFeelings,
} from '@/lib/i18n/get-card'
import CardImage from '@/components/CardImage'

interface Props { params: { slug: string } }

function metaSnippet(text: string, maxLength = 155): string {
  const compact = text.replace(/\s+/g, ' ').trim()
  return compact.length > maxLength ? `${compact.slice(0, maxLength)}…` : compact
}

export async function generateStaticParams() {
  return CARDS.map(c => ({ slug: localizeCardSlug(c.slug, 'es') }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const enSlug = canonicalCardSlug(params.slug, 'es')
  const card = await getCard(enSlug, 'es')
  if (!card) return {}
  const feel = await getCardFeelings(enSlug, 'es')

  const title = `${card.name} como sentimientos — Significado en el Amor | TarotAxis`
  const description = feel
    ? `${card.name} como sentimientos: ${metaSnippet(feel.howTheyFeel)}`
    : `${card.name} como sentimientos — lo que esta carta revela sobre las emociones de alguien en una lectura de amor o relación, del derecho e invertida.`

  return {
    title,
    description,
    alternates: {
      canonical: `https://tarotaxis.com/es/cartas/${params.slug}/sentimientos`,
      languages: {
        'en': `https://tarotaxis.com/cards/${enSlug}/feelings`,
        'es': `https://tarotaxis.com/es/cartas/${params.slug}/sentimientos`,
        'x-default': `https://tarotaxis.com/cards/${enSlug}/feelings`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://tarotaxis.com/es/cartas/${params.slug}/sentimientos`,
      locale: 'es_ES',
      alternateLocale: ['en_US'],
      images: [{
        url: `https://tarotaxis.com/og?slug=${enSlug}&type=feelings&locale=es`,
        width: 1200,
        height: 630,
        alt: `${card.name} carta de tarot como sentimientos`,
      }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${card.name} Como Sentimientos — Significado del Tarot | TarotAxis`,
      images: [`https://tarotaxis.com/og?slug=${enSlug}&type=feelings&locale=es`],
    },
  }
}

export default async function SpanishCardFeelingsPage({ params }: Props) {
  const enSlug = canonicalCardSlug(params.slug, 'es')

  const validEsSlug = CARD_SLUGS.es[enSlug] === params.slug
  if (!validEsSlug) notFound()

  const card = await getCard(enSlug, 'es')
  if (!card) notFound()

  const ext = await getCardExtended(enSlug, 'es')
  const feel = await getCardFeelings(enSlug, 'es')

  // Prev/Next neighbour cards in canonical order, resolved to Spanish names.
  const idx = CARDS.findIndex(c => c.slug === enSlug)
  const prevBase = CARDS[idx - 1]
  const nextBase = CARDS[idx + 1]
  const [prevCard, nextCard] = await Promise.all([
    prevBase ? getCard(prevBase.slug, 'es') : null,
    nextBase ? getCard(nextBase.slug, 'es') : null,
  ])

  const feelingsFaqs = feel?.feelingsFaqs ?? []

  const faqSchema = feelingsFaqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'es',
    mainEntity: feelingsFaqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } : null

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
        <span style={{ color: 'var(--gold)' }}>Sentimientos</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ width: 200, height: 300, margin: '0 auto 1.5rem', borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,.4)' }}>
          <CardImage slug={enSlug} alt={`${card.name} carta de tarot como sentimientos`} />
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.4rem,4vw,1.9rem)', color: 'var(--gold)', marginBottom: '.4rem' }}>
          {card.name}
        </h1>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.9rem', color: 'var(--gold)', opacity: .8, letterSpacing: '.08em', marginBottom: '.75rem' }}>
          Como sentimientos
        </div>
        <div style={{ display: 'flex', gap: '.6rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ padding: '.25rem .85rem', border: '1px solid var(--border)', borderRadius: 20, fontSize: '.72rem', color: 'var(--muted)', fontFamily: "'Cinzel',serif", letterSpacing: '.08em' }}>
            {card.suitLabel} · {card.number}
          </span>
          <span style={{ padding: '.25rem .85rem', borderRadius: 20, fontSize: '.72rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', background: 'rgba(201,168,76,.12)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,.3)' }}>
            ❦ SENTIMIENTOS
          </span>
        </div>
      </div>

      {/* Hero intro */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem', marginBottom: '1.5rem' }}>
        <p style={{ color: 'var(--text)', lineHeight: 1.75, margin: 0 }}>
          En una lectura de sentimientos, {card.name} describe el clima emocional que la otra persona aporta a la conexión — qué siente, qué está dispuesta a abrir y qué puede haber justo bajo la superficie. Lee el significado del derecho, invertida, y cómo se siente contigo.
        </p>
      </div>

      {/* Section nav */}
      {feel && (
        <div style={{ display: 'flex', gap: '.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {[
            { href: '#derecho', label: 'Del derecho' },
            { href: '#invertida', label: 'Invertida' },
            { href: '#como-se-sienten', label: 'Cómo se sienten' },
            { href: '#faq', label: 'FAQ' },
          ].map(item => (
            <a key={item.href} href={item.href} style={{ padding: '.3rem .8rem', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 20, color: 'var(--muted)', fontSize: '.72rem', fontFamily: "'Cinzel',serif", letterSpacing: '.06em', textDecoration: 'none' }}>
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* Feelings Keywords */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.6rem' }}>
          {card.name} — Palabras clave de sentimientos
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.35rem' }}>
          {card.kw_up.map(k => (
            <span key={k} style={{ padding: '.2rem .55rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.18)', borderRadius: 20, fontSize: '.72rem', color: 'var(--muted)' }}>{k}</span>
          ))}
        </div>
      </div>

      {/* Long-form sections */}
      {feel ? (
        <>
          <section id="derecho" style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem', scrollMarginTop: 80 }}>
            <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              <span style={{ fontSize: '1.1rem', color: 'var(--gold)' }}>❦</span> {card.name} del derecho como sentimientos
            </h2>
            {splitParas(feel.uprightLong).map((p, i) => (
              <p key={i} style={{ color: 'var(--text)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '.93rem' }}>{p}</p>
            ))}
          </section>

          <section id="invertida" style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem', scrollMarginTop: 80 }}>
            <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              <span style={{ fontSize: '1.1rem' }}>↻</span> {card.name} invertida como sentimientos
            </h2>
            {splitParas(feel.reversedLong).map((p, i) => (
              <p key={i} style={{ color: 'var(--text)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '.93rem' }}>{p}</p>
            ))}
          </section>

          <section id="como-se-sienten" style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem', marginBottom: '1.5rem', scrollMarginTop: 80 }}>
            <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              <span style={{ fontSize: '1.1rem' }}>💭</span> Cómo se sienten contigo cuando aparece {card.name}
            </h2>
            {splitParas(feel.howTheyFeel).map((p, i) => (
              <p key={i} style={{ color: 'var(--text)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '.93rem' }}>{p}</p>
            ))}
          </section>
        </>
      ) : ext ? (
        <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.95rem', marginBottom: '.75rem' }}>{card.name} en el amor</h2>
          <p style={{ color: 'var(--text)', lineHeight: 1.75, marginBottom: '1rem' }}>{card.love}</p>
          {ext.love2 && <p style={{ color: 'var(--text)', lineHeight: 1.75, margin: 0 }}>{ext.love2}</p>}
        </div>
      ) : null}

      {/* CTAs — back to main / reversed page */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '.75rem', marginBottom: '2.5rem' }}>
        <Link href={`/es/cartas/${params.slug}`} style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.25)', borderRadius: 12, textDecoration: 'none' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase', marginBottom: '.3rem' }}>◐ Ver carta completa</div>
          <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Significado completo de {card.name} — del derecho, invertida, amor, carrera, espíritu →</div>
        </Link>
        <Link href={`/es/cartas/${params.slug}/invertida`} style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(210,122,122,.06)', border: '1px solid rgba(210,122,122,.25)', borderRadius: 12, textDecoration: 'none' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase', marginBottom: '.3rem' }}>◑ Página de invertida</div>
          <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>{card.name} invertida — significado completo de la energía invertida →</div>
        </Link>
      </div>

      {/* Free reading CTA */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <Link
          href="/es"
          style={{ display: 'inline-block', padding: '.85rem 2rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.9rem', letterSpacing: '.08em' }}
        >
          ✦ Lectura completa
        </Link>
      </div>

      {/* FAQ */}
      {feelingsFaqs.length > 0 && (
        <div id="faq" style={{ marginBottom: '2.5rem', scrollMarginTop: 80 }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
            Preguntas frecuentes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {feelingsFaqs.map(({ q, a }) => (
              <div key={q} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
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
            href={`/es/cartas/${localizeCardSlug(prevBase.slug, 'es')}/sentimientos`}
            style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}
          >
            ← {prevCard.name}
          </Link>
        ) : <span />}
        {nextBase && nextCard && (
          <Link
            href={`/es/cartas/${localizeCardSlug(nextBase.slug, 'es')}/sentimientos`}
            style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}
          >
            {nextCard.name} →
          </Link>
        )}
      </div>
    </div>
  )
}
