import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Read Tarot Cards — A Beginner\'s Guide | Tarotify',
  description: 'Learn how to read tarot cards from scratch. Understand the 78-card deck, Major and Minor Arcana, the four suits, reversals, and how to do your first reading step by step.',
  alternates: { canonical: 'https://tarotify.app/how-to-read-tarot' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to learn tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can do a basic three-card reading on your first day. A working familiarity with all 78 cards takes most people three to six months of regular practice. True fluency — where the cards speak to you intuitively rather than from memory — usually develops over one to two years. The most important factor is consistency: even ten minutes a day with a single card will outpace sporadic intensive study.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you need a special gift to read tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Tarot reading is a learnable skill rooted in psychology, symbolism and pattern recognition — not supernatural ability. Anyone who is willing to develop their observational awareness and sit with ambiguity can become a capable reader. Intuition, in the tarot context, simply means the ability to notice which aspects of a card feel most relevant to a given situation — and that develops with practice.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best tarot spread for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The three-card spread (Past · Present · Future) is the ideal starting point. It is simple enough to hold in your head, versatile enough to answer almost any question, and provides a narrative structure that helps you practice connecting cards to each other rather than reading them in isolation. Once you are comfortable with three cards, the Celtic Cross offers a much deeper exploration of any situation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do reversed tarot cards mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A reversed (upside down) card generally signals that the card\'s energy is blocked, internalised, delayed or expressing in a more challenging way than its upright version. It does not mean the opposite — The Sun reversed is not darkness; it is more likely joy that is harder to access right now, or a need to look inward for what you usually seek outside. Some readers choose not to use reversals at all, especially when starting out, and that is a completely valid approach.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I read tarot for myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and many experienced readers primarily read for themselves. The main challenge is objectivity: it is easy to unconsciously interpret cards in the direction you want them to go. This is why journalling your readings matters. When you write down your interpretation before you know the outcome, you build an honest track record that helps you distinguish genuine insight from wishful thinking.',
      },
    },
  ],
}

export default function HowToReadTarotPage() {
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
        <span style={{ color: 'var(--gold)' }}>How to Read Tarot</span>
      </nav>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.2em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Beginner's Guide
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '1rem', lineHeight: 1.25 }}>
          How to Read Tarot Cards
        </h1>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.95rem' }}>
          Tarot is a system of 78 illustrated cards that acts as a mirror for the mind. Reading tarot does not require supernatural ability — it requires curiosity, a willingness to sit with ambiguity, and practice. This guide walks you through everything you need to do your first reading today and build a genuine practice over time.
        </p>
      </div>

      {/* Section 1: The Deck */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          The 78-Card Deck
        </h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', marginBottom: '1rem' }}>
          A standard tarot deck has 78 cards divided into two sections: the Major Arcana (22 cards) and the Minor Arcana (56 cards). Each section works differently and carries a different weight in a reading.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1rem', marginTop: '1.25rem' }}>
          {[
            {
              title: 'Major Arcana — 22 cards',
              body: 'Numbered 0 (The Fool) through 21 (The World), the Major Arcana represent the major themes, turning points and archetypal forces in a person\'s life. When Major Arcana cards appear in a reading they tend to carry more weight — they often signal significant events, deep psychological patterns or spiritual lessons rather than everyday matters.',
            },
            {
              title: 'Minor Arcana — 56 cards',
              body: 'The Minor Arcana covers the day-to-day fabric of human experience. It is divided into four suits of 14 cards each — Wands, Cups, Swords and Pentacles — each with an Ace through Ten plus four court cards (Page, Knight, Queen, King). These cards tend to describe the practical, emotional and mental dimensions of a situation as it is unfolding right now.',
            },
          ].map(({ title, body }) => (
            <div key={title} style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.6rem' }}>{title}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.8, margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: The Four Suits */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          The Four Suits of the Minor Arcana
        </h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', marginBottom: '1.25rem' }}>
          Each suit governs a distinct area of human experience. Recognising which suit a card belongs to gives you an immediate orientation before you read its specific meaning.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(155px,1fr))', gap: '.75rem' }}>
          {[
            { suit: 'Wands', element: 'Fire', theme: 'Ambition, creativity, passion, career, action, inspiration', },
            { suit: 'Cups', element: 'Water', theme: 'Emotions, relationships, intuition, dreams, the inner life', },
            { suit: 'Swords', element: 'Air', theme: 'Thought, conflict, communication, challenge, truth, decisions', },
            { suit: 'Pentacles', element: 'Earth', theme: 'Money, work, health, material life, long-term building', },
          ].map(({ suit, element, theme }) => (
            <div key={suit} style={{ background: 'rgba(255,255,255,.02)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.25rem' }}>{suit}</div>
              <div style={{ fontSize: '.62rem', color: 'var(--muted)', opacity: .6, letterSpacing: '.08em', marginBottom: '.5rem' }}>{element}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.78rem', lineHeight: 1.6, margin: 0 }}>{theme}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Reversals */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Upright vs Reversed Cards
        </h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', marginBottom: '1rem' }}>
          When a tarot card lands upside down in a spread it is called reversed. Most readers interpret reversals as a modified or internalised version of the card's upright meaning — not its opposite. The Sun reversed does not mean darkness; it more likely means that the joy and vitality of The Sun are harder to access right now, or that you need to look inward for the warmth you are used to seeking outside.
        </p>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem' }}>
          Whether to use reversals is a personal choice. Many beginners start without them — reading all cards upright — and introduce reversals once they feel comfortable with the core meanings. Either approach is valid.
        </p>
      </section>

      {/* Section 4: How to Do a Reading */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          How to Do Your First Reading
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {[
            { n: '1', title: 'Set your intention', body: 'Before you touch the cards, take a breath and bring your question to mind. The more specific your question, the more useful the reading. "What should I focus on right now?" works well. "Will everything be okay?" is too vague to give you anything to work with.' },
            { n: '2', title: 'Shuffle the deck', body: 'Shuffle the cards in whatever way feels comfortable while holding your question in mind. There is no correct technique — riffle shuffle, overhand, or simply spreading the cards face down and mixing them. Shuffle until it feels right.' },
            { n: '3', title: 'Choose a spread', body: 'A spread is the layout that determines how many cards you draw and what each position means. Start with a simple three-card spread: Past · Present · Future. Draw three cards and place them left to right.' },
            { n: '4', title: 'Read each card in its position', body: 'For each card, first notice your immediate reaction — what does the image evoke before you look at the meaning? Then read the card\'s meaning in the context of its position. The same card in the "Past" position and the "Future" position will carry a different message.' },
            { n: '5', title: 'Read the cards together', body: 'The real skill in tarot is synthesis — understanding what the three cards are saying as a connected story rather than three separate facts. Look for patterns: are there multiple cards from the same suit? Several Major Arcana? The cards in conversation with each other reveal more than any single card can.' },
            { n: '6', title: 'Journal your reading', body: 'Write down your cards, their positions, and your interpretation. Come back to it in a week or a month. Over time you will see which of your interpretations turned out to be most accurate — and that feedback loop is how intuition actually develops.' },
          ].map(({ n, title, body }) => (
            <div key={n} style={{ display: 'flex', gap: '1rem', background: 'rgba(255,255,255,.02)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.12)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem', marginTop: 2 }}>
                {n}
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.4rem' }}>{title}</div>
                <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.8, margin: 0 }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Choosing a Spread */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Choosing the Right Spread
        </h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', marginBottom: '1.25rem' }}>
          Different spreads are designed for different types of questions. Using a love spread for a career question, or vice versa, will give you a muddier reading than choosing a layout that fits your actual question.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
          {[
            { name: 'Three Card', href: '/spreads/three-card', use: 'Any question — the most versatile spread in tarot' },
            { name: 'Celtic Cross', href: '/spreads/celtic-cross', use: 'Complex situations requiring a full picture' },
            { name: 'Love Spread', href: '/spreads/love', use: 'Relationship questions and romantic guidance' },
            { name: 'Career Spread', href: '/spreads/career', use: 'Work, purpose and professional decisions' },
            { name: 'Weekly Spread', href: '/spreads/weekly', use: 'Setting intentions for the week ahead' },
            { name: 'Daily Card', href: '/daily', use: 'One card each morning for daily focus' },
          ].map(({ name, href, use }) => (
            <Link key={href} href={href} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', padding: '.9rem 1.1rem', background: 'rgba(255,255,255,.02)', border: '1px solid var(--border)', borderRadius: 10, textDecoration: 'none', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem' }}>{name}</span>
              <span style={{ color: 'var(--muted)', fontSize: '.8rem' }}>{use}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Section 6: Tips */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Tips for Better Readings
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(310px,1fr))', gap: '.75rem' }}>
          {[
            { title: 'Start with one card a day', body: 'Draw a single card each morning and spend two minutes with it. Ask: what does this card feel like today? Check in at the end of the day. This simple practice builds your intuitive vocabulary faster than reading books.' },
            { title: 'Learn the suits before the cards', body: 'If a card\'s meaning escapes you, remember its suit. A Cups card is always about emotion. A Swords card is always about thought or conflict. This gives you a reliable fallback that is often enough.' },
            { title: 'Trust your first reaction', body: 'Before you reach for a meaning, notice what the image makes you feel. That immediate, pre-verbal response is often the most accurate part of a reading. The intellectual meaning comes second.' },
            { title: 'Read the story, not the cards', body: 'Three cards together tell a story. Practise narrating that story in plain English before you look up any meanings. "This person was in a period of conflict, is now seeking clarity, and is moving toward a new beginning." Simple narrative usually beats technical accuracy.' },
          ].map(({ title, body }) => (
            <div key={title} style={{ background: 'rgba(255,255,255,.02)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', marginBottom: '.5rem' }}>{title}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.82rem', lineHeight: 1.8, margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <Link href="/free-reading" style={{ padding: '.8rem 1.6rem', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.35)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Try a Free Reading →
        </Link>
        <Link href="/cards" style={{ padding: '.8rem 1.6rem', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Browse All 78 Cards →
        </Link>
      </div>

      {/* FAQ */}
      <section>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
          Common Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,.02)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.5rem' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.8, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
