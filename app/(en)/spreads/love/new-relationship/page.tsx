import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'New Relationship Tarot Spread — Early Stages Reading | TarotAxis',
  description: 'A new relationship tarot spread for early-stage connections. 3-card and 5-card layouts to understand potential, compatibility, and what to watch for when dating someone new.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/love/new-relationship',
    languages: {
      'en': 'https://tarotaxis.com/spreads/love/new-relationship',
      'es': 'https://tarotaxis.com/es/tiradas/amor/nueva-relacion',
      'x-default': 'https://tarotaxis.com/spreads/love/new-relationship',
    },
  },
  openGraph: {
    title: 'New Relationship Tarot Spread — Early Stages',
    description: 'Tarot spreads designed for new connections — understand the energy, potential, and dynamics of a relationship just beginning.',
  },
}

const POSITIONS_3 = [
  { num: 1, name: 'Their Energy', desc: 'What this person is genuinely bringing into this connection — who they are in this situation, their intentions, and their readiness for a relationship.' },
  { num: 2, name: 'Your Energy', desc: 'What you are projecting and feeling — your hopes, fears, and any patterns from the past that may be colouring how you see this person.' },
  { num: 3, name: 'The Potential', desc: 'The honest direction of this connection if both people continue as they are. Not a prediction, but a reflection of current energies.' },
]

const POSITIONS_5 = [
  { num: 1, name: 'The Connection\'s Foundation', desc: 'What this relationship is actually built on — the true basis of the attraction and compatibility between you.' },
  { num: 2, name: 'What They Bring', desc: 'The qualities, energy, and intentions this person brings to the relationship right now.' },
  { num: 3, name: 'What You Bring', desc: 'The qualities, energy, and needs you are bringing — including the patterns from past relationships that may be at play.' },
  { num: 4, name: 'The Challenge to Navigate', desc: 'The potential friction point or blind spot in this connection — what to be honest with yourself about as things develop.' },
  { num: 5, name: 'Where This Is Heading', desc: 'The most likely direction of this relationship based on current energies. The invitation for awareness, not a fixed destiny.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a new relationship tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A new relationship tarot spread is a card layout designed for early-stage romantic connections. Rather than asking broad love questions, these spreads focus on understanding the specific dynamic between two people — what each person is bringing, what the connection is built on, and where things are likely to go.',
      },
    },
    {
      '@type': 'Question',
      name: 'How soon is too soon to do a tarot reading about someone new?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no rule, but readings tend to be most useful once you have had enough real interaction to have a sense of the person — even a few dates. Very early on, your own projection and wishful thinking can strongly influence the reading. The key is to approach the spread with genuine openness rather than a preferred answer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which tarot cards are positive signs in a new relationship spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Ace of Cups suggests fresh emotional potential and genuine openness. Two of Cups is the classic new connection card — mutual attraction and alignment. The Lovers points to a significant bond forming. The Star indicates hope and authentic connection. The Knight of Cups can represent someone pursuing you with genuine romantic feeling. As always, context and position matter as much as the card itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I get a challenging card in position 4 (The Challenge)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A challenging card in the obstacle position is useful information, not a bad omen. It points to something to be aware of — perhaps a pattern to watch, a compatibility difference to discuss, or a pace to be mindful of. The Three of Swords there may suggest past hurt that needs healing; The Hermit may indicate someone who needs more solitude than you do. Use it as a guide, not a verdict.',
      },
    },
  ],
}

export default function NewRelationshipSpreadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/spreads" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Spreads</Link>
          <span style={{ opacity: .4 }}>›</span>
          <Link href="/spreads/love" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Love</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>New Relationship</span>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>✨</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            New Relationship Tarot Spread
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            For early-stage connections and new relationships. These layouts help you see the dynamic clearly — what is real, what is projection, and where this is genuinely heading.
          </p>
        </div>

        {/* 3-card */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            The 3-Card New Connection Reading
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Quick and clear. Three cards give you an honest read on what each person is bringing and where the connection is heading — without overcomplicating something that is still new.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.75rem' }}>
            {[1, 2, 3].map(n => (
              <div key={n} style={{ width: 52, height: 80, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>{n}</div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS_3.map(({ num, name, desc }) => (
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

        {/* 5-card */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            The 5-Card Deep Dive
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            When you want a fuller picture — including the foundation of the connection, what each person is bringing, what to be aware of, and where things are heading.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {[1, 2, 3, 4, 5].map(n => (
              <div key={n} style={{ width: 52, height: 80, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>{n}</div>
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

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <Link href="/spreads/love" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>More spreads</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>All love tarot spreads →</div>
          </Link>
          <Link href="/spreads/soulmate" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Related</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Soulmate spread →</div>
          </Link>
        </div>

      </div>
    </>
  )
}
