'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useUser } from '@/hooks/useUser'

export default function UserMenu() {
  const { user, loading } = useUser()
  const pathname = usePathname()
  const isEs = pathname?.startsWith('/es') ?? false

  if (loading) {
    return (
      <div style={{ width: 36, height: 28 }} aria-hidden="true" />
    )
  }

  if (!user) {
    return (
      <Link
        href={isEs ? '/es/auth/signin' : '/auth/signin'}
        style={{
          fontSize: '.78rem',
          color: 'var(--gold)',
          fontFamily: "'Cinzel',serif",
          letterSpacing: '.06em',
          padding: '.35rem .85rem',
          border: '1px solid rgba(201,168,76,.35)',
          borderRadius: 18,
          whiteSpace: 'nowrap',
        }}
      >
        {isEs ? 'Entrar' : 'Sign in'}
      </Link>
    )
  }

  // Signed in — avatar link to /account.
  // Upgrade pill intentionally hidden: paid tier deferred until payment provider
  // landscape resolves (tarot+UA constraint, see llm_discoverability_strategy memory).
  // Re-enable when subscription provider is live.
  const initial = (user.email || '?').trim().charAt(0).toUpperCase()
  const accountHref = isEs ? '/es/account' : '/account'

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
      <Link
        href={accountHref}
        title={user.email ?? 'Account'}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: 'rgba(201,168,76,.12)',
          border: '1px solid rgba(201,168,76,.45)',
          color: 'var(--gold)',
          fontFamily: "'Cinzel',serif",
          fontSize: '.78rem',
          letterSpacing: '.04em',
          textDecoration: 'none',
          flexShrink: 0,
        }}
      >
        {initial}
      </Link>
    </div>
  )
}
