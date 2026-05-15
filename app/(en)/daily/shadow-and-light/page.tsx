import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shadow and Light Daily Tarot — Two Card Draw | TarotAxis',
  description: 'A two-card daily tarot practice: one card for the shadow, one for the light. A grounded morning ritual that honours both sides of the day before it begins.',
  alternates: {
    canonical: 'https://tarotaxis.com/daily/shadow-and-light',
    languages: {
      'en': 'https://tarotaxis.com/daily/shadow-and-light',
      'es': 'https://tarotaxis.com/es/carta-del-dia/sombra-y-luz',
      'x-default': 'https://tarotaxis.com/daily/shadow-and-light',
    },
  },
  openGraph: {
    title: 'Shadow and Light Tarot — Two Card Daily Draw',
    description: 'Pair shadow and light in a two-card daily tarot draw. Honest morning reflection that resists spiritual bypass.',
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'Shadow',
    desc: 'What wants attention today. The uncomfortable truth, the part of you that has been quietly waiting to be seen, the friction that — if ignored — will leak out sideways. The shadow card is not bad news. It is the honest news.',
  },
  {
    num: 2,
    name: 'Light',
    desc: 'What supports you today. The resource you can lean into, the gift that is already present, the energy that wants to be expressed. The light card shows you where you are quietly resourced — often in ways you have stopped noticing.',
  },
]

const PROMPTS = [
  'What is the shadow card asking me to acknowledge that I would rather not name?',
  'Where in my body do I feel the shadow card today? What does it want?',
  'How can the light card actively support me as I sit with the shadow?',
  'If I honoured both cards equally today, what would change about how I move through the day?',
  'Is there a relationship, decision, or habit where this pairing already feels familiar?',
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a shadow and light tarot draw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A shadow and light tarot draw is a two-card daily practice in which one card represents what wants attention or healing today (the shadow) and the second card represents what supports, resources, or sustains you (the light). It is a more honest alternative to a single positive daily card, because it asks you to acknowledge what is uncomfortable as well as what is helpful.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time of day should I do a shadow and light draw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'First thing in the morning is ideal, before phones, email, or the news pull your attention outward. The point of the practice is to set an honest baseline for the day, and that is hardest to do once you have already absorbed other people\'s urgency. Five quiet minutes with the cards and a journal is enough.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from a regular one-card daily tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A single daily card gives you one theme to hold. A shadow and light draw gives you two threads that are deliberately in tension. The pairing prevents spiritual bypass — the habit of only drawing for affirmation. You see both what the day is asking you to face and what you have available to meet it with, which tends to produce more honest reflection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use reversals with a shadow and light draw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and many readers find reversals especially useful in this practice. A reversed card in the shadow position can point to something blocked, internalised, or only half-acknowledged. A reversed card in the light position can suggest a resource that is present but underused. If you do not normally read reversals, you can still do this draw with uprights only.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if the shadow card scares me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The classic "scary" cards — Tower, Death, Ten of Swords, Devil — almost always read more gently in a daily context than in a major life-question spread. In a daily draw, they tend to flag a passing energy, a pattern to notice, or an emotional weather front rather than a literal disaster. Read the light card alongside it and ask what resource you are being given to meet the day.',
      },
    },
  ],
}

export default function ShadowAndLightDailyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/daily" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Daily</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Shadow and Light</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>☯</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Shadow and Light Daily Tarot
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
            A two-card morning practice. One card for the shadow that wants attention, one for the light that supports you. The full daily check-in — not the polished one.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            About This Practice
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Most daily tarot draws are quietly optimistic. You pull one card, read the upright meaning, look for the silver lining, and step into the day with a vaguely encouraging phrase in your pocket. It is a pleasant ritual, but it tends to miss half of what is actually going on inside you.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            The shadow and light draw is the corrective. You draw two cards. The first names the part of today that wants honesty — a tension, a discomfort, a pattern, the thing you would rather not look at. The second names the resource — the support, the gift, the energy that is already on your side. You read them together, and the truth of the day sits somewhere between them.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            This is the practice for anyone who has noticed that pretending everything is fine in the morning does not, in fact, make the day go more smoothly. Honouring both shadow and light is what makes a daily card a real check-in rather than a self-help cliché.
          </p>
        </div>

        {/* How to do it */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '1rem' }}>
            How to Do the Draw
          </h2>
          <ol style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', paddingLeft: '1.2rem', margin: 0 }}>
            <li style={{ marginBottom: '.6rem' }}>Sit somewhere quiet for two or three minutes before reaching for your deck. Notice the actual texture of your morning — your energy, your mood, the unfinished thoughts left over from yesterday.</li>
            <li style={{ marginBottom: '.6rem' }}>Shuffle while holding a simple intention: <em>show me the shadow and the light of today.</em> No specific question, no fishing for a particular answer.</li>
            <li style={{ marginBottom: '.6rem' }}>Draw two cards. The first is the shadow. The second is the light. Lay them side by side.</li>
            <li style={{ marginBottom: '.6rem' }}>Read the shadow card first. Resist the urge to soften it. Ask what it is naming, even if the naming is uncomfortable.</li>
            <li style={{ marginBottom: '.6rem' }}>Then read the light card. What resource is it pointing to? Where does it already live in your life today — not in theory, but practically?</li>
            <li>Write a short journal entry. Three or four sentences is plenty. The practice deepens significantly with even a brief written reflection.</li>
          </ol>
        </div>

        {/* Position meanings */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            The Two Positions
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Each position has a distinct question behind it. Hold these in mind as you read the cards.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS.map(({ num, name, desc }) => (
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

        {/* Journal prompts */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Journal Prompts
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: '.88rem', margin: '0 0 1rem' }}>
            Choose one or two — you do not need to answer all of them. The aim is to land the cards in your real day, not to produce a perfect entry.
          </p>
          <ul style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.9rem', paddingLeft: '1.2rem', margin: 0 }}>
            {PROMPTS.map(p => <li key={p} style={{ marginBottom: '.5rem' }}>{p}</li>)}
          </ul>
        </div>

        {/* When to use this variant */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            When to Choose This Variant
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Reach for the shadow and light draw on days when a single card would feel too thin. If you have been noticing a low hum of avoidance — something quietly unprocessed, a feeling you keep stepping around — the two-card structure will surface it without forcing the issue.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            It also suits transitional seasons: returning from holiday, the end of a project, the days after a difficult conversation. Times when the surface looks fine but something underneath is shifting. The standard daily card is a wonderful daily companion. This one is the practice you grow into when you are ready to be more honest with yourself before the day begins.
          </p>
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

        {/* Related links */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <Link href="/daily" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Today&apos;s card</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Standard daily tarot →</div>
          </Link>
          <Link href="/free-reading" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Try it now</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Free tarot reading →</div>
          </Link>
          <Link href="/cards" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Card meanings</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>All 78 cards →</div>
          </Link>
          <Link href="/tarot-journal" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Keep a record</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Tarot journal →</div>
          </Link>
        </div>

      </div>
    </>
  )
}
