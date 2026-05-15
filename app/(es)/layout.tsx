import type { Metadata } from 'next'
import '../globals.css'
import { Analytics } from '@vercel/analytics/next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { DeckProvider } from '@/hooks/useDeck'

// Root layout for the Spanish (es) route group.
//
// Next.js multi-root-layout pattern: each route group has its own <html>/<body>.
// This file applies to every page under /es/* and sets <html lang="es"> so
// screen readers pronounce content in Spanish and Google sees the correct
// document language. Hreflang on individual pages still handles SEO alternates.
//
// Title template defaults are Spanish; individual pages can override.
export const metadata: Metadata = {
  title: {
    template: '%s | TarotAxis',
    default: 'TarotAxis — Lecturas de Tarot Gratis',
  },
  description: 'Lecturas de tarot gratuitas para la reflexión personal. Saca tres cartas, explora los significados de las 78 cartas y encuentra claridad.',
  metadataBase: new URL('https://tarotaxis.com'),
}

export default function EsRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
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
          <Footer locale="es" />
        </DeckProvider>
        <Analytics />
      </body>
    </html>
  )
}
