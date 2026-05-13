import type { Metadata } from 'next'
import MajorQuizClient from './MajorQuizClient'

export const metadata: Metadata = {
  title: 'Major Arcana Quiz — 22 Cards, 3 Question Modes | TarotAxis',
  description:
    'Free Major Arcana tarot quiz. Ten questions per round: identify cards by artwork, by keywords, or by elemental correspondence. Tracks your best score and streak.',
  alternates: { canonical: 'https://tarotaxis.com/quiz/major' },
  openGraph: {
    title: 'Major Arcana Quiz — TarotAxis',
    description:
      'Practise the 22 Major Arcana. Image, keyword and element questions in one ten-round quiz.',
    url: 'https://tarotaxis.com/quiz/major',
    type: 'website',
  },
}

export default function MajorQuizPage() {
  return <MajorQuizClient />
}
