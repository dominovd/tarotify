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
  getCardLove,
} from '@/lib/i18n/get-card'
import CardImage from '@/components/CardImage'

interface Props { params: { slug: string } }

// Static params: every card has a Spanish slug. The dynamic [slug] segment
// receives the Spanish form (e.g. "el-loco"); we canonicalise to English
// internally to look up content.
export async function generateStaticParams() {
  return CARDS.map(c => ({ slug: localizeCardSlug(c.slug, 'es') }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const enSlug = canonicalCardSlug(params.slug, 'es')
  const card = await getCard(enSlug, 'es')
  if (!card) return {}
  const ext = await getCardExtended(enSlug, 'es')

  const title = `${card.name} — Significado de la Carta del Tarot | TarotAxis`
  const descBase = `${card.name}: ${card.kw_up.join(', ')}.`
  const description = ext
    ? `${descBase} ${ext.faq?.[0]?.a?.slice(0, 110) ?? 'Significado del derecho, invertida, amor, carrera y guía espiritual.'}…`
    : `${descBase} Significado del derecho, invertida, amor, carrera y guía espiritual.`

  return {
    title,
    description,
    alternates: {
      canonical: `https://tarotaxis.com/es/cartas/${params.slug}`,
      languages: {
        'en': `https://tarotaxis.com/cards/${enSlug}`,
        'es': `https://tarotaxis.com/es/cartas/${params.slug}`,
        'x-default': `https://tarotaxis.com/cards/${enSlug}`,
      },
    },
    openGraph: {
      title: `${card.name} — Carta del Tarot | TarotAxis`,
      description: `${card.name}: ${card.kw_up.join(', ')}.`,
      url: `https://tarotaxis.com/es/cartas/${params.slug}`,
      locale: 'es_ES',
      alternateLocale: ['en_US'],
      images: [{
        url: `https://tarotaxis.com/og?slug=${enSlug}&locale=es`,
        width: 1200,
        height: 630,
        alt: `${card.name} carta de tarot`,
      }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${card.name} — Carta del Tarot | TarotAxis`,
      images: [`https://tarotaxis.com/og?slug=${enSlug}&locale=es`],
    },
  }
}

const YN_STYLE: Record<string, { bg: string; color: string; label: string }> = {
  yes:   { bg: 'rgba(45,122,79,.2)',  color: '#3daa6a', label: 'SÍ' },
  no:    { bg: 'rgba(122,45,45,.2)',  color: '#aa3d3d', label: 'NO' },
  maybe: { bg: 'rgba(122,94,26,.2)', color: '#c9a84c', label: 'QUIZÁS' },
}

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

export default async function SpanishCardPage({ params }: Props) {
  const enSlug = canonicalCardSlug(params.slug, 'es')

  // Validate that the incoming Spanish slug is one we recognise. If not, 404.
  const validEsSlug = CARD_SLUGS.es[enSlug] === params.slug
  if (!validEsSlug) notFound()

  const card = await getCard(enSlug, 'es')
  if (!card) notFound()

  const ext = await getCardExtended(enSlug, 'es')
  const loveExt = await getCardLove(enSlug, 'es')
  const yn = YN_STYLE[card.yn]

  // Prev/Next neighbour cards in the canonical Major→Suits order.
  const idx = CARDS.findIndex(c => c.slug === enSlug)
  const prevBase = CARDS[idx - 1]
  const nextBase = CARDS[idx + 1]
  const [prevCard, nextCard] = await Promise.all([
    prevBase ? getCard(prevBase.slug, 'es') : null,
    nextBase ? getCard(nextBase.slug, 'es') : null,
  ])

  // Merge FAQ schema entries from general + love-context FAQs.
  const allFaqs = [
    ...(ext?.faq ?? []),
    ...(loveExt?.loveFaqs ?? []),
  ]
  const faqSchema = allFaqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'es',
    mainEntity: allFaqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } : null

  const suitLabel = SUIT_LABELS_ES[card.suit] ?? card.suitLabel
  const elementLabel = ELEMENT_ES[card.element] ?? card.element

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
        <span style={{ color: 'var(--gold)' }}>{card.name}</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ width: 200, height: 300, margin: '0 auto 1.5rem', borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,.4)' }}>
          <CardImage slug={enSlug} alt={`${card.name} carta de tarot`} />
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '.5rem' }}>
          {card.name}
        </h1>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ padding: '.25rem .85rem', border: '1px solid var(--border)', borderRadius: 20, fontSize: '.72rem', color: 'var(--muted)', fontFamily: "'Cinzel',serif", letterSpacing: '.08em' }}>
            {suitLabel} · {card.number}
          </span>
          <span style={{ padding: '.25rem .85rem', borderRadius: 20, fontSize: '.72rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', background: yn.bg, color: yn.color }}>
            {yn.label}
          </span>
          <span style={{ fontSize: '.72rem', color: 'var(--muted)' }}>{elementLabel}</span>
        </div>
      </div>

      {/* Yes/No */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem', marginBottom: '1.5rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.7rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.6rem' }}>
          Sí o No
        </div>
        <p style={{ color: 'var(--text)', lineHeight: 1.7 }}>{card.yn_exp}</p>
      </div>

      {/* Keywords */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.75rem', marginBottom: '1.5rem' }}>
        {[
          ['Palabras clave (del derecho)', card.kw_up],
          ['Palabras clave (invertida)', card.kw_rev],
        ].map(([label, kws]) => (
          <div key={label as string} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.6rem' }}>{label}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.35rem' }}>
              {(kws as string[]).map(k => (
                <span key={k} style={{ padding: '.2rem .55rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 20, fontSize: '.72rem', color: 'var(--muted)' }}>{k}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Upright Meaning */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem', marginBottom: '1rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", fontSize: '.75rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase', marginBottom: '.75rem' }}>
          Significado del derecho
        </h2>
        <p style={{ color: 'var(--text)', lineHeight: 1.75, marginBottom: ext?.up2 ? '1rem' : 0 }}>{card.up}</p>
        {ext?.up2 && <p style={{ color: 'var(--text)', lineHeight: 1.75 }}>{ext.up2}</p>}
      </div>

      {/* Reversed Meaning */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap', marginBottom: '.75rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", fontSize: '.75rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase', margin: 0 }}>
            Significado invertida
          </h2>
          <Link
            href={`/es/cartas/${params.slug}/invertida`}
            style={{ fontSize: '.72rem', color: 'var(--gold)', opacity: .7, fontFamily: "'Cinzel',serif", letterSpacing: '.06em' }}
          >
            Página completa invertida →
          </Link>
        </div>
        <p style={{ color: 'var(--text)', lineHeight: 1.75, marginBottom: ext?.rev2 ? '1rem' : 0 }}>{card.rev}</p>
        {ext?.rev2 && <p style={{ color: 'var(--text)', lineHeight: 1.75 }}>{ext.rev2}</p>}
      </div>

      {/* Love / Career / Spirit short grid */}
      <div id="love" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '.75rem', marginBottom: (loveExt || ext) ? '1rem' : '2rem', scrollMarginTop: 80 }}>
        {[
          ['❤️', 'Amor', card.love],
          ['💼', 'Carrera', card.career],
          ['🌿', 'Espíritu', card.spirit],
        ].map(([icon, label, text]) => (
          <div key={label as string} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem' }}>
            <div style={{ fontSize: '1.2rem', marginBottom: '.4rem' }}>{icon}</div>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.5rem' }}>{label}</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.6 }}>{text as string}</p>
          </div>
        ))}
      </div>

      {/* Extended upright-love section */}
      {loveExt && (
        <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem 1.4rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", fontSize: '.95rem', color: 'var(--gold)', letterSpacing: '.06em', marginTop: 0, marginBottom: '.85rem' }}>
            {card.name} en el amor — Significado completo
          </h2>
          {loveExt.loveLong.split(/\n\n+/).map((para, i) => (
            <p key={i} style={{ color: 'var(--text)', lineHeight: 1.75, marginTop: i === 0 ? 0 : '.9rem', marginBottom: 0 }}>
              {para.trim()}
            </p>
          ))}
        </div>
      )}

      {/* Feelings sub-page CTA */}
      <Link
        href={`/es/cartas/${params.slug}/sentimientos`}
        style={{
          display: 'block',
          padding: '1rem 1.1rem',
          background: 'linear-gradient(135deg,rgba(201,168,76,.12),rgba(201,168,76,.04))',
          border: '1px solid rgba(201,168,76,.3)',
          borderRadius: 12,
          textDecoration: 'none',
          marginBottom: ext ? '1rem' : '2rem',
        }}
      >
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase', marginBottom: '.3rem' }}>
          ❦ En una lectura de sentimientos
        </div>
        <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>
          {card.name} como sentimientos — qué revela sobre cómo se sienten contigo →
        </div>
      </Link>

      {/* Extended Love / Career / Spirit (reversed) */}
      {ext && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '.75rem', marginBottom: '2rem' }}>
          {[
            ['❤️', `${card.name} en el amor — Invertida`, ext.love2],
            ['💼', `${card.name} en la carrera — Invertida`, ext.career2],
            ['🌿', `${card.name} espiritualidad — Invertida`, ext.spirit2],
          ].map(([icon, label, text]) => (
            <div key={label as string} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(201,168,76,.1)', borderRadius: 12, padding: '1rem' }}>
              <div style={{ fontSize: '1.2rem', marginBottom: '.4rem' }}>{icon}</div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .5, textTransform: 'uppercase', marginBottom: '.5rem' }}>{label}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.6 }}>{text as string}</p>
            </div>
          ))}
        </div>
      )}

      {/* CTA */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <Link
          href="/es"
          style={{ display: 'inline-block', padding: '.85rem 2rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.9rem', letterSpacing: '.08em' }}
        >
          ✦ Lectura completa
        </Link>
      </div>

      {/* FAQ */}
      {allFaqs.length > 0 && (
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
            Preguntas frecuentes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {allFaqs.map(({ q, a }) => (
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
            href={`/es/cartas/${localizeCardSlug(prevBase.slug, 'es')}`}
            style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}
          >
            ← {prevCard.name}
          </Link>
        ) : <span />}
        {nextBase && nextCard && (
          <Link
            href={`/es/cartas/${localizeCardSlug(nextBase.slug, 'es')}`}
            style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}
          >
            {nextCard.name} →
          </Link>
        )}
      </div>
    </div>
  )
}
