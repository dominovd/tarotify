import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'TarotAxis — AI Tarot Readings',
  description: 'Free AI-powered tarot readings for self-reflection. Draw cards, explore meanings, and gain clarity.',
  metadataBase: new URL('https://tarotaxis.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* TODO: получить новый Google Search Console verification token для tarotaxis.com и добавить здесь */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <Nav />
        <main style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  )
}
