import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Eclipse Tarot Spread — Navigating Solar & Lunar Eclipses | TarotAxis',
  description: 'An eclipse tarot spread for solar and lunar eclipses. Five-card layout for sudden shifts, hidden truths and the accelerated change of eclipse season — the most charged moments of the astrological year.',
  alternates: { canonical: 'https://tarotaxis.com/spreads/eclipse' },
  openGraph: {
    title: 'Eclipse Tarot Spread — Navigating Solar & Lunar Eclipses',
    description: 'A five-card eclipse spread for sudden shifts, hidden truths and the accelerated change of eclipse season.',
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'What This Eclipse Is Bringing Forward',
    desc: 'The theme or area of life the eclipse is illuminating — often something that has been building under the surface for months. Eclipses do not invent issues; they expose them. This card names what is becoming impossible to ignore.',
  },
  {
    num: 2,
    name: 'What Is Ending',
    desc: 'Eclipses are completion points. Whatever has run its natural course is being closed — sometimes abruptly, sometimes after long resistance. This card identifies what the eclipse is taking off the table, freeing up energy you did not know was bound.',
  },
  {
    num: 3,
    name: 'What Truth Is Surfacing',
    desc: 'Eclipses are famous for revealing what has been hidden — a secret, a feeling, a pattern, a piece of information. This card describes the specific truth that wants to be acknowledged. It may have been known privately for some time but is only now becoming speakable.',
  },
  {
    num: 4,
    name: 'How Not to React',
    desc: 'The classic eclipse mistake is to make a major decision in the heat of the moment. Eclipse energy distorts perspective for several days on either side of the exact eclipse. This card warns you of the specific reactive move most likely to backfire.',
  },
  {
    num: 5,
    name: 'How to Move Forward',
    desc: 'The integrative wisdom. Once the eclipse has done its work, what is the constructive path? This card synthesises the previous four into a single piece of guidance for the weeks following the eclipse, when the dust settles and direction becomes clearer.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an eclipse tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An eclipse tarot spread is a card layout designed for use around a solar or lunar eclipse — the most astrologically charged moments of the year. Eclipses occur when the sun, moon and Earth align on a lunar node, and they are traditionally associated with sudden shifts, hidden truths becoming visible, completions arriving abruptly, and the acceleration of change that was already underway. An eclipse spread uses these themes as its position meanings, helping you navigate the disorienting energy these windows can bring.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I do an eclipse tarot reading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The eclipse window is wider than the eclipse itself. Astrologically, eclipse energy is felt for roughly a week before and a week after the exact moment, with the most intense period being the 48 hours surrounding it. The ideal time to do an eclipse spread is either two or three days before, to prepare, or two or three days after, to integrate. Doing one in the exact eclipse window is possible but the energy is so charged that interpretation can be more difficult.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the eclipse spread for solar or lunar eclipses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both. The five positions in this spread work for either kind of eclipse, because both share the core themes of revelation, completion and change. The distinction is mainly in tone. Solar eclipses tend to bring outer-world shifts — events, news, beginnings disguised as endings. Lunar eclipses tend to bring inner-world shifts — emotional truths surfacing, patterns breaking, the unconscious becoming conscious. The cards naturally calibrate to whichever kind of eclipse you are reading around.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are eclipses considered intense in astrology?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eclipses are amplified versions of new moons (solar eclipses) and full moons (lunar eclipses). What an ordinary lunation might take six months to develop, an eclipse can compress into a single week. They are associated with sudden news, ended chapters, surprising revelations and the kind of change that does not ask your permission. Traditionally, astrologers caution against making major decisions during eclipse windows — not because the decisions would be wrong, but because eclipse energy distorts perspective and the picture often looks very different two weeks later.',
      },
    },
  ],
}

export default function EclipsePage() {
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
        <span>/</span>
        <Link href="/spreads" style={{ color: 'var(--muted)' }}>Tarot Spreads</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Eclipse Spread</span>
      </nav>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>◐</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Eclipse Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Eclipses are the great accelerators of the astrological year — moments when the sun, moon and Earth align and change moves faster than usual. Use this spread to navigate the disorienting energy of eclipse season with intention rather than reactivity.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['5 Cards', 'Solar or Lunar', 'Eclipse Season'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          The Energy of an Eclipse
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Eclipses come in pairs and trios, two or three at a time, twice a year. A solar eclipse is an amplified new moon — the moon passes directly between the Earth and the sun, blocking it briefly. A lunar eclipse is an amplified full moon — the Earth&apos;s shadow falls across the moon, often turning it deep red. Both are dramatic in the sky and dramatic in human life.
          </p>
          <p style={{ margin: 0 }}>
            Astrologically, eclipses are completion points and inflection points. What a normal lunation might take six months to mature, an eclipse can compress into a week. Truth surfaces. Chapters close. News arrives. Decisions that seemed impossible suddenly become obvious — or impossible decisions are made for you. The traditional wisdom is to <em>not</em> make major decisions in the exact eclipse window, because perspective is distorted and the picture often looks very different a fortnight later. The cards meet eclipse energy well precisely because tarot is structured to describe forces rather than predict outcomes — and during an eclipse, the forces are unusually clear.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          The Spread — 5 Cards
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Five cards mapping the arc of the eclipse: what is surfacing, what is ending, what truth wants out, what reaction to avoid, and how to actually move forward once the dust settles.
        </p>

        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Card Layout
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {POSITIONS.map(pos => (
              <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
                <div style={{ width: 64, height: 96, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1.05rem', color: 'var(--gold)' }}>
                  {pos.num}
                </div>
                <div style={{ fontSize: '.58rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', textAlign: 'center', maxWidth: 64 }}>{pos.name}</div>
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

      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Eclipse Reading Practice
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '.75rem' }}>
          {[
            ['◐', 'Mind the window', 'Read two or three days before or after the eclipse, not during the exact peak. The energy is least distorted on the edges of the window.'],
            ['✦', 'Note the sign', 'Eclipses always fall in two opposite zodiac signs across a 12-18 month cycle. Knowing the sign tells you the theme being completed.'],
            ['◇', 'Write it down', 'Eclipse-week interpretations look very different two weeks later. Keep a record so you can revisit the reading with hindsight.'],
            ['◑', 'Wait to act', 'If the spread shows a major decision, let at least a week pass before committing. What feels urgent now often does not feel urgent then.'],
          ].map(([icon, title, text]) => (
            <div key={title as string} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1.1rem', color: 'var(--gold)', marginBottom: '.4rem' }}>{icon}</div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.78rem', letterSpacing: '.08em', color: 'var(--gold)', opacity: .8, marginBottom: '.4rem', textTransform: 'uppercase' }}>{title}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.6, margin: 0 }}>{text as string}</p>
            </div>
          ))}
        </div>
      </div>

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

      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Other lunar spreads</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Eclipses are amplified lunations. The same energy in smaller doses moves through the ordinary cycle.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/spreads/new-moon" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>New Moon Spread</Link>
          <Link href="/spreads/full-moon" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>Full Moon Spread</Link>
          <Link href="/spreads/dark-moon" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>Dark Moon Spread</Link>
        </div>
      </div>
    </div>
  )
}
