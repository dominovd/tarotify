import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About TarotAxis — Who We Are | TarotAxis',
  description: 'About TarotAxis — an independent AI-powered tarot reading site offering all 78 card meanings, spreads, lunar rituals, and honest guidance for self-reflection.',
  alternates: {
    canonical: 'https://tarotaxis.com/about',
    languages: {
      'en': 'https://tarotaxis.com/about',
      'es': 'https://tarotaxis.com/es/acerca-de',
      'x-default': 'https://tarotaxis.com/about',
    },
  },
}

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>About</span>
      </nav>

      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.2em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          About
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '1rem', lineHeight: 1.25 }}>
          About TarotAxis
        </h1>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.95rem' }}>
          TarotAxis is an independent, AI-powered tarot reading site. Free, ad-light, and built for people who want to think clearly with the help of an old set of images — not to be sold a fate.
        </p>
      </div>

      <section style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>What We Believe</h2>
        <p style={{ color: 'var(--text)', lineHeight: 1.85, fontSize: '.9rem', marginBottom: '1rem' }}>
          Tarot is a thinking tool, not a fortune machine. The 78 cards are an extraordinarily compact library of human experience — they reflect what is already true rather than determining what will be. Used with honesty, the cards turn vague feelings into specific questions and let you see your situation from angles you would not have reached alone.
        </p>
        <p style={{ color: 'var(--text)', lineHeight: 1.85, fontSize: '.9rem', margin: 0 }}>
          We do not promise certainty, prediction, or supernatural intervention. We do offer a beautifully built free reading tool, all 78 card meanings written with care, dozens of spreads and lunar rituals, and the structure to keep your practice honest.
        </p>
      </section>

      <section style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>What You Will Find Here</h2>
        <ul style={{ color: 'var(--text)', lineHeight: 1.85, fontSize: '.9rem', paddingLeft: '1.25rem', margin: 0 }}>
          <li style={{ marginBottom: '.5rem' }}>All 78 tarot card meanings — upright and reversed, plus love, career and spiritual context.</li>
          <li style={{ marginBottom: '.5rem' }}>A free interactive reading tool with multiple spreads, saved locally on your device.</li>
          <li style={{ marginBottom: '.5rem' }}>A library of spreads: classic three-card and Celtic Cross, love and relationship layouts, lunar rituals, manifestation work.</li>
          <li style={{ marginBottom: '.5rem' }}>Step-by-step guides for beginners, including how to read, shuffle, cleanse and journal.</li>
          <li style={{ marginBottom: 0 }}>A daily card, a yes/no oracle, a birth card calculator, and reference material on suits, decks and zodiac correspondences.</li>
        </ul>
      </section>

      <section style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>A Note on the AI</h2>
        <p style={{ color: 'var(--text)', lineHeight: 1.85, fontSize: '.9rem', margin: 0 }}>
          The card meanings on TarotAxis are written content, drawing on the standard Rider-Waite-Smith tradition and curated by a human editor. The site uses machine assistance for some content production, but every page is reviewed for honesty, accuracy and tone before publication. We do not use AI to generate live mystical claims about your future — that is not how the cards work.
        </p>
      </section>

      <section style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>Contact</h2>
        <p style={{ color: 'var(--text)', lineHeight: 1.85, fontSize: '.9rem', margin: 0 }}>
          Questions, feedback, corrections, partnership enquiries — we read everything. <a href="mailto:info@tarotaxis.com" style={{ color: 'var(--gold)', borderBottom: '1px solid rgba(201,168,76,.3)' }}>info@tarotaxis.com</a>
        </p>
      </section>

      <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="/free-reading" style={{ padding: '.8rem 1.6rem', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.35)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Try a Free Reading →
        </Link>
      </div>
    </div>
  )
}
