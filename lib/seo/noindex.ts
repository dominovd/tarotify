// Pages closed to Googlebot (X-Robots-Tag: googlebot: noindex, follow).
// Other crawlers (Bing, LLM bots) still index them. Used by middleware for
// the header and by app/sitemap.ts to drop these URLs and their hreflang.
//
// Spanish: everything under /es is closed except the homepage and these tools
// (the tool page itself only, its sub-pages are closed).
// English: /combination, /yes-no, /quiz, /trends, /og (image route) with
// everything under them, and the /cards/<card>/feelings pages.

const ES_OPEN = new Set([
  '/es',
  '/es/lectura-gratis',
  '/es/carta-del-dia',
  '/es/si-no',
  '/es/carta-de-nacimiento',
])

const EN_CLOSED_PREFIXES = ['/combination', '/yes-no', '/quiz', '/trends', '/og']
const EN_CLOSED_PATTERNS = [/^\/cards\/[^/]+\/feelings$/]

export const GOOGLE_NOINDEX_HEADER = 'googlebot: noindex, follow'

function normalise(pathname: string): string {
  const p = pathname.split(/[?#]/)[0] || '/'
  return p.length > 1 ? p.replace(/\/+$/, '') : p
}

export function isGoogleNoindex(pathname: string): boolean {
  const p = normalise(pathname)
  if (p === '/es' || p.startsWith('/es/')) return !ES_OPEN.has(p)
  return EN_CLOSED_PREFIXES.some(prefix => p === prefix || p.startsWith(prefix + '/'))
    || EN_CLOSED_PATTERNS.some(re => re.test(p))
}
