import type { Metadata } from 'next'
import QuizClient from '@/components/QuizClient'

export const metadata: Metadata = {
  title: 'All 78 Tarot Cards Quiz — Major and Minor Arcana | TarotAxis',
  description:
    'The hardest tarot quiz on TarotAxis. All 78 cards in the pool — Major Arcana plus every Minor card from every suit. Identify by image, keyword or element.',
  alternates: { canonical: 'https://tarotaxis.com/quiz/all' },
  openGraph: {
    title: 'All 78 Tarot Cards Quiz — TarotAxis',
    description: 'Hard mode: any of the 78 cards can appear. Image, keyword and element questions.',
    url: 'https://tarotaxis.com/quiz/all',
    type: 'website',
  },
}

export default function AllQuizPage() {
  return <QuizClient pool="all" />
}
