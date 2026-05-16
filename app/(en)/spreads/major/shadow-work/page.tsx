import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shadow Work Tarot Spread — 5-Card Major Arcana Layout | TarotAxis',
  description: 'A 5-card shadow work tarot spread using only the Major Arcana. Meet what you have refused to see, the wound underneath, and the gift on the other side.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/major/shadow-work',
    languages: {
      'en': 'https://tarotaxis.com/spreads/major/shadow-work',
      'es': 'https://tarotaxis.com/es/tiradas/arcanos-mayores/trabajo-de-sombra',
      'x-default': 'https://tarotaxis.com/spreads/major/shadow-work',
    },
  },
  openGraph: {
    title: 'Shadow Work Tarot Spread — Major Arcana Shadow Reading',
    description: 'Five trump cards for the parts of yourself you have exiled. A focused, archetypal excavation of the shadow.',
  },
}

const POSITIONS = [
  { num: 1, name: 'What I Refuse to See', desc: 'The trait, feeling, or truth your daylight self has been working hardest to disown. The card here names what you have pushed to the edge of awareness.' },
  { num: 2, name: 'The Wound Underneath', desc: 'The original injury the refusal is protecting. Often something younger than you remember, often relational, often a place where being yourself was met with rejection or threat.' },
  { num: 3, name: 'How It Shows Up in My Life', desc: 'The pattern this disowned material makes in the world — the repeated dynamic, the recurring relational shape, the situation you find yourself drawn into without meaning to.' },
  { num: 4, name: 'What It Needs to Integrate', desc: 'The specific quality of attention, ritual, or relationship the exiled part is asking for. Not a fix, but the conditions under which it can return home.' },
  { num: 5, name: 'The Gift on the Other Side', desc: 'The previously hidden strength, gift, or capacity that becomes available once the shadow is met. What you receive when this material is integrated rather than carried unconsciously.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is shadow work tarot different from a regular reading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A regular tarot reading tends to address a present situation, decision, or relationship. Shadow work tarot turns the attention inward to the disowned parts of the self — what you have buried, exiled, or refused to see. The questions are uncomfortable by design, and the goal is not advice but integration: bringing the hidden material into conscious relationship so it stops running the show from underneath.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is shadow work tarot safe to do alone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most people, occasional self-led shadow work is fine and even useful. However, if the material that surfaces is overwhelming, links to trauma, or destabilises your day-to-day functioning, please bring it to a therapist or counsellor familiar with depth work. The cards are a focusing instrument, not a substitute for skilled human support when things go deep.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I keep drawing the same shadow card?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Repeatedly drawing the same Major card in shadow readings is a strong signal that the archetype is the central work of this phase of your life. The Moon recurring suggests material around illusion, projection, and the unconscious; the Devil suggests bondage, addiction, or shame; The Hanged Man suggests surrender that has not yet been allowed. Stay with the card. The repetition is the invitation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why use only Major Arcana for shadow work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shadow material operates at the archetypal level. It is older than your conscious story, often inherited, and shaped by forces larger than personal circumstance. The Major Arcana speak in that same register — they are the language the shadow already knows. Using only trumps keeps the reading at the depth where the work actually happens, rather than skating across the everyday surface.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I do a shadow work spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Less often than you might think. A meaningful shadow spread asks weeks or months of integration before another one is useful — the work happens in between readings, in life, in relationship, in dream. Once per season is plenty for most people. Doing it weekly tends to skim the surface and avoid the deeper integration the cards have already named.',
      },
    },
  ],
}

export default function MajorShadowWorkPage() {
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
          <span>Shadow Work</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>☾</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Shadow Work Tarot Spread
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            Five Major Arcana cards for the parts of yourself you have exiled. A focused, archetypal reading that meets what you have refused to see — and the gift that returns when you do.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Before You Begin
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Shadow work asks for honesty and the willingness to be uncomfortable for a little while. The shadow is not a monstrous part of yourself; it is the material that did not fit the role you were asked to play, and so was set aside, often very young. Meeting it is a homecoming, even when the meeting is painful.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Choose a time when you will not be interrupted and a place where you can be private. Have water nearby, and perhaps a notebook. If recent trauma is active or your nervous system is dysregulated, hold this reading for another day — the work is more useful when you are steady enough to meet what comes.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Separate the 22 trumps. Shuffle slowly and let the question be wordless if it wants to be — the shadow does not always announce itself in language. Lay five cards in a row.
          </p>
        </div>

        {/* Layout */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            The Five Positions
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Read left to right. The spread moves from the surface refusal down to the wound, out into the pattern it makes in life, into what the exiled part needs, and through to the gift on the far side.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {[1, 2, 3, 4, 5].map(n => (
              <div key={n} style={{ width: 52, height: 80, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>
                {n}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS.map(({ num, name, desc }) => (
              <div key={num} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.1rem', background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12 }}>
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
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            How to Read Your Results
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Move slowly. The temptation in shadow work is to read fast and stay clever — to interpret the cards as a sequence of ideas. Resist that. Look at each card and notice the bodily response before reaching for words. The flicker of resistance, the small contraction in the chest, the urge to skip to the next one — those are where the work is.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Honour the link between cards 1 and 2. The refusal at the surface is almost always a defence around an older wound. If The Empress sits in position 1 and The Hanged Man in position 2, the surface refusal of nurturing capacity is likely defending an early experience of being made to sacrifice or wait. The structure of the spread keeps you from collapsing one into the other.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Do not rush to the gift card. Position 5 is real, but it arrives by way of the work, not in advance of it. Reading it as a reward to be claimed quickly betrays the slow, somatic, often unspectacular pace of actual integration. Let the gift be a promise, not a shortcut.
          </p>
        </div>

        {/* FAQ */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
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
