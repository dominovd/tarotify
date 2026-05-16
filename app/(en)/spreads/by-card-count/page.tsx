import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tarot Spreads by Card Count — 1, 3, 5, 7 & 10 Card Layouts | TarotAxis',
  description: 'Browse tarot spreads organised by number of cards. From simple 1-card draws and 3-card past-present-future layouts to the full 10-card Celtic Cross. Find the right spread for your question.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/by-card-count',
    languages: {
      'en': 'https://tarotaxis.com/spreads/by-card-count',
      'es': 'https://tarotaxis.com/es/tiradas/por-numero-de-cartas',
      'x-default': 'https://tarotaxis.com/spreads/by-card-count',
    },
  },
  openGraph: {
    title: 'Tarot Spreads by Card Count — 1, 3, 5, 7 & 10 Card Layouts',
    description: 'Tarot spreads grouped by the number of cards — from quick single-card pulls to the full Celtic Cross.',
  },
}

type Reading = {
  href: string
  title: string
  desc: string
  tag?: string
}

type Group = {
  count: number
  heading: string
  intro: string
  items: Reading[]
}

const GROUPS: Group[] = [
  {
    count: 1,
    heading: 'One Card Readings',
    intro: 'A single card cuts straight to the point. One-card readings are best for daily check-ins, quick yes/no questions and a moment of focused reflection — the energy you need to recognise right now.',
    items: [
      { href: '/daily', title: 'Card of the Day', desc: 'A single card seeded by the date — the same card surfaces for everyone reading today. The perfect morning ritual to set the tone of the day.', tag: 'Daily ritual' },
      { href: '/yes-no', title: 'Yes / No Oracle', desc: 'One card, one binary answer. Draw a card and our reader interprets it as a clear yes, no or maybe — with the nuance behind the verdict.', tag: 'Quick answer' },
    ],
  },
  {
    count: 2,
    heading: 'Two Card Readings',
    intro: 'Two cards create a relationship — contrast, choice or cause and effect. Two-card layouts excel at decisions, comparisons and surfacing the dynamic between two forces.',
    items: [
      { href: '/birth-card', title: 'Birth Card Calculator', desc: 'Two cards calculated from your date of birth — your Personality Card (what the world sees) and your Soul Card (your inner truth). Yours for life.', tag: 'Numerology' },
      { href: '/combination', title: 'Card Combinations', desc: 'Browse hundreds of two-card combinations from Major Arcana pairings. Discover how any two cards speak to each other in a reading.', tag: 'Reference' },
    ],
  },
  {
    count: 3,
    heading: 'Three Card Readings',
    intro: 'The most versatile spread in tarot. Three cards reveal a natural arc — past, present, future, or mind, body, spirit, or situation, action, outcome. The perfect starting point for every reader.',
    items: [
      { href: '/spreads/three-card', title: 'Three Card Spread (6 layouts)', desc: 'Six variations on the classic three-card layout — past/present/future, situation/action/outcome, mind/body/spirit and more. The most useful spread you will ever learn.', tag: 'Beginner essentials' },
      { href: '/spreads/three-card/past-present-future', title: 'Past · Present · Future Spread', desc: 'The single most recognised tarot layout in the world. Three cards trace the trajectory of a situation across time.', tag: 'Classic' },
      { href: '/spreads/how-they-feel-about-me', title: 'How Do They Feel About Me', desc: 'Three cards revealing their feelings, the story they tell themselves, and what their current state is likely to lead to.', tag: 'Love & feelings' },
      { href: '/spreads/what-blocks-my-love', title: 'What Blocks My Love', desc: 'Three cards naming the inner block, the support already with you, and the next concrete step toward openness.', tag: 'Inner work' },
      { href: '/spreads/what-do-i-need-to-heal', title: 'What Do I Need to Heal', desc: 'Three cards for naming the wound asking for attention, where it began, and the path of integration.', tag: 'Healing' },
    ],
  },
  {
    count: 4,
    heading: 'Four Card Readings',
    intro: 'Four cards add an action or outcome layer to the classic three-card arc. Often used when a third party, an external influence, or a concrete decision needs to be considered alongside the situation itself.',
    items: [
      { href: '/spreads/waning-moon', title: 'Waning Moon Spread', desc: 'Four cards for the descending phase of the lunar cycle — reflection, integration and creating space before the next new moon.', tag: 'Lunar ritual' },
      { href: '/spreads/will-my-ex-come-back', title: 'Will My Ex Come Back', desc: 'Four cards for genuine clarity on a possible reunion — how each of you feels now, what blocks reconciliation and where this is heading.', tag: 'Reconciliation' },
      { href: '/spreads/third-party', title: 'Third Party / Triangle Spread', desc: 'Four cards for relationships affected by outside influence — your position, theirs, the third party&apos;s, and the genuine path through.', tag: 'Hidden dynamics' },
    ],
  },
  {
    count: 5,
    heading: 'Five Card Readings',
    intro: 'Five cards strike the balance between depth and clarity. Enough cards to map a full situation — current state, influences, advice, outcome — without overwhelming the reader. The workhorse of intermediate tarot.',
    items: [
      { href: '/spreads/love', title: 'Love Spread', desc: 'Four dedicated layouts for love and relationships, including a 5-card relationship deep-dive. Honest guidance on the heart.', tag: 'Relationships' },
      { href: '/spreads/healing-after-heartbreak', title: 'Healing After Heartbreak', desc: 'Five cards for processing a breakup — what you are still carrying, what it taught you, what is yours to keep, what to release and the next step.', tag: 'Recovery' },
      { href: '/spreads/eclipse', title: 'Eclipse Spread', desc: 'Five cards for navigating solar and lunar eclipses — what is surfacing, what is ending, the truth wanting out, the reaction to avoid and the path forward.', tag: 'Eclipse season' },
      { href: '/spreads/love/new-relationship', title: 'New Relationship Spread', desc: 'A focused 5-card layout for the early stages of love — compatibility, your energy, their energy, the connection and the outlook.', tag: 'New love' },
      { href: '/spreads/love/reconciliation', title: 'Reconciliation Spread', desc: 'Five cards for considering whether to mend a relationship — what broke, what remains, what would need to change and the realistic path forward.', tag: 'Second chances' },
      { href: '/spreads/love/self-love', title: 'Self-Love Spread', desc: 'Five cards turned inward — what you carry, what you give yourself, what you withhold, what you need and the next step in your own self-worth.', tag: 'Inner work' },
      { href: '/spreads/soulmate', title: 'Soulmate Spread', desc: 'Five cards reveal your current energy, what you truly seek, what you need to release, the path forward and the nature of your soulmate connection.', tag: 'Singles' },
      { href: '/spreads/career', title: 'Career Spread', desc: 'A 5-card career direction reading covering current standing, hidden challenges, supportive energies, recommended action and the outlook.', tag: 'Work & purpose' },
      { href: '/spreads/career/job-offer', title: 'Job Offer Spread', desc: 'Five cards for evaluating a specific offer — the role itself, the people, the upside, the downside and the verdict.', tag: 'Decision' },
      { href: '/spreads/new-moon', title: 'New Moon Spread', desc: 'A 5-card ritual layout for the start of the lunar cycle — what to plant, what to nurture, what to release and the seed of intention.', tag: 'Lunar ritual' },
    ],
  },
  {
    count: 6,
    heading: 'Six Card Readings',
    intro: 'Six cards add a layer of nuance that five cannot quite carry — typically a deeper exploration of energies, integration of opposites or guidance across multiple life areas.',
    items: [
      { href: '/spreads/full-moon', title: 'Full Moon Spread (4 or 6 cards)', desc: 'Two layouts — a simple 4-card ritual and a deeper 6-card clarity reading covering completion, release, gratitude and guidance for the next cycle.', tag: 'Lunar ritual' },
      { href: '/spreads/should-i-stay-or-should-i-go', title: 'Should I Stay or Should I Go', desc: 'Six cards for relationship crossroads — the truth, the stay-path, the go-path, the answer your heart already carries, what must change either way, and guidance.', tag: 'Crossroads' },
    ],
  },
  {
    count: 7,
    heading: 'Seven Card Readings',
    intro: 'Seven cards are tarot at its most narrative — a complete arc with room for hidden influences, advice and outcome. The classic mid-weight spread for any meaningful question.',
    items: [
      { href: '/spreads/horseshoe', title: 'Horseshoe Spread', desc: 'A classic 7-card arc covering past, present, hidden influences, obstacles, external forces, advice and the likely outcome. Works for any question.', tag: 'Classic layout' },
      { href: '/spreads/weekly', title: 'Weekly Spread', desc: 'One card for every day of the week — a complete energetic forecast. Set intentions on Sunday and navigate each day with clarity.', tag: 'Weekly ritual' },
      { href: '/spreads/true-love-spread', title: 'True Love Deep Dive', desc: 'Seven cards for an established relationship — your feelings, theirs, the heart of the connection, what each brings, where friction lives, and the path forward.', tag: 'Established love' },
    ],
  },
  {
    count: 10,
    heading: 'Ten Card Readings',
    intro: 'The ten-card spread is tarot at its most comprehensive — every facet of a situation considered, from conscious surface to subconscious depths, from past influence to final outcome.',
    items: [
      { href: '/spreads/celtic-cross', title: 'Celtic Cross', desc: 'The most comprehensive tarot spread in the world. Ten cards reveal the present, the challenge, the past, the future, the conscious and subconscious, external factors, advice, hopes/fears and the outcome.', tag: 'Deep reading' },
    ],
  },
  {
    count: 13,
    heading: 'Year Ahead (12+1 Cards)',
    intro: 'The longest standard tarot reading — one card per month, plus an overarching theme card. A complete energetic map of the year ahead and the most powerful annual ritual in tarot.',
    items: [
      { href: '/spreads/year-ahead', title: 'Year Ahead Spread', desc: 'Thirteen cards — January through December plus a single theme card crowning the year. Drawn at the start of a calendar year, a birthday, or whenever a new chapter begins.', tag: 'Annual ritual' },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many cards should I use in a tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The right number of cards depends on the depth of your question. Use a single card for a daily check-in or a quick yes/no. Use three cards for the most common tarot layout — past, present and future — or any other linear arc. Use five cards when you want more nuance, such as a love or career reading. Use seven cards for a complete narrative spread with advice and outcome. Reserve the ten-card Celtic Cross for the most complex situations where you need to see every angle. As a general rule, the more cards in a spread, the more interpretation skill it requires.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the simplest tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The simplest tarot spread is a single-card draw — often called a card-of-the-day or one-card reading. You shuffle the deck, draw one card and read it as the dominant energy or theme for the question or day. One-card readings are the foundation of a daily tarot practice and are the best way to learn the 78 cards over time. From there, three-card spreads are the next natural step.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most popular tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The three-card spread is the most popular tarot layout in the world — particularly the past-present-future variation. It is simple enough for beginners, flexible enough to answer almost any question and quick enough to use daily. The ten-card Celtic Cross is the most famous spread for deeper readings, but its complexity means it is used less often than three-card layouts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I create my own tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — many experienced readers design their own spreads for specific questions. The key is to assign a clear meaning to each position before you draw. Start with the question you want answered, then break it into the angles that would help you see it fully — current state, what is hidden, what to do, the likely outcome, and so on. A spread is simply a question structured visually. There is no rule about how many cards a spread must contain.',
      },
    },
  ],
}

export default function ByCardCountPage() {
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
        <span style={{ color: 'var(--gold)' }}>By Card Count</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tarot Spreads by Card Count
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 580, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Every tarot spread is a question structured visually — and the number of cards is the first decision. Browse our full library grouped by card count, from a single daily pull to the thirteen-card Year Ahead.
        </p>
      </div>

      {/* Intro */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          How to Choose the Right Number of Cards
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            More cards is not always better. A one-card pull can be more powerful than a Celtic Cross when the question is simple, because you are forced to focus. The right number of cards depends on the question, not on how serious you want the reading to feel.
          </p>
          <p style={{ margin: 0 }}>
            A rough rule: <strong style={{ color: 'var(--gold)' }}>one card</strong> for a single piece of guidance, <strong style={{ color: 'var(--gold)' }}>three</strong> for any question with a beginning, middle and end, <strong style={{ color: 'var(--gold)' }}>five</strong> when you want context and advice, <strong style={{ color: 'var(--gold)' }}>seven</strong> for a full narrative arc and <strong style={{ color: 'var(--gold)' }}>ten</strong> when you need every angle. Trust the structure to do half the work for you.
          </p>
        </div>
      </div>

      {/* Groups */}
      {GROUPS.map(group => (
        <section key={group.count} style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '.75rem', marginBottom: '.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'Cinzel',serif", fontSize: '2rem', color: 'var(--gold)', lineHeight: 1 }}>{group.count}</span>
            <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', margin: 0 }}>
              {group.heading}
            </h2>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            {group.intro}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {group.items.map(item => (
              <Link key={item.href} href={item.href} style={{ display: 'block', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', transition: 'border-color .2s' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', alignItems: 'baseline', marginBottom: '.4rem' }}>
                  <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.95rem', letterSpacing: '.03em' }}>{item.title}</div>
                  {item.tag && (
                    <span style={{ padding: '.15rem .55rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.65rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{item.tag}</span>
                  )}
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}

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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Ready to draw your cards?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Use our free reading tool to draw any spread interactively, or learn more about how to read tarot from the ground up.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/free-reading" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Free Reading
          </Link>
          <Link href="/spreads" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            All Spreads
          </Link>
          <Link href="/how-to-read-tarot" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            How to Read Tarot
          </Link>
        </div>
      </div>
    </div>
  )
}
