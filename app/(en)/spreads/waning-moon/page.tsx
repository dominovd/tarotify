import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Waning Moon Tarot Spread — Reflection & Release Guide | TarotAxis',
  description: 'A waning moon tarot spread for the descending lunar phase. Four-card layout for reflection, learning and creating space — the integration phase between the full moon and the new moon.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/waning-moon',
    languages: {
      'en': 'https://tarotaxis.com/spreads/waning-moon',
      'es': 'https://tarotaxis.com/es/tiradas/luna-menguante',
      'x-default': 'https://tarotaxis.com/spreads/waning-moon',
    },
  },
  openGraph: {
    title: 'Waning Moon Tarot Spread — Reflection & Release Guide',
    description: 'A four-card waning moon spread for reflection, integration and creating space for the cycle ahead.',
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'What This Cycle Taught Me',
    desc: 'The single most important lesson the past lunar cycle has revealed. The waning moon is the integration phase — the time when the experience of the past two weeks becomes wisdom rather than just events. This card names what is worth carrying forward.',
  },
  {
    num: 2,
    name: 'What Is Still Lingering',
    desc: 'Something the full moon already showed you — but which you have not fully released. Often guilt, resentment, hope held too long, or a pattern you intellectually understand but emotionally cling to. The waning moon offers a second window to truly let it go.',
  },
  {
    num: 3,
    name: 'What I Am Composting',
    desc: 'In nature the waning moon is when growth feeds the soil. This card describes what has ended in a way that becomes nourishment for what is coming — the failure that taught you, the relationship that shaped you, the project that prepared you.',
  },
  {
    num: 4,
    name: 'How to Prepare Space',
    desc: 'A practical instruction for the days before the new moon. The waning moon is not a time for action so much as for clearing — making room. This card names the specific clearing most worth doing before the next cycle begins.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a waning moon tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A waning moon tarot spread is a card layout designed for the descending phase of the lunar cycle — the roughly two-week period between the full moon and the next new moon, when the visible moon is shrinking each night. The waning moon is traditionally associated with reflection, integration, release, surrender and the inward turn before a new cycle begins. A waning moon spread uses these themes as its position meanings, helping you process what the past cycle has brought you and create space for what is coming.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I do a waning moon tarot reading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Any time during the roughly two-week waning phase, but two windows are particularly potent: the last quarter moon (about a week after the full moon) and the dark moon — the final two or three days before the new moon. The last quarter is ideal for reflection and learning from the cycle. The dark moon is best for deep release and shadow work.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is the waning moon different from the full moon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The full moon is the peak — everything visible, everything illuminated, the climax of the lunar story. The waning moon is what follows: the integration phase. If the full moon shows you what is complete, the waning moon is when you do the actual work of releasing it. The full moon reveals; the waning moon integrates. Many readers find waning moon spreads less dramatic but more transformative over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I set intentions during the waning moon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The waning moon is not the traditional time for setting forward-facing intentions — that work belongs to the new moon. But you can use the waning phase to clarify what you want your next intentions to address, by understanding what the closing cycle has taught you. Think of it as the research phase before the new moon ritual.',
      },
    },
  ],
}

export default function WaningMoonPage() {
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
        <span>/</span>
        <Link href="/spreads" style={{ color: 'var(--muted)' }}>Tarot Spreads</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Waning Moon Spread</span>
      </nav>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>☽</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Waning Moon Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          The waning moon is the descending phase — the integration time between the brightness of the full moon and the darkness of the next new moon. Use this spread to harvest the wisdom of the closing cycle and prepare space for what comes next.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['4 Cards', 'Reflection', 'Integration'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          The Energy of the Waning Moon
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            The waning moon spans roughly two weeks — from the night after the full moon until the next new moon. Each night the visible moon grows smaller, until it disappears entirely into the dark moon phase. Astrologically and traditionally, this is the phase of <em>letting go</em>: not the dramatic release of the full moon, but the slower, quieter work of integrating what has happened and clearing space for the next cycle.
          </p>
          <p style={{ margin: 0 }}>
            Many lunar practitioners find the waning moon the most genuinely transformative phase of the entire cycle. The full moon shows you what is complete; the waning moon is when you do the actual labour of completing it. Rest, journaling, decluttering, ending conversations that have run their course, finishing books rather than starting new ones — these are waning-moon activities. A waning moon tarot spread brings the same energy to your inner life.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          The Spread — 4 Cards
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Draw four cards in order. The layout traces the arc of the waning phase: what the cycle taught, what still lingers, what is being composted into wisdom, and how to prepare space for the new moon ahead.
        </p>

        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Card Layout
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {POSITIONS.map(pos => (
              <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
                <div style={{ width: 72, height: 108, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1.1rem', color: 'var(--gold)' }}>
                  {pos.num}
                </div>
                <div style={{ fontSize: '.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center', maxWidth: 72 }}>{pos.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {POSITIONS.map(pos => (
            <div key={pos.num} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.8rem', color: 'var(--gold)' }}>
                {pos.num}
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.88rem', color: 'var(--gold)', marginBottom: '.5rem' }}>{pos.name}</div>
                <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{pos.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

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

      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Continue the lunar cycle</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          The waning moon flows naturally into the dark moon, then the new moon. Each phase has its own spread.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/spreads/dark-moon" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>Dark Moon Spread</Link>
          <Link href="/spreads/new-moon" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>New Moon Spread</Link>
          <Link href="/spreads/full-moon" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>Full Moon Spread</Link>
        </div>
      </div>
    </div>
  )
}
