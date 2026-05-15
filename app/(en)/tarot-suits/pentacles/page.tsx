import type { Metadata } from 'next'
import Link from 'next/link'
import { CARDS } from '@/lib/cards'

export const metadata: Metadata = {
  title: 'Suit of Pentacles Tarot — All 14 Cards, Element & Meanings | TarotAxis',
  description: 'The suit of Pentacles in tarot — element of Earth, governing money, work, body and the material world. All 14 cards from Ace to King with keywords.',
  alternates: {
    canonical: 'https://tarotaxis.com/tarot-suits/pentacles',
    languages: {
      'en': 'https://tarotaxis.com/tarot-suits/pentacles',
      'es': 'https://tarotaxis.com/es/palos-del-tarot/pentaculos',
      'x-default': 'https://tarotaxis.com/tarot-suits/pentacles',
    },
  },
  openGraph: {
    title: 'Suit of Pentacles Tarot — All 14 Cards, Element & Meanings',
    description: 'The suit of Pentacles — element of Earth, money and the material world. All 14 cards explored.',
  },
}

const THEMES = [
  { title: 'Money & Finance', text: 'Income, savings, investments and the practical reality of how resources flow through your life.' },
  { title: 'Career & Craft', text: 'Work as a vocation — the slow building of skill, the satisfaction of mastery, the trade you give your days to.' },
  { title: 'Home & Stability', text: 'House, hearth, household. The physical space you live in and the security it offers, or fails to offer.' },
  { title: 'Body & Health', text: 'Pentacles are an embodied suit. Diet, exercise, energy levels and the steady rhythm of physical wellbeing.' },
  { title: 'Slow Manifestation', text: 'What grows from seed to harvest. Pentacles teach that real abundance compounds over patient time.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does the suit of Pentacles represent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The suit of Pentacles represents the material world — money, work, body, home and the slow steady growth of practical reality. Governed by the element of Earth, Pentacles concern themselves with what can be touched, measured and built. They speak to career and craftsmanship, financial security, physical health, family inheritance and the long patient cycles by which a life of substance is constructed. When Pentacles appear, the question is grounded in what is real and material rather than what is felt or imagined.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Pentacles about money in tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pentacles do speak about money, but money is only one expression of a much wider domain. The deeper theme is the entire material world: physical health, the home you live in, the work of your hands, the food on your table, the body you inhabit. A Pentacles card in a finance reading is genuinely about finance — but the same card in a health reading speaks to vitality, in a career reading to vocation, and in a home reading to security and rootedness. Read Pentacles as the suit of practical, embodied life.',
      },
    },
    {
      '@type': 'Question',
      name: 'What element is associated with Pentacles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pentacles correspond to the element of Earth. Earth is the element of stability, fertility, slow growth and physical reality — soil that holds the seed, body that holds the spirit, ground that holds the house. Astrologically, the earth signs Taurus, Virgo and Capricorn share the elemental quality of Pentacles: practicality, reliability, sensual pleasure in the physical world and the long view that builds something to last. The pentacle itself — a five-pointed star within a circle — is an ancient symbol of the elements held in earthly balance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does it mean when Pentacles dominate a reading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When Pentacles dominate a spread, the situation is essentially practical and material — regardless of how it has been framed. A relationship reading heavy in Pentacles is asking about shared finances, the home, long-term commitment and tangible compatibility, not the romantic feelings. A career reading full of Pentacles confirms the work itself is solid and the path is one of steady building. Pentacles in numbers may also signal that the timing is slow rather than dramatic, and that patience and consistent effort are being asked of you.',
      },
    },
  ],
}

export default function PentaclesSuitPage() {
  const pentacles = CARDS.filter(c => c.suit === 'pentacles')

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
        <span style={{ color: 'var(--gold)' }}>Pentacles</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>🜃</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          The Suit of Pentacles
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Pentacles are the cards of the material world — money, work, body and home. Governed by the steady element of Earth, this suit honours the slow patient cycles by which a life of substance is built.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['14 Cards', 'Element of Earth', 'Work & Money'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* About the suit */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          About the Suit of Pentacles
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            The pentacle — a five-pointed star inside a circle — is an ancient symbol of the four elements held in balance by the fifth, the spirit. In tarot the pentacle is rendered as a coin, a disc, a piece of solid earthly currency. The suit takes its name from this image because Pentacles is the suit of what can be held in the hand: the coin, the loaf, the tool, the body itself. Its element is Earth, the element of slow time, root systems, soil that gives back only what has been carefully tended.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Pentacles govern the entire practical domain — finance and savings, career and craft, home and household, body and health, the manifestation of dreams into solid form. When you ask the cards about something that requires steady real-world effort, Pentacles will speak. They are the suit of the artisan, the gardener, the long-term investor, the householder. They believe in the dignity of patient work and the reality of slow compounding gains.
          </p>
          <p>
            You recognise Pentacles energy in a reading by its solidity and its insistence on the practical. A Pentacles-heavy spread will not be moved by lofty intentions; it will ask what you are actually doing, what you can actually count, what is genuinely sustainable. The medicine of Pentacles is groundedness — the return from anxiety and abstraction to the feet on the floor and the work of the day.
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
            Pentacles contains the same fourteen-card structure as every suit: an Ace, nine pip cards numbered Two through Ten, and four court cards. The Ace of Pentacles is a material opening — a new opportunity, a fresh financial start, a seed of practical abundance. The pips track the journey of building: balance at the Two, collaboration at the Three, conservation at the Four, hardship at the Five, generosity at the Six, patience at the Seven, mastery at the Eight, sufficiency at the Nine, and the multi-generational wealth and legacy of the Ten.
          </p>
          <p>
            The court cards of Pentacles represent material wisdom at four stages. The Page of Pentacles is the studious apprentice — eager to learn a craft, ready to build something real. The Knight of Pentacles is steady, reliable and methodical, the worker who shows up day after day. The Queen of Pentacles is nurturing abundance: practical, generous, embodied, holding home and family with grace. The King of Pentacles is the master of the material world — the established provider, the financial elder, the founder of an enduring estate.
          </p>
        </div>
      </div>

      {/* All 14 cards */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '.06em' }}>
          All 14 Cards of Pentacles
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '.75rem' }}>
          {pentacles.map(c => (
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
          Common Themes in Pentacles
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
          Pentacles is one of four. Continue your journey through the Minor Arcana with the other elemental suits.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/tarot-suits/cups" style={{ padding: '.85rem 1.5rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em' }}>
            Cups · Water
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
