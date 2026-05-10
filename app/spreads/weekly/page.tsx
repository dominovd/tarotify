import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Weekly Tarot Spread — 7-Card Reading for the Week Ahead | Tarotify',
  description: 'Do a weekly tarot spread with one card per day — a 7-card Monday-to-Sunday reading that maps the energy, challenges and opportunities of your week ahead.',
  alternates: { canonical: 'https://tarotify.app/spreads/weekly' },
  openGraph: {
    title: 'Weekly Tarot Spread — 7-Card Reading for the Week Ahead',
    description: 'One card for each day of the week. A practical, grounding tarot ritual that helps you navigate the week with intention and clarity.',
  },
}

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a weekly tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A weekly tarot spread is a reading designed to map the energy of the coming week. The most common version uses seven cards — one for each day, Monday through Sunday — giving you a snapshot of the dominant energy, challenge or opportunity most likely to arise each day. It is a practical, grounding ritual rather than a predictive one: the cards do not tell you exactly what will happen, but they give you a useful lens through which to approach each day with greater awareness and intention.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many cards are in a weekly tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The classic weekly tarot spread uses seven cards — one per day. A shorter alternative, the Week Overview Spread, uses five cards to cover the key themes and energies of the week without assigning a card to each specific day. Both approaches are valid; the seven-card version suits readers who enjoy daily check-ins, while the five-card version works better for those who prefer a broader weekly picture.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to do a weekly tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sunday evening or Monday morning are the ideal times for a weekly tarot spread. Doing the reading at the threshold of the week — before it begins — gives you the most opportunity to work with what the cards reveal. Some readers prefer Sunday evening as a reflective wind-down ritual; others like Monday morning as a way to set an intention for the days ahead. Either works well. Consistency matters more than the exact time: making it a weekly habit is what deepens the practice.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you interpret a weekly tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Interpret each daily card as the dominant energy, theme or invitation for that day — not as a fixed prediction. Read the cards in sequence, Monday to Sunday, and note any patterns: repeating suits suggest a whole-week theme (a fire week, a water week), while Major Arcana cards highlight days of particular significance. Challenging cards such as the Tower or the Five of Swords are worth noting as days to approach with care rather than days to dread. Keep brief notes throughout the week and return to the spread each evening to see how the energy played out.',
      },
    },
  ],
}

export default function WeeklyPage() {
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
        <span style={{ color: 'var(--gold)' }}>Weekly</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Weekly Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          One card for each day of the week — a grounding Monday-to-Sunday ritual that maps the energy, challenges and opportunities ahead. Not a prediction, but a practical guide for navigating the week with clarity and intention.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['7 Cards', 'Week Ahead', 'Daily Guidance', 'Planning'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Classic 7-Day Spread layout visual */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
          Classic 7-Day Spread — One Card Per Day
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '.5rem', maxWidth: 500, margin: '0 auto' }}>
          {DAYS.map((day, i) => (
            <div key={day} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.3rem' }}>
              <div style={{ width: '100%', aspectRatio: '2/3', border: '1px solid rgba(201,168,76,.25)', borderRadius: 6, background: 'rgba(201,168,76,.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.7rem', color: 'var(--gold)' }}>
                {i + 1}
              </div>
              <div style={{ fontSize: '.52rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', textAlign: 'center' }}>{day.slice(0, 3)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Two spread options */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Two Ways to Read the Week
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1rem' }}>

          {/* Option 1 */}
          <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.35rem' }}>
              Classic 7-Day Spread
            </div>
            <div style={{ fontSize: '.72rem', color: 'var(--gold)', opacity: .6, marginBottom: '.85rem', fontFamily: "'Cinzel',serif", letterSpacing: '.05em' }}>7 cards — most popular</div>
            <p style={{ color: 'var(--muted)', fontSize: '.87rem', lineHeight: 1.7, margin: '0 0 .85rem' }}>
              One card for each day of the week, Monday through Sunday. Each card represents the dominant energy, challenge or opportunity for that day — a practical frame for the day ahead rather than a fixed forecast.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.35rem' }}>
              {DAYS.map((day, i) => (
                <div key={day} style={{ display: 'flex', gap: '.65rem', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', color: 'var(--gold)', opacity: .7, minWidth: 22 }}>{i + 1}.</span>
                  <span style={{ color: 'var(--muted)', fontSize: '.83rem' }}>{day} — daily energy &amp; opportunity</span>
                </div>
              ))}
            </div>
          </div>

          {/* Option 2 */}
          <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.35rem' }}>
              Week Overview Spread
            </div>
            <div style={{ fontSize: '.72rem', color: 'var(--gold)', opacity: .6, marginBottom: '.85rem', fontFamily: "'Cinzel',serif", letterSpacing: '.05em' }}>5 cards — broader view</div>
            <p style={{ color: 'var(--muted)', fontSize: '.87rem', lineHeight: 1.7, margin: '0 0 .85rem' }}>
              A five-position spread that gives you the overarching shape of the week — useful when you want a thematic overview rather than day-by-day guidance.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
              {[
                ['1', 'Overview — the theme or overarching energy for the week'],
                ['2', 'Early week focus — what to concentrate on Monday–Wednesday'],
                ['3', 'Mid-week navigation — what to work through Thursday–Friday'],
                ['4', 'Weekend energy — rest, reflection or social connection'],
                ['5', 'Key lesson — the message or insight the week offers'],
              ].map(([num, label]) => (
                <div key={num} style={{ display: 'flex', gap: '.65rem', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', color: 'var(--gold)', opacity: .7, minWidth: 22 }}>{num}.</span>
                  <span style={{ color: 'var(--muted)', fontSize: '.83rem' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* How to do your weekly reading */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          How to Do Your Weekly Reading
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            The best time is <strong style={{ color: 'var(--gold)', fontWeight: 400 }}>Sunday evening or Monday morning</strong> — at the threshold of the week, before its energy has taken hold. Many readers make this a quiet ritual: a cup of tea, a cleared table, a few minutes of stillness before drawing.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Shuffle your deck slowly and with intention. Hold one clear question in mind: <em>"What do I need to know about the week ahead?"</em> Shuffle until the deck feels ready, then draw seven cards and lay them face-down from left to right, one for each day.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Turn each card over in order — Monday first, then Tuesday, and so on through to Sunday. Read each card before turning the next; let the picture build gradually rather than revealing all seven at once. Write two or three words for each position as you go.
          </p>
          <p>
            Keep your notes somewhere accessible — a journal, a notes app, even a photo of the spread. Return to the reading each evening to see how the energy played out and what the card revealed. Over time this reflection deepens your reading considerably.
          </p>
        </div>
      </div>

      {/* Reading tips */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Reading Tips for the Week
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '.75rem' }}>
          {[
            ['⚡', 'Major Arcana on a day', 'A Major Arcana card in a daily position signals something significant — an important event, a meaningful conversation or a theme that carries real weight. These are days to show up fully and pay attention.'],
            ['🛡', 'Challenging cards', 'The Tower, the Five of Swords, the Ten of Wands — these are not days to fear, but days to approach with care. Forewarned is forearmed. Knowing a day may be demanding lets you prepare, pace yourself and choose your responses deliberately.'],
            ['🌊', 'Repeating suits', 'If several cards share a suit, the whole week carries that element\'s flavour: many Wands suggest a high-energy, creative or career-focused week; Cups point to emotional or relational themes; Swords to mental challenges; Pentacles to practical or financial matters.'],
            ['🌙', 'Weekend cards', 'Positions 6 and 7 (Saturday and Sunday) reveal the weekend\'s energy. Look here for rest, reflection, social connection or personal renewal — and for the note the week will close on before the next cycle begins.'],
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Ready to read your week?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Shuffle your deck and draw seven cards. Use our card meanings guide to interpret each daily position.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/cards" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Browse Card Meanings
          </Link>
          <Link href="/spreads/three-card" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Three-Card Spread
          </Link>
        </div>
      </div>
    </div>
  )
}
