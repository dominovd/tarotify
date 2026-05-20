/**
 * AI Reading delivery email — sent when a logged-in user taps the
 * "Email this to me" action on a freshly streamed AI reading.
 *
 * Renders the same Markdown-ish dialect the front-end uses
 * (## headings, **bold**, - bullets) into HTML for the email body.
 * Plain-text fallback included for clients without HTML rendering.
 */

import { CARDS_BY_SLUG } from '@/lib/cards'

type Locale = 'en' | 'es'

interface CardArg {
  slug: string
  reversed: boolean
  position?: string
}

interface BuildOptions {
  locale: Locale
  /** Base site URL, no trailing slash. */
  siteUrl: string
  /** Display name of the spread, e.g. "Past · Present · Future". */
  spreadName?: string
  cards: CardArg[]
  question?: string
  /** Full AI reading text — same Markdown dialect as the front-end. */
  text: string
}

interface BuiltEmail {
  subject: string
  html: string
  text: string
}

// Brand palette mirrored from welcome.ts
const GOLD = '#c9a84c'
const BG = '#07071a'
const PANEL = '#0d0d2b'
const TEXT = '#e8d5a0'
const MUTED = '#8b8ba8'
const BORDER = 'rgba(201,168,76,0.25)'

const COPY = {
  en: {
    subject: 'Your TarotAxis AI reading ✦',
    headline: 'Your AI reading',
    intro: 'Below is the reading you asked for, in full. Keep it for later, share it with someone, or use it as a starting point for journalling.',
    yourQuestion: 'Your question',
    cardsLabel: 'Cards drawn',
    footerCta: 'Draw another reading',
    closing: 'TarotAxis · daily clarity, on your terms.',
    poweredBy: 'AI interpretation via Claude · TarotAxis',
    reversedSuffix: ' (reversed)',
  },
  es: {
    subject: 'Tu lectura de tarot con IA ✦',
    headline: 'Tu lectura con IA',
    intro: 'Abajo está la lectura que pediste, completa. Guárdala para más tarde, compártela con alguien, o úsala como punto de partida para escribir en tu diario.',
    yourQuestion: 'Tu pregunta',
    cardsLabel: 'Cartas sacadas',
    footerCta: 'Sacar otra lectura',
    closing: 'TarotAxis · claridad diaria, a tu manera.',
    poweredBy: 'Interpretación con IA mediante Claude · TarotAxis',
    reversedSuffix: ' (invertida)',
  },
} as const

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/** Convert our Markdown-ish reading dialect into safe HTML for email. */
function renderReadingHtml(text: string): string {
  const lines = text.split('\n')
  const out: string[] = []
  let listBuf: string[] = []

  const flushList = () => {
    if (listBuf.length === 0) return
    out.push(
      `<ul style="margin:8px 0 16px 0;padding-left:20px;color:${TEXT};">` +
      listBuf
        .map(item => `<li style="margin-bottom:6px;line-height:1.65;font-size:15px;">${renderInline(item)}</li>`)
        .join('') +
      '</ul>',
    )
    listBuf = []
  }

  for (const raw of lines) {
    const line = raw
    if (line.startsWith('## ')) {
      flushList()
      out.push(
        `<h3 style="margin:24px 0 10px;font-family:Georgia,'Times New Roman',serif;color:${GOLD};font-size:17px;letter-spacing:0.03em;font-weight:normal;">${escapeHtml(line.slice(3))}</h3>`,
      )
    } else if (line.trimStart().startsWith('- ')) {
      listBuf.push(line.trimStart().slice(2))
    } else if (line.trim() === '') {
      flushList()
    } else {
      flushList()
      out.push(
        `<p style="margin:0 0 12px;color:${TEXT};font-size:15px;line-height:1.75;">${renderInline(line)}</p>`,
      )
    }
  }
  flushList()
  return out.join('\n')
}

function renderInline(line: string): string {
  // Escape first, then re-introduce bold spans (using HTML entities).
  const escaped = escapeHtml(line)
  return escaped.replace(/\*\*(.+?)\*\*/g, `<strong style="color:${GOLD};font-weight:600;">$1</strong>`)
}

/** Plain-text equivalent — readable as-is in any email client. */
function renderReadingText(text: string): string {
  // We already use a markdown-ish dialect that reads fine as text. Just
  // strip bold markers so ** doesn't appear inline.
  return text.replace(/\*\*(.+?)\*\*/g, '$1')
}

function cardLabel(card: CardArg, locale: Locale, reversedSuffix: string): string {
  const base = CARDS_BY_SLUG[card.slug]
  const name = base?.name ?? card.slug
  const reversed = card.reversed ? reversedSuffix : ''
  const pos = card.position ? `${card.position}: ` : ''
  // For ES, prefer the Spanish localised name when available — read from
  // messages/es/cards.json on the server. Keep it simple here; the EN name
  // is acceptable fallback in transactional email.
  return `${pos}${name}${reversed}`
}

export function buildAiReadingEmail(opts: BuildOptions): BuiltEmail {
  const t = COPY[opts.locale]
  const subject = t.subject

  const readingLink = `${opts.siteUrl}${opts.locale === 'es' ? '/es/lectura-gratis' : '/free-reading'}`

  const cardsHtml = opts.cards
    .map(c => `<li style="margin-bottom:4px;color:${TEXT};font-size:14px;">${escapeHtml(cardLabel(c, opts.locale, t.reversedSuffix))}</li>`)
    .join('')

  const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="${opts.locale}">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="x-apple-disable-message-reformatting" />
<title>${escapeHtml(t.subject)}</title>
</head>
<body style="margin:0;padding:0;background:${BG};color:${TEXT};font-family:Georgia,'Times New Roman',serif;-webkit-text-size-adjust:100%;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${BG};">
  <tr>
    <td align="center" style="padding:32px 16px 24px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">

        <!-- Wordmark -->
        <tr>
          <td align="center" style="padding:0 0 28px;">
            <span style="font-family:Georgia,'Times New Roman',serif;font-size:14px;letter-spacing:0.25em;text-transform:uppercase;color:${GOLD};">✦ TarotAxis</span>
          </td>
        </tr>

        <!-- Headline -->
        <tr>
          <td align="center" style="padding:0 8px 12px;">
            <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.3;color:${GOLD};letter-spacing:0.02em;font-weight:normal;">
              ${escapeHtml(t.headline)}
            </h1>
          </td>
        </tr>

        <!-- Intro -->
        <tr>
          <td style="padding:0 8px 24px;">
            <p style="margin:0;font-size:15px;line-height:1.7;color:${MUTED};text-align:center;">
              ${escapeHtml(t.intro)}
            </p>
          </td>
        </tr>

        ${opts.question ? `
        <!-- Question -->
        <tr>
          <td style="padding:0 8px 8px;">
            <div style="border:1px solid ${BORDER};background:${PANEL};border-radius:10px;padding:14px 18px;">
              <div style="font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:${GOLD};opacity:0.7;margin-bottom:6px;">${escapeHtml(t.yourQuestion)}</div>
              <div style="font-size:15px;color:${TEXT};line-height:1.55;font-style:italic;">"${escapeHtml(opts.question)}"</div>
            </div>
          </td>
        </tr>
        ` : ''}

        <!-- Cards drawn -->
        <tr>
          <td style="padding:16px 8px 8px;">
            <div style="font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:${GOLD};opacity:0.7;margin-bottom:8px;">${escapeHtml(t.cardsLabel)}${opts.spreadName ? ` · ${escapeHtml(opts.spreadName)}` : ''}</div>
            <ul style="margin:0;padding-left:18px;list-style:none;">
              ${cardsHtml}
            </ul>
          </td>
        </tr>

        <!-- Reading body -->
        <tr>
          <td style="padding:16px 8px 24px;">
            <div style="border-top:1px solid ${BORDER};padding-top:16px;">
              ${renderReadingHtml(opts.text)}
            </div>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td align="center" style="padding:12px 8px 32px;">
            <a href="${readingLink}" style="display:inline-block;padding:12px 24px;background:rgba(201,168,76,0.12);border:1px solid ${GOLD};border-radius:8px;color:${GOLD};font-family:Georgia,'Times New Roman',serif;font-size:14px;letter-spacing:0.08em;text-decoration:none;">
              ${escapeHtml(t.footerCta)} →
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td align="center" style="padding:16px 8px 0;border-top:1px solid ${BORDER};">
            <p style="margin:0 0 6px;font-size:12px;color:${MUTED};opacity:0.7;letter-spacing:0.04em;">
              ${escapeHtml(t.closing)}
            </p>
            <p style="margin:0;font-size:11px;color:${MUTED};opacity:0.5;letter-spacing:0.04em;">
              ${escapeHtml(t.poweredBy)}
            </p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>`

  // ─── plain-text fallback ───────────────────────────────────────────────
  const txtParts: string[] = []
  txtParts.push(`✦ ${t.headline}`)
  txtParts.push('')
  txtParts.push(t.intro)
  txtParts.push('')
  if (opts.question) {
    txtParts.push(`${t.yourQuestion}: "${opts.question}"`)
    txtParts.push('')
  }
  txtParts.push(`${t.cardsLabel}${opts.spreadName ? ` · ${opts.spreadName}` : ''}:`)
  for (const c of opts.cards) {
    txtParts.push(`  · ${cardLabel(c, opts.locale, t.reversedSuffix)}`)
  }
  txtParts.push('')
  txtParts.push('─────')
  txtParts.push('')
  txtParts.push(renderReadingText(opts.text))
  txtParts.push('')
  txtParts.push('─────')
  txtParts.push('')
  txtParts.push(`${t.footerCta}: ${readingLink}`)
  txtParts.push('')
  txtParts.push(t.closing)

  return {
    subject,
    html,
    text: txtParts.join('\n'),
  }
}
