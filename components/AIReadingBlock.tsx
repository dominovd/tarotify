'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useUser } from '@/hooks/useUser'
import RenderedReading from '@/components/RenderedReading'

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

type Phase = 'idle' | 'streaming' | 'done' | 'limit' | 'unavailable' | 'error'

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
  // Daily budget circuit-breaker copy
  unavailableTitle: string
  unavailableBody: string
  // Action row labels (Copy / Save / Email)
  actionCopy: string
  actionCopyDone: string
  actionSave: string
  actionSaveDone: string
  actionEmail: string
  actionEmailSending: string
  actionEmailDone: string
  actionEmailCooldown: string
  actionEmailError: string
  actionShare: string
  shareModalTitle: string
  shareModalSubtitle: string
  shareDownload: string
  shareNative: string
  shareCopyLink: string
  shareCopyLinkDone: string
  shareClose: string
  lockSavePrompt: string
  lockEmailPrompt: string
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
    unavailableTitle: '✦ AI is taking a rest',
    unavailableBody: 'The AI reader is on a short break to stay within today\'s capacity. Please come back in a little while — your cards are not going anywhere.',
    actionCopy: 'Copy',
    actionCopyDone: 'Copied!',
    actionSave: 'Save',
    actionSaveDone: 'Saved!',
    actionEmail: 'Email it to me',
    actionEmailSending: 'Sending…',
    actionEmailDone: 'Sent — check your inbox',
    actionEmailCooldown: 'You sent a reading recently. Try again in ~30 minutes.',
    actionEmailError: 'Could not send the email. Please try again.',
    actionShare: 'Share',
    shareModalTitle: 'Share this reading',
    shareModalSubtitle: 'Download the card image or share it directly. The image carries the spread and the one-line headline — perfect for screenshots and stories.',
    shareDownload: 'Download image',
    shareNative: 'Share…',
    shareCopyLink: 'Copy reading page link',
    shareCopyLinkDone: 'Link copied!',
    shareClose: 'Close',
    lockSavePrompt: 'Sign up free to save AI readings to your journal.',
    lockEmailPrompt: 'Sign up free to receive AI readings in your inbox.',
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
    unavailableTitle: '✦ La IA está descansando',
    unavailableBody: 'El lector con IA está tomando un breve descanso para no sobrepasar la capacidad de hoy. Vuelve dentro de un rato — tus cartas no se van a ningún lado.',
    actionCopy: 'Copiar',
    actionCopyDone: '¡Copiado!',
    actionSave: 'Guardar',
    actionSaveDone: '¡Guardado!',
    actionEmail: 'Enviar a mi correo',
    actionEmailSending: 'Enviando…',
    actionEmailDone: 'Enviado — revisa tu bandeja',
    actionEmailCooldown: 'Enviaste una lectura hace poco. Vuelve a intentarlo en ~30 minutos.',
    actionEmailError: 'No se pudo enviar el correo. Inténtalo de nuevo.',
    actionShare: 'Compartir',
    shareModalTitle: 'Comparte esta lectura',
    shareModalSubtitle: 'Descarga la imagen de las cartas o compártela directamente. Lleva la tirada y la frase titular — ideal para historias y capturas.',
    shareDownload: 'Descargar imagen',
    shareNative: 'Compartir…',
    shareCopyLink: 'Copiar enlace a la página',
    shareCopyLinkDone: '¡Enlace copiado!',
    shareClose: 'Cerrar',
    lockSavePrompt: 'Crea una cuenta gratis para guardar tus lecturas con IA en tu diario.',
    lockEmailPrompt: 'Crea una cuenta gratis para recibir lecturas con IA en tu correo.',
  },
}

type EmailState = 'idle' | 'sending' | 'sent' | 'cooldown' | 'error'

// ─── share helpers ─────────────────────────────────────────────────────────

/** Pull the headline line out of the streamed response. The system prompt
 *  asks the model for a `## Headline` (or `## Titular`) section whose body
 *  is one short sentence. We take the first non-empty line after that
 *  heading and trim it down to a reasonable URL/OG length. */
function extractHeadline(text: string): string {
  const re = /##\s*(Headline|Titular)\s*\n+([^\n]+)/i
  const m = text.match(re)
  if (m && m[2]) return m[2].replace(/^\*+|\*+$/g, '').trim().slice(0, 140)
  // Fallback: first non-empty paragraph trimmed.
  const firstPara = text.split(/\n\s*\n/).map(p => p.trim()).find(p => p.length > 0)
  if (!firstPara) return ''
  return firstPara.replace(/^#+\s*/, '').replace(/^\*+|\*+$/g, '').trim().slice(0, 140)
}

/** Build a fully-qualified /og?type=reading URL for share-card generation. */
function buildShareImageUrl(args: {
  cards: AIReadingCard[]
  headline: string
  locale: 'en' | 'es'
  origin: string
}): string {
  const slugs = args.cards.slice(0, 3).map(c => c.slug).join(',')
  const rev = args.cards.slice(0, 3).map(c => (c.reversed ? '1' : '0')).join(',')
  const params = new URLSearchParams({
    type: 'reading',
    cards: slugs,
    rev,
    locale: args.locale,
  })
  if (args.headline) params.set('headline', args.headline)
  return `${args.origin}/og?${params.toString()}`
}

export default function AIReadingBlock(props: Props) {
  const { locale, source, cards, question, spreadName, disabled, signinNext } = props
  const t = COPY[locale]
  const { user } = useUser()

  const [phase, setPhase] = useState<Phase>('idle')
  const [text, setText] = useState('')
  const [quota, setQuota] = useState<QuotaMeta | null>(null)
  const [limitScope, setLimitScope] = useState<'registered' | 'anonymous' | 'ip'>('anonymous')

  // Action row state
  const [copied, setCopied] = useState(false)
  const [saved, setSaved] = useState(false)
  const [emailState, setEmailState] = useState<EmailState>('idle')
  const [lockedAction, setLockedAction] = useState<null | 'save' | 'email'>(null)

  // Share modal state
  const [shareOpen, setShareOpen] = useState(false)
  const [shareLinkCopied, setShareLinkCopied] = useState(false)

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
    if (res.status === 503) {
      // Distinguish budget-exceeded (circuit breaker) from generic
      // unavailability (missing env, network) by reading the JSON error.
      try {
        const body = await res.clone().json() as { error?: string }
        if (body?.error === 'budget-exceeded') {
          setPhase('unavailable')
          return
        }
      } catch { /* fall through to generic error */ }
      setPhase('error')
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
      // Reset post-action state so the user starts clean on each new reading.
      setCopied(false); setSaved(false); setEmailState('idle'); setLockedAction(null)
    } catch {
      setPhase('error')
    }
  }

  // ─── action handlers ───────────────────────────────────────────────────

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      // Fallback: select-all via execCommand is messy and rarely needed
      // on modern browsers. We just no-op silently.
    }
  }

  async function onSave() {
    if (!user) { setLockedAction('save'); return }

    // Logged-in: write to Supabase via /api/saved-readings (cloud sync).
    // On network or server failure, fall back to localStorage so the user
    // doesn't lose the save. /journal merges both sources.
    const cardsJson = cards.map(c => ({
      slug: c.slug,
      reversed: c.reversed,
      position: c.position ?? null,
    }))
    const spreadId = spreadName
      ? `ai-${spreadName.toLowerCase().replace(/\s+/g, '-').slice(0, 60)}`
      : 'ai-reading'

    try {
      const res = await fetch('/api/saved-readings', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          question: question ?? null,
          spreadId,
          cards: cardsJson,
          interpretation: text,
        }),
      })
      if (!res.ok) throw new Error('cloud save failed')
      setSaved(true)
      setTimeout(() => setSaved(false), 2500)
      return
    } catch {
      // Fallback to localStorage so the save isn't lost.
      try {
        const raw = localStorage.getItem('tarotify_journal') ?? '[]'
        const entries: unknown = JSON.parse(raw)
        const list = Array.isArray(entries) ? entries : []
        list.unshift({
          date: new Date().toLocaleDateString(),
          question: question ?? '',
          cards: cards.map(c => `${c.position ? c.position + ': ' : ''}${c.slug}${c.reversed ? ' (reversed)' : ''}`),
          reading: text,
        })
        localStorage.setItem('tarotify_journal', JSON.stringify(list.slice(0, 50)))
        setSaved(true)
        setTimeout(() => setSaved(false), 2500)
      } catch { /* private mode etc. — silent */ }
    }
  }

  async function onEmail() {
    if (!user) { setLockedAction('email'); return }
    if (emailState === 'sending') return
    setEmailState('sending')
    try {
      const res = await fetch('/api/ai-reading/email', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ cards, question, spreadName, text, locale }),
      })
      if (res.status === 429) { setEmailState('cooldown'); return }
      if (!res.ok) { setEmailState('error'); return }
      setEmailState('sent')
      setTimeout(() => setEmailState('idle'), 5000)
    } catch {
      setEmailState('error')
    }
  }

  // ─── share helpers ───────────────────────────────────────────────────────

  function onShareOpen() {
    setShareLinkCopied(false)
    setShareOpen(true)
  }

  function onShareClose() {
    setShareOpen(false)
  }

  function landingUrl(): string {
    if (typeof window === 'undefined') return ''
    // Send people to the same surface they just came from so they have
    // somewhere meaningful to land — fall back to the homepage.
    return window.location.origin + window.location.pathname
  }

  function shareImageUrl(): string {
    if (typeof window === 'undefined') return ''
    return buildShareImageUrl({
      cards,
      headline: extractHeadline(text),
      locale,
      origin: window.location.origin,
    })
  }

  async function onShareDownload() {
    try {
      const url = shareImageUrl()
      const res = await fetch(url)
      const blob = await res.blob()
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.download = `tarotaxis-reading-${Date.now()}.png`
      document.body.appendChild(a)
      a.click()
      a.remove()
      // Revoke the object URL after the click handler has run.
      setTimeout(() => URL.revokeObjectURL(a.href), 5000)
    } catch {
      // Last-resort fallback: open the image in a new tab.
      const url = shareImageUrl()
      if (url) window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  async function onShareNative() {
    const url = shareImageUrl()
    const landing = landingUrl()
    const title = locale === 'es' ? 'Mi lectura de tarot en TarotAxis' : 'My tarot reading on TarotAxis'
    // Try Web Share API L2 with a file first (mobile-friendly).
    try {
      const res = await fetch(url)
      const blob = await res.blob()
      const file = new File([blob], 'tarotaxis-reading.png', { type: 'image/png' })
      const navAny = navigator as unknown as {
        canShare?: (data: { files?: File[] }) => boolean
        share?: (data: { files?: File[]; title?: string; text?: string; url?: string }) => Promise<void>
      }
      if (navAny.canShare && navAny.share && navAny.canShare({ files: [file] })) {
        await navAny.share({ files: [file], title, url: landing })
        return
      }
      if (navAny.share) {
        await navAny.share({ title, url: landing })
        return
      }
    } catch {
      // Either the user cancelled or the browser refused — fall through.
    }
    // Desktop fallback: copy the landing URL so the user can paste anywhere.
    try {
      await navigator.clipboard.writeText(landing)
      setShareLinkCopied(true)
      setTimeout(() => setShareLinkCopied(false), 2500)
    } catch { /* silent */ }
  }

  async function onShareCopyLink() {
    try {
      await navigator.clipboard.writeText(landingUrl())
      setShareLinkCopied(true)
      setTimeout(() => setShareLinkCopied(false), 2500)
    } catch { /* silent */ }
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

      {/* Daily budget circuit-breaker state */}
      {phase === 'unavailable' && (
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
            {t.unavailableTitle}
          </div>
          <p style={{
            color: 'var(--text)',
            fontSize: '.92rem',
            lineHeight: 1.65,
            margin: 0,
          }}>
            {t.unavailableBody}
          </p>
        </div>
      )}

      {/* CTA button — hidden when in limit or unavailable state */}
      {phase !== 'limit' && phase !== 'unavailable' && (
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
          <RenderedReading text={text} streaming={phase === 'streaming'} />
        </div>
      )}

      {/* Action row — only when reading is complete */}
      {phase === 'done' && text && (
        <ActionRow
          locale={locale}
          copy={t}
          isUser={Boolean(user)}
          copied={copied}
          saved={saved}
          emailState={emailState}
          onCopy={onCopy}
          onSave={onSave}
          onEmail={onEmail}
          shareOpen={shareOpen}
          shareLinkCopied={shareLinkCopied}
          onShareOpen={onShareOpen}
          onShareClose={onShareClose}
          onShareDownload={onShareDownload}
          onShareNative={onShareNative}
          onShareCopyLink={onShareCopyLink}
          shareImageUrl={shareImageUrl}
          lockedAction={lockedAction}
          onCloseLocked={() => setLockedAction(null)}
          signinNext={signinNext}
        />
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

/** Bottom action row — three icon buttons + inline lock prompt. */
function ActionRow(props: {
  locale: 'en' | 'es'
  copy: LocaleCopy
  isUser: boolean
  copied: boolean
  saved: boolean
  emailState: EmailState
  onCopy: () => void
  onSave: () => void
  onEmail: () => void
  // Share-related — no auth required, so no lock UI here.
  shareOpen: boolean
  shareLinkCopied: boolean
  onShareOpen: () => void
  onShareClose: () => void
  onShareDownload: () => void
  onShareNative: () => void
  onShareCopyLink: () => void
  shareImageUrl: () => string
  lockedAction: null | 'save' | 'email'
  onCloseLocked: () => void
  signinNext: string | undefined
}) {
  const { locale, copy: t, isUser, copied, saved, emailState,
          onCopy, onSave, onEmail, lockedAction, onCloseLocked, signinNext,
          shareOpen, shareLinkCopied, onShareOpen, onShareClose,
          onShareDownload, onShareNative, onShareCopyLink, shareImageUrl } = props

  const baseBtn: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '.4rem',
    padding: '.5rem .9rem',
    borderRadius: 9,
    background: 'var(--on-bg-04)',
    border: '1px solid var(--border)',
    color: 'var(--muted)',
    fontFamily: "'Cinzel',serif",
    fontSize: '.78rem',
    letterSpacing: '.05em',
    cursor: 'pointer',
    transition: 'border-color .15s, color .15s, background .15s',
  }
  const activeBtn: React.CSSProperties = {
    ...baseBtn,
    background: 'rgba(201,168,76,.12)',
    border: '1px solid rgba(201,168,76,.55)',
    color: 'var(--gold)',
  }

  const emailLabel =
      emailState === 'sending'  ? t.actionEmailSending
    : emailState === 'sent'     ? t.actionEmailDone
    : emailState === 'cooldown' ? t.actionEmailCooldown
    : emailState === 'error'    ? t.actionEmailError
    :                              t.actionEmail
  const emailActive = emailState === 'sent'

  const next = signinNext ?? (locale === 'es' ? '/es/account' : '/account')
  const signUpUrl = locale === 'es'
    ? `/es/auth/signup?next=${encodeURIComponent(next)}`
    : `/auth/signup?next=${encodeURIComponent(next)}`
  const signInUrl = locale === 'es'
    ? `/es/auth/signin?next=${encodeURIComponent(next)}`
    : `/auth/signin?next=${encodeURIComponent(next)}`

  const lockPrompt = lockedAction === 'save' ? t.lockSavePrompt
                   : lockedAction === 'email' ? t.lockEmailPrompt
                   : null

  return (
    <div style={{ marginTop: '1.25rem' }}>
      <div style={{
        display: 'flex',
        gap: '.5rem',
        flexWrap: 'wrap',
        paddingTop: '1rem',
        borderTop: '1px solid var(--border)',
      }}>
        {/* Copy */}
        <button type="button" onClick={onCopy} style={copied ? activeBtn : baseBtn} aria-label={t.actionCopy}>
          <IconCopy />
          <span>{copied ? t.actionCopyDone : t.actionCopy}</span>
        </button>

        {/* Save */}
        <button type="button" onClick={onSave} style={saved ? activeBtn : baseBtn} aria-label={t.actionSave}>
          {isUser ? <IconSave /> : <IconLock />}
          <span>{saved ? t.actionSaveDone : t.actionSave}</span>
        </button>

        {/* Email */}
        <button
          type="button"
          onClick={onEmail}
          style={emailActive ? activeBtn : baseBtn}
          aria-label={t.actionEmail}
          disabled={emailState === 'sending'}
        >
          {isUser ? <IconMail /> : <IconLock />}
          <span>{emailLabel}</span>
        </button>

        {/* Share — anyone can use, no login required */}
        <button type="button" onClick={onShareOpen} style={baseBtn} aria-label={t.actionShare}>
          <IconShare />
          <span>{t.actionShare}</span>
        </button>
      </div>

      {/* Share modal */}
      {shareOpen && (
        <ShareModal
          imageUrl={shareImageUrl()}
          locale={locale}
          t={t}
          linkCopied={shareLinkCopied}
          onClose={onShareClose}
          onDownload={onShareDownload}
          onNativeShare={onShareNative}
          onCopyLink={onShareCopyLink}
        />
      )}

      {/* Inline lock prompt — opens when anon clicks Save or Email */}
      {lockPrompt && (
        <div style={{
          marginTop: '.75rem',
          padding: '.75rem 1rem',
          background: 'rgba(201,168,76,.08)',
          border: '1px solid rgba(201,168,76,.35)',
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '.75rem',
          flexWrap: 'wrap',
        }}>
          <span style={{ color: 'var(--text)', fontSize: '.85rem', lineHeight: 1.5, flex: 1, minWidth: 200 }}>
            {lockPrompt}
          </span>
          <Link
            href={signUpUrl}
            style={{
              display: 'inline-block',
              padding: '.45rem .85rem',
              background: 'rgba(201,168,76,.18)',
              border: '1px solid rgba(201,168,76,.6)',
              borderRadius: 8,
              color: 'var(--gold)',
              fontFamily: "'Cinzel',serif",
              fontSize: '.78rem',
              letterSpacing: '.06em',
              textDecoration: 'none',
            }}
          >
            {t.signUpCta}
          </Link>
          <Link
            href={signInUrl}
            style={{
              color: 'var(--gold)',
              fontSize: '.8rem',
              borderBottom: '1px dashed rgba(201,168,76,.5)',
              textDecoration: 'none',
            }}
          >
            {t.signInCta}
          </Link>
          <button
            type="button"
            onClick={onCloseLocked}
            aria-label="Dismiss"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--muted)',
              fontSize: '1.1rem',
              cursor: 'pointer',
              opacity: .5,
              padding: '0 .25rem',
            }}
          >
            ×
          </button>
        </div>
      )}
    </div>
  )
}

// ─── inline SVG icons ───────────────────────────────────────────────────────

function IconCopy() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  )
}

function IconSave() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
    </svg>
  )
}

function IconMail() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

function IconLock() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  )
}

function IconShare() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  )
}

// ─── Share modal ───────────────────────────────────────────────────────────
// Lightweight inline overlay rendered on top of the page (z-index 999).
// Shows the generated /og PNG preview + Download + Web Share + Copy link.
// We deliberately keep this self-contained (no portal, no library) — the
// AI reading is the only place we currently surface it and the modal is
// shallow enough that a manual overlay is fine.

function ShareModal(props: {
  imageUrl: string
  locale: 'en' | 'es'
  t: LocaleCopy
  linkCopied: boolean
  onClose: () => void
  onDownload: () => void
  onNativeShare: () => void
  onCopyLink: () => void
}) {
  const { imageUrl, t, linkCopied, onClose, onDownload, onNativeShare, onCopyLink } = props

  // Detect native-share availability so we can hide the button cleanly on
  // desktop browsers that don't support it (rather than rely on it failing).
  const hasNativeShare = typeof navigator !== 'undefined'
    && typeof (navigator as { share?: unknown }).share === 'function'

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(7, 6, 18, 0.78)',
        backdropFilter: 'blur(4px)',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'var(--bg)',
          border: '1px solid var(--border)',
          borderRadius: 14,
          padding: '1.5rem',
          maxWidth: 560,
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 20px 60px rgba(0,0,0,.55)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem', marginBottom: '.85rem' }}>
          <h3 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.04em', margin: 0 }}>
            {t.shareModalTitle}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.shareClose}
            style={{ background: 'transparent', border: 'none', color: 'var(--muted)', cursor: 'pointer', fontSize: '1.2rem', padding: 4, lineHeight: 1 }}
          >
            ×
          </button>
        </div>

        <p style={{ color: 'var(--muted)', fontSize: '.82rem', lineHeight: 1.6, margin: '0 0 1rem' }}>
          {t.shareModalSubtitle}
        </p>

        {/* Preview — the /og route returns a 1200×630 PNG; constrain by max-width. */}
        <div style={{
          width: '100%',
          aspectRatio: '1200 / 630',
          borderRadius: 10,
          overflow: 'hidden',
          border: '1px solid var(--border)',
          background: '#0d0a1f',
          marginBottom: '1rem',
        }}>
          {imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imageUrl} alt="" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
          ) : null}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
          <button
            type="button"
            onClick={onDownload}
            style={{
              flex: '1 1 auto',
              padding: '.65rem 1rem',
              borderRadius: 10,
              border: '1px solid var(--gold)',
              background: 'rgba(201,168,76,.15)',
              color: 'var(--gold)',
              fontFamily: "'Cinzel',serif",
              fontSize: '.82rem',
              letterSpacing: '.05em',
              cursor: 'pointer',
            }}
          >
            {t.shareDownload}
          </button>
          {hasNativeShare && (
            <button
              type="button"
              onClick={onNativeShare}
              style={{
                flex: '1 1 auto',
                padding: '.65rem 1rem',
                borderRadius: 10,
                border: '1px solid var(--border)',
                background: 'var(--on-bg-04)',
                color: 'var(--muted)',
                fontFamily: "'Cinzel',serif",
                fontSize: '.82rem',
                letterSpacing: '.05em',
                cursor: 'pointer',
              }}
            >
              {t.shareNative}
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={onCopyLink}
          style={{
            marginTop: '.6rem',
            width: '100%',
            padding: '.55rem 1rem',
            borderRadius: 10,
            border: '1px dashed var(--border)',
            background: 'transparent',
            color: linkCopied ? 'var(--gold)' : 'var(--muted)',
            fontFamily: "'Cinzel',serif",
            fontSize: '.78rem',
            letterSpacing: '.05em',
            cursor: 'pointer',
          }}
        >
          {linkCopied ? t.shareCopyLinkDone : t.shareCopyLink}
        </button>
      </div>
    </div>
  )
}

// (RenderedReading + helpers extracted to components/RenderedReading.tsx)
