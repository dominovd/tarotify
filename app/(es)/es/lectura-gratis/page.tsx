import type { Metadata } from 'next'
import { CARDS } from '@/lib/cards'
import { getCard } from '@/lib/i18n/get-card'
import LecturaGratisClient from './LecturaGratisClient'

export const metadata: Metadata = {
  title: 'Lectura de Tarot Gratis con IA — Tirada de 3 Cartas | TarotAxis',
  description:
    'Lectura de tarot gratis online con IA: saca tres cartas para una tirada de pasado, presente y futuro y recibe una interpretación personalizada escrita por Claude en tiempo real. Sin tarjeta, sin registro para la primera lectura.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/lectura-gratis',
    languages: {
      'en': 'https://tarotaxis.com/free-reading',
      'es': 'https://tarotaxis.com/es/lectura-gratis',
      'x-default': 'https://tarotaxis.com/free-reading',
    },
  },
  openGraph: {
    title: 'Lectura de Tarot Gratis con IA — Tirada de 3 Cartas | TarotAxis',
    description:
      'Saca tres cartas y recibe una interpretación con IA personalizada en tiempo real. Sin tarjeta, sin registro.',
    url: 'https://tarotaxis.com/es/lectura-gratis',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lectura de Tarot Gratis con IA — Tirada de 3 Cartas | TarotAxis',
  },
}

export default async function LecturaGratisPage() {
  // Pre-resolve Spanish names + upright keywords for all 78 cards so the client
  // bundle can render localised interpretations without shipping the full
  // dictionary or doing any per-render async work.
  const resolved = await Promise.all(
    CARDS.map(async (c) => {
      const card = await getCard(c.slug, 'es')
      return [c.slug, card] as const
    })
  )

  const cardNamesEs: Record<string, string> = {}
  const cardKeywordsEs: Record<string, string[]> = {}
  for (const [slug, card] of resolved) {
    if (!card) continue
    cardNamesEs[slug] = card.name
    cardKeywordsEs[slug] = card.kw_up
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Lectura de Tarot Gratis — TarotAxis',
    url: 'https://tarotaxis.com/es/lectura-gratis',
    inLanguage: 'es',
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Any',
    description:
      'Tirada de tres cartas (pasado, presente y futuro) gratuita, sin registro. Interpretación instantánea y diario personal opcional.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LecturaGratisClient
        cardNamesEs={cardNamesEs}
        cardKeywordsEs={cardKeywordsEs}
      />
    </>
  )
}
