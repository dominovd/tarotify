import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ethical Guidelines for Tarot Readings — TarotAxis Editorial Rules | TarotAxis',
  description:
    'The topic-by-topic rules TarotAxis follows for tarot readings: what we will not write about, how we handle distress, how we redirect medical / legal / financial / relationship-leaving questions.',
  alternates: {
    canonical: 'https://tarotaxis.com/ethical-guidelines',
    languages: {
      en: 'https://tarotaxis.com/ethical-guidelines',
      es: 'https://tarotaxis.com/es/principios-eticos',
      'x-default': 'https://tarotaxis.com/ethical-guidelines',
    },
  },
  openGraph: {
    title: 'Ethical Guidelines for Tarot Readings — TarotAxis',
    description:
      'The topic-by-topic editorial rules behind every TarotAxis reading.',
    type: 'article',
  },
}

const SECTION_HEADER: React.CSSProperties = {
  fontFamily: "'Cinzel',serif",
  fontSize: '1.05rem',
  letterSpacing: '.06em',
  color: 'var(--gold)',
  marginTop: '2.5rem',
  marginBottom: '1rem',
}

const PROSE: React.CSSProperties = {
  color: 'var(--text)',
  lineHeight: 1.78,
  fontSize: '.95rem',
  marginBottom: '1rem',
}

export default function EthicalGuidelinesPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ethical Guidelines for Tarot Readings',
    description:
      'The topic-by-topic editorial rules TarotAxis applies to readings.',
    author: { '@type': 'Organization', name: 'TarotAxis Editorial', url: 'https://tarotaxis.com' },
    publisher: {
      '@type': 'Organization',
      name: 'TarotAxis',
      url: 'https://tarotaxis.com',
      logo: { '@type': 'ImageObject', url: 'https://tarotaxis.com/og?slug=the-fool' },
    },
    datePublished: '2026-05-23',
    dateModified: '2026-05-23',
    mainEntityOfPage: 'https://tarotaxis.com/ethical-guidelines',
    inLanguage: 'en',
    about: [
      { '@type': 'Thing', name: 'Tarot ethics' },
      { '@type': 'Thing', name: 'Editorial guidelines' },
      { '@type': 'Thing', name: 'AI safety policy' },
    ],
  }

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
        <span>/</span>
        <Link href="/methodology" style={{ color: 'var(--muted)' }}>Methodology</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Ethical Guidelines</span>
      </nav>

      <header style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.22em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Editorial standards
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '.6rem' }}>
          Ethical guidelines
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, maxWidth: 580, margin: '0 auto' }}>
          What we write, what we refuse to write, and how we handle the hard
          cases. Every TarotAxis reading is constrained by the rules below.
        </p>
      </header>

      <p style={PROSE}>
        Tarot readings have real influence over people who reach for them at
        difficult moments. We take that seriously. The guidelines below are
        not aspirations — they are wired into the system prompt that
        constrains every AI-assisted reading on TarotAxis and into the
        human-edited text that backs the static interpretations. If we ever
        violate one of them in a reading you receive, please tell us at
        info@tarotaxis.com and we will look at the case.
      </p>

      <h2 style={SECTION_HEADER}>What we will not write</h2>
      <p style={PROSE}>
        <strong>Medical advice.</strong> The cards will not tell you whether
        to keep, change, stop or refuse any treatment, medication, therapy
        or procedure, regardless of how the question is framed. If a
        question implies a medical decision, the reading will gently
        redirect to &quot;what the cards invite you to reflect on while you
        speak with your clinician&quot;.
      </p>
      <p style={PROSE}>
        <strong>Legal advice.</strong> Same rule. The cards will not advise
        on contracts, divorce settlements, custody arrangements,
        immigration cases, criminal matters or business disputes. They may
        be used to reflect on how you feel about a situation, but never as
        a substitute for a qualified lawyer.
      </p>
      <p style={PROSE}>
        <strong>Financial advice.</strong> No trades, no investment picks,
        no &quot;is now the right time to buy?&quot;. The cards can illuminate your
        relationship to money, scarcity or risk — they cannot price a
        security.
      </p>
      <p style={PROSE}>
        <strong>&quot;Should I leave?&quot; verdicts on relationships.</strong> A
        decision to end an intimate or family relationship belongs to the
        person living inside it. The cards will not deliver a yes/no on
        this category. They will help you name what is unresolved, what
        you keep hoping for, and what you are tolerating — and leave the
        decision where it belongs.
      </p>
      <p style={PROSE}>
        <strong>Predictions about third parties.</strong> &quot;Does she love
        me?&quot;, &quot;Is he cheating?&quot;, &quot;Will my boss fire me?&quot; — questions about
        another person&apos;s inner state or future action. We refuse these
        because (a) we cannot know, and (b) telling you we can know
        actively harms the relationship you are asking about. The reading
        will redirect to your own experience of the situation.
      </p>

      <h2 style={SECTION_HEADER}>How we handle distress</h2>
      <p style={PROSE}>
        If a question contains language suggesting crisis — explicit
        self-harm, abuse, suicidal ideation, fear for personal safety —
        the AI reading will not provide a tarot interpretation in the
        normal sense. Instead, the response will acknowledge what the
        seeker has written, gently note that tarot is not the right tool
        for the moment, and direct the person to professional help. We
        consider this an absolute floor, not a feature flag.
      </p>
      <p style={PROSE}>
        If you ever receive a reading that fails to do this when it should,
        treat it as a serious bug and report it. The promise of the
        reflective frame depends on it.
      </p>

      <h2 style={SECTION_HEADER}>Hard questions we do answer</h2>
      <p style={PROSE}>
        We do read on grief, on long unemployment, on chronic illness, on
        complicated families, on creative blocks, on conflict at work, on
        loneliness, on confusing relationships. The reflective frame
        described on the{' '}
        <Link href="/reflection-vs-prediction" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>reflection-vs-prediction</Link>{' '}
        page applies in every case: the cards help name the shape of the
        situation, suggest a useful angle, and return agency to the
        seeker. They do not tell anyone what to do.
      </p>

      <h2 style={SECTION_HEADER}>What we do with what you write</h2>
      <p style={PROSE}>
        Your question is sent to the AI model along with the cards you
        drew, and the reading is streamed back to you. We do not store
        questions in plaintext alongside identifying information, and we
        do not use questions to train any model. Anonymous aggregate data
        about which cards were drawn (slug + orientation, no question, no
        identifying data) feeds the public{' '}
        <Link href="/trends" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>tarot trends</Link>{' '}
        page. The full privacy story lives on the{' '}
        <Link href="/privacy" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>privacy page</Link>.
      </p>

      <h2 style={SECTION_HEADER}>Errors and corrections</h2>
      <p style={PROSE}>
        We update the static card library and the AI prompts when an
        editorial issue is found. The methodology page lists the
        interpretive sources we lean on; if you spot a factual mistake —
        about a card&apos;s historical attribution, an elemental
        correspondence, a numerological detail — please write in. We will
        fix it and credit the correction in the methodology page&apos;s
        change log.
      </p>

      <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 12 }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .6, textTransform: 'uppercase', marginBottom: '.6rem' }}>
          Related editorial pages
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.4rem', color: 'var(--muted)', fontSize: '.85rem' }}>
          <li><Link href="/methodology" style={{ color: 'var(--gold)' }}>Methodology</Link> — the interpretive framework behind every reading</li>
          <li><Link href="/reflection-vs-prediction" style={{ color: 'var(--gold)' }}>Reflection vs prediction</Link> — why we frame tarot this way</li>
          <li><Link href="/ai-limitations" style={{ color: 'var(--gold)' }}>AI limitations</Link> — what the model can and cannot do</li>
        </ul>
      </div>
    </div>
  )
}
