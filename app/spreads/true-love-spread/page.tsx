import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'True Love Tarot Spread — 7 Card Relationship Deep Dive | TarotAxis',
  description: 'A 7-card true love tarot spread for exploring the full energy of a romantic connection — feelings, strengths, challenges, and the path forward.',
  alternates: { canonical: 'https://tarotaxis.com/spreads/true-love-spread' },
  openGraph: {
    title: 'True Love Tarot Spread — 7 Card Relationship Deep Dive',
    description: 'A 7-card tarot spread for exploring the full energy of a romantic connection — feelings, strengths, challenges, and the path forward.',
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'Your Feelings',
    desc: 'What you actually feel for this person, beneath the story you tell about them and the version of yourself you hope to be in the relationship. This card cuts through expectation and surfaces the unedited emotional truth — sometimes more tender than you admit, sometimes more ambivalent than you wish.',
  },
  {
    num: 2,
    name: 'Their Feelings',
    desc: 'The honest emotional truth of their experience of you. Not what they have said, not what you fear, not what you have decided about them — what is actually moving in their inner life when they think of you. This card invites you to release projection and meet them where they are.',
  },
  {
    num: 3,
    name: 'The Heart of the Connection',
    desc: 'What this relationship is fundamentally about, energetically. The soul-purpose between you both — whether it is to heal a particular wound, to build a family, to teach one another a specific lesson, or to anchor a long, quiet companionship. The why beneath the daily fact of you.',
  },
  {
    num: 4,
    name: 'What You Bring to Them',
    desc: 'The specific gift, healing, challenge or growth your presence offers them. Often it is not the obvious thing — not your loyalty or your humour, but something quieter you may not have recognised in yourself. This card names what they are receiving by being in relationship with you.',
  },
  {
    num: 5,
    name: 'What They Bring to You',
    desc: 'What their presence offers you — including the challenges that turn out to be the teachings. Some of what they bring will feel like comfort; some will feel like friction that is doing patient work on a part of you that needed it. Both belong here, and both are gifts.',
  },
  {
    num: 6,
    name: 'Where Friction Lives',
    desc: 'The genuine difficulty in the connection — the place where growth is most demanded of you both. Not the surface argument but the deeper structural tension underneath it: the mismatched need, the unhealed pattern that meets another unhealed pattern, the value you each hold differently.',
  },
  {
    num: 7,
    name: 'The Path Forward',
    desc: 'The next chapter — how the connection is most likely to evolve if both of you continue to show up honestly. This card is a probability, not a verdict. It describes the trajectory the current energy is creating, and gives you room to choose whether to walk it.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When is the right time to use this spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When the relationship is real enough to have weight. Usually that means three months in at minimum, and often longer — once the early projection has thinned and the two of you have begun to see one another with something closer to clarity. Used too early, the spread reads the fantasy rather than the connection. Used in an established relationship, even a difficult one, it has a great deal to say. If you find yourself drawn to it after only weeks, that is worth noticing in itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do this for a long-distance relationship?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The spread reads energy, not proximity. Long-distance connections often carry an unusually clear energetic signature precisely because so much of the relationship lives in language, attention and intention rather than shared rooms. The cards will not be confused by geography. If anything, the friction card may speak to the specific strain of distance itself — the unmet need for presence, the way time zones become a structural difficulty rather than a personal failing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does it mean if the friction card is intense?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Intensity in the friction position is normal and often a good sign of how alive the connection is. Most strong relationships include strong friction — the precise places where you grate against one another are usually the precise places real growth is on offer. An intense friction card asks you to lean toward the difficulty rather than away from it, and to bring more honesty, not less. It only becomes a warning if it pairs with consistent disconnection in the feelings cards as well.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I share the results with my partner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Consider keeping it private at first, especially the cards about their inner experience. Readings shared too eagerly can become loaded — a card on the table can quickly turn into a weapon in an argument, or a tool for arranging your partner into the shape you wanted. Sit with the reading yourself for at least a week. If something genuinely useful emerges that belongs in conversation, bring the insight rather than the cards, and bring it as your reflection rather than evidence.',
      },
    },
  ],
}

export default function TrueLoveSpreadPage() {
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
        <span style={{ color: 'var(--gold)' }}>True Love Spread</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>♡</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          True Love Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          A comprehensive seven-card relationship deep dive — the full-picture spread for connections that already have weight. Use it to read both inner worlds, the shared purpose between you, the genuine friction, and the trajectory you are quietly creating together.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['7 Cards', 'Deep Dive', 'Established Love'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Energy / About */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          About This Spread
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Seven cards is the natural depth for an established relationship. Fewer feels rushed — three cards can name a flavour, but they cannot honour the strange, layered architecture of two lives that have begun to weave through one another. More than seven tips into something indulgent, where the reader starts drowning in detail and the through-line of the connection blurs. Seven gives you room for both inner worlds, the shared centre, what each of you offers, the genuine difficulty, and the direction of travel — a complete portrait without becoming an interrogation.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            The single most important discipline with this spread is to do it for the actual relationship rather than a fantasy version of it. It is tempting, particularly when something is wobbling, to read the partnership you wish you had — the one where they are kinder, you are calmer, and the friction is someone else's fault. The cards will cooperate with that fantasy and tell you nothing useful. Read instead for the relationship as it stands on an ordinary Tuesday. The honesty of the question shapes the honesty of the answer.
          </p>
          <p>
            When the friction card delivers something pointed, lean in rather than running. Most readers discover that the difficulty named in position six is also the doorway named in position seven — the place where the relationship is most demanding is also where it is most alive, and the work it is asking for is the work that turns a connection into a partnership. Friction is not a verdict. It is an invitation to bring something braver than you have brought so far.
          </p>
        </div>
      </div>

      {/* Spread */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          The Seven Cards
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Hold the relationship in mind as you shuffle — not the person alone, but the whole field between you. Draw the seven cards in order and resist the urge to interpret as you go. Lay the spread first, then read.
        </p>

        {/* Visual Layout */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Card Layout
          </div>
          <div style={{ display: 'flex', gap: '.85rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Ready to read the full picture?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Draw your seven cards in a quiet hour, then sit with them before reaching for interpretation. The related spreads below carry the conversation further.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/spreads/love" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Love Spread
          </Link>
          <Link href="/spreads/should-i-stay-or-should-i-go" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Stay or Go
          </Link>
          <Link href="/spreads/celtic-cross" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Celtic Cross
          </Link>
        </div>
      </div>
    </div>
  )
}
