import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Soulmate Tarot Spread — Find Your Soul Connection | TarotAxis',
  description: 'Use the soulmate tarot spread to explore what you bring to love, what you truly need, and how you might recognise a deep soul connection when it arrives.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/soulmate',
    languages: {
      'en': 'https://tarotaxis.com/spreads/soulmate',
      'es': 'https://tarotaxis.com/es/tiradas/alma-gemela',
      'x-default': 'https://tarotaxis.com/spreads/soulmate',
    },
  },
  openGraph: {
    title: 'Soulmate Tarot Spread — Find Your Soul Connection',
    description: 'A 5-card tarot spread exploring your energy in love, what you seek and need, and the nature of your soulmate connection.',
  },
}

const POSITIONS = [
  { num: 1, label: 'Your Energy' },
  { num: 2, label: 'What You Seek' },
  { num: 3, label: 'What You Need' },
  { num: 4, label: 'The Path' },
  { num: 5, label: 'The Connection' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a soulmate tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A soulmate tarot spread is a focused reading designed to explore the themes surrounding deep romantic connection. Rather than predicting a specific person, it helps you understand what you currently bring to relationships, what you genuinely seek and need in a partner, and the energetic conditions around meeting or recognising a meaningful bond. It is a tool for self-reflection as much as for relationship insight.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many cards are in a soulmate tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most accessible version uses 5 cards, each covering a distinct aspect of the soulmate journey: your current energy, what you consciously seek, what you actually need, the path to connection, and the nature of the bond itself. Some readers expand this to 7 or more cards to explore timing or obstacles, but 5 cards offer a complete and manageable reading for most people.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can tarot tell you when you will meet your soulmate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Tarot is not well-suited to precise timing predictions, and treating it as such tends to produce anxiety rather than clarity. What it can do is illuminate the inner conditions that support or hinder meaningful connection — the beliefs you hold, the patterns you repeat, and the qualities you're ready to invite in. Many readers find that when those inner conditions shift, circumstances naturally follow.",
      },
    },
    {
      '@type': 'Question',
      name: 'What tarot cards indicate a soulmate connection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Cards often associated with deep connection include The Lovers (conscious union and aligned values), The Star (hope and magnetic attraction), Two of Cups (mutual recognition and emotional resonance), Ten of Cups (lasting emotional fulfilment), and The World (completion and wholeness). Major Arcana cards in positions 4 or 5 of the spread are particularly significant, suggesting a connection with real weight and meaning.",
      },
    },
  ],
}

export default function SoulmatePage() {
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
        <span>/</span>
        <Link href="/spreads" style={{ color: 'var(--muted)' }}>Tarot Spreads</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Soulmate</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Soulmate Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          A 5-card spread for exploring love at its deepest level. Discover what you bring to connection, what you truly need in a partner, and the energetic nature of the bond that awaits you.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['5 Cards', 'Love & Relationships', 'Soulmate', 'Singles'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Layout visual */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
          Card Layout — 5 Cards
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '.5rem', maxWidth: 480, margin: '0 auto' }}>
          {POSITIONS.map(({ num, label }) => (
            <div key={num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.3rem' }}>
              <div style={{ width: '100%', aspectRatio: '2/3', border: '1px solid rgba(201,168,76,.25)', borderRadius: 6, background: 'rgba(201,168,76,.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.7rem', color: 'var(--gold)' }}>
                {num}
              </div>
              <div style={{ fontSize: '.5rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', textAlign: 'center', lineHeight: 1.3 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* How to do the reading */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          How to Do Your Soulmate Reading
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Before you begin, create a moment of genuine stillness. Put your phone aside, take a few slow breaths, and let the busyness of the day settle. A reading about deep connection benefits from the same quality of presence you would want to bring to the relationship itself.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Shuffle your deck slowly and with intention. Hold a clear, open question in mind — something like <em>"What do I need to know about meeting my soulmate?"</em> or <em>"What is the nature of the soul connection available to me?"</em> Avoid yes-or-no questions; the spread works best when you invite nuance rather than a verdict.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Draw 5 cards and lay them face-down in a horizontal row from left to right, following the position order: Your Energy, What You Seek, What You Need, The Path, The Connection. Turn each card over one at a time, pausing to sit with it before moving on.
          </p>
          <p>
            Pay particular attention to positions 2 and 3 together — the gap between what you seek and what you need is often where the most important insight lives. A reading that surprises you here is doing exactly what it should.
          </p>
        </div>
      </div>

      {/* Position meanings */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Position Meanings
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', marginBottom: '1.5rem' }}>
          {[
            ['1', 'Your Energy', 'What you are currently bringing to the search for love. This card reflects your emotional state, your readiness, and any patterns or beliefs that are shaping how you show up in relationships right now. It is not a judgement — it is a starting point.'],
            ['2', 'What You Seek', 'The qualities, feelings and experiences you consciously desire in a soulmate. This card speaks to your active wishes and ideals. Compare it with position 3 — alignment between the two suggests clarity; tension suggests there is useful work to do.'],
            ['3', 'What You Need', 'What you actually require for a lasting, nourishing connection — which may differ significantly from what you think you want. This is often the most revelatory card in the spread, pointing to deeper needs that may not yet be fully acknowledged.'],
            ['4', 'The Path', 'How you will encounter or recognise your soulmate. This card often speaks to the conditions, inner shifts or life circumstances through which a meaningful connection becomes possible. A Major Arcana card here suggests a significant, even fated, turning point.'],
            ['5', 'The Connection', 'The potential nature and quality of the soulmate bond. This card describes the energetic character of the relationship — its strengths, its gifts, and the kind of growth it is likely to bring. It is a picture of possibility rather than a guarantee.'],
          ].map(([num, title, text]) => (
            <div key={num} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ minWidth: 28, height: 28, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, background: 'rgba(201,168,76,.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.75rem', color: 'var(--gold)', flexShrink: 0, marginTop: '.05rem' }}>
                {num}
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.4rem', letterSpacing: '.03em' }}>{title}</div>
                <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reading tips */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Interpreting the Positions
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '.75rem', marginBottom: '1.5rem' }}>
          {[
            ['✦', 'Major Arcana in 4 or 5', 'A Major Arcana card in the Path or Connection position suggests a connection of real significance — one that carries a sense of weight, meaning and perhaps inevitability. This is a bond likely to catalyse genuine growth.'],
            ['👑', 'Court cards', "A King, Queen, Knight or Page often points to a specific person who may already be in your orbit, or an aspect of your own character that is ready to emerge. Pay attention to which court rank appears — it hints at the person's maturity and energy."],
            ['🌊', 'Challenging cards', "Cards such as The Tower, Five of Swords or Three of Swords in this spread often signal that some inner work — releasing old patterns or healing past wounds — is needed before a deep connection can flourish. They are not a 'no'; they are a 'not yet, and here is why'."],
            ['🌱', 'Ace cards', 'An Ace anywhere in the spread brings fresh-start energy to that position. In a soulmate reading, Aces — particularly the Ace of Cups — suggest that a new emotional chapter is genuinely available to you right now.'],
          ].map(([icon, title, text]) => (
            <div key={title as string} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem' }}>
              <div style={{ fontSize: '1.3rem', marginBottom: '.4rem' }}>{icon}</div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.78rem', letterSpacing: '.08em', color: 'var(--gold)', opacity: .8, marginBottom: '.4rem', textTransform: 'uppercase' }}>{title}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.6, margin: 0 }}>{text as string}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {faqSchema.mainEntity.map(item => (
            <div key={item.name} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Begin your soulmate reading</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Shuffle your deck, hold your intention, and draw 5 cards. Use our card meanings guide to explore each position.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/cards" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Browse Card Meanings
          </Link>
          <Link href="/spreads/love" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Love Tarot Spread
          </Link>
        </div>
      </div>
    </div>
  )
}
