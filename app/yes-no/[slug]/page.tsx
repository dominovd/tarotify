import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CARDS, CARDS_BY_SLUG } from '@/lib/cards'
import CardImage from '@/components/CardImage'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return CARDS.map(c => ({ slug: c.slug }))
}

const YN_META: Record<string, { label: string; color: string; bg: string; summary: string }> = {
  yes:   { label: 'Yes',   color: '#3daa6a', bg: 'rgba(45,122,79,.18)',  summary: 'a positive yes card' },
  no:    { label: 'No',    color: '#aa3d3d', bg: 'rgba(122,45,45,.18)',  summary: 'a no card' },
  maybe: { label: 'Maybe', color: '#c9a84c', bg: 'rgba(122,94,26,.18)', summary: 'a maybe card — the answer is not yet clear' },
}

const YN_ICON: Record<string, string> = { yes: '✓', no: '✗', maybe: '?' }

function ynContext(yn: string): string {
  if (yn === 'yes')   return 'leans towards yes'
  if (yn === 'no')    return 'leans towards no'
  return 'sits in the space of maybe'
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const card = CARDS_BY_SLUG[params.slug]
  if (!card) return {}
  const m = YN_META[card.yn]
  return {
    title: `${card.name} Yes or No — Tarot Answer | TarotAxis`,
    description: `Is ${card.name} a yes or no card? ${card.yn_exp} Full answer for love, career and general questions.`,
    alternates: { canonical: `https://tarotaxis.com/yes-no/${card.slug}` },
    openGraph: {
      title: `${card.name} Yes or No | TarotAxis`,
      description: `${card.name} is ${m.summary}. ${card.yn_exp}`,
      images: [{
        url: `https://tarotaxis.com/og?slug=${card.slug}`,
        width: 1200,
        height: 630,
        alt: `${card.name} tarot card — yes or no`,
      }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${card.name} Yes or No | TarotAxis`,
      images: [`https://tarotaxis.com/og?slug=${card.slug}`],
    },
  }
}

export default function YesNoSlugPage({ params }: Props) {
  const card = CARDS_BY_SLUG[params.slug]
  if (!card) notFound()

  const m = YN_META[card.yn]

  // Related cards: same yn answer, same suit first, then others (max 8, exclude self)
  const related = CARDS
    .filter(c => c.yn === card.yn && c.slug !== card.slug)
    .sort((a, b) => {
      if (a.suit === card.suit && b.suit !== card.suit) return -1
      if (b.suit === card.suit && a.suit !== card.suit) return 1
      if (a.suit === 'major' && b.suit !== 'major') return -1
      if (b.suit === 'major' && a.suit !== 'major') return 1
      return 0
    })
    .slice(0, 8)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Is ${card.name} a yes or no card?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${card.name} is ${YN_META[card.yn].summary}. ${card.yn_exp}`,
        },
      },
      {
        '@type': 'Question',
        name: `What does ${card.name} mean reversed in a yes or no reading?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: card.rev,
        },
      },
      {
        '@type': 'Question',
        name: `What does ${card.name} mean for love yes or no?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: card.love,
        },
      },
      {
        '@type': 'Question',
        name: `What does ${card.name} mean for career yes or no?`,
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
          <Link href="/yes-no" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Yes/No Tarot</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>{card.name}</span>
        </div>

        {/* Hero */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
          {/* Card image */}
          <div style={{ flexShrink: 0, width: 130, height: 205, borderRadius: 10, overflow: 'hidden', border: '2px solid rgba(201,168,76,.35)' }}>
            <CardImage slug={card.slug} alt={`${card.name} tarot card`} />
          </div>

          {/* Text */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', padding: '.35rem 1.2rem', borderRadius: 100, background: m.bg, border: `1px solid ${m.color}`, color: m.color, fontFamily: "'Cinzel',serif", fontSize: '1rem', letterSpacing: '.1em', marginBottom: '.9rem' }}>
              <span>{YN_ICON[card.yn]}</span>
              <span>{m.label.toUpperCase()}</span>
            </div>
            <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.3rem,3.5vw,1.9rem)', color: 'var(--gold)', margin: '0 0 .4rem', lineHeight: 1.25 }}>
              {card.name} Yes or No
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '.82rem', margin: '0 0 1rem', letterSpacing: '.04em' }}>
              {card.suitLabel} · {card.element} · {card.kw_up.slice(0, 3).join(', ')}
            </p>
            <p style={{ color: 'var(--text)', lineHeight: 1.75, fontSize: '1rem', margin: 0 }}>
              {card.yn_exp}
            </p>
          </div>
        </div>

        {/* Love / Career / General */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { label: 'Love', text: card.love },
            { label: 'Career', text: card.career },
            { label: 'Spirituality', text: card.spirit },
          ].map(({ label, text }) => (
            <div key={label} style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase', marginBottom: '.5rem' }}>{label}</div>
              <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.65, margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>

        {/* Why this card leans yes/no/maybe */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.05rem', letterSpacing: '.06em', margin: '0 0 .9rem' }}>
            Why {card.name} {ynContext(card.yn)}
          </h2>
          <p style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.95rem', margin: '0 0 1rem' }}>{card.up}</p>
          {card.yn === 'maybe' && (
            <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: '.88rem', margin: 0, borderTop: '1px solid var(--border)', paddingTop: '.9rem' }}>
              <strong style={{ color: 'var(--gold)', fontWeight: 400 }}>In a yes/no reading:</strong> when {card.name} appears, the situation is still unfolding. Seek more information, trust your intuition, and return to the question when the path feels clearer.
            </p>
          )}
          {card.yn === 'no' && (
            <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: '.88rem', margin: 0, borderTop: '1px solid var(--border)', paddingTop: '.9rem' }}>
              <strong style={{ color: 'var(--gold)', fontWeight: 400 }}>In a yes/no reading:</strong> {card.name} advises caution or signals that now is not the right moment. This is not a permanent no — rather an invitation to reassess before moving forward.
            </p>
          )}
          {card.yn === 'yes' && (
            <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: '.88rem', margin: 0, borderTop: '1px solid var(--border)', paddingTop: '.9rem' }}>
              <strong style={{ color: 'var(--gold)', fontWeight: 400 }}>In a yes/no reading:</strong> {card.name} brings encouraging, forward-moving energy. The card supports your question with a positive answer — trust the signal and move ahead with confidence.
            </p>
          )}
        </div>

        {/* Reversed note */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.05rem', letterSpacing: '.06em', margin: '0 0 .9rem' }}>
            {card.name} Reversed — Yes or No?
          </h2>
          <p style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.95rem', margin: 0 }}>{card.rev}</p>
        </div>

        {/* FAQ */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.05rem', letterSpacing: '.06em', margin: '0 0 1.1rem' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {[
              {
                q: `Is ${card.name} a yes or no card?`,
                a: `${card.name} is ${YN_META[card.yn].summary}. ${card.yn_exp}`,
              },
              {
                q: `What does ${card.name} mean reversed in a yes/no reading?`,
                a: `Reversed, ${card.name} shifts its energy. ${card.rev}`,
              },
              {
                q: `Is ${card.name} a good card for love questions?`,
                a: card.love,
              },
              {
                q: `What does ${card.name} say about career questions?`,
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
        {related.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.05rem', letterSpacing: '.06em', margin: '0 0 1rem' }}>
              Other {m.label} Cards
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem' }}>
              {related.map(c => (
                <Link
                  key={c.slug}
                  href={`/yes-no/${c.slug}`}
                  style={{ padding: '.35rem .9rem', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 100, color: 'var(--muted)', fontSize: '.82rem', textDecoration: 'none', fontFamily: "'Cinzel',serif", letterSpacing: '.04em' }}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA links */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
          <Link href={`/cards/${card.slug}`} style={{ display: 'block', padding: '1rem 1.2rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.25)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase', marginBottom: '.3rem' }}>Full meaning</div>
            <div style={{ color: 'var(--text)', fontSize: '.92rem' }}>{card.name} card meaning →</div>
          </Link>
          <Link href="/yes-no" style={{ display: 'block', padding: '1rem 1.2rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.25)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase', marginBottom: '.3rem' }}>Try the oracle</div>
            <div style={{ color: 'var(--text)', fontSize: '.92rem' }}>Free yes/no reading →</div>
          </Link>
        </div>

        {/* Bottom explainer */}
        <div style={{ borderTop: '1px solid rgba(201,168,76,.1)', paddingTop: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.9rem' }}>
            How to interpret yes/no tarot
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.92rem', margin: 0 }}>
            In yes/no tarot, each card carries an inherent energy — some lean towards expansion and affirmation, others towards caution and blockage, and several sit in a liminal space of "not yet." {card.name} {ynContext(card.yn)} because of its core archetypal energy: {card.kw_up.join(', ')}. When reading yes/no tarot, consider the card's upright energy as the primary signal, and allow your intuition to sense whether that energy feels amplified or muted in your current situation.
          </p>
        </div>

      </div>
    </>
  )
}
