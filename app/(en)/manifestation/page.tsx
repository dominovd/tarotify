import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Manifestation Tarot Spreads — Inner Work for Money, Love, Success & More | TarotAxis',
  description: 'Five tarot spreads for manifestation — money, love, success, health and sexual energy. Each spread reveals your block, your support and the next concrete step forward.',
  alternates: {
    canonical: 'https://tarotaxis.com/manifestation',
    languages: {
      'en': 'https://tarotaxis.com/manifestation',
      'es': 'https://tarotaxis.com/es/manifestacion',
      'x-default': 'https://tarotaxis.com/manifestation',
    },
  },
  openGraph: {
    title: 'Manifestation Tarot Spreads — Inner Work for Real Change',
    description: 'Five tarot spreads for the inner work behind manifestation — money, love, success, health and sexual energy.',
  },
}

const SUB_SPREADS = [
  {
    href: '/manifestation/money',
    title: 'Manifest Money',
    cards: 3,
    desc: 'Three cards naming the inner relationship with money that shapes what arrives, what supports your abundance, and the concrete shift to make this week.',
  },
  {
    href: '/manifestation/love',
    title: 'Manifest Love',
    cards: 3,
    desc: 'Three cards on what is holding love at a distance, what is already opening you, and the next move toward genuine connection.',
  },
  {
    href: '/manifestation/success',
    title: 'Manifest Success',
    cards: 3,
    desc: 'Three cards on what is in the way of the success you want, what strengthens your direction, and the action that compresses time.',
  },
  {
    href: '/manifestation/health',
    title: 'Manifest Health & Wellbeing',
    cards: 3,
    desc: 'Three cards on what is depleting you, what is already nourishing you, and the small change that compounds.',
  },
  {
    href: '/manifestation/sexual-energy',
    title: 'Manifest Sexual Energy',
    cards: 3,
    desc: 'Three cards on what is muted in you, what activates aliveness, and the practice that returns you to your own desire.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a manifestation tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A manifestation tarot spread is a focused, position-based reading designed for the inner work behind a particular goal — money, love, success, health, or sexual aliveness. Each position names something useful: the pattern getting in your way, the resource you already have, and the specific next action. These are not wish-list rituals. The spreads will not tell you to write your desires on paper and wait. They will tell you what you already half-know and have been avoiding looking at directly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does manifestation actually work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Manifestation works to the extent that it is honest inner work followed by concrete action. The disciplined practice of noticing what is genuinely blocking you, recognising the resources already in play, and making one small move each week produces real change over months. Marketing that promises money, love or success simply by thinking the right thoughts is selling something. These spreads are designed for the first kind of work, not the second. The cards reveal — they do not deliver.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I do a manifestation spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One spread per topic per month is plenty. The temptation is to reshuffle when you do not like what came up, or to ask the same question again two days later from a different angle. Resist this. The reading is meant to be lived with for weeks, not consumed and discarded. If you draw a card you do not understand, leave it on your desk. The meaning usually arrives a fortnight in, when life puts you in the situation the card was pointing at.',
      },
    },
    {
      '@type': 'Question',
      name: "Can tarot guarantee I'll manifest what I want?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — and any tool, teacher or app that claims to guarantee manifestation is selling you something. Tarot is a mirror. It can show you the patterns, the resources and the next step with remarkable clarity. It cannot make you take the step, and it cannot bend reality to your preferences. What it can do is shorten the time between confusion and useful action, which is what most people actually need. The honest practitioners of this work all say the same thing.',
      },
    },
  ],
}

export default function ManifestationHubPage() {
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
        <span style={{ color: 'var(--gold)' }}>Manifestation</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Manifestation Tarot Spreads
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Five tarot spreads for the inner work behind real change. Each layout reveals the block, the resource already with you, and the next step that actually moves something.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['5 Spreads', 'Inner Work', '3 Cards Each'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* What is manifestation */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          What Manifestation Actually Is
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Manifestation is not thinking positive thoughts until reality rearranges itself. It is the disciplined process of noticing what is actually blocking you, recognising what resources are already in play, and taking concrete next steps over weeks and months. The work is unglamorous. Most of it happens between readings, in conversations you have been avoiding and habits you finally adjust. The cards do not do the work — they show you, with unusual precision, where the work is.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            The contemporary law-of-attraction marketing — the courses, the affirmation apps, the promises that gratitude lists will fill your bank account — exists because it sells. It is not the same thing as what serious inner-work practitioners have meant by manifestation for the last several centuries. The serious version assumes you are an adult who has noticed that wanting something is not the same as receiving it, and asks you to look at the gap between the two honestly.
          </p>
          <p>
            These five spreads each take one area of life — money, love, success, health, sexual energy — and ask the same three questions in different voices: what pattern is shaping what arrives, what is already supporting you, and what is the next concrete move. They are designed to be lived with, not consumed. Read one, sit with it for a few weeks, and notice what changes when you stop performing manifestation and start practising it.
          </p>
        </div>
      </div>

      {/* The 5 sub-spreads */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          The Five Manifestation Spreads
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Choose the area of life calling for honest attention. Each spread is three cards — short enough to actually use, long enough to say something true.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '.75rem' }}>
          {SUB_SPREADS.map(s => (
            <Link key={s.href} href={s.href} style={{ display: 'block', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.2rem', textDecoration: 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '.5rem', marginBottom: '.5rem' }}>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', letterSpacing: '.03em' }}>{s.title}</div>
                <span style={{ flexShrink: 0, padding: '.15rem .55rem', borderRadius: 20, fontSize: '.62rem', background: 'rgba(201,168,76,.1)', color: 'var(--gold)', fontFamily: "'Cinzel',serif", letterSpacing: '.06em' }}>{s.cards}c</span>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '.82rem', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* How to use these spreads */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          How to Use These Spreads
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            One spread per week is the maximum dose. One spread per topic per month is the honest average. Manifestation work fails not because the cards are wrong but because people consume readings instead of practising them. Draw, write down what came up, and then close the deck. Let the insight have the next three weeks to act on your life.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Treat what comes up as a set of journal prompts, not commandments. If the spread says your money story is shaped by inherited scarcity, the reading is asking you to look at that — not handing you a verdict. Write about the pattern. Notice when it shows up this week. Ask one person in your life whether they recognise it in you. The work happens off the page.
          </p>
          <p>
            Pair each reading with one small, concrete behavioural change for the following month. Not five changes. One. Manifestation that lasts is built on small consistent moves: the difficult email sent on Tuesday, the boundary held on Thursday, the application submitted on Sunday. The dramatic gestures are usually performance. The small ones are usually the work.
          </p>
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Begin with a free reading</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Draw your three cards now, then return to the spread that matches your question to read what each position means.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/free-reading" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Free Tarot Reading
          </Link>
          <Link href="/spreads" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            All Spreads
          </Link>
        </div>
      </div>
    </div>
  )
}
