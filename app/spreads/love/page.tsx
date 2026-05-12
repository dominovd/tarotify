import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Love Tarot Spread — Relationship Reading Guide | TarotAxis',
  description: 'Explore the best love tarot spreads for relationships, romance and soulmate questions. Step-by-step guides for 3-card, 5-card and relationship spreads with position meanings.',
  alternates: { canonical: 'https://tarotaxis.com/spreads/love' },
  openGraph: {
    title: 'Love Tarot Spread — Relationship Reading Guide',
    description: 'Find clarity on love, relationships and romance with dedicated tarot spreads. Position-by-position guides for singles and couples.',
  },
}

const SPREADS = [
  {
    name: 'The Relationship Check-In (5 Cards)',
    cards: 5,
    level: 'Intermediate',
    desc: 'A comprehensive look at where a relationship stands right now. Use this when you want to understand the dynamic between two people — what each person is bringing, what is working, and what needs attention.',
    positions: [
      { num: 1, name: 'You', desc: 'The energy you are bringing into this relationship right now — your feelings, state of mind and what you are offering.' },
      { num: 2, name: 'Them', desc: 'The energy your person is bringing — their feelings, intentions and inner state as it relates to you.' },
      { num: 3, name: 'The Connection', desc: 'The overall energy of the relationship itself — the field between you, the dynamic you have created together.' },
      { num: 4, name: 'What Is Working', desc: 'The strength of this relationship — what is genuinely good, what to honour and build on.' },
      { num: 5, name: 'What Needs Attention', desc: 'The challenge or blind spot — what the relationship needs more of, what is being avoided, or what requires honest conversation.' },
    ],
  },
  {
    name: 'The New Love Reading (3 Cards)',
    cards: 3,
    level: 'Beginner',
    desc: 'For early-stage connections or when you are dating someone new. These three cards give you a quick, honest read on the potential and the reality of a new relationship.',
    positions: [
      { num: 1, name: 'Their Energy', desc: 'What this person is genuinely bringing — who they are in this situation, their intentions and their readiness for connection.' },
      { num: 2, name: 'Your Energy', desc: 'What you are projecting and feeling — including any hopes, fears or expectations that may be shaping how you see this person.' },
      { num: 3, name: 'The Potential', desc: 'What this connection could become — the honest direction of the relationship if both people continue as they are.' },
    ],
  },
  {
    name: 'The Singles Spread — Attracting Love (4 Cards)',
    cards: 4,
    level: 'Beginner',
    desc: 'For those who are single and seeking love. This spread focuses on you — what you are ready for, what may be blocking you, and what the next chapter holds.',
    positions: [
      { num: 1, name: 'Where You Are', desc: 'Your current emotional state and readiness for love — honest, not idealised.' },
      { num: 2, name: 'What Blocks You', desc: 'The belief, pattern or wound that may be getting in the way of the love you want.' },
      { num: 3, name: 'What to Cultivate', desc: 'The quality, energy or action that will most support you in attracting a meaningful relationship.' },
      { num: 4, name: 'What Is Coming', desc: 'The energy of what is moving toward you in love — not a person per se, but a chapter or possibility.' },
    ],
  },
  {
    name: 'Should I Stay or Go? (6 Cards)',
    cards: 6,
    level: 'Advanced',
    desc: 'For a relationship at a crossroads. This is a deeply honest spread — lay it out only when you are genuinely open to seeing what the cards reveal, whatever that might be.',
    positions: [
      { num: 1, name: 'The Truth of the Relationship', desc: 'An unvarnished look at what this relationship actually is right now — not what you hope it is.' },
      { num: 2, name: 'If You Stay', desc: 'The most likely path and energy if you choose to remain in the relationship.' },
      { num: 3, name: 'If You Go', desc: 'The most likely path and energy if you choose to leave.' },
      { num: 4, name: 'What Your Heart Knows', desc: 'The answer you already have but may be afraid to act on.' },
      { num: 5, name: 'What Needs to Happen', desc: 'The change, conversation or action that is most needed — regardless of which path you choose.' },
      { num: 6, name: 'Guidance', desc: 'The overarching message of the reading — the wisest thing the cards have to say about this situation.' },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a love tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A love tarot spread is a specific layout of tarot cards where each position is assigned a meaning related to love, relationships or romance. Unlike a general reading, love spreads are designed to explore the specific dynamics of a relationship — the feelings of each person, the connection between them, what is working, what is challenging, and where things may be heading. They can be used for existing relationships, new connections, or self-exploration for singles.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best tarot spread for love?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best love tarot spread depends on your situation. For understanding an existing relationship, the 5-card Relationship Check-In works well. For a new connection, a 3-card spread with positions for You, Them and the Potential is simple and direct. For singles seeking love, a 4-card spread focusing on where you are, what blocks you and what is coming is most useful. For a relationship at a major crossroads, the 6-card Stay or Go spread offers honest clarity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can tarot tell you if someone loves you?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Tarot can reveal the energy around another person's feelings and intentions, but it cannot give you certainty about another person's inner world — only they truly know that. What tarot does well is reflect the energetic truth of a situation: patterns, possibilities, blind spots and what you may already sense but haven't fully acknowledged. Treat tarot as a mirror rather than an oracle — it shows you what is real, not what you wish were true.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do you ask tarot about love?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best love questions for tarot are open-ended rather than yes/no. Instead of asking "Will he come back?", ask "What do I need to understand about this connection?" Instead of "Does she love me?", ask "What is the honest energy between us right now?" Open questions invite richer, more useful answers. Closed questions tend to produce cards you will twist to fit the answer you want.',
      },
    },
  ],
}

export default function LoveSpreadPage() {
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
        <span style={{ color: 'var(--gold)' }}>Love Spread</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Love Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Tarot is one of the oldest tools for understanding the heart. Whether you are navigating a new connection, deepening an existing relationship, or seeking clarity as a single person, these spreads offer honest, nuanced guidance.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['Relationships', 'Singles', 'New Love', 'Crossroads'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Spreads */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '.06em' }}>
          Love Tarot Spread Layouts
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {SPREADS.map((spread, si) => (
            <div key={spread.name} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap', marginBottom: '.6rem' }}>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.04em' }}>{spread.name}</div>
                <div style={{ display: 'flex', gap: '.5rem', flexShrink: 0 }}>
                  <span style={{ padding: '.2rem .6rem', borderRadius: 20, fontSize: '.65rem', background: 'rgba(201,168,76,.1)', color: 'var(--gold)', fontFamily: "'Cinzel',serif" }}>{spread.cards} cards</span>
                  <span style={{ padding: '.2rem .6rem', borderRadius: 20, fontSize: '.65rem', background: 'rgba(255,255,255,.04)', color: 'var(--muted)', fontFamily: "'Cinzel',serif" }}>{spread.level}</span>
                </div>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{spread.desc}</p>

              {/* Visual card layout */}
              <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                {spread.positions.map(pos => (
                  <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.35rem' }}>
                    <div style={{ width: 52, height: 78, border: '1px solid rgba(201,168,76,.3)', borderRadius: 6, background: 'rgba(201,168,76,.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.9rem', color: 'var(--gold)' }}>
                      {pos.num}
                    </div>
                    <div style={{ fontSize: '.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center', maxWidth: 56 }}>{pos.name}</div>
                  </div>
                ))}
              </div>

              {/* Position meanings */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                {spread.positions.map(pos => (
                  <div key={pos.num} style={{ display: 'flex', gap: '.75rem', alignItems: 'flex-start' }}>
                    <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.65rem', color: 'var(--gold)', marginTop: '.1rem' }}>{pos.num}</span>
                    <div>
                      <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.78rem', color: 'var(--gold)', marginRight: '.4rem' }}>{pos.name} —</span>
                      <span style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.6 }}>{pos.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to read love spreads */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          How to Read a Love Tarot Spread
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Love readings require a particular kind of honesty. The cards will show you the truth — but only if you are genuinely open to it before you draw. If you already have a strong preference for a particular outcome, acknowledge it out loud before you shuffle. This conscious act of surrender makes room for genuine insight.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            When reading positions about another person — "Their Energy", "What They Bring" — remember that tarot reflects energy, not certainty. You are seeing the field, not reading their mind. Treat what appears as information to consider, not a verdict.
          </p>
          <p>
            Pay particular attention to cards that appear in positions about yourself. The most useful love readings almost always reveal something about the reader — their patterns, their readiness, their wounds and their gifts — rather than providing a simple forecast about another person.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {faqSchema.mainEntity.map(item => (
            <div key={item.name} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Ready to read your love spread?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Choose a spread above, shuffle your deck, and draw your cards. Or start with a free three-card reading now.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Free Tarot Reading
          </Link>
          <Link href="/spreads/three-card" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Three Card Spread
          </Link>
        </div>
      </div>
    </div>
  )
}
