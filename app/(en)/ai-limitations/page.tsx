import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Limitations in Tarot Readings — What the Model Can and Cannot Do | TarotAxis',
  description:
    'A candid, technical account of what the AI behind TarotAxis readings can and cannot do — and the mitigations we apply to keep interpretations honest, useful and safe.',
  alternates: {
    canonical: 'https://tarotaxis.com/ai-limitations',
    languages: {
      en: 'https://tarotaxis.com/ai-limitations',
      es: 'https://tarotaxis.com/es/limitaciones-de-ia',
      'x-default': 'https://tarotaxis.com/ai-limitations',
    },
  },
  openGraph: {
    title: 'AI Limitations in Tarot Readings — TarotAxis',
    description:
      'What the AI behind TarotAxis can and cannot do, plus the mitigations we apply.',
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

export default function AILimitationsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AI Limitations in Tarot Readings',
    description:
      'A candid, technical account of what the AI behind TarotAxis readings can and cannot do, and the mitigations we apply.',
    author: { '@type': 'Organization', name: 'TarotAxis Editorial', url: 'https://tarotaxis.com' },
    publisher: {
      '@type': 'Organization',
      name: 'TarotAxis',
      url: 'https://tarotaxis.com',
      logo: { '@type': 'ImageObject', url: 'https://tarotaxis.com/og?slug=the-fool' },
    },
    datePublished: '2026-05-23',
    dateModified: '2026-05-23',
    mainEntityOfPage: 'https://tarotaxis.com/ai-limitations',
    inLanguage: 'en',
    about: [
      { '@type': 'Thing', name: 'AI tarot readings' },
      { '@type': 'Thing', name: 'Large language models' },
      { '@type': 'Thing', name: 'AI safety in divination apps' },
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
        <span style={{ color: 'var(--gold)' }}>AI Limitations</span>
      </nav>

      <header style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.22em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Editorial standards
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '.6rem' }}>
          AI limitations in tarot readings
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, maxWidth: 580, margin: '0 auto' }}>
          A plain-language account of what the model behind TarotAxis readings
          can do, where it falls short, and the guardrails we put in place to
          keep the experience honest.
        </p>
      </header>

      <p style={PROSE}>
        TarotAxis uses Anthropic&apos;s Claude family of large language models to
        turn the cards you draw into a personalised reflection. AI is a
        powerful interpretive engine, but it is not a mystical instrument and
        not omniscient. This page exists so that you know, in detail, what the
        model is actually doing — and what it cannot do no matter how the
        question is phrased.
      </p>

      <h2 style={SECTION_HEADER}>What the model can do well</h2>
      <p style={PROSE}>
        Claude is trained on a very large body of text that includes
        thousands of works on tarot, symbolism, mythology and depth
        psychology. Given a specific spread, it can recognise the cards as
        named entities, recall their canonical upright and reversed meanings,
        weave together the keyword sets of multiple cards into a coherent
        narrative, and ground that narrative in the question the seeker
        provided. It can also adjust tone — gentler, sharper, more
        practical — and translate the same reading idiomatically into
        English or Spanish.
      </p>
      <p style={PROSE}>
        In other words: it is an unusually good explainer of established
        symbolism. The card meanings it draws on were not invented by the
        model; they were inherited from the same Rider-Waite-Smith and
        Jungian sources a human reader would consult.
      </p>

      <h2 style={SECTION_HEADER}>What the model literally cannot do</h2>
      <p style={PROSE}>
        It cannot perceive you. There is no facial expression, no tone of
        voice, no body language, no knowledge of your history, your
        relationships, your medical chart, your finances, or anything outside
        the few sentences you typed. Every claim it makes about &quot;your
        situation&quot; is inferred entirely from the cards and your stated
        question. When it sounds uncannily specific, that specificity comes
        from the symbolism, not from any direct knowledge of your life.
      </p>
      <p style={PROSE}>
        It cannot predict the future. The model has no causal model of your
        world. When it uses future-tense language it is gesturing at
        possibilities suggested by the cards, not making forecasts.
        TarotAxis prompts are explicitly written to avoid hard predictions
        (&quot;you will&quot;, &quot;in three months&quot;), and to speak instead about
        invitations, patterns, energies and choices.
      </p>
      <p style={PROSE}>
        It cannot give you facts it has not been given. The model has no
        access to your calendar, the news after its training cutoff, the
        weather, your messages, or anything happening on the live internet.
        If a reading sounds like it knows something it shouldn&apos;t, that
        impression is pattern matching — not information leakage.
      </p>

      <h2 style={SECTION_HEADER}>Where the model tends to fail</h2>
      <p style={PROSE}>
        Three failure modes show up consistently in AI-assisted tarot
        readings:
      </p>
      <p style={PROSE}>
        <strong>Over-confidence.</strong> Language models default to a fluent,
        confident voice even when the underlying inference is weak. A
        spread answered with &quot;the cards strongly suggest&quot; sounds more
        certain than it should. Our prompts ask the model to speak in
        invitations and possibilities, and to name uncertainty when it
        exists — but the default tilt is towards certainty and we cannot
        fully eliminate it.
      </p>
      <p style={PROSE}>
        <strong>Sycophancy.</strong> If a question is framed in a leading way
        (&quot;the cards say I should leave my job, right?&quot;), an unguided model
        often agrees. TarotAxis prompts redirect leading questions back to
        the cards themselves rather than confirming the framing — but a
        determined user can still push the model towards the answer they
        wanted to hear. The cure is to ask open questions, not yes/no
        prompts.
      </p>
      <p style={PROSE}>
        <strong>Confabulation.</strong> When the model is unsure of a
        symbol&apos;s historical detail, it sometimes invents one that sounds
        plausible. We mitigate this by feeding the model a compact, edited
        meanings table built from the human-reviewed card library, so the
        model has a stable reference and does not have to recall from memory.
        But fine-grained claims about historical sources or specific deck
        editions should be treated as starting points for research, not
        established fact.
      </p>

      <h2 style={SECTION_HEADER}>What we do about it</h2>
      <p style={PROSE}>
        Several engineering choices are in place to keep readings honest.
        The system prompt explicitly forbids medical, legal, financial and
        relationship-leaving advice; if a question lands on one of those
        topics, the model redirects to &quot;what the cards invite you to
        reflect on&quot; rather than what to do. The card meanings the model
        sees are the same human-reviewed entries published on
        <Link href="/cards" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '3px' }}> the cards library</Link>,
        which keeps the AI in step with the rest of the site rather than
        drifting. Responses are length-capped so the model cannot bury weak
        inferences under volume. The temperature and decoding parameters are
        tuned to encourage hedged, reflective phrasing.
      </p>
      <p style={PROSE}>
        We also publish our reasoning so readers can pressure-test it. The
        <Link href="/methodology" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '3px' }}> methodology page</Link>{' '}
        describes the interpretive frame in detail, and the
        <Link href="/reflection-vs-prediction" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '3px' }}> reflection-vs-prediction</Link>{' '}
        page sets out the philosophical stance behind those choices.
      </p>

      <h2 style={SECTION_HEADER}>The bottom line</h2>
      <p style={PROSE}>
        An AI tarot reading at TarotAxis is best understood as a structured
        prompt for self-reflection rendered in the voice of a thoughtful
        reader. It is not a forecast, a diagnosis, or a substitute for
        professional advice in any domain. If a reading helps you think
        more clearly about a situation, name a pattern, or ask a better
        question — it has done its job. If it tries to tell you what to do,
        treat it with the same scepticism you would extend to any stranger
        with strong opinions about your life.
      </p>

      <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 12 }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .6, textTransform: 'uppercase', marginBottom: '.6rem' }}>
          Related editorial pages
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.4rem', color: 'var(--muted)', fontSize: '.85rem' }}>
          <li><Link href="/methodology" style={{ color: 'var(--gold)' }}>Methodology</Link> — the interpretive framework behind every reading</li>
          <li><Link href="/reflection-vs-prediction" style={{ color: 'var(--gold)' }}>Reflection vs prediction</Link> — why we frame tarot this way</li>
          <li><Link href="/ethical-guidelines" style={{ color: 'var(--gold)' }}>Ethical guidelines</Link> — what we will and will not write about</li>
        </ul>
      </div>
    </div>
  )
}
