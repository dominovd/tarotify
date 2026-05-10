import type { Metadata } from 'next'
import BirthCardClient from './BirthCardClient'

export const metadata: Metadata = {
  title: 'Tarot Birth Card Calculator — Find Your Life Card | Tarotify',
  description: 'Calculate your tarot birth card from your date of birth. Discover your personal Major Arcana card and what it reveals about your life path and core energy.',
  alternates: { canonical: 'https://tarotify.app/birth-card' },
}

export default function BirthCardPage() {
  return <BirthCardClient />
}
