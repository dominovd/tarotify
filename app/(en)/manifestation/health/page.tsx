import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Manifest Health Tarot Spread — 3 Card Wellbeing Reading | TarotAxis',
  description: 'A 3-card tarot spread for health and wellbeing. Name what is depleting you, recognise what already nourishes, and find the small consistent change that compounds.',
  alternates: {
    canonical: 'https://tarotaxis.com/manifestation/health',
    languages: {
      'en': 'https://tarotaxis.com/manifestation/health',
      'es': 'https://tarotaxis.com/es/manifestacion/salud',
      'x-default': 'https://tarotaxis.com/manifestation/health',
    },
  },
  openGraph: {
    title: 'Manifest Health Tarot Spread — 3 Card Wellbeing Reading',
    description: 'A 3-card tarot spread for health and wellbeing. Name what depletes, recognise what nourishes, and find the small change that compounds.',
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'What Is Depleting You',
    desc: 'The specific drain on your energy, vitality or wellbeing that is doing more damage than its scale suggests. Often a relationship dynamic, a low-grade stressor or an unmet need rather than an obvious illness. This card names what is quietly eroding you.',
  },
  {
    num: 2,
    name: 'What Is Already Nourishing You',
    desc: 'The resource, practice, relationship or moment of restoration already part of your life that you may be undervaluing. The healing already happening. This card invites you to recognise and honour what is working before reaching for anything new.',
  },
  {
    num: 3,
    name: 'The Small Change That Compounds',
    desc: 'The modest, repeatable shift that will do more for you than any dramatic overhaul. Boring, sustainable, real. This card points to the change small enough that you will actually keep it — which is the only kind that ever matters.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can tarot diagnose a health problem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Tarot reflects patterns, energies and your relationship with your body — it does not access biology, lab values or medical reality. A card cannot tell you whether a symptom is benign or serious, and treating a reading as diagnostic information is a meaningful risk. If you have symptoms that concern you, see a clinician. Tarot can sit alongside that process beautifully, helping you notice patterns of depletion, name what you have been avoiding and clarify how you want to live — but it is never a substitute for medical assessment or care.',
      },
    },
    {
      '@type': 'Question',
      name: "What if the 'depleting' card points to a person in my life?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is common, and the spread is honest about it. Many of the things that wear on our health most are not illnesses but relationships — a draining family dynamic, a colleague who consumes more than they give, a friendship that has quietly become one-directional. The cards do not tell you to end the relationship; they tell you the truth of what it currently costs. What you do with that information is yours. Sometimes the answer is a boundary, sometimes a conversation, sometimes time and distance, sometimes simply naming it clearly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it appropriate to use tarot during illness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, alongside medical care — never instead of it. When you are unwell, the medical questions belong to clinicians: what is wrong, what to treat, what to monitor. But illness also involves emotional and meaning-making work that medicine does not touch. What does this illness ask of me? What am I learning about my limits? What support do I need to receive? Tarot is well suited to those questions. Use the spread as a quiet reflective practice that runs parallel to your treatment, not as a guide to clinical decisions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often can I do this spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Once a month is plenty. The "small change that compounds" only works if you give it time to compound — and that means weeks of consistent practice, not days of new readings. Drawing the spread too often turns it into a search for a different answer rather than honest engagement with the one you already have. A useful rhythm is to read it at the new moon or the start of the month, sit with the cards for the full cycle, and only draw again when something genuinely shifts.',
      },
    },
  ],
}

export default function ManifestHealthPage() {
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
        <span style={{ color: 'var(--gold)' }}>Manifest Health</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>◇</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Manifest Health Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          A grounded three-card reading for the wellbeing you have been quietly neglecting. This spread names what is depleting you, recognises what already nourishes, and finds the small consistent change that will actually stick.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['3 Cards', 'Wellbeing', 'Body & Mind'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Why this spread */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Why This Spread
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Please read this carefully: this spread does not diagnose, treat or replace medical care. It is reflective inner work — useful for noticing patterns and clarifying how you want to live, never useful for evaluating symptoms or guiding clinical decisions. If you have a real health concern, see a clinician. The cards can sit alongside that process, but they are never a substitute for it.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            With that boundary held clearly, here is what this spread is actually for. Most of what we call health "manifestation" is not really about finding new protocols, supplements or routines. It is about the small consistent changes we already know we should be making and are quietly avoiding — the earlier bedtime, the walk after dinner, the one fewer drink, the conversation we keep postponing. The cards rarely reveal anything mysterious. They reveal what we have been working hard not to see, and they do it gently enough that we can actually look at it.
          </p>
          <p>
            Hold the spread differently depending on where you are. When something is genuinely wrong — a diagnosis, an acute issue, a real symptom — keep the reading reflective and emotional, not investigative. Ask what support you need, how you want to be cared for, what this is asking of you. When you feel diffuse low-grade depletion without anything obviously wrong, the spread is more directly useful: it can name what you have been carrying and what would lighten it. In either case, the cards do not replace clinical judgement; they accompany the human side of being in a body.
          </p>
        </div>
      </div>

      {/* Spread layout */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          The Three Card Spread
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Three cards, drawn in order. The first names the drain, the second names what is already nourishing you, the third names the small change worth practising. Read them as a single honest statement.
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
                <div style={{ fontSize: '.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center', maxWidth: 72 }}>{pos.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {POSITIONS.map(pos => (
            <div key={pos.num} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
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
            <div key={item.name} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Ready to draw your three cards?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Use our free tarot tool to draw your cards, then return here to interpret each position honestly.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/manifestation/sexual-energy" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Sexual Energy Spread
          </Link>
          <Link href="/spreads/dark-moon" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Dark Moon Spread
          </Link>
          <Link href="/manifestation" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            All Manifestation Spreads
          </Link>
        </div>
      </div>
    </div>
  )
}
