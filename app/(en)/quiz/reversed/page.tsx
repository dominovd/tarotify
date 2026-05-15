import type { Metadata } from 'next'
import QuizClient from '@/components/QuizClient'

export const metadata: Metadata = {
  title: 'Reversed Tarot Quiz — 22 Major Arcana, Inverted Cards | TarotAxis',
  description:
    'Practise reversed tarot meanings. All 22 Major Arcana cards shown inverted (180°), with reversed keywords for the keyword round. Tracks your reversed-mode best score separately from upright.',
  alternates: { canonical: 'https://tarotaxis.com/quiz/reversed' },
  openGraph: {
    title: 'Reversed Tarot Quiz — TarotAxis',
    description:
      'Reversed Major Arcana quiz. Identify cards shown inverted, by reversed keywords or by element.',
    url: 'https://tarotaxis.com/quiz/reversed',
    type: 'website',
  },
}

export default function ReversedQuizPage() {
  return <QuizClient pool="major" reversed />
}
