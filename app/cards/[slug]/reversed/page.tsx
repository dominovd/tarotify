import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CARDS, CARDS_BY_SLUG } from '@/lib/cards'
import { CARD_EXTENDED } from '@/lib/card-extended'
import { CARD_REVERSED_EXTENDED } from '@/lib/card-reversed-extended'
import CardImage from '@/components/CardImage'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return CARDS.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const card = CARDS_BY_SLUG[params.slug]
  if (!card) return {}
  return {
    title: `${card.name} Reversed — Tarot Meaning, Love, Career & Keywords | TarotAxis`,
    description: `${card.name} reversed tarot card meaning — in love, career and spirituality. Reversed keywords: ${card.kw_rev.slice(0, 4).join(', ')}. The shadow this card asks you to look at.`,
    alternates: { canonical: `https://tarotaxis.com/cards/${card.slug}/reversed` },
    openGraph: {
      title: `${card.name} Reversed — Tarot Card Meaning | TarotAxis`,
      description: `${card.name} reversed in love, career and spirit. Honest, nuanced guidance on what this card means when it appears upside-down.`,
      images: [{
        url: `https://tarotaxis.com/og?slug=${card.slug}&rev=1`,
        width: 1200,
        height: 630,
        alt: `${card.name} reversed tarot card`,
      }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${card.name} Reversed — Tarot Card Meaning | TarotAxis`,
      images: [`https://tarotaxis.com/og?slug=${card.slug}&rev=1`],
    },
  }
}

export default function CardReversedPage({ params }: Props) {
  const card = CARDS_BY_SLUG[params.slug]
  if (!card) notFound()

  const ext = CARD_EXTENDED[params.slug] ?? null
  const revExt = CARD_REVERSED_EXTENDED[params.slug] ?? null

  const allCards = CARDS
  const idx = allCards.findIndex(c => c.slug === card.slug)
  const prev = allCards[idx - 1]
  const next = allCards[idx + 1]

  // FAQs — prefer the rich reversed-extended set if present
  const reversedFaqs: Array<{ q: string; a: string }> = revExt?.reversedFaqs ?? [
    {
      q: `What does ${card.name} reversed mean in tarot?`,
      a: `${card.name} reversed signifies: ${card.kw_rev.join(', ')}. ${card.rev} The reversed orientation typically asks you to look at the shadow side of the upright meaning — what is blocked, distorted, withheld or turned inward — rather than treating the card as a simple negative.`,
    },
    {
      q: `Is ${card.name} reversed a good or bad card?`,
      a: `Reversed cards are rarely simply "bad." ${card.name} reversed is best read as an invitation to examine where the upright qualities of this card have become blocked, exaggerated, or expressed in distorted form. The most useful interpretation is usually about an internal pattern asking for attention rather than an external fate. Reversed cards are also often more actionable than upright ones, because they point to something you can change.`,
    },
    {
      q: `What does ${card.name} reversed mean in love?`,
      a: ext?.love2 ?? `In love readings, ${card.name} reversed points to where the energy of this card is being held back, twisted, or projected onto another person rather than honoured directly. The card is typically asking what you are not allowing yourself to feel, say or receive in your romantic life — and what shift in self-honesty would unstick the dynamic.`,
    },
    {
      q: `How do I work with a reversed card in a reading?`,
      a: `Read it twice. First as the upright meaning being blocked or unavailable. Second as the upright meaning expressed in shadow form — over-doing, under-doing, or doing it for the wrong reason. Most reversed cards live somewhere between these two readings. Do not flatten them into a simple negative; the reversal is information, not a verdict.`,
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: reversedFaqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  // Split paragraphs for rendering
  const splitParas = (text: string) =>
    text.split(/\n\n+/).map(p => p.trim()).filter(Boolean)

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
        <span>/</span>
        <Link href="/cards" style={{ color: 'var(--muted)' }}>Card Meanings</Link>
        <span>/</span>
        <Link href={`/cards/${card.slug}`} style={{ color: 'var(--muted)' }}>{card.name}</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Reversed</span>
      </nav>

      {/* Hero — rotated card image */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ width: 200, height: 300, margin: '0 auto 1.5rem', borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,.4)', transform: 'rotate(180deg)' }}>
          <CardImage slug={card.slug} alt={`${card.name} reversed tarot card`} />
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.4rem,4vw,1.9rem)', color: 'var(--gold)', marginBottom: '.5rem' }}>
          {card.name} Reversed
        </h1>
        <div style={{ display: 'flex', gap: '.6rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ padding: '.25rem .85rem', border: '1px solid var(--border)', borderRadius: 20, fontSize: '.72rem', color: 'var(--muted)', fontFamily: "'Cinzel',serif", letterSpacing: '.08em' }}>
            {card.suitLabel} · {card.number}
          </span>
          <span style={{ padding: '.25rem .85rem', borderRadius: 20, fontSize: '.72rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', background: 'rgba(122,45,45,.18)', color: '#d27a7a', border: '1px solid rgba(210,122,122,.3)' }}>
            ↻ REVERSED
          </span>
        </div>
      </div>

      {/* Section nav (anchor links) */}
      {revExt && (
        <div style={{ display: 'flex', gap: '.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {[
            { href: '#meaning', label: 'Meaning' },
            { href: '#love', label: 'Love' },
            { href: '#career', label: 'Career' },
            { href: '#spirit', label: 'Spirit' },
            { href: '#faq', label: 'FAQ' },
          ].map(item => (
            <a key={item.href} href={item.href} style={{ padding: '.3rem .8rem', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 20, color: 'var(--muted)', fontSize: '.72rem', fontFamily: "'Cinzel',serif", letterSpacing: '.06em', textDecoration: 'none' }}>
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* Intro */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem', marginBottom: '1.5rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.7rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.6rem' }}>
          What a Reversed Card Means
        </div>
        <p style={{ color: 'var(--text)', lineHeight: 1.75, margin: 0 }}>
          A reversed card is not a flipped-meaning card. {card.name} reversed asks you to look at the same energies as the upright version, but from a less comfortable angle — where the qualities are blocked, exaggerated, withheld, or expressed in shadow form. Most often, the reversal is more useful than the upright reading, because it points to something internal that you can actually change.
        </p>
      </div>

      {/* Reversed Keywords */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.6rem' }}>
          {card.name} Reversed Keywords
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.35rem' }}>
          {card.kw_rev.map(k => (
            <span key={k} style={{ padding: '.2rem .55rem', background: 'rgba(210,122,122,.08)', border: '1px solid rgba(210,122,122,.18)', borderRadius: 20, fontSize: '.72rem', color: 'var(--muted)' }}>{k}</span>
          ))}
        </div>
      </div>

      {/* Main Reversed Meaning */}
      <div id="meaning" style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem', marginBottom: '1.5rem', scrollMarginTop: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", fontSize: '.75rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase', marginBottom: '.75rem' }}>
          {card.name} Reversed — Meaning
        </h2>
        <p style={{ color: 'var(--text)', lineHeight: 1.75, marginBottom: ext?.rev2 ? '1rem' : 0 }}>{card.rev}</p>
        {ext?.rev2 && <p style={{ color: 'var(--text)', lineHeight: 1.75, margin: 0 }}>{ext.rev2}</p>}
      </div>

      {/* Long-form Love / Career / Spirit (Reversed) — primary content for long-tail SEO */}
      {revExt ? (
        <>
          <section id="love" style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem', scrollMarginTop: '2rem' }}>
            <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              <span style={{ fontSize: '1.1rem' }}>❤️</span> {card.name} Reversed in Love
            </h2>
            {splitParas(revExt.loveLong).map((p, i) => (
              <p key={i} style={{ color: 'var(--text)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '.93rem' }}>{p}</p>
            ))}
          </section>

          <section id="career" style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem', scrollMarginTop: '2rem' }}>
            <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              <span style={{ fontSize: '1.1rem' }}>💼</span> {card.name} Reversed in Career
            </h2>
            {splitParas(revExt.careerLong).map((p, i) => (
              <p key={i} style={{ color: 'var(--text)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '.93rem' }}>{p}</p>
            ))}
          </section>

          <section id="spirit" style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem', marginBottom: '1.5rem', scrollMarginTop: '2rem' }}>
            <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              <span style={{ fontSize: '1.1rem' }}>🌿</span> {card.name} Reversed Spiritually
            </h2>
            {splitParas(revExt.spiritLong).map((p, i) => (
              <p key={i} style={{ color: 'var(--text)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '.93rem' }}>{p}</p>
            ))}
          </section>
        </>
      ) : ext ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '.75rem', marginBottom: '2rem' }}>
          {[
            ['❤️', `${card.name} Reversed in Love`, ext.love2, 'love'],
            ['💼', `${card.name} Reversed in Career`, ext.career2, 'career'],
            ['🌿', `${card.name} Reversed — Spirit`, ext.spirit2, 'spirit'],
          ].map(([icon, label, text, id]) => (
            <div key={label as string} id={id as string} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem', scrollMarginTop: '2rem' }}>
              <div style={{ fontSize: '1.2rem', marginBottom: '.4rem' }}>{icon}</div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.1em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.5rem' }}>{label}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.6, margin: 0 }}>{text as string}</p>
            </div>
          ))}
        </div>
      ) : null}

      {/* Upright vs Reversed CTA */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.75rem', marginBottom: '2.5rem' }}>
        <Link href={`/cards/${card.slug}`} style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.25)', borderRadius: 12, textDecoration: 'none' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase', marginBottom: '.3rem' }}>See Also</div>
          <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>{card.name} Upright Meaning →</div>
        </Link>
        <Link href="/free-reading" style={{ display: 'block', padding: '1rem 1.1rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, textDecoration: 'none' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase', marginBottom: '.3rem' }}>Draw Now</div>
          <div style={{ color: 'var(--gold)', fontSize: '.88rem' }}>✦ Free Tarot Reading →</div>
        </Link>
      </div>

      {/* FAQ */}
      <div id="faq" style={{ marginBottom: '2.5rem', scrollMarginTop: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Frequently Asked Questions
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

      {/* Prev / Next */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        {prev ? (
          <Link href={`/cards/${prev.slug}/reversed`} style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            ← {prev.name} Reversed
          </Link>
        ) : <span />}
        {next && (
          <Link href={`/cards/${next.slug}/reversed`} style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            {next.name} Reversed →
          </Link>
        )}
      </div>
    </div>
  )
}
