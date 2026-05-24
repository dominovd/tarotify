import type { Metadata } from 'next'
import { Suspense } from 'react'
import '../globals.css'
import { Analytics } from '@vercel/analytics/next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import GAPageView from '@/components/analytics/GAPageView'
import { DeckProvider } from '@/hooks/useDeck'
import { ThemeProvider } from '@/hooks/useTheme'

// Inline pre-paint script — reads the persisted theme from localStorage and
// applies it to <html data-theme> before the page renders. Avoids flash of
// dark on light-mode users. Mirrored in the EN root layout.
const THEME_BOOT_SCRIPT = `(function(){try{var t=localStorage.getItem('tarotify-theme');if(t!=='light'&&t!=='dark')t='dark';document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`

// Organization JSON-LD — emitted on every Spanish page. Same canonical entity
// as the EN root layout (note shared @id), localised description.
const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://tarotaxis.com/#organization',
  name: 'TarotAxis',
  url: 'https://tarotaxis.com',
  description: 'Lecturas de tarot gratuitas, los significados de las 78 cartas, tiradas y rituales lunares — construido sobre el marco Rider-Waite-Smith y refinado con asistencia de IA.',
  knowsAbout: [
    'Tarot',
    'Rider-Waite-Smith tarot',
    'Dignidades elementales',
    'Numerología del tarot',
    'Psicología de los arcanos mayores',
    'Tiradas de tarot',
    'Combinaciones de tarot',
  ],
  publishingPrinciples: 'https://tarotaxis.com/es/metodologia',
  inLanguage: ['en', 'es'],
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://tarotaxis.com/#website-es',
  url: 'https://tarotaxis.com/es',
  name: 'TarotAxis',
  publisher: { '@id': 'https://tarotaxis.com/#organization' },
  inLanguage: 'es',
}

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
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <DeckProvider>
            <Nav />
            <main style={{ position: 'relative', zIndex: 1 }}>
              {children}
            </main>
            <Footer locale="es" />
          </DeckProvider>
        </ThemeProvider>
        <Analytics />
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <GAPageView />
        </Suspense>
      </body>
    </html>
  )
}
