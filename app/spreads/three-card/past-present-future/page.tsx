import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Past Present Future Tarot Spread — 3 Card Reading Guide | TarotAxis',
  description: 'Learn how to read a past present future tarot spread. Full guide to the classic 3-card layout with position meanings, examples, and tips for accurate readings.',
  alternates: { canonical: 'https://tarotaxis.com/spreads/three-card/past-present-future' },
  openGraph: {
    title: 'Past Present Future Tarot Spread — Complete Guide',
    description: 'The definitive guide to the past-present-future tarot spread — the most popular 3-card layout for understanding any situation.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you read a past present future tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Draw three cards and lay them left to right. The first card (left) represents the past — the energy, event, or pattern that shaped the current situation. The second card (centre) shows the present — where you are right now and the dominant energy at play. The third card (right) reveals the future — the most likely direction if current energies continue. Read each card individually first, then look for the story that connects all three.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the past card mean in a tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The past card in a three-card spread shows the foundation of the current situation — the experience, pattern, decision, or energy that led to where things stand now. It is not necessarily about something long ago; it can represent what happened last week if that is what is most relevant. Understanding the past card helps you see the roots of the present.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the future card in a tarot reading fixed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The future position in a tarot spread shows the most likely outcome based on current energies — what is likely to happen if nothing changes. Tarot reflects the present moment, not an unchangeable destiny. If you take different actions, make different choices, or shift your perspective, the outcome can shift too. The future card is an invitation for awareness, not a verdict.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use the past present future spread for any question?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — the past-present-future spread is one of the most versatile layouts in tarot. It works well for relationship questions, career situations, personal growth, and general guidance. It is less suited for yes/no questions (use a single-card pull for those) and may feel limited for very complex situations with many people involved (a Celtic Cross works better there).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between past-present-future and situation-action-outcome?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both are three-card spreads, but with different orientations. Past-present-future is narrative — it tells the story of how a situation developed and where it is heading. Situation-action-outcome is prescriptive — it describes what is happening, what to do, and what results from doing it. Use past-present-future to understand; use situation-action-outcome when you need to act.',
      },
    },
  ],
}

export default function PastPresentFuturePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/spreads" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Spreads</Link>
          <span style={{ opacity: .4 }}>›</span>
          <Link href="/spreads/three-card" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Three Card</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Past Present Future</span>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>⏳</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Past, Present & Future Tarot Spread
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            The most widely used three-card spread in tarot. Simple to lay out, rich to interpret — and one of the most powerful ways to understand any situation at a glance.
          </p>
        </div>

        {/* Layout */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.75rem', marginBottom: '2rem', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .6, textTransform: 'uppercase', marginBottom: '1.25rem' }}>The Layout</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
            {[
              { num: 1, label: 'Past' },
              { num: 2, label: 'Present' },
              { num: 3, label: 'Future' },
            ].map(({ num, label }) => (
              <div key={num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
                <div style={{ width: 60, height: 95, border: '1px solid rgba(201,168,76,.4)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', background: 'rgba(201,168,76,.06)' }}>{num}</div>
                <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.08em', color: 'var(--gold)', opacity: .7 }}>{label}</span>
              </div>
            ))}
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.6, margin: 0 }}>
            Lay cards left to right after shuffling. Read card 1 first, then card 2, then card 3 — then step back and find the thread that connects all three.
          </p>
        </div>

        {/* Position meanings */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '1.25rem' }}>
            Position Meanings
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {[
              { num: 1, name: 'Past', desc: 'The energy, event, pattern, or decision that shaped the current situation. This is the root — what brought things to where they are now. It may refer to something recent or something older, depending on what the card reveals. Understanding this card helps you see why the present looks the way it does.' },
              { num: 2, name: 'Present', desc: 'Where you are right now — the dominant energy, mood, or circumstance active in this moment. This is the heart of the reading. If the card surprises you, pay close attention: it may be pointing to something you are not fully acknowledging about your current situation.' },
              { num: 3, name: 'Future', desc: 'The most likely direction if current energies continue unchanged. This is not a fixed prediction — it is a projection based on what is happening now. If the card is challenging, it is an invitation to shift something in the present. If it is encouraging, it affirms that you are on the right path.' },
            ].map(({ num, name, desc }) => (
              <div key={num} style={{ display: 'flex', gap: '1rem', padding: '1.25rem 1.25rem', background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12 }}>
                <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem' }}>{num}</div>
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', marginBottom: '.4rem' }}>{name}</div>
                  <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Reading Tips
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {[
              { tip: 'Find the narrative thread', desc: 'The three cards tell a story. After reading each individually, step back and ask: what is the journey these three cards are describing? The connections between them often reveal the deepest insight.' },
              { tip: 'Notice the elemental flow', desc: 'Are you moving from a Fire card (Wands) to a Water card (Cups)? From conflict to resolution? From thought to feeling? The change in suit or element from past to present to future often shows exactly where the energy is shifting.' },
              { tip: 'Let the future card inform the present', desc: 'If the future card is challenging, look back at the present card and ask: what here could be shifted? The future is not fixed. Tarot shows you where you are heading — you decide what to do with that information.' },
              { tip: 'One clear question works best', desc: 'The past-present-future spread gives the clearest reading when your question is specific. "What is happening with my job situation?" gives better results than "What does my future hold?"' },
            ].map(({ tip, desc }) => (
              <div key={tip} style={{ paddingBottom: '.75rem', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.82rem', marginBottom: '.3rem', opacity: .9 }}>{tip}</div>
                <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.65, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
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

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <Link href="/spreads/three-card" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>More layouts</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>All 3-card variations →</div>
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
