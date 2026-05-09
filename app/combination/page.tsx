import type { Metadata } from 'next'
import CombinationClient from './CombinationClient'

export const metadata: Metadata = {
  title: 'Tarot Card Combination Calculator — What Two Cards Mean Together | Tarotify',
  description: 'Discover what any two tarot cards mean together. Select any combination and get an instant interpretation across love, career and personal growth.',
  alternates: { canonical: 'https://tarotify.app/combination' },
}

export default function CombinationPage() {
  return <CombinationClient />
}
