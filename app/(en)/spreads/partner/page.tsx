import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Partner & Relationship Tarot Spreads — Honest Connection Readings | TarotAxis',
  description: 'Six dedicated partner tarot spreads for dating, soulmate questions, compatibility and relationship growth. Grounded, honest layouts that focus on the relational field rather than fate.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/partner',
    languages: {
      'en': 'https://tarotaxis.com/spreads/partner',
      'es': 'https://tarotaxis.com/es/tiradas/pareja',
      'x-default': 'https://tarotaxis.com/spreads/partner',
    },
  },
  openGraph: {
    title: 'Partner & Relationship Tarot Spreads',
    description: 'Dating, soulmate, compatibility and growth spreads for genuine connection seekers — no manipulation, no false certainty.',
  },
}

const SPREADS = [
  { slug: 'dating-connection', title: 'Dating Connection Spread', cards: '5 cards', desc: 'Early dating clarity — what is being exchanged and whether to keep going.' },
  { slug: 'relationship-growth', title: 'Relationship Growth Spread', cards: '6 cards', desc: 'For established couples wanting to deepen the bond and find the next edge.' },
  { slug: 'soulmate-discovery', title: 'Soulmate Discovery Spread', cards: '7 cards', desc: 'A grounded look at the soulmate question — who you are becoming, who will meet you.' },
  { slug: 'partner-alignment', title: 'Partner Alignment Spread', cards: '5 cards', desc: 'Honest compatibility check — values, alignment and meaningful differences.' },
  { slug: 'love-attraction', title: 'Love Attraction Spread', cards: '5 cards', desc: 'Inner-work spread for singles ready to invite real love into life.' },
  { slug: 'dating-guidance', title: 'Dating Guidance Spread', cards: '4 cards', desc: 'Quick situational help when you are stuck in a dating loop.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a partner tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A partner tarot spread is a card layout designed to explore the energy between two people — the relational field, the exchange, and the dynamic — rather than predict a fixed outcome. Partner spreads differ from general love spreads because they focus on connection in the present moment, including the part you are bringing to it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is a partner spread different from a love spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Love spreads tend to look at desire, longing, romance, or fate. Partner spreads look at the actual relationship as a living thing made by two people — what each person contributes, where the energies meet, and what wants to grow. They are more practical and more honest, which makes them better tools for real-world decisions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a tarot spread tell me what my partner is thinking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tarot can reflect the energy a person is bringing into the connection, but it cannot read another mind. The most useful partner readings treat their card as a mirror of the relational field, not a window into the other person. If you find yourself trying to spy on someone, the cards usually redirect you back to your own awareness.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which partner spread should I start with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you are in the first weeks of dating someone, start with the Dating Connection spread. If you are in a committed relationship and want to deepen it, try Relationship Growth. If you are single and asking the bigger questions, the Soulmate Discovery or Love Attraction spreads will serve you. Dating Guidance is best when you simply need a clear next step.',
      },
    },
    {
      '@type': 'Question',
      name: 'How honest do I need to be when reading a partner spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completely honest, especially with yourself. Partner spreads work poorly if you approach them hoping to confirm what you already want to believe. The cards will mirror back the truth of the field — including the parts of yourself you may prefer to overlook. The reading is most useful when you let it surprise you.',
      },
    },
  ],
}

export default function PartnerSpreadsHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/spreads" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Spreads</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Partner</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>💞</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Partner & Relationship Tarot Spreads
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
            Six grounded layouts for dating, compatibility, soulmate questions and relationship growth — designed to honour the relational field, not to manipulate it.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            What Makes a Partner Spread Different
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Most love tarot spreads focus on desire — who, when, will they, do they. Partner spreads take a different angle. Instead of asking the cards to predict an outcome, they ask the cards to show you the energy currently being exchanged between two people. The reading becomes a mirror of the relational field rather than a forecast of fate.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            That shift changes what is possible. A partner spread can show you what you are bringing, what they are bringing, where the meeting point is, and whether the connection is genuinely nourishing both of you. It can also show you the difference between a connection that is real and one that is being kept alive by hope, longing, or familiar pain.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            These six spreads are not about reading your partner. They are about reading the relationship — which means they always begin with you.
          </p>
        </div>

        {/* Spread grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {SPREADS.map(s => (
            <Link key={s.slug} href={`/spreads/partner/${s.slug}`} style={{ display: 'block', padding: '1.15rem 1.2rem', background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12, textDecoration: 'none' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.4rem' }}>{s.cards}</div>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.95rem', marginBottom: '.45rem' }}>{s.title}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
            </Link>
          ))}
        </div>

        {/* Approaching honestly */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Approaching Relationship Readings Honestly
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            The most common mistake people make in partner readings is to use the cards as a way to scrutinise the other person. We want to know whether they really love us, what they are doing when we are not around, whether their feelings have shifted. The cards will answer those questions — but the answers will keep pointing you back at yourself, because the only honest place a reading can start is with the energy you can actually feel and influence.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            A grounded partner reading asks different questions. What am I bringing to this relationship today? What part of me is hoping the cards will reassure me? What do I already know but have not let myself say out loud? When you read this way, the cards become a tool for self-awareness rather than surveillance — and the guidance you receive becomes genuinely usable.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            None of these spreads will tell you that someone is destined to be yours, or that another person is the source of your happiness. They will, however, help you see the connection clearly — and from clarity, every good decision becomes possible.
          </p>
        </div>

        {/* When to use which */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '1rem' }}>
            When to Use Which Spread
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {[
              { when: 'You have been on 2–6 dates with someone and you cannot tell where it is going', use: 'Dating Connection (5 cards)' },
              { when: 'You are in an established partnership and want to find the next layer of growth', use: 'Relationship Growth (6 cards)' },
              { when: 'You keep asking whether someone is your soulmate, or you want to prepare for one', use: 'Soulmate Discovery (7 cards)' },
              { when: 'You like someone and want to honestly assess whether you are compatible', use: 'Partner Alignment (5 cards)' },
              { when: 'You are single and want to do the inner work that invites real love in', use: 'Love Attraction (5 cards)' },
              { when: 'You are mid-situation and just need a clear next move', use: 'Dating Guidance (4 cards)' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '.3rem', padding: '1rem 1.1rem', background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12 }}>
                <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.6, margin: 0 }}>{row.when}</p>
                <p style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', margin: 0 }}>→ {row.use}</p>
              </div>
            ))}
          </div>
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          <Link href="/spreads/love" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Related</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Love spreads →</div>
          </Link>
          <Link href="/free-reading" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Try it</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Free reading →</div>
          </Link>
          <Link href="/cards" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Learn</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Card meanings →</div>
          </Link>
        </div>

      </div>
    </>
  )
}
