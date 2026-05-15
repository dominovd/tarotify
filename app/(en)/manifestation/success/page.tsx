import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Manifest Success Tarot Spread — 3 Card Achievement Reading | TarotAxis',
  description: 'A 3-card tarot spread for manifesting success. Identify what is in the way, what is already strengthening you, and the action that genuinely compresses time toward the goal.',
  alternates: {
    canonical: 'https://tarotaxis.com/manifestation/success',
    languages: {
      'en': 'https://tarotaxis.com/manifestation/success',
      'es': 'https://tarotaxis.com/es/manifestacion/exito',
      'x-default': 'https://tarotaxis.com/manifestation/success',
    },
  },
  openGraph: {
    title: 'Manifest Success Tarot Spread — 3 Card Achievement Reading',
    description: 'A 3-card tarot spread for manifesting success. Identify what is in the way, what is already strengthening you, and the action that compresses time.',
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'What Is in the Way',
    desc: 'The internal pattern most actively undermining the success you want. Rarely a skill deficit; usually a self-belief, a fear of visibility, or an old definition of "enough" that no longer fits. This card asks you to name the block you have been quietly working around rather than through.',
  },
  {
    num: 2,
    name: 'What Strengthens Your Direction',
    desc: 'The quality, value, capacity or external support already pointing you toward the goal. The momentum you have but may not be claiming. This card names the resource you have been undercounting — and that is precisely the one to lean on now.',
  },
  {
    num: 3,
    name: 'The Action That Compresses Time',
    desc: 'The specific, this-month move that does more for your trajectory than any other. Often counterintuitive — a no rather than a yes, a small bet rather than a big one. This card points to the lever, not the labour.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What tarot cards mean success is coming?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Several cards in the tarot tradition carry a strong success signature. The Sun is the clearest — full visibility, recognition and achievement without ambiguity. The World indicates the completion of a cycle, often accompanied by external acknowledgement. The Six of Wands speaks specifically to public recognition and being seen for your work. The Nine of Pentacles points to abundance built from your own sustained effort, while The Star reflects alignment with the path that genuinely belongs to you. None of these cards predict success on their own — they describe what success feels like when it arrives.',
      },
    },
    {
      '@type': 'Question',
      name: "Can tarot tell me whether I'll succeed?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — and the question itself often reveals the block. Tarot does not predict outcomes; it reflects the conditions, patterns and choices currently shaping your trajectory. Asking whether you will succeed usually points to a deeper hesitation about whether you are allowed to want what you want, or whether you trust yourself to act on it. Success is built, not predicted. A more useful question is: what would I need to recognise, choose or release for the success I want to become possible? The cards answer that one well.',
      },
    },
    {
      '@type': 'Question',
      name: "What if the 'action that compresses time' card looks unrelated to my goal?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It usually is, on the surface — and that is the point. Manifestation cards in this position frequently point sideways because direct paths to the obvious next step rarely exist. The card might suggest rest when you expected hustle, a conversation when you expected a launch, or a refusal when you expected a yes. Sit with the apparent mismatch for a few days before dismissing it. The actions that genuinely compress time toward a goal are almost always the ones that look unrelated until they work.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from a career tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A career spread is about the work itself — the role, the next move, the strategy. A manifest success spread sits one layer deeper: it is about your relationship with achievement. Many people have clear career plans and still cannot manifest success because the inner work has not been done — there is ambivalence about being seen, an old definition of enough, or a fear of what success would cost. This spread treats success as an inner posture before it is an outer outcome, which is usually where the real obstacle lives.',
      },
    },
  ],
}

export default function ManifestSuccessPage() {
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
        <Link href="/manifestation" style={{ color: 'var(--muted)' }}>Manifestation</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Manifest Success</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Manifest Success Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          A focused three-card reading for the achievement you have been quietly circling. This spread names the block you have been working around, the strength you have not been claiming, and the single action that does more than any other.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['3 Cards', 'Achievement', 'Inner Work'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Why this spread */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Why This Spread
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Most blocks to success are not really about effort. They are about ambivalence — wanting and not-wanting the thing at the same time. You want the promotion and you want to avoid being visible. You want the launch and you want to stay quietly in development. You want the recognition and you fear what it will ask of you. This spread is built for that fork, where the obstacle is rarely a lack of capability and almost always a quiet contradiction the conscious mind has not yet named.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            This is not a generic career reading. A career spread looks at the work — the role, the move, the strategy. A manifest success spread looks at your relationship with achievement itself. That is usually a harder, more honest layer. It asks whether you have actually decided you are someone who is allowed to want this, and whether the version of you who arrives at success is a version you have made room for. Owning what you actually want is often the hardest part of getting it.
          </p>
          <p>
            If the "in the way" card surfaces something you do not want to address, treat that as a signal rather than a verdict. The cards are not telling you to fix yourself today; they are telling you where the leverage is. Sit with the card for a few days. Notice what you do not want to admit about it. That noticing — not any heroic act of self-improvement — is usually what shifts the pattern. The work is honesty, repeated quietly, over time.
          </p>
        </div>
      </div>

      {/* Spread layout */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          The Three Card Spread
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Three cards, drawn in order. The first names the block, the second names the strength, the third names the lever. Read them as a single statement rather than three separate cards.
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Ready to draw your three cards?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Use our free tarot tool to draw your cards, then return here to interpret each position honestly.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/manifestation/money" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Manifest Money Spread
          </Link>
          <Link href="/spreads/career" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Career Spread
          </Link>
          <Link href="/manifestation" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            All Manifestation Spreads
          </Link>
        </div>
      </div>
    </div>
  )
}
