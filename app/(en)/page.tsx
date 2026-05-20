import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'TarotAxis — Free AI Tarot Readings & 78 Card Meanings Online',
  description: 'Free AI tarot readings for self-reflection. Draw three cards and get a personalised interpretation streamed by Claude — plus all 78 card meanings, daily card, and Yes/No oracle. No card required.',
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
      description: 'Free AI tarot readings for self-reflection — personalised, streaming, no card required.',
      inLanguage: 'en',
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://tarotaxis.com/#webapp',
      name: 'TarotAxis — Free AI Tarot Readings',
      url: 'https://tarotaxis.com',
      description:
        'Free AI tarot readings powered by Claude. Draw three cards and get a personalised interpretation, plus all 78 card meanings, daily card, and Yes/No oracle.',
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
        'AI tarot reading powered by Claude',
        'Three-card tarot spread',
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
