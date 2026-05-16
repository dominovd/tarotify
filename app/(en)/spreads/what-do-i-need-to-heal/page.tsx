import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Do I Need to Heal Tarot Spread — 3 Card Inner Work Reading | TarotAxis',
  description: 'A 3-card tarot spread for identifying the inner wound asking for attention. Name the wound, understand its origin, and find the next step toward integration.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/what-do-i-need-to-heal',
    languages: {
      'en': 'https://tarotaxis.com/spreads/what-do-i-need-to-heal',
      'es': 'https://tarotaxis.com/es/tiradas/que-necesito-sanar',
      'x-default': 'https://tarotaxis.com/spreads/what-do-i-need-to-heal',
    },
  },
  openGraph: {
    title: 'What Do I Need to Heal Tarot Spread — 3 Card Inner Work Reading',
    description: 'A 3-card tarot spread for identifying the inner wound asking for attention, its origin, and the next step toward integration.',
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'The Wound',
    desc: 'The specific hurt, pattern or unintegrated experience asking for attention right now. This is often older than the current trigger — the present moment has simply made it audible. The card names what part of you is genuinely tender, not what you suspect ought to be addressed.',
  },
  {
    num: 2,
    name: 'Its Origin',
    desc: 'Where the wound was first formed — the early experience, relationship dynamic, or moment that taught the protective pattern. This card is not about blame; it is about context. Understanding the origin gives the wound a coherent story and loosens its grip on the present.',
  },
  {
    num: 3,
    name: 'The Path of Integration',
    desc: 'Not how to fix it, but how to be with it. The inner stance, practice, or shift that allows the wound to become wisdom rather than an open weather system. This card describes the relationship you are being invited to build with this part of yourself.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between this spread and therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tarot illuminates; therapy integrates. A spread like this can name a wound with striking clarity and give you language for something you have been carrying wordlessly — but naming is only the first movement of healing. The slower, relational work of unwinding old patterns, regulating a nervous system that has learned to brace, and rewriting attachment scripts belongs to therapy, somatic work, or another trained practitioner. The cards work alongside that work, never as a replacement for it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if the wound surfaced is overwhelming?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Set the reading aside and come back to it. Sit with someone you trust — a friend, a therapist, a support line — and let the material be witnessed rather than swallowed alone. The cards do not require you to face anything in a single sitting, and pacing is part of healing rather than a failure of it. If what surfaces touches grief, trauma, or thoughts of self-harm, please reach out to a qualified professional. A spread is a doorway, not an instruction.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can wounds heal completely?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some do; many do not, and that is not failure. Integration — rather than erasure — is the realistic and generous goal. A wound that has been seen, named and made meaning of stops being a live wire. It becomes a scar that informs you without ambushing you. You may still feel its shape on certain days, especially anniversaries or particular triggers, but it no longer runs the show. Wisdom worn from real wounds is one of the most useful things a person can carry.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often can I do this spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No more than once a month, and often less. Inner-work spreads are not daily readings. The material they surface needs time to settle, to be felt in waking life, to be tested against the friction of ordinary days. Drawing the same spread again the next week tends to produce noise rather than insight, because nothing has actually moved in you yet. Give yourself at least four weeks between readings — six is often better — and journal in the gap.',
      },
    },
  ],
}

export default function WhatDoINeedToHealPage() {
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
        <span style={{ color: 'var(--gold)' }}>What Do I Need to Heal</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>❋</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          What Do I Need to Heal Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          A three-card spread for inner work, shadow work, and the quiet preparation that often precedes new love. It is not therapy — but it is a useful mirror. Use it to identify what is asking to be felt, where it began, and how to walk with it from here.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['3 Cards', 'Inner Work', 'Healing'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Energy / About */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          About This Spread
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            There is a meaningful difference between healing as fixing and healing as integration. The fixing model treats a wound as a problem to be solved, a glitch to be removed before life can resume. Integration treats the same wound as information — a tender place that, once acknowledged and made room for, stops distorting everything around it. This spread belongs to the second tradition. It will not promise to take the pain away. It will help you stop fighting it.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Naming a wound has its own healing effect, before any further work begins. Most inner pain lives in a wordless register: a tightening in the chest when a particular person calls, a flinch you cannot account for, a story you keep finding yourself inside. When the cards put a name on that pattern — abandonment, unmet need, a younger self still waiting for someone who never came — the body often releases a held breath. Recognition itself is medicine, and it is the first thing this spread offers.
          </p>
          <p>
            There are times when this spread is not enough. If what comes up is overwhelming, if it touches trauma you have not previously had support for, if it surfaces grief, dissociation, or thoughts of harming yourself, please treat that as a signal to involve a qualified therapist or trusted professional rather than a sign to draw more cards. The deck is a doorway. Walking through it well sometimes means walking alongside someone trained to hold what is on the other side.
          </p>
        </div>
      </div>

      {/* Spread */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          The Three Cards
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Draw the three cards in order, left to right. Read them slowly. Resist the urge to move on to the next card before you have honestly sat with the one before it.
        </p>

        {/* Visual Layout */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Card Layout
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {POSITIONS.map(pos => (
              <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
                <div style={{ width: 80, height: 120, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1.15rem', color: 'var(--gold)' }}>
                  {pos.num}
                </div>
                <div style={{ fontSize: '.62rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center', maxWidth: 80 }}>{pos.name}</div>
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Ready to begin the inner work?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Draw your three cards, then sit with them before reaching for interpretation. Related spreads below carry this work further.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/spreads/healing-after-heartbreak" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Healing After Heartbreak
          </Link>
          <Link href="/spreads/what-blocks-my-love" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            What Blocks My Love
          </Link>
          <Link href="/spreads/dark-moon" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Dark Moon Spread
          </Link>
        </div>
      </div>
    </div>
  )
}
