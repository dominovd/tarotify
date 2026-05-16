import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Relationship Growth Tarot Spread — 6-Card Reading for Couples | TarotAxis',
  description: 'A 6-card relationship growth tarot spread for established couples. Read the foundation, current dynamic, what each partner brings and the next edge for the bond.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/partner/relationship-growth',
    languages: {
      'en': 'https://tarotaxis.com/spreads/partner/relationship-growth',
      'es': 'https://tarotaxis.com/es/tiradas/pareja/crecimiento-de-relacion',
      'x-default': 'https://tarotaxis.com/spreads/partner/relationship-growth',
    },
  },
  openGraph: {
    title: 'Relationship Growth Tarot Spread for Couples',
    description: 'Six cards to deepen an existing relationship — foundation, dynamic, contributions and the next invitation for the bond.',
  },
}

const POSITIONS = [
  { num: 1, name: 'Foundation of the Bond', desc: 'The underlying soil this relationship grew from — the values, experiences and resonance that brought you together and still hold you. Sometimes solid, sometimes worth tending.' },
  { num: 2, name: 'Current Dynamic', desc: 'The way the two of you are actually relating right now. Not the highlight reel, not the worst day — the regular weather of the relationship in this season.' },
  { num: 3, name: 'What You Bring That Supports Growth', desc: 'The qualities, energies and intentions you are currently contributing that allow the relationship to deepen. The real ones, including the small daily ones.' },
  { num: 4, name: 'What They Bring', desc: 'The contribution coming from the other side of the bond. What your partner is offering into the field, whether or not it always lands the way they hope.' },
  { num: 5, name: 'The Next Edge', desc: 'The growing edge for the relationship — the new layer, conversation or capacity that is ready to emerge. Often slightly uncomfortable, always meaningful.' },
  { num: 6, name: 'The Invitation', desc: 'The specific invitation the cards offer — a posture, a practise, a question, or a step the two of you can take into the next chapter of the bond.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is this spread suitable for any stage of a relationship?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This spread is designed for established relationships — anywhere from a few months in to many years together. If you are in the first weeks of dating, the Dating Connection spread will serve you better. If you are in a moment of rupture or crisis, a more focused spread may help; this one is for couples who are well, and want to be more well.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I read this spread for myself if my partner is not interested in tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and it is one of the most honest ways to use it. You are not reading their inner world — you are reading the field that the two of you share, and listening for what your contribution to that field could be next. The insights will land in you, and the changes will follow naturally.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if positions 3 and 4 feel unequal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Apparent imbalance between what each person is bringing is normal — relationships ebb and flow, and seasons of life rarely sync up perfectly. Read those cards together rather than separately. Often what looks like inequality on one card is balanced by something different on the other; partnerships rarely give in matching currencies.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should we do a relationship growth reading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Once or twice a year is plenty for most couples — perhaps around an anniversary or at a turning of the year. Doing it too often dilutes the reading; the next edge needs time to actually be worked. If you do it together, give yourselves quiet space afterwards to talk through what came up.',
      },
    },
  ],
}

export default function RelationshipGrowthSpreadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/spreads" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Spreads</Link>
          <span style={{ opacity: .4 }}>›</span>
          <Link href="/spreads/partner" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Partner</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Relationship Growth</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>🌿</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Relationship Growth Tarot Spread
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            A 6-card spread for established couples who want to honour the relationship they have built and find the next layer of depth waiting in it.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Why a Growth Spread Matters
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            The hardest part of a long-term relationship is not the dramatic moments — it is the way ordinary days quietly accumulate. The same patterns, the same warmth, the same small avoidances. Over time, the relationship becomes very familiar and slightly invisible to both people inside it. A growth spread is a way to put the bond back in focus and listen for what wants to come next.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            You can read this spread alone or with your partner. If you read it together, pull the cards in turn and discuss each one as it lands. If you read it alone, hold the relationship with care — you are not gathering evidence, you are listening to the field you share.
          </p>
        </div>

        {/* Layout */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            The 6-Card Layout
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Cards 1 and 2 form the base — foundation and current dynamic. Cards 3 and 4 face each other above — what each partner brings. Cards 5 and 6 rise above the pair — the next edge and the invitation that follows.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {[1, 2, 3, 4, 5, 6].map(n => (
              <div key={n} style={{ width: 52, height: 80, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>
                {n}
              </div>
            ))}
          </div>

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

        {/* Interpreting */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Reading Your Spread
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Begin with the relationship between positions 1 and 2. A solid foundation card with a strained current-dynamic card often signals that something inherited from the early days of the relationship is no longer being honoured day to day. A shaky foundation with a strong current dynamic suggests that the two of you have built something that has outgrown its origin story — which is its own kind of grace.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Positions 3 and 4 are read together. Look at what each card is offering and ask: do these contributions complement each other, or do they pass each other by? Sometimes partners are pouring in good energy that the other simply cannot receive in that form. The reading often quietly reveals these missed gifts.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Position 5 — the next edge — is rarely about a dramatic upheaval. More often it points to a conversation that has been waiting, a tenderness that wants to be expressed, or a layer of trust ready to be taken. Position 6 then translates that edge into one concrete invitation. Treat it gently. The kind of growth the cards point to here is meant to be lived, not performed.
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
          <Link href="/spreads/partner" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>More spreads</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>All partner spreads →</div>
          </Link>
          <Link href="/free-reading" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Try it now</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Free tarot reading →</div>
          </Link>
        </div>

      </div>
    </>
  )
}
