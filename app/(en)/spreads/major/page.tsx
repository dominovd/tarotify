import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Major Arcana Spreads — 22-Card Tarot Layouts | TarotAxis',
  description: 'A curated collection of Major Arcana tarot spreads using only the 22 trump cards. Use these archetypal layouts for pivotal moments, soul questions, and shadow work.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/major',
    languages: {
      'en': 'https://tarotaxis.com/spreads/major',
      'es': 'https://tarotaxis.com/es/tiradas/arcanos-mayores',
      'x-default': 'https://tarotaxis.com/spreads/major',
    },
  },
  openGraph: {
    title: 'Major Arcana Tarot Spreads — Archetypal Layouts',
    description: 'Five Major Arcana-only tarot spreads: Celtic Cross, Year Ahead, Decision, Shadow Work, and Elemental. Strip the deck to its 22 trumps for crystalline soul-level guidance.',
  },
}

const SPREADS = [
  {
    href: '/spreads/major/celtic-cross',
    symbol: '✶',
    title: 'Celtic Cross',
    cards: '10 cards',
    desc: 'The classic Celtic Cross rebuilt with only the 22 trumps. For watershed questions where the everyday clutter falls away and the archetypes do the speaking.',
  },
  {
    href: '/spreads/major/year-ahead',
    symbol: '☉',
    title: 'Year Ahead',
    cards: '12 cards',
    desc: 'One trump per month — a twelve-card map of the archetypal lessons the year intends to teach you. Best drawn at a birthday, New Year, or other personal threshold.',
  },
  {
    href: '/spreads/major/decision',
    symbol: '⚖',
    title: 'Decision',
    cards: '3 cards',
    desc: 'Two paths and the deeper teaching that runs beneath them both. A three-card archetypal reading for the choices where neither pros-and-cons nor logic quite reaches.',
  },
  {
    href: '/spreads/major/shadow-work',
    symbol: '☾',
    title: 'Shadow Work',
    cards: '5 cards',
    desc: 'Five cards for the parts of yourself you have buried, exiled, or refused to see. A focused excavation that meets the unconscious on its own archetypal terms.',
  },
  {
    href: '/spreads/major/elemental',
    symbol: '✦',
    title: 'Elemental Balance',
    cards: '4 cards',
    desc: 'Fire, Water, Air, Earth — one trump card for each element to show where you are well-tuned and where the inner system has gone quiet. A diagnostic reading.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the 22 Major Arcana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Major Arcana are the twenty-two trump cards in a tarot deck, numbered 0 through 21 — beginning with The Fool and ending with The World. They form a complete cycle often called the Fool\'s Journey, depicting the soul\'s passage through innocence, initiation, descent, integration, and return. Each card stands for a major archetypal force rather than a small day-to-day event.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why use only Major Arcana in a spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stripping the deck to its trumps removes the everyday detail of the Minor Arcana and leaves only the soul-level forces at work. This is useful when a question feels pivotal, fated, or beyond practical advice — when you want to hear from the archetypes directly rather than read about chores and meetings. Major-only spreads tend to feel weightier and more concentrated.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I shuffle the rest of the deck back in afterwards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most readers physically separate the 22 trumps, perform the Major-only reading, and then recombine the deck for ordinary work. There is no metaphysical harm in shuffling the cards back together — the separation is a focusing technique rather than a ritual rule. Just take a moment to recombine and re-shuffle thoroughly before your next reading.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Major Arcana cards more powerful than Minor cards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not more powerful, but operating at a different scale. The Major Arcana speak to long arcs, soul lessons, and archetypal turning points; the Minor Arcana speak to the texture of daily life. A spread heavy in trumps suggests a chapter of life with weight and meaning, but a beautifully timed Minor card can still change everything. The two systems answer different kinds of questions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does it mean if I draw all Major Arcana in a regular spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A reading dominated by Major Arcana suggests that the situation is operating at a deeper level than ordinary circumstance — the soul, fate, or your long-term life path is involved. It often appears around significant transitions, spiritual awakenings, or moments when an old chapter is closing. Pay close attention; these are not readings to brush off as routine.',
      },
    },
  ],
}

export default function MajorArcanaSpreadsHub() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/spreads" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Spreads</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Major Arcana</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Major Arcana Spreads
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.75 }}>
            Tarot spreads built from the 22 trump cards alone. For pivotal moments, soul-level questions, and the readings that ask for archetypal weight rather than daily detail.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Why a Major-Only Spread
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            A standard 78-card deck carries two registers at once. The Minor Arcana describe the texture of ordinary life — the cup of tea, the awkward email, the small currents of feeling moving through a week. The Major Arcana speak in a different voice altogether, sounding the deep archetypal notes of soul, fate, and turning. When you separate the trumps and read with them alone, the everyday register falls away and only the archetypal layer remains.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            That focus is the point. Major-only spreads are for the questions that already feel heavy — a vocation crossroads, a relationship that may be ending, an old wound asking to be met. The five layouts below each frame that weight differently. Choose the shape that matches your question.
          </p>
        </div>

        {/* Spread cards grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
          {SPREADS.map(({ href, symbol, title, cards, desc }) => (
            <Link key={href} href={href} style={{ display: 'block', padding: '1.25rem 1.25rem', background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.85rem', marginBottom: '.55rem' }}>
                <div style={{ fontSize: '1.3rem', color: 'var(--gold)', opacity: .85 }}>{symbol}</div>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem' }}>{title}</div>
                <div style={{ marginLeft: 'auto', fontSize: '.7rem', color: 'var(--muted)', letterSpacing: '.08em', textTransform: 'uppercase' }}>{cards}</div>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{desc}</p>
            </Link>
          ))}
        </div>

        {/* When to use */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            When to Reach for a Major-Only Spread
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Use the trumps alone when the question is large. A career question that is really about vocation; a relationship question that is really about identity; a grief or transition you cannot quite name. The Minor Arcana would answer the practical version of those questions — the next step, the timing, the obstacle to clear — but the trumps answer the version underneath, where the soul is moving.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Major-only spreads also work well at thresholds: birthdays, anniversaries, the turn of the year, the start of a new chapter or the end of one. The archetypal language they speak is the language of those moments. They are less helpful for narrowly practical questions — what to wear to the interview, whether to send the message tonight — where Minor cards give better resolution.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            One more good use: when a previous reading has been all Major cards. That is the cards telling you the matter is bigger than it looks. A focused trump-only spread can then go deeper into the same territory rather than dismissing the signal.
          </p>
        </div>

        {/* How to prepare */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            How to Prepare a Major-Only Deck
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Take your usual tarot deck and remove every card that is not numbered 0 through 21. You will end up with The Fool, The Magician, The High Priestess, The Empress, The Emperor, The Hierophant, The Lovers, The Chariot, Strength, The Hermit, Wheel of Fortune, Justice, The Hanged Man, Death, Temperance, The Devil, The Tower, The Star, The Moon, The Sun, Judgement, and The World — twenty-two cards in total.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Set the rest of the deck aside, face-down, in its own quiet space. Shuffle the trumps thoroughly — they will feel oddly thin compared to the full deck, which is itself part of the focusing effect. When the reading is over, recombine the deck and re-shuffle so that future readings work as normal.
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
          <Link href="/cards" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Reference</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>All 78 card meanings →</div>
          </Link>
          <Link href="/free-reading" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Try it now</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Free tarot reading →</div>
          </Link>
          <Link href="/tarot-suits" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Learn more</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Tarot suits guide →</div>
          </Link>
          <Link href="/spreads" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>More spreads</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>All tarot spreads →</div>
          </Link>
        </div>

      </div>
    </>
  )
}
