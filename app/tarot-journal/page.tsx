import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tarot Journal — How to Keep One & Why It Transforms Your Practice | TarotAxis',
  description: 'A practical guide to keeping a tarot journal — what to record, how to structure entries, prompt templates, and why journaling is the fastest way to learn the cards.',
  alternates: { canonical: 'https://tarotaxis.com/tarot-journal' },
  openGraph: {
    title: 'Tarot Journal — How to Keep One & Why It Transforms Your Practice',
    description: 'A practical guide to keeping a tarot journal — what to record, how to structure entries, prompt templates, and why journaling is the fastest way to learn the cards.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is keeping a tarot journal helpful?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A journal does three things at once. It forces you to articulate each card in your own words, which is the only way the meanings stop being borrowed and start becoming yours. It makes patterns across readings visible — a card that keeps reappearing, a position that keeps being blocked, a question you keep circling. And it separates the moment of reading from the moment of interpretation, which is where most beginners tangle themselves. Writing slows the practice down enough to actually learn from it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I write in a tarot journal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At minimum: the date, the question or intention, the spread you used, the cards drawn with any reversals noted, and your interpretation in your own words before you consult any reference material. Then leave space to come back later — a week, a month — and add what actually happened, what the cards seem to have been pointing at in retrospect, and which meanings landed and which did not. The before-and-after is where the real learning lives.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a physical tarot journal or is digital fine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both work, and they work differently. A physical notebook slows you down, encourages longer reflection, and keeps the practice tactile alongside the cards themselves. A digital journal is searchable, easy to revise, and lets you spot patterns across months of entries with a quick filter. Many established readers use both — a physical book for full readings and a digital log for daily draws and pattern-tracking. Choose whichever you will actually keep, and switch later if you need to.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to see results from journaling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'About four to six weeks of consistent entries before the cards start to feel noticeably more familiar — you begin to recognise them by their texture rather than by their textbook meaning. Around the three-month mark, patterns across readings become clearly visible, and you can see which cards you tend to draw in particular life seasons. The journal compounds: six months of entries teaches you more about your own readings than any single book on tarot can.',
      },
    },
  ],
}

const recordItems = [
  {
    name: 'Date and Time',
    body: 'Sounds trivial, but it is the spine of the whole journal. Without dates you cannot track patterns, and patterns are most of the value. Note the time of day too if you read at varied hours — readings at midnight tend to have a different colour than morning ones.',
  },
  {
    name: 'Question or Intention',
    body: 'Write the question exactly as you asked it, not a tidied-up version. The phrasing matters: a question that started as "Will he come back?" and quietly became "What is this connection teaching me?" is itself useful information about where you are.',
  },
  {
    name: 'Spread Used',
    body: 'The name of the spread and a quick note on the positions. If you invented the spread on the spot, sketch it. Future-you needs to know which card was answering which question — a three-card draw means nothing without knowing what each position represented.',
  },
  {
    name: 'Cards Drawn (with Reversals)',
    body: 'List them in order, noting which were reversed. A small diagram or a quick photograph of the layout is worth keeping. Reversals especially are easy to forget, and a reversed card read as upright a week later will quietly mislead you.',
  },
  {
    name: 'Immediate Emotional Reaction',
    body: 'One or two words, written before you start interpreting. Relief, dread, recognition, confusion, resistance. Your gut response to a spread often carries more information than the careful reading that follows — and it is the first thing memory will erase.',
  },
  {
    name: 'Your Interpretation — Before Reference',
    body: 'Read the spread in your own words first, with the book closed. This is the single most valuable habit in the whole practice. The temptation is to look up each card immediately; resist it. Write what you see, then consult references afterwards and note where they confirmed or shifted your reading.',
  },
  {
    name: 'In Retrospect (a Week Later)',
    body: 'Leave blank space and come back. What do the cards seem to have been pointing at, now that some time has passed? Often the meaning that felt obscure in the moment becomes plain a week on — and that retrospective reading is what teaches you to recognise the same pattern next time.',
  },
  {
    name: 'Outcome — What Actually Happened',
    body: 'The honest record of how the situation unfolded, with no smoothing. Did the reading land? Where did it miss? Where did it land in a way you only recognised later? Outcomes logged over months are how you calibrate your own readings against reality.',
  },
]

const templates = [
  {
    name: 'Daily Card Template',
    blurb: 'For a single-card morning draw. Two minutes to fill in, one minute in the evening.',
    fields: [
      'Date',
      'Card (and reversal, if any)',
      'One-word reaction',
      'Where this card might appear today',
      'Evening reflection: did it? In what form?',
    ],
  },
  {
    name: 'Full Reading Template',
    blurb: 'For multi-card spreads. The structure that does the most work for the least effort.',
    fields: [
      'Date',
      'Question',
      'Spread name',
      'Each position + card + one-line interpretation',
      'Overall message in your own words',
      'One action this reading suggests',
      'Re-read date (e.g. two weeks out)',
    ],
  },
  {
    name: 'Pattern-Tracking Template',
    blurb: 'A monthly review entry. Fill it in at the end of each month using the rest of your journal as source material.',
    fields: [
      'Card that keeps appearing this month',
      'Position(s) where it appeared',
      'Context of the readings it showed up in',
      'The lesson refusing to be ignored',
    ],
  },
]

export default function TarotJournalPage() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Tarot Journal</span>
      </nav>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.2em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Practitioner&apos;s Guide
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '1rem', lineHeight: 1.25 }}>
          Tarot Journal
        </h1>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.95rem' }}>
          A journal is the most underrated tool in a reader&rsquo;s practice. It turns scattered readings into a pattern you can actually see, and the cards become familiar far faster when you have had to write about them in your own words. Most of what people call &ldquo;intuition&rdquo; with tarot is really pattern recognition built up over months of entries — and there is no shortcut to it that does not run through the page.
        </p>
      </div>

      {/* Section: Why Keep a Tarot Journal */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Why Keep a Tarot Journal
        </h2>
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', marginBottom: '1rem' }}>
            The cards become real only when you have to articulate them in your own words. Reading someone else&rsquo;s meanings — in a book, an app, a website — gives you vocabulary, not understanding. The moment you have to write what the Five of Pentacles means in <em>this</em> spread, on <em>this</em> day, about <em>this</em> situation, the card stops being a paragraph in a guide and starts being a piece of language you actually own.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', marginBottom: '1rem' }}>
            Patterns across readings only emerge in retrospect. The same card surfacing three times in a fortnight, the recurring blockage in the same spread position, the question you keep rephrasing rather than answering — none of these are visible in any single reading. A journal makes the pattern visible. That is most of what experienced readers mean when they talk about &ldquo;reading well&rdquo;: they have a record they can look back at.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            Journaling separates the reading itself from the interpretation, and this is where most beginners get tangled. Pulling cards and interpreting them at the same time produces a rushed, anxious reading that bends toward whatever you were hoping to hear. Writing the cards down first, sitting with them, then interpreting in writing slows the practice enough for honesty to catch up with you.
          </p>
        </div>
      </section>

      {/* Section: What to Record */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem' }}>
          What to Record
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          A good entry has eight components. They take less time than they look, and they pay you back every time you flip back through old readings.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {recordItems.map(({ name, body }, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.12)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem', marginTop: 2 }}>
                {i + 1}
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.4rem' }}>{name}</div>
                <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.8, margin: 0 }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Three Journal Templates */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem' }}>
          Three Journal Templates
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          Copy any of these into your notebook or a notes app. The structure does most of the work — you just fill in the fields.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {templates.map((t, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.95rem', marginBottom: '.5rem' }}>{t.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.7, marginBottom: '1rem' }}>{t.blurb}</p>
              <div style={{ paddingTop: '.85rem', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '.55rem' }}>
                {t.fields.map((f, j) => (
                  <div key={j} style={{ display: 'flex', gap: '.65rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.78rem', flexShrink: 0, marginTop: 1 }}>·</span>
                    <span style={{ color: 'var(--text)', fontSize: '.85rem', lineHeight: 1.7, opacity: .9 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: How Often to Journal */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          How Often to Journal
        </h2>
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            For beginners, daily entries are best — ideally paired with a single-card morning draw. The repetition is what builds familiarity with the deck, and a one-card daily reading is small enough to actually keep up. For established practitioners, weekly summaries tend to work better than daily ones: a record of any full readings done that week, plus a short pattern-tracking note about which cards or themes kept surfacing. The point is consistency, not volume. Five minutes a day for a month will teach you more than a three-hour journaling session every six weeks.
          </p>
        </div>
      </section>

      {/* Section: TarotAxis Has a Journal Built In */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          TarotAxis Has a Journal Built In
        </h2>
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            Our <Link href="/free-reading" style={{ color: 'var(--gold)' }}>free-reading tool</Link> automatically saves every reading locally on your device, so you can use it as a digital journal alongside any paper notebook you already keep. The date, the spread, the cards and the interpretation are all there to look back at — searchable, in order, and never sent anywhere off your machine. Many readers find the combination works well: the app handles the record-keeping, and the notebook handles the longer reflections that benefit from being written by hand.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <Link href="/journal" style={{ padding: '.8rem 1.6rem', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.35)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Open Your Journal →
        </Link>
        <Link href="/free-reading" style={{ padding: '.8rem 1.6rem', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Try a Free Reading →
        </Link>
        <Link href="/how-to-read-tarot" style={{ padding: '.8rem 1.6rem', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          How to Read Tarot →
        </Link>
      </div>

      {/* FAQ */}
      <section>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
          Common Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.5rem' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.8, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
