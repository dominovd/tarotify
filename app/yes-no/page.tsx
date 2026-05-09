import type { Metadata } from 'next'
import YesNoClient from './YesNoClient'

export const metadata: Metadata = {
  title: 'Yes or No Tarot — Free One-Card Oracle | Tarotify',
  description: 'Ask a yes or no question and draw a single tarot card for an instant oracle answer. Free yes no tarot reading with all 78 cards.',
  alternates: { canonical: 'https://tarotify.app/yes-no' },
}

export default function YesNoPage() {
  return <YesNoClient />
}
