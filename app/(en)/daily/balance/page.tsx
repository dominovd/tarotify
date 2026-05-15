import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Daily Balance Tarot — One Card Draw with Reflection Prompts | TarotAxis',
  description: 'A gentle one-card daily tarot practice focused on balance. Draw a single card and sit with five reflection prompts on where your energy is out of balance today.',
  alternates: {
    canonical: 'https://tarotaxis.com/daily/balance',
    languages: {
      'en': 'https://tarotaxis.com/daily/balance',
      'es': 'https://tarotaxis.com/es/carta-del-dia/equilibrio',
      'x-default': 'https://tarotaxis.com/daily/balance',
    },
  },
  openGraph: {
    title: 'Daily Balance Tarot — One Card Draw',
    description: 'A single-card daily tarot practice with five focused reflection prompts. The gentlest variant — for days when less is what you need.',
  },
}

const PROMPTS = [
  'What is one thing I am giving too much of today — time, attention, worry, energy?',
  'What is asking for less of my attention, even if it feels difficult to step back from?',
  'Where am I leaning hard in one direction and ignoring the counterweight?',
  'If my body could choose how today is spent, what would it ask for first?',
  'What is the smallest adjustment I could make today that would bring me back toward centre?',
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a daily balance tarot draw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A daily balance tarot draw is a single-card practice focused on the question, "where am I out of balance today?" Instead of asking about love, work, or a specific situation, the draw deliberately stays broad — the card surfaces wherever your energy is most lopsided, and reflection prompts help you find the small adjustment that restores centre.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from a regular daily card?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard daily card sets a theme for the day. The balance draw asks a more specific question — where you are off-centre — and pairs the card with reflection prompts designed to surface the imbalance gently. It is the same one-card structure, but the framing is more focused and the journalling is doing more of the work.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I have no bandwidth for journalling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The balance draw is designed for exactly those days. You do not have to write anything. Read the card, pick one of the five prompts, hold it in mind for a minute, and go about your day. Even thirty seconds of honest contact with the prompt is enough — the practice is in the noticing, not the writing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the balance draw answer specific questions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is not designed to. The strength of the practice is in the broad framing — letting the deck point to wherever the imbalance is biggest, rather than constraining the answer to one area of life. If you have a specific question (a relationship, a decision, a project), use a full reading rather than the balance draw.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I use this variant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On low-bandwidth days. After difficult sleep, in the middle of an intense work week, in the days after travelling, when you are recovering from illness, or any time the idea of doing a multi-card spread feels like one more thing to manage. Ironically, those are the days the practice tends to be most useful — the imbalance is usually most acute when you have the least capacity to look at it.',
      },
    },
  ],
}

export default function BalanceDailyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/daily" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Daily</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Balance</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>⚖</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Daily Balance Tarot
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
            A single-card daily practice with five focused reflection prompts. The gentlest variant — for days when the simplest practice is what you most need.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            About This Practice
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            There is a small irony in daily tarot practice: the days when you most need a check-in are usually the days when you have the least capacity to do one. A two-card or three-card spread feels like work. A long journal session feels like a luxury you cannot afford. So the practice quietly gets skipped on exactly the days it would have helped most.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            The balance draw exists for those days. It is one card. The question behind the draw is fixed and broad: <em>where am I out of balance today?</em> No specific area of life, no detailed framing — just an invitation for the deck to point to wherever the imbalance is loudest. Five prompts sit underneath the card. You pick one. You read it once. That is the practice.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            What it lacks in complexity it makes up for in honesty. Over weeks of consistent use, the balance draw tends to surface long-standing patterns more reliably than any of the larger spreads. You begin to notice which directions you keep tilting in, which counterweights you habitually ignore, and how rarely your idea of balance matches your body&apos;s.
          </p>
        </div>

        {/* How to do it */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '1rem' }}>
            How to Do the Draw
          </h2>
          <ol style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', paddingLeft: '1.2rem', margin: 0 }}>
            <li style={{ marginBottom: '.6rem' }}>Pick up your deck without preparing anything elaborate. The whole point of this practice is its lightness.</li>
            <li style={{ marginBottom: '.6rem' }}>Shuffle briefly while holding the question: <em>where am I out of balance today?</em></li>
            <li style={{ marginBottom: '.6rem' }}>Draw one card. Look at it. Notice the first feeling that arises — a wince, a recognition, a softening, anything.</li>
            <li style={{ marginBottom: '.6rem' }}>Read the card&apos;s general meaning if you need to, but trust the felt response first. The card is naming a direction of tilt, not delivering instructions.</li>
            <li style={{ marginBottom: '.6rem' }}>Choose one of the five reflection prompts below. Just one. Hold it lightly in mind as you read the card again.</li>
            <li>If you have a minute, write one sentence in your journal. If not, the practice is still complete.</li>
          </ol>
        </div>

        {/* The single position */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            The Question Behind the Card
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            One card, one question. Hold the question gently — not as an interrogation, but as a quiet curiosity.
          </p>
          <div style={{ display: 'flex', gap: '1rem', padding: '1rem 1.1rem', background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12 }}>
            <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem' }}>1</div>
            <div>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', marginBottom: '.3rem' }}>Where am I out of balance today?</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.65, margin: 0 }}>
                The card points to wherever your energy is most lopsided — where you are giving too much or too little, leaning hard in one direction and ignoring the counterweight. It will not always be obvious. Sometimes the imbalance the deck names is one you have not yet recognised as one. Read the card as a direction of attention, not a verdict.
              </p>
            </div>
          </div>
        </div>

        {/* Reflection prompts */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Five Reflection Prompts
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: '.88rem', margin: '0 0 1rem' }}>
            Pick one — only one. The point is gentle, focused attention, not a thorough self-audit.
          </p>
          <ul style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.9rem', paddingLeft: '1.2rem', margin: 0 }}>
            {PROMPTS.map(p => <li key={p} style={{ marginBottom: '.5rem' }}>{p}</li>)}
          </ul>
        </div>

        {/* Reading tips */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Reading the Card for Balance
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Every card in the deck can speak to balance — even the ones that seem one-sided. Strength upright might be pointing to where you are overextending your patience. The Ten of Wands might be naming the load you have agreed to carry that was never yours. A bright card like the Sun could be flagging that you are performing brightness instead of resting.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Read the card softly. Ask what it would mean for the energy it depicts to be present in moderation, and what too much or too little of it would look like in your day. That gap — between the card&apos;s ideal and your actual — is usually where the imbalance lives.
          </p>
        </div>

        {/* When to use this variant */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            When to Choose This Variant
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Reach for the balance draw on low-bandwidth days — after broken sleep, in the middle of a hard week, on days when you woke up already behind. It is also a beautiful practice during recovery — from illness, from grief, from any season where the larger spreads feel too demanding to face.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Use it as a default when the other variants feel like too much. The simplest practice is often the most needed, and the balance draw is the one most likely to actually get done on the days that count.
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
          <Link href="/daily" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Today&apos;s card</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Standard daily tarot →</div>
          </Link>
          <Link href="/free-reading" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Try it now</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Free tarot reading →</div>
          </Link>
          <Link href="/cards" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Card meanings</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>All 78 cards →</div>
          </Link>
          <Link href="/tarot-journal" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Keep a record</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Tarot journal →</div>
          </Link>
        </div>

      </div>
    </>
  )
}
