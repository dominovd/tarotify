/**
 * next-intl routing configuration.
 *
 * Strategy:
 *  - English is the default locale and has NO URL prefix (preserves all
 *    existing SEO authority on tarotaxis.com/cards/the-fool etc.).
 *  - Spanish gets /es/* prefix.
 *  - localePrefix is 'as-needed' which is exactly this behaviour.
 *  - Slugs themselves are translated per locale (see lib/i18n/slugs.ts).
 *    next-intl's `pathnames` config wires those translations into the
 *    router so <Link href="/cards/the-fool"> renders as /es/cartas/el-loco
 *    when the active locale is 'es'.
 *
 * This file is the single source of truth for which locales exist. Adding a
 * new locale = adding it here and dropping a glossary-<locale>.json plus
 * messages/<locale>/*.json into place.
 */

import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',

  // `pathnames` lets next-intl translate URL paths per locale. We declare the
  // public paths here as English canonicals and provide locale-specific
  // overrides. Keep this list in sync with lib/i18n/slugs.ts PATH_SLUGS.
  //
  // Card pages, yes-no pages, and zodiac pages use dynamic [slug] segments —
  // those translations happen at the Link layer (buildHref in slugs.ts) and
  // are resolved in middleware by canonicaliseHref. We DO NOT declare every
  // dynamic slug variant here, only the path templates.
  pathnames: {
    '/': '/',
    '/cards': { en: '/cards', es: '/cartas' },
    '/cards/[slug]': { en: '/cards/[slug]', es: '/cartas/[slug]' },
    '/cards/[slug]/reversed': { en: '/cards/[slug]/reversed', es: '/cartas/[slug]/invertida' },
    '/cards/[slug]/feelings': { en: '/cards/[slug]/feelings', es: '/cartas/[slug]/sentimientos' },
    '/yes-no': { en: '/yes-no', es: '/si-no' },
    '/yes-no/[slug]': { en: '/yes-no/[slug]', es: '/si-no/[slug]' },
    '/zodiac': { en: '/zodiac', es: '/zodiaco' },
    '/zodiac/[sign]': { en: '/zodiac/[sign]', es: '/zodiaco/[sign]' },
    '/spreads': { en: '/spreads', es: '/tiradas' },
    '/free-reading': { en: '/free-reading', es: '/lectura-gratis' },
    '/daily': { en: '/daily', es: '/carta-del-dia' },
    '/quiz': '/quiz',
    '/reading-analysis': { en: '/reading-analysis', es: '/analisis-de-lectura' },
    '/birth-card': { en: '/birth-card', es: '/carta-de-nacimiento' },
    '/manifestation': { en: '/manifestation', es: '/manifestacion' },
    '/tarot-suits': { en: '/tarot-suits', es: '/palos-del-tarot' },
    '/tarot-decks': { en: '/tarot-decks', es: '/barajas-de-tarot' },
    '/combination': { en: '/combination', es: '/combinaciones' },
    '/combination/[slug]': { en: '/combination/[slug]', es: '/combinaciones/[slug]' },
    '/tarot-journal': { en: '/tarot-journal', es: '/diario-de-tarot' },
    '/tarot-for-beginners': { en: '/tarot-for-beginners', es: '/tarot-para-principiantes' },
    '/oracle-vs-tarot': { en: '/oracle-vs-tarot', es: '/oraculo-vs-tarot' },
    '/how-to-read-tarot': { en: '/how-to-read-tarot', es: '/como-leer-tarot' },
    '/how-to-shuffle-tarot': { en: '/how-to-shuffle-tarot', es: '/como-barajar-tarot' },
    '/how-to-cleanse-tarot-cards': { en: '/how-to-cleanse-tarot-cards', es: '/como-limpiar-cartas-de-tarot' },
    '/how-to-ask-tarot-questions': { en: '/how-to-ask-tarot-questions', es: '/como-preguntar-al-tarot' },
    '/about': { en: '/about', es: '/acerca-de' },
    '/privacy': { en: '/privacy', es: '/privacidad' },
    '/terms': { en: '/terms', es: '/terminos' },
  },
})

export type Locale = (typeof routing.locales)[number]
