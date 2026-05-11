'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import DeckSwitcher from '@/components/DeckSwitcher'

const links = [
  { href: '/free-reading', label: 'Free Reading' },
  { href: '/daily', label: 'Card of the Day' },
  { href: '/yes-no', label: 'Yes / No' },
  { href: '/cards', label: 'Card Meanings' },
  { href: '/spreads', label: 'Spreads' },
  { href: '/combination', label: 'Combinations' },
]

export default function Nav() {
  const path = usePathname()
  const [open, setOpen] = useState(false)

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [path])

  const isActive = (href: string) =>
    path === href || (href !== '/' && path.startsWith(href))

  return (
    <>
      <nav style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'0.85rem 1.25rem', borderBottom:'1px solid var(--border)',
        backdropFilter:'blur(8px)', position:'sticky', top:0, zIndex:100,
        background:'rgba(7,7,26,.92)'
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontFamily:"'Cinzel',serif", fontSize:'1.15rem',
          color:'var(--gold)', letterSpacing:'.05em', flexShrink:0
        }}>
          ✦ Tarotify
        </Link>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display:'flex', gap:'1.25rem' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              color: isActive(l.href) ? 'var(--gold)' : 'var(--muted)',
              fontSize:'.82rem', letterSpacing:'.05em',
              transition:'color .2s', whiteSpace:'nowrap'
            }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Deck switcher */}
        <div className="nav-deck">
          <DeckSwitcher />
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className="nav-burger"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          style={{
            background:'none', border:'none', cursor:'pointer',
            padding:'6px', color:'var(--gold)', display:'none',
            flexDirection:'column', gap:'5px', flexShrink:0
          }}
        >
          <span style={{
            display:'block', width:'22px', height:'2px',
            background:'currentColor',
            transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
            transition:'transform .25s'
          }}/>
          <span style={{
            display:'block', width:'22px', height:'2px',
            background:'currentColor',
            opacity: open ? 0 : 1,
            transition:'opacity .25s'
          }}/>
          <span style={{
            display:'block', width:'22px', height:'2px',
            background:'currentColor',
            transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
            transition:'transform .25s'
          }}/>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="nav-mobile-menu" style={{
          position:'fixed', top:'53px', left:0, right:0, zIndex:99,
          background:'rgba(7,7,26,.97)', borderBottom:'1px solid var(--border)',
          padding:'1rem 1.5rem', display:'flex', flexDirection:'column', gap:'1.1rem'
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              color: isActive(l.href) ? 'var(--gold)' : 'var(--text)',
              fontSize:'1rem', letterSpacing:'.05em',
              fontFamily:"'Cinzel',serif",
              borderBottom:'1px solid var(--border)', paddingBottom:'0.9rem'
            }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
        @media (max-width: 480px) {
          .nav-deck { display: none !important; }
        }
      `}</style>
    </>
  )
}
