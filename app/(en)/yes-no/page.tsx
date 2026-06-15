import type { Metadata } from 'next'
import Link from 'next/link'
import YesNoClient from './YesNoClient'
import { CARDS } from '@/lib/cards'

export const metadata: Metadata = {
  title: 'Yes or No Tarot — Free One-Card Oracle | TarotAxis',
  description: 'Ask a yes or no question and draw a single tarot card for an instant oracle answer. Free yes no tarot reading with all 78 cards.',
  alternates: {
    canonical: 'https://tarotaxis.com/yes-no',
    languages: {
      'en': 'https://tarotaxis.com/yes-no',
      'es': 'https://tarotaxis.com/es/si-no',
      'x-default': 'https://tarotaxis.com/yes-no',
    },
  },
}

const SUITS = [
  { key: 'major',     label: 'Major Arcana' },
  { key: 'wands',     label: 'Wands' },
  { key: 'cups',      label: 'Cups' },
  { key: 'swords',    label: 'Swords' },
  { key: 'pentacles', label: 'Pentacles' },
] as const

const YN_COLOR: Record<string, string> = {
  yes:   '#3daa6a',
  no:    '#aa3d3d',
  maybe: '#c9a84c',
}

const FAQS = [
  {
    q: 'How does yes or no tarot work?',
    a: 'Yes or no tarot uses one card as a focused signal for a simple question. Some cards lean yes, some lean no, and some answer maybe because the situation needs timing, choice or more information before it settles.',
  },
  {
    q: 'What kind of question should I ask?',
    a: 'Ask one clear question at a time. Yes or no tarot works best for focused choices such as whether to reach out, accept an offer, wait, move forward or reconsider. Avoid asking several questions inside one sentence.',
  },
  {
    q: 'Are reversed cards included in the answer?',
    a: 'Yes. A reversed card can soften a yes, strengthen a no, point to delay or show an inner block around the question. The individual card pages explain both upright and reversed yes/no meanings.',
  },
  {
    q: 'Can I ask the same yes or no question again?',
    a: 'You can, but it is usually better to wait until something changes. Repeating the same question immediately often reflects anxiety more than new guidance. If you feel stuck, reframe the question into what you can do next.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export default function YesNoPage() {
  const bySuit = SUITS.map(s => ({
    ...s,
    cards: CARDS.filter(c => c.suit === s.key),
  }))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <YesNoClient />

      {/* Card directory */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div style={{ borderTop: '1px solid rgba(201,168,76,.15)', paddingTop: '3rem', marginTop: '1rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.2rem', letterSpacing: '.07em', marginBottom: '.5rem', textAlign: 'center' }}>
            Yes or No by Card
          </h2>
          <p style={{ color: 'var(--muted)', textAlign: 'center', fontSize: '.9rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            See the yes/no answer for every card in the deck — upright, reversed and by topic.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {bySuit.map(({ key, label, cards }) => (
              <div key={key}>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.16em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1rem' }}>
                  {label}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: '.6rem' }}>
                  {cards.map(card => (
                    <Link
                      key={card.slug}
                      href={`/yes-no/${card.slug}`}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '.55rem .85rem', background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 10, textDecoration: 'none', gap: '.4rem' }}
                    >
                      <span style={{ color: 'var(--text)', fontSize: '.82rem', fontFamily: "'Cinzel',serif", letterSpacing: '.03em', lineHeight: 1.3 }}>
                        {card.name}
                      </span>
                      <span style={{ flexShrink: 0, fontSize: '.65rem', fontWeight: 600, letterSpacing: '.08em', color: YN_COLOR[card.yn], border: `1px solid ${YN_COLOR[card.yn]}`, borderRadius: 100, padding: '1px 7px', opacity: .9 }}>
                        {card.yn.toUpperCase()}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <section style={{ borderTop: '1px solid rgba(201,168,76,.15)', paddingTop: '2.5rem', marginTop: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.2rem', letterSpacing: '.07em', marginBottom: '.5rem', textAlign: 'center' }}>
            Yes or No Tarot FAQ
          </h2>
          <div style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}>
            {FAQS.map(faq => (
              <div key={faq.q}>
                <h3 style={{ fontFamily: "'Cinzel',serif", color: 'var(--text)', fontSize: '.95rem', letterSpacing: '.03em', marginBottom: '.4rem' }}>
                  {faq.q}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
