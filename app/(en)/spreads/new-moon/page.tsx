import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'New Moon Tarot Spread — Intention Setting Guide | TarotAxis',
  description: 'Set powerful intentions with a new moon tarot spread. 3 and 5 card layouts for new beginnings, manifestation and monthly focus. Position meanings and ritual guide.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/new-moon',
    languages: {
      'en': 'https://tarotaxis.com/spreads/new-moon',
      'es': 'https://tarotaxis.com/es/tiradas/luna-nueva',
      'x-default': 'https://tarotaxis.com/spreads/new-moon',
    },
  },
  openGraph: {
    title: 'New Moon Tarot Spread — Intention Setting Guide',
    description: 'Set powerful intentions with a new moon tarot spread. 3 and 5 card layouts for new beginnings, manifestation and monthly focus.',
  },
}

const INTENTIONS_POSITIONS = [
  {
    num: 1,
    name: 'Theme of This Cycle',
    desc: 'The overarching energy of this new moon cycle. What is the universe — and your own deeper nature — inviting you to explore, develop or tend to over the coming four weeks? This card sets the tone for everything that follows.',
  },
  {
    num: 2,
    name: 'What to Focus On',
    desc: 'Your primary intention for this cycle. Where should your energy, attention and action be most concentrated? This card points to the seed most worth planting under this new moon.',
  },
  {
    num: 3,
    name: 'What to Release to Make Space',
    desc: 'Even at the new moon — traditionally a time of beginning — something must be released to make room for what is coming. This card identifies the habit, belief, distraction or attachment that would most benefit from being laid down before you begin.',
  },
]

const MANIFESTATION_POSITIONS = [
  {
    num: 1,
    name: 'Where I Am Starting From',
    desc: 'An honest assessment of your current starting point. Not where you want to be — where you actually are. This card asks you to see your baseline clearly so that your intentions are grounded in reality rather than wishful thinking.',
  },
  {
    num: 2,
    name: 'What I Want to Call In',
    desc: 'The quality, experience, relationship, achievement or shift you most want to manifest over the coming cycle. State this as clearly as possible before drawing — the new moon rewards specificity.',
  },
  {
    num: 3,
    name: 'What Supports Me',
    desc: 'The resource, strength, person, circumstance or energetic ally already available to you. This card reminds you that you are not starting from nothing — something is already on your side.',
  },
  {
    num: 4,
    name: 'What Blocks Me',
    desc: 'The internal or external obstacle most likely to impede your intention this cycle. Knowing the block in advance allows you to address it consciously rather than being derailed by it.',
  },
  {
    num: 5,
    name: 'Guidance for This Cycle',
    desc: 'The single most important piece of wisdom for navigating this new moon cycle. This card synthesises the reading and offers a guiding principle to return to whenever you feel unclear or off track.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a new moon tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A new moon tarot spread is a card layout designed for use at the beginning of the lunar cycle, when the moon is not yet visible in the sky. The new moon is traditionally associated with new beginnings, intentions, manifestation and the planting of seeds — both literal and metaphorical. A new moon tarot spread uses these themes as its position meanings, offering a structured monthly ritual for setting intentions and clarifying what you want to cultivate over the coming four weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I do a new moon tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best time for a new moon tarot spread is within 48 hours of the exact new moon — ideally on the evening of the new moon itself or the day following. Astrologically, the new moon window for intention-setting closes once the moon has moved more than 48 hours past its exact conjunction with the sun. Many practitioners also like to work the day before the new moon as a preparation ritual. Check a lunar calendar for the exact time of the new moon in your timezone.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is a new moon spread different from a full moon spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The new moon and full moon spreads are complementary opposites. The new moon spread is forward-facing — it is about beginnings, intentions, manifestation and what you want to call into your life. The full moon spread is backward-facing and present-focused — it is about completion, release, gratitude and acknowledging what has already come to fruition. Used together over a full lunar cycle, they create a powerful ritual rhythm: plant intentions at the new moon, release and celebrate at the full moon.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I use my new moon tarot reading results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After your new moon reading, write down your intention and the guidance from each card position. Place this somewhere you will see it throughout the month — a journal, a phone photo, or a notecard on your desk. Return to the reading at the half-moon (first quarter moon) as a progress check: are you aligned with the intention you set? At the full moon, look back at the reading to see what has manifested. The new moon reading is most powerful when it is treated as a living document rather than a single event.',
      },
    },
  ],
}

export default function NewMoonPage() {
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
        <span style={{ color: 'var(--gold)' }}>New Moon Spread</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>◐</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          New Moon Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          The new moon is the moment of greatest potential — the dark sky before the light returns. Use this spread to set clear intentions, identify what you want to manifest and align your energy with the fresh start the lunar cycle is offering.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['3–5 Cards', 'Beginner Friendly', 'Manifestation'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* New Moon Energy */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          The Energy of the New Moon
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            The new moon is the invisible moon — the moment when the moon sits between the earth and the sun, with its illuminated face turned entirely away from us. In this darkness lies the seed of everything that is about to unfold. Ancient cultures worldwide recognised the new moon as the most potent time for beginnings: planting crops, setting intentions, starting ventures, making vows. That instinct was not superstition — it was an attunement to the natural rhythms of expansion and contraction that govern all living systems.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            In tarot practice, the new moon invites the energy of the Fool — the leap into the unknown with open hands and a full heart. It is the moment before the first card is turned. Everything is possible; nothing is yet fixed. The intentions you set under a new moon have the full force of the growing lunar light behind them as the moon waxes toward fullness over the following two weeks.
          </p>
          <p>
            Each new moon falls in a different astrological sign, colouring the intentions of that particular cycle. A new moon in Capricorn favours ambitions and long-term structures; one in Cancer calls for emotional tending and home; in Aries it sparks bold new action. Knowing the sign of the current new moon can add depth and specificity to your tarot intention-setting practice.
          </p>
        </div>
      </div>

      {/* New Moon Intentions Spread */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Layout 1 — New Moon Intentions (3 Cards)
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          A simple, powerful three-card spread for monthly intention-setting. Covers the cycle theme, your primary focus and what to release to make space for it. Ideal for a consistent monthly practice.
        </p>

        {/* Visual Layout */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Card Layout
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', alignItems: 'flex-start' }}>
            {INTENTIONS_POSITIONS.map(pos => (
              <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
                <div style={{ width: 80, height: 120, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1.2rem', color: 'var(--gold)' }}>
                  {pos.num}
                </div>
                <div style={{ fontSize: '.62rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center', maxWidth: 80 }}>{pos.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {INTENTIONS_POSITIONS.map(pos => (
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

      {/* New Moon Manifestation Spread */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Layout 2 — New Moon Manifestation (5 Cards)
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          A deeper five-card spread for manifestation work. This layout examines your starting point, your intention, what supports and blocks you, and the guidance that will carry you through the cycle.
        </p>

        {/* Visual Layout */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Card Layout
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {MANIFESTATION_POSITIONS.map(pos => (
              <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
                <div style={{ width: 68, height: 102, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1rem', color: 'var(--gold)' }}>
                  {pos.num}
                </div>
                <div style={{ fontSize: '.58rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', textAlign: 'center', maxWidth: 68 }}>{pos.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {MANIFESTATION_POSITIONS.map(pos => (
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Ready to set your intentions?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Draw your new moon cards and use the position meanings above to guide your interpretation.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Draw Cards Now
          </Link>
          <Link href="/spreads/full-moon" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Full Moon Spread
          </Link>
          <Link href="/spreads" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            All Spreads
          </Link>
        </div>
      </div>
    </div>
  )
}
