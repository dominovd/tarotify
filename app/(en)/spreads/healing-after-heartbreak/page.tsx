import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Healing After Heartbreak Tarot Spread — 5 Card Recovery Reading | TarotAxis',
  description: 'A 5-card spread for healing after a breakup. Process the loss, find the lesson, recognise what is yours to carry forward, and locate your next step.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/healing-after-heartbreak',
    languages: {
      'en': 'https://tarotaxis.com/spreads/healing-after-heartbreak',
      'es': 'https://tarotaxis.com/es/tiradas/sanar-tras-desamor',
      'x-default': 'https://tarotaxis.com/spreads/healing-after-heartbreak',
    },
  },
  openGraph: {
    title: 'Healing After Heartbreak Tarot Spread — 5 Card Recovery Reading',
    description: 'A 5-card spread for healing after a breakup. Process the loss, find the lesson, recognise what is yours to carry forward, and locate your next step.',
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'What I Am Still Carrying',
    desc: 'The specific grief, anger, longing, regret or shame that has not yet been released. This card names the weight that is still actively present — not the version of the heartbreak you tell other people, but the one you carry at three in the morning when no one is watching.',
  },
  {
    num: 2,
    name: 'What This Relationship Taught Me',
    desc: 'The genuine wisdom of this chapter — not what you "should" have learned, but what you actually now know about love and yourself. This card honours the real lesson, which is often quieter and less tidy than the one you would write in a journal.',
  },
  {
    num: 3,
    name: 'What Is Mine to Keep',
    desc: 'The qualities, capacities and self-knowledge gained through this relationship that belong to you regardless of how it ended. The growth was real even if the partnership was not lasting. This card asks you to recognise what has become permanently yours.',
  },
  {
    num: 4,
    name: 'What Is Mine to Release',
    desc: 'The story, role, identity or attachment that needs to be set down to make space for what comes next. This is not the person — it is the version of yourself that was built around them, or the narrative that has outlived its usefulness.',
  },
  {
    num: 5,
    name: 'My Next Step',
    desc: 'The practical or inward action that would most support healing right now — not the whole journey, just the next step. This card refuses to overwhelm you with a five-year plan. It offers the one thing worth doing this week.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How soon after a breakup should I do this tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wait at least two to four weeks. The first stretch after a breakup is for feeling, not analysing — the nervous system needs time to register what has happened before the mind can make any honest sense of it. You need stable enough ground to receive what the cards bring, because some of it will not be flattering or comfortable. If you are still in the acute phase where you cannot eat or sleep, the spread will simply mirror that chaos back. Wait until the worst of the static has settled.',
      },
    },
    {
      '@type': 'Question',
      name: "What if the cards reveal feelings I'm not ready for?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Set the reading aside and return to it later. The cards are a mirror, not a deadline — nothing they show you needs to be processed today. Write down what came up, close the journal, and come back in a week or a month when you have more capacity. Heartbreak healing is not linear, and a spread that felt unbearable in October can become exactly what you needed by January. The wisdom waits. Honour your own pacing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can this spread help if I caused the breakup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — grief works in both directions, often more silently for the person who left. The one who ends a relationship is rarely free of pain; they simply carry a different version of it, layered with guilt, doubt and the strange grief of mourning someone who is still alive. This spread does not assume innocence or victimhood from either side. It asks what is still being carried, what was learned, and what comes next — questions that belong to anyone, regardless of who closed the door.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I ever love again after this?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — the real question is when you will feel ready, not whether love will return. The capacity to love is not depleted by heartbreak; it is reshaped. You may love differently next time, more slowly or more carefully, and that is not a failure but an honest response to what you now know. Most people do love again, and many describe what comes later as quieter, steadier and more recognisable than what came before. The timeline is yours.',
      },
    },
  ],
}

export default function HealingAfterHeartbreakPage() {
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
        <span style={{ color: 'var(--gold)' }}>Healing After Heartbreak</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>♡</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Healing After Heartbreak Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          A five-card spread for the work that comes after the worst of the grief has passed. Not about getting them back, not about pretending you are fine — about the slower, more honest task of recovering yourself.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['5 Cards', 'Healing', 'Recovery'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* About */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          About This Spread
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Heartbreak almost always takes longer than people expect — longer than friends will sit with you, longer than the productivity culture around us wants to acknowledge, longer than you yourself believed possible when it began. Rushing this is the most common mistake. The pressure to "be over it" by some imagined deadline does not speed healing; it simply pushes the grief underground, where it tends to wait until the next relationship to resurface. Slowness here is not weakness. It is the actual shape of the work.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            This spread is built around the distinction between healing and forgetting. The cards do not erase the relationship, the person, or the love that was real. They integrate it — they help you carry the experience without being defined by it. You will still remember. You may still grieve in small waves for a long time. What changes is that the memory stops being a wound and starts being a chapter — finished, honoured, and yours to keep without it costing you the present.
          </p>
          <p>
            The right time for this reading is not the first week, when the rawness needs to be felt rather than analysed, and not years later when you have been waiting for permission to look at it again. Somewhere between a few weeks and several months in, when you can think about them without the room spinning but the lessons have not yet fully landed — that is when the spread does its best work. If you are not sure whether it is time, the fact that you are reading this is usually a quiet yes.
          </p>
        </div>
      </div>

      {/* Spread Layout */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          The Five Positions
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Draw the five cards in order, taking a breath between each. The sequence matters — you move from what is still being carried, through what was learned, into what to keep and what to release, and finally toward a single honest next step.
        </p>

        {/* Visual Layout */}
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Ready to begin the work?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Draw your cards with our free reading tool, then return here to interpret each position in your own time.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Draw Cards Now
          </Link>
          <Link href="/spreads/what-blocks-my-love" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            What Blocks My Love
          </Link>
          <Link href="/spreads/what-do-i-need-to-heal" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            What Do I Need to Heal
          </Link>
          <Link href="/spreads/love" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Love Spread
          </Link>
        </div>
      </div>
    </div>
  )
}
