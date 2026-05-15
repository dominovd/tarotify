import type { Metadata } from 'next'
import BirthCardClient from './BirthCardClient'

export const metadata: Metadata = {
  title: 'Calculadora de Carta de Nacimiento del Tarot — Descubre Tu Carta de Vida | TarotAxis',
  description: 'Calcula tu carta de nacimiento del tarot a partir de tu fecha de nacimiento. Descubre tu Arcano Mayor personal y lo que revela sobre tu camino de vida y tu energía esencial.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/carta-de-nacimiento',
    languages: {
      'en': 'https://tarotaxis.com/birth-card',
      'es': 'https://tarotaxis.com/es/carta-de-nacimiento',
      'x-default': 'https://tarotaxis.com/birth-card',
    },
  },
  openGraph: {
    title: 'Calculadora de Carta de Nacimiento del Tarot | TarotAxis',
    description: 'Calcula tu carta de nacimiento del tarot y descubre el Arcano Mayor que da forma a tu camino de vida.',
    url: 'https://tarotaxis.com/es/carta-de-nacimiento',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'website',
  },
}

export default function CartaDeNacimientoPage() {
  return <BirthCardClient />
}
