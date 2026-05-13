import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Major Arcana Decision Spread — 3-Card Archetypal Choice Tarot | TarotAxis',
  description: 'A 3-card Major Arcana decision tarot spread for crossroads questions. See the archetypal path of each option and the deeper teaching that runs beneath both.',
  alternates: { canonical: 'https://tarotaxis.com/spreads/major/decision' },
  openGraph: {
    title: 'Major Arcana Decision Spread — Archetypal Choice Tarot',
    description: 'Three trump cards: the path of Option A, the path of Option B, and the deeper soul-lesson regardless of which you choose.',
  },
}

const POSITIONS = [
  { num: 1, name: 'The Path of Option A', desc: 'The archetypal energy of the first path. Not whether it succeeds in worldly terms, but the soul-curriculum it carries — what it will ask of you, what it will grow in you, who it will make of you.' },
  { num: 2, name: 'The Path of Option B', desc: 'The archetypal energy of the second path. Read in the same register as the first card — the deeper texture of the road, not its surface appeal or risk.' },
  { num: 3, name: 'The Deeper Teaching', desc: 'The lesson that runs beneath both paths — the truth your soul is here to meet regardless of which option you choose. Often the most important card in the spread.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is a Major Arcana decision spread different from a pros-and-cons reading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A pros-and-cons reading weighs practical advantages of each option — money, timing, convenience. A Major Arcana decision spread does something different: it shows the archetypal shape of each path, the soul-lesson it carries, and the deeper teaching that is present regardless of which option you choose. It answers a different kind of question, one that pros-and-cons cannot reach.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which card tells me which option to choose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'None of them, directly. The spread is not a recommendation engine; it is a clarifier. By seeing the archetypal energy of each path honestly, and the deeper teaching that runs beneath both, you put yourself in a position to choose consciously rather than reactively. The decision remains yours, and is more aligned for being made with open eyes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if both cards look equally good or equally difficult?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When both option cards have similar weight or feeling, the third card — the deeper teaching — becomes especially important. The spread is telling you that the choice between the paths matters less than the underlying lesson you are here to meet. The teaching is the same either way; what changes is the texture in which you learn it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use this spread for more than two options?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — add one trump card per option and keep the final card as the deeper teaching. A three-option choice would use four cards: three paths and one underlying lesson. Try not to expand beyond four options; past that point the spread becomes diffuse and the contrast between paths loses sharpness.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I do this spread when I already know what I want?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Especially then. When you already know what you want, the spread will show you the archetypal terrain you are actually choosing — including the parts you have not let yourself see. It can confirm the choice, complicate it, or reveal that what you thought you wanted was a stand-in for something deeper. Either way, you walk forward with more honesty.',
      },
    },
  ],
}

export default function MajorDecisionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/spreads" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Spreads</Link>
          <span style={{ opacity: .4 }}>›</span>
          <Link href="/spreads/major" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Major Arcana</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Decision</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>⚖</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Major Arcana Decision Spread
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            A three-card archetypal reading for the choices where pros-and-cons run out of voice. Two paths, the soul-lesson beneath them both, and a clearer view of what you are actually choosing between.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Before You Begin
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            This spread is most useful for decisions that feel weighty out of proportion to their surface stakes — the job offer that has somehow become a question about who you are, the move that is also a confession, the relationship choice that is also a vocation choice. When a decision is operating at the archetypal level, only an archetypal reading will give honest counsel.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Name the two options aloud before you shuffle. Say them clearly, in their full reality — not "the safe option and the brave option," but the actual choices with their actual names. Then shuffle the 22 trumps, draw three cards, and lay them in a row.
          </p>
        </div>

        {/* Layout */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            The Three Cards
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            A simple horizontal row. Option A on the left, Option B on the right, and the deeper teaching in the centre — or laid as the keystone of the small arch they make together.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {[1, 3, 2].map(n => (
              <div key={n} style={{ width: 52, height: 80, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>
                {n}
              </div>
            ))}
          </div>

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

        {/* Interpreting tips */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            How to Read Your Results
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Read each option card in its own right first. Do not yet compare them — sit with each one as if it were the only path, and ask what kind of person walking that road would become. What does it ask of you? What does it cost? What does it ripen?
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Then bring the third card in. Notice especially when the deeper teaching seems to share an element or theme with one of the options — that resonance is often where the most honest counsel lies. If the teaching card and option A both point toward solitude and inwardness, the soul is already moving in that direction; option B may carry good things but is asking you to bend against the current.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Pay particular attention to your bodily response. The card that makes you slightly flinch, or the one you find yourself wanting to explain away, is often the truer reading. A Major-only decision spread tends to be unsubtle once you allow it to land.
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
          <Link href="/spreads/major" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>More spreads</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>All Major Arcana spreads →</div>
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
