'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

interface Props {
  next?: string
  initialError?: string
  initialSent?: boolean
  mode?: 'signin' | 'signup'
}

export default function SignInForm({ next, initialError, initialSent, mode = 'signin' }: Props) {
  const [email, setEmail] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(initialSent ?? false)
  const [error, setError] = useState<string | null>(initialError ?? null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || sending) return
    setSending(true)
    setError(null)

    const supabase = createClient()
    const redirectTo = `${window.location.origin}/auth/callback${next ? `?next=${encodeURIComponent(next)}` : ''}`

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectTo,
        shouldCreateUser: true, // single form handles both signin and signup
      },
    })

    setSending(false)
    if (error) {
      setError(error.message)
    } else {
      setSent(true)
    }
  }

  if (sent) {
    return (
      <div style={{
        background: 'rgba(201,168,76,.08)',
        border: '1px solid rgba(201,168,76,.35)',
        borderRadius: 12,
        padding: '1.5rem 1.75rem',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '1.5rem', marginBottom: '.5rem' }}>✦</div>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.95rem', marginBottom: '.65rem', letterSpacing: '.04em' }}>
          Check your inbox
        </div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>
          We&rsquo;ve sent a sign-in link to <strong style={{ color: 'var(--text)' }}>{email || 'your email'}</strong>.
          Click it on this device to finish signing in. The link expires in 1 hour.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit}>
      <label style={{ display: 'block', fontSize: '.66rem', letterSpacing: '.16em', color: 'var(--muted)', fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.55rem', opacity: .65 }}>
        Email
      </label>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        autoComplete="email"
        placeholder="you@example.com"
        style={{
          width: '100%',
          background: 'rgba(255,255,255,.03)',
          border: '1px solid var(--border)',
          borderRadius: 10,
          padding: '.85rem 1rem',
          color: 'var(--text)',
          fontSize: '.95rem',
          outline: 'none',
          boxSizing: 'border-box',
          fontFamily: 'inherit',
          marginBottom: '1rem',
        }}
      />

      {error && (
        <div style={{
          padding: '.6rem .85rem',
          background: 'rgba(224,123,123,.08)',
          border: '1px solid rgba(224,123,123,.3)',
          borderRadius: 8,
          color: '#e07b7b',
          fontSize: '.82rem',
          marginBottom: '1rem',
        }}>
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={sending || !email}
        style={{
          width: '100%',
          background: (sending || !email) ? 'rgba(255,255,255,.02)' : 'rgba(201,168,76,.13)',
          border: `1px solid ${(sending || !email) ? 'var(--border)' : 'rgba(201,168,76,.65)'}`,
          borderRadius: 10,
          padding: '.9rem',
          color: (sending || !email) ? 'var(--muted)' : 'var(--gold)',
          fontFamily: "'Cinzel',serif",
          fontSize: '.92rem',
          letterSpacing: '.08em',
          cursor: (sending || !email) ? 'not-allowed' : 'pointer',
          transition: 'all .18s',
        }}
      >
        {sending ? 'Sending…' : mode === 'signup' ? 'Create account' : 'Send sign-in link'}
      </button>
    </form>
  )
}
