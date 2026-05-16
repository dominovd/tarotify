import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Cleanse Tarot Cards — 7 Methods That Work | TarotAxis',
  description: 'Clear old energy and reset your tarot deck with seven practical cleansing methods — from moonlight and breath to salt and sound. Learn when and how to cleanse your cards.',
  alternates: {
    canonical: 'https://tarotaxis.com/how-to-cleanse-tarot-cards',
    languages: {
      'en': 'https://tarotaxis.com/how-to-cleanse-tarot-cards',
      'es': 'https://tarotaxis.com/es/como-limpiar-cartas-de-tarot',
      'x-default': 'https://tarotaxis.com/how-to-cleanse-tarot-cards',
    },
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you cleanse tarot cards for the first time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start simple: knock on the deck three times, then hold it and breathe a clear intention over it. This takes under a minute and resets the deck\'s energy before your first reading. You can follow up with moonlight or crystal placement if you want a deeper cleanse.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have to cleanse tarot cards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not strictly, but most readers find that cleansing helps readings feel clearer, particularly after heavy use or after someone else has handled the deck. Think of it as a reset rather than a ritual requirement. If your readings feel accurate and clear, your current approach is working.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you cleanse tarot cards without sage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Several effective alternatives: moonlight overnight, placing a selenite or clear quartz crystal on the deck, knocking three times, sound (bell or singing bowl), or intentional breath. All work without any smoke or burning materials.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you cleanse tarot cards with salt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — surround the deck (in its box or bag, not in direct contact with the cards) with sea salt for 24 hours. It\'s one of the most thorough cleansing methods. Avoid letting loose salt touch the cards directly as it can scratch or warp them.',
      },
    },
  ],
}

const methods = [
  {
    title: 'Moonlight',
    body: 'Leave the deck face-down under moonlight overnight — a windowsill works perfectly. Full moon is the traditional choice, but any phase is effective. One of the gentlest and least intrusive methods available, requiring nothing other than patience and a clear night.',
  },
  {
    title: 'Breath and Intention',
    body: 'Hold the deck in both hands, take a slow breath, and exhale deliberately over the cards while holding a clear intention to clear and reset. Simple, can be done anywhere, and takes roughly 30 seconds. The specificity of your intention matters more than the technique itself.',
  },
  {
    title: 'Knocking',
    body: 'Knock on the deck three times with your knuckle. A quick energetic reset used by many professional readers between clients. Surprisingly effective as a between-readings reset — the abrupt interruption seems to help mark the boundary between one session and the next.',
  },
  {
    title: 'Smoke (Sage or Incense)',
    body: 'Pass the deck slowly through smoke from burning sage, palo santo, or incense. A traditional cleansing method found across many cultures. Use in a ventilated space and allow the smoke to drift across all sides of the deck rather than concentrating it in one area.',
  },
  {
    title: 'Crystal Placement',
    body: 'Place a cleansing crystal — clear quartz, selenite, or black tourmaline — on top of the deck overnight. Selenite is particularly popular because it is one of the few crystals that does not require cleansing itself. Keep the crystal stored safely so it does not scratch card surfaces.',
  },
  {
    title: 'Sound',
    body: 'Hold the deck near a singing bowl, bell, or tuning fork and let the vibration pass through it. Sound cleansing is fast and thorough, reaching all cards simultaneously rather than requiring surface-by-surface treatment. Any sustained, resonant tone will do the job.',
  },
  {
    title: 'Burying in Salt',
    body: 'Surround the deck — in its box or cloth bag, not in direct contact with the cards — with sea salt for 24 hours. The most thorough method available; well suited for decks that feel heavily used, stuck, or that have passed through many hands. Remove and brush off the salt completely before use.',
  },
]

export default function HowToCleanseCardsPage() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>How to Cleanse Tarot Cards</span>
      </nav>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.2em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Deck Care Guide
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '1rem', lineHeight: 1.25 }}>
          How to Cleanse Tarot Cards
        </h1>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.95rem' }}>
          Cleansing a tarot deck is about resetting its energy after heavy use, after someone else has handled it, or when readings feel muddled or unclear. Think of it as clearing cached data — the deck works with the same cards, but without residual impressions from previous sessions. It is also a useful ritual for setting intention before an important reading.
        </p>
      </div>

      {/* Section: When to Cleanse */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          When to Cleanse Your Deck
        </h2>
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 13, padding: '1.25rem 1.4rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            There is no fixed schedule — cleanse when it feels necessary. Common situations include: when you first acquire a new deck; after reading for someone else; when readings start to feel confused, repetitive, or oddly off-target; after a particularly intense or emotionally charged session; and at the new moon or the start of a new season as a routine reset. Any of these is a reasonable prompt.
          </p>
        </div>
      </section>

      {/* Section: Seven Methods */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Seven Cleansing Methods
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1rem' }}>
          {methods.map(({ title, body }, i) => (
            <div key={title} style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.65rem', marginBottom: '.65rem' }}>
                <div style={{ flexShrink: 0, width: 26, height: 26, borderRadius: '50%', background: 'rgba(201,168,76,.12)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.75rem' }}>
                  {i + 1}
                </div>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem' }}>{title}</div>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.8, margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: How Often */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          How Often Should You Cleanse?
        </h2>
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 13, padding: '1.25rem 1.4rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            It depends on how much you use your deck. Regular readers often knock or breathe over the deck before every session, do a moonlight cleanse once a month, and a full cleanse — salt or smoke — every few months. There is no rule. Cleanse when readings feel off, after someone else handles the deck, or simply when it feels right. Your own sense of when the deck needs a reset is a reliable guide.
          </p>
        </div>
      </section>

      {/* Section: Does Cleansing Damage Cards */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Does Cleansing Damage Cards?
        </h2>
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 13, padding: '1.25rem 1.4rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            Most methods are entirely safe. A few things to avoid: do not let cards come into contact with moisture, including wet salt. Keep cards away from direct flame. Store any crystals you use so they cannot scratch card surfaces. Smoke cleansing is fine for most card stock and will not affect the printed images. None of these methods alter the physical cards in any meaningful way when applied sensibly.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <Link href="/how-to-read-tarot" style={{ padding: '.8rem 1.6rem', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.35)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Learn to Read Tarot →
        </Link>
        <Link href="/free-reading" style={{ padding: '.8rem 1.6rem', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Try a Free Reading →
        </Link>
      </div>

      {/* FAQ */}
      <section>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
          Common Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.5rem' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.8, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
