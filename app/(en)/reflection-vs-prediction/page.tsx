import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Reflection vs Prediction — Why TarotAxis Reads Tarot This Way | TarotAxis',
  description:
    'The philosophical stance behind TarotAxis: tarot as a mirror for self-reflection rather than a predictive instrument. The reasoning, the history, and the practical consequences for every reading.',
  alternates: {
    canonical: 'https://tarotaxis.com/reflection-vs-prediction',
    languages: {
      en: 'https://tarotaxis.com/reflection-vs-prediction',
      es: 'https://tarotaxis.com/es/reflexion-vs-prediccion',
      'x-default': 'https://tarotaxis.com/reflection-vs-prediction',
    },
  },
  openGraph: {
    title: 'Reflection vs Prediction — TarotAxis',
    description:
      'Why TarotAxis treats tarot as a reflective tool rather than a fortune-telling device.',
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

export default function ReflectionVsPredictionPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Reflection vs Prediction — Why TarotAxis Reads Tarot This Way',
    description:
      'The philosophical stance behind TarotAxis: tarot as reflective rather than predictive.',
    author: { '@type': 'Organization', name: 'TarotAxis Editorial', url: 'https://tarotaxis.com' },
    publisher: {
      '@type': 'Organization',
      name: 'TarotAxis',
      url: 'https://tarotaxis.com',
      logo: { '@type': 'ImageObject', url: 'https://tarotaxis.com/og?slug=the-fool' },
    },
    datePublished: '2026-05-23',
    dateModified: '2026-05-23',
    mainEntityOfPage: 'https://tarotaxis.com/reflection-vs-prediction',
    inLanguage: 'en',
    about: [
      { '@type': 'Thing', name: 'Tarot interpretation' },
      { '@type': 'Thing', name: 'Reflective practice' },
      { '@type': 'Thing', name: 'Divination history' },
      { '@type': 'Thing', name: 'Jungian psychology' },
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
        <span style={{ color: 'var(--gold)' }}>Reflection vs Prediction</span>
      </nav>

      <header style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.22em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Editorial standards
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '.6rem' }}>
          Reflection vs prediction
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, maxWidth: 580, margin: '0 auto' }}>
          Why TarotAxis reads tarot as a mirror for the present, not a window
          into the future — and what that decision costs and gives in
          practice.
        </p>
      </header>

      <p style={PROSE}>
        Almost every editorial choice on TarotAxis follows from one position:
        the cards are an instrument for reflection, not a forecasting device.
        This is not a marketing line; it changes what we ask the model to
        say, what topics we refuse, how we phrase keywords, and how we frame
        the meaning of any individual draw. The page below sets out the
        reasoning so you can evaluate it on its merits.
      </p>

      <h2 style={SECTION_HEADER}>The two traditions, briefly</h2>
      <p style={PROSE}>
        Tarot has been read in both modes for most of its history. From the
        late 18th century onwards, French occultists like Etteilla and the
        Marseilles cartomants used the deck for predictive divination —
        timing, outcomes, names, dates. Their tradition is still alive in
        modern fortune-telling practice. Alongside it, and especially after
        the publication of the Rider-Waite-Smith deck in 1909 and the
        psychological writings of Carl Jung in the 1930s and 40s, a second
        tradition emerged: tarot as a structured prompt for introspection,
        with the cards functioning as archetypal symbols of the inner life.
        Both traditions still exist, and both have skilled practitioners.
        TarotAxis sits squarely in the second.
      </p>

      <h2 style={SECTION_HEADER}>Why we chose the reflective frame</h2>
      <p style={PROSE}>
        Three reasons. The first is epistemic. We have no good evidence that
        any deck of cards is capable of forecasting specific future events,
        and a great deal of evidence that humans are extremely good at
        retrofitting ambiguous statements to whatever happens next (the
        &quot;Barnum effect&quot;). To stake a service on predictive claims
        we cannot back up would be intellectually dishonest.
      </p>
      <p style={PROSE}>
        The second is ethical. Predictive readings are particularly easy to
        misuse around vulnerable people — the recently bereaved, the
        anxious, the chronically ill — and we did not want to build a
        product that could push someone towards a decision they would not
        otherwise make on the basis of cards drawn at random. The
        reflective frame still helps the same people, but it returns
        agency to them.
      </p>
      <p style={PROSE}>
        The third is practical. The cards genuinely are very good at the
        reflective task. The 78-card deck encodes a remarkably complete
        catalogue of recognisable human situations — grief, ambition,
        stagnation, breakthrough, betrayal, repair — and laying down three
        of them in response to a question reliably surfaces angles the
        querent had not yet articulated. That is something readers report
        from a wide range of belief systems, including outright sceptics.
      </p>

      <h2 style={SECTION_HEADER}>What that means in a reading</h2>
      <p style={PROSE}>
        Concretely, readings on TarotAxis avoid the future tense whenever
        the model can speak in the present. &quot;You will receive news in
        three months&quot; becomes &quot;the deck is naming a period of waiting; what
        information are you actually waiting for?&quot;. &quot;He will come back&quot;
        becomes &quot;the card invites you to look at what is unresolved between
        you, regardless of whether contact resumes&quot;. The shift is small in
        wording and large in effect: the seeker is positioned as the
        decision-maker, the cards as the prompt.
      </p>
      <p style={PROSE}>
        Some questions are not really about reflection — they are about
        outcome. &quot;Will I get this job?&quot;, &quot;Should I leave him?&quot;, &quot;Will
        the chemo work?&quot;. We do not answer those questions. Instead, we
        reframe them: what would help you prepare regardless of the
        outcome, what is the part of the decision that is already yours,
        what is the question you would ask if the answer to this one were
        not available.
      </p>

      <h2 style={SECTION_HEADER}>What the reflective frame costs</h2>
      <p style={PROSE}>
        Some seekers come to tarot precisely because they want a forecast.
        TarotAxis is not the right service for them, and we will lose those
        users to other apps. We think that is the correct trade. The
        reflective frame is the only one we can stand behind without
        misleading anyone, and the seekers it suits — people using tarot to
        think more clearly — are the ones we want to serve well.
      </p>

      <h2 style={SECTION_HEADER}>A note on the AI</h2>
      <p style={PROSE}>
        Adding a large language model to the experience changes the
        mechanics of a reading but not its philosophy. The model is asked
        to speak in the same reflective register a thoughtful human reader
        would use, and the same hard rules apply (no hard predictions, no
        medical / legal / financial / relationship-leaving advice). If you
        want a deeper account of how the AI is constrained and where it
        falls short, see the{' '}
        <Link href="/ai-limitations" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>AI limitations page</Link>.
        For the topic-by-topic editorial rules, see the{' '}
        <Link href="/ethical-guidelines" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>ethical guidelines</Link>.
      </p>

      <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 12 }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .6, textTransform: 'uppercase', marginBottom: '.6rem' }}>
          Related editorial pages
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.4rem', color: 'var(--muted)', fontSize: '.85rem' }}>
          <li><Link href="/methodology" style={{ color: 'var(--gold)' }}>Methodology</Link> — the interpretive framework behind every reading</li>
          <li><Link href="/ai-limitations" style={{ color: 'var(--gold)' }}>AI limitations</Link> — what the model can and cannot do</li>
          <li><Link href="/ethical-guidelines" style={{ color: 'var(--gold)' }}>Ethical guidelines</Link> — topic-by-topic editorial rules</li>
        </ul>
      </div>
    </div>
  )
}
