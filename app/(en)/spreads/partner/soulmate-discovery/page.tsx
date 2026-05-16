import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Soulmate Tarot Spread — 7-Card Soulmate Discovery Reading | TarotAxis',
  description: 'A 7-card soulmate tarot spread for the deepest love questions. Read who you are becoming, the mirror your soulmate will hold, and the work the partnership is here to do.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/partner/soulmate-discovery',
    languages: {
      'en': 'https://tarotaxis.com/spreads/partner/soulmate-discovery',
      'es': 'https://tarotaxis.com/es/tiradas/pareja/descubrir-alma-gemela',
      'x-default': 'https://tarotaxis.com/spreads/partner/soulmate-discovery',
    },
  },
  openGraph: {
    title: 'Soulmate Discovery Tarot Spread — Grounded 7-Card Reading',
    description: 'A soulmate spread that honours the question without promising fate — the soulmate you become matches the soulmate you meet.',
  },
}

const POSITIONS = [
  { num: 1, name: 'Who You Are When Fully Yourself', desc: 'The version of you that exists when you are not contorting for anyone — values intact, voice clear. This is the self your soulmate will recognise.' },
  { num: 2, name: 'The Mirror Your Soulmate Will Hold', desc: 'The specific quality this partnership will reflect back to you. Not flattery, not punishment — a deep, accurate mirror of who you really are.' },
  { num: 3, name: 'What You Need to Learn Before They Arrive', desc: 'The threshold the cards are currently asking you to cross. Sometimes it is a piece of grief, sometimes a piece of trust, sometimes simply a habit of self-abandonment.' },
  { num: 4, name: 'Where They Are in Their Life', desc: 'A general read of the season this person is currently in — the emotional terrain they are crossing, the chapter they are completing. Energy, not identity.' },
  { num: 5, name: 'The Path That Brings You Together', desc: 'The thread the universe is weaving — the unlikely route, the meaningful decision, the willingness in each of you that opens the door to meeting.' },
  { num: 6, name: 'The First Sign of Recognition', desc: 'How you will know. Not a Hollywood moment, usually — more often a quietness, a strange familiarity, or a feeling of having been waiting without knowing for whom.' },
  { num: 7, name: 'The Work the Partnership Is Here to Do', desc: 'The deeper purpose of this connection — what the two of you are being brought together to grow, heal or contribute. Soulmates always come bearing work.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can tarot tell me if someone is my soulmate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tarot can describe the quality of a connection, but it cannot stamp anyone with the label soulmate. The most honest framing is that the soulmate you meet always matches the soulmate you are becoming. A soulmate spread is more useful for showing you who you are growing into than for issuing a verdict on a specific person.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a soulmate and a twin flame?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Different traditions use these terms differently. In most modern readings, a soulmate is someone whose presence supports your deepest growth and feels like home, while a twin flame is described as a more turbulent, mirror-like dynamic that exposes everything that needs to heal. The cards do not really care about the labels — they answer the question you actually ask.',
      },
    },
    {
      '@type': 'Question',
      name: 'When will I meet my soulmate according to tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tarot rarely gives clean dates, and any spread that promises one is overreaching. What this spread can tell you is what is currently being completed in you so that meeting becomes possible. When position 3 (what you need to learn) starts to feel resolved in your daily life, the rest of the spread becomes very interesting.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I already think I have met my soulmate but the spread says otherwise?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trust the spread, then trust yourself. If the cards point away from the person you have in mind, it does not necessarily mean the connection is wrong — it may mean the soulmate framing is the wrong lens for it. Some of the most meaningful relationships of our lives are not soulmates in the deep-purpose sense, and that does not lessen them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it healthy to ask the cards about soulmates at all?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is healthy when the question is held lightly. The soulmate idea can be a beautiful invitation to grow, or a way of postponing your life until a mythical person arrives. Use this spread to deepen your relationship with yourself first. The rest will arrive on its own time, and you will be ready for it.',
      },
    },
  ],
}

export default function SoulmateDiscoverySpreadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/spreads" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Spreads</Link>
          <span style={{ opacity: .4 }}>›</span>
          <Link href="/spreads/partner" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Partner</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Soulmate Discovery</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>✨</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Soulmate Discovery Tarot Spread
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
            A 7-card spread for the soulmate question, held with both reverence and realism. The soulmate you become is the soulmate you meet.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Before You Draw
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            The soulmate question is one of the oldest questions a tarot reader is ever asked. It is also one of the easiest questions to misuse. This spread refuses to promise fate, and it refuses to flatter — but it does honour the longing underneath the question, which is almost always a longing to be deeply known.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Approach this reading not as a prophecy, but as a conversation with the part of you that already knows what kind of partnership your soul is preparing for. Take your time shuffling. Hold the question with care — the cards always meet you at the level of seriousness you bring.
          </p>
        </div>

        {/* Layout */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            The 7-Card Layout
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Cards 1 to 3 read inward — they describe you and the threshold in front of you. Card 4 widens to the other person. Cards 5 to 7 trace the path of meeting and the shared work that follows.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {[1, 2, 3, 4, 5, 6, 7].map(n => (
              <div key={n} style={{ width: 52, height: 80, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>
                {n}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS.map(({ num, name, desc }) => (
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

        {/* Interpreting */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Reading Your Spread
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Begin by reading the first three positions as a single sentence about yourself. Who you are when fully yourself — the mirror your soulmate will hold — what you need to learn first. That sequence tells you where your soul is currently growing toward.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Position 4 is best read with humility. It is a glimpse of the season another person is moving through — not their permanent character. Strong cards here are encouraging but not predictive; difficult cards are an invitation to compassion rather than a warning.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Positions 5 and 6 belong together. The path that brings you together is usually less linear than we imagine — a chain of small decisions, both yours and theirs. The first sign of recognition is rarely dramatic; people often describe it later as a kind of unhurried certainty.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Position 7, the shared work, is the most important card in the spread. Soulmate connections are not about being saved — they are about being grown. If this card surprises you, sit with it. The work is rarely glamorous, but it is always meaningful.
          </p>
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

        {/* Related links */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <Link href="/spreads/partner" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>More spreads</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>All partner spreads →</div>
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
