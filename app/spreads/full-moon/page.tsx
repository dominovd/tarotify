import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Full Moon Tarot Spread — Release & Ritual Guide | Tarotify',
  description: 'Discover the best full moon tarot spread — 4 and 6 card layouts for release, gratitude and intention. Complete guide with position meanings and moon ritual tips.',
  alternates: { canonical: 'https://tarotify.app/spreads/full-moon' },
  openGraph: {
    title: 'Full Moon Tarot Spread — Release & Ritual Guide',
    description: 'Discover the best full moon tarot spread — 4 and 6 card layouts for release, gratitude and intention.',
  },
}

const SIMPLE_POSITIONS = [
  {
    num: 1,
    name: 'What Is Culminating',
    desc: 'The energy, situation or theme that has been building and is now reaching its peak. This card reveals what the full moon is illuminating in your life — the thing that is fully visible, for better or worse, under this bright lunar light.',
  },
  {
    num: 2,
    name: 'What to Release',
    desc: 'What you are being called to let go of. The full moon is the most powerful time for release work — this card names the pattern, belief, relationship dynamic or energy that has completed its cycle and is ready to leave.',
  },
  {
    num: 3,
    name: 'What I Am Grateful For',
    desc: 'The gift of this cycle. Even in difficulty, every lunation brings something worth acknowledging. This card invites you to name and honour what has grown, arrived or shifted for the better since the last new moon.',
  },
  {
    num: 4,
    name: 'Message from the Moon',
    desc: 'The overarching guidance for this full moon. This card speaks directly to what the universe, your higher self or the archetype of the moon herself most wants you to know at this moment of culmination.',
  },
]

const CLARITY_POSITIONS = [
  {
    num: 1,
    name: 'Where I Am',
    desc: 'Your current position — emotionally, energetically, practically. An honest snapshot of where you stand as this full moon rises.',
  },
  {
    num: 2,
    name: 'What Is Complete',
    desc: 'The chapter, cycle or phase of growth that has now fully closed. Acknowledge this with honesty — not everything that ends is a loss.',
  },
  {
    num: 3,
    name: 'What to Release',
    desc: 'The specific energy, habit, story or attachment the full moon is asking you to consciously surrender.',
  },
  {
    num: 4,
    name: 'What to Receive',
    desc: 'The gift, insight or opportunity that becomes available when you release what is no longer yours to carry.',
  },
  {
    num: 5,
    name: 'What to Celebrate',
    desc: 'The achievement, growth or moment of beauty from this past cycle that deserves to be seen and honoured before you move forward.',
  },
  {
    num: 6,
    name: 'Guidance for the Next Cycle',
    desc: 'A single guiding theme or intention to carry from this full moon into the waning and new moon that follows.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a full moon tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A full moon tarot spread is a card layout designed to be used at the peak of the lunar cycle, when the moon is at full illumination. The full moon is traditionally associated with culmination, completion, release and gratitude — things that have been building since the new moon now reach their fullest expression. A full moon spread uses these themes as its position meanings, giving you a structured ritual for reflecting on what has come to fruition and what is ready to be released.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many cards do you use in a full moon tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common full moon tarot spreads use between 4 and 6 cards. A 4-card spread covers the essentials: what is culminating, what to release, what to be grateful for, and a message from the moon. A 6-card spread adds more nuance, including what is complete, what to receive and guidance for the next cycle. Both formats work well — choose 4 cards for a focused ritual and 6 for a deeper exploration of the full moon energy.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to do a full moon tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ideal window for a full moon tarot spread is the three days surrounding the exact full moon: the day before, the day of, and the day after. The energy of the full moon is felt across this window rather than only at the precise moment of peak illumination. Many readers prefer to do their reading in the evening, when the moon is rising or fully visible. You do not need a clear sky or to be outdoors — the lunar energy is available wherever you are.',
      },
    },
    {
      '@type': 'Question',
      name: 'What questions should I ask in a full moon tarot reading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Full moon questions are best focused on completion, release and gratitude rather than new beginnings (which belong to the new moon). Useful questions include: What has this cycle brought to light? What am I ready to let go of? What have I achieved or grown through since the last new moon? What is the moon illuminating that I have been avoiding? What needs to be honoured or celebrated before I move forward? The full moon is not typically a time for questions about starting new projects — save those for the new moon.',
      },
    },
  ],
}

export default function FullMoonPage() {
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
        <span style={{ color: 'var(--gold)' }}>Full Moon Spread</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>○</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Full Moon Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          The full moon is the peak of the lunar cycle — a time of culmination, illumination and release. Use this spread to honour what has come to fruition, acknowledge what is complete and consciously let go of what no longer serves your growth.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['4–6 Cards', 'Beginner Friendly', 'Lunar Ritual'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Full Moon Energy */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          The Energy of the Full Moon
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            In the lunar cycle, the full moon marks the moment of peak illumination — both literally and symbolically. What has been growing since the new moon now stands fully revealed. Projects reach milestones. Emotions that have been simmering rise to the surface. Hidden truths become impossible to ignore. The full moon does not begin things; it completes them.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Astrologically, the full moon always falls in the sign opposite the sun, creating a polarity of energy that asks us to integrate two seemingly contradictory forces. This tension is generative — it is where the most powerful insights live. A full moon in Scorpio while the sun is in Taurus, for example, creates friction between depth and comfort, transformation and security. Your tarot spread will often mirror this polarity in the cards it draws.
          </p>
          <p>
            The traditional practices of the full moon — releasing, releasing intention, gratitude rituals, and cord-cutting — all arise from this symbolism. The full moon is the natural moment to shed what has completed its purpose so that the waning moon cycle can carry it away. Tarot is an ideal tool for this work: it makes the invisible visible, giving form to the energies you are ready to name and release.
          </p>
        </div>
      </div>

      {/* Simple Full Moon Spread */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Layout 1 — Simple Full Moon (4 Cards)
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          A focused four-card ritual covering the essential themes of the full moon: what has come to light, what to release, what to celebrate, and the moon's message. Ideal for monthly practice.
        </p>

        {/* Visual Layout */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Card Layout
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {SIMPLE_POSITIONS.map(pos => (
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
          {SIMPLE_POSITIONS.map(pos => (
            <div key={pos.num} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
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

      {/* Full Moon Clarity Spread */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Layout 2 — Full Moon Clarity (6 Cards)
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          A deeper six-card spread for a more thorough full moon reflection. This layout examines where you are, what has completed, what to release and receive, what to celebrate and how to move forward into the next cycle.
        </p>

        {/* Visual Layout — arc of 6 */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Card Layout
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {CLARITY_POSITIONS.map(pos => (
              <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
                <div style={{ width: 60, height: 90, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1rem', color: 'var(--gold)' }}>
                  {pos.num}
                </div>
                <div style={{ fontSize: '.58rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', textAlign: 'center', maxWidth: 60 }}>{pos.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {CLARITY_POSITIONS.map(pos => (
            <div key={pos.num} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
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

      {/* Ritual Tips */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Full Moon Ritual Tips
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '.75rem' }}>
          {[
            ['○', 'Time it right', 'Do your spread within three days of the exact full moon. The energy peaks on the night of the full moon but remains potent for a day on either side.'],
            ['✦', 'Set the space', 'Dim the lights, light a candle, and if possible work near a window where moonlight can reach you. The ritual container matters.'],
            ['◇', 'Write it down', 'After the reading, write the names of what you are releasing on a piece of paper. Many readers burn this safely or bury it as a physical act of letting go.'],
            ['○', 'Charge your deck', 'Leave your tarot deck in a windowsill overnight under the full moon to cleanse and recharge its energy — a practice passed down through generations of card readers.'],
          ].map(([icon, title, text]) => (
            <div key={title as string} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1.1rem', color: 'var(--gold)', marginBottom: '.4rem' }}>{icon}</div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.78rem', letterSpacing: '.08em', color: 'var(--gold)', opacity: .8, marginBottom: '.4rem', textTransform: 'uppercase' }}>{title}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.6, margin: 0 }}>{text as string}</p>
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
            <div key={item.name} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Ready to draw your full moon cards?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Use our free tarot reading tool to draw your cards, then return here to interpret each position.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Draw Cards Now
          </Link>
          <Link href="/spreads/new-moon" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            New Moon Spread
          </Link>
          <Link href="/spreads" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            All Spreads
          </Link>
        </div>
      </div>
    </div>
  )
}
