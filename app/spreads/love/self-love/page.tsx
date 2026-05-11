import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Self Love Tarot Spread — Healing & Inner Work Reading | Tarotify',
  description: 'A self love tarot spread to deepen your relationship with yourself. 4-card and 6-card layouts for healing, self-worth and personal growth readings.',
  alternates: { canonical: 'https://tarotify.app/spreads/love/self-love' },
  openGraph: {
    title: 'Self Love Tarot Spread — Healing & Inner Work',
    description: 'Turn the cards inward. These self-love spreads help you understand your patterns, reconnect with your worth, and identify what you most need right now.',
  },
}

const POSITIONS_4 = [
  { num: 1, name: 'How I See Myself', desc: 'The current lens through which you view yourself — including beliefs, self-talk, and the story you carry about who you are and what you deserve.' },
  { num: 2, name: 'What I Need to Release', desc: 'The pattern, belief, or behaviour that is most limiting your self-love right now. What the cards are asking you to put down.' },
  { num: 3, name: 'What I Need to Embrace', desc: 'The quality, practice, or aspect of yourself that is asking to be honoured — the direction your self-love needs to grow toward.' },
  { num: 4, name: 'How to Nurture Myself Now', desc: 'A practical or emotional invitation for the immediate period. What your inner self most needs from you right now.' },
]

const POSITIONS_6 = [
  { num: 1, name: 'My Current Relationship with Myself', desc: 'An honest portrait of how you are treating yourself right now — the quality of your inner dialogue, care, and self-regard.' },
  { num: 2, name: 'Root of My Self-Worth Blocks', desc: 'The origin point of where self-doubt or self-criticism took hold. This card often points to old conditioning, early experiences, or inherited beliefs.' },
  { num: 3, name: 'What I Am Not Seeing in Myself', desc: 'A quality, gift, or strength that others may recognise in you that you have been overlooking or dismissing.' },
  { num: 4, name: 'The Pattern to Break', desc: 'The specific habit, relationship dynamic, or thought pattern that most undermines your sense of self-worth.' },
  { num: 5, name: 'The Practice That Heals', desc: 'What genuinely nourishes and restores you — the direction of healing that is most aligned with your actual nature.' },
  { num: 6, name: 'Your Path to Wholeness', desc: 'The overarching theme of your self-love journey right now — the quality the universe is asking you to cultivate within yourself.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a self love tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A self love tarot spread turns the focus of a reading entirely inward — away from other people or external situations, and toward your relationship with yourself. These spreads are designed to illuminate self-worth patterns, identify what you need to release or embrace, and offer guidance on how to nurture yourself more fully.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I do a self love tarot reading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Self love spreads are especially valuable after a difficult relationship, during periods of low confidence or self-doubt, at the start of a healing journey, or whenever you feel disconnected from your own needs. They are also a powerful regular practice — monthly or at new moon — to check in with how you are treating yourself.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which tarot cards indicate self love and self worth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Empress is the classic card of self-love — abundance, beauty, and nurturing the self. The Star speaks to hope and self-acceptance after difficulty. The Nine of Pentacles represents hard-won self-sufficiency and enjoyment of your own company. The Queen of Cups or Queen of Wands often indicate a woman fully at home in herself. The Four of Swords can suggest the kind of restorative rest that self-love requires.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do a self love tarot spread for someone else?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — with their knowledge and consent. If someone has asked for a reading focused on their relationship with themselves, these spreads work well. Without consent, it is generally considered better practice to focus your readings on yourself and your own growth.',
      },
    },
  ],
}

export default function SelfLoveSpreadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/spreads" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Spreads</Link>
          <span style={{ opacity: .4 }}>›</span>
          <Link href="/spreads/love" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Love</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Self Love</span>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>🌸</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Self Love Tarot Spread
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            The most powerful reading you can do is one that turns entirely inward. These spreads help you understand your patterns, reconnect with your worth, and discover what you most need from yourself.
          </p>
        </div>

        {/* 4-card */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            The 4-Card Self-Love Check-In
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            A focused reading for a clear snapshot of your self-relationship right now — where you are, what is holding you back, what to move toward, and how to care for yourself in this moment.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {[1, 2, 3, 4].map(n => (
              <div key={n} style={{ width: 52, height: 80, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>{n}</div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS_4.map(({ num, name, desc }) => (
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

        {/* 6-card */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            The 6-Card Deep Healing Spread
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            For deeper work — when you want to trace the roots of your self-worth patterns, uncover hidden strengths, and identify a clear path toward greater wholeness. Use at the start of a healing journey or when you sense something needs to shift at a deeper level.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS_6.map(({ num, name, desc }) => (
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
          <Link href="/birth-card" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Related</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Your birth card →</div>
          </Link>
        </div>

      </div>
    </>
  )
}
