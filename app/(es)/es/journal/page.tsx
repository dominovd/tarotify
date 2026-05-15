import type { Metadata } from 'next'
import JournalClient from './JournalClient'

export const metadata: Metadata = {
  title: 'Tu Diario de Tarot — Lecturas Guardadas | TarotAxis',
  description:
    'Explora las lecturas de tarot que has guardado en este dispositivo. Revisa tiradas anteriores, busca por carta o pregunta y exporta todo a un archivo. Guardado localmente, nada subido.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/journal',
    languages: {
      'en': 'https://tarotaxis.com/journal',
      'es': 'https://tarotaxis.com/es/journal',
      'x-default': 'https://tarotaxis.com/journal',
    },
  },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Tu Diario de Tarot — TarotAxis',
    description: 'Revisa y busca las lecturas que has guardado en TarotAxis.',
    url: 'https://tarotaxis.com/es/journal',
    type: 'website',
  },
}

export default function JournalPage() {
  return <JournalClient />
}
