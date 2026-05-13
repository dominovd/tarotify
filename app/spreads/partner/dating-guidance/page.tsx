import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dating Guidance Tarot Spread — 4-Card Dating Advice Reading | TarotAxis',
  description: 'A 4-card dating tarot spread for ongoing dating frustration. Read what the situation is really about, what you keep missing and the next right step.',
  alternates: { canonical: 'https://tarotaxis.com/spreads/partner/dating-guidance' },
  openGraph: {
    title: 'Dating Guidance Tarot Spread — A Clear Next Step',
    description: 'Four cards for when you are stuck in a dating loop and just need honest direction — no fortune-telling, just clarity.',
  },
}

const POSITIONS = [
  { num: 1, name: 'What This Situation Is Really About', desc: 'The deeper question underneath the dating frustration. Almost always different from the surface question — and almost always more useful once it is named.' },
  { num: 2, name: 'What I Keep Missing', desc: 'The detail, pattern or feeling that has been quietly visible to you and that you keep walking past. Gentle — but specific.' },
  { num: 3, name: 'The Kind Question to Ask Myself', desc: 'A question to live with for the next few days. Not a punishing question — a kind one. The cards offer it because answering it changes everything.' },
  { num: 4, name: 'The Next Right Step', desc: 'A single, concrete action. Not the whole plan, not the final destination — just the very next move that aligns with what the rest of the spread has shown.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Should I keep dating this person?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tarot does not give clean should-I-or-shouldnt-I answers, and the question itself often hides a more useful one. Use this spread to surface what is actually going on for you in the situation. Once that is clear, the answer to whether to keep dating someone tends to become obvious without the cards needing to spell it out.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from the dating connection spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Dating Connection spread is for understanding the field between two people in the early weeks. This one is faster and more personal — it is for moments when you are stuck in your own head about a dating situation and just need a clear next step. Four cards, focused on you.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I keep getting the same cards in dating readings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Repeating cards almost always mean the same teaching is being offered until it is heard. Rather than asking the cards a different question, sit with the card that keeps appearing and ask what it is trying to land in you. Once the message lands, the repetition usually stops.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often can I do this spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Once a week at most for the same situation. Doing it more often turns it into anxious checking rather than guidance — and the cards become less responsive when used that way. Let the next right step actually be taken before drawing again.',
      },
    },
  ],
}

export default function DatingGuidanceSpreadPage() {
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
          <span>Dating Guidance</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>🧭</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Dating Guidance Tarot Spread
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            A focused 4-card spread for when dating has you stuck in a loop. Designed to surface the real question, then give you a single next step you can actually take.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            When to Reach for This Spread
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            This is the spread for the moments most dating advice does not help with — the third week of mixed signals, the quiet evening after an awkward date, the morning you find yourself drafting the same message for the seventh time. It is not built for fortune-telling. It is built for the small, important question: what do I actually do next.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Four cards is enough. Anything more and the reading tends to become another loop. Sit with the situation, shuffle without urgency, and draw. The spread is kind by design — it will not punish you for being uncertain. It will simply show you what is underneath the uncertainty.
          </p>
        </div>

        {/* Layout */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            The 4-Card Layout
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Lay the four cards in a simple row. The spread moves from depth toward action — from the real question, to what you have been missing, to a kind question to live with, to the next step.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {[1, 2, 3, 4].map(n => (
              <div key={n} style={{ width: 52, height: 80, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>
                {n}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS.map(({ num, name, desc }) => (
              <div key={num} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.1rem', background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12 }}>
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
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Reading Your Spread
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Position 1 reframes the situation. If you came to the cards asking whether someone likes you, position 1 might quietly reveal that the real question is whether you are choosing yourself in the dynamic. Notice how the question changes shape. That shift is the heart of this reading.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Position 2 is best received without defensiveness. The card is not exposing a flaw — it is pointing to something you have already half-noticed but kept walking past. Naming it out loud often releases its grip.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Positions 3 and 4 work together. The question in position 3 is something to live with for two or three days — not to answer immediately. The action in position 4 will make more sense once the question has had time to do its work. Take the step the card suggests, even if it is smaller than you wanted. Small honest steps are how dating actually moves.
          </p>
        </div>

        {/* FAQ */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
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
