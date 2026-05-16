import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Morning, Afternoon, Evening Tarot — Three Card Daily Spread | TarotAxis',
  description: 'A three-card daily tarot practice mapping the energy of morning, afternoon, and evening. A temporal map for busy days when you want a thread to hold.',
  alternates: {
    canonical: 'https://tarotaxis.com/daily/morning-afternoon-evening',
    languages: {
      'en': 'https://tarotaxis.com/daily/morning-afternoon-evening',
      'es': 'https://tarotaxis.com/es/carta-del-dia/manana-tarde-noche',
      'x-default': 'https://tarotaxis.com/daily/morning-afternoon-evening',
    },
  },
  openGraph: {
    title: 'Morning, Afternoon, Evening Tarot — Three Card Daily Spread',
    description: 'Map your day with a three-card daily tarot draw — one card for morning, one for afternoon, one for evening.',
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'Morning',
    desc: 'The energy to enter the day with. The card describes the quality of attention, the tone, the foot you want to start on. It is less a forecast than a posture — what to bring rather than what to expect.',
  },
  {
    num: 2,
    name: 'Afternoon',
    desc: 'What mid-day will ask. The shift, the challenge, or the opening that arrives once the day is in motion. This card often points to a specific moment — a conversation, a decision, a turning of energy that you want to be ready for.',
  },
  {
    num: 3,
    name: 'Evening',
    desc: 'How to close, and what to integrate. The card names what wants to be released, completed, or simply rested with. Reading it in the morning gives you a quiet target — a way of knowing in advance how you want the day to land.',
  },
]

const PROMPTS = [
  'Which of the three cards has the strongest pull on me right now, and why?',
  'If the morning card sets the tone, what is one concrete thing I want to do before 10am?',
  'What does the afternoon card warn me about, or invite me into?',
  'If I had to close the day the way the evening card suggests, what would I have to stop doing by what time?',
  'Where in the day am I most likely to drift away from the spread\'s thread?',
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a morning, afternoon, evening tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A three-card daily spread that maps the day temporally: the first card describes the energy or posture for morning, the second names what mid-day will ask, and the third points to how to close the evening. It is a useful practice for busy days when you want a single coherent thread to hold across changing demands.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this the same as a past, present, future spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, although they share a three-card structure. A past-present-future spread looks across a longer timeline and is usually drawn around a specific question. The morning-afternoon-evening spread is bounded by a single day, drawn without a specific question, and reads as a temporal map rather than a story arc. It is closer in spirit to a daily check-in than to a divinatory reading.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I do this draw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'First thing in the morning, before the day fills with other people\'s requests. The whole point is that the spread acts as a thread you can return to throughout the day — at lunch, in mid-afternoon slumps, before you wind down. Drawing it later in the day still works, but you lose the morning reference point.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I keep getting the same card in the same position?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Repeated cards are a signal, not a glitch. If your morning card has been the Eight of Pentacles for a week, the deck is suggesting your mornings have become very work-focused — possibly to a useful degree, possibly to an unsustainable one. Note the repetition in your journal and ask whether the pattern is serving you or running you.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from a single daily card?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A single daily card gives you one theme to hold across the whole day. A three-card temporal spread gives you a more textured map — useful when the day has clearly distinct phases, like a busy meeting morning, a creative afternoon, and a social evening. The three-card version is heavier; reserve it for days where the extra structure earns its weight.',
      },
    },
  ],
}

export default function MorningAfternoonEveningDailyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/daily" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Daily</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Morning, Afternoon, Evening</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>🌅</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Morning, Afternoon, Evening Tarot
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
            A three-card daily practice mapping the energy of the day in three movements. A temporal map for busy days where you want a single thread to hold.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            About This Practice
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Some days are not really one day. They are three smaller days stitched together — a quiet, focused morning, a noisy and demanding afternoon, a slow and social evening. A single daily card has trouble carrying all of that at once. By lunchtime the morning&apos;s theme already feels distant, and by the evening you have forgotten what you drew at all.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            The morning-afternoon-evening spread solves this by giving each phase its own card. You pull three cards in the morning, line them up in order, and you have a temporal map for the day. Each card belongs to its own window, but the three together form a single thread you can keep coming back to.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            It is the daily variant most useful for busy people. The structure is doing real work — it stops you from misplacing the day&apos;s guidance the moment things get demanding.
          </p>
        </div>

        {/* How to do it */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '1rem' }}>
            How to Do the Draw
          </h2>
          <ol style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', paddingLeft: '1.2rem', margin: 0 }}>
            <li style={{ marginBottom: '.6rem' }}>Begin in the morning, before the day&apos;s first proper task. Glance at your calendar so you have a rough sense of the shape of the day.</li>
            <li style={{ marginBottom: '.6rem' }}>Shuffle while holding a simple intention: <em>show me the morning, the afternoon, and the evening.</em></li>
            <li style={{ marginBottom: '.6rem' }}>Draw three cards. Lay them out left to right — morning, afternoon, evening — without flipping them yet.</li>
            <li style={{ marginBottom: '.6rem' }}>Turn the morning card first. Read it and let it settle. Set a posture for the next few hours based on what it names.</li>
            <li style={{ marginBottom: '.6rem' }}>Turn the afternoon card. Skim it briefly, then leave it alone until just before lunch. Re-reading it then is the practice.</li>
            <li style={{ marginBottom: '.6rem' }}>Turn the evening card. Again, skim and leave it. Return to it in the late afternoon as you start to wind down.</li>
            <li>End the day with a brief journal entry: which card was most accurate, which was most useful, which surprised you. Three sentences total.</li>
          </ol>
        </div>

        {/* Position meanings */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            The Three Positions
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Each position has its own register. Hold the question for that phase in mind as you read the card.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS.map(({ num, name, desc }) => (
              <div key={num} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.1rem', background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12 }}>
                <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem' }}>{num}</div>
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', marginBottom: '.3rem' }}>{name}</div>
                  <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reading tips */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Reading the Sequence
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Look for the arc the three cards make together, not just their individual meanings. A morning of Two of Swords, an afternoon of Five of Wands, and an evening of Four of Cups tells a clear story — indecision in the morning hardens into conflict by mid-day and leaves you withdrawn in the evening. Knowing that in advance lets you intervene earlier.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Major Arcana in any position tend to carry extra weight; if one shows up, that phase of the day is asking for genuine presence. Court cards often signal specific people. Pay attention to repetition across days — the same card returning to the same time-slot is the deck underlining something worth attending to.
          </p>
        </div>

        {/* Journal prompts */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Journal Prompts
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: '.88rem', margin: '0 0 1rem' }}>
            Use these at the end of the day to integrate the spread. One or two answers is plenty.
          </p>
          <ul style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.9rem', paddingLeft: '1.2rem', margin: 0 }}>
            {PROMPTS.map(p => <li key={p} style={{ marginBottom: '.5rem' }}>{p}</li>)}
          </ul>
        </div>

        {/* When to use this variant */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            When to Choose This Variant
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Reach for the three-card temporal spread on days with clearly different phases: a focused morning of deep work, an afternoon of meetings, an evening of family or rest. It is also good when you are travelling, when you are in the middle of a long project sprint, or when your week has felt blurred and you want to feel each phase distinctly again.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Avoid it on slow, formless days — the structure will feel imposed rather than supportive. On those days, the standard daily card or the balance draw is a better fit. The morning-afternoon-evening spread earns its weight when there is genuinely a day to map.
          </p>
        </div>

        {/* FAQ */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
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
