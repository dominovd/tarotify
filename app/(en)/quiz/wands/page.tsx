import type { Metadata } from 'next'
import QuizClient from '@/components/QuizClient'

export const metadata: Metadata = {
  title: 'Wands Tarot Quiz — 14 Cards of Fire and Action | TarotAxis',
  description:
    'Free tarot quiz on the Suit of Wands. Practise all 14 wands cards from Ace to King by image or by keyword. The suit of inspiration, ambition and creative momentum.',
  alternates: { canonical: 'https://tarotaxis.com/quiz/wands' },
  openGraph: {
    title: 'Wands Tarot Quiz — TarotAxis',
    description: 'All 14 Wands cards in a focused ten-round quiz.',
    url: 'https://tarotaxis.com/quiz/wands',
    type: 'website',
  },
}

export default function WandsQuizPage() {
  return <QuizClient pool="wands" />
}
