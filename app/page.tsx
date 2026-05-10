import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'Tarotify — Free Tarot Readings & Card Meanings Online',
  description: 'Free tarot readings for self-reflection. Draw three cards, explore all 78 card meanings, get your daily card, and find clarity with the Yes/No oracle.',
  alternates: {
    canonical: 'https://tarotify.app',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://tarotify.app/#website',
      url: 'https://tarotify.app',
      name: 'Tarotify',
      description: 'Free Free tarot readings for self-reflection.',
      inLanguage: 'en',
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://tarotify.app/#webapp',
      name: 'Tarotify — Free Tarot Readings',
      url: 'https://tarotify.app',
      description:
        'Free Free tarot readings. Draw three cards, get a personalised reading, explore 78 card meanings, and use the Yes/No oracle.',
      applicationCategory: 'EntertainmentApplication',
      operatingSystem: 'Any',
      inLanguage: 'en',
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        'Three-card tarot spread reading',
        'Yes / No oracle',
        '78 tarot card meanings',
        'Tarot combination calculator',
      ],
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  )
}
