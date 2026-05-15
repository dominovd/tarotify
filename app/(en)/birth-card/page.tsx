import type { Metadata } from 'next'
import BirthCardClient from './BirthCardClient'

export const metadata: Metadata = {
  title: 'Tarot Birth Card Calculator — Find Your Life Card | TarotAxis',
  description: 'Calculate your tarot birth card from your date of birth. Discover your personal Major Arcana card and what it reveals about your life path and core energy.',
  alternates: {
    canonical: 'https://tarotaxis.com/birth-card',
    languages: {
      'en': 'https://tarotaxis.com/birth-card',
      'es': 'https://tarotaxis.com/es/carta-de-nacimiento',
      'x-default': 'https://tarotaxis.com/birth-card',
    },
  },
}

export default function BirthCardPage() {
  return <BirthCardClient />
}
