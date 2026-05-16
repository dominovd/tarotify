import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dating Connection Tarot Spread — 5-Card Early Dating Reading | TarotAxis',
  description: 'A 5-card dating tarot spread for the first few weeks of a new connection. Honest insight into the energy being exchanged and whether to keep going.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/partner/dating-connection',
    languages: {
      'en': 'https://tarotaxis.com/spreads/partner/dating-connection',
      'es': 'https://tarotaxis.com/es/tiradas/pareja/conexion-en-citas',
      'x-default': 'https://tarotaxis.com/spreads/partner/dating-connection',
    },
  },
  openGraph: {
    title: 'Dating Connection Tarot Spread — Early Dating Clarity',
    description: 'Five cards to read the field between you and someone new — what each person is bringing, what is being avoided, and whether to deepen.',
  },
}

const POSITIONS = [
  { num: 1, name: 'The Energy You Bring', desc: 'What you are actually carrying into this connection — your openness, your guardedness, the hopes and fears you arrive with. Not what you wish you were bringing, but what is honestly there.' },
  { num: 2, name: 'Their Energy Right Now', desc: 'The energy the other person is bringing in this moment. Not a forecast of their feelings forever, just what is alive in them today in relation to you.' },
  { num: 3, name: 'What Is Being Exchanged', desc: 'The actual current between you — the meeting point. This card shows the quality of the connection itself, separate from what either of you imagines it to be.' },
  { num: 4, name: 'What Is Being Avoided', desc: 'The conversation, truth or feeling that neither of you has touched yet. Sometimes this is a small thing; sometimes it is the most important thing in the room.' },
  { num: 5, name: 'Whether This Is Worth Deepening', desc: 'The honest guidance the cards offer — not a yes-or-no verdict, but a reflection of whether the connection has the substance to grow into something more.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When should I use a dating connection tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This spread works best in the first few weeks of a new connection — roughly the two-to-six-date window, when you have enough material to read but are not yet certain where things are going. It is most useful when you can feel something real but you cannot quite name what it is.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the Lovers card mean in a dating spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Lovers in a dating spread points to a meaningful choice, alignment, or a genuine meeting of values — not necessarily a forever romance. In position 3 (what is being exchanged) it suggests authentic resonance. In position 4 (what is being avoided), it may indicate that the depth of the connection is being downplayed by one or both of you.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I keep drawing The Tower for someone I am dating?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Tower repeating in dating readings usually signals that this connection will either rearrange something important in you, or that the structure you are building together is not stable enough to stand. It is not automatically a no, but it asks for radical honesty about what would actually need to change for this to work.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a 5-card spread really tell me whether to keep dating someone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It can give you a strikingly clear mirror, but the decision is still yours. The spread is designed to reveal what is being exchanged and what is being avoided — the two questions most people skip past in early dating. If the cards point to substance, that is meaningful. If they point to avoidance, that is also meaningful.',
      },
    },
  ],
}

export default function DatingConnectionSpreadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/spreads" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Spreads</Link>
          <span style={{ opacity: .4 }}>›</span>
          <Link href="/spreads/partner" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Partner</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Dating Connection</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>🌱</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Dating Connection Tarot Spread
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            A 5-card spread for the early weeks of a new connection. Designed to read the energy actually being exchanged — not the version of it you might be hoping for.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Before You Draw
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Early dating is one of the strangest emotional terrains we navigate as adults. You barely know someone, yet your nervous system is already constructing futures. The point of this spread is not to predict whether things will work out — it is to give you a clearer view of what is actually happening between you right now, while it is still happening.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Before you shuffle, take a breath and notice what you want the cards to say. Then notice that wanting, and set it aside for a few minutes. Hold the person in mind as they actually are — not as your hope of them — and shuffle until something settles. Then draw five cards.
          </p>
        </div>

        {/* Layout diagram */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            The 5-Card Layout
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Lay the cards in a row, left to right. Each position has a specific question — read them in order, but also look at the story running across the whole spread.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {[1, 2, 3, 4, 5].map(n => (
              <div key={n} style={{ width: 52, height: 80, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>
                {n}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS.map(({ num, name, desc }) => (
              <div key={num} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.1rem', background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12 }}>
                <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem' }}>{num}</div>
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', marginBottom: '.3rem' }}>{name}</div>
                  <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interpreting */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            How to Read Your Results
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            The most revealing tension in this spread tends to live between positions 3 and 4. Position 3 shows you what is actually being exchanged in the connection; position 4 shows what is being avoided. If those two cards are in conflict — for example, Two of Cups in position 3 and Seven of Swords in position 4 — there is genuine warmth between you, but something is also being held back. That is useful information.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Pay attention to court cards in position 2. They often describe the way the other person is currently relating, rather than who they essentially are. A reversed Knight of Cups, for instance, is not a verdict on their character — it is a snapshot of how they are showing up in this connection right now.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Position 5 is guidance, not prophecy. Read it as the invitation that arises from the rest of the spread. If the cards point toward deepening, the next step is usually a real conversation rather than a grand gesture. If they point away, the kindest move is often to release the connection without dramatising it.
          </p>
        </div>

        {/* FAQ */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '1.1rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {faqSchema.mainEntity.map((item, i, arr) => (
              <div key={item.name} style={{ paddingBottom: i < arr.length - 1 ? '1.1rem' : 0, borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <p style={{ fontFamily: "'Cinzel',serif", fontSize: '.85rem', color: 'var(--gold)', margin: '0 0 .4rem' }}>{item.name}</p>
                <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related links */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <Link href="/spreads/partner" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>More spreads</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>All partner spreads →</div>
          </Link>
          <Link href="/free-reading" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Try it now</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Free tarot reading →</div>
          </Link>
        </div>

      </div>
    </>
  )
}
