import type { MetadataRoute } from 'next'
import { buildSitemap, onlyIndexable } from '@/lib/seo/sitemap-entries'

// Google sitemap: excludes pages closed to Googlebot (lib/seo/noindex.ts).
// The unfiltered list is served at /sitemap-full.xml for Bing.
export default function sitemap(): MetadataRoute.Sitemap {
  return onlyIndexable(buildSitemap())
}
