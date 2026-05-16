import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Horseshoe Tarot Spread — 7-Card Reading Guide | TarotAxis',
  description: 'Learn the horseshoe tarot spread — a classic 7-card layout covering past, present, future, hidden influences and outcome. Complete position guide with tips.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/horseshoe',
    languages: {
      'en': 'https://tarotaxis.com/spreads/horseshoe',
      'es': 'https://tarotaxis.com/es/tiradas/herradura',
      'x-default': 'https://tarotaxis.com/spreads/horseshoe',
    },
  },
  openGraph: {
    title: 'Horseshoe Tarot Spread — 7-Card Reading Guide',
    description: 'Learn the horseshoe tarot spread — a classic 7-card layout covering past, present, future, hidden influences and outcome.',
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'The Past',
    subtitle: 'Influences Leading to Now',
    desc: 'The energy, events or patterns from the recent past that have directly shaped the current situation. This is not distant history — it is the momentum that brought you to where you stand today. Understanding this card helps you see what has already been set in motion.',
  },
  {
    num: 2,
    name: 'The Present',
    subtitle: 'Current Situation',
    desc: 'Where things stand right now. This card captures the heart of the matter as it currently exists — the dominant energy, challenge or opportunity you are working with at this moment. It is the centre of the horseshoe and the lens through which the other cards should be read.',
  },
  {
    num: 3,
    name: 'Hidden Influences',
    subtitle: 'What You May Not See',
    desc: 'The unseen forces at work beneath the surface — unconscious patterns, overlooked factors, background dynamics or information you do not yet have access to. This is often one of the most revealing cards in the spread, surfacing exactly what most needs to be brought into awareness.',
  },
  {
    num: 4,
    name: 'Obstacles',
    subtitle: 'What Stands in the Way',
    desc: 'The primary challenge, block or resistance you are likely to encounter on your path. This card does not indicate inevitable failure — it points to what requires conscious attention and preparation. Knowing the obstacle in advance is always an advantage.',
  },
  {
    num: 5,
    name: 'External Influences',
    subtitle: 'People and Environment Around You',
    desc: 'The people, circumstances, relationships and environmental factors surrounding the situation — things that are not entirely within your control but that will significantly affect the outcome. This card may represent a person, a system, a cultural context or a larger pattern of energy.',
  },
  {
    num: 6,
    name: 'Advice',
    subtitle: 'What the Cards Recommend',
    desc: 'The most important action, attitude, quality or understanding the reading is asking you to bring to this situation. Consider this the cards speaking directly to you: if you could only take one thing from this spread, what does the sixth position offer you as guidance?',
  },
  {
    num: 7,
    name: 'The Outcome',
    subtitle: 'Likely Result',
    desc: 'The most probable outcome if current energies continue and the advice of the reading is followed. Like all outcome cards, this is a trajectory, not a fixed fate — it reflects the path you are currently on. If you want a different result, the other six cards show you where to focus.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the horseshoe tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The horseshoe tarot spread is a classic 7-card layout in which the cards are arranged in an arc or horseshoe shape. It covers seven positions: the past, the present, hidden influences, obstacles, external influences, advice and the likely outcome. The spread is considered a middle-ground between the brevity of a three-card reading and the depth of the Celtic Cross — comprehensive enough to explore a situation fully, but accessible enough for readers at all levels.',
      },
    },
    {
      '@type': 'Question',
      name: 'What questions is the horseshoe spread best for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The horseshoe spread works well for any situation where you need a thorough overview — particularly questions about decisions, relationships, career moves, challenges or transitions. Its strength lies in its inclusion of hidden influences and external factors, which make it especially useful when a situation feels unclear or when you suspect there are elements you are not fully seeing. It is less suited to simple yes/no questions, for which a one-card or yes/no tarot method would be more appropriate.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is the horseshoe spread different from the Celtic Cross?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The horseshoe spread uses 7 cards; the Celtic Cross uses 10. The Celtic Cross is generally considered more complex, with a dedicated card for the querent\'s inner state and a column of cards representing different temporal and psychological layers. The horseshoe is more streamlined — it covers past, present, future and the key forces at play, but with less psychological depth than the full Celtic Cross. Many readers use the horseshoe as an accessible alternative to the Celtic Cross, or as a stepping stone toward it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you read the horseshoe tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lay the seven cards face-down in an arc from left to right, mimicking the shape of a horseshoe. Turn them over one at a time, reading each in sequence from card 1 (past) through to card 7 (outcome). Read each card first in isolation within its position meaning, then look for the narrative thread connecting all seven. Pay particular attention to the relationship between the hidden influences (card 3) and the advice (card 6) — these two cards often hold the most actionable insight. Note repeating suits or numbers across the spread, as patterns carry significant weight in a 7-card reading.',
      },
    },
  ],
}

export default function HorseshoePage() {
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
        <span style={{ color: 'var(--gold)' }}>Horseshoe Spread</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>⌒</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Horseshoe Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          A classic 7-card layout that has been used by tarot readers for generations. The horseshoe spread gives you a complete picture of any situation — from the past that shaped it to the outcome most likely ahead — arranged in an arc that mirrors the symbol of good fortune.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['7 Cards', 'Intermediate', 'Any Question'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* About the spread */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          About the Horseshoe Spread
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            The horseshoe spread is one of the oldest and most widely taught tarot layouts, appearing in tarot books and traditions dating back to the early twentieth century. Its name comes from the arc shape formed by the seven card positions — an open curve that resembles a horseshoe, the ancient symbol of luck and protection. Unlike more elaborate spreads that require extensive memorisation, the horseshoe follows a logical sequence that most readers find intuitive after only a few uses.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            What distinguishes the horseshoe from simpler three-card spreads is its inclusion of hidden influences and external factors — two positions that acknowledge the fuller complexity of any real situation. Real life is rarely shaped only by what we can see. The hidden influences card surfaces what is operating beneath conscious awareness; the external influences card names the people, institutions and circumstances that are affecting the situation from the outside. Together with the advice and outcome cards, these positions make the horseshoe a genuinely useful tool for decision-making and situation analysis.
          </p>
          <p>
            The horseshoe spread sits between the three-card spread and the Celtic Cross in both complexity and depth. It is an ideal choice when a three-card reading feels too brief but a ten-card Celtic Cross feels like too much. Many experienced readers return to the horseshoe regularly throughout their practice precisely because of this balance.
          </p>
        </div>
      </div>

      {/* Visual horseshoe layout */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
          Card Layout — The Horseshoe Arc
        </div>
        {/* Arc layout: 3 cards bottom-left, 1 at top-center, 3 cards bottom-right */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          {/* Top card (position 4 — Obstacles, at apex) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.4rem' }}>
            <div style={{ width: 68, height: 102, border: '1px solid rgba(201,168,76,.5)', borderRadius: 8, background: 'rgba(201,168,76,.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1rem', color: 'var(--gold)' }}>4</div>
            <div style={{ fontSize: '.58rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center' }}>Obstacles</div>
          </div>
          {/* Middle row: 3, 5 */}
          <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.4rem' }}>
              <div style={{ width: 68, height: 102, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1rem', color: 'var(--gold)' }}>3</div>
              <div style={{ fontSize: '.58rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center' }}>Hidden</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.4rem' }}>
              <div style={{ width: 68, height: 102, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1rem', color: 'var(--gold)' }}>5</div>
              <div style={{ fontSize: '.58rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center' }}>External</div>
            </div>
          </div>
          {/* Lower row: 2, 6 */}
          <div style={{ display: 'flex', gap: '5rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.4rem' }}>
              <div style={{ width: 68, height: 102, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1rem', color: 'var(--gold)' }}>2</div>
              <div style={{ fontSize: '.58rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center' }}>Present</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.4rem' }}>
              <div style={{ width: 68, height: 102, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1rem', color: 'var(--gold)' }}>6</div>
              <div style={{ fontSize: '.58rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center' }}>Advice</div>
            </div>
          </div>
          {/* Bottom row: 1, 7 */}
          <div style={{ display: 'flex', gap: '7rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.4rem' }}>
              <div style={{ width: 68, height: 102, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1rem', color: 'var(--gold)' }}>1</div>
              <div style={{ fontSize: '.58rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center' }}>Past</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.4rem' }}>
              <div style={{ width: 68, height: 102, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1rem', color: 'var(--gold)' }}>7</div>
              <div style={{ fontSize: '.58rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center' }}>Outcome</div>
            </div>
          </div>
        </div>
      </div>

      {/* Position descriptions */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '.06em' }}>
          The Seven Positions Explained
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {POSITIONS.map(pos => (
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

      {/* How to read */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          How to Read the Horseshoe Spread
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Shuffle your deck while holding your question clearly in mind. When you are ready, lay seven cards face-down in the horseshoe arc pattern shown above — starting from the bottom left (card 1) and moving up through the arc to the apex (card 4) before descending on the right side to finish with card 7 at the bottom right.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Turn the cards over one at a time in sequence. Read each card fully within its position meaning before moving to the next. Once all seven are visible, step back and look for the larger narrative — how does the past (card 1) connect to the hidden influences (card 3)? Does the advice (card 6) address the obstacle (card 4)? Does the outcome (card 7) feel earned given the present situation (card 2)?
          </p>
          <p>
            Pay particular attention to repeating suits: three or more cards from the same suit signal where the dominant energy of the reading lies. Cups point to emotional undercurrents; Swords to mental conflict or clarity; Wands to ambition and action; Pentacles to material concerns. Repeating Major Arcana cards suggest the situation carries significant karmic or life-lesson weight and should be taken seriously.
          </p>
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Ready to lay your horseshoe?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Draw seven cards and use the position guide above to interpret your reading.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Draw Cards Now
          </Link>
          <Link href="/spreads/celtic-cross" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Try Celtic Cross
          </Link>
          <Link href="/spreads" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            All Spreads
          </Link>
        </div>
      </div>
    </div>
  )
}
