import { MetadataRoute } from 'next'
import { CARDS } from '@/lib/cards'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://tarotify.app'

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/cards`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/yes-no`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/combination`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]

  const cardPages: MetadataRoute.Sitemap = CARDS.map(card => ({
    url: `${base}/cards/${card.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...cardPages]
}
