import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Manifest Money Tarot Spread — 3 Card Inner Wealth Reading | TarotAxis',
  description: 'A 3-card tarot spread for manifesting money. Name the inner pattern shaping your relationship with money, recognise existing support, and find the concrete step that moves things forward.',
  alternates: {
    canonical: 'https://tarotaxis.com/manifestation/money',
    languages: {
      'en': 'https://tarotaxis.com/manifestation/money',
      'es': 'https://tarotaxis.com/es/manifestacion/dinero',
      'x-default': 'https://tarotaxis.com/manifestation/money',
    },
  },
  openGraph: {
    title: 'Manifest Money Tarot Spread — 3 Card Inner Wealth Reading',
    description: 'A 3-card tarot spread for manifesting money — name the pattern, find the support, take the concrete next step.',
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'Your Money Story',
    desc: 'The inherited belief, pattern or relationship with money currently shaping what you allow yourself to receive. Often older than this lifetime, certainly older than this year. The card names something you have been carrying without naming.',
  },
  {
    num: 2,
    name: 'What Already Supports You',
    desc: 'The resource, skill, relationship or quality of mind already with you that you can lean on. Not what you wish you had — what is here. The reading insists you stop overlooking the ground you are already standing on.',
  },
  {
    num: 3,
    name: 'The Concrete Next Step',
    desc: 'The specific, this-week action that would most directly shift your financial situation. Small enough to actually do, big enough to matter. Often something practical, occasionally something internal — but always something you can act on before next Sunday.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What tarot cards mean money is coming?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Ace of Pentacles signals a new financial opportunity or seed of abundance. The Nine of Pentacles points to abundance earned through your own effort and self-trust. The Six of Pentacles speaks to a healthy flow of giving and receiving. The Empress brings fertile creativity that often translates into income. The Page of Pentacles is a practical opportunity arriving — a job offer, a contract, an unexpected route. None of these guarantee money. They describe the conditions in which money tends to move toward you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can tarot help me get out of debt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tarot can help you see the pattern that keeps producing the debt — the avoidance, the inherited shame, the spending used to soothe something else. The actual getting-out is action plus structure: a written list of what you owe, a realistic monthly payment plan, an honest conversation with whoever needs to know. The cards will not replace the spreadsheet. What they can do is make it less psychologically expensive to open the spreadsheet, which for many people is the bottleneck.',
      },
    },
    {
      '@type': 'Question',
      name: "What if my 'next step' card looks small or boring?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It usually is — and that is the point. Manifestation lives in the small consistent moves, not the dramatic ones. The card might be telling you to send one email, ask one question, or finally check one balance you have been avoiding. The mind wants the next step to be cinematic so it can refuse it. The cards tend to suggest steps small enough that you cannot refuse on those grounds. Do the boring thing. Then draw again next month.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long until I see results after this reading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Results follow action, not draws. Give yourself four to six weeks of actively working with what came up — sitting with the money story, leaning on the support, taking the concrete step weekly — before you assess. Most people who report that manifestation worked say it took months, not days. Most people who report that it did not work stopped after the second week. The difference between the two groups is rarely the cards.',
      },
    },
  ],
}

export default function ManifestMoneyPage() {
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
        <span style={{ color: 'var(--gold)' }}>Manifest Money</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>◈</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Manifest Money Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          A three-card reading for the inner work behind your finances. Name the pattern shaping what arrives, recognise the support already with you, and find the small action that actually moves your situation forward.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['3 Cards', 'Money & Abundance', 'Inner Work'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Why this spread */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Why This Spread Works
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Money work is mostly nervous-system work. The patterns underneath earning and spending — the way you flinch at invoices, the way you over-give when you feel small, the way you avoid the bank app for a week after a hard month — were laid down long before you had a salary. Manifesting money without looking at this layer is like trying to fill a leaky bucket faster. The cards begin where the actual problem lives.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            There is a meaningful difference between manifestation and avoidance. Avoidance writes affirmations on the mirror and then refuses to open the spreadsheet. Manifestation does the inner work and then opens the spreadsheet. This spread will not let you bypass the second half. The third card always points to an action, and the action is usually something you already half-knew you needed to do.
          </p>
          <p>
            Read this spread when money is tight and read it when things are flowing — both are useful, and the reading lands differently in each. In scarcity, the cards tend to name the survival pattern and offer one stabilising move. In abundance, they tend to point at what you are quietly squandering and what would compound if you were honest about it. Run the spread monthly for a year and you will know yourself around money in a way that few people do.
          </p>
        </div>
      </div>

      {/* Spread layout */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          The Spread — Three Cards
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Shuffle with a single, honest question: <em>What do I need to see about my relationship with money right now?</em> Draw three cards from left to right.
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
                <div style={{ fontSize: '.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center', maxWidth: 84 }}>{pos.name}</div>
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Continue the inner work</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Money and success often unblock together. Pair this spread with the success reading, or return to the full set.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/manifestation/success" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Manifest Success
          </Link>
          <Link href="/manifestation" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            All Manifestation Spreads
          </Link>
          <Link href="/spreads" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            All Spreads
          </Link>
        </div>
      </div>
    </div>
  )
}
