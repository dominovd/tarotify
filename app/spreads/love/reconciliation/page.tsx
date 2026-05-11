import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Reconciliation Tarot Spread — Ex Back & Reunion Reading | Tarotify',
  description: 'Use a reconciliation tarot spread to explore whether reconnecting with an ex is wise. 5-card and 7-card layouts with full position meanings for reunion readings.',
  alternates: { canonical: 'https://tarotify.app/spreads/love/reconciliation' },
  openGraph: {
    title: 'Reconciliation Tarot Spread — Should You Reconnect?',
    description: 'A dedicated tarot spread for reconciliation and ex-back questions. Honest guidance on whether reunion is in your highest good.',
  },
}

const POSITIONS_5 = [
  { num: 1, name: 'Where You Stand', desc: 'Your current emotional state and how you truly feel about this person — beneath the longing and the stories you tell yourself.' },
  { num: 2, name: 'Where They Stand', desc: 'The other person\'s energy right now. What they are carrying, feeling, and where their thoughts are in relation to you.' },
  { num: 3, name: 'What Ended the Connection', desc: 'The root cause of the separation — the core wound, pattern, or circumstance that led to the break. This card asks for honesty.' },
  { num: 4, name: 'What Has Changed', desc: 'The growth, shift, or new understanding that has occurred since the separation. Is there genuine change, or are the same patterns still present?' },
  { num: 5, name: 'The Path Forward', desc: 'What is in your highest good right now — whether that means reconciliation, healing separately, or something else entirely.' },
]

const POSITIONS_7 = [
  { num: 1, name: 'Your True Feelings', desc: 'What you genuinely feel, stripped of wishful thinking — the raw emotional truth beneath the surface.' },
  { num: 2, name: 'Their Current Energy', desc: 'Where this person is emotionally and mentally right now in relation to you and the relationship.' },
  { num: 3, name: 'The Root of the Break', desc: 'The core reason the relationship ended — the real issue, not just the trigger.' },
  { num: 4, name: 'Lessons from the Separation', desc: 'What this period apart has taught each of you — the growth the universe intended.' },
  { num: 5, name: 'Obstacles to Reconciliation', desc: 'What stands in the way if you were to reconnect — practical, emotional, or energetic barriers.' },
  { num: 6, name: 'What Reconciliation Would Look Like', desc: 'The realistic shape of the relationship if you came back together — what it would actually be, not what you hope it would be.' },
  { num: 7, name: 'Guidance', desc: 'The overarching message from the cards about your highest path — the clearest answer to whether reconciliation serves your growth.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a reconciliation tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A reconciliation tarot spread is a specific card layout designed to give honest insight into whether reconnecting with an ex-partner is wise. It examines both people\'s current energy, the root cause of the separation, what has genuinely changed, and what outcome would serve your highest good.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can tarot tell me if my ex will come back?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tarot does not predict fixed futures, but it can illuminate the current energies around a situation and reveal what is most likely if nothing changes. A reconciliation spread is more useful for helping you understand your own feelings, see the relationship clearly, and make a conscious choice than it is for predicting someone else\'s behaviour.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which cards are positive signs in a reconciliation spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cards like The Lovers, Two of Cups, The Star, Ace of Cups, Ten of Cups, and the Six of Cups often carry positive energy in reconciliation readings — suggesting emotional openness, renewed connection, or healing. The Wheel of Fortune can indicate a significant turn in fortune. However, context is everything — always read cards in relation to their position and the surrounding cards.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does it mean if The Tower appears in a reconciliation spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Tower in a reconciliation reading often signals that the relationship broke down for a significant reason — one that cannot simply be patched over. It can suggest that the separation, though painful, was necessary, and that attempting to rebuild on the same foundations may not serve either person. It is not a definitive no, but it asks for radical honesty about what truly went wrong.',
      },
    },
  ],
}

export default function ReconciliationSpreadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/spreads" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Spreads</Link>
          <span style={{ opacity: .4 }}>›</span>
          <Link href="/spreads/love" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Love</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Reconciliation</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>🌹</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Reconciliation Tarot Spread
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            A dedicated spread for ex-back and reunion questions. These layouts are designed to give you honest clarity — not just what you want to hear, but what you most need to know.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Before You Begin
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Reconciliation readings work best when you approach them with genuine openness — not as a tool to confirm that your ex is coming back, but as a way to see the situation clearly. The cards will reflect the honest energies at play, including dynamics within yourself that you may prefer not to examine.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Set your intention before drawing. Hold the relationship in mind — not just the longing or the memory of good times, but the whole truth of it. Then shuffle until you feel ready, and draw.
          </p>
        </div>

        {/* 5-card spread */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            The 5-Card Reconciliation Spread
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            The clearest starting point for most ex-back questions. Five cards give you enough depth to see the full picture without overwhelming the reading.
          </p>

          {/* Layout diagram */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {[1, 2, 3, 4, 5].map(n => (
              <div key={n} style={{ width: 52, height: 80, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>
                {n}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS_5.map(({ num, name, desc }) => (
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

        {/* 7-card spread */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            The 7-Card Deep Dive
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            For longer relationships, more complex situations, or when the 5-card spread still leaves you with open questions. This layout examines the full arc — root cause, lessons, obstacles, and what reunion would realistically look like.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS_7.map(({ num, name, desc }) => (
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

        {/* Interpreting tips */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            How to Read Your Results
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Look for the story that runs through the spread, not just individual card meanings. If cards in positions 3 (root cause) and 5 (path forward) are in tension — for instance, The Tower followed by Two of Cups — the reading is asking you to do the inner work before any outer reunion is possible.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Pay particular attention to court cards: they often represent the other person directly. A reversed King or Queen in position 2 may signal emotional unavailability, while a Knight upright can indicate movement and initiative in their energy toward you.
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
          <Link href="/spreads/love" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>More spreads</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>All love tarot spreads →</div>
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
