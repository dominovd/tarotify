'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import DeckSwitcher from '@/components/DeckSwitcher'
import UserMenu from '@/components/UserMenu'
import LangSwitcher from '@/components/LangSwitcher'

type Locale = 'en' | 'es'

const LINKS: Record<Locale, { href: string; label: string }[]> = {
  en: [
    { href: '/free-reading', label: 'Free Reading' },
    { href: '/daily',        label: 'Card of the Day' },
    { href: '/yes-no',       label: 'Yes / No' },
    { href: '/cards',        label: 'Card Meanings' },
    { href: '/spreads',      label: 'Spreads' },
    { href: '/quiz',         label: 'Quiz' },
    { href: '/combination',  label: 'Combinations' },
  ],
  es: [
    { href: '/es/lectura-gratis',  label: 'Lectura Gratis' },
    { href: '/es/carta-del-dia',   label: 'Carta del Día' },
    { href: '/es/si-no',           label: 'Sí / No' },
    { href: '/es/cartas',          label: 'Cartas' },
    { href: '/es/tiradas',         label: 'Tiradas' },
    { href: '/es/combinaciones',   label: 'Combinaciones' },
    // Quiz omitted — no Spanish version yet.
  ],
}

export default function Nav() {
  const rawPath = usePathname()
  const path = rawPath ?? '/'
  const locale: Locale = path === '/es' || path.startsWith('/es/') ? 'es' : 'en'
  const links = LINKS[locale]
  const homeHref = locale === 'es' ? '/es' : '/'

  const [open, setOpen] = useState(false)

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [path])

  const isActive = (href: string) =>
    path === href || (href !== '/' && href !== '/es' && path.startsWith(href))

  return (
    <>
      <nav style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'0.85rem 1.25rem', borderBottom:'1px solid var(--border)',
        backdropFilter:'blur(8px)', position:'sticky', top:0, zIndex:100,
        background:'rgba(7,7,26,.92)'
      }}>
        {/* Logo */}
        <Link href={homeHref} style={{
          fontFamily:"'Cinzel',serif", fontSize:'1.15rem',
          color:'var(--gold)', letterSpacing:'.05em', flexShrink:0
        }}>
          ✦ TarotAxis
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

        {/* Language switcher */}
        <div className="nav-lang" style={{ marginLeft: '.5rem' }}>
          <LangSwitcher />
        </div>

        {/* User menu */}
        <div className="nav-user" style={{ marginLeft: '.5rem' }}>
          <UserMenu />
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className="nav-burger"
          onClick={() => setOpen(o => !o)}
          aria-label={locale === 'es' ? 'Abrir menú' : 'Toggle menu'}
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
          <div style={{ display:'flex', justifyContent:'flex-end', paddingBottom:'.4rem', borderBottom:'1px solid var(--border)' }}>
            <LangSwitcher />
          </div>
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
          .nav-lang { display: none !important; }
          .nav-burger { display: flex !important; }
        }
        @media (max-width: 480px) {
          .nav-deck { display: none !important; }
        }
      `}</style>
    </>
  )
}
