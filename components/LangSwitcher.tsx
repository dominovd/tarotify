'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  buildHref,
  canonicaliseHref,
  type Locale,
} from '@/lib/i18n/slugs'

/**
 * Small EN | ES toggle for the Nav.
 *
 * Detects the active locale from the URL (prefix `/es/` → Spanish, else
 * English) and renders a link to the equivalent page in the other locale.
 *
 * Mapping back-and-forth uses canonicaliseHref → buildHref. For card pages
 * this means /cards/the-fool ↔ /es/cartas/el-loco resolves correctly.
 *
 * Pages that have not yet been migrated to Spanish fall through to the
 * Spanish homepage (`/es`) rather than rendering a broken link.
 */

// Whitelist of EN paths that have a Spanish counterpart. As we migrate more
// pages this list grows. Card pages and yes-no pages are matched dynamically.
const MIGRATED_EN_PATHS = new Set([
  '/',
  '/cards',
  '/yes-no',
  '/daily',
  '/free-reading',
  // Phase 4: learning, manifestation, tarot suits
  '/tarot-for-beginners',
  '/how-to-read-tarot',
  '/how-to-shuffle-tarot',
  '/how-to-cleanse-tarot-cards',
  '/how-to-ask-tarot-questions',
  '/tarot-journal',
  '/oracle-vs-tarot',
  '/manifestation',
  '/manifestation/money',
  '/manifestation/love',
  '/manifestation/success',
  '/manifestation/health',
  '/manifestation/sexual-energy',
  '/tarot-suits',
  '/tarot-suits/cups',
  '/tarot-suits/pentacles',
  '/tarot-suits/swords',
  '/tarot-suits/wands',
  // Phase 5A: spreads
  '/spreads',
  '/spreads/by-card-count',
  '/spreads/three-card',
  '/spreads/three-card/past-present-future',
  '/spreads/celtic-cross',
  '/spreads/love',
  '/spreads/love/reconciliation',
  '/spreads/love/self-love',
  '/spreads/love/new-relationship',
  '/spreads/soulmate',
  '/spreads/year-ahead',
  '/spreads/horseshoe',
  '/spreads/weekly',
  '/spreads/career',
  '/spreads/career/job-offer',
  '/spreads/full-moon',
  '/spreads/new-moon',
  '/spreads/waning-moon',
  '/spreads/dark-moon',
  '/spreads/eclipse',
  // Phase 5B: love expansion + major + partner + daily variants
  '/spreads/how-they-feel-about-me',
  '/spreads/will-my-ex-come-back',
  '/spreads/should-i-stay-or-should-i-go',
  '/spreads/third-party',
  '/spreads/healing-after-heartbreak',
  '/spreads/what-blocks-my-love',
  '/spreads/what-do-i-need-to-heal',
  '/spreads/true-love-spread',
  '/spreads/major',
  '/spreads/major/celtic-cross',
  '/spreads/major/year-ahead',
  '/spreads/major/decision',
  '/spreads/major/shadow-work',
  '/spreads/major/elemental',
  '/spreads/partner',
  '/spreads/partner/dating-connection',
  '/spreads/partner/relationship-growth',
  '/spreads/partner/soulmate-discovery',
  '/spreads/partner/partner-alignment',
  '/spreads/partner/love-attraction',
  '/spreads/partner/dating-guidance',
  '/daily/shadow-and-light',
  '/daily/gratitude-and-growth',
  '/daily/morning-afternoon-evening',
  '/daily/balance',
  // Phase 6: zodiac, combinations, decks
  '/zodiac',
  '/combination',
  '/tarot-decks',
  // Phase 7: static + birth-card
  '/birth-card',
  '/about',
  '/privacy',
  '/terms',
  // Phase 8: methodology (LLM-discoverability sprint 2026-05-18)
  '/methodology',
  // Phase 9: pricing (Monetisation Sprint 2 — Paddle billing 2026-05-18)
  '/pricing',
  // Phase 7b: auth + account + journal
  '/auth/signin',
  '/auth/signup',
  '/account',
  '/journal',
])

function isZodiacPath(p: string): boolean {
  return /^\/zodiac\/[^/]+$/.test(p)
}

function isCombinationPath(p: string): boolean {
  return /^\/combination\/[^/]+$/.test(p)
}

function isCardPath(p: string): boolean {
  return /^\/cards\/[^/]+(?:\/(?:reversed|feelings))?$/.test(p)
}

function isYesNoPath(p: string): boolean {
  return /^\/yes-no\/[^/]+$/.test(p)
}

export default function LangSwitcher() {
  const path = usePathname() ?? '/'

  const currentLocale: Locale = path === '/es' || path.startsWith('/es/') ? 'es' : 'en'

  let altHref = '/'

  if (currentLocale === 'en') {
    // Going EN → ES. Migrated card pages, yes-no pages, and the static
    // migrated list translate; everything else lands on the Spanish homepage
    // as a graceful fallback.
    if (isCardPath(path) || isYesNoPath(path) || isZodiacPath(path) || isCombinationPath(path) || MIGRATED_EN_PATHS.has(path)) {
      altHref = buildHref(path === '/' ? '/' : path, 'es')
    } else {
      altHref = '/es'
    }
  } else {
    // Going ES → EN. Strip /es prefix then canonicalise to the EN slug.
    const stripped = path === '/es' ? '/' : path.slice(3) || '/'
    altHref = canonicaliseHref(stripped, 'es')
  }

  const styles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '.25rem',
    padding: '.3rem .55rem',
    fontFamily: "'Cinzel',serif",
    fontSize: '.7rem',
    letterSpacing: '.08em',
    color: 'var(--muted)',
    border: '1px solid var(--border)',
    borderRadius: 18,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  }
  const activeStyle: React.CSSProperties = {
    color: 'var(--gold)',
    fontWeight: 600,
  }

  return (
    <Link
      href={altHref}
      style={styles}
      hrefLang={currentLocale === 'en' ? 'es' : 'en'}
      aria-label={currentLocale === 'en' ? 'Cambiar a Español' : 'Switch to English'}
    >
      <span style={currentLocale === 'en' ? activeStyle : undefined}>EN</span>
      <span style={{ opacity: .35 }}>|</span>
      <span style={currentLocale === 'es' ? activeStyle : undefined}>ES</span>
    </Link>
  )
}
