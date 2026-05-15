import type { Metadata } from 'next'
import JournalClient from './JournalClient'

export const metadata: Metadata = {
  title: 'Your Tarot Journal — Saved Readings | TarotAxis',
  description:
    'Browse the tarot readings you have saved on this device. Review old draws, search by card or question, export the lot to a file. Stored locally, nothing uploaded.',
  alternates: {
    canonical: 'https://tarotaxis.com/journal',
    languages: {
      'en': 'https://tarotaxis.com/journal',
      'es': 'https://tarotaxis.com/es/journal',
      'x-default': 'https://tarotaxis.com/journal',
    },
  },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Your Tarot Journal — TarotAxis',
    description: 'Review and search the readings you have saved across TarotAxis.',
    url: 'https://tarotaxis.com/journal',
    type: 'website',
  },
}

export default function JournalPage() {
  return <JournalClient />
}
