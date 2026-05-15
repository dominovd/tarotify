/**
 * Slug translation map for i18n routing.
 *
 * Strategy: we keep English as canonical (internal) and translate slugs only at
 * the URL boundary. Spanish URLs use locale-native slugs for SEO ("el-loco"
 * matches "el loco tarot" 12k vol/mo better than "the-fool").
 *
 * ASCII-only slugs: no ñ, no accented vowels. Google handles "pentáculos" vs
 * "pentaculos" via accent folding, and ASCII avoids URL-encoding issues in
 * emails, share buttons, and older clients.
 *
 * Special handling:
 *  - "Año" → use synonym ("anual") to avoid ano/año confusion when ñ stripped.
 *  - Article preserved in slug ("el-loco" not "loco") — Spanish search behaviour
 *    favours the article form.
 *
 * Helpers below are designed for both Link href construction (canonical EN →
 * localised ES path) and middleware rewriting (incoming ES URL → internal EN
 * route segment for next-intl + dynamic [slug] params).
 */

export type Locale = 'en' | 'es'
export const LOCALES = ['en', 'es'] as const
export const DEFAULT_LOCALE: Locale = 'en'

// ---------------------------------------------------------------------------
// Card slug map (78 cards)
// ---------------------------------------------------------------------------

export const CARD_SLUGS: Record<Locale, Record<string, string>> = {
  en: {}, // identity — English is canonical
  es: {
    // Major Arcana
    'the-fool': 'el-loco',
    'the-magician': 'el-mago',
    'the-high-priestess': 'la-sacerdotisa',
    'the-empress': 'la-emperatriz',
    'the-emperor': 'el-emperador',
    'the-hierophant': 'el-hierofante',
    'the-lovers': 'los-enamorados',
    'the-chariot': 'el-carro',
    'strength': 'la-fuerza',
    'the-hermit': 'el-ermitano',
    'wheel-of-fortune': 'la-rueda-de-la-fortuna',
    'justice': 'la-justicia',
    'the-hanged-man': 'el-colgado',
    'death': 'la-muerte',
    'temperance': 'la-templanza',
    'the-devil': 'el-diablo',
    'the-tower': 'la-torre',
    'the-star': 'la-estrella',
    'the-moon': 'la-luna',
    'the-sun': 'el-sol',
    'judgement': 'el-juicio',
    'the-world': 'el-mundo',

    // Wands → Bastos
    'ace-of-wands': 'as-de-bastos',
    'two-of-wands': 'dos-de-bastos',
    'three-of-wands': 'tres-de-bastos',
    'four-of-wands': 'cuatro-de-bastos',
    'five-of-wands': 'cinco-de-bastos',
    'six-of-wands': 'seis-de-bastos',
    'seven-of-wands': 'siete-de-bastos',
    'eight-of-wands': 'ocho-de-bastos',
    'nine-of-wands': 'nueve-de-bastos',
    'ten-of-wands': 'diez-de-bastos',
    'page-of-wands': 'sota-de-bastos',
    'knight-of-wands': 'caballero-de-bastos',
    'queen-of-wands': 'reina-de-bastos',
    'king-of-wands': 'rey-de-bastos',

    // Cups → Copas
    'ace-of-cups': 'as-de-copas',
    'two-of-cups': 'dos-de-copas',
    'three-of-cups': 'tres-de-copas',
    'four-of-cups': 'cuatro-de-copas',
    'five-of-cups': 'cinco-de-copas',
    'six-of-cups': 'seis-de-copas',
    'seven-of-cups': 'siete-de-copas',
    'eight-of-cups': 'ocho-de-copas',
    'nine-of-cups': 'nueve-de-copas',
    'ten-of-cups': 'diez-de-copas',
    'page-of-cups': 'sota-de-copas',
    'knight-of-cups': 'caballero-de-copas',
    'queen-of-cups': 'reina-de-copas',
    'king-of-cups': 'rey-de-copas',

    // Swords → Espadas
    'ace-of-swords': 'as-de-espadas',
    'two-of-swords': 'dos-de-espadas',
    'three-of-swords': 'tres-de-espadas',
    'four-of-swords': 'cuatro-de-espadas',
    'five-of-swords': 'cinco-de-espadas',
    'six-of-swords': 'seis-de-espadas',
    'seven-of-swords': 'siete-de-espadas',
    'eight-of-swords': 'ocho-de-espadas',
    'nine-of-swords': 'nueve-de-espadas',
    'ten-of-swords': 'diez-de-espadas',
    'page-of-swords': 'sota-de-espadas',
    'knight-of-swords': 'caballero-de-espadas',
    'queen-of-swords': 'reina-de-espadas',
    'king-of-swords': 'rey-de-espadas',

    // Pentacles → Pentaculos (ASCII)
    'ace-of-pentacles': 'as-de-pentaculos',
    'two-of-pentacles': 'dos-de-pentaculos',
    'three-of-pentacles': 'tres-de-pentaculos',
    'four-of-pentacles': 'cuatro-de-pentaculos',
    'five-of-pentacles': 'cinco-de-pentaculos',
    'six-of-pentacles': 'seis-de-pentaculos',
    'seven-of-pentacles': 'siete-de-pentaculos',
    'eight-of-pentacles': 'ocho-de-pentaculos',
    'nine-of-pentacles': 'nueve-de-pentaculos',
    'ten-of-pentacles': 'diez-de-pentaculos',
    'page-of-pentacles': 'sota-de-pentaculos',
    'knight-of-pentacles': 'caballero-de-pentaculos',
    'queen-of-pentacles': 'reina-de-pentaculos',
    'king-of-pentacles': 'rey-de-pentaculos',
  },
}

// ---------------------------------------------------------------------------
// Full-path map for non-card routes (static, spreads, learning, hubs).
// Lookup is exact path match. Both leading segment and nested paths included.
// ---------------------------------------------------------------------------

export const PATH_SLUGS: Record<Locale, Record<string, string>> = {
  en: {}, // identity
  es: {
    // Top-level hubs
    '/cards': '/cartas',
    '/yes-no': '/si-no',
    '/spreads': '/tiradas',
    '/spreads/by-card-count': '/tiradas/por-numero-de-cartas',
    '/combination': '/combinaciones',
    '/free-reading': '/lectura-gratis',
    '/daily': '/carta-del-dia',
    '/quiz': '/quiz',
    '/reading-analysis': '/analisis-de-lectura',
    '/birth-card': '/carta-de-nacimiento',
    '/tarot-suits': '/palos-del-tarot',
    '/tarot-decks': '/barajas-de-tarot',
    '/zodiac': '/zodiaco',
    '/manifestation': '/manifestacion',
    '/tarot-journal': '/diario-de-tarot',
    '/tarot-for-beginners': '/tarot-para-principiantes',
    '/oracle-vs-tarot': '/oraculo-vs-tarot',
    '/how-to-read-tarot': '/como-leer-tarot',
    '/how-to-shuffle-tarot': '/como-barajar-tarot',
    '/how-to-cleanse-tarot-cards': '/como-limpiar-cartas-de-tarot',
    '/how-to-ask-tarot-questions': '/como-preguntar-al-tarot',
    '/about': '/acerca-de',
    '/privacy': '/privacidad',
    '/terms': '/terminos',

    // Quiz variants
    '/quiz/major': '/quiz/arcanos-mayores',
    '/quiz/minor': '/quiz/arcanos-menores',
    '/quiz/cups': '/quiz/copas',
    '/quiz/pentacles': '/quiz/pentaculos',
    '/quiz/swords': '/quiz/espadas',
    '/quiz/wands': '/quiz/bastos',
    '/quiz/all': '/quiz/todos',
    '/quiz/reversed': '/quiz/invertidas',

    // Tarot suits sub-pages
    '/tarot-suits/cups': '/palos-del-tarot/copas',
    '/tarot-suits/pentacles': '/palos-del-tarot/pentaculos',
    '/tarot-suits/swords': '/palos-del-tarot/espadas',
    '/tarot-suits/wands': '/palos-del-tarot/bastos',

    // Manifestation sub-pages
    '/manifestation/money': '/manifestacion/dinero',
    '/manifestation/love': '/manifestacion/amor',
    '/manifestation/success': '/manifestacion/exito',
    '/manifestation/health': '/manifestacion/salud',
    '/manifestation/sexual-energy': '/manifestacion/energia-sexual',

    // Classic spreads
    '/spreads/three-card': '/tiradas/tres-cartas',
    '/spreads/three-card/past-present-future': '/tiradas/tres-cartas/pasado-presente-futuro',
    '/spreads/celtic-cross': '/tiradas/cruz-celta',
    '/spreads/horseshoe': '/tiradas/herradura',
    '/spreads/year-ahead': '/tiradas/anual',
    '/spreads/weekly': '/tiradas/semanal',
    '/spreads/soulmate': '/tiradas/alma-gemela',
    '/spreads/career': '/tiradas/carrera',
    '/spreads/career/job-offer': '/tiradas/carrera/oferta-de-trabajo',

    // Love spreads
    '/spreads/love': '/tiradas/amor',
    '/spreads/love/reconciliation': '/tiradas/amor/reconciliacion',
    '/spreads/love/self-love': '/tiradas/amor/amor-propio',
    '/spreads/love/new-relationship': '/tiradas/amor/nueva-relacion',
    '/spreads/how-they-feel-about-me': '/tiradas/como-se-sienten-conmigo',
    '/spreads/will-my-ex-come-back': '/tiradas/volvera-mi-ex',
    '/spreads/should-i-stay-or-should-i-go': '/tiradas/me-quedo-o-me-voy',
    '/spreads/third-party': '/tiradas/tercera-persona',
    '/spreads/healing-after-heartbreak': '/tiradas/sanar-tras-desamor',
    '/spreads/what-blocks-my-love': '/tiradas/que-bloquea-mi-amor',
    '/spreads/what-do-i-need-to-heal': '/tiradas/que-necesito-sanar',
    '/spreads/true-love-spread': '/tiradas/amor-verdadero',

    // Moon spreads
    '/spreads/full-moon': '/tiradas/luna-llena',
    '/spreads/new-moon': '/tiradas/luna-nueva',
    '/spreads/waning-moon': '/tiradas/luna-menguante',
    '/spreads/dark-moon': '/tiradas/luna-oscura',
    '/spreads/eclipse': '/tiradas/eclipse',

    // Major Arcana spreads
    '/spreads/major': '/tiradas/arcanos-mayores',
    '/spreads/major/celtic-cross': '/tiradas/arcanos-mayores/cruz-celta',
    '/spreads/major/year-ahead': '/tiradas/arcanos-mayores/anual',
    '/spreads/major/decision': '/tiradas/arcanos-mayores/decision',
    '/spreads/major/shadow-work': '/tiradas/arcanos-mayores/trabajo-de-sombra',
    '/spreads/major/elemental': '/tiradas/arcanos-mayores/elemental',

    // Partner spreads
    '/spreads/partner': '/tiradas/pareja',
    '/spreads/partner/dating-connection': '/tiradas/pareja/conexion-en-citas',
    '/spreads/partner/relationship-growth': '/tiradas/pareja/crecimiento-de-relacion',
    '/spreads/partner/soulmate-discovery': '/tiradas/pareja/descubrir-alma-gemela',
    '/spreads/partner/partner-alignment': '/tiradas/pareja/alineacion-de-pareja',
    '/spreads/partner/love-attraction': '/tiradas/pareja/atraccion-amorosa',
    '/spreads/partner/dating-guidance': '/tiradas/pareja/guia-de-citas',

    // Daily Tarot variants
    '/daily/shadow-and-light': '/carta-del-dia/sombra-y-luz',
    '/daily/gratitude-and-growth': '/carta-del-dia/gratitud-y-crecimiento',
    '/daily/morning-afternoon-evening': '/carta-del-dia/manana-tarde-noche',
    '/daily/balance': '/carta-del-dia/equilibrio',
  },
}

// Zodiac signs share Spanish form for most but a few differ.
export const ZODIAC_SLUGS: Record<Locale, Record<string, string>> = {
  en: {},
  es: {
    aries: 'aries',
    taurus: 'tauro',
    gemini: 'geminis',
    cancer: 'cancer',
    leo: 'leo',
    virgo: 'virgo',
    libra: 'libra',
    scorpio: 'escorpio',
    sagittarius: 'sagitario',
    capricorn: 'capricornio',
    aquarius: 'acuario',
    pisces: 'piscis',
  },
}

// ---------------------------------------------------------------------------
// Reverse maps (es → en) built lazily once at module load.
// Used by middleware/server-resolve to map incoming Spanish URLs to internal
// English routes (which is where content is keyed).
// ---------------------------------------------------------------------------

function invertRecord(rec: Record<string, string>): Record<string, string> {
  const out: Record<string, string> = {}
  for (const [k, v] of Object.entries(rec)) out[v] = k
  return out
}

export const CARD_SLUGS_REVERSE: Record<Locale, Record<string, string>> = {
  en: {},
  es: invertRecord(CARD_SLUGS.es),
}

export const PATH_SLUGS_REVERSE: Record<Locale, Record<string, string>> = {
  en: {},
  es: invertRecord(PATH_SLUGS.es),
}

export const ZODIAC_SLUGS_REVERSE: Record<Locale, Record<string, string>> = {
  en: {},
  es: invertRecord(ZODIAC_SLUGS.es),
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Translate an English card slug to the locale slug.
 * Returns the input unchanged for English or when no translation exists.
 */
export function localizeCardSlug(enSlug: string, locale: Locale): string {
  if (locale === 'en') return enSlug
  return CARD_SLUGS[locale]?.[enSlug] ?? enSlug
}

/**
 * Translate a locale card slug back to the canonical English slug.
 * Used in server components to look up content keyed by EN slug.
 */
export function canonicalCardSlug(localSlug: string, locale: Locale): string {
  if (locale === 'en') return localSlug
  return CARD_SLUGS_REVERSE[locale]?.[localSlug] ?? localSlug
}

/** Same pattern for arbitrary paths. Returns input unchanged if no mapping. */
export function localizePath(enPath: string, locale: Locale): string {
  if (locale === 'en') return enPath
  return PATH_SLUGS[locale]?.[enPath] ?? enPath
}

export function canonicalPath(localPath: string, locale: Locale): string {
  if (locale === 'en') return localPath
  return PATH_SLUGS_REVERSE[locale]?.[localPath] ?? localPath
}

export function localizeZodiac(enSign: string, locale: Locale): string {
  if (locale === 'en') return enSign
  return ZODIAC_SLUGS[locale]?.[enSign] ?? enSign
}

export function canonicalZodiac(localSign: string, locale: Locale): string {
  if (locale === 'en') return localSign
  return ZODIAC_SLUGS_REVERSE[locale]?.[localSign] ?? localSign
}

/**
 * Build the localised href for an English internal path.
 * Adds locale prefix for non-default locale.
 *
 * @example
 *   buildHref('/cards/the-fool', 'es') → '/es/cartas/el-loco'
 *   buildHref('/cards/the-fool', 'en') → '/cards/the-fool'
 */
export function buildHref(enPath: string, locale: Locale): string {
  // Handle /cards/[slug]/<sub> patterns specifically since /cards itself maps
  // to /cartas and the slug needs separate translation.
  const cardMatch = enPath.match(/^\/cards\/([^\/]+)(\/.*)?$/)
  if (cardMatch) {
    const [, slug, rest = ''] = cardMatch
    const localSlug = localizeCardSlug(slug, locale)
    const localBase = locale === 'en' ? '/cards' : (PATH_SLUGS[locale]['/cards'] ?? '/cards')
    const path = `${localBase}/${localSlug}${rest}`
    return locale === DEFAULT_LOCALE ? path : `/${locale}${path}`
  }

  // /yes-no/[slug]
  const ynMatch = enPath.match(/^\/yes-no\/([^\/]+)$/)
  if (ynMatch) {
    const [, slug] = ynMatch
    const localSlug = localizeCardSlug(slug, locale)
    const localBase = locale === 'en' ? '/yes-no' : (PATH_SLUGS[locale]['/yes-no'] ?? '/yes-no')
    const path = `${localBase}/${localSlug}`
    return locale === DEFAULT_LOCALE ? path : `/${locale}${path}`
  }

  // /zodiac/[sign]
  const zMatch = enPath.match(/^\/zodiac\/([^\/]+)$/)
  if (zMatch) {
    const [, sign] = zMatch
    const localSign = localizeZodiac(sign, locale)
    const localBase = locale === 'en' ? '/zodiac' : (PATH_SLUGS[locale]['/zodiac'] ?? '/zodiac')
    const path = `${localBase}/${localSign}`
    return locale === DEFAULT_LOCALE ? path : `/${locale}${path}`
  }

  // Generic path lookup
  const localPath = localizePath(enPath, locale)
  return locale === DEFAULT_LOCALE ? localPath : `/${locale}${localPath}`
}

/**
 * Reverse — given an incoming localised path (without locale prefix), return
 * canonical English path. Used by middleware to resolve to internal routes.
 */
export function canonicaliseHref(localPath: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return localPath

  // /cartas/[slug]/<sub>
  const localCards = PATH_SLUGS[locale]['/cards'] ?? '/cards'
  if (localPath.startsWith(localCards + '/')) {
    const rest = localPath.slice(localCards.length + 1)
    const [slug, ...sub] = rest.split('/')
    return `/cards/${canonicalCardSlug(slug, locale)}${sub.length ? '/' + sub.join('/') : ''}`
  }

  // /si-no/[slug]
  const localYN = PATH_SLUGS[locale]['/yes-no'] ?? '/yes-no'
  if (localPath.startsWith(localYN + '/')) {
    const slug = localPath.slice(localYN.length + 1)
    return `/yes-no/${canonicalCardSlug(slug, locale)}`
  }

  // /zodiaco/[sign]
  const localZ = PATH_SLUGS[locale]['/zodiac'] ?? '/zodiac'
  if (localPath.startsWith(localZ + '/')) {
    const sign = localPath.slice(localZ.length + 1)
    return `/zodiac/${canonicalZodiac(sign, locale)}`
  }

  // Generic
  return canonicalPath(localPath, locale)
}
