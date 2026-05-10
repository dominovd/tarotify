import { MetadataRoute } from 'next'
import { CARDS } from '@/lib/cards'
import { MAJOR_COMBOS, PRIORITY_MINOR_COMBOS } from '@/lib/combinations'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://tarotify.app'

  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                           lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/cards`,                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/yes-no`,               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/combination`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/spreads`,                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/spreads/three-card`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/spreads/celtic-cross`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/spreads/love`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/spreads/year-ahead`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/spreads/full-moon`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/spreads/new-moon`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/spreads/horseshoe`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/spreads/soulmate`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/spreads/career`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/spreads/weekly`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/reading`,                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
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

  return [...staticPages, ...cardPages, ...comboPages]
}
