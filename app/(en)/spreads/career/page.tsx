import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Career Tarot Spread — Work, Path & Purpose Readings | TarotAxis',
  description: 'Explore career tarot spreads for work decisions, job changes and finding your purpose. Step-by-step guides with position meanings for 3, 4 and 5-card layouts.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/career',
    languages: {
      'en': 'https://tarotaxis.com/spreads/career',
      'es': 'https://tarotaxis.com/es/tiradas/carrera',
      'x-default': 'https://tarotaxis.com/spreads/career',
    },
  },
  openGraph: {
    title: 'Career Tarot Spread — Work, Path & Purpose Readings',
    description: 'Find clarity on your career direction, job decisions and life purpose with dedicated tarot spreads. Position-by-position guides for every work situation.',
  },
}

const SPREADS = [
  {
    name: 'Career Direction (5 Cards)',
    cards: 5,
    when: 'Use this when you feel stuck, directionless, or uncertain about your professional path. It works well at career crossroads, after a setback, or when you sense that something needs to change but cannot yet name what.',
    positions: [
      { num: 1, name: 'Current Situation', desc: 'An honest snapshot of where you are at work right now — the energy, the reality, what is actually happening beneath the surface.' },
      { num: 2, name: 'Your Strengths', desc: 'The skills, qualities and resources you have available — what you can genuinely build on, whether or not you are currently using them.' },
      { num: 3, name: 'What Holds You Back', desc: 'The pattern, belief, fear or external obstacle that is limiting your progress. This card often carries the most useful information in the spread.' },
      { num: 4, name: 'The Aligned Path', desc: 'The direction that is most in keeping with who you are and what you are here to do — not necessarily the easiest route, but the most authentic one.' },
      { num: 5, name: 'Likely Outcome (3–6 months)', desc: 'The trajectory you are on if you continue as you are — or shift in the direction the previous card suggests. A possibility, not a certainty.' },
    ],
  },
  {
    name: 'New Job or Change? (4 Cards)',
    cards: 4,
    when: 'Use this when you are weighing a specific career move — a job offer, a redundancy, a resignation, or the pull toward something new. It is most useful when you already have a concrete decision in front of you.',
    positions: [
      { num: 1, name: 'Where You Are Now', desc: 'Your current position in honest terms — the reality of staying where you are, including what is genuinely good and what costs you.' },
      { num: 2, name: 'What Staying Offers', desc: 'The gifts and growth available to you if you remain — not a justification for staying, but an honest account of what is actually here.' },
      { num: 3, name: 'What Changing Offers', desc: 'The opportunity, energy and challenge that would come with making a move — what you would gain, and what you would take on.' },
      { num: 4, name: 'What Most Needs Considering', desc: 'The factor, truth or deeper question that deserves your full attention before you decide — what you may have overlooked or avoided.' },
    ],
  },
  {
    name: 'Purpose & Calling (3 Cards)',
    cards: 3,
    when: 'Use this when the question is not about a specific job but about meaning — when you feel that the work you are doing does not reflect who you are, or when you are searching for a sense of direction that goes beyond salary and title.',
    positions: [
      { num: 1, name: 'Your Natural Gifts', desc: 'The talents, capacities and ways of engaging with the world that come most naturally to you — what you bring without effort, sometimes without even noticing.' },
      { num: 2, name: 'What Truly Fulfils You', desc: 'The kind of work — not necessarily a specific job — that engages your whole self and leaves you feeling that your time has been well spent.' },
      { num: 3, name: 'The Next Step', desc: 'The most useful thing you can do now to move toward meaningful work. Practical, specific, and often smaller than you expect.' },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a career tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A career tarot spread is a structured layout of tarot cards in which each position is assigned a specific meaning related to work, professional direction or purpose. Rather than drawing cards at random, each position asks a defined question — about your current situation, your strengths, obstacles, the path forward, or likely outcomes. This structure makes the reading more focused and easier to interpret than a general spread, and it ensures the cards speak directly to your career concerns.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many cards should a career tarot spread have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your question. A 3-card spread is ideal for a focused question about purpose or the next step — it is simple, clear and easy to interpret. A 4-card spread works well when you are weighing two options side by side. A 5-card spread gives you a fuller picture of your current situation, strengths, obstacles and trajectory. There is no advantage in drawing more cards than you need — a clean 3-card reading often yields more insight than a sprawling ten-position layout.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tarot cards are good for career readings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Several cards are particularly relevant in career readings. Pentacles (or Coins) speak to material reality — money, stability, practical skill and tangible results. Wands represent passion, creative drive and entrepreneurial energy. Swords point to mental clarity, difficult decisions and honest thinking. Among the Major Arcana, The Chariot suggests forward momentum and professional drive; The Star indicates a meaningful vocation; The Emperor points to authority and structure; and The Wheel of Fortune often signals a significant career shift. None of these are simply 'good' or 'bad' — their meaning depends on the position and context.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can tarot help with job decisions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tarot can be a genuinely useful thinking tool for job decisions, particularly when you are stuck or when logic alone has not resolved the question. It works not by predicting the future but by surfacing what you already know — patterns you have not named, factors you have been avoiding, and the emotional truth underneath a rational dilemma. Many people find that laying out a career spread clarifies their instincts even before they interpret the cards. Use it as a reflection tool rather than a decision-maker, and you will find it practically valuable.',
      },
    },
  ],
}

const TIPS = [
  {
    suit: 'Pentacles',
    meaning: 'Material reality — money, stability, practical skills and tangible results. Pentacles in a career reading speak to the concrete, physical dimension of work: what is being built, earned or made sustainable.',
  },
  {
    suit: 'Wands',
    meaning: 'Passion, creative drive and direction. Wands show where your energy and enthusiasm genuinely lie — the kind of work that lights you up. High wands energy often signals entrepreneurial or creative paths.',
  },
  {
    suit: 'Swords',
    meaning: 'Mental clarity and difficult truths. Swords in a career spread often point to decisions that require honest thinking — recognising what is not working, cutting through self-deception, or making a hard but necessary call.',
  },
  {
    suit: 'Major Arcana',
    meaning: 'Significant career turning points. When Major Arcana cards appear in a career spread, they signal that something larger is at work — a meaningful transition, a defining choice, or a chapter with real consequences for your path.',
  },
]

export default function CareerSpreadPage() {
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
        <span style={{ color: 'var(--gold)' }}>Career</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Career Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Whether you are weighing a job change, searching for your purpose, or simply trying to understand why your current path feels wrong, tarot can bring surprising clarity. These spreads are designed to reflect the truth of your working life — not to tell you what to do, but to show you what you already know.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['Career', 'Purpose', 'Work & Money', 'Decision Making'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Spreads */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '.06em' }}>
          Career Tarot Spread Layouts
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {SPREADS.map((spread) => (
            <div key={spread.name} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap', marginBottom: '.6rem' }}>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.04em' }}>{spread.name}</div>
                <span style={{ padding: '.2rem .6rem', borderRadius: 20, fontSize: '.65rem', background: 'rgba(201,168,76,.1)', color: 'var(--gold)', fontFamily: "'Cinzel',serif", flexShrink: 0 }}>{spread.cards} cards</span>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{spread.when}</p>

              {/* Visual card placeholders */}
              <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                {spread.positions.map(pos => (
                  <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.35rem' }}>
                    <div style={{ width: 52, height: 78, border: '1px solid rgba(201,168,76,.25)', borderRadius: 6, background: 'rgba(201,168,76,.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.9rem', color: 'var(--gold)' }}>
                      {pos.num}
                    </div>
                    <div style={{ fontSize: '.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center', maxWidth: 56 }}>{pos.name}</div>
                  </div>
                ))}
              </div>

              {/* Position meanings */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                {spread.positions.map(pos => (
                  <div key={pos.num} style={{ display: 'flex', gap: '.75rem', alignItems: 'flex-start' }}>
                    <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.65rem', color: 'var(--gold)', marginTop: '.1rem' }}>{pos.num}</span>
                    <div>
                      <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.78rem', color: 'var(--gold)', marginRight: '.4rem' }}>{pos.name} —</span>
                      <span style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.6 }}>{pos.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to read a career spread */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          How to Read a Career Tarot Spread
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Before you draw, take a moment to get genuinely quiet. Career questions often come loaded with anxiety, comparison and the pressure of external expectations. Set those aside as best you can and name your actual question clearly — not what you think you should want, but what you genuinely want to understand. The more honest the question, the more useful the reading.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            As you shuffle, hold your intention rather than fixating on a particular outcome. Career spreads work best when you approach them with curiosity rather than a preferred answer. If you find yourself hoping for a specific card in a specific position, notice that — it is information in itself about where your energy is caught.
          </p>
          <p>
            When interpreting the cards, pay particular attention to positions that feel uncomfortable or that produce cards you do not want to see. In a career reading, those positions — especially "What Holds You Back" or "What Most Needs Considering" — almost always carry the most practically useful guidance. Resistance to a card is often a sign that it has landed accurately.
          </p>
        </div>
      </div>

      {/* Reading tips */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Reading Tips: Suits in Career Spreads
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))', gap: '.75rem' }}>
          {TIPS.map(tip => (
            <div key={tip.suit} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{tip.suit}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{tip.meaning}</p>
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Ready to read your career spread?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Choose a spread above and draw your cards. Or explore the full card library to deepen your understanding of each card's meaning in a career context.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/cards" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Browse All Cards
          </Link>
          <Link href="/spreads/three-card" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Three Card Spread
          </Link>
        </div>
      </div>
    </div>
  )
}
