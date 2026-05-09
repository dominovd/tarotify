import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'Tarotify — Free AI Tarot Readings Online',
  description: 'Free AI-powered tarot readings for self-reflection. Draw three cards, explore all 78 card meanings, and get clarity with the Yes/No oracle.',
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
      description: 'Free AI-powered tarot readings for self-reflection.',
      inLanguage: 'en',
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://tarotify.app/#webapp',
      name: 'Tarotify — AI Tarot Readings',
      url: 'https://tarotify.app',
      description:
        'Free AI-powered tarot readings. Draw three cards, get a personalised reading, explore 78 card meanings, and use the Yes/No oracle.',
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
