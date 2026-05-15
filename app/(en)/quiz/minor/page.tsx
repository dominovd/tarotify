import type { Metadata } from 'next'
import QuizClient from '@/components/QuizClient'

export const metadata: Metadata = {
  title: 'Minor Arcana Quiz — 56 Cards Across Four Suits | TarotAxis',
  description:
    'Free Minor Arcana tarot quiz across Cups, Pentacles, Swords and Wands. Identify cards by image, keywords or elemental correspondence. Best score and streak tracked locally.',
  alternates: { canonical: 'https://tarotaxis.com/quiz/minor' },
  openGraph: {
    title: 'Minor Arcana Quiz — TarotAxis',
    description:
      'Practise the 56 Minor Arcana — Cups, Pentacles, Swords and Wands. Image, keyword and element questions.',
    url: 'https://tarotaxis.com/quiz/minor',
    type: 'website',
  },
}

export default function MinorQuizPage() {
  return <QuizClient pool="minor" />
}
