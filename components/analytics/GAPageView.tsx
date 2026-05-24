// ════════════════════════════════════════════════════════════════════════════
// GAPageView — App Router client navigation → GA4 page_view event
// ════════════════════════════════════════════════════════════════════════════
//
// Why this exists: Next.js App Router does client-side navigation between
// routes (no full page reload). gtag.js only sees the initial page load
// unless we manually fire a `page_view` event on every route change.
//
// We disable the automatic page_view in GoogleAnalytics.tsx (config gives
// `send_page_view: false`) so the first hit also goes through this hook —
// keeping all page_view events on one consistent path.
//
// Runs on the client only. Pulls in pathname + searchParams from
// next/navigation and emits `page_view` whenever either changes.
// ════════════════════════════════════════════════════════════════════════════

'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const DEFAULT_GA_ID = 'G-BJTR8S0FHE'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export default function GAPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (typeof window.gtag !== 'function') return
    const gaId = process.env.NEXT_PUBLIC_GA_ID ?? DEFAULT_GA_ID
    if (!gaId) return

    const query = searchParams?.toString()
    const fullPath = pathname + (query ? `?${query}` : '')

    window.gtag('event', 'page_view', {
      page_path: fullPath,
      page_location: window.location.href,
      page_title: document.title,
      send_to: gaId,
    })
  }, [pathname, searchParams])

  return null
}
