import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Elemental Tarot Spread — 4-Card Major Arcana Four Elements Layout | TarotAxis',
  description: 'A 4-card elemental tarot spread using only the Major Arcana — Fire, Water, Air, and Earth. A diagnostic reading for inner balance and the four elements of the self.',
  alternates: { canonical: 'https://tarotaxis.com/spreads/major/elemental' },
  openGraph: {
    title: 'Elemental Tarot Spread — Four Elements, Four Trumps',
    description: 'Fire, Water, Air, and Earth — one Major Arcana card for each element to show where you are well-tuned and where the inner system has gone quiet.',
  },
}

const POSITIONS = [
  { num: 1, name: 'Fire — Will, Action, Vitality', desc: 'The state of your fiery element. Your will, drive, creative impulse, and capacity for outward action. The card here describes whether the fire is burning clean, flickering, smouldering, or out.' },
  { num: 2, name: 'Water — Feeling, Intuition, Relationship', desc: 'The state of your watery element. Emotional flow, intuitive knowing, and the quality of your relational life. The card shows whether the water moves freely, has gone still, or is overflowing its banks.' },
  { num: 3, name: 'Air — Thought, Communication, Perspective', desc: 'The state of your airy element. Mental clarity, the quality of your inner speech, the ease with which you can take perspective. The card shows whether the air is fresh and circulating, or stagnant and heavy.' },
  { num: 4, name: 'Earth — Body, Work, Material Foundation', desc: 'The state of your earthy element. Embodiment, finances, the practical scaffolding of your life. The card shows whether the ground beneath you is firm, eroding, fertile, or compacted.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an elemental tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An elemental tarot spread is a diagnostic layout that examines four facets of the self — Fire (will), Water (feeling), Air (thought), and Earth (body) — using one card per element. It is a way of seeing where you are in balance and where the inner system has tipped, providing a structured map of inner weather rather than answering a single specific question.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do an elemental spread with only the Major Arcana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and a Major-only elemental spread is particularly powerful for soul-level diagnosis. Because the trumps speak in archetypal language, each element is described by a deep, recurring pattern rather than a passing mood. It is the right form when you want to see the long-running condition of each element rather than the texture of today.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I do this spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Monthly is a good rhythm for most people, especially at the new moon or the turn of a season. The elements move slowly at the archetypal level, so weekly readings tend to repeat themselves. If you have just been through a major life change, do the spread on the other side of the dust settling — it will show you the new elemental landscape.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if one element gets a difficult card?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A difficult Major card in one element is not a verdict; it is a description of where the inner system is currently asking for attention. The Tower in Earth might point to a foundation that is shaking and needs honest reassessment; The Moon in Water might point to emotional fog that wants slow, gentle clarity rather than force. Take the card as a direction for care, not a sentence.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does it mean if all four elements get similar cards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If all four positions return cards of similar tone — all heavy, all hopeful, all retreat-oriented — the reading is telling you that your whole inner system is currently moving as one. That can be a sign of profound coherence or of being thoroughly stuck. The deeper texture of each card will tell you which. Either way, you are not in a state of mixed inner weather; you are in one large season.',
      },
    },
  ],
}

export default function MajorElementalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/spreads" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Spreads</Link>
          <span style={{ opacity: .4 }}>›</span>
          <Link href="/spreads/major" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Major Arcana</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Elemental</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Elemental Tarot Spread
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            Four Major Arcana cards, one for each element — Fire, Water, Air, and Earth. A diagnostic reading of where you are in balance and where the inner system has gone quiet.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Before You Begin
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            The four elements are an old way of describing the parts of a person. Fire is your will, the heat of action and the willingness to assert. Water is your feeling life and intuition, the flow of relationship. Air is the quality of your mind, the clarity of perspective and speech. Earth is the body, the work, the ground you stand on. A balanced person moves freely between all four; most of us tilt.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Separate the 22 trumps. Shuffle without a specific question — this spread is a diagnostic, not an enquiry. Draw four cards and lay them in a square or cross, one for each element. You will read each card in light of the element it represents, then take in the whole pattern.
          </p>
        </div>

        {/* Layout */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            The Four Elements
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            One Major Arcana card per element. The cross layout below places Fire at the top, Earth at the bottom, Water on the left and Air on the right — but a simple row works equally well.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.75rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 52px)', gridTemplateRows: 'repeat(3, 80px)', gap: '.5rem' }}>
              <div></div>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>1</div>
              <div></div>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>2</div>
              <div></div>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>3</div>
              <div></div>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>4</div>
              <div></div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS.map(({ num, name, desc }) => (
              <div key={num} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.1rem', background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12 }}>
                <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem' }}>{num}</div>
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', marginBottom: '.3rem' }}>{name}</div>
                  <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interpreting tips */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            How to Read Your Results
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Read each card both for its trump meaning and in light of its element. The Hermit in Fire is different from The Hermit in Water — in Fire it is a banked, conserving will; in Water it is emotional withdrawal and the wisdom of solitude. Always let the element colour the card.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Look for elemental resonance and clash. A card that traditionally belongs to one element falling into a different one is interesting information. The Sun (a fiery card) appearing in the Water position can indicate joy lit up in your relational life; The Moon (a watery card) in Air can indicate that your thoughts have become tidal, unsteady, dream-like.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Once you have read each card individually, step back and ask which element is most asking for attention. Often one position carries an obvious flag — the heaviest card, the most uncomfortable card, the one you keep looking back at. That is your point of focus for the season ahead. The other elements can usually be left to their natural rhythm while you tend to the one that has spoken.
          </p>
        </div>

        {/* FAQ */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '1.1rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {faqSchema.mainEntity.map((item, i, arr) => (
              <div key={item.name} style={{ paddingBottom: i < arr.length - 1 ? '1.1rem' : 0, borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <p style={{ fontFamily: "'Cinzel',serif", fontSize: '.85rem', color: 'var(--gold)', margin: '0 0 .4rem' }}>{item.name}</p>
                <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related links */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <Link href="/spreads/major" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>More spreads</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>All Major Arcana spreads →</div>
          </Link>
          <Link href="/free-reading" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Try it now</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Free tarot reading →</div>
          </Link>
        </div>

      </div>
    </>
  )
}
