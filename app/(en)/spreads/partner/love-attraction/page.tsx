import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Love Attraction Tarot Spread — 5-Card Manifest Love Reading | TarotAxis',
  description: 'A 5-card love attraction tarot spread for singles ready to invite real love in. Read what you are blocking, the belief to update and the signal that love is close.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/partner/love-attraction',
    languages: {
      'en': 'https://tarotaxis.com/spreads/partner/love-attraction',
      'es': 'https://tarotaxis.com/es/tiradas/pareja/atraccion-amorosa',
      'x-default': 'https://tarotaxis.com/spreads/partner/love-attraction',
    },
  },
  openGraph: {
    title: 'Love Attraction Tarot Spread — Inner-Work Manifest Reading',
    description: 'Five cards for singles focused on the inner work that allows real love to arrive — without manipulating any specific person.',
  },
}

const POSITIONS = [
  { num: 1, name: 'Who I Am Asking Love to Find', desc: 'The self you are currently presenting to the field of love — what your energy is honestly broadcasting, beneath the dating-app version of you.' },
  { num: 2, name: 'What I Am Unintentionally Blocking', desc: 'The shutter you are not aware of. The reflex that flinches when love gets close, or the story that tells you not yet, or not me, or not this.' },
  { num: 3, name: 'The Belief That Needs Updating', desc: 'The old idea about love that has quietly run the show — usually inherited, often outdated, sometimes inherited from someone who never had what you are looking for.' },
  { num: 4, name: 'What to Embody Now', desc: 'The quality the cards are asking you to live into. Not perform — embody. The way of being that allows love to recognise you and walk toward you.' },
  { num: 5, name: 'The Signal That Love Is Close', desc: 'The cue the universe will send so you do not miss it. Sometimes a feeling, sometimes a particular kind of person showing up, sometimes a sudden ease where there was struggle.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can a tarot spread help me manifest love?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A tarot spread cannot summon a specific person to your door — and a reading that promises that is best ignored. What an attraction spread can do is illuminate the inner conditions you are currently broadcasting, and help you adjust what is yours to adjust. Love responds to who you are being, not to what you are demanding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this spread the same as a manifestation ritual?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. This is a reading, not a working. There is no sigil, candle or specific person being targeted. The spread is closer to a mirror — a way of looking at your own readiness so that love, when it arrives, is not blocked by something you could have seen and gently shifted.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if position 2 (what I am blocking) shows something painful?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Treat it tenderly. The block is almost always a part of you that learned to protect you in difficult circumstances — it deserves gratitude, not punishment. Acknowledging it is usually enough to begin softening it. Some blocks lift the moment they are named; others ask for slower work.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long until love arrives after a reading like this?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no timeline the cards can honestly give. Love does not run on calendar months. What changes after this reading is your relationship with yourself — and the moment that relationship becomes warmer, the field around you shifts. Sometimes love arrives within weeks; sometimes it takes a season or longer. The work itself is the point.',
      },
    },
  ],
}

export default function LoveAttractionSpreadPage() {
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
          <span>Love Attraction</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>🌹</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Love Attraction Tarot Spread
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
            A 5-card spread for singles ready to do the real inner work that lets love arrive. No targeting specific people — just an honest look at what you are broadcasting.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            About This Spread
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Most love-attraction work goes wrong the moment it gets specific. The version that promises a named person, a fixed date, or a guaranteed outcome is almost always disappointing — and often quietly disempowering. This spread takes a different route. It does not ask the universe to deliver someone. It asks you to look at the love that is already trying to find you, and at the door you may not realise is half-shut.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Before you draw, take a moment to be honest with yourself about what you actually want. Not a list of features, but a feeling — the particular quality of love you are ready to live inside. Then shuffle gently. The cards work best when they are met with truth.
          </p>
        </div>

        {/* Layout */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            The 5-Card Layout
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Lay the five cards in a row. The first three look at where you are now; the last two look at the way forward.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {[1, 2, 3, 4, 5].map(n => (
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
            Read positions 1, 2 and 3 as a single sentence about your present moment: this is who I am asking love to find, this is what I am unintentionally blocking, this is the belief running underneath. Often that sentence is uncomfortable to read out loud. That discomfort is the doorway.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Pay particular attention to reversed cards in positions 2 and 3. Reversals here often suggest that a block or belief is starting to weaken on its own — you are halfway through releasing it. Upright difficult cards usually point to something that still needs your conscious attention.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Position 4 is best read as a daily practise rather than a grand transformation. Whatever card lands here, ask yourself what it would look like to embody this quality for the next two weeks. Position 5 then becomes a kind of bookmark — a signal to watch for. When it arrives, you will know. Until then, your only job is to keep living into position 4.
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
