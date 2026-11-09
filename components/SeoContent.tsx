// Server-rendered explanatory copy for pages whose main UI is a client-side
// tool (home, free reading, birth card). Crawlers see this text in the
// initial HTML; visitors find it below the tool.

import Link from 'next/link'
import type { ReactNode } from 'react'

export interface SeoSection {
  heading: string
  body: ReactNode
}

const h2Style = {
  fontFamily: "'Cinzel',serif",
  fontSize: '1.15rem',
  color: 'var(--gold)',
  letterSpacing: '0.04em',
  margin: '0 0 0.75rem',
} as const

export const seoP = { color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.75, margin: '0 0 0.85rem' } as const
export const seoList = { color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.75, margin: '0 0 0.85rem', paddingLeft: '1.25rem' } as const
export const seoLink = { color: 'var(--gold)', borderBottom: '1px dashed rgba(201,168,76,.5)', textDecoration: 'none' } as const

export function SeoLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} style={seoLink}>{children}</Link>
}

export default function SeoContent({ sections, maxWidth = 720 }: { sections: SeoSection[]; maxWidth?: number }) {
  return (
    <section
      aria-label="About this page"
      style={{ maxWidth, margin: '0 auto', padding: '0 1.5rem 4rem', textAlign: 'left' }}
    >
      {sections.map(s => (
        <div
          key={s.heading}
          style={{
            background: 'var(--on-bg-025)',
            border: '1px solid var(--border)',
            borderRadius: 14,
            padding: '1.5rem 1.75rem',
            marginBottom: '1.25rem',
          }}
        >
          <h2 style={h2Style}>{s.heading}</h2>
          {s.body}
        </div>
      ))}
    </section>
  )
}
