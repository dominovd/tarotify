import type { Metadata } from 'next'
import QuizClient from '@/components/QuizClient'

export const metadata: Metadata = {
  title: 'Swords Tarot Quiz — 14 Cards of Thought and Decision | TarotAxis',
  description:
    'Free tarot quiz on the Suit of Swords. Practise all 14 swords cards from Ace to King by image or by keyword. The suit of mind, communication and conflict.',
  alternates: { canonical: 'https://tarotaxis.com/quiz/swords' },
  openGraph: {
    title: 'Swords Tarot Quiz — TarotAxis',
    description: 'All 14 Swords cards in a focused ten-round quiz.',
    url: 'https://tarotaxis.com/quiz/swords',
    type: 'website',
  },
}

export default function SwordsQuizPage() {
  return <QuizClient pool="swords" />
}
