'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'

interface Props {
  source: string
  headline?: string
  copy?: string
  cta?: string
  compact?: boolean
}

// Locale-aware string bundles. Detected from the URL path: anything under
// `/es` renders Spanish, everything else stays English. Callers can still
// override individual strings via props.
type Locale = 'en' | 'es'

const COPY: Record<Locale, {
  headline: string
  copy: string
  cta: string
  placeholder: string
  emailLabel: string
  success: string
  errGeneric: string
  errNetwork: string
  legal: string
}> = {
  en: {
    headline: 'Daily tarot in your inbox',
    copy: 'One thoughtful card each morning, free. Unsubscribe anytime.',
    cta: 'Subscribe',
    placeholder: 'you@example.com',
    emailLabel: 'Email address',
    success: '✓ Welcome — check your inbox for the first card.',
    errGeneric: 'Could not subscribe. Please try again.',
    errNetwork: 'Network error. Please try again.',
    legal: 'No spam. No data sharing. Unsubscribe in one click.',
  },
  es: {
    headline: 'Tarot diario en tu bandeja',
    copy: 'Una carta cuidadosa cada mañana, gratis. Cancela la suscripción cuando quieras.',
    cta: 'Suscribirse',
    placeholder: 'tu@ejemplo.com',
    emailLabel: 'Correo electrónico',
    success: '✓ Bienvenida — revisa tu bandeja para la primera carta.',
    errGeneric: 'No se pudo suscribir. Inténtalo de nuevo.',
    errNetwork: 'Error de red. Inténtalo de nuevo.',
    legal: 'Sin spam. Sin compartir datos. Cancela con un clic.',
  },
}

function useLocale(): Locale {
  const path = usePathname() ?? '/'
  return path === '/es' || path.startsWith('/es/') ? 'es' : 'en'
}

export default function EmailCapture({
  source,
  headline,
  copy,
  cta,
  compact = false,
}: Props) {
  const locale = useLocale()
  const t = COPY[locale]
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errMsg, setErrMsg] = useState('')

  // Resolve copy from props (override) or locale defaults.
  const finalHeadline = headline ?? t.headline
  const finalCopy = copy ?? t.copy
  const finalCta = cta ?? t.cta

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (state === 'submitting') return
    setState('submitting')
    setErrMsg('')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      })
      const data = await res.json().catch(() => ({} as { error?: string }))
      if (!res.ok) {
        setErrMsg(data.error || t.errGeneric)
        setState('error')
        return
      }
      setState('success')
    } catch {
      setErrMsg(t.errNetwork)
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <section style={{
        background: 'rgba(95,193,138,.06)',
        border: '1px solid rgba(95,193,138,.4)',
        borderRadius: 14,
        padding: compact ? '1rem 1.25rem' : '1.5rem 1.75rem',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'Cinzel',serif",
          fontSize: compact ? '0.9rem' : '1rem',
          color: '#5fc18a',
          letterSpacing: '0.04em',
          margin: 0,
        }}>
          {t.success}
        </p>
      </section>
    )
  }

  return (
    <section style={{
      background: 'rgba(255,255,255,.025)',
      border: '1px solid var(--border)',
      borderRadius: 14,
      padding: compact ? '1.1rem 1.25rem' : '1.75rem',
      textAlign: compact ? 'left' : 'center',
    }}>
      {!compact && (
        <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem', opacity: 0.8 }}>✉</div>
      )}
      <h2 style={{
        fontFamily: "'Cinzel',serif",
        fontSize: compact ? '0.95rem' : '1.15rem',
        color: 'var(--gold)',
        letterSpacing: '0.04em',
        marginBottom: '0.5rem',
        marginTop: 0,
      }}>
        {finalHeadline}
      </h2>
      <p style={{
        color: 'var(--muted)',
        fontSize: compact ? '0.82rem' : '0.9rem',
        lineHeight: 1.6,
        maxWidth: compact ? undefined : 460,
        margin: compact ? '0 0 0.85rem' : '0 auto 1.1rem',
      }}>
        {finalCopy}
      </p>

      <form
        onSubmit={submit}
        style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
          justifyContent: compact ? 'flex-start' : 'center',
        }}
      >
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder={t.placeholder}
          aria-label={t.emailLabel}
          disabled={state === 'submitting'}
          style={{
            flex: 1,
            minWidth: 180,
            maxWidth: 320,
            fontFamily: "'Cinzel',serif",
            fontSize: '0.85rem',
            background: 'rgba(255,255,255,.04)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            color: 'var(--text)',
            padding: '0.65rem 0.85rem',
            letterSpacing: '0.03em',
            opacity: state === 'submitting' ? 0.6 : 1,
          }}
        />
        <button
          type="submit"
          disabled={state === 'submitting'}
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '0.85rem',
            color: 'var(--gold)',
            background: 'transparent',
            border: '1px solid var(--gold)',
            borderRadius: 8,
            padding: '0.65rem 1.4rem',
            cursor: state === 'submitting' ? 'wait' : 'pointer',
            letterSpacing: '0.06em',
            opacity: state === 'submitting' ? 0.6 : 1,
            transition: 'opacity .2s',
          }}
        >
          {state === 'submitting' ? '…' : finalCta}
        </button>
      </form>

      {state === 'error' && errMsg && (
        <p style={{
          fontFamily: "'Cinzel',serif",
          fontSize: '0.78rem',
          color: '#e07b7b',
          marginTop: '0.85rem',
          letterSpacing: '0.04em',
          textAlign: compact ? 'left' : 'center',
        }}>
          {errMsg}
        </p>
      )}

      <p style={{
        fontFamily: "'Cinzel',serif",
        fontSize: '0.66rem',
        color: 'var(--muted)',
        marginTop: '0.85rem',
        letterSpacing: '0.06em',
        opacity: 0.75,
        textAlign: compact ? 'left' : 'center',
      }}>
        {t.legal}
      </p>
    </section>
  )
}
