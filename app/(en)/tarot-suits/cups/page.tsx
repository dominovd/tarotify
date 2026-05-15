import type { Metadata } from 'next'
import Link from 'next/link'
import { CARDS } from '@/lib/cards'

export const metadata: Metadata = {
  title: 'Suit of Cups Tarot — All 14 Cards, Element & Meanings | TarotAxis',
  description: 'The suit of Cups in tarot — element of Water, governing love, emotion and intuition. All 14 cards from Ace to King with keywords and meanings.',
  alternates: {
    canonical: 'https://tarotaxis.com/tarot-suits/cups',
    languages: {
      'en': 'https://tarotaxis.com/tarot-suits/cups',
      'es': 'https://tarotaxis.com/es/palos-del-tarot/copas',
      'x-default': 'https://tarotaxis.com/tarot-suits/cups',
    },
  },
  openGraph: {
    title: 'Suit of Cups Tarot — All 14 Cards, Element & Meanings',
    description: 'The suit of Cups — element of Water, love and emotion. All 14 cards explored.',
  },
}

const THEMES = [
  { title: 'Love & Connection', text: 'Romance, friendship and the bonds that tie one heart to another are the natural territory of Cups.' },
  { title: 'Emotional Healing', text: 'Grief, forgiveness and the slow work of mending the inner life. Cups hold both the wound and the medicine.' },
  { title: 'Intuition & Dreams', text: 'The quiet knowing that arrives without explanation. Cups govern psychic sensitivity and the symbolic life of dreams.' },
  { title: 'Family & Belonging', text: 'Blood relationships, chosen family and the warmth of community. Cups speak to where you feel at home.' },
  { title: 'Creative Inspiration', text: 'Art and beauty born from feeling. The artist who creates from the heart is working in the element of Cups.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does the suit of Cups represent in tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The suit of Cups represents the inner life — emotions, love, intuition, relationships, dreams and the creative imagination. Governed by the element of Water, Cups concern themselves with how things feel rather than how they look or what they accomplish. When Cups appear in a reading, the situation is being asked about at its emotional level. They speak to romance, family bonds, friendships, emotional healing and the still, knowing voice of the heart.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Cups a positive suit in tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cups have a generally gentle, warm reputation because so many of their cards depict love, joy and connection — the Two of Cups, Three of Cups, Nine of Cups and Ten of Cups are some of the most cheerful images in the deck. But Cups also hold the suit\'s darker emotional waters: the grief of the Five of Cups, the apathy of the Four, the deception of the Seven. Cups are not simply positive — they are the suit of the full emotional spectrum, both the sweetness and the sorrow.',
      },
    },
    {
      '@type': 'Question',
      name: 'What element is associated with Cups?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cups correspond to the element of Water. Water is the element of feeling, intuition and the unconscious — that which flows, mirrors, depths and dreams. Astrologically, the water signs Cancer, Scorpio and Pisces share the elemental quality of Cups: emotional sensitivity, psychic perception and a strong connection to the inner world. When you see a chalice, a flowing river or a calm pool in a tarot image, you are looking at the symbolism of Cups even when the card belongs to another suit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does many Cups in a tarot reading mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When several Cups appear in one spread, the reading is fundamentally an emotional one — whatever the surface question. A career spread heavy with Cups is really asking how you feel about your work, not what to do about it. A relationship spread full of Cups confirms the situation is genuinely heart-led, for better or worse. Many Cups can also signal that intuition is unusually clear right now, that dreams are carrying messages, or that emotional healing is the most pressing matter to attend to.',
      },
    },
  ],
}

export default function CupsSuitPage() {
  const cups = CARDS.filter(c => c.suit === 'cups')

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
        <span style={{ color: 'var(--gold)' }}>Cups</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>🜄</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          The Suit of Cups
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Cups are the cards of the heart — love, emotion, intuition and the inner life. Governed by the flowing element of Water, this suit holds the full spectrum of feeling, from the sweetness of new connection to the depths of grief and healing.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['14 Cards', 'Element of Water', 'Love & Emotion'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* About the suit */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          About the Suit of Cups
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            The chalice is one of the oldest sacred objects in human culture — the vessel that holds what is precious, the cup of communion, the grail of legend. Tarot inherits all of this symbolism. A cup in this suit is the inner container of the human heart: what we feel, what we receive, what we are willing to pour out for another. The element of Water that animates the suit is the element of flow, of depth, of mirroring. Water takes the shape of whatever holds it, just as feeling takes the shape of the relationship that calls it forth.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Cups govern the entire domain of the inner life — love in all its forms, family, friendship, intuition, dreams, the imagination, the unconscious, emotional healing. When a question touches the heart, Cups will speak. They are the suit you most want to see in a love reading, the suit that gives permission to feel deeply in a grief reading, and the suit that confirms a quiet knowing when intuition is being doubted.
          </p>
          <p>
            You recognise the Cups energy in a reading by its softness and its directness about feeling. A Cups-heavy spread will not let you stay in your head — it will ask, again and again, what is the emotional truth here? It will reveal the love still present beneath an argument, the longing beneath ambition, the grief beneath busyness. The medicine of Cups is honest feeling.
          </p>
        </div>
      </div>

      {/* Aces, Pips, Court */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Ace, Pips and Court Cards
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Like every suit, Cups contains one Ace, nine numbered pip cards (Two through Ten) and four court cards: the Page, Knight, Queen and King. The Ace of Cups is the opening — a new emotional beginning, a heart freshly poured. The pips trace the unfolding of an emotional journey: connection at the Two, celebration at the Three, withdrawal at the Four, grief at the Five, and so on through the Ten of Cups, which is the suit's image of complete emotional fulfilment.
          </p>
          <p>
            The four court cards represent emotional maturity at different stages. The Page of Cups is the sensitive beginner — open, dreamy, sometimes overwhelmed. The Knight of Cups is the romantic on a quest, following the heart wherever it leads. The Queen of Cups is intuitive mastery: she feels everything, holds it gracefully and offers compassion without losing herself. The King of Cups is the emotionally wise elder, calm in the storm, governing the inner ocean rather than being swept away by it.
          </p>
        </div>
      </div>

      {/* All 14 cards */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '.06em' }}>
          All 14 Cards of Cups
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '.75rem' }}>
          {cups.map(c => (
            <Link key={c.slug} href={`/cards/${c.slug}`} style={{ display: 'block', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem', textDecoration: 'none' }}>
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
          Common Themes in Cups
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '.75rem' }}>
          {THEMES.map(t => (
            <div key={t.title} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
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
            <div key={item.name} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
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
          Cups is one of four. Continue your journey through the Minor Arcana with the other elemental suits.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/tarot-suits/pentacles" style={{ padding: '.85rem 1.5rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em' }}>
            Pentacles · Earth
          </Link>
          <Link href="/tarot-suits/swords" style={{ padding: '.85rem 1.5rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em' }}>
            Swords · Air
          </Link>
          <Link href="/tarot-suits/wands" style={{ padding: '.85rem 1.5rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em' }}>
            Wands · Fire
          </Link>
          <Link href="/tarot-suits" style={{ padding: '.85rem 1.5rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em' }}>
            ✦ All Suits
          </Link>
        </div>
      </div>
    </div>
  )
}
