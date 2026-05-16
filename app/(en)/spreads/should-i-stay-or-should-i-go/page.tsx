import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Should I Stay or Should I Go Tarot Spread — 6 Card Crossroads | TarotAxis',
  description: '6-card tarot spread for relationship crossroads. Compare staying vs leaving, see what each path holds, and access the deeper wisdom you already carry.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/should-i-stay-or-should-i-go',
    languages: {
      'en': 'https://tarotaxis.com/spreads/should-i-stay-or-should-i-go',
      'es': 'https://tarotaxis.com/es/tiradas/me-quedo-o-me-voy',
      'x-default': 'https://tarotaxis.com/spreads/should-i-stay-or-should-i-go',
    },
  },
  openGraph: {
    title: 'Should I Stay or Should I Go Tarot Spread — 6 Card Crossroads',
    description: '6-card tarot spread for relationship crossroads. Compare staying vs leaving, see what each path holds, and access the deeper wisdom you already carry.',
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'The Truth of the Relationship Now',
    desc: 'An unvarnished snapshot of where this relationship actually is — not what you hope it is, not the version you describe to friends. This card is honest about the present moment and asks you to receive that honesty without softening it.',
  },
  {
    num: 2,
    name: 'If You Stay',
    desc: 'The most likely path and energetic atmosphere if you remain. This is not a fixed prophecy but a clear-eyed read of the current trajectory if nothing fundamental shifts. Notice your body when you turn this card.',
  },
  {
    num: 3,
    name: 'If You Go',
    desc: 'The most likely path and energy if you leave. Again, this is not destiny — it is the shape of the road. Both options often contain difficulty, so the question becomes which difficulty feels alive and which feels like more of the same.',
  },
  {
    num: 4,
    name: 'What Your Heart Already Knows',
    desc: 'The answer you carry inside you but may be avoiding. The intuition that has been speaking quietly underneath the analysis. This card is rarely a surprise — it usually names what you have not yet allowed yourself to say out loud.',
  },
  {
    num: 5,
    name: 'What Needs to Change Regardless',
    desc: 'The shift required on either path — often more transformative than the leave-or-stay decision itself. A pattern in you, a way of relating, a boundary you have not held. The work that follows you wherever you go.',
  },
  {
    num: 6,
    name: 'Guidance',
    desc: 'The synthesising wisdom — the wisest thing the cards have to say once everything else has been laid down. This is not an instruction but a steadying voice. Read this card last and let it settle before you act.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I do a should I stay or go tarot reading honestly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start by stating your bias out loud before you shuffle. If you already want to leave, say so — that admission keeps you from unconsciously steering the interpretation. Ground yourself before drawing: this spread is unreliable when read during the worst argument or the calm after make-up sex. Many readers find it useful to do two readings on different days, ideally a week apart, and compare them. If the same themes recur across both, that is signal. If the readings contradict each other, your nervous system is doing most of the talking.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if the if you stay and if you go cards both look hard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is often the case, and it is honest. There is rarely a path through a relationship crossroads that does not involve grief. The real question is which grief is liberatory — the grief of building something new on the same ground, or the grief of leaving and beginning again elsewhere. Look at the texture of the difficulty in each card. Difficulty that has movement in it is different from difficulty that loops. The first invites you forward; the second tells you something is stuck.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I do this spread alone or with my partner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Probably alone first. Sharing this reading too early can pressure both the cards and the conversation — your partner may feel ambushed, you may feel watched, and the meaning gets shaped by their reaction rather than your own discernment. Sit with what comes up privately. If you decide later that a shared reading would help, that is a separate ritual with different rules: choose a calm moment, agree to interpret together rather than defend, and accept that two people will see the same card differently. That is part of the work.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can tarot tell me to stay or leave?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, and any reader who tells you it can is overstepping. Tarot shows you what is — the energy of the relationship, the trajectory of each path, the parts of yourself you have been quiet about. You decide what to do with that information. A reading might make a decision easier to face, or harder to keep avoiding, but the act of choosing belongs to you alone. That ownership is not a limitation of the cards; it is the point of doing the reading in the first place.',
      },
    },
  ],
}

export default function ShouldIStayOrShouldIGoPage() {
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
        <span style={{ color: 'var(--gold)' }}>Should I Stay or Should I Go</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Should I Stay or Should I Go Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          A six-card spread for the relationship crossroads. It does not push you toward leaving or staying — it lays out what is true, what each path holds, and the quiet knowing you may have been talking yourself out of.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['6 Cards', 'Crossroads', 'Decision Spread'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* About this spread */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          About This Spread
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            "Should I stay or should I go" is rarely the real question. Underneath it sits a quieter set of questions — am I being honest about what is happening here, what am I afraid to lose, who would I have to become to leave, who would I have to become to stay? This spread is built to surface those questions, not to issue a verdict. The cards do not vote. They describe.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Do this reading from a state of stability, not crisis. Tarot drawn in the middle of the worst argument of the year will mostly reflect your nervous system, not the relationship. Wait until you can sit with the deck and breathe. If you cannot get there, that itself is information — but it is information for a different conversation, perhaps with a therapist rather than a spread.
          </p>
          <p>
            The most common misuse of this spread is outsourcing. You hand the decision to the cards because the cost of choosing is enormous and you would like something else to be responsible. Tarot will not collude with that. What it can do is reflect what you already know with enough clarity that you stop being able to pretend otherwise. The choice — and the consequences, and the dignity of choosing — remain yours.
          </p>
        </div>
      </div>

      {/* Spread layout */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          The Six Positions
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Lay the cards in order — present truth at the centre, the two paths to either side, the heart's knowing beneath them, the required change, and the guidance card last.
        </p>

        {/* Visual Layout */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Card Layout
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {POSITIONS.map(pos => (
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Sit with the cards before you act</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Use our free tarot tool to draw your six cards, then return here to read each position slowly. Take notes. Sleep on it.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/spreads/love" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ♡ Love Spread
          </Link>
          <Link href="/spreads/what-do-i-need-to-heal" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            What I Need to Heal
          </Link>
          <Link href="/how-to-ask-tarot-questions" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            How to Ask Tarot
          </Link>
        </div>
      </div>
    </div>
  )
}
