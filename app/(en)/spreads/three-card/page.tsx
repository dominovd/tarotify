import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Three Card Tarot Spread — Past, Present, Future Guide | TarotAxis',
  description: 'Learn the three card tarot spread — the most versatile layout in tarot. Discover all position variations: past-present-future, mind-body-spirit, situation-action-outcome and more.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/three-card',
    languages: {
      'en': 'https://tarotaxis.com/spreads/three-card',
      'es': 'https://tarotaxis.com/es/tiradas/tres-cartas',
      'x-default': 'https://tarotaxis.com/spreads/three-card',
    },
  },
  openGraph: {
    title: 'Three Card Tarot Spread — Complete Guide',
    description: 'Master the 3-card tarot spread: the perfect layout for daily readings, quick guidance and beginner practice.',
  },
}

const VARIATIONS = [
  {
    name: 'Past · Present · Future',
    slug: 'past-present-future',
    desc: 'The classic. Card 1 shows the past energy shaping the situation, Card 2 captures where you are right now, and Card 3 reveals the most likely direction if current energies continue.',
    positions: ['Past', 'Present', 'Future'],
    best: 'Any situation where you want to understand how you got here and where things are heading.',
  },
  {
    name: 'Situation · Action · Outcome',
    slug: 'situation-action-outcome',
    desc: 'Practical and decisive. Card 1 defines what is happening, Card 2 shows the most helpful action to take, and Card 3 reveals the outcome of that action.',
    positions: ['Situation', 'Action', 'Outcome'],
    best: 'Decision-making, problem-solving, or when you need clear guidance rather than reflection.',
  },
  {
    name: 'Mind · Body · Spirit',
    slug: 'mind-body-spirit',
    desc: 'A holistic check-in across your three planes. Card 1 addresses mental patterns and thoughts, Card 2 reflects physical energy and the body, Card 3 speaks to spiritual growth and soul purpose.',
    positions: ['Mind', 'Body', 'Spirit'],
    best: 'Wellbeing check-ins, self-care readings, or when you feel out of balance.',
  },
  {
    name: 'Option A · Option B · What to Consider',
    slug: 'option-a-option-b',
    desc: 'For decisions between two paths. Card 1 illuminates the first option, Card 2 the second, and Card 3 reveals the hidden factor you most need to consider before choosing.',
    positions: ['Option A', 'Option B', 'Key Factor'],
    best: 'Crossroads decisions — two jobs, two relationships, two directions.',
  },
  {
    name: 'What to Embrace · What to Release · What to Learn',
    slug: 'embrace-release-learn',
    desc: 'A reading for transition and growth. Card 1 shows what to move toward, Card 2 what to let go of, and Card 3 the lesson this period of your life is asking you to integrate.',
    positions: ['Embrace', 'Release', 'Learn'],
    best: 'New beginnings, endings, periods of change, new year or birthday readings.',
  },
]

const MAIN_POSITIONS = [
  {
    num: 1,
    name: 'Past',
    subtitle: 'What Shaped This',
    desc: 'The first card represents the past energy, event or pattern that has led to the current situation. It is not necessarily distant history — it can be as recent as last week. This card answers: what is the root of this situation, and what have I already been through that is relevant here?',
  },
  {
    num: 2,
    name: 'Present',
    subtitle: 'Where You Are Now',
    desc: 'The central card captures the current energy, feeling or circumstance — the heart of the matter as it stands today. This is often the most emotionally resonant card in the spread. It reflects both the outer situation and your inner state within it.',
  },
  {
    num: 3,
    name: 'Future',
    subtitle: 'Where Things Are Heading',
    desc: 'The third card shows the most likely direction or outcome if current energies continue. It is not a fixed fate — it is a trajectory. Use it as guidance: if this is the outcome you want, the spread shows you how to reach it. If not, the past and present cards reveal what to address.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a three card tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A three card tarot spread is a reading that uses exactly three cards, each placed in a specific position with a defined meaning. The most common version uses Past, Present and Future positions, but there are many variations: Situation-Action-Outcome, Mind-Body-Spirit, What to Embrace-Release-Learn, and more. The three card spread is the most widely used spread in tarot — simple enough for beginners, deep enough for experienced readers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you do a 3 card tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shuffle your deck while focusing on your question or situation. When you feel ready, draw three cards and lay them face-down from left to right. Assign a meaning to each position before turning them over — for example, Past, Present, Future. Then turn the cards over one at a time, reading each in its position before moving to the next. Finally, read all three together as a single story or message.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best three card tarot spread for love?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For love questions, the most useful three card variations are: (1) Past-Present-Future to understand the trajectory of a relationship, (2) You-Them-The Connection to explore the dynamic between two people, or (3) What to Embrace-Release-Learn for clarity on what a relationship needs. For a deeper love reading using 5–7 cards, see our Love Tarot Spread.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can beginners use a three card tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — the three card spread is the ideal starting point for tarot beginners. Three cards are manageable enough to read without becoming overwhelmed, while still providing meaningful guidance. Start with Past-Present-Future using just the Major Arcana if the full 78-card deck feels daunting. As your confidence grows, you can explore other variations and larger spreads like the Celtic Cross.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should you do a three card tarot reading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many tarot readers use a simple three card spread daily as a morning practice — drawing one card for each of mind, body and spirit, or simply past-present-future on the day ahead. For specific questions or situations, there is no fixed frequency. Trust your intuition: if you feel called to pull cards, do so. Avoid re-reading the same question multiple times in a single day, as this tends to create confusion rather than clarity.',
      },
    },
  ],
}

export default function ThreeCardPage() {
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
        <span style={{ color: 'var(--gold)' }}>Three Card Spread</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Three Card Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          The most versatile spread in tarot. Three cards — infinite interpretations. Whether you read daily or occasionally, the three card spread gives you clear, actionable guidance on any question or situation.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['3 Cards', 'Beginner Friendly', 'Daily Use'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Visual Layout */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
          Card Layout
        </div>
        <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', alignItems: 'flex-start' }}>
          {MAIN_POSITIONS.map(pos => (
            <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
              <div style={{ width: 80, height: 120, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1.2rem', color: 'var(--gold)' }}>
                {pos.num}
              </div>
              <div style={{ fontSize: '.65rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.1em', textAlign: 'center' }}>{pos.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main position descriptions */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '.06em' }}>
          The Three Positions Explained
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {MAIN_POSITIONS.map(pos => (
            <div key={pos.num} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.8rem', color: 'var(--gold)' }}>
                {pos.num}
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.88rem', color: 'var(--gold)', marginBottom: '.15rem' }}>{pos.name}</div>
                <div style={{ fontSize: '.72rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '.5rem' }}>{pos.subtitle}</div>
                <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{pos.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Variations */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          5 Three Card Spread Variations
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          The three card format adapts to almost any question. Here are the most useful variations and when to use each.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {VARIATIONS.map((v, i) => (
            <div key={v.slug} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '.75rem' }}>
                <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.75rem', color: 'var(--gold)', opacity: .5, flexShrink: 0, paddingTop: '.1rem' }}>0{i + 1}</span>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.92rem', color: 'var(--gold)' }}>{v.name}</div>
              </div>
              <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '.75rem' }}>{v.desc}</p>
              <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '.6rem' }}>
                {v.positions.map((p, pi) => (
                  <span key={pi} style={{ padding: '.2rem .65rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 20, fontSize: '.68rem', color: 'var(--gold)', fontFamily: "'Cinzel',serif" }}>
                    {pi + 1}. {p}
                  </span>
                ))}
              </div>
              <div style={{ fontSize: '.78rem', color: 'var(--muted)' }}>
                <span style={{ color: 'var(--gold)', opacity: .6 }}>Best for: </span>{v.best}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to read */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          How to Do a Three Card Tarot Reading
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Start by choosing your variation — Past-Present-Future works for most situations, but think about what your question actually needs before you shuffle. Hold that question or focus clearly in your mind as you shuffle the deck.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            When you feel ready, cut or draw three cards and place them face-down from left to right. Name the positions aloud before turning any card over — this grounds the reading and prevents you from fitting card meanings to positions after the fact.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Turn each card over one at a time, pausing to sit with it before moving to the next. Read card 1 fully, then card 2, then card 3. Once all three are visible, read them as a single sentence or story — the most important insights often live in how the three cards speak to each other.
          </p>
          <p>
            Notice when cards from the same suit appear — three cups cards in a love reading carry a very different weight than one. Pay attention to repeating numbers, complementary archetypes, and the overall visual tone of the spread. These patterns tell you where the emphasis falls.
          </p>
        </div>
      </div>

      {/* Tips */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Tips for a Better Three Card Reading
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '.75rem' }}>
          {[
            ['🎯', 'Name positions first', 'Decide on your variation before you draw. Assigning meanings after seeing the cards is unconscious bias in disguise.'],
            ['🔗', 'Read the thread', 'After reading each card, find the single narrative connecting all three. The story matters more than any individual card.'],
            ['↔️', 'Look at the arc', 'Is the energy rising, falling or holding steady across cards 1→2→3? The direction tells you as much as the cards themselves.'],
            ['📓', 'Keep a journal', 'Three card readings are ideal for daily journaling. Record the date, question, cards and your interpretation — patterns emerge over time.'],
          ].map(([icon, title, text]) => (
            <div key={title as string} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem' }}>
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
            <div key={item.name} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Ready to draw your three cards?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Use our free tarot reading tool — draw three cards and get a full interpretation for any question.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Draw Three Cards
          </Link>
          <Link href="/spreads/celtic-cross" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Try Celtic Cross
          </Link>
        </div>
      </div>
    </div>
  )
}
