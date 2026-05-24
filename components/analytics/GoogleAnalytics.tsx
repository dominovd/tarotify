// ════════════════════════════════════════════════════════════════════════════
// GoogleAnalytics — GA4 (gtag.js) loader
// ════════════════════════════════════════════════════════════════════════════
//
// Loads gtag through `next/script` with `strategy="afterInteractive"` so it
// runs AFTER hydration — no impact on First Contentful Paint, Largest
// Contentful Paint, or Time to Interactive. The browser parses HTML, renders
// the page, becomes interactive, and *then* fetches the GA bundle.
//
// Performance trade-off vs `lazyOnload`:
//   - afterInteractive ≈ 200–400 ms after TTI; catches the first pageview reliably.
//   - lazyOnload waits until browser is fully idle; can miss pageviews from
//     fast bouncers.
// `afterInteractive` is the right default for analytics.
//
// Disabled when NODE_ENV !== 'production' to keep dev console quiet and
// avoid polluting GA with localhost traffic.
//
// The GA measurement ID can be overridden via NEXT_PUBLIC_GA_ID env var so
// staging / preview deployments can point at a different GA property.
// ════════════════════════════════════════════════════════════════════════════

import Script from 'next/script'

const DEFAULT_GA_ID = 'G-BJTR8S0FHE'

export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID ?? DEFAULT_GA_ID

  // Skip in dev and when explicitly disabled (NEXT_PUBLIC_GA_ID="").
  if (process.env.NODE_ENV !== 'production' || !gaId) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          // Disable automatic page_view — we fire it from GAPageView so
          // App Router client-side navigations are tracked correctly.
          gtag('config', '${gaId}', {
            send_page_view: false,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  )
}
