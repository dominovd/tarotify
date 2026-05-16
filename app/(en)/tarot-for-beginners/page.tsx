import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Tarot for Beginners — Your First Steps with the Cards | TarotAxis',
  description: "A complete beginner's guide to tarot. What the cards are, how to start reading, which spreads to try first, and the resources to learn from in your first month of practice.",
  alternates: {
    canonical: 'https://tarotaxis.com/tarot-for-beginners',
    languages: {
      'en': 'https://tarotaxis.com/tarot-for-beginners',
      'es': 'https://tarotaxis.com/es/tarot-para-principiantes',
      'x-default': 'https://tarotaxis.com/tarot-for-beginners',
    },
  },
  openGraph: {
    title: 'Tarot for Beginners — Your First Steps with the Cards',
    description: "A complete beginner's guide to tarot. What the cards are, how to start reading, and what to do in your first month of practice.",
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can anyone learn to read tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Tarot is a learnable practice, not an inherited gift. What it asks of you is willingness — willingness to be honest about what you see in the cards, willingness to give the practice your attention, and willingness to put in the time. No special intuitive ability is required at the start, and the readers who develop the strongest intuition tend to be the ones who simply showed up consistently. Curiosity matters far more than any innate talent.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best tarot deck for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Rider-Waite-Smith deck is the standard recommendation, and for good reason. Nearly every modern book, guide and online resource uses its imagery and structure as a reference point — including the meanings on this site. Starting with a deck that aligns with your learning material removes a large source of friction. Once you are comfortable, you can branch out to decks with different art styles. See our full guide at /tarot-decks for alternatives once you are ready.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to learn tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Basic familiarity with the 78 cards takes one to three months of regular practice. Comfortable, fluent reading for yourself and others usually takes six to twelve months. Mastery, in the sense that more experienced readers describe it, is a lifetime pursuit — and not really the point. Tarot is less a subject to be conquered than a practice to be lived with. Most readers find the cards keep teaching them new things decades in.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to memorise all 78 card meanings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Memorisation is the slow road, and it produces stiff, brittle readings. Far better to work with the cards over time — pull one daily, sit with it, write down what you notice, then check a reference. After a few months the cards become familiar the way faces in a neighbourhood become familiar: through repeated exposure rather than deliberate study. Trust the practice; the meanings settle in on their own.',
      },
    },
  ],
}

const essentials = [
  {
    name: 'A Tarot Deck',
    body: 'The Rider-Waite-Smith is the most widely referenced. Any deck that speaks to you will do, but pick one and stay with it.',
    href: '/tarot-decks',
    cta: 'Browse Decks',
  },
  {
    name: 'A Quiet 10–15 Minutes',
    body: 'You do not need an altar or candles. You need uninterrupted time. Mornings tend to be the most consistent window.',
  },
  {
    name: 'A Journal',
    body: 'A simple notebook to record the card, your reaction, and what unfolded in the day. This is where the learning compounds.',
    href: '/tarot-journal',
    cta: 'Journal Guide',
  },
  {
    name: 'One Good Question',
    body: 'Not "what will happen" but "what do I need to see right now?" Better questions produce better readings — every time.',
    href: '/how-to-ask-tarot-questions',
    cta: 'How to Ask',
  },
]

const weeks = [
  {
    n: '1',
    title: 'Meet the Major Arcana',
    body: 'Pull one card daily from only the 22 Major Arcana — the named cards from The Fool through The World. Read about each one in a reference. Write down your immediate, unfiltered reaction before consulting the book meaning. The Major Arcana describe the largest forces and transitions in a life; meeting them first gives you the architecture before the furniture.',
    href: '/cards',
    cta: 'Browse Major Arcana →',
  },
  {
    n: '2',
    title: 'Add Yes/No and a Daily Card',
    body: 'Begin each morning with a single card from the full deck (or stay with the Majors if you prefer). When a real question arises during the day, try the Yes/No oracle for a quick check-in. Notice the difference between asking the cards for guidance and asking them to make decisions for you — the first works, the second does not.',
    href: '/how-to-ask-tarot-questions',
    cta: 'On Asking Better Questions →',
  },
  {
    n: '3',
    title: 'Try Your First Spread',
    body: 'Move from one card to three. The three-card spread is the classic introduction — past, present and future is the traditional layout, but you can also use it for situation, action and outcome, or mind, body and spirit. Three cards force you to read in relation, which is where tarot starts to come alive.',
    href: '/spreads/three-card',
    cta: 'Three-Card Spread →',
  },
  {
    n: '4',
    title: 'Work with the Whole Deck',
    body: 'Add the 56 Minor Arcana. Learn the four suits — Wands, Cups, Swords and Pentacles — and what each one governs. Once the suits feel familiar, try the Celtic Cross when a situation genuinely warrants ten cards of attention. Do not rush it; the Celtic Cross rewards patience and punishes ambition.',
    href: '/tarot-suits',
    cta: 'The Four Suits →',
  },
]

const mistakes = [
  {
    name: 'Asking the cards to make decisions for you',
    body: 'Tarot describes; it does not decide. Use the cards to understand what is in play — then choose for yourself.',
  },
  {
    name: 'Reshuffling because you did not like the answer',
    body: 'If you are asking again immediately, you are not asking a new question. You are looking for a different answer. Wait, reflect, and revisit the question later.',
  },
  {
    name: 'Skipping reversed cards because they feel "negative"',
    body: 'Reversals are nuance, not punishment. They often point to where something is blocked, internalised or still developing — information you genuinely need.',
  },
  {
    name: 'Treating every reading as life-or-death',
    body: 'Most readings are diagnostic, not oracular. They describe the present landscape so you can move through it with more awareness — not deliver fate.',
  },
  {
    name: 'Using too many decks too soon',
    body: 'Pick one deck and live with it for at least three months. Fluency comes from depth, not variety. New decks are exciting; they are also a way of avoiding the harder work of getting to know one.',
  },
]

const resources = [
  { href: '/how-to-read-tarot', name: 'How to Read Tarot', body: 'The foundational practice — from shuffling to interpretation.' },
  { href: '/how-to-shuffle-tarot', name: 'How to Shuffle Tarot', body: 'Techniques, common questions, and what shuffling is actually for.' },
  { href: '/how-to-cleanse-tarot-cards', name: 'How to Cleanse Tarot Cards', body: 'When and how to clear a deck — and when it is not necessary.' },
  { href: '/how-to-ask-tarot-questions', name: 'How to Ask Tarot Questions', body: 'The single skill that improves every reading you will ever do.' },
  { href: '/tarot-decks', name: 'Choosing a Tarot Deck', body: 'Rider-Waite-Smith, Thoth, Marseille and the modern alternatives.' },
  { href: '/tarot-journal', name: 'Keeping a Tarot Journal', body: 'What to record, how to structure entries, and why it matters.' },
  { href: '/quiz', name: 'Practise with the Tarot Quiz', body: 'Active recall for the 22 Major Arcana — image, keywords or element. Ten questions per round.' },
  { href: '/reading-analysis', name: 'Tarot Reading Analyser', body: 'Already drew cards at home? Mark them and receive a structured interpretation across suit, balance and reversed signals.' },
]

export default function TarotForBeginnersPage() {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Tarot for Beginners</span>
      </nav>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.2em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Start Here
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '1rem', lineHeight: 1.25 }}>
          Tarot for Beginners
        </h1>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.95rem', marginBottom: '1rem' }}>
          Tarot is a system of 78 archetypal images designed to reflect inner experience back to the reader. The cards do not predict the future and they do not possess opinions of their own. What they do is offer a structured mirror — a vocabulary of symbols rich enough to describe almost any human situation, and disciplined enough to push past the surface story you are already telling yourself.
        </p>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.95rem' }}>
          The only skills you need to begin are willingness to be honest and willingness to look. The cards do the rest. You do not need a teacher, a lineage, or any particular belief about how tarot works. You need a deck, a little time, and the patience to let the practice become familiar. Everything else on this page is in service of that.
        </p>
      </div>

      {/* What You Need to Get Started */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
          What You Need to Get Started
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '.85rem' }}>
          {essentials.map(({ name, body, href, cta }) => (
            <div key={name} style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.4rem' }}>{name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.7, margin: 0, flex: 1 }}>{body}</p>
              {href && cta && (
                <Link href={href} style={{ display: 'inline-block', marginTop: '.85rem', color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.08em', textDecoration: 'none', textTransform: 'uppercase' }}>
                  {cta} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Your First Month */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem' }}>
          Your First Month — A 4-Week Path
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          A simple, sequenced curriculum to take you from opening the box to running a real spread. Each week builds on the one before it.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {weeks.map(({ n, title, body, href, cta }) => (
            <div key={n} style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '.6rem' }}>
                <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: 'rgba(201,168,76,.12)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.82rem' }}>
                  {n}
                </div>
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.18em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '.25rem' }}>Week {n}</div>
                  <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem' }}>{title}</div>
                </div>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.85, margin: '0 0 .85rem' }}>{body}</p>
              <Link href={href} style={{ color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.74rem', letterSpacing: '.08em', textDecoration: 'none', textTransform: 'uppercase' }}>
                {cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Common Beginner Mistakes */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Common Beginner Mistakes
        </h2>
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {mistakes.map(({ name, body }, i) => (
              <div key={i} style={{ paddingBottom: i === mistakes.length - 1 ? 0 : '1rem', borderBottom: i === mistakes.length - 1 ? 'none' : '1px solid var(--border)' }}>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', marginBottom: '.35rem' }}>{name}</div>
                <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.75, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Practise */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          How to Practise
        </h2>
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', marginBottom: '1rem' }}>
            The shape of a strong tarot practice is unglamorous: a card a day, a few lines in a journal, a reading when you actually need one. Consistency beats intensity. Ten minutes every morning will teach you more in six months than a once-a-month two-hour session will teach you in three years. The cards reward the reader who shows up.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            Journalling is the second half of the practice. Write down the card you pulled, what you immediately thought, and — at the end of the day — what actually happened. Patterns surface quickly. After a few months you will have a personal commentary on the deck that is more useful to you than any book. Tarot literacy is mostly about hours with the cards rather than any particular technique; the technique is in service of the hours.
          </p>
        </div>
      </section>

      {/* Recommended First Resources */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem' }}>
          Recommended First Resources
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          A short, curated reading list from elsewhere on TarotAxis. Each one builds on the ground you have already covered here.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '.85rem' }}>
          {resources.map(({ href, name, body }) => (
            <Link key={href} href={href} style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', textDecoration: 'none', display: 'block' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.4rem' }}>{name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.82rem', lineHeight: 1.7, margin: 0 }}>{body}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
          Common Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.5rem' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.8, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Email capture */}
      <div style={{ marginBottom: '2.5rem' }}>
        <EmailCapture
          source="beginners"
          headline="Learn one card a day, the easy way"
          copy="Get a Major Arcana card in your inbox each morning, with a short reflection. Two weeks in and the deck starts to feel like an old friend."
          cta="Start learning"
        />
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.78rem', letterSpacing: '.2em', textTransform: 'uppercase', opacity: .55, marginBottom: '1.25rem' }}>
          ✦ Begin
        </div>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/daily" style={{ padding: '.8rem 1.6rem', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.35)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
            Start with Today&apos;s Card →
          </Link>
          <Link href="/free-reading" style={{ padding: '.8rem 1.6rem', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
            Free Reading →
          </Link>
          <Link href="/cards" style={{ padding: '.8rem 1.6rem', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
            Browse All Cards →
          </Link>
        </div>
      </div>
    </div>
  )
}
