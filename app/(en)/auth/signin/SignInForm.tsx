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
  const [googleLoading, setGoogleLoading] = useState(false)
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

  async function onGoogle() {
    if (googleLoading) return
    setGoogleLoading(true)
    setError(null)
    const supabase = createClient()
    const redirectTo = `${window.location.origin}/auth/callback${next ? `?next=${encodeURIComponent(next)}` : ''}`
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo },
    })
    if (error) {
      setGoogleLoading(false)
      setError(error.message)
    }
    // Otherwise Supabase redirects to Google — no further client work needed.
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
      {/* Google OAuth — primary CTA */}
      <button
        type="button"
        onClick={onGoogle}
        disabled={googleLoading}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '.6rem',
          background: googleLoading ? 'var(--on-bg-02)' : 'var(--on-bg-04)',
          border: '1px solid var(--border)',
          borderRadius: 10,
          padding: '.85rem',
          color: 'var(--text)',
          fontFamily: "'Cinzel',serif",
          fontSize: '.88rem',
          letterSpacing: '.06em',
          cursor: googleLoading ? 'wait' : 'pointer',
          transition: 'all .18s',
          marginBottom: '1rem',
        }}
      >
        <GoogleGlyph />
        {googleLoading ? 'Redirecting…' : (mode === 'signup' ? 'Sign up with Google' : 'Continue with Google')}
      </button>

      {/* Divider */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '.75rem',
        marginBottom: '1rem',
      }}>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        <div style={{
          fontFamily: "'Cinzel',serif",
          fontSize: '.62rem',
          letterSpacing: '.18em',
          color: 'var(--muted)',
          opacity: .7,
          textTransform: 'uppercase',
        }}>
          or
        </div>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
      </div>

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
          background: 'var(--on-bg-03)',
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
          background: (sending || !email) ? 'var(--on-bg-02)' : 'rgba(201,168,76,.13)',
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

/** Multi-coloured Google "G" glyph — official asset proportions, inlined as
 *  SVG so we don't ship a PNG just for the sign-in button. */
function GoogleGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z"/>
      <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z"/>
      <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z"/>
      <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z"/>
    </svg>
  )
}
