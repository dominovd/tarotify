import type { Metadata } from 'next'
import '../globals.css'
import { Analytics } from '@vercel/analytics/next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { DeckProvider } from '@/hooks/useDeck'
import { ThemeProvider } from '@/hooks/useTheme'

// Inline pre-paint script — reads the persisted theme from localStorage and
// applies it to <html data-theme> before the page renders. Without this,
// users who chose the light theme would see a flash of dark on every
// navigation. Default is dark.
const THEME_BOOT_SCRIPT = `(function(){try{var t=localStorage.getItem('tarotify-theme');if(t!=='light'&&t!=='dark')t='dark';document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`

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
      </body>
    </html>
  )
}
