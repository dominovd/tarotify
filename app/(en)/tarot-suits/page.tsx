import type { Metadata } from 'next'
import Link from 'next/link'
import { CARDS } from '@/lib/cards'

export const metadata: Metadata = {
  title: 'Tarot Suits — Cups, Pentacles, Swords & Wands Guide | TarotAxis',
  description: 'The four tarot suits explained — Cups, Pentacles, Swords and Wands. Element, theme and all 56 Minor Arcana cards across the four suits of the tarot deck.',
  alternates: {
    canonical: 'https://tarotaxis.com/tarot-suits',
    languages: {
      'en': 'https://tarotaxis.com/tarot-suits',
      'es': 'https://tarotaxis.com/es/palos-del-tarot',
      'x-default': 'https://tarotaxis.com/tarot-suits',
    },
  },
  openGraph: {
    title: 'Tarot Suits — Cups, Pentacles, Swords & Wands Guide',
    description: 'The four tarot suits explained — element, theme and all 56 Minor Arcana cards.',
  },
}

const SUITS = [
  {
    slug: 'cups',
    name: 'Cups',
    element: 'Water',
    symbol: '🜄',
    theme: 'Emotion, love, intuition and the inner life.',
    href: '/tarot-suits/cups',
  },
  {
    slug: 'pentacles',
    name: 'Pentacles',
    element: 'Earth',
    symbol: '🜃',
    theme: 'The material world — money, work, body, slow growth.',
    href: '/tarot-suits/pentacles',
  },
  {
    slug: 'swords',
    name: 'Swords',
    element: 'Air',
    symbol: '🜁',
    theme: 'Thought, truth-telling, communication and decisions.',
    href: '/tarot-suits/swords',
  },
  {
    slug: 'wands',
    name: 'Wands',
    element: 'Fire',
    symbol: '🜂',
    theme: 'Passion, will, action and creative drive.',
    href: '/tarot-suits/wands',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many suits are in tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard tarot deck has four suits: Cups, Pentacles, Swords and Wands. Together these four suits make up the 56 cards of the Minor Arcana. Each suit contains 14 cards — an Ace, the numbered cards from two to ten, and four court cards (Page, Knight, Queen and King). The remaining 22 cards in the deck are the Major Arcana, which sit outside the suit system and address archetypal life themes rather than the everyday domains the suits represent.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which tarot suit represents love?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The suit of Cups is the suit of love and emotional life. Cups are governed by the element of Water and concern themselves with feelings, relationships, intuition, family bonds and the inner world of the heart. When a reading is rich in Cups, the answer is almost always emotional in nature. That said, romantic readings can include cards from any suit — Wands often appear for passion and chemistry, Pentacles for committed long-term partnership, and Swords for the honest conversations a relationship requires.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between the Major and Minor Arcana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Major Arcana is the 22 trump cards of the tarot — The Fool through The World — which describe the great archetypal forces and life lessons (love, death, justice, transformation). The Minor Arcana is the 56 cards organised into the four suits, which describe the day-to-day texture of life: the feelings, money matters, conversations and ambitions through which the larger story unfolds. Majors mark turning points; minors describe the path between them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which element corresponds to each tarot suit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each of the four suits is governed by one of the four classical elements. Cups correspond to Water, the element of emotion and intuition. Pentacles correspond to Earth, the element of the material and physical world. Swords correspond to Air, the element of thought, language and intellect. Wands correspond to Fire, the element of passion, will and creative spirit. Recognising the elemental balance of a spread is one of the quickest ways to read its overall character.',
      },
    },
  ],
}

export default function TarotSuitsHubPage() {
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
        <span style={{ color: 'var(--gold)' }}>Tarot Suits</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8, letterSpacing: '.4em' }}>🜄 🜃 🜁 🜂</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          The Four Tarot Suits
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 580, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Cups, Pentacles, Swords and Wands — the four suits of the Minor Arcana. Each is governed by a classical element and presides over a distinct domain of human life.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['56 Cards', 'Four Elements', 'Minor Arcana'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* What are the tarot suits */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          What Are the Tarot Suits?
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            The four tarot suits together form the Minor Arcana — 56 of the 78 cards in a standard deck. Each suit contains 14 cards: an Ace, nine numbered pips from two to ten, and four court cards (Page, Knight, Queen and King). Where the 22 Major Arcana cards mark the great archetypal turning points of a life, the suits of the Minor Arcana describe the texture of daily living — the feelings, conversations, ambitions and material conditions through which the larger story unfolds.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Each suit is governed by one of the four classical elements. Cups belong to Water and govern emotion, love and intuition. Pentacles belong to Earth and govern the body, money and the material world. Swords belong to Air and govern thought, communication and truth. Wands belong to Fire and govern passion, will and action. Reading the elemental balance of a spread — which suits dominate and which are absent — is one of the quickest ways to recognise its overall character.
          </p>
          <p>
            The suits are old. Their lineage runs back through Italian and French playing cards of the late medieval period — the modern hearts, diamonds, spades and clubs are direct descendants of cups, coins, swords and batons. What the tarot did was preserve the four-suit structure and add the Major Arcana on top, creating a deck that could describe both the everyday and the archetypal in a single reading.
          </p>
        </div>
      </div>

      {/* Suit cards grid */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '.06em' }}>
          The Four Suits
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '1rem' }}>
          {SUITS.map(s => {
            const suitCards = CARDS.filter(c => c.suit === s.slug)
            const sample = suitCards.slice(0, 5).map(c => c.name).join(', ')
            return (
              <Link key={s.slug} href={s.href} style={{ display: 'block', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.25rem 1.4rem', textDecoration: 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '.6rem' }}>
                  <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em' }}>{s.name}</div>
                  <div style={{ fontSize: '1.25rem', color: 'var(--gold)', opacity: .75 }}>{s.symbol}</div>
                </div>
                <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginBottom: '.7rem' }}>
                  <span style={{ padding: '.15rem .55rem', borderRadius: 20, fontSize: '.62rem', background: 'rgba(201,168,76,.1)', color: 'var(--gold)', fontFamily: "'Cinzel',serif", letterSpacing: '.06em' }}>Element of {s.element}</span>
                  <span style={{ padding: '.15rem .55rem', borderRadius: 20, fontSize: '.62rem', background: 'var(--on-bg-04)', color: 'var(--muted)', fontFamily: "'Cinzel',serif", letterSpacing: '.06em' }}>{suitCards.length} cards</span>
                </div>
                <p style={{ color: 'var(--text)', fontSize: '.85rem', lineHeight: 1.6, margin: '0 0 .7rem 0' }}>{s.theme}</p>
                <p style={{ color: 'var(--muted)', fontSize: '.74rem', lineHeight: 1.55, margin: 0, fontStyle: 'italic' }}>
                  Includes: {sample}…
                </p>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Reading a suit-heavy spread */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          How to Read a Suit-Heavy Spread
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            When several cards of the same suit appear in a single reading, the suit itself becomes a message. A spread weighted with Cups is telling you the situation is fundamentally about feelings — even if you asked about a job or a house move, the cards are insisting that the emotional dimension is the heart of the matter. A spread heavy with Pentacles is grounded in the practical and material; one full of Swords is mental, verbal, or in need of honest decision-making; one full of Wands is a question of energy, drive and what you are willing to commit to.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            The opposite is also true. The absence of a suit is meaningful. A relationship reading with no Cups at all suggests the connection has become transactional or intellectual and is missing its emotional core. A career reading with no Pentacles suggests practical reality is being avoided. Always note both what dominates and what is missing.
          </p>
          <p>
            Court cards of a suit add nuance: they often represent a real person carrying that suit's energy in your life, or a part of yourself stepping into that role. Aces are openings — a fresh start in that suit's domain. Tens are completions. Reading these together tells you not only the territory of the question but the phase of its cycle.
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
            <div key={item.name} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Explore the deck further</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Browse every card in the tarot, choose a spread layout, or draw cards now in a free reading.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/free-reading" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Free Tarot Reading
          </Link>
          <Link href="/cards" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            All 78 Cards
          </Link>
          <Link href="/spreads" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Spread Layouts
          </Link>
        </div>
      </div>
    </div>
  )
}
