import type { Metadata } from 'next'
import QuizClient from '@/components/QuizClient'

export const metadata: Metadata = {
  title: 'Cups Tarot Quiz — 14 Cards of Emotion and Connection | TarotAxis',
  description:
    'Free tarot quiz on the Suit of Cups. Practise all 14 cups cards from Ace to King by image or by keyword. The suit of feeling, intuition and relationships.',
  alternates: { canonical: 'https://tarotaxis.com/quiz/cups' },
  openGraph: {
    title: 'Cups Tarot Quiz — TarotAxis',
    description: 'All 14 Cups cards in a focused ten-round quiz.',
    url: 'https://tarotaxis.com/quiz/cups',
    type: 'website',
  },
}

export default function CupsQuizPage() {
  return <QuizClient pool="cups" />
}
