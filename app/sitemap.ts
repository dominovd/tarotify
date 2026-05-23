import { MetadataRoute } from 'next'
import { CARDS } from '@/lib/cards'
import { MAJOR_COMBOS, PRIORITY_MINOR_COMBOS } from '@/lib/combinations'
import { localizeCardSlug } from '@/lib/i18n/slugs'

// Set of EN paths that have a Spanish counterpart at /es/<localised>.
// Keep this in sync with the Phase 2 migration as more pages are translated.
const ES_MIGRATED_PATHS = new Set<string>([
  '/',
  '/cards',
])

const BASE = 'https://tarotaxis.com'

function withAltLanguages(enPath: string, esPath?: string): MetadataRoute.Sitemap[number]['alternates'] {
  if (!esPath) return undefined
  return {
    languages: {
      en: `${BASE}${enPath}`,
      es: `${BASE}${esPath}`,
      'x-default': `${BASE}${enPath}`,
    },
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BASE

  // ---------------------------------------------------------------------
  // English-only static pages (no Spanish counterpart yet)
  // ---------------------------------------------------------------------
  const staticEnOnly: MetadataRoute.Sitemap = [
    { url: `${base}/spreads`,                               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/quiz`,                                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/quiz/major`,                            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/quiz/minor`,                            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.72 },
    { url: `${base}/quiz/cups`,                             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.68 },
    { url: `${base}/quiz/pentacles`,                        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.68 },
    { url: `${base}/quiz/swords`,                           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.68 },
    { url: `${base}/quiz/wands`,                            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.68 },
    { url: `${base}/quiz/all`,                              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/quiz/reversed`,                         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.72 },
    { url: `${base}/reading-analysis`,                      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
  ]

  // ---------------------------------------------------------------------
  // Bilingual trends page (data-driven, refreshed daily)
  // ---------------------------------------------------------------------
  const trendsEn: MetadataRoute.Sitemap = [{
    url: `${base}/trends`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
    alternates: withAltLanguages('/trends', '/es/tendencias'),
  }]
  const trendsEs: MetadataRoute.Sitemap = [{
    url: `${base}/es/tendencias`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.75,
    alternates: withAltLanguages('/trends', '/es/tendencias'),
  }]

  // ---------------------------------------------------------------------
  // Bilingual pages: homepage + /cards (and ES counterparts)
  // ---------------------------------------------------------------------
  const bilingualEn: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: withAltLanguages('/', '/es'),
    },
    {
      url: `${base}/cards`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: withAltLanguages('/cards', '/es/cartas'),
    },
  ]

  const bilingualEs: MetadataRoute.Sitemap = [
    {
      url: `${base}/es`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: withAltLanguages('/', '/es'),
    },
    {
      url: `${base}/es/cartas`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: withAltLanguages('/cards', '/es/cartas'),
    },
  ]

  // ---------------------------------------------------------------------
  // Bilingual interactive routes (added Phase 3.3 2026-05-15)
  // ---------------------------------------------------------------------
  const interactiveBilingual: MetadataRoute.Sitemap = [
    {
      url: `${base}/yes-no`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: withAltLanguages('/yes-no', '/es/si-no'),
    },
    {
      url: `${base}/es/si-no`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
      alternates: withAltLanguages('/yes-no', '/es/si-no'),
    },
    {
      url: `${base}/daily`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
      alternates: withAltLanguages('/daily', '/es/carta-del-dia'),
    },
    {
      url: `${base}/es/carta-del-dia`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.85,
      alternates: withAltLanguages('/daily', '/es/carta-del-dia'),
    },
    {
      url: `${base}/free-reading`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: withAltLanguages('/free-reading', '/es/lectura-gratis'),
    },
    {
      url: `${base}/es/lectura-gratis`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: withAltLanguages('/free-reading', '/es/lectura-gratis'),
    },
  ]

  // ---------------------------------------------------------------------
  // Bilingual Phase 4 routes — learning, manifestation, tarot suits
  // (added 2026-05-15)
  // ---------------------------------------------------------------------
  const PHASE_4_PAIRS: Array<{ en: string; es: string; priority: number; enPriority?: number }> = [
    // Learning (7)
    { en: '/tarot-for-beginners',         es: '/es/tarot-para-principiantes',       priority: 0.8 },
    { en: '/how-to-read-tarot',           es: '/es/como-leer-tarot',                priority: 0.8 },
    { en: '/how-to-shuffle-tarot',        es: '/es/como-barajar-tarot',             priority: 0.7 },
    { en: '/how-to-cleanse-tarot-cards',  es: '/es/como-limpiar-cartas-de-tarot',   priority: 0.7 },
    { en: '/how-to-ask-tarot-questions',  es: '/es/como-preguntar-al-tarot',        priority: 0.7 },
    { en: '/tarot-journal',               es: '/es/diario-de-tarot',                priority: 0.8 },
    { en: '/oracle-vs-tarot',             es: '/es/oraculo-vs-tarot',               priority: 0.75 },
    // Manifestation (6)
    { en: '/manifestation',               es: '/es/manifestacion',                  priority: 0.8 },
    { en: '/manifestation/money',         es: '/es/manifestacion/dinero',           priority: 0.75 },
    { en: '/manifestation/love',          es: '/es/manifestacion/amor',             priority: 0.75 },
    { en: '/manifestation/success',       es: '/es/manifestacion/exito',            priority: 0.75 },
    { en: '/manifestation/health',        es: '/es/manifestacion/salud',            priority: 0.75 },
    { en: '/manifestation/sexual-energy', es: '/es/manifestacion/energia-sexual',   priority: 0.7 },
    // Tarot suits (5)
    { en: '/tarot-suits',                 es: '/es/palos-del-tarot',                priority: 0.8 },
    { en: '/tarot-suits/cups',            es: '/es/palos-del-tarot/copas',          priority: 0.75 },
    { en: '/tarot-suits/pentacles',       es: '/es/palos-del-tarot/pentaculos',     priority: 0.75 },
    { en: '/tarot-suits/swords',          es: '/es/palos-del-tarot/espadas',        priority: 0.75 },
    { en: '/tarot-suits/wands',           es: '/es/palos-del-tarot/bastos',         priority: 0.75 },
  ]
  const PHASE_5A_PAIRS: Array<{ en: string; es: string; priority: number }> = [
    // Spreads hub + navigation
    { en: '/spreads',                                es: '/es/tiradas',                                priority: 0.7 },
    { en: '/spreads/by-card-count',                  es: '/es/tiradas/por-numero-de-cartas',           priority: 0.75 },
    // Classic spreads
    { en: '/spreads/three-card',                     es: '/es/tiradas/tres-cartas',                    priority: 0.7 },
    { en: '/spreads/three-card/past-present-future', es: '/es/tiradas/tres-cartas/pasado-presente-futuro', priority: 0.7 },
    { en: '/spreads/celtic-cross',                   es: '/es/tiradas/cruz-celta',                     priority: 0.6 },
    { en: '/spreads/love',                           es: '/es/tiradas/amor',                           priority: 0.7 },
    { en: '/spreads/love/reconciliation',            es: '/es/tiradas/amor/reconciliacion',            priority: 0.7 },
    { en: '/spreads/love/self-love',                 es: '/es/tiradas/amor/amor-propio',               priority: 0.7 },
    { en: '/spreads/love/new-relationship',          es: '/es/tiradas/amor/nueva-relacion',            priority: 0.7 },
    { en: '/spreads/year-ahead',                     es: '/es/tiradas/anual',                          priority: 0.6 },
    { en: '/spreads/horseshoe',                      es: '/es/tiradas/herradura',                      priority: 0.6 },
    { en: '/spreads/soulmate',                       es: '/es/tiradas/alma-gemela',                    priority: 0.7 },
    { en: '/spreads/career',                         es: '/es/tiradas/carrera',                        priority: 0.7 },
    { en: '/spreads/career/job-offer',               es: '/es/tiradas/carrera/oferta-de-trabajo',      priority: 0.7 },
    { en: '/spreads/weekly',                         es: '/es/tiradas/semanal',                        priority: 0.7 },
    // Moon spreads
    { en: '/spreads/full-moon',                      es: '/es/tiradas/luna-llena',                     priority: 0.6 },
    { en: '/spreads/new-moon',                       es: '/es/tiradas/luna-nueva',                     priority: 0.6 },
    { en: '/spreads/waning-moon',                    es: '/es/tiradas/luna-menguante',                 priority: 0.6 },
    { en: '/spreads/dark-moon',                      es: '/es/tiradas/luna-oscura',                    priority: 0.6 },
    { en: '/spreads/eclipse',                        es: '/es/tiradas/eclipse',                        priority: 0.6 },
  ]
  const PHASE_5B_PAIRS: Array<{ en: string; es: string; priority: number }> = [
    // Love expansion (8)
    { en: '/spreads/how-they-feel-about-me',         es: '/es/tiradas/como-se-sienten-conmigo',        priority: 0.85 },
    { en: '/spreads/will-my-ex-come-back',           es: '/es/tiradas/volvera-mi-ex',                  priority: 0.85 },
    { en: '/spreads/should-i-stay-or-should-i-go',   es: '/es/tiradas/me-quedo-o-me-voy',              priority: 0.8 },
    { en: '/spreads/third-party',                    es: '/es/tiradas/tercera-persona',                priority: 0.75 },
    { en: '/spreads/healing-after-heartbreak',       es: '/es/tiradas/sanar-tras-desamor',             priority: 0.8 },
    { en: '/spreads/what-blocks-my-love',            es: '/es/tiradas/que-bloquea-mi-amor',            priority: 0.75 },
    { en: '/spreads/what-do-i-need-to-heal',         es: '/es/tiradas/que-necesito-sanar',             priority: 0.75 },
    { en: '/spreads/true-love-spread',               es: '/es/tiradas/amor-verdadero',                 priority: 0.75 },
    // Major Arcana spreads (6)
    { en: '/spreads/major',                          es: '/es/tiradas/arcanos-mayores',                priority: 0.8 },
    { en: '/spreads/major/celtic-cross',             es: '/es/tiradas/arcanos-mayores/cruz-celta',     priority: 0.75 },
    { en: '/spreads/major/year-ahead',               es: '/es/tiradas/arcanos-mayores/anual',          priority: 0.75 },
    { en: '/spreads/major/decision',                 es: '/es/tiradas/arcanos-mayores/decision',       priority: 0.75 },
    { en: '/spreads/major/shadow-work',              es: '/es/tiradas/arcanos-mayores/trabajo-de-sombra', priority: 0.75 },
    { en: '/spreads/major/elemental',                es: '/es/tiradas/arcanos-mayores/elemental',      priority: 0.7 },
    // Partner spreads (7)
    { en: '/spreads/partner',                        es: '/es/tiradas/pareja',                         priority: 0.8 },
    { en: '/spreads/partner/dating-connection',      es: '/es/tiradas/pareja/conexion-en-citas',       priority: 0.78 },
    { en: '/spreads/partner/relationship-growth',    es: '/es/tiradas/pareja/crecimiento-de-relacion', priority: 0.78 },
    { en: '/spreads/partner/soulmate-discovery',     es: '/es/tiradas/pareja/descubrir-alma-gemela',   priority: 0.8 },
    { en: '/spreads/partner/partner-alignment',      es: '/es/tiradas/pareja/alineacion-de-pareja',    priority: 0.75 },
    { en: '/spreads/partner/love-attraction',        es: '/es/tiradas/pareja/atraccion-amorosa',       priority: 0.8 },
    { en: '/spreads/partner/dating-guidance',        es: '/es/tiradas/pareja/guia-de-citas',           priority: 0.75 },
    // Daily variants (4)
    { en: '/daily/shadow-and-light',                 es: '/es/carta-del-dia/sombra-y-luz',             priority: 0.75 },
    { en: '/daily/gratitude-and-growth',             es: '/es/carta-del-dia/gratitud-y-crecimiento',   priority: 0.75 },
    { en: '/daily/morning-afternoon-evening',        es: '/es/carta-del-dia/manana-tarde-noche',       priority: 0.75 },
    { en: '/daily/balance',                          es: '/es/carta-del-dia/equilibrio',               priority: 0.7 },
  ]
  const phase5bBilingual: MetadataRoute.Sitemap = PHASE_5B_PAIRS.flatMap(({ en, es, priority }) => ([
    {
      url: `${base}${en}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority,
      alternates: withAltLanguages(en, es),
    },
    {
      url: `${base}${es}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: Math.max(0.4, priority - 0.05),
      alternates: withAltLanguages(en, es),
    },
  ]))
  const phase5aBilingual: MetadataRoute.Sitemap = PHASE_5A_PAIRS.flatMap(({ en, es, priority }) => ([
    {
      url: `${base}${en}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority,
      alternates: withAltLanguages(en, es),
    },
    {
      url: `${base}${es}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: Math.max(0.4, priority - 0.05),
      alternates: withAltLanguages(en, es),
    },
  ]))
  const phase4Bilingual: MetadataRoute.Sitemap = PHASE_4_PAIRS.flatMap(({ en, es, priority }) => ([
    {
      url: `${base}${en}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority,
      alternates: withAltLanguages(en, es),
    },
    {
      url: `${base}${es}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: Math.max(0.4, priority - 0.05),
      alternates: withAltLanguages(en, es),
    },
  ]))

  // ---------------------------------------------------------------------
  // Bilingual card pages — /cards/[slug] ↔ /es/cartas/[esSlug]
  // ---------------------------------------------------------------------
  const cardPagesEn: MetadataRoute.Sitemap = CARDS.map(card => {
    const enPath = `/cards/${card.slug}`
    const esPath = `/es/cartas/${localizeCardSlug(card.slug, 'es')}`
    return {
      url: `${base}${enPath}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: withAltLanguages(enPath, esPath),
    }
  })

  const cardPagesEs: MetadataRoute.Sitemap = CARDS.map(card => {
    const enPath = `/cards/${card.slug}`
    const esPath = `/es/cartas/${localizeCardSlug(card.slug, 'es')}`
    return {
      url: `${base}${esPath}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.55,
      alternates: withAltLanguages(enPath, esPath),
    }
  })

  // ---------------------------------------------------------------------
  // Bilingual /cards/[slug]/reversed ↔ /es/cartas/[esSlug]/invertida
  // ---------------------------------------------------------------------
  const cardReversedPagesEn: MetadataRoute.Sitemap = CARDS.map(card => {
    const enPath = `/cards/${card.slug}/reversed`
    const esPath = `/es/cartas/${localizeCardSlug(card.slug, 'es')}/invertida`
    return {
      url: `${base}${enPath}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.55,
      alternates: withAltLanguages(enPath, esPath),
    }
  })
  const cardReversedPagesEs: MetadataRoute.Sitemap = CARDS.map(card => {
    const enPath = `/cards/${card.slug}/reversed`
    const esPath = `/es/cartas/${localizeCardSlug(card.slug, 'es')}/invertida`
    return {
      url: `${base}${esPath}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: withAltLanguages(enPath, esPath),
    }
  })

  // ---------------------------------------------------------------------
  // Bilingual /cards/[slug]/feelings ↔ /es/cartas/[esSlug]/sentimientos
  // ---------------------------------------------------------------------
  const cardFeelingsPagesEn: MetadataRoute.Sitemap = CARDS.map(card => {
    const enPath = `/cards/${card.slug}/feelings`
    const esPath = `/es/cartas/${localizeCardSlug(card.slug, 'es')}/sentimientos`
    return {
      url: `${base}${enPath}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: withAltLanguages(enPath, esPath),
    }
  })
  const cardFeelingsPagesEs: MetadataRoute.Sitemap = CARDS.map(card => {
    const enPath = `/cards/${card.slug}/feelings`
    const esPath = `/es/cartas/${localizeCardSlug(card.slug, 'es')}/sentimientos`
    return {
      url: `${base}${esPath}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.55,
      alternates: withAltLanguages(enPath, esPath),
    }
  })

  // ---------------------------------------------------------------------
  // Bilingual zodiac (Phase 6) — hub + 12 signs.
  // EN slugs: aries/taurus/gemini/cancer/leo/virgo/libra/scorpio/sagittarius/capricorn/aquarius/pisces
  // ES slugs: aries/tauro/geminis/cancer/leo/virgo/libra/escorpio/sagitario/capricornio/acuario/piscis
  // ---------------------------------------------------------------------
  const ZODIAC_SIGN_MAP: Record<string, string> = {
    aries: 'aries', taurus: 'tauro', gemini: 'geminis', cancer: 'cancer',
    leo: 'leo', virgo: 'virgo', libra: 'libra', scorpio: 'escorpio',
    sagittarius: 'sagitario', capricorn: 'capricornio', aquarius: 'acuario', pisces: 'piscis',
  }
  const zodiacHubBilingual: MetadataRoute.Sitemap = [
    { url: `${base}/zodiac`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8,  alternates: withAltLanguages('/zodiac', '/es/zodiaco') },
    { url: `${base}/es/zodiaco`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75, alternates: withAltLanguages('/zodiac', '/es/zodiaco') },
  ]
  const zodiacPagesEn: MetadataRoute.Sitemap = Object.entries(ZODIAC_SIGN_MAP).map(([en, es]) => ({
    url: `${base}/zodiac/${en}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    alternates: withAltLanguages(`/zodiac/${en}`, `/es/zodiaco/${es}`),
  }))
  const zodiacPagesEs: MetadataRoute.Sitemap = Object.entries(ZODIAC_SIGN_MAP).map(([en, es]) => ({
    url: `${base}/es/zodiaco/${es}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
    alternates: withAltLanguages(`/zodiac/${en}`, `/es/zodiaco/${es}`),
  }))

  // ---------------------------------------------------------------------
  // Bilingual combinations (Phase 6) — hub + dynamic combo slugs.
  // Spanish preserves EN combo slug; only path prefix differs.
  // ---------------------------------------------------------------------
  const comboHubBilingual: MetadataRoute.Sitemap = [
    { url: `${base}/combination`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8,  alternates: withAltLanguages('/combination', '/es/combinaciones') },
    { url: `${base}/es/combinaciones`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75, alternates: withAltLanguages('/combination', '/es/combinaciones') },
  ]
  const comboSlugs = [...MAJOR_COMBOS, ...PRIORITY_MINOR_COMBOS]
  const comboPagesEn: MetadataRoute.Sitemap = comboSlugs.map(slug => ({
    url: `${base}/combination/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
    alternates: withAltLanguages(`/combination/${slug}`, `/es/combinaciones/${slug}`),
  }))
  const comboPagesEs: MetadataRoute.Sitemap = comboSlugs.map(slug => ({
    url: `${base}/es/combinaciones/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.45,
    alternates: withAltLanguages(`/combination/${slug}`, `/es/combinaciones/${slug}`),
  }))

  // ---------------------------------------------------------------------
  // Bilingual tarot-decks (Phase 6)
  // ---------------------------------------------------------------------
  const tarotDecksBilingual: MetadataRoute.Sitemap = [
    { url: `${base}/tarot-decks`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75, alternates: withAltLanguages('/tarot-decks', '/es/barajas-de-tarot') },
    { url: `${base}/es/barajas-de-tarot`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7,  alternates: withAltLanguages('/tarot-decks', '/es/barajas-de-tarot') },
  ]

  // ---------------------------------------------------------------------
  // Bilingual Phase 7 — birth-card + static (about/privacy/terms)
  // ---------------------------------------------------------------------
  const PHASE_7_PAIRS: Array<{ en: string; es: string; priority: number; changeFrequency: 'monthly' | 'yearly' }> = [
    { en: '/birth-card',   es: '/es/carta-de-nacimiento', priority: 0.8, changeFrequency: 'monthly' },
    { en: '/methodology',  es: '/es/metodologia',         priority: 0.75, changeFrequency: 'monthly' },
    { en: '/pricing',      es: '/es/precios',             priority: 0.7, changeFrequency: 'monthly' },
    { en: '/about',        es: '/es/acerca-de',           priority: 0.4, changeFrequency: 'yearly' },
    { en: '/privacy',      es: '/es/privacidad',          priority: 0.3, changeFrequency: 'yearly' },
    { en: '/terms',        es: '/es/terminos',            priority: 0.3, changeFrequency: 'yearly' },
  ]
  const phase7Bilingual: MetadataRoute.Sitemap = PHASE_7_PAIRS.flatMap(({ en, es, priority, changeFrequency }) => ([
    { url: `${base}${en}`,  lastModified: new Date(), changeFrequency, priority,                            alternates: withAltLanguages(en, es) },
    { url: `${base}${es}`,  lastModified: new Date(), changeFrequency, priority: Math.max(0.2, priority - 0.05), alternates: withAltLanguages(en, es) },
  ]))

  // spreadSubPages handled by phase5aBilingual below.
  const spreadSubPages: MetadataRoute.Sitemap = []

  const yesNoPagesEn: MetadataRoute.Sitemap = CARDS.map(card => {
    const enPath = `/yes-no/${card.slug}`
    const esPath = `/es/si-no/${localizeCardSlug(card.slug, 'es')}`
    return {
      url: `${base}${enPath}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.65,
      alternates: withAltLanguages(enPath, esPath),
    }
  })
  const yesNoPagesEs: MetadataRoute.Sitemap = CARDS.map(card => {
    const enPath = `/yes-no/${card.slug}`
    const esPath = `/es/si-no/${localizeCardSlug(card.slug, 'es')}`
    return {
      url: `${base}${esPath}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: withAltLanguages(enPath, esPath),
    }
  })

  // Reference ES_MIGRATED_PATHS to silence the unused-import warning when this
  // set is consumed by future migrations; it documents the current scope.
  void ES_MIGRATED_PATHS

  return [
    ...bilingualEn,
    ...bilingualEs,
    ...interactiveBilingual,
    ...phase4Bilingual,
    ...phase5aBilingual,
    ...phase5bBilingual,
    ...zodiacHubBilingual,
    ...zodiacPagesEn,
    ...zodiacPagesEs,
    ...comboHubBilingual,
    ...comboPagesEn,
    ...comboPagesEs,
    ...tarotDecksBilingual,
    ...phase7Bilingual,
    ...staticEnOnly,
    ...spreadSubPages,
    ...cardPagesEn,
    ...cardPagesEs,
    ...cardReversedPagesEn,
    ...cardReversedPagesEs,
    ...cardFeelingsPagesEn,
    ...cardFeelingsPagesEs,
    ...yesNoPagesEn,
    ...yesNoPagesEs,
    ...trendsEn,
    ...trendsEs,
  ]
}
