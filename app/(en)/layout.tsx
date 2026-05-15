import type { Metadata } from 'next'
import '../globals.css'
import { Analytics } from '@vercel/analytics/next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { DeckProvider } from '@/hooks/useDeck'

export const metadata: Metadata = {
  title: 'TarotAxis — AI Tarot Readings',
  description: 'Free AI-powered tarot readings for self-reflection. Draw cards, explore meanings, and gain clarity.',
  metadataBase: new URL('https://tarotaxis.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="BgFTjjxBX-Qr_Qkmy1V5lL2Qz07CKEjN90Ld6nCSUho" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <DeckProvider>
          <Nav />
          <main style={{ position: 'relative', zIndex: 1 }}>
            {children}
          </main>
          <Footer />
        </DeckProvider>
        <Analytics />
      </body>
    </html>
  )
}
