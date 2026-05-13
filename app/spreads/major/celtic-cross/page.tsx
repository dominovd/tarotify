import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Major Arcana Celtic Cross — 10-Card Trump-Only Spread | TarotAxis',
  description: 'The classic 10-card Celtic Cross tarot spread reimagined with only the 22 Major Arcana. Position meanings, layout diagram, and tips for archetypal celtic cross readings.',
  alternates: { canonical: 'https://tarotaxis.com/spreads/major/celtic-cross' },
  openGraph: {
    title: 'Major Arcana Celtic Cross — Celtic Cross with Only the Trumps',
    description: 'A Celtic Cross spread using only the 22 Major Arcana for soul-level questions. Ten positions, full meanings, and how to read trump-heavy results.',
  },
}

const POSITIONS = [
  { num: 1, name: 'Present Situation', desc: 'The archetypal field you are standing in right now. Not what is happening on the surface, but the deeper pattern shaping your present.' },
  { num: 2, name: 'Crossing Challenge', desc: 'The force that meets and complicates the first card. The tension at the heart of the matter — the archetype actively pressing against your present.' },
  { num: 3, name: 'Conscious Mind', desc: 'What you are aware of, what you are telling yourself, the version of the story your daylight mind has settled on.' },
  { num: 4, name: 'Subconscious Foundation', desc: 'The deeper material the situation is rooted in. Memories, inherited patterns, soul-level themes you may not yet have words for.' },
  { num: 5, name: 'Recent Past', desc: 'The archetypal chapter that is now closing — the energy that has shaped you up to this point and is beginning to lose its grip.' },
  { num: 6, name: 'Approaching Future', desc: 'The next archetypal current moving toward you. Not a fixed event, but the texture of what is on the way.' },
  { num: 7, name: 'You in the Matter', desc: 'How you are showing up in this situation — the role your soul is being asked to play, and the version of yourself that is being summoned.' },
  { num: 8, name: 'External Influences', desc: 'The archetypal weather around you — other people, ancestral lines, cultural pressures. The forces that are not yours but that shape the field.' },
  { num: 9, name: 'Hopes and Fears', desc: 'The deeper longing and the deeper dread, often surprisingly close together. What you most want and most resist about the unfolding.' },
  { num: 10, name: 'Outcome', desc: 'The archetypal resolution this current is moving toward if the present trajectory continues. A teaching, a threshold, a transformation — rarely a tidy ending.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can the Celtic Cross work with only 22 cards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the Celtic Cross adapts beautifully to a 22-card Major Arcana deck. Because each position then receives a trump rather than a Minor card, the spread becomes weightier and more archetypal in tone. Some readers find it more demanding because every card carries soul-level significance, but that is precisely its strength for pivotal questions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why use Major Arcana only for a Celtic Cross?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Major-only Celtic Cross is best suited to large, fated, or soul-level questions where the practical layer of the Minor Arcana would dilute the reading. It surfaces the long arc of your situation rather than the day-to-day. Use it when the question is about meaning, vocation, identity, or transformation rather than ordinary timing or logistics.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I read a Celtic Cross with no court cards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In a Major-only Celtic Cross, the people in your life are represented by the archetypes they are currently embodying rather than by traditional court cards. The Empress in position 8 might point to a nurturing figure or a maternal presence; The Emperor might indicate authority or paternal energy. Read the trump as both an inner force and, when relevant, the people who carry that energy around you.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I draw The Tower or Death in the outcome position?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Tower or Death in the outcome of a Major-only Celtic Cross is not a sentence of disaster; it is an honest description of the threshold ahead. Both cards mark the end of a chapter that has run its course and the necessary clearing that precedes a new one. Read them as transformation rather than catastrophe, while still taking their seriousness seriously.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a Major-only Celtic Cross take to interpret?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plan on at least forty minutes of unhurried attention. Each trump card needs to be read both for its archetypal meaning and for its place in the unfolding story across the ten positions. Many readers prefer to do this spread once and then sit with it for several days, returning to particular cards as the lessons begin to land.',
      },
    },
  ],
}

export default function MajorCelticCrossPage() {
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
          <span>Celtic Cross</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>✶</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Major Arcana Celtic Cross
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            The classic ten-card Celtic Cross rebuilt with only the 22 trumps. A reading for the questions where the everyday detail falls away and the archetypes speak directly.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Before You Begin
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Reserve this spread for questions that already feel heavy. A vocation crossroads, a long-running relationship at a turning point, an inner change you can feel coming but cannot quite name. The Major-only Celtic Cross is a soul-scale instrument; it will not give crisp answers to small practical questions, but for the large ones it is unmatched.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Separate the 22 trumps from the rest of the deck. Shuffle until you feel ready, hold the question clearly in mind, and lay out the ten cards in the traditional pattern — six in the central cross and four in the staff to the right. Then sit with the whole spread before reading any single card.
          </p>
        </div>

        {/* Layout */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            The Layout
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Cards 1–6 form the cross at the centre — present, crossing, conscious, subconscious, past, and future. Cards 7–10 form the staff on the right — self, environment, hopes and fears, and outcome.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 52px)', gridTemplateRows: 'repeat(3, 80px)', gap: '.5rem' }}>
              <div></div>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>5</div>
              <div></div>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>4</div>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>1/2</div>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>6</div>
              <div></div>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>3</div>
              <div></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '52px', gridTemplateRows: 'repeat(4, 80px)', gap: '.5rem' }}>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>10</div>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>9</div>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>8</div>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>7</div>
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
            Begin with the relationship between cards 1 and 2 — the present and its crossing. That pair sets the central tension of the whole spread, and every other card colours it. Then read the vertical axis (3 and 4) against the horizontal axis (5 and 6) to see how the conscious story sits against the deeper material, and how the past flows toward the future.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            The staff on the right is the personal axis. Card 7 is the version of you the moment is summoning; card 8 is the surrounding weather; card 9 is the secret heart of your relationship to the question; card 10 is where the present current is leading.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Notice resonance. If The Hermit appears in position 4 and again as the version of you in position 7, the reading is telling you the soul wants withdrawal — solitude as a practice, not a punishment. With only 22 cards in play, such echoes carry real weight.
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
