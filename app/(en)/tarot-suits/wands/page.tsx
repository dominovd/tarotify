import type { Metadata } from 'next'
import Link from 'next/link'
import { CARDS } from '@/lib/cards'

export const metadata: Metadata = {
  title: 'Suit of Wands Tarot — All 14 Cards, Element & Meanings | TarotAxis',
  description: 'The suit of Wands in tarot — element of Fire, governing passion, action, will and creativity. All 14 cards from Ace to King with keywords.',
  alternates: {
    canonical: 'https://tarotaxis.com/tarot-suits/wands',
    languages: {
      'en': 'https://tarotaxis.com/tarot-suits/wands',
      'es': 'https://tarotaxis.com/es/palos-del-tarot/bastos',
      'x-default': 'https://tarotaxis.com/tarot-suits/wands',
    },
  },
  openGraph: {
    title: 'Suit of Wands Tarot — All 14 Cards, Element & Meanings',
    description: 'The suit of Wands — element of Fire, passion and creative drive. All 14 cards explored.',
  },
}

const THEMES = [
  { title: 'Passion & Drive', text: 'What lights you up, what you cannot help pursuing, the fire that gets you out of bed in the morning.' },
  { title: 'Creativity & Projects', text: 'Creative work, new ventures, ambitious endeavours — anything that requires sustained imaginative energy.' },
  { title: 'Action & Momentum', text: 'Wands move. They speak to taking the first step, gathering momentum and refusing to stagnate.' },
  { title: 'Courage & Will', text: 'The strength to face opposition, defend what matters and stand your ground when others would not.' },
  { title: 'Sexuality & Vitality', text: 'Fire in the body — desire, chemistry, life-force, the spark of being fully alive in the moment.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does the suit of Wands represent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The suit of Wands represents passion, action, will and creative drive — the fire of being fully alive and engaged. Governed by the element of Fire, Wands concern themselves with what you want, what you are willing to fight for and what you are putting your energy behind. They speak to creative projects, ambitions, sexual chemistry, courage, leadership and the momentum of a life in motion. When Wands appear, the question is one of energy and commitment: what are you genuinely going to do, and how much fire do you have for it?',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Wands about career or romance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wands speak to both, and to neither exclusively. In a career reading Wands signal ambition, creative drive, leadership and the energy you bring to your work — the fire behind the role rather than its financial dimension, which belongs to Pentacles. In a romantic reading Wands signal chemistry, attraction, passion and sexual energy — the heat between two people rather than the deep emotional bond, which belongs to Cups. Whenever the question is really about energy, will or what someone is moved to pursue, Wands will speak.',
      },
    },
    {
      '@type': 'Question',
      name: 'What element is associated with Wands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wands correspond to the element of Fire. Fire is the element of passion, will, action and creative spirit — the spark that lights, the flame that warms, the wildfire that transforms. Astrologically, the fire signs Aries, Leo and Sagittarius share the elemental quality of Wands: boldness, charisma, optimism, ambition and a love of adventure. The wand or staff itself in tarot is often depicted with leaves or buds, signifying a living branch — life-force in motion, the green wood that still bears flame.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does many Wands in a reading mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a spread is heavy with Wands, the question is about energy, will and action. Whatever the surface theme, the cards are insisting that the reading is really about what you are moved to do and how much fire you have for it. Multiple Wands often appear when a person is in a phase of bold initiation — a new project, a new chapter, a creative surge. They can also indicate conflict and competition when the cards are challenging ones. Read many Wands as a call to act rather than analyse.',
      },
    },
  ],
}

export default function WandsSuitPage() {
  const wands = CARDS.filter(c => c.suit === 'wands')

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
        <Link href="/tarot-suits" style={{ color: 'var(--muted)' }}>Tarot Suits</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Wands</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>🜂</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          The Suit of Wands
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Wands are the cards of fire — passion, action, will and creative drive. Governed by the element of Fire, this suit speaks to what lights you up and what you are willing to commit your energy to.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['14 Cards', 'Element of Fire', 'Passion & Action'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* About the suit */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          About the Suit of Wands
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            The wand is a living branch — a staff cut from a tree but still showing leaves and buds in many tarot illustrations. This detail matters. A wand is not a dead piece of wood; it is a vessel of life-force, the same green energy that drives sap upward and pushes shoots through stone. The element of Fire that animates the suit is the element of will, passion and creative spirit — the spark that becomes a flame that becomes the work of a lifetime.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Wands govern the entire domain of energy and action — ambition, creative projects, sexuality, courage, leadership, ventures, journeys, momentum. They are the suit of the artist, the founder, the explorer, the lover in the early heat of attraction. They are also the suit of conflict and competition, because fire that has nowhere to go will burn what it can reach. When Wands appear, the question is fundamentally about what you are willing to commit yourself to — and what you are no longer willing to put energy behind.
          </p>
          <p>
            You recognise the Wands energy in a reading by its urgency and its insistence on movement. A Wands-heavy spread will not let you remain in deliberation; it will ask what you are going to do, and when. The medicine of Wands is action taken from genuine passion — the difference between forcing yourself toward a goal and being drawn by something that genuinely lights you up.
          </p>
        </div>
      </div>

      {/* Aces, Pips, Court */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Ace, Pips and Court Cards
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Wands contains the same fourteen-card structure as every suit: an Ace, nine pip cards numbered Two through Ten, and four court cards. The Ace of Wands is a creative ignition — a new passion, a project beginning, a fresh spark of inspiration. The pips trace the journey of a fiery endeavour: planning at the Two, expansion at the Three, celebration at the Four, conflict at the Five, victory at the Six, perseverance at the Seven, swift movement at the Eight, resilience at the Nine, and the heavy burden of overcommitment at the Ten.
          </p>
          <p>
            The four court cards represent the development of fire energy. The Page of Wands is the enthusiastic beginner — curious, daring, eager to start. The Knight of Wands is bold action embodied: fast, charismatic, sometimes reckless, always in motion. The Queen of Wands is confident creative leadership — warm, magnetic, independent, comfortable being seen. The King of Wands is visionary mastery: the founder who sees what could be and has the courage and authority to bring it into being.
          </p>
        </div>
      </div>

      {/* All 14 cards */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '.06em' }}>
          All 14 Cards of Wands
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '.75rem' }}>
          {wands.map(c => (
            <Link key={c.slug} href={`/cards/${c.slug}`} style={{ display: 'block', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem', textDecoration: 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '.5rem', marginBottom: '.4rem' }}>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', letterSpacing: '.03em' }}>{c.name}</div>
                <span style={{ flexShrink: 0, padding: '.15rem .55rem', borderRadius: 20, fontSize: '.6rem', background: 'rgba(201,168,76,.1)', color: 'var(--gold)', fontFamily: "'Cinzel',serif", letterSpacing: '.06em' }}>{c.number}</span>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '.76rem', lineHeight: 1.55, margin: 0, fontStyle: 'italic' }}>
                {c.kw_up.slice(0, 3).join(' · ')}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Common Themes */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Common Themes in Wands
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '.75rem' }}>
          {THEMES.map(t => (
            <div key={t.title} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.06em', color: 'var(--gold)', marginBottom: '.45rem' }}>{t.title}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.82rem', lineHeight: 1.6, margin: 0 }}>{t.text}</p>
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Explore the other three suits</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Wands is one of four. Continue your journey through the Minor Arcana with the other elemental suits.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/tarot-suits/cups" style={{ padding: '.85rem 1.5rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em' }}>
            Cups · Water
          </Link>
          <Link href="/tarot-suits/pentacles" style={{ padding: '.85rem 1.5rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em' }}>
            Pentacles · Earth
          </Link>
          <Link href="/tarot-suits/swords" style={{ padding: '.85rem 1.5rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em' }}>
            Swords · Air
          </Link>
          <Link href="/tarot-suits" style={{ padding: '.85rem 1.5rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em' }}>
            ✦ All Suits
          </Link>
        </div>
      </div>
    </div>
  )
}
