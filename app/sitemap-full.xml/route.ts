// Full sitemap for Bing and other non-Google crawlers. Same entries as
// /sitemap.xml before the Googlebot noindex filter. Deliberately not listed
// in robots.txt (Google would read it too); submit it in Bing Webmaster Tools.

import { buildSitemap } from '@/lib/seo/sitemap-entries'

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function GET(): Response {
  const entries = buildSitemap()
  const urls = entries.map(e => {
    const parts = [`<loc>${esc(e.url)}</loc>`]
    const langs = e.alternates?.languages as Record<string, string> | undefined
    if (langs) {
      for (const [lang, href] of Object.entries(langs)) {
        parts.push(`<xhtml:link rel="alternate" hreflang="${esc(lang)}" href="${esc(href)}" />`)
      }
    }
    if (e.lastModified) {
      const d = e.lastModified instanceof Date ? e.lastModified : new Date(e.lastModified)
      parts.push(`<lastmod>${d.toISOString()}</lastmod>`)
    }
    if (e.changeFrequency) parts.push(`<changefreq>${e.changeFrequency}</changefreq>`)
    if (e.priority !== undefined) parts.push(`<priority>${e.priority}</priority>`)
    return `<url>\n${parts.join('\n')}\n</url>`
  })
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`
  return new Response(xml, {
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, max-age=3600',
      // Keep the file itself out of Google's index.
      'x-robots-tag': 'noindex',
    },
  })
}
