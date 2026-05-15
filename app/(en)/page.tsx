import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'TarotAxis — Free Tarot Readings & Card Meanings Online',
  description: 'Free tarot readings for self-reflection. Draw three cards, explore all 78 card meanings, get your daily card, and find clarity with the Yes/No oracle.',
  alternates: {
    canonical: 'https://tarotaxis.com',
    languages: {
      'en': 'https://tarotaxis.com/',
      'es': 'https://tarotaxis.com/es',
      'x-default': 'https://tarotaxis.com/',
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://tarotaxis.com/#website',
      url: 'https://tarotaxis.com',
      name: 'TarotAxis',
      description: 'Free Free tarot readings for self-reflection.',
      inLanguage: 'en',
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://tarotaxis.com/#webapp',
      name: 'TarotAxis — Free Tarot Readings',
      url: 'https://tarotaxis.com',
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
