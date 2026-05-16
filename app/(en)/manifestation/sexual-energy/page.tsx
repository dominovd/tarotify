import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Manifest Sexual Energy Tarot Spread — 3 Card Aliveness Reading | TarotAxis',
  description: 'A 3-card tarot spread for sexual energy and aliveness. Name what has been muted in you, recognise what activates your aliveness, and find the practice that returns you to your own desire.',
  alternates: {
    canonical: 'https://tarotaxis.com/manifestation/sexual-energy',
    languages: {
      'en': 'https://tarotaxis.com/manifestation/sexual-energy',
      'es': 'https://tarotaxis.com/es/manifestacion/energia-sexual',
      'x-default': 'https://tarotaxis.com/manifestation/sexual-energy',
    },
  },
  openGraph: {
    title: 'Manifest Sexual Energy Tarot Spread — 3 Card Aliveness Reading',
    description: 'A 3-card tarot spread for sexual energy and aliveness. Name what has been muted, recognise what activates you, and find the practice that returns you to your own desire.',
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'What Has Been Muted',
    desc: 'The specific way your aliveness has been dampened — sometimes through trauma, sometimes through overwork, sometimes through long stretches of life that did not include you. This card names the quality of feeling, sensation or desire that has gone quiet. It is the part of you that asks to be felt again.',
  },
  {
    num: 2,
    name: 'What Activates You',
    desc: 'The quality, environment, practice or kind of attention that genuinely returns you to your body and your desire. This is often more specific and more ordinary than people expect — a particular kind of music, a particular kind of solitude, a particular pace of touch. The card invites honesty rather than performance.',
  },
  {
    num: 3,
    name: 'The Practice That Returns You to Desire',
    desc: 'The small, repeatable practice that rebuilds the relationship with your own erotic and life-force energy. Solo first, usually. Daily or near-daily, usually. This card points to the unglamorous, embodied work that, over weeks and months, allows aliveness to come back online without forcing or performance.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Is this spread appropriate if I'm single?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and in many ways it is most useful when read alone. This spread is fundamentally about your relationship with your own aliveness, not your relationship with another person. Partnership is optional; desire is not. Whether you have been single for a week or for a decade, the work of recognising what mutes you, what activates you, and what practice returns you to yourself belongs to you first. A partner can only ever meet you where you have already met yourself.',
      },
    },
    {
      '@type': 'Question',
      name: "Is this spread appropriate if I'm asexual?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sexual energy in this spread means life force and desire in the broadest sense — the willingness to want, to feel, to be moved by beauty, to be embodied in a life that includes you. The spread does not require sexual practice to be useful and does not assume that aliveness must express itself through sex. Many asexual readers find this reading genuinely clarifying, because it names erotic energy as a quality of being alive rather than a script of behaviour.',
      },
    },
    {
      '@type': 'Question',
      name: "What if the 'muted' card points to past trauma?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It sometimes does, and the spread should be taken seriously when it does. Tarot can be a doorway — a way of naming what has been hard to name — but it is not a substitute for professional support. If the first card surfaces something tender or destabilising, please proceed gently, slow the reading down, and consider working with a trauma-informed therapist alongside any inner practice. The honour of this work is in not pushing past what your body is telling you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I share this reading with a partner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not necessarily, and often not straight away. This work tends to be more honest when done in private first, because the moment a reading is performed for a partner it can quietly bend toward what you imagine they want to hear. Sit with the cards alone. Let them work on you for a few weeks. If, later, something from the reading wants to be spoken aloud to someone you trust, you will know — and by then it will be yours to share rather than yours to negotiate.',
      },
    },
  ],
}

export default function SexualEnergyPage() {
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
        <span style={{ color: 'var(--gold)' }}>Sexual Energy</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>❋</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Manifest Sexual Energy Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          A three-card reading for the quieter, more honest work of returning to your own aliveness. Not a script for performance — an invitation to recognise what has been muted, what activates you, and the practice that brings desire back online.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['3 Cards', 'Aliveness', 'Embodiment'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Why this spread */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Why This Spread
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Of all the manifestation topics, sexual energy is the one most often misnamed. The phrase gets reduced to sex acts, performance and chemistry — but underneath the word sits something larger and more honest. Sexual energy is life force. It is the willingness to want, to be moved, to feel beauty in the body. When this is alive in a person, sex is one of many expressions of it; when this is muted, no amount of technique or relationship advice meets the actual problem. This spread treats erotic energy at that wider level — as aliveness, as desire as a life force — and works backwards from there.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            For that reason, this reading is best done alone and in private, regardless of your relationship status. Whether you are single, partnered, navigating a long stretch of celibacy, working through trauma, or simply tired, the questions belong to you first. A spread done in front of (or even mentally toward) someone else tends to bend itself into reassurance or performance. Done alone, with the door closed and the phone elsewhere, the cards have room to be honest — and so do you. The reading is the same for anyone who picks it up: there is no presumption here about what your aliveness should look like.
          </p>
          <p>
            This spread is not a love or romance reading, and the distinction matters. A love spread is about connection with another person — the dynamic, the timing, the unspoken thing between two people. This spread is about the relationship with your own desire, which has its own life whether or not there is anyone else in the room. The two readings can complement each other, but they are not substitutes. If you have been confusing one for the other, this is a useful place to begin separating them.
          </p>
        </div>
      </div>

      {/* Spread layout */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          The Three Cards
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          A simple line of three: what has been muted in you, what genuinely activates your aliveness, and the small daily practice that rebuilds the relationship with your own desire. Draw them slowly. Sit with each before moving on.
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
                <div style={{ fontSize: '.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center', maxWidth: 88 }}>{pos.name}</div>
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Ready to sit with your three cards?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Take this reading privately, without rush. Pair it with the love or health spread if a fuller picture would honour the question you are really asking.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/manifestation/love" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Love Spread
          </Link>
          <Link href="/manifestation/health" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Health Spread
          </Link>
          <Link href="/manifestation" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            All Manifestation Spreads
          </Link>
        </div>
      </div>
    </div>
  )
}
