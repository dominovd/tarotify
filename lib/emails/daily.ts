/**
 * Daily card email — sent each morning to the whole TarotAxis audience via
 * Resend Broadcasts. Mirrors the welcome email's visual language so the
 * inbox experience feels consistent.
 *
 * Uses Resend's {{{RESEND_UNSUBSCRIBE_URL}}} merge tag so unsubscribes are
 * handled automatically by Resend at the audience level. No per-recipient
 * HMAC link needed for broadcasts.
 */

import { type Card } from '../cards'

interface BuildOptions {
  siteUrl: string
  date: Date
  card: Card
  reversed: boolean
}

interface BuiltEmail {
  subject: string
  html: string
  text: string
}

const GOLD = '#c9a84c'
const BG = '#07071a'
const PANEL = '#0d0d2b'
const TEXT = '#e8d5a0'
const MUTED = '#8b8ba8'
const BORDER = 'rgba(201,168,76,0.25)'

// Resend Broadcasts substitute this merge tag with each recipient's
// personalised unsubscribe URL at send time. Note the triple braces.
const UNSUBSCRIBE_PLACEHOLDER = '{{{RESEND_UNSUBSCRIBE_URL}}}'

function formatLongDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function buildDailyEmail({ siteUrl, date, card, reversed }: BuildOptions): BuiltEmail {
  const niceDate = formatLongDate(date)
  const orientation = reversed ? 'Reversed' : 'Upright'
  const keywordsSource = reversed ? card.kw_rev : card.kw_up
  const keywords = keywordsSource.slice(0, 3)
  const meaning = reversed ? card.rev : card.up
  const themes: { label: string; body: string }[] = [
    { label: 'In love', body: card.love },
    { label: 'In work', body: card.career },
    { label: 'In spirit', body: card.spirit },
  ]

  const subject = reversed
    ? `Today's card ✦ ${card.name} (reversed)`
    : `Today's card ✦ ${card.name}`

  const cardLink = `${siteUrl}/cards/${card.slug}${reversed ? '/reversed' : ''}`
  const cardImage = `${siteUrl}/cards/${card.slug}.webp`
  const dailyLink = `${siteUrl}/daily`
  const readingLink = `${siteUrl}/free-reading`

  const themesHtml = themes
    .map(t => `
      <tr>
        <td style="padding:0 8px 14px;">
          <span style="font-family:Georgia,'Times New Roman',serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:${MUTED};display:block;margin-bottom:4px;">${t.label}</span>
          <p style="margin:0;font-size:14px;line-height:1.7;color:${TEXT};">${t.body}</p>
        </td>
      </tr>`)
    .join('')

  const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="x-apple-disable-message-reformatting" />
<title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:${BG};color:${TEXT};font-family:Georgia,'Times New Roman',serif;-webkit-text-size-adjust:100%;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${BG};">
  <tr>
    <td align="center" style="padding:32px 16px 24px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;">

        <!-- Wordmark + date -->
        <tr>
          <td align="center" style="padding:0 0 6px 0;">
            <span style="font-family:Georgia,'Times New Roman',serif;font-size:14px;letter-spacing:0.25em;text-transform:uppercase;color:${GOLD};">✦ TarotAxis</span>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding:0 0 28px 0;">
            <span style="font-family:Georgia,'Times New Roman',serif;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:${MUTED};">${niceDate}</span>
          </td>
        </tr>

        <!-- Card panel -->
        <tr>
          <td style="padding:0 8px 24px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${PANEL};border:1px solid ${BORDER};border-radius:12px;">
              <tr>
                <td align="center" style="padding:28px 24px 8px;">
                  <span style="font-family:Georgia,'Times New Roman',serif;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${MUTED};">Today's card</span>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding:0 24px 20px;">
                  <a href="${cardLink}" style="text-decoration:none;display:inline-block;">
                    <img src="${cardImage}" alt="${card.name}" width="180" height="270" style="display:block;border:1px solid ${BORDER};border-radius:8px;width:180px;height:auto;${reversed ? 'transform:rotate(180deg);' : ''}" />
                  </a>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding:0 24px 6px;">
                  <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:24px;color:${GOLD};letter-spacing:0.03em;font-weight:normal;">
                    ${card.name}
                  </h1>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding:0 24px 16px;">
                  <span style="font-family:Georgia,'Times New Roman',serif;font-size:12px;letter-spacing:0.12em;color:${reversed ? '#e07b7b' : MUTED};text-transform:uppercase;">
                    ${orientation} · ${card.suitLabel}
                  </span>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding:0 24px 18px;">
                  <span style="font-family:Georgia,'Times New Roman',serif;font-size:12px;letter-spacing:0.08em;color:${GOLD};text-transform:uppercase;">
                    ${keywords.join(' · ')}
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding:0 28px 26px;">
                  <p style="margin:0;font-size:15px;line-height:1.7;color:${TEXT};text-align:left;">
                    ${meaning}
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Themed sections -->
        <tr>
          <td style="padding:0 8px 12px;">
            <h2 style="margin:0 0 14px;font-family:Georgia,'Times New Roman',serif;font-size:13px;letter-spacing:0.15em;text-transform:uppercase;color:${GOLD};font-weight:normal;">
              Where it lands today
            </h2>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              ${themesHtml}
            </table>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td align="center" style="padding:18px 8px 36px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td align="center" style="border:1px solid ${GOLD};border-radius:8px;">
                  <a href="${cardLink}" style="display:inline-block;padding:12px 28px;font-family:Georgia,'Times New Roman',serif;font-size:14px;letter-spacing:0.1em;color:${GOLD};text-decoration:none;">
                    Read the full meaning →
                  </a>
                </td>
              </tr>
            </table>
            <p style="margin:14px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:12px;color:${MUTED};">
              Or <a href="${readingLink}" style="color:${MUTED};text-decoration:underline;">draw a full reading</a> if today asks for more.
            </p>
          </td>
        </tr>

        <!-- Divider -->
        <tr>
          <td style="padding:0 8px 24px;">
            <div style="height:1px;background:${BORDER};line-height:1px;font-size:1px;">&nbsp;</div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td align="center" style="padding:0 8px 8px;">
            <p style="margin:0 0 8px;font-family:Georgia,'Times New Roman',serif;font-size:11px;letter-spacing:0.05em;color:${MUTED};">
              You are receiving this because you subscribed at <a href="${siteUrl}" style="color:${MUTED};text-decoration:underline;">tarotaxis.com</a>.
            </p>
            <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:11px;letter-spacing:0.05em;color:${MUTED};">
              <a href="${UNSUBSCRIBE_PLACEHOLDER}" style="color:${MUTED};text-decoration:underline;">Unsubscribe in one click</a>
              &nbsp;·&nbsp;
              <a href="${dailyLink}" style="color:${MUTED};text-decoration:underline;">View on the web</a>
            </p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>`

  const text = [
    `TarotAxis — ${niceDate}`,
    '',
    `Today's card: ${card.name} (${orientation} · ${card.suitLabel})`,
    `Keywords: ${keywords.join(', ')}`,
    '',
    meaning,
    '',
    `In love — ${card.love}`,
    `In work — ${card.career}`,
    `In spirit — ${card.spirit}`,
    '',
    `Read the full meaning: ${cardLink}`,
    `Draw a full reading: ${readingLink}`,
    '',
    '---',
    `View on the web: ${dailyLink}`,
    `Unsubscribe: ${UNSUBSCRIBE_PLACEHOLDER}`,
  ].join('\n')

  return { subject, html, text }
}
