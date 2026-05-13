import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Tarot Quiz — Test Your Knowledge of the Major Arcana | TarotAxis',
  description:
    'Free interactive tarot quiz. Test your knowledge of the 22 Major Arcana — recognise cards by image, keywords or elemental correspondence. Track your best score and learn as you practise.',
  alternates: { canonical: 'https://tarotaxis.com/quiz' },
  openGraph: {
    title: 'Tarot Quiz — Test Your Major Arcana Knowledge',
    description:
      'Free interactive tarot quiz. Recognise the 22 Major Arcana by image, keywords or elemental correspondence.',
    url: 'https://tarotaxis.com/quiz',
    type: 'website',
  },
}

const faq = [
  {
    q: 'Is this tarot quiz suitable for beginners?',
    a: 'Yes. Start with the Major Arcana quiz — the 22 cards every reader learns first. When you are comfortable, move to a single suit, then to the full Minor Arcana, and finally to the All-78 round. Each question gives you four options, and after every answer you get a short explanation plus a link to the full card meaning, so you learn while you play.',
  },
  {
    q: 'How does the quiz work?',
    a: 'A round is ten questions, mixed from three types: identify the card by its artwork, identify the card by its three core keywords, and identify the elemental correspondence (Fire, Water, Air or Earth). Your score and best streak are saved on your device.',
  },
  {
    q: 'Do I need an account to play?',
    a: 'No. Everything runs in your browser. Your best score and longest streak are stored locally on this device — nothing is uploaded.',
  },
  {
    q: 'Are reversed meanings included?',
    a: 'Not yet — the quizzes use upright meanings so you build a stable base before adding the reversed layer. Reversed-mode rounds are on the roadmap and will be added across all pools at once.',
  },
  {
    q: 'Which quiz should I start with?',
    a: 'Major Arcana for absolute beginners. Once you can score 8/10 there consistently, try one single suit (Cups is a friendly starting point), then the full Minor round, then finish with the All-78 hard mode. Treat each pool as a separate goal — best score and streak are tracked per pool.',
  },
  {
    q: 'How is this different from a tarot reading?',
    a: 'A reading uses the cards to reflect on a question. The quiz is pure practice — it builds the recall and pattern recognition you need before a reading feels intuitive. Once you score consistently above 8/10, you will read much faster.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const pools: { title: string; tag: string; desc: string; href: string }[] = [
  {
    title: 'Major Arcana',
    tag: '22 cards',
    desc: 'The 22 archetypes — the cards every reader learns first. Three question types.',
    href: '/quiz/major',
  },
  {
    title: 'Minor Arcana',
    tag: '56 cards',
    desc: 'All four suits in one round. Image, keyword and element questions across the full Minor deck.',
    href: '/quiz/minor',
  },
  {
    title: 'Cups',
    tag: '14 cards',
    desc: 'The suit of feeling, intuition and relationships. Image and keyword questions.',
    href: '/quiz/cups',
  },
  {
    title: 'Pentacles',
    tag: '14 cards',
    desc: 'The suit of work, money and material reality. Image and keyword questions.',
    href: '/quiz/pentacles',
  },
  {
    title: 'Swords',
    tag: '14 cards',
    desc: 'The suit of thought, decision and conflict. Image and keyword questions.',
    href: '/quiz/swords',
  },
  {
    title: 'Wands',
    tag: '14 cards',
    desc: 'The suit of inspiration, will and creative momentum. Image and keyword questions.',
    href: '/quiz/wands',
  },
  {
    title: 'All 78 — Hard Mode',
    tag: 'Master level',
    desc: 'Any of the 78 cards can appear, with all three question types in the mix.',
    href: '/quiz/all',
  },
]

export default function QuizHubPage() {
  return (
    <main style={{ maxWidth: 820, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '2.2rem', marginBottom: '0.6rem' }}>🎴</div>
        <h1 style={{
          fontFamily: "'Cinzel',serif",
          fontSize: 'clamp(1.7rem, 4.5vw, 2.4rem)',
          color: 'var(--gold)',
          marginBottom: '0.6rem',
          letterSpacing: '0.04em',
        }}>
          Tarot Quiz
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 560, margin: '0 auto 1.25rem' }}>
          Practise the 22 Major Arcana. Three question types, ten questions per round, no sign-up.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['Major Arcana', '22 cards', 'Free forever'].map(tag => (
            <span key={tag} style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.72rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              border: '1px solid var(--border)',
              borderRadius: 20,
              padding: '0.3rem 0.8rem',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Primary CTA */}
      <section style={{
        background: 'rgba(255,255,255,.025)',
        border: '1px solid var(--border)',
        borderRadius: 14,
        padding: '2rem 1.75rem',
        marginBottom: '2.5rem',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: "'Cinzel',serif",
          fontSize: '1.25rem',
          color: 'var(--gold)',
          letterSpacing: '0.05em',
          marginBottom: '0.75rem',
        }}>
          Start a Mixed Round
        </h2>
        <p style={{ color: 'var(--text)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 1.5rem' }}>
          Ten questions drawn at random from all three modes. The fastest way to gauge where your knowledge is strong and where it needs a little more honour.
        </p>
        <Link
          href="/quiz/major"
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '0.95rem',
            color: 'var(--gold)',
            background: 'transparent',
            border: '1px solid var(--gold)',
            borderRadius: 8,
            padding: '0.75rem 2rem',
            textDecoration: 'none',
            letterSpacing: '0.08em',
            display: 'inline-block',
          }}
        >
          Start Quiz →
        </Link>
      </section>

      {/* Quizzes by deck */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{
          fontFamily: "'Cinzel',serif",
          fontSize: '1.15rem',
          color: 'var(--gold)',
          letterSpacing: '0.04em',
          marginBottom: '1.25rem',
          textAlign: 'center',
        }}>
          Or focus on one part of the deck
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
        }}>
          {pools.map(m => (
            <Link
              key={m.href}
              href={m.href}
              style={{
                display: 'block',
                background: 'rgba(255,255,255,.025)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '1.25rem 1.1rem',
                textDecoration: 'none',
                color: 'var(--text)',
                transition: 'border-color .2s',
              }}
            >
              <span style={{
                fontFamily: "'Cinzel',serif",
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                display: 'block',
                marginBottom: '0.4rem',
              }}>
                {m.tag}
              </span>
              <h3 style={{
                fontFamily: "'Cinzel',serif",
                fontSize: '1.05rem',
                color: 'var(--gold)',
                letterSpacing: '0.04em',
                marginBottom: '0.55rem',
              }}>
                {m.title}
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.55, margin: 0 }}>
                {m.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* What you'll learn */}
      <section style={{
        background: 'rgba(255,255,255,.025)',
        border: '1px solid var(--border)',
        borderRadius: 14,
        padding: '1.75rem',
        marginBottom: '2.5rem',
      }}>
        <h2 style={{
          fontFamily: "'Cinzel',serif",
          fontSize: '1.15rem',
          color: 'var(--gold)',
          letterSpacing: '0.04em',
          marginBottom: '0.85rem',
        }}>
          Why practise with a tarot quiz?
        </h2>
        <p style={{ color: 'var(--text)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '0.9rem' }}>
          The fastest way to read tarot intuitively is to over-learn the basics until they become automatic. A quiz forces active recall — pulling a card name or keyword out of memory rather than rereading the book — and active recall is what cements long-term learning.
        </p>
        <p style={{ color: 'var(--text)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: 0 }}>
          Three rounds a day for two weeks is usually enough for the Major Arcana to feel like old friends. Once that happens, every reading flows faster, and the symbolic connections between cards start to surface on their own.
        </p>
      </section>

      {/* FAQ */}
      <section style={{
        background: 'rgba(255,255,255,.025)',
        border: '1px solid var(--border)',
        borderRadius: 14,
        padding: '1.75rem',
        marginBottom: '2.5rem',
      }}>
        <h2 style={{
          fontFamily: "'Cinzel',serif",
          fontSize: '1.2rem',
          color: 'var(--gold)',
          letterSpacing: '0.04em',
          marginBottom: '1.25rem',
        }}>
          Tarot Quiz FAQ
        </h2>
        {faq.map((f, i) => (
          <div key={i} style={{ marginBottom: i === faq.length - 1 ? 0 : '1.25rem' }}>
            <h3 style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.95rem',
              color: 'var(--gold)',
              letterSpacing: '0.03em',
              marginBottom: '0.4rem',
            }}>
              {f.q}
            </h3>
            <p style={{ color: 'var(--text)', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
              {f.a}
            </p>
          </div>
        ))}
      </section>

      {/* Email capture */}
      <div style={{ marginBottom: '2.5rem' }}>
        <EmailCapture
          source="quiz"
          headline="A card a day keeps the deck familiar"
          copy="One Major Arcana card in your inbox each morning. The quickest way to master the 22 without setting aside study time."
          cta="Subscribe"
        />
      </div>

      {/* Cross-links */}
      <div style={{
        display: 'flex',
        gap: '0.85rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        <Link
          href="/reading-analysis"
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '0.85rem',
            color: 'var(--muted)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: '0.6rem 1.25rem',
            textDecoration: 'none',
            letterSpacing: '0.05em',
          }}
        >
          Reading Analyser
        </Link>
        <Link
          href="/tarot-for-beginners"
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '0.85rem',
            color: 'var(--muted)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: '0.6rem 1.25rem',
            textDecoration: 'none',
            letterSpacing: '0.05em',
          }}
        >
          Tarot for Beginners
        </Link>
        <Link
          href="/cards"
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '0.85rem',
            color: 'var(--muted)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: '0.6rem 1.25rem',
            textDecoration: 'none',
            letterSpacing: '0.05em',
          }}
        >
          All 78 Card Meanings
        </Link>
        <Link
          href="/free-reading"
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '0.85rem',
            color: 'var(--gold)',
            border: '1px solid var(--gold)',
            borderRadius: 8,
            padding: '0.6rem 1.25rem',
            textDecoration: 'none',
            letterSpacing: '0.05em',
          }}
        >
          Try a Free Reading →
        </Link>
      </div>
    </main>
  )
}
