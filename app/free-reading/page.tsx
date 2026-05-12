import type { Metadata } from 'next'
import ReadingClient from './ReadingClient'

export const metadata: Metadata = {
  title: 'Free Tarot Reading Online — Full 78-Card Deck | TarotAxis',
  description: 'Get a free tarot reading online with a full 78-card deck including reversals. Choose from a daily card, three-card, six-card or love spread. No sign-up, no fee.',
  alternates: { canonical: 'https://tarotaxis.com/free-reading' },
}

export default function ReadingPage() {
  return <ReadingClient />
}
