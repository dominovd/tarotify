import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Manifest Love Tarot Spread — 3 Card Reading for Calling In Love | TarotAxis',
  description: 'A 3-card tarot spread for manifesting love. See what is holding love at a distance, what is already opening you, and the next concrete move toward genuine connection.',
  alternates: {
    canonical: 'https://tarotaxis.com/manifestation/love',
    languages: {
      'en': 'https://tarotaxis.com/manifestation/love',
      'es': 'https://tarotaxis.com/es/manifestacion/amor',
      'x-default': 'https://tarotaxis.com/manifestation/love',
    },
  },
  openGraph: {
    title: 'Manifest Love Tarot Spread — 3 Card Reading for Calling In Love',
    description: 'A 3-card tarot spread for manifesting love — name the block, recognise the opening, take the next move.',
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'What Holds Love at a Distance',
    desc: 'The unconscious commitment, story or self-protection currently keeping love at arm\'s length. Usually older and more subtle than "I\'m too busy." The card often names a stance you adopted years ago for very good reasons and have forgotten you are still holding.',
  },
  {
    num: 2,
    name: 'What Is Already Opening You',
    desc: 'The quality, healing or experience already softening you and making you available for love. The work is further along than you think. This card is the reading\'s reminder that you are not starting from zero — something has been quietly preparing you.',
  },
  {
    num: 3,
    name: 'The Next Move Toward Connection',
    desc: 'The specific, this-week action that would most directly invite real connection. Often something off-screen — a place to go, a person to message, a habit to break. Occasionally something inward. Always something you can begin within the next seven days.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What tarot cards mean love is coming?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Two of Cups signals mutual recognition between two people. The Ace of Cups is an emotional opening — yours or someone else\'s. The Lovers speaks to a significant bond forming or a meaningful choice between connections. The Knight of Cups suggests someone arriving with feeling and intent. The Page of Cups is a message, invitation or first move. None of these are predictions of arrival. They describe the conditions in which love tends to land, and they appear most often for people who are also doing the inner work.',
      },
    },
    {
      '@type': 'Question',
      name: "Will this spread tell me when I'll meet someone?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — timing is not what tarot reliably does. The spread tells you what is in motion now: what is blocking, what is opening, what to act on. The honest readers in this field have all said the same thing, which is that timing predictions are where tarot loses credibility quickly. What the cards can do is shorten the gap between drift and action, which usually shortens the gap between you and the person you are actually available for. Focus on the third card. The timing follows.',
      },
    },
    {
      '@type': 'Question',
      name: "Can I do this spread if I'm already in a relationship?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — the spread reads love broadly, and works well for deepening an existing connection rather than meeting a new one. The first card becomes what is muting love between you and your partner. The second becomes what is already alive in the relationship that you have stopped noticing. The third becomes the next move toward genuine connection inside this partnership. Many couples find this version more useful than relationship-check-in spreads because it points at action rather than describing the dynamic.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I keep getting the same card across readings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The card is the lesson — you have not finished with it yet. Work with it rather than reshuffling. Recurring cards are the deck\'s way of insisting on a piece of inner work you have been politely declining. Sit with what the card is naming, write about it for a week, ask one trusted person whether they recognise the pattern in you, and act on whatever small move it suggests. Then draw again the following month. The card almost always changes once you have actually engaged with what it pointed at.',
      },
    },
  ],
}

export default function ManifestLovePage() {
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
        <span style={{ color: 'var(--gold)' }}>Manifest Love</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>♡</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Manifest Love Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          A three-card reading for calling love into your life. Name what is holding love at a distance, recognise what is already softening you toward connection, and find the concrete next move.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['3 Cards', 'Calling In Love', 'Inner Work'].map(tag => (
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
            There is a real difference between manifesting love and chasing love. Manifesting love means becoming the kind of person who can recognise, receive and stay with genuine connection when it appears. Chasing love means focusing on a particular person, a particular outcome, a particular timeline — and treating tarot as a remote control for someone else\'s behaviour. The cards refuse to help with the second kind of work. They will redirect you, sometimes uncomfortably, back to the first.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Most people are not blocked from love by other people. They are blocked by their own protective patterns — the parts of them that learned, often early and for legitimate reasons, that intimacy was unsafe or unreliable. The first card in this spread names exactly that pattern. It rarely says anything dramatic. It usually names something small and persistent: the way you exit the moment someone gets too close, the way you stay busy enough not to feel lonely, the way you over-select for someone you already half-know will not stay.
          </p>
          <p>
            The third card sometimes points outward — go to the place, send the message, accept the invitation. Sometimes it points inward — finish the grief, end the lingering thing with the ex, become a friend you would actually want. Both directions are real moves toward love. Resist the urge to dismiss an inward action as not counting. The cards know which order things need to happen in for you, even when you do not.
          </p>
        </div>
      </div>

      {/* Spread layout */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          The Spread — Three Cards
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Shuffle with a single, honest question: <em>What do I need to see about love in my life right now?</em> Draw three cards from left to right.
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Continue the work</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Love and aliveness move together. Pair this spread with the sexual energy reading, or look at the specific block keeping love away.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/manifestation/sexual-energy" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Manifest Sexual Energy
          </Link>
          <Link href="/spreads/what-blocks-my-love" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            What Blocks My Love
          </Link>
          <Link href="/manifestation" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            All Manifestation Spreads
          </Link>
        </div>
      </div>
    </div>
  )
}
