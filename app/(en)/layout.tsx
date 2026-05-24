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
// applies it to <html data-theme> before the page renders. Without this,
// users who chose the light theme would see a flash of dark on every
// navigation. Default is dark.
const THEME_BOOT_SCRIPT = `(function(){try{var t=localStorage.getItem('tarotify-theme');if(t!=='light'&&t!=='dark')t='dark';document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`

// Organization JSON-LD — emitted on every English page so each URL carries
// the E-E-A-T signal independently. Methodology page emits its own narrower
// Article + Organization schema; this site-wide one is the canonical Organization entity.
const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://tarotaxis.com/#organization',
  name: 'TarotAxis',
  url: 'https://tarotaxis.com',
  description: 'Free tarot readings, all 78 card meanings, spreads, and lunar rituals — built on the Rider-Waite-Smith framework, refined with AI assistance.',
  knowsAbout: [
    'Tarot',
    'Rider-Waite-Smith tarot',
    'Elemental dignities',
    'Tarot numerology',
    'Major Arcana psychology',
    'Tarot spreads',
    'Tarot combinations',
  ],
  publishingPrinciples: 'https://tarotaxis.com/methodology',
  inLanguage: ['en', 'es'],
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://tarotaxis.com/#website',
  url: 'https://tarotaxis.com',
  name: 'TarotAxis',
  publisher: { '@id': 'https://tarotaxis.com/#organization' },
  inLanguage: 'en',
}

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
            <Footer locale="en" />
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
