import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dark Moon Tarot Spread — Shadow Work & Inner Truth | TarotAxis',
  description: 'A dark moon tarot spread for shadow work and inner truth. Three-card layout for the days before the new moon — the deepest, most introspective point of the lunar cycle.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/dark-moon',
    languages: {
      'en': 'https://tarotaxis.com/spreads/dark-moon',
      'es': 'https://tarotaxis.com/es/tiradas/luna-oscura',
      'x-default': 'https://tarotaxis.com/spreads/dark-moon',
    },
  },
  openGraph: {
    title: 'Dark Moon Tarot Spread — Shadow Work & Inner Truth',
    description: 'A three-card dark moon spread for shadow work and inner truth — the deepest point of the lunar cycle.',
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'The Shadow I Have Been Avoiding',
    desc: 'The aspect of yourself, the truth or the feeling you have been declining to look at directly this cycle. The dark moon is the safest container in which to meet it. This card names what is asking to be seen — gently and honestly.',
  },
  {
    num: 2,
    name: 'What This Shadow Is Protecting',
    desc: 'Shadows are not arbitrary. Whatever you have been avoiding is guarding something — usually a younger part of you, a survival strategy that once worked, or a value you have not yet found language for. This card reveals what your shadow is actually serving.',
  },
  {
    num: 3,
    name: 'How to Hold It Tenderly',
    desc: 'The dark moon does not ask you to fix or banish the shadow. It asks you to hold it. This card offers the specific way to be with what you have just uncovered — the gesture, the practice or the inner stance that allows integration rather than struggle.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a dark moon tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A dark moon tarot spread is a card layout designed for the final two or three days of the lunar cycle, when the moon has waned to invisibility and the next new moon has not yet begun. The dark moon is traditionally associated with shadow work, inner truth, deep rest and the descent into the unconscious. A dark moon spread uses these themes as its position meanings, creating a structured ritual for meeting the parts of yourself that the rest of the cycle keeps out of view.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between the dark moon and the new moon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The terms are sometimes used interchangeably, but they describe different phases. The dark moon is the final part of the waning cycle — the moon is fully invisible because the entire visible face is in shadow. The new moon is technically a single moment in astrology — the exact conjunction of moon and sun — and the days following it are when intentions are set. The dark moon is for descent and shadow work; the new moon is for emergence and intentions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the dark moon a bad time for tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — the opposite. The dark moon is one of the most powerful times for inner work, including tarot. What it is not good for is forward-facing planning, action or external goals. Save those for the waxing moon. Reserve the dark moon for the questions you do not normally have the courage to ask yourself: what am I hiding, what am I afraid of, what part of me have I exiled. The cards meet this energy well.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I do shadow work safely with tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three principles. First, do not do shadow work when you are already in crisis — the cards uncover things, and you need stable ground to integrate them. Second, work with curiosity rather than judgment: ask what your shadow protects rather than how to be rid of it. Third, give yourself time to integrate — do not stack a dark moon reading on top of a heavy day. If a reading surfaces something you cannot hold alone, that is a signal to bring it to a therapist, friend or trusted guide.',
      },
    },
  ],
}

export default function DarkMoonPage() {
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
        <span>/</span>
        <Link href="/spreads" style={{ color: 'var(--muted)' }}>Tarot Spreads</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Dark Moon Spread</span>
      </nav>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>●</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Dark Moon Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          The dark moon is the lowest, deepest, most private point of the lunar cycle — the days when the moon is invisible and the world goes quiet. Use this spread for the inner work the rest of the cycle keeps you from doing.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['3 Cards', 'Shadow Work', 'Inner Truth'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          The Energy of the Dark Moon
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            The dark moon — sometimes called the balsamic moon — covers roughly the final 72 hours before the new moon. Astronomically, the moon is sitting close to the sun and is not visible in the night sky at all. In every traditional lunar practice, this is the descent — the underworld phase of the cycle. The Greeks called this aspect of the moon Hecate, goddess of the crossroads and the keeper of what is hidden.
          </p>
          <p style={{ margin: 0 }}>
            This is not a time for activity, optimism or planning. It is a time for stillness, dreams, ancestral work and the parts of you that only speak when no one is looking. The dark moon is genuinely difficult for many people — and genuinely transformative for those who learn to honour it. A dark moon tarot spread is not a casual practice. Do it on a quiet evening, alone, with no agenda about what you find.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          The Spread — 3 Cards
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Three cards drawn slowly. The dark moon does not reward speed — pause between each card and let the previous one settle before drawing the next.
        </p>

        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Card Layout
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {POSITIONS.map(pos => (
              <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
                <div style={{ width: 72, height: 108, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1.1rem', color: 'var(--gold)' }}>
                  {pos.num}
                </div>
                <div style={{ fontSize: '.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center', maxWidth: 72 }}>{pos.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {POSITIONS.map(pos => (
            <div key={pos.num} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.8rem', color: 'var(--gold)' }}>
                {pos.num}
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.88rem', color: 'var(--gold)', marginBottom: '.5rem' }}>{pos.name}</div>
                <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{pos.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          A Note on Doing This Work Safely
        </h2>
        <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            Shadow work is most effective when you are otherwise stable. Do not do a dark moon reading in the middle of a crisis — the cards uncover, and you need ground to integrate what they show. Work with curiosity rather than judgment, give yourself unstructured time after the reading, and remember that the goal is not to fix anything. If something surfaces that you cannot hold alone, bring it to a therapist, a trusted friend or a guide who knows you.
          </p>
        </div>
      </div>

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

      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>From descent to renewal</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          After the dark moon comes the new moon — what you have just uncovered becomes the soil for the next cycle.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/spreads/new-moon" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>New Moon Spread</Link>
          <Link href="/spreads/waning-moon" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>Waning Moon Spread</Link>
          <Link href="/spreads/eclipse" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>Eclipse Spread</Link>
        </div>
      </div>
    </div>
  )
}
