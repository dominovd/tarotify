'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Reading' },
  { href: '/yes-no', label: 'Yes / No' },
  { href: '/cards', label: 'Card Meanings' },
  { href: '/combination', label: 'Combinations' },
]

export default function Nav() {
  const path = usePathname()
  return (
    <nav style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'1rem 2rem', borderBottom:'1px solid var(--border)',
      backdropFilter:'blur(8px)', position:'sticky', top:0, zIndex:100,
      background:'rgba(7,7,26,.85)'
    }}>
      <Link href="/" style={{ fontFamily:"'Cinzel',serif", fontSize:'1.2rem', color:'var(--gold)', letterSpacing:'.05em' }}>
        ✦ Tarotify
      </Link>
      <div style={{ display:'flex', gap:'1.25rem', flexWrap:'wrap' }}>
        {links.map(l => (
          <Link key={l.href} href={l.href} style={{
            color: path === l.href || (l.href !== '/' && path.startsWith(l.href)) ? 'var(--gold)' : 'var(--muted)',
            fontSize:'.82rem', letterSpacing:'.05em', transition:'color .2s',
            whiteSpace:'nowrap'
          }}>
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
