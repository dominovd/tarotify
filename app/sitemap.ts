import { MetadataRoute } from 'next'
import { CARDS } from '@/lib/cards'
import { MAJOR_COMBOS, PRIORITY_MINOR_COMBOS } from '@/lib/combinations'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://tarotaxis.com'

  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                           lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/cards`,                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/yes-no`,               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/combination`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/spreads`,                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/spreads/by-card-count`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/spreads/three-card`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/spreads/celtic-cross`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/spreads/love`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/spreads/year-ahead`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/spreads/full-moon`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/spreads/new-moon`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/spreads/waning-moon`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/spreads/dark-moon`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/spreads/eclipse`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/spreads/how-they-feel-about-me`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/spreads/will-my-ex-come-back`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/spreads/should-i-stay-or-should-i-go`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/spreads/third-party`,                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/spreads/healing-after-heartbreak`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/spreads/what-blocks-my-love`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/spreads/what-do-i-need-to-heal`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/spreads/true-love-spread`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/spreads/horseshoe`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/spreads/soulmate`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/spreads/career`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/spreads/weekly`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/free-reading`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/how-to-read-tarot`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/how-to-ask-tarot-questions`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/birth-card`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/quiz`,                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/quiz/major`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/quiz/minor`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.72 },
    { url: `${base}/quiz/cups`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.68 },
    { url: `${base}/quiz/pentacles`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.68 },
    { url: `${base}/quiz/swords`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.68 },
    { url: `${base}/quiz/wands`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.68 },
    { url: `${base}/quiz/all`,               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/reading-analysis`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },

    // Major-only spreads (2026-05-13)
    { url: `${base}/spreads/major`,                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/spreads/major/celtic-cross`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/spreads/major/year-ahead`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/spreads/major/decision`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/spreads/major/shadow-work`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/spreads/major/elemental`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Daily Tarot variants (2026-05-13)
    { url: `${base}/daily/shadow-and-light`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/daily/gratitude-and-growth`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/daily/morning-afternoon-evening`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/daily/balance`,                      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Partner & relationship spreads (2026-05-13)
    { url: `${base}/spreads/partner`,                       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/spreads/partner/dating-connection`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.78 },
    { url: `${base}/spreads/partner/relationship-growth`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.78 },
    { url: `${base}/spreads/partner/soulmate-discovery`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/spreads/partner/partner-alignment`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/spreads/partner/love-attraction`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/spreads/partner/dating-guidance`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/how-to-shuffle-tarot`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/how-to-cleanse-tarot-cards`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/daily`,                  lastModified: new Date(), changeFrequency: 'daily',   priority: 0.9 },
    { url: `${base}/manifestation`,                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/manifestation/money`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/manifestation/love`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/manifestation/success`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/manifestation/health`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/manifestation/sexual-energy`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/tarot-suits`,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/tarot-suits/cups`,               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/tarot-suits/pentacles`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/tarot-suits/swords`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/tarot-suits/wands`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/tarot-decks`,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/zodiac`,                         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/tarot-journal`,                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/tarot-for-beginners`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/oracle-vs-tarot`,                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/about`,                          lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.4 },
    { url: `${base}/privacy`,                        lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/terms`,                          lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
  ]

  const ZODIAC_SIGNS = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces']
  const zodiacPages: MetadataRoute.Sitemap = ZODIAC_SIGNS.map(sign => ({
    url: `${base}/zodiac/${sign}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const cardPages: MetadataRoute.Sitemap = CARDS.map(card => ({
    url: `${base}/cards/${card.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const cardReversedPages: MetadataRoute.Sitemap = CARDS.map(card => ({
    url: `${base}/cards/${card.slug}/reversed`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.55,
  }))

  const comboPages: MetadataRoute.Sitemap = [...MAJOR_COMBOS, ...PRIORITY_MINOR_COMBOS].map(slug => ({
    url: `${base}/combination/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  const spreadSubPages: MetadataRoute.Sitemap = [
    '/spreads/love/reconciliation',
    '/spreads/love/self-love',
    '/spreads/love/new-relationship',
    '/spreads/career/job-offer',
    '/spreads/three-card/past-present-future',
  ].map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 }))

  const yesNoPages: MetadataRoute.Sitemap = CARDS.map(card => ({
    url: `${base}/yes-no/${card.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.65,
  }))

  return [...staticPages, ...zodiacPages, ...spreadSubPages, ...cardPages, ...cardReversedPages, ...comboPages, ...yesNoPages]
}
