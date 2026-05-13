import type { Metadata } from 'next'
import ReadingAnalysisClient from './ReadingAnalysisClient'

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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does the tarot reading analyser work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tap the cards you drew in your physical reading from the grid of 78. A second tap marks the card reversed; a third deselects it. When you press "Analyse my reading", the tool reads the pattern of your selection — which suit dominates, how many Major Arcana are present, the proportion of reversed cards, whether court figures or aces appear — and produces a written interpretation alongside a per-card summary.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the reading analysis AI-generated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The interpretation is generated from a structured rules engine that reads your selection and pulls from the same card meanings used across TarotAxis. The advantage is that the analysis is consistent, transparent and free — every selection produces the same reading, so you can return to it whenever you wish.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a specific spread to use this tool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The analyser works with any spread or with a free draw. It analyses what is in front of you rather than fitting your draw into a particular layout. If you used a named spread, you can still browse our /spreads section to read the position meanings alongside this analysis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I include reversed cards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you read reversed cards in your own practice, yes — a second tap on any selected card marks it reversed, and the analyser will weight reversed energy in its interpretation. If you do not read reversed in your practice, leave every card upright; the analyser handles either approach.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many cards can I select?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no minimum. The interpretation grows richer between three and twelve cards. Beyond fifteen the signal starts to blur, so the tool will gently suggest you focus on your most striking cards if you select too many.',
      },
    },
  ],
}

export default function ReadingAnalysisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ReadingAnalysisClient />
    </>
  )
}
