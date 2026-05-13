import type { Metadata } from 'next'
import QuizClient from '@/components/QuizClient'

export const metadata: Metadata = {
  title: 'Pentacles Tarot Quiz — 14 Cards of Earth and Substance | TarotAxis',
  description:
    'Free tarot quiz on the Suit of Pentacles. Practise all 14 pentacles cards from Ace to King by image or by keyword. The suit of work, money and material reality.',
  alternates: { canonical: 'https://tarotaxis.com/quiz/pentacles' },
  openGraph: {
    title: 'Pentacles Tarot Quiz — TarotAxis',
    description: 'All 14 Pentacles cards in a focused ten-round quiz.',
    url: 'https://tarotaxis.com/quiz/pentacles',
    type: 'website',
  },
}

export default function PentaclesQuizPage() {
  return <QuizClient pool="pentacles" />
}
