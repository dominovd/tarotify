import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Shuffle Tarot Cards — 5 Methods Explained | TarotAxis',
  description: 'Learn five ways to shuffle tarot cards — from overhand to pile shuffle — plus how to set your intention, handle dropped cards, and decide whether to use reversals.',
  alternates: {
    canonical: 'https://tarotaxis.com/how-to-shuffle-tarot',
    languages: {
      'en': 'https://tarotaxis.com/how-to-shuffle-tarot',
      'es': 'https://tarotaxis.com/es/como-barajar-tarot',
      'x-default': 'https://tarotaxis.com/how-to-shuffle-tarot',
    },
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you shuffle tarot cards properly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Any method that feels natural and allows genuine randomisation. The 'proper' shuffle is whichever one you'll actually use consistently before readings. The intention behind the shuffle matters as much as the technique.",
      },
    },
    {
      '@type': 'Question',
      name: 'How many times should you shuffle tarot cards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Until you feel ready. Some readers use a set number like 3 or 7; others shuffle until a card jumps out or until their question feels fully present in their mind. There is no universal correct number.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have to shuffle tarot cards a specific way?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The shuffle is personal. Some readers insist on overhand only; others prefer riffle; many mix methods. What matters is that you engage genuinely with the process rather than going through the motions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can someone else shuffle your tarot cards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If you are reading for another person, having them shuffle — or at minimum cut the deck — is common practice. Their hands bring their energy into the cards. Some readers shuffle first themselves, then pass the deck to the querent to cut.',
      },
    },
  ],
}

const methods = [
  {
    n: '1',
    name: 'Overhand Shuffle',
    body: 'The most common method: hold the deck in one hand and use the other to transfer small packets of cards from the back to the front, repeatedly. It is gentle on the cards and easy to do while keeping your question in mind. Because the mixing is gradual, it suits readers who like a slower, more meditative approach to preparation.',
  },
  {
    n: '2',
    name: 'Riffle Shuffle',
    body: 'Split the deck into two roughly equal halves and interleave the cards by releasing them from each thumb alternately. Fast and thorough — one riffle achieves more randomisation than several overhand passes. The trade-off is that it can bend or crease cards over time. Use it on a soft surface and avoid it with delicate or oversized decks.',
  },
  {
    n: '3',
    name: 'Pile Shuffle',
    body: 'Deal the cards one at a time into several face-down piles — typically three to seven — then stack the piles together in any order. Repeat the process once or twice. It is methodical and ensures thorough mixing without physically stressing the cards. Many readers find the deliberate pace helpful for focusing on their question.',
  },
  {
    n: '4',
    name: 'Spreading and Mixing',
    body: 'Lay all 78 cards face-down across a flat surface and swirl them freely with both hands — a chaotic, intuitive scramble. Highly tactile, this method appeals to readers who want their whole body involved in the process. Once mixed, gather the cards back into a pile. Works best on a cloth or felt surface that lets the cards slide easily.',
  },
  {
    n: '5',
    name: 'Cut Method',
    body: 'Divide the deck into three face-down piles intuitively — without counting — then reassemble them in any order you choose. Rarely used as a standalone shuffle, it is most effective as a finalising step after one of the methods above. Many readers also use it when another person cuts the deck before a reading.',
  },
]

export default function HowToShuffleTarotPage() {
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
        <span style={{ color: 'var(--gold)' }}>How to Shuffle Tarot Cards</span>
      </nav>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.2em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Technique Guide
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '1rem', lineHeight: 1.25 }}>
          How to Shuffle Tarot Cards
        </h1>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.95rem' }}>
          Shuffling is not simply a mechanical step to randomise the deck — it is how you clear the residue of previous readings and bring your own focus to the cards. The act of shuffling gives your mind a physical anchor for the question you are holding. There is no single correct method: the best shuffle is the one you will do consistently, with genuine attention, before every reading.
        </p>
      </div>

      {/* Section 1: Five Methods */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
          Five Shuffling Methods
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {methods.map(({ n, name, body }) => (
            <div key={n} style={{ display: 'flex', gap: '1rem', background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.12)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem', marginTop: 2 }}>
                {n}
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.4rem' }}>{name}</div>
                <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.8, margin: 0 }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: How Many Times */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          How Many Times Should You Shuffle?
        </h2>
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            There is no magic number. The most practical guide is your own readiness: shuffle until the question you are working with feels clearly formed in your mind, or until you feel settled enough to draw. In practice, most readers shuffle for roughly 30–60 seconds. Some work with a fixed number — three passes, or seven — as a ritual structure that helps them transition into a focused state. What matters is consistent intention, not the specific technique or count.
          </p>
        </div>
      </section>

      {/* Section 3: Reversals */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Should You Reverse Cards While Shuffling?
        </h2>
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            If you use reversals in your practice, yes — allow cards to naturally flip during the shuffle without correcting them. Rotating a portion of the deck 180 degrees before you begin is one way to introduce reversals deliberately. If you do not use reversals, keep all cards facing the same direction throughout. Neither approach is more valid than the other; the choice depends entirely on your reading style.
          </p>
        </div>
      </section>

      {/* Section 4: Dropped Cards */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Handling Dropped Cards
        </h2>
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            If a card falls out of the deck during shuffling, do not automatically return it and carry on. Many readers treat a card that jumps or leaps from the deck as particularly significant — it has, in a sense, presented itself without being asked. You can incorporate it into your reading as an additional card, set it aside as a clarifier for your spread, or simply note it and place it back. The key is not to dismiss it without at least considering what it might be pointing to.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <Link href="/free-reading" style={{ padding: '.8rem 1.6rem', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.35)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Start a Free Reading →
        </Link>
        <Link href="/how-to-read-tarot" style={{ padding: '.8rem 1.6rem', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Learn to Read Tarot →
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
