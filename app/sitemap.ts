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
    { url: `${base}/spreads/horseshoe`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/spreads/soulmate`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/spreads/career`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/spreads/weekly`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/free-reading`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/how-to-read-tarot`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/how-to-ask-tarot-questions`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/birth-card`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/how-to-shuffle-tarot`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/how-to-cleanse-tarot-cards`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/daily`,                  lastModified: new Date(), changeFrequency: 'daily',   priority: 0.9 },
  ]

  const cardPages: MetadataRoute.Sitemap = CARDS.map(card => ({
    url: `${base}/cards/${card.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
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

  return [...staticPages, ...spreadSubPages, ...cardPages, ...comboPages, ...yesNoPages]
}
