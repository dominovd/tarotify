import type { Metadata } from 'next'
import Link from 'next/link'
import { CARDS } from '@/lib/cards'

export const metadata: Metadata = {
  title: 'Suit of Swords Tarot — All 14 Cards, Element & Meanings | TarotAxis',
  description: 'The suit of Swords in tarot — element of Air, governing thought, truth-telling and communication. All 14 cards from Ace to King with keywords.',
  alternates: { canonical: 'https://tarotaxis.com/tarot-suits/swords' },
  openGraph: {
    title: 'Suit of Swords Tarot — All 14 Cards, Element & Meanings',
    description: 'The suit of Swords — element of Air, thought and truth. All 14 cards explored.',
  },
}

const THEMES = [
  { title: 'Truth & Honesty', text: 'The clean cut of seeing what is actually there. Swords refuse to flatter and they refuse to lie.' },
  { title: 'Decisions & Clarity', text: 'When a choice must finally be made, Swords arrive to sharpen the mind and end the stalemate.' },
  { title: 'Communication', text: 'Words, conversations, agreements, written contracts — the realm of language and how it shapes reality.' },
  { title: 'Conflict & Resolution', text: 'Arguments, separations, disputes — and the difficult but liberating work of resolving them honestly.' },
  { title: 'Mental Patterns', text: 'Anxiety, overthinking, limiting beliefs — and the discipline of recognising the mind\'s self-made cages.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why are Swords considered a difficult suit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Swords have the reputation as the difficult suit because their imagery is often unflinching — heartbreak in the Three, restriction in the Eight, anxiety in the Nine, painful endings in the Ten. But this difficulty is not the same as bad luck. Swords show us the truths we have been avoiding: the conversation we keep postponing, the belief that is holding us back, the situation we know is over but cannot quite name. Their cuts are clean. Properly read, Swords are not the suit of suffering but the suit of necessary honesty — the medicine that ends the longer pain.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the suit of Swords represent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Swords represent the realm of the mind — thought, language, intellect, communication, decisions, conflict and the difficult work of telling and hearing the truth. Governed by the element of Air, Swords concern themselves with how we think about a situation and what is actually said about it. They speak to negotiations, contracts, legal matters, arguments, mental health, anxiety, clarity and the breakthroughs that come when the mind finally cuts through confusion. When Swords appear, the question lives in the head and on the tongue.',
      },
    },
    {
      '@type': 'Question',
      name: 'What element corresponds to Swords?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Swords correspond to the element of Air. Air is the element of thought, language, ideas and movement — the breath, the spoken word, the breeze that clears the head, the storm that sweeps the situation clean. Astrologically, the air signs Gemini, Libra and Aquarius share the elemental quality of Swords: intellectual quickness, fluency with language, a love of fairness and a tendency to live more in the mind than in the body. The image of a sword in tarot represents the cutting edge of clear discernment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does many Swords in a reading mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a spread is heavy with Swords, the situation is dominated by thought, communication or conflict. Often it indicates that the person reading is in their head — overanalysing, lying awake at night, rehearsing arguments. It can also indicate that a real conversation needs to happen, or a real decision needs to be made, before the situation can move. Multiple Swords are rarely about external events alone; they are usually pointing to the mental and verbal dimension of the question, and asking that it be addressed honestly rather than circled around.',
      },
    },
  ],
}

export default function SwordsSuitPage() {
  const swords = CARDS.filter(c => c.suit === 'swords')

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
        <Link href="/tarot-suits" style={{ color: 'var(--muted)' }}>Tarot Suits</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Swords</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>🜁</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          The Suit of Swords
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Swords are the cards of the mind — thought, truth-telling, communication and decision. Governed by the element of Air, this suit cuts through confusion with the clean edge of honesty.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['14 Cards', 'Element of Air', 'Thought & Truth'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* About the suit */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          About the Suit of Swords
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            The sword is an ancient symbol of discernment — the blade that cuts what is true from what is false, what is yours to keep from what must finally be released. In tarot the sword is held aloft, planted in the earth, or wielded in battle, but it always represents the same essential power: the human mind in its capacity to think clearly, to name accurately, and to act on what it knows. The element of Air that animates the suit is the element of thought, breath and language — that which moves invisibly and changes everything it touches.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Swords govern the entire mental and verbal domain — thinking, deciding, speaking, writing, negotiating, arguing, agreeing. They speak to law and contracts, conversations and confrontations, the diagnosis received and the truth finally told. They also speak to the shadow side of the mind: the anxiety that runs in circles, the overthinking that paralyses, the belief that pretends to be a fact, the cruel inner critic. Swords show both the gift of the mind and its capacity to imprison itself.
          </p>
          <p>
            You recognise the Swords energy in a reading by its sharpness and its insistence on clarity. A Swords-heavy spread will not let you wallow in feeling or hide behind busyness; it will ask what you actually think, what you actually need to say, and what decision you have been postponing. The reputation of Swords as the difficult suit is real, but their cuts are clean. The medicine of Swords is honest truth — spoken to oneself first, then to others — and the freedom that follows.
          </p>
        </div>
      </div>

      {/* Aces, Pips, Court */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Ace, Pips and Court Cards
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Swords contains the same fourteen-card structure as the other suits: an Ace, nine pip cards numbered Two through Ten, and four court cards. The Ace of Swords is a mental opening — a breakthrough, a moment of clarity, a truth finally named. The pips track a difficult mental journey: stalemate at the Two, heartbreak at the Three, rest at the Four, conflict at the Five, transition at the Six, deception at the Seven, restriction at the Eight, anxiety at the Nine, and the painful but liberating ending of the Ten.
          </p>
          <p>
            The four court cards represent mental authority at different stages. The Page of Swords is the curious questioner — sharp, alert, gathering information, sometimes too quick to speak. The Knight of Swords is direct, fast and intellectually bold, charging toward truth with little patience for delay. The Queen of Swords is wisdom earned through difficulty: clear, fair, independent, able to see a situation without illusion. The King of Swords is the seasoned strategist and judge, applying intellect with discipline and justice with care.
          </p>
        </div>
      </div>

      {/* All 14 cards */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '.06em' }}>
          All 14 Cards of Swords
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '.75rem' }}>
          {swords.map(c => (
            <Link key={c.slug} href={`/cards/${c.slug}`} style={{ display: 'block', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem', textDecoration: 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '.5rem', marginBottom: '.4rem' }}>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', letterSpacing: '.03em' }}>{c.name}</div>
                <span style={{ flexShrink: 0, padding: '.15rem .55rem', borderRadius: 20, fontSize: '.6rem', background: 'rgba(201,168,76,.1)', color: 'var(--gold)', fontFamily: "'Cinzel',serif", letterSpacing: '.06em' }}>{c.number}</span>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '.76rem', lineHeight: 1.55, margin: 0, fontStyle: 'italic' }}>
                {c.kw_up.slice(0, 3).join(' · ')}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Common Themes */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Common Themes in Swords
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '.75rem' }}>
          {THEMES.map(t => (
            <div key={t.title} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.06em', color: 'var(--gold)', marginBottom: '.45rem' }}>{t.title}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.82rem', lineHeight: 1.6, margin: 0 }}>{t.text}</p>
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
            <div key={item.name} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Explore the other three suits</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Swords is one of four. Continue your journey through the Minor Arcana with the other elemental suits.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/tarot-suits/cups" style={{ padding: '.85rem 1.5rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em' }}>
            Cups · Water
          </Link>
          <Link href="/tarot-suits/pentacles" style={{ padding: '.85rem 1.5rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em' }}>
            Pentacles · Earth
          </Link>
          <Link href="/tarot-suits/wands" style={{ padding: '.85rem 1.5rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em' }}>
            Wands · Fire
          </Link>
          <Link href="/tarot-suits" style={{ padding: '.85rem 1.5rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em' }}>
            ✦ All Suits
          </Link>
        </div>
      </div>
    </div>
  )
}
