import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Third Party Tarot Spread — Affair, Triangle & Outside Influence Reading | TarotAxis',
  description: 'A 4-card spread for relationships affected by a third party — whether confirmed, suspected, or pulling at the edges. Honest clarity on each person\'s role.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/third-party',
    languages: {
      'en': 'https://tarotaxis.com/spreads/third-party',
      'es': 'https://tarotaxis.com/es/tiradas/tercera-persona',
      'x-default': 'https://tarotaxis.com/spreads/third-party',
    },
  },
  openGraph: {
    title: 'Third Party Tarot Spread — Affair, Triangle & Outside Influence Reading',
    description: 'A 4-card spread for relationships affected by a third party — confirmed, suspected, or pulling at the edges. Honest clarity on each person\'s role.',
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'Your Position',
    desc: 'Your honest state in this dynamic — what you are feeling, what you are choosing, and the parts of yourself that may be drawing this situation in. Not blame, but pattern. The places where you have been absent, hungry or quietly complicit.',
  },
  {
    num: 2,
    name: "Your Partner's Position",
    desc: 'What your partner is actually experiencing and choosing, beneath the surface story they are telling you or themselves. This card often complicates the simple narratives — neither villain nor victim, but a person making decisions inside a context.',
  },
  {
    num: 3,
    name: 'The Third Party’s Position',
    desc: 'What this person is bringing into the field — sometimes deliberately, sometimes unconsciously, sometimes simply by existing in a place where they are needed or wanted. Their motives are not always what they appear to be from your side of the triangle.',
  },
  {
    num: 4,
    name: 'The Path Through',
    desc: 'The genuine way forward — which may be honest conversation, separation, boundary-setting, or simply seeing the dynamic clearly enough to choose with your eyes open. Not a verdict on who is right, but the most truthful next step.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can tarot confirm an affair?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Tarot reads energetic and emotional patterns, not facts. A spread can show you that the field is heavy with secrecy, that something is being hidden, that grief sits at the centre of a partnership — but it cannot tell you that a specific person met a specific other person at a specific hotel. If you need facts, pursue them by other means: a direct conversation, time, observation, professional help. Use tarot for what it does well — clarifying your own perception and helping you choose how to respond to what you see.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I do this spread if I suspect cheating?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, with caution. Do this reading only when you are grounded enough to receive whatever comes — not at three in the morning after going through their phone, not in the middle of a panic spiral. Suspicion has its own gravity and will distort interpretation if you read while it is at full strength. Sit with the cards as if you genuinely want clarity rather than proof. If the part of you driving the reading is mostly looking for confirmation, pause. Come back when you can honestly say you want to see what is, not what you are afraid of.',
      },
    },
    {
      '@type': 'Question',
      name: "What if the third party isn't a person but something else?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The spread works for any outside force splitting the relationship. Work that consumes a partner entirely, an addiction that lives between you, an in-law or family member whose presence is corrosive, a deceased ex whose memory occupies more space than the living partner — all of these function as a third party. Read position three as the energy or entity rather than a person. The dynamic is the same: something is in the relationship that does not belong to the two of you, and clarity about its role is the start of choosing what to do about it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cards suggest an affair?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No single card confirms an affair, but several cluster around the theme. The Seven of Swords carries secrecy and concealment. The Five of Cups speaks to grief and what has been lost. The Three of Swords is the classic heartbreak triangle. The Moon points to what is hidden, illusion, things not seen clearly. The Devil suggests entanglement, compulsion or a bond someone cannot easily walk away from. Reversed Lovers can indicate misalignment or broken commitment. Read these as questions to sit with rather than answers — none of them, alone or together, is confirmation of anything beyond an atmosphere worth examining honestly.',
      },
    },
  ],
}

export default function ThirdPartyPage() {
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
        <span style={{ color: 'var(--gold)' }}>Third Party Spread</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>△</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Third Party Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          A four-card spread for love triangles, suspected affairs, and any outside influence pulling at a relationship. Not designed to assign guilt — designed to show each person's honest position so you can choose with clarity.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['4 Cards', 'Triangle', 'Hidden Dynamics'].map(tag => (
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
            This is one of the most emotionally loaded spreads in tarot, and that emotion is exactly what makes it dangerous to read carelessly. Done from a place of jealousy, suspicion or proof-seeking, the cards will mostly mirror your own activation back to you — every Seven of Swords will look like confirmation, every Moon like betrayal. Before you shuffle, ask whether you are looking for clarity or for ammunition. Only the first produces a useful reading.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            The spread serves both confirmed and suspected third parties, but the work is different in each case. With a confirmed third party, the reading helps you see the shape of what is, including the parts you may have been minimising or over-dramatising. With a suspected third party, it helps you locate the source of your unease — sometimes that source is your partner's behaviour, sometimes it is an unhealed wound from a previous relationship, sometimes it is your intuition speaking plainly. The cards will not always tell you which, but they will give you something more honest than your worst-case scenario to work with.
          </p>
          <p>
            Be clear about what you will do with what you see. A reading reveals; your discernment acts. The spread does not authorise you to confront, to leave, to forgive, or to stay quiet. Those are your choices, made with all the other information you have about your life, your partner and yourself. The cards add one more layer of honesty to that decision. They do not replace it.
          </p>
        </div>
      </div>

      {/* Spread layout */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          The Four Positions
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Lay the first three cards in a triangle — you, your partner, the third party — and place the fourth card beneath as the path through.
        </p>

        {/* Visual Layout */}
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>See the dynamic clearly</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Draw your four cards when you are grounded enough to receive what they show. Honest clarity is the start of any genuine choice.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/spreads/should-i-stay-or-should-i-go" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Stay or Go Spread
          </Link>
          <Link href="/spreads/healing-after-heartbreak" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Healing After Heartbreak
          </Link>
          <Link href="/spreads/love" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Love Spread
          </Link>
        </div>
      </div>
    </div>
  )
}
