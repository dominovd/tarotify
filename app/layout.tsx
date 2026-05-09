import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Tarotify — AI Tarot Readings',
  description: 'Free AI-powered tarot readings for self-reflection. Draw cards, explore meanings, and gain clarity.',
  metadataBase: new URL('https://tarotify.app'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="m2_K3-Oovv1iiF-CH7qFIs2Z9jcPRIJ6fuezrYHAM-8" />
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
