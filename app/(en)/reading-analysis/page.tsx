import type { Metadata } from 'next'
import ReadingAnalysisClient from './ReadingAnalysisClient'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Tarot Reading Analyser — Get Insight Into Your Home Reading | TarotAxis',
  description:
    'Did your own tarot reading at home? Mark the cards you drew and get a structured interpretation — dominant suit, balance of Major Arcana, reversed themes and per-card guidance. Free, no sign-up.',
  alternates: { canonical: 'https://tarotaxis.com/reading-analysis' },
  openGraph: {
    title: 'Tarot Reading Analyser — TarotAxis',
    description:
      'Mark the cards from your home reading and receive a structured interpretation across suit, element, reversed and court signals.',
    url: 'https://tarotaxis.com/reading-analysis',
    type: 'website',
  },
}

const faq = [
  {
    q: 'How does the tarot reading analyser work?',
    a: 'Tap the cards you drew in your physical reading from the grid of 78. A second tap marks the card reversed; a third deselects it. When you press "Analyse my reading", the tool reads the pattern of your selection — which suit dominates, how many Major Arcana are present, the proportion of reversed cards, whether court figures or aces appear — and produces a written interpretation alongside a per-card summary.',
  },
  {
    q: 'Is the reading analysis AI-generated?',
    a: 'No. The interpretation is generated from a structured rules engine that reads your selection and pulls from the same card meanings used across TarotAxis. The advantage is that the analysis is consistent, transparent and free — every selection produces the same reading, so you can return to it whenever you wish.',
  },
  {
    q: 'Do I need a specific spread to use this tool?',
    a: 'No. The analyser works with any spread or with a free draw. It analyses what is in front of you rather than fitting your draw into a particular layout. If you used a named spread, you can still browse our /spreads section to read the position meanings alongside this analysis.',
  },
  {
    q: 'Should I include reversed cards?',
    a: 'If you read reversed cards in your own practice, yes — a second tap on any selected card marks it reversed, and the analyser will weight reversed energy in its interpretation. If you do not read reversed in your practice, leave every card upright; the analyser handles either approach.',
  },
  {
    q: 'How many cards can I select?',
    a: 'There is no minimum. The interpretation grows richer between three and twelve cards. Beyond fifteen the signal starts to blur, so the tool will gently suggest you focus on your most striking cards if you select too many.',
  },
  {
    q: 'Can I share my analysis with someone else?',
    a: 'Yes. Once you have a selection, use the Share button below the analysis to copy a link that encodes your chosen cards. Anyone opening that link sees the same selection and the same reading — useful when discussing a draw with a friend or a teacher.',
  },
  {
    q: 'Will my reading be saved?',
    a: 'You can press "Save to journal" to keep the analysis in your local tarot journal (stored on this device only, nothing is uploaded). The most recent twenty entries are kept. To clear them, use your browser site-data tools.',
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

export default function ReadingAnalysisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ReadingAnalysisClient />

      {/* Visible FAQ */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div style={{
          background: 'var(--on-bg-025)',
          border: '1px solid var(--border)',
          borderRadius: 14,
          padding: '1.75rem',
        }}>
          <h2 style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '1.2rem',
            color: 'var(--gold)',
            letterSpacing: '0.04em',
            marginBottom: '1.25rem',
          }}>
            Reading Analyser — FAQ
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
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <EmailCapture
            source="reading-analysis"
            headline="Read for yourself? Get a card a day"
            copy="A fresh tarot card in your inbox every morning — a small daily anchor for your own practice. Free, no spam."
            cta="Subscribe"
          />
        </div>
      </section>
    </>
  )
}
