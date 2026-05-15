import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Oracle Cards vs Tarot Cards — What's the Difference? | TarotAxis",
  description: 'A clear comparison of oracle cards and tarot cards. Structure, history, how each is read, when to use which, and whether you should own both.',
  alternates: {
    canonical: 'https://tarotaxis.com/oracle-vs-tarot',
    languages: {
      'en': 'https://tarotaxis.com/oracle-vs-tarot',
      'es': 'https://tarotaxis.com/es/oraculo-vs-tarot',
      'x-default': 'https://tarotaxis.com/oracle-vs-tarot',
    },
  },
  openGraph: {
    title: "Oracle Cards vs Tarot Cards — What's the Difference?",
    description: 'A clear comparison of oracle cards and tarot cards. Structure, history, how each is read, and when to use which.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the main difference between oracle and tarot cards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tarot is a fixed system of 78 cards — 22 Major Arcana plus 56 Minor Arcana across four suits — with a shared visual and symbolic language that carries across decks. Oracle cards have no fixed structure: the number of cards, the themes and the meanings are decided by the deck creator. Every oracle deck is essentially its own miniature system, which is why the differences run deeper than aesthetics.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are oracle cards easier than tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Often yes, at least to begin with. Most oracle cards carry short keywords or direct phrases printed on them, and the guidebook tells you what each card means. Tarot requires you to learn 78 cards and how they combine. The catch is that oracle skills do not transfer between decks — learning one oracle teaches you that oracle, while learning tarot gives you a language you can use with any tarot deck for the rest of your life.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you mix oracle and tarot in a reading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — many readers do this routinely. A common pattern is to lay a tarot spread for the detailed structural read, then draw a single oracle card at the end as a closing message or overarching theme. The two tools complement each other rather than compete: tarot provides the architecture, oracle adds a clear final note. There is no rule against combining them, and no tradition that forbids it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is more accurate, tarot or oracle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neither is more accurate — they are different tools designed for different uses. Tarot is built for nuance, combination and layered analysis of a situation. Oracle is built for direct, accessible messages. Asking which is more accurate is a little like asking whether a paragraph is more accurate than a single sentence: the answer depends entirely on what you are trying to express. Both are valid in the hands of a thoughtful reader.',
      },
    },
  ],
}

const comparisons = [
  {
    point: 'Number of cards',
    tarot: '78 cards, always. The count is part of the definition.',
    oracle: 'Anywhere from 30 to 100+ cards. Varies entirely by deck.',
  },
  {
    point: 'Structure',
    tarot: 'Fixed: Major Arcana (22) + four suits of Minor Arcana, each with court cards.',
    oracle: 'No fixed structure. Each deck is organised however its creator chose.',
  },
  {
    point: 'Imagery',
    tarot: 'A traditional symbolic system shared across decks — most modern decks share a common visual vocabulary.',
    oracle: 'Unique to each deck. Imagery is set by the artist and theme.',
  },
  {
    point: 'Learning curve',
    tarot: 'Steeper at first, but the knowledge is transferable to any tarot deck.',
    oracle: 'Easier to start with, but the skills rarely carry between different oracle decks.',
  },
  {
    point: 'Reading style',
    tarot: 'Read in combinations — positions, suit-mix, card interactions, sometimes reversals.',
    oracle: 'Usually one or two cards drawn as a direct message, with less interpretation.',
  },
  {
    point: 'Reversals',
    tarot: 'Traditionally part of the practice, though some readers choose to skip them.',
    oracle: 'Rarely used. Most oracle decks are read upright only.',
  },
  {
    point: 'Reference material',
    tarot: 'Vast — thousands of books, courses, sites and videos covering every card.',
    oracle: 'Each deck has its own guidebook; almost no cross-deck reference material exists.',
  },
]

export default function OracleVsTarotPage() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Oracle vs Tarot</span>
      </nav>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.2em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Cards Comparison
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '1rem', lineHeight: 1.25 }}>
          Oracle Cards vs Tarot Cards
        </h1>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.95rem' }}>
          Newcomers often hear &ldquo;oracle&rdquo; and &ldquo;tarot&rdquo; used interchangeably, as though they were two words for the same thing. They are not. Both are tools for reflection and divination, but they are built on entirely different principles — and the differences matter once you start practising. This page explains where they overlap, where they diverge, and how to decide which one belongs in your hands.
        </p>
      </div>

      {/* The Short Answer */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          The Short Answer
        </h2>
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            Tarot is a standardised 78-card system with a fixed structure — 22 Major Arcana and 56 Minor Arcana split across four suits, with court cards in each. Oracle decks have no fixed structure: each deck has its own number of cards, its own themes and its own meanings, all determined by the creator. Put another way, tarot is a <em>shared language</em> with grammar and vocabulary that work across decks; oracle is a <em>personal vocabulary</em> unique to whichever deck you are holding.
          </p>
        </div>
      </section>

      {/* Side-by-Side Comparison */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
          Side-by-Side Comparison
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {comparisons.map((c, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.85rem' }}>
                {c.point}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.18em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '.4rem', opacity: .8 }}>Tarot</div>
                  <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.75, margin: 0 }}>{c.tarot}</p>
                </div>
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.18em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '.4rem' }}>Oracle</div>
                  <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.75, margin: 0 }}>{c.oracle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* When to Use Each */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          When to Use Each
        </h2>
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', marginBottom: '1rem' }}>
            <strong style={{ color: 'var(--gold)', fontWeight: 'normal', fontFamily: "'Cinzel',serif" }}>Tarot</strong> is best when you want to map a situation in detail — to see multiple angles at once, examine the internal patterns at play, and work with a system that rewards study over time. If your question has layers, contradictions or moving parts, tarot is built to hold all of them in a single reading. It is also the right choice if you want a long-term practice you can deepen for years rather than months.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            <strong style={{ color: 'var(--gold)', fontWeight: 'normal', fontFamily: "'Cinzel',serif" }}>Oracle</strong> is best when you want a direct, immediate message with less to interpret — a one-card answer to a one-line question. It is also the natural choice when a deck&apos;s specific theme genuinely matches what you are working with: an angel oracle for spiritual guidance, a moonology deck for cyclical work, a tree wisdom deck for grounding. The theme acts as a focusing lens.
          </p>
        </div>
      </section>

      {/* Can You Use Both Together? */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Can You Use Both Together?
        </h2>
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            Many readers do exactly this. A common pattern is to lay a tarot spread for structural insight — past, present, influences, what is blocked, what wants to emerge — and then draw a single oracle card at the end as a closing note: a &ldquo;what to take away&rdquo; or &ldquo;what is the energy underneath it all&rdquo;. The tarot does the detailed mapping; the oracle delivers the final, plain-spoken message. The two tools complement each other rather than compete, and there is no tradition or rule that says you must choose between them.
          </p>
        </div>
      </section>

      {/* A Brief History */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          A Brief History
        </h2>
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', marginBottom: '1rem' }}>
            Tarot originated in 15th-century Italy as a card game called <em>tarocchi</em>, played with a deck whose trump cards eventually became the Major Arcana. It was repurposed for divination in 18th-century France, with figures such as Jean-Baptiste Alliette (Etteilla) writing the first systematic guides. The Rider-Waite-Smith deck, published in 1909 with illustrations by Pamela Colman Smith, standardised modern tarot reading and is still the visual reference for most decks produced today.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            Oracle cards emerged later, in the 19th and 20th centuries, as a freer divinatory format unconstrained by tarot&apos;s structure. The Lenormand deck (early 1800s) is an important early example, using its own 36-card system. Modern oracle publishing expanded dramatically in the 1990s and 2000s, with creators such as Doreen Virtue, Colette Baron-Reid and many others releasing themed decks — angels, animals, goddesses, plants, archetypes — each operating as its own self-contained system.
          </p>
        </div>
      </section>

      {/* Which Should You Buy First? */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Which Should You Buy First?
        </h2>
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            If you want to develop a long-term divinatory practice — one that grows in depth over years — start with tarot. The structure rewards the investment, and the skills you build with one deck transfer to every other tarot deck you will ever own. If you want a gentler introduction, or you specifically resonate with a particular oracle deck&apos;s theme, oracle is a perfectly valid place to begin. There is no purist hierarchy here: a thoughtful reader with an oracle deck is doing more meaningful work than a distracted one with a Rider-Waite. The right first deck is the one you will actually pick up.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <Link href="/tarot-decks" style={{ padding: '.8rem 1.6rem', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.35)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Browse Tarot Decks →
        </Link>
        <Link href="/tarot-for-beginners" style={{ padding: '.8rem 1.6rem', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Tarot for Beginners →
        </Link>
        <Link href="/free-reading" style={{ padding: '.8rem 1.6rem', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Try a Free Reading →
        </Link>
      </div>

      {/* FAQ */}
      <section>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
          Common Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.5rem' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.8, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
