import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gratitude and Growth Daily Tarot Spread — Two Card Morning Draw | TarotAxis',
  description: 'A two-card morning tarot practice pairing gratitude and growth. Begin the day full, not hungry — honour what is already here, then lean into your edge.',
  alternates: {
    canonical: 'https://tarotaxis.com/daily/gratitude-and-growth',
    languages: {
      'en': 'https://tarotaxis.com/daily/gratitude-and-growth',
      'es': 'https://tarotaxis.com/es/carta-del-dia/gratitud-y-crecimiento',
      'x-default': 'https://tarotaxis.com/daily/gratitude-and-growth',
    },
  },
  openGraph: {
    title: 'Gratitude and Growth Tarot — Two Card Daily Spread',
    description: 'Pair the appreciative and the aspirational in a two-card morning tarot draw. A grounded daily practice for full-not-hungry living.',
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'Gratitude',
    desc: 'What to honour about today before it begins. The card names what is already good, already working, already on your side — the things you risk overlooking because they have become quietly familiar. Reading this first sets the day on full instead of hungry.',
  },
  {
    num: 2,
    name: 'Growth',
    desc: 'The edge to lean into today. The place that is asking to expand — a skill, a conversation, a way of being. The growth card is not a to-do item; it is the direction your becoming is pointing in. Small, deliberate steps in the direction of the card are usually enough.',
  },
]

const PROMPTS = [
  'What is the gratitude card naming that I have been treating as ordinary, even though it is not?',
  'Who or what would I thank today if I let myself feel it fully?',
  'Where exactly does the growth card want me to lean today — what is the smallest first move?',
  'If gratitude and growth were both equally honoured today, how would my pace change?',
  'Is there a place where I have been pursuing growth from a deficit rather than from fullness?',
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a gratitude and growth tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A gratitude and growth tarot spread is a two-card daily draw. The first card names something to honour about today — what is already good, present, or working. The second card names the edge you are being invited to lean into — where your becoming wants to move. Reading them as a pair anchors the day in fullness before reaching toward more.',
      },
    },
    {
      '@type': 'Question',
      name: 'When in the day should I do this draw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morning, ideally before you begin work or check your phone. The spread is designed to set the day\'s tone — to remind you of what is already here before you start chasing what is not. Five minutes with a cup of tea and a journal is the classic version of the practice.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from a regular daily card?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A single daily card gives you one theme. The gratitude and growth pair gives you a balanced foundation: appreciation for what is, and direction toward what wants to come next. This pairing prevents the daily practice from drifting either into pure self-soothing (gratitude only) or into pure self-improvement (growth only). The two together are the practice.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my growth card looks like a challenge I do not want?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Growth often looks like an inconvenience at first. A Five of Pentacles in the growth position may not be predicting hardship — it could be pointing to the way you treat scarcity, the relationship with asking for help, or your assumptions about what you can afford to lose. Read it as a direction of inquiry, not an instruction to take on a new burden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use this with any tarot deck?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The spread is independent of any specific deck. Rider-Waite-Smith, Marseille, Thoth, and any modern indie deck all work. What matters is that you trust the deck enough to let the cards speak honestly. If you are new to tarot, a Rider-Waite-Smith-based deck is usually easiest to read because the imagery is illustrative and most card-meaning resources are written for it.',
      },
    },
  ],
}

export default function GratitudeAndGrowthDailyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/daily" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Daily</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Gratitude and Growth</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>🌱</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Gratitude and Growth Daily Tarot
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
            A two-card morning practice. Honour what is already here, then lean into your edge. Begin the day full, not hungry.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            About This Practice
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Most mornings have a default tilt. Either you wake up listing what is wrong — the inbox, the deadline, the thing left undone — or you wake up listing what you want to fix, build, or become. Both lists are honest, but neither, on its own, is a good starting point for a day.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            The gratitude and growth draw is a counterweight. You pull one card to anchor the day in what is already good — the appreciative card. Then you pull one card to point toward what is asking to expand — the aspirational card. Read together, they create a posture: full but still reaching, settled but not stagnant.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            It is a useful practice for high-output people who tend to skip gratitude on the way to the next goal, and equally useful for people who lean so far into appreciation that they forget growth is part of being alive. The pair is the medicine.
          </p>
        </div>

        {/* How to do it */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '1rem' }}>
            How to Do the Draw
          </h2>
          <ol style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', paddingLeft: '1.2rem', margin: 0 }}>
            <li style={{ marginBottom: '.6rem' }}>Before reaching for the deck, take three slow breaths. Let the morning land in your body before you start asking it questions.</li>
            <li style={{ marginBottom: '.6rem' }}>Shuffle while holding a simple two-part intention: <em>show me what to be grateful for, and where to grow.</em></li>
            <li style={{ marginBottom: '.6rem' }}>Draw two cards and lay them side by side. The first is gratitude. The second is growth.</li>
            <li style={{ marginBottom: '.6rem' }}>Read the gratitude card first. Let it sit. Resist the urge to skim it for the next card. Real gratitude takes a beat to register.</li>
            <li style={{ marginBottom: '.6rem' }}>Then read the growth card. Ask what direction it is pointing, and what the smallest, most honest first step would be — not the most heroic one.</li>
            <li>Note both cards in your journal. A single line per card is enough on busy days; longer entries are welcome on slow ones.</li>
          </ol>
        </div>

        {/* Position meanings */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            The Two Positions
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Each position has its own register. Hold these in mind as you read the cards.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS.map(({ num, name, desc }) => (
              <div key={num} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.1rem', background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12 }}>
                <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem' }}>{num}</div>
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', marginBottom: '.3rem' }}>{name}</div>
                  <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Journal prompts */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Journal Prompts
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: '.88rem', margin: '0 0 1rem' }}>
            Pick one or two. The aim is honest contact with the cards, not a thorough write-up.
          </p>
          <ul style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.9rem', paddingLeft: '1.2rem', margin: 0 }}>
            {PROMPTS.map(p => <li key={p} style={{ marginBottom: '.5rem' }}>{p}</li>)}
          </ul>
        </div>

        {/* When to use this variant */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            When to Choose This Variant
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Reach for this draw when the day already feels full but unfocused — too many directions, too much possibility, no clear thread to pull. The gratitude card slows you down enough to feel where you actually are. The growth card gives you one direction to lean into rather than ten.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            It is especially good as a Monday morning practice, at the start of a new season, or in the first week back from a break — any time you want to re-anchor without overwhelming yourself with a longer reading. Where the standard daily card is your everyday companion, this variant is the spread that sets a tone for whole weeks if you commit to it consistently.
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
