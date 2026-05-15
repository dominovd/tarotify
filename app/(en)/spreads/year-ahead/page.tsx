import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Year Ahead Tarot Spread — 2026 Annual Reading Guide | TarotAxis',
  description: 'Do a year ahead tarot spread for 2026 — one card per month plus an overarching theme card. Step-by-step guide with position meanings, tips and FAQ.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/year-ahead',
    languages: {
      'en': 'https://tarotaxis.com/spreads/year-ahead',
      'es': 'https://tarotaxis.com/es/tiradas/anual',
      'x-default': 'https://tarotaxis.com/spreads/year-ahead',
    },
  },
  openGraph: {
    title: 'Year Ahead Tarot Spread — 2026 Annual Reading',
    description: 'Map your year with tarot. A 13-card annual spread — one card for each month plus an overarching theme for the year.',
  },
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a year ahead tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A year ahead tarot spread is an annual reading that uses one card for each month of the coming year, plus an optional overarching theme card. It gives you a broad energetic map of the year — not a precise prediction, but a picture of the themes, challenges and opportunities most likely to arise in each period. Most readers do this spread in December or January, though it can be done at any meaningful threshold: a birthday, a new year in another tradition, or any major life turning point.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many cards are in a year ahead tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The classic year ahead spread uses 12 cards — one for each month. Many readers add a 13th card as an overarching theme or message for the year as a whole. Some variations use two cards per month (one for inner work, one for outer events) for a total of 24 or 25 cards, but this is better suited to experienced readers.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should you do a year ahead tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The most natural time is around the turn of the calendar year — late December or early January. But a year ahead spread works just as well on your birthday (a personal new year), at the spring equinox, or at any significant life threshold: a new job, a move, the start of a new chapter. The spread maps the next 12 months from whatever point you're reading, so there is no wrong time.",
      },
    },
    {
      '@type': 'Question',
      name: 'What tarot cards are good for a year ahead reading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In a year ahead spread, Major Arcana cards in a monthly position carry particular weight — they signal months of significant change, decision or growth. Court cards (Kings, Queens, Knights, Pages) often indicate people who will play a role that month. Ace cards suggest new beginnings in that suit's domain. Don't fixate on 'good' or 'bad' cards — even The Tower or Death in a monthly position simply marks a period of transformation, not literal disaster.",
      },
    },
  ],
}

export default function YearAheadPage() {
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
        <span style={{ color: 'var(--gold)' }}>Year Ahead</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Year Ahead Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          One card for each month of the year, plus a guiding theme for the journey as a whole. The year ahead spread is the most powerful annual ritual in tarot — a map, not a prediction, drawn at the threshold of a new chapter.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['13 Cards', '2026', 'Annual Reading', 'New Year'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Layout visual */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
          Card Layout — 13 Cards
        </div>

        {/* Theme card */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.4rem' }}>
            <div style={{ width: 68, height: 102, border: '1px solid rgba(201,168,76,.5)', borderRadius: 8, background: 'rgba(201,168,76,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.8rem', color: 'var(--gold)' }}>
              ✦
            </div>
            <div style={{ fontSize: '.62rem', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '.1em', opacity: .7 }}>Theme</div>
          </div>
        </div>

        {/* Monthly cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '.5rem', maxWidth: 480, margin: '0 auto' }}>
          {MONTHS.map((month, i) => (
            <div key={month} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.3rem' }}>
              <div style={{ width: '100%', aspectRatio: '2/3', border: '1px solid rgba(201,168,76,.25)', borderRadius: 6, background: 'rgba(201,168,76,.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.7rem', color: 'var(--gold)' }}>
                {i + 1}
              </div>
              <div style={{ fontSize: '.52rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', textAlign: 'center' }}>{month.slice(0, 3)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          How to Do Your Year Ahead Reading
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Find a quiet moment — this reading deserves space. Many readers light a candle, clear their table, and spend a few minutes in stillness before they begin. The year ahead reading is a significant ritual, and the preparation reflects that.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Shuffle thoroughly while holding a single intention: <em>"What do I most need to understand about the year ahead?"</em> When ready, draw 13 cards and place them face-down. Place card 1 (the theme card) at the top or centre, then lay cards 2–13 in order from January to December.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Turn them over one at a time, moving through the months in sequence. Read each card in its month before turning the next. Write brief notes for each position — even two or three words — before you try to interpret the whole reading.
          </p>
          <p>
            Once all cards are face up, step back and look at the whole spread. Which months have Major Arcana? Where are the challenging cards clustered? Where is the energy light and flowing? The overall picture — the shape of the year — is as important as any single month.
          </p>
        </div>
      </div>

      {/* Reading tips */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          How to Interpret Each Month
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '.75rem', marginBottom: '1.5rem' }}>
          {[
            ['⚡', 'Major Arcana months', 'A Major Arcana card in a monthly position signals a significant period — one of transition, decision or meaningful growth. These months deserve extra attention. They are not necessarily difficult; they are important.'],
            ['👑', 'Court cards', 'A King, Queen, Knight or Page in a month often indicates a person — someone who enters or plays a significant role that month. It can also represent an aspect of yourself you will be called to embody.'],
            ['🌱', 'Ace months', 'An Ace signals a genuine new beginning in that suit\'s domain: Wands (creativity/career), Cups (emotion/love), Swords (clarity/challenge), Pentacles (material/practical). These months often feel like a fresh start.'],
            ['🌊', 'Challenging cards', 'The Tower, Ten of Swords, Five of Pentacles and similar cards indicate months of disruption or difficulty — but they are also months of release and clearing. Look at the card following them for the way forward.'],
          ].map(([icon, title, text]) => (
            <div key={title as string} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem' }}>
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
            <div key={item.name} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Begin your year ahead reading</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Shuffle your deck and draw 13 cards. Use our card meanings guide to interpret each position.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/cards" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Browse Card Meanings
          </Link>
          <Link href="/spreads/celtic-cross" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Celtic Cross Spread
          </Link>
        </div>
      </div>
    </div>
  )
}
