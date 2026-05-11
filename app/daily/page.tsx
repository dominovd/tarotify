import type { Metadata } from 'next'
import Link from 'next/link'
import { CARDS } from '@/lib/cards'
import { CARD_EXTENDED } from '@/lib/card-extended'
import ShareButton from '@/components/ShareButton'

// Re-render on every request so the card matches today's date
export const dynamic = 'force-dynamic'

// ─── Date-seeded card ────────────────────────────────────────────────────────

function getDailyCard() {
  const d   = new Date()
  const seed = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate()
  const idx  = seed % 78
  // ~22 % reversed — lower than a full reading, feels right for a daily draw
  const reversed = (seed * 17 + 3) % 9 === 0
  return { card: CARDS[idx], reversed }
}

function longDate() {
  return new Date().toLocaleDateString('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  })
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata(): Promise<Metadata> {
  const { card } = getDailyCard()
  const date     = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  return {
    title: `Tarot Card of the Day — ${card.name} | Tarotify`,
    description: `Today's tarot card is ${card.name}: ${card.kw_up.slice(0,4).join(', ')}. Free daily tarot reading for ${date}. Come back tomorrow for a new card.`,
    alternates: { canonical: 'https://tarotify.app/daily' },
    openGraph: {
      title: `Tarot Card of the Day — ${card.name} | Tarotify`,
      description: `Today's tarot card: ${card.name}. ${card.kw_up.slice(0, 4).join(', ')}. Free daily reading for ${date}.`,
      images: [{
        url: `https://tarotify.app/og?slug=${card.slug}&type=daily`,
        width: 1200,
        height: 630,
        alt: `${card.name} — Tarot Card of the Day`,
      }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Today's Tarot Card — ${card.name} | Tarotify`,
      images: [`https://tarotify.app/og?slug=${card.slug}&type=daily`],
    },
  }
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function DailyPage() {
  const { card, reversed } = getDailyCard()
  const ext  = CARD_EXTENDED[card.slug]
  const date = longDate()

  const interpretation = reversed
    ? (ext?.rev2 ?? card.rev)
    : (ext?.up2  ?? card.up)

  const keywords = (reversed ? card.kw_rev : card.kw_up).slice(0, 5)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the tarot card of the day?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The tarot card of the day is a single card drawn each morning to set an intention or theme for the day ahead. It works as a daily mirror — reflecting the energy, challenge or opportunity that is most relevant for you right now. One card is enough to prompt reflection and sharpen your focus for the day.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you use a daily tarot card?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Read the card\'s message in the morning and hold it lightly in mind throughout the day. Notice where its themes show up in your experiences, interactions and decisions. You don\'t need to act on it literally — think of it as a lens that helps you pay attention to something you might otherwise overlook. Journalling a short response each day deepens the practice significantly.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does everyone get the same card of the day?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'On Tarotify, yes — the daily card is the same for everyone on any given day, determined by the date. This is intentional: it creates a shared daily reflection and makes it easy to discuss the card with others. The meaning of the card will still resonate differently for each person depending on their own situation.',
        },
      },
      {
        '@type': 'Question',
        name: 'When does the daily tarot card change?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The card changes each day at midnight. Every calendar day brings a new card drawn from the full 78-card deck, including occasional reversals. Checking in each morning — before looking at your phone or the news — tends to make the practice most effective.',
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
          Daily Tarot
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '.6rem' }}>
          Card of the Day
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '.82rem', letterSpacing: '.04em' }}>{date}</p>
      </div>

      {/* Card */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2.5rem', gap: '1.25rem' }}>

        {/* Image */}
        <div style={{ position: 'relative', width: 200, height: 300, borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(201,168,76,.45)', boxShadow: '0 8px 40px rgba(0,0,0,.5)', transform: reversed ? 'rotate(180deg)' : 'none' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/cards/${card.slug}.webp`}
            alt={`${card.name}${reversed ? ' Reversed' : ''}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* Name + badge */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.25rem', marginBottom: '.4rem' }}>
            {card.name}
          </div>
          <div style={{ display: 'flex', gap: '.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ padding: '.2rem .7rem', borderRadius: 20, fontSize: '.65rem', fontFamily: "'Cinzel',serif", letterSpacing: '.07em', background: reversed ? 'rgba(180,130,60,.12)' : 'rgba(201,168,76,.12)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,.25)' }}>
              {reversed ? 'Reversed' : 'Upright'}
            </span>
            <span style={{ padding: '.2rem .7rem', borderRadius: 20, fontSize: '.65rem', fontFamily: "'Cinzel',serif", letterSpacing: '.07em', background: 'rgba(255,255,255,.04)', color: 'var(--muted)', border: '1px solid var(--border)' }}>
              {card.suitLabel}
            </span>
            <span style={{ padding: '.2rem .7rem', borderRadius: 20, fontSize: '.65rem', fontFamily: "'Cinzel',serif", letterSpacing: '.07em', background: 'rgba(255,255,255,.04)', color: 'var(--muted)', border: '1px solid var(--border)' }}>
              {card.element}
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
        <ShareButton
          slug={card.slug}
          reversed={reversed}
          type="daily"
          cardName={card.name}
          suitLabel={card.suitLabel}
          element={card.element}
          keywords={keywords}
          text={reversed ? card.rev : card.up}
        />
      </div>

      {/* Interpretation */}
      <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '1.5rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .6, textTransform: 'uppercase', marginBottom: '.9rem' }}>
          {reversed ? "Reversed — today's message" : "Upright — today's message"}
        </div>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
          {interpretation}
        </p>
      </div>

      {/* Love / Career / Spirit snippets */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(190px,1fr))', gap: '.75rem', marginBottom: '2.5rem' }}>
        {[
          { label: 'Love', text: reversed ? (ext?.love2 ?? card.love) : card.love },
          { label: 'Career', text: reversed ? (ext?.career2 ?? card.career) : card.career },
          { label: 'Spirit', text: card.spirit },
        ].map(({ label, text }) => (
          <div key={label} style={{ background: 'rgba(255,255,255,.02)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem' }}>
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
          A new card appears at midnight. Come back tomorrow to see what the deck has for you next.
        </p>
      </div>

      {/* CTA links */}
      <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <Link href="/free-reading" style={{ padding: '.75rem 1.5rem', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.35)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Full Free Reading →
        </Link>
        <Link href={`/cards/${card.slug}`} style={{ padding: '.75rem 1.5rem', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Full {card.name} Meaning →
        </Link>
      </div>

      {/* FAQ */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1.25rem', opacity: .9 }}>
          About the Daily Tarot Card
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,.02)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
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
        <Link href="/spreads" style={{ fontSize: '.75rem', color: 'var(--muted)', opacity: .5, fontFamily: "'Cinzel',serif", letterSpacing: '.06em' }}>
          Explore all spreads →
        </Link>
      </div>

    </div>
  )
}
