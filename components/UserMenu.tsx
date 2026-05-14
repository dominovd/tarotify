'use client'

import Link from 'next/link'
import { useUser } from '@/hooks/useUser'

export default function UserMenu() {
  const { user, loading } = useUser()

  if (loading) {
    return (
      <div style={{ width: 36, height: 28 }} aria-hidden="true" />
    )
  }

  if (!user) {
    return (
      <Link
        href="/auth/signin"
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
        Sign in
      </Link>
    )
  }

  // Signed in — show a compact avatar/email link to /account.
  const initial = (user.email || '?').trim().charAt(0).toUpperCase()
  return (
    <Link
      href="/account"
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
  )
}
