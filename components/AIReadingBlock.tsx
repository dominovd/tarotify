'use client'

import { useState, type ReactNode } from 'react'
import Link from 'next/link'
import { useUser } from '@/hooks/useUser'

// ════════════════════════════════════════════════════════════════════════════
// AIReadingBlock — shared "Get AI Reading" CTA + streaming render.
// ════════════════════════════════════════════════════════════════════════════
//
// Used from both /free-reading and /reading-analysis (EN + ES). The parent
// supplies the current cards and optional question/spread-name; this
// component owns the network call, streaming render, quota indicator, and
// sign-up wall.
//
// Behaviour:
//   - Idle      → primary CTA button (full width, gold border).
//   - Streaming → button shows "Reading…", body fills in token-by-token.
//   - Done      → full text rendered, "X readings left" caption below.
//   - 429       → inline card with sign-up CTA (anon) or daily-reset note (reg).
//   - Error     → small inline error with retry.
// ════════════════════════════════════════════════════════════════════════════

export type AIReadingCard = {
  slug: string
  reversed: boolean
  position?: string
}

interface Props {
  locale: 'en' | 'es'
  source: 'free-reading' | 'reading-analysis'
  cards: AIReadingCard[]
  question?: string
  spreadName?: string
  /** Disable the button — e.g. when no cards drawn yet. */
  disabled?: boolean
  /** Optional override of the next-URL used by the sign-up wall. */
  signinNext?: string
}

type Phase = 'idle' | 'streaming' | 'done' | 'limit' | 'error'

interface QuotaMeta {
  remaining: number
  scope: 'registered' | 'anonymous' | 'ip'
  resetsAt: string | null
}

interface LocaleCopy {
  intro: string
  button: string
  buttonStreaming: string
  buttonRetry: string
  quotaRegLeft: (n: number) => string
  quotaAnonLeft: (n: number) => string
  quotaCappedReg: string
  error: string
  limitAnonTitle: string
  limitAnonBody: string
  limitRegTitle: string
  limitRegBody: string
  limitIpTitle: string
  limitIpBody: string
  signUpCta: string
  signInCta: string
  alreadyHave: string
}

const COPY: Record<'en' | 'es', LocaleCopy> = {
  en: {
    intro: 'Bring the cards alive with a personalised AI interpretation. The reading streams below the cards in a few seconds.',
    button: '✦ Get AI Reading',
    buttonStreaming: 'Reading the cards…',
    buttonRetry: '✦ Get another AI reading',
    quotaRegLeft: (n: number) => `${n} AI reading${n === 1 ? '' : 's'} left today`,
    quotaAnonLeft: (n: number) => `${n} free AI reading${n === 1 ? '' : 's'} left today`,
    quotaCappedReg: 'Daily limit reached',
    error: 'Something went wrong — please try again.',
    limitAnonTitle: '✦ You have used today’s free AI reading',
    limitAnonBody: 'Create a free account for 5 AI readings every day — no credit card, sign in with Google.',
    limitRegTitle: '✦ You have used today’s 5 AI readings',
    limitRegBody: 'Your quota refreshes in about 24 hours. Premium with unlimited readings is coming soon.',
    limitIpTitle: 'Too many requests from your network',
    limitIpBody: 'Please try again in a while — this rate limit slows abuse.',
    signUpCta: 'Sign up free',
    signInCta: 'Sign in',
    alreadyHave: 'Already have an account?',
  },
  es: {
    intro: 'Da vida a las cartas con una interpretación personalizada por IA. La lectura aparece justo debajo de las cartas en unos segundos.',
    button: '✦ Lectura con IA',
    buttonStreaming: 'Leyendo las cartas…',
    buttonRetry: '✦ Otra lectura con IA',
    quotaRegLeft: (n: number) => `${n} lectura${n === 1 ? '' : 's'} con IA restante${n === 1 ? '' : 's'} hoy`,
    quotaAnonLeft: (n: number) => `${n} lectura gratuita${n === 1 ? '' : 's'} con IA restante${n === 1 ? '' : 's'} hoy`,
    quotaCappedReg: 'Has alcanzado el límite diario',
    error: 'Algo salió mal — inténtalo de nuevo.',
    limitAnonTitle: '✦ Has usado tu lectura gratuita de hoy',
    limitAnonBody: 'Crea una cuenta gratis y recibe 5 lecturas con IA cada día — sin tarjeta, entra con Google.',
    limitRegTitle: '✦ Has usado tus 5 lecturas con IA de hoy',
    limitRegBody: 'Tu cuota se renueva en unas 24 horas. La opción premium con lecturas ilimitadas llega pronto.',
    limitIpTitle: 'Demasiadas solicitudes desde tu red',
    limitIpBody: 'Por favor inténtalo más tarde — este límite frena el uso abusivo.',
    signUpCta: 'Crear cuenta gratis',
    signInCta: 'Iniciar sesión',
    alreadyHave: '¿Ya tienes cuenta?',
  },
}

export default function AIReadingBlock(props: Props) {
  const { locale, source, cards, question, spreadName, disabled, signinNext } = props
  const t = COPY[locale]
  const { user } = useUser()

  const [phase, setPhase] = useState<Phase>('idle')
  const [text, setText] = useState('')
  const [quota, setQuota] = useState<QuotaMeta | null>(null)
  const [limitScope, setLimitScope] = useState<'registered' | 'anonymous' | 'ip'>('anonymous')

  async function run() {
    if (phase === 'streaming' || cards.length === 0) return
    setPhase('streaming')
    setText('')

    let res: Response
    try {
      res = await fetch('/api/ai-reading', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ locale, source, cards, question, spreadName }),
      })
    } catch {
      setPhase('error')
      return
    }

    // Capture quota from headers — sent on both 200 and 429.
    const remaining = parseInt(res.headers.get('x-quota-remaining') ?? '', 10)
    const scope = (res.headers.get('x-quota-scope') as QuotaMeta['scope']) ?? 'anonymous'
    const resetsAt = res.headers.get('x-quota-resets-at')
    if (Number.isFinite(remaining)) {
      setQuota({ remaining, scope, resetsAt })
    }

    if (res.status === 429) {
      setLimitScope(scope)
      setPhase('limit')
      return
    }
    if (!res.ok || !res.body) {
      setPhase('error')
      return
    }

    const reader = res.body.getReader()
    const decoder = new TextDecoder()
    let buffer = ''
    try {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const { value, done } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        setText(buffer)
      }
      buffer += decoder.decode()
      setText(buffer)
      setPhase('done')
    } catch {
      setPhase('error')
    }
  }

  // ─── render ────────────────────────────────────────────────────────────
  return (
    <section
      id="ai-reading"
      style={{
        background: 'var(--on-bg-03)',
        border: '1px solid var(--border)',
        borderRadius: 14,
        padding: '1.5rem',
        marginTop: '1.5rem',
      }}
    >
      <div style={{ marginBottom: '1rem' }}>
        <div style={{
          fontFamily: "'Cinzel',serif",
          fontSize: '.68rem',
          letterSpacing: '.16em',
          color: 'var(--gold)',
          opacity: .8,
          textTransform: 'uppercase',
          marginBottom: '.55rem',
        }}>
          {locale === 'es' ? 'Lectura con IA' : 'AI Reading'}
        </div>
        {phase === 'idle' && (
          <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.6, margin: 0 }}>
            {t.intro}
          </p>
        )}
      </div>

      {/* Limit-reached state */}
      {phase === 'limit' && (
        <LimitWall
          scope={limitScope}
          locale={locale}
          user={user}
          signinNext={signinNext}
          copy={t}
        />
      )}

      {/* CTA button — hidden when in limit state */}
      {phase !== 'limit' && (
        <button
          type="button"
          onClick={run}
          disabled={disabled || phase === 'streaming'}
          style={{
            width: '100%',
            background: (disabled || phase === 'streaming') ? 'var(--on-bg-02)' : 'rgba(201,168,76,.15)',
            border: `1px solid ${(disabled || phase === 'streaming') ? 'var(--border)' : 'rgba(201,168,76,.65)'}`,
            borderRadius: 10,
            padding: '.95rem',
            color: (disabled || phase === 'streaming') ? 'var(--muted)' : 'var(--gold)',
            fontFamily: "'Cinzel',serif",
            fontSize: '.95rem',
            letterSpacing: '.08em',
            cursor: (disabled || phase === 'streaming') ? 'not-allowed' : 'pointer',
            transition: 'all .18s',
          }}
        >
          {phase === 'streaming'
            ? t.buttonStreaming
            : (phase === 'done' ? t.buttonRetry : t.button)}
        </button>
      )}

      {/* Streamed text — visible during and after streaming */}
      {(phase === 'streaming' || phase === 'done') && text && (
        <div style={{ marginTop: '1.5rem' }}>
          <RenderedMarkdown text={text} streaming={phase === 'streaming'} />
        </div>
      )}

      {/* Quota indicator below the button or result */}
      {quota && (phase === 'done' || phase === 'idle') && (
        <div style={{
          marginTop: '1rem',
          fontSize: '.78rem',
          color: 'var(--muted)',
          textAlign: 'center',
          letterSpacing: '.03em',
        }}>
          {quota.scope === 'registered'
            ? t.quotaRegLeft(quota.remaining)
            : t.quotaAnonLeft(quota.remaining)}
        </div>
      )}

      {phase === 'error' && (
        <div style={{
          marginTop: '1rem',
          padding: '.65rem .9rem',
          background: 'rgba(224,123,123,.08)',
          border: '1px solid rgba(224,123,123,.3)',
          borderRadius: 8,
          color: '#e07b7b',
          fontSize: '.85rem',
        }}>
          {t.error}
        </div>
      )}
    </section>
  )
}

// ─── sub-components ─────────────────────────────────────────────────────────

function LimitWall(props: {
  scope: 'registered' | 'anonymous' | 'ip'
  locale: 'en' | 'es'
  user: ReturnType<typeof useUser>['user']
  signinNext: string | undefined
  copy: LocaleCopy
}) {
  const { scope, locale, user, signinNext, copy: t } = props

  let title: string
  let body: string
  let showSignUp = false

  if (scope === 'ip') {
    title = t.limitIpTitle
    body = t.limitIpBody
  } else if (user) {
    title = t.limitRegTitle
    body = t.limitRegBody
  } else {
    title = t.limitAnonTitle
    body = t.limitAnonBody
    showSignUp = true
  }

  const next = signinNext ?? (locale === 'es' ? '/es/account' : '/account')
  const signUpUrl = locale === 'es'
    ? `/es/auth/signup?next=${encodeURIComponent(next)}`
    : `/auth/signup?next=${encodeURIComponent(next)}`
  const signInUrl = locale === 'es'
    ? `/es/auth/signin?next=${encodeURIComponent(next)}`
    : `/auth/signin?next=${encodeURIComponent(next)}`

  return (
    <div style={{
      background: 'rgba(201,168,76,.08)',
      border: '1px solid rgba(201,168,76,.35)',
      borderRadius: 12,
      padding: '1.25rem 1.4rem',
    }}>
      <div style={{
        fontFamily: "'Cinzel',serif",
        fontSize: '.95rem',
        color: 'var(--gold)',
        letterSpacing: '.04em',
        marginBottom: '.5rem',
      }}>
        {title}
      </div>
      <p style={{
        color: 'var(--text)',
        fontSize: '.92rem',
        lineHeight: 1.65,
        margin: 0,
        marginBottom: showSignUp ? '1rem' : 0,
      }}>
        {body}
      </p>
      {showSignUp && (
        <>
          <Link
            href={signUpUrl}
            style={{
              display: 'inline-block',
              background: 'rgba(201,168,76,.18)',
              border: '1px solid rgba(201,168,76,.7)',
              borderRadius: 10,
              padding: '.7rem 1.1rem',
              color: 'var(--gold)',
              fontFamily: "'Cinzel',serif",
              fontSize: '.88rem',
              letterSpacing: '.07em',
              textDecoration: 'none',
              marginRight: '.6rem',
            }}
          >
            {t.signUpCta}
          </Link>
          <span style={{ color: 'var(--muted)', fontSize: '.82rem', marginRight: '.4rem' }}>
            {t.alreadyHave}
          </span>
          <Link
            href={signInUrl}
            style={{
              color: 'var(--gold)',
              fontSize: '.85rem',
              borderBottom: '1px dashed rgba(201,168,76,.5)',
              textDecoration: 'none',
            }}
          >
            {t.signInCta}
          </Link>
        </>
      )}
    </div>
  )
}

/** Render a slimmed-down markdown dialect:
 *    ## Heading        →  <h3>
 *    **bold**          →  <strong> in gold
 *    - bullet          →  <li>
 *    blank line        →  paragraph break
 *  Forgiving of partial mid-stream chunks — the parser just renders what
 *  it has so far. */
function RenderedMarkdown({ text, streaming }: { text: string; streaming: boolean }) {
  const blocks: ReactNode[] = []
  const lines = text.split('\n')
  let listBuf: string[] = []

  const flushList = () => {
    if (listBuf.length === 0) return
    blocks.push(
      <ul key={`l-${blocks.length}`} style={{
        margin: '0 0 1rem',
        paddingLeft: '1.2rem',
        color: 'var(--text)',
      }}>
        {listBuf.map((item, i) => (
          <li key={i} style={{ marginBottom: '.4rem', lineHeight: 1.6, fontSize: '.95rem' }}>
            {renderInline(item)}
          </li>
        ))}
      </ul>,
    )
    listBuf = []
  }

  for (const line of lines) {
    if (line.startsWith('## ')) {
      flushList()
      blocks.push(
        <h3 key={`h-${blocks.length}`} style={{
          fontFamily: "'Cinzel',serif",
          color: 'var(--gold)',
          fontSize: '1.05rem',
          letterSpacing: '.04em',
          marginTop: blocks.length === 0 ? 0 : '1.6rem',
          marginBottom: '.7rem',
        }}>
          {line.slice(3)}
        </h3>,
      )
    } else if (line.trimStart().startsWith('- ')) {
      listBuf.push(line.trimStart().slice(2))
    } else if (line.trim() === '') {
      flushList()
    } else {
      flushList()
      blocks.push(
        <p key={`p-${blocks.length}`} style={{
          color: 'var(--text)',
          fontSize: '.95rem',
          lineHeight: 1.7,
          marginBottom: '.85rem',
        }}>
          {renderInline(line)}
        </p>,
      )
    }
  }
  flushList()

  return (
    <div style={{ position: 'relative' }}>
      {blocks}
      {streaming && (
        <span
          aria-hidden
          style={{
            display: 'inline-block',
            width: 8, height: 14,
            verticalAlign: 'text-bottom',
            background: 'var(--gold)',
            opacity: .8,
            animation: 'ai-blink 1s steps(2, end) infinite',
            marginLeft: 2,
          }}
        />
      )}
      <style>{`
        @keyframes ai-blink { 50% { opacity: 0; } }
      `}</style>
    </div>
  )
}

function renderInline(line: string): ReactNode[] {
  const out: ReactNode[] = []
  const re = /\*\*(.+?)\*\*/g
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(line)) !== null) {
    if (m.index > last) out.push(line.slice(last, m.index))
    out.push(
      <strong key={`b-${m.index}`} style={{ color: 'var(--gold)', fontWeight: 600 }}>
        {m[1]}
      </strong>,
    )
    last = re.lastIndex
  }
  if (last < line.length) out.push(line.slice(last))
  return out
}
