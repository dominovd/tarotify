import type { Metadata } from 'next'
import Link from 'next/link'
import { CARDS } from '@/lib/cards'
import CardImage from '@/components/CardImage'

export const metadata: Metadata = {
  title: 'How Do They Feel About Me Tarot Spread — 3 Card Reading | TarotAxis',
  description: 'A 3-card tarot spread for understanding how someone truly feels about you — their emotions, their thoughts, and what they are most likely to do next.',
  alternates: { canonical: 'https://tarotaxis.com/spreads/how-they-feel-about-me' },
  openGraph: {
    title: 'How Do They Feel About Me Tarot Spread — 3 Card Reading',
    description: 'A 3-card tarot spread for understanding how someone truly feels about you — their emotions, their thoughts, and what they are most likely to do next.',
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'What They Feel',
    desc: 'The emotional truth beneath words and behaviour — what this person actually holds for you when no one is watching. This card speaks to the felt sense of the connection, the warmth or coolness in the body, the unspoken response that arises when they think of you.',
  },
  {
    num: 2,
    name: 'What They Think About You',
    desc: 'The conscious narrative they tell themselves about who you are and what this connection means. Thought and feeling are not always aligned. This card reveals the story their mind has constructed — sometimes more guarded, sometimes more idealised, than the feeling itself.',
  },
  {
    num: 3,
    name: 'What They Are Likely to Do',
    desc: 'The action or non-action their current state is moving them toward. Behaviour is the meeting place of feeling and thought. This card honestly names where the energy is heading — reaching out, retreating, waiting, or staying exactly where they are.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can tarot reveal someone else\'s feelings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tarot reads energy, not minds. What it can show is the quality and direction of the connection between you and another person at the moment of the reading — the emotional weather around them when you came up in their thoughts, the patterns in how they relate to you. It will not give you a verbatim transcript of what they feel, and it cannot override their free will. Used honestly, this spread is a way to attune to what is real in the connection rather than what you wish was real.',
      },
    },
    {
      '@type': 'Question',
      name: 'How accurate is a "how do they feel" tarot reading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Accuracy in tarot is less about prediction and more about resonance. When the reading is done with a settled, honest state of mind, the cards tend to mirror something the querent already half-knows. The most common reason these readings feel inaccurate is that the querent does the spread repeatedly until they get the answer they want, or twists a difficult card into a kinder meaning. One reading, accepted as drawn, is far more useful than ten that are bargained with.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cards mean someone has strong feelings for me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cups cards generally show emotional investment. The Two of Cups points to mutual recognition and a real bond. The Ace of Cups suggests a fresh, vulnerable opening of feeling. The Knight of Cups indicates someone moved to act on what they feel, often romantically. The Lovers names a connection that touches the person on a values level, not just attraction. The Page of Cups can signal tender, sometimes shy affection, while the Two of Wands suggests they are weighing a future that includes you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do this spread about a friend or family member?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The spread is built around the structure of any human connection — feeling, thought, behaviour — and works as well for a friendship, an estranged parent, a colleague or a sibling as it does for romance. In non-romantic readings, cards like the Three of Cups, the Ten of Pentacles or the Six of Cups often carry more weight than the traditional love cards. Read the cards in the register of the relationship you are actually asking about, not the one tarot stereotypes default to.',
      },
    },
  ],
}

export default function HowTheyFeelAboutMePage() {
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
        <Link href="/spreads" style={{ color: 'var(--muted)' }}>Tarot Spreads</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>How Do They Feel About Me</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>♡</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          How Do They Feel About Me Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          A three-card reading for the question almost everyone asks at some point — what is this person actually feeling about me, what are they thinking, and where is it all heading? An honest spread for an honest answer.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['3 Cards', 'Their Feelings', 'Honest Read'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* About this spread */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          About This Spread
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            This is one of the most-asked questions in tarot, and it is asked for good reason. We rarely have honest access to what another person is feeling about us. Words can be polite, distant or rehearsed. Behaviour can be ambiguous. This spread offers a structured way to sit with the connection itself and listen for what is there underneath — but it is worth being clear about what tarot can and cannot do. It reflects the energy in motion between you. It does not deliver certainty about another human being's interior life, and any reader who promises that is overselling the craft.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            The discipline this reading asks of you is to come to the cards without already deciding what you want to find. If you shuffle while silently rehearsing the version of events you hope is true, you will read the cards through that filter and learn very little. Sit with the question first. Notice what you are afraid the answer might be. Notice what you are hoping for. Then set both down, breathe, and draw. The cards respond best to an honest enquiry.
          </p>
          <p>
            When a card lands that looks unflattering — the Five of Cups, the Four of Pentacles, a reversed Knight, the Hermit — resist the urge to soften it into something it does not say. A reading that tells you the connection is cooler than you hoped is doing you a real service. It is much harder to spend months waiting on a feeling that the cards have already named as absent. The point of this spread is not to be reassured. It is to recognise what is real so you can act from clarity rather than fantasy.
          </p>
        </div>
      </div>

      {/* Spread Layout */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          The Three Positions
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Three cards, drawn left to right. Each position holds a distinct layer of the connection — what they feel, what they think, and what they are likely to do.
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
                <div style={{ fontSize: '.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center', maxWidth: 72 }}>{pos.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {POSITIONS.map(pos => (
            <div key={pos.num} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
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

      {/* Per-card feelings interpretation grid */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          What Each Card Means in a Feelings Reading
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Once you have drawn your cards, click any card below for an in-depth interpretation of what that card reveals about how someone feels about you — both upright and reversed.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(110px,1fr))', gap: '.5rem' }}>
          {CARDS.map(card => (
            <Link
              key={card.slug}
              href={`/cards/${card.slug}/feelings`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '.3rem',
                padding: '.5rem',
                background: 'rgba(255,255,255,.03)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                textDecoration: 'none',
              }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '2/3', borderRadius: 6, overflow: 'hidden' }}>
                <CardImage slug={card.slug} alt={`${card.name} tarot card as feelings`} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '.25rem .3rem', background: 'linear-gradient(to top, rgba(0,0,0,.85) 0%, transparent 100%)', textAlign: 'center' }}>
                  <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.55rem', color: '#e8d5a0', letterSpacing: '.04em', lineHeight: 1.2, display: 'block' }}>{card.name}</span>
                </div>
              </div>
            </Link>
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
            <div key={item.name} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Ready to draw your three cards?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Use our free tarot reading tool to draw your cards, then return here to interpret each position.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/free-reading" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Draw Cards Now
          </Link>
          <Link href="/spreads/love" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Love Spread
          </Link>
          <Link href="/spreads/true-love-spread" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            True Love Spread
          </Link>
        </div>
      </div>
    </div>
  )
}
