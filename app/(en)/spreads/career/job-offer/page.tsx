import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Job Offer Tarot Spread — Should I Take the Job? | TarotAxis',
  description: 'A job offer tarot spread to help you decide whether to accept a new position. 4-card and 6-card layouts for career decisions, new roles, and workplace changes.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/career/job-offer',
    languages: {
      'en': 'https://tarotaxis.com/spreads/career/job-offer',
      'es': 'https://tarotaxis.com/es/tiradas/carrera/oferta-de-trabajo',
      'x-default': 'https://tarotaxis.com/spreads/career/job-offer',
    },
  },
  openGraph: {
    title: 'Job Offer Tarot Spread — Should I Take the Job?',
    description: 'Facing a job offer or career decision? These tarot spreads illuminate what the opportunity truly holds and what it means for your path.',
  },
}

const POSITIONS_4 = [
  { num: 1, name: 'The Opportunity Itself', desc: 'The true nature of this role or offer — what it genuinely holds, beyond the job description and first impressions.' },
  { num: 2, name: 'What It Offers You', desc: 'The growth, experience, stability, or fulfilment this position could bring — the real value it holds for your development.' },
  { num: 3, name: 'What to Be Aware Of', desc: 'The challenge, hidden dynamic, or consideration that the cards want you to look at honestly before deciding.' },
  { num: 4, name: 'Guidance', desc: 'The overall energy and direction around this decision — the clearest answer the cards can offer about whether this path serves you.' },
]

const POSITIONS_6 = [
  { num: 1, name: 'The Role\'s True Energy', desc: 'What this position is actually like to inhabit day-to-day — the culture, demands, and reality beneath the offer.' },
  { num: 2, name: 'Your Readiness', desc: 'Where you are right now in terms of skill, confidence, and inner preparation for this kind of role.' },
  { num: 3, name: 'The Growth It Offers', desc: 'How this role could stretch and develop you — the professional and personal growth embedded in accepting.' },
  { num: 4, name: 'The Risk or Challenge', desc: 'What could prove difficult, demanding, or misaligned — the honest downside or obstacle to be prepared for.' },
  { num: 5, name: 'Impact on Your Wider Life', desc: 'How this decision ripples outward — into your relationships, wellbeing, energy, and life outside work.' },
  { num: 6, name: 'The Path to Choose', desc: 'The clearest guidance the cards offer on whether to accept, negotiate, or walk away — and why.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can tarot help me decide whether to accept a job offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tarot is a powerful tool for decision-making — not because it predicts outcomes, but because it helps you access your own deeper knowing. A job offer spread can reveal what you truly feel about the opportunity, surface concerns you have been pushing aside, and offer a clearer sense of whether the role aligns with your path. It works best alongside practical evaluation, not as a replacement for it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which tarot cards suggest I should take the job?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Ace of Pentacles is the classic yes to a new opportunity — fresh material beginnings. The Wheel of Fortune suggests a turning point in your favour. The Sun indicates success and fulfilment. The Three of Pentacles points to growth through collaboration and learning. The Star suggests the role aligns with your hopes. These are encouraging signs, though the position they appear in matters as much as the card itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if The Tower appears in my job offer reading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Tower in a career reading asks you to look at what might be unstable or unsustainable. In the opportunity position, it could signal a role with hidden turbulence — a company in flux, unrealistic expectations, or a culture that could prove destructive. In the challenge position, it may simply mean a steep learning curve or significant change. Always look at the surrounding cards before drawing conclusions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I do a tarot reading before or after a job interview?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both have value. Before an interview, a short reading can help you get clear on what you genuinely want and what energy to bring. After the interview — once you have a real sense of the role and the people — a fuller spread like the 6-card job offer reading can help you process what you felt and make a grounded decision.',
      },
    },
  ],
}

export default function JobOfferSpreadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/spreads" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Spreads</Link>
          <span style={{ opacity: .4 }}>›</span>
          <Link href="/spreads/career" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Career</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Job Offer</span>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>💼</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Job Offer Tarot Spread
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            Facing a career decision? These spreads help you see what the opportunity truly holds — including what your instincts are already telling you beneath the excitement or anxiety.
          </p>
        </div>

        {/* 4-card */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            The 4-Card Quick Decision Spread
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            When you need a clear answer quickly. Four cards give you the essential information — what the role holds, what it offers, what to watch for, and where to land.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
            {[1, 2, 3, 4].map(n => (
              <div key={n} style={{ width: 52, height: 80, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>{n}</div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS_4.map(({ num, name, desc }) => (
              <div key={num} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.1rem', background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12 }}>
                <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem' }}>{num}</div>
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', marginBottom: '.3rem' }}>{name}</div>
                  <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6-card */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            The 6-Card Full Decision Spread
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            For bigger decisions — a role change, a significant promotion, or a move to a new company. This spread examines not just the job itself, but how it fits into your broader life and where your path is genuinely calling you.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS_6.map(({ num, name, desc }) => (
              <div key={num} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.1rem', background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12 }}>
                <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem' }}>{num}</div>
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', marginBottom: '.3rem' }}>{name}</div>
                  <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
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

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <Link href="/spreads/career" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>More spreads</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>All career tarot spreads →</div>
          </Link>
          <Link href="/free-reading" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Try it now</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Free tarot reading →</div>
          </Link>
        </div>

      </div>
    </>
  )
}
