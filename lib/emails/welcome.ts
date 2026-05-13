/**
 * Welcome email — sent immediately after a new subscriber is added to
 * the Resend Audience. Uses table-based HTML for client compatibility.
 *
 * Pattern: each email kind lives in lib/emails/<name>.ts and exports a
 * builder that returns { subject, html, text } so the API route stays
 * thin and content is reviewable per file.
 */

interface BuildOptions {
  /** Base site URL, no trailing slash, e.g. "https://tarotaxis.com". */
  siteUrl: string
  /** Fully-signed unsubscribe URL for this recipient. */
  unsubscribeUrl: string
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

/**
 * "The Fool" — the symbolic first card. Hard-coded for welcome; daily
 * email automation (Phase B) will date-seed the card selection.
 */
const FIRST_CARD = {
  name: 'The Fool',
  slug: 'the-fool',
  number: '0',
  suit: 'Major Arcana',
  keywords: ['beginnings', 'spontaneity', 'innocence'],
  meaning:
    'The Fool marks the start of a brand new journey. You are stepping into the unknown with openness and a willingness to experience life fully. Trust the process — what looks like a risk is actually an invitation to grow.',
}

export function buildWelcomeEmail({ siteUrl, unsubscribeUrl }: BuildOptions): BuiltEmail {
  const subject = 'Welcome to TarotAxis ✦ your first card is here'

  const cardImage = `${siteUrl}/cards/${FIRST_CARD.slug}.webp`
  const cardLink = `${siteUrl}/cards/${FIRST_CARD.slug}`
  const allCardsLink = `${siteUrl}/cards`

  const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="x-apple-disable-message-reformatting" />
<title>Welcome to TarotAxis</title>
</head>
<body style="margin:0;padding:0;background:${BG};color:${TEXT};font-family:Georgia,'Times New Roman',serif;-webkit-text-size-adjust:100%;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${BG};">
  <tr>
    <td align="center" style="padding:32px 16px 24px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;">

        <!-- Wordmark -->
        <tr>
          <td align="center" style="padding:0 0 28px 0;">
            <span style="font-family:Georgia,'Times New Roman',serif;font-size:14px;letter-spacing:0.25em;text-transform:uppercase;color:${GOLD};">✦ TarotAxis</span>
          </td>
        </tr>

        <!-- Headline -->
        <tr>
          <td align="center" style="padding:0 8px 16px;">
            <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:32px;line-height:1.25;color:${GOLD};letter-spacing:0.02em;font-weight:normal;">
              Welcome.
            </h1>
          </td>
        </tr>

        <!-- Intro -->
        <tr>
          <td style="padding:0 8px 32px;">
            <p style="margin:0;font-size:16px;line-height:1.75;color:${TEXT};text-align:center;">
              Glad to have you. The cards have a way of catching the small things — the half-formed feeling you have not named yet, the choice you have been putting off, the truth you almost know. Each note you receive will be a small invitation to pause and listen.
            </p>
          </td>
        </tr>

        <!-- Card panel -->
        <tr>
          <td style="padding:0 8px 24px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${PANEL};border:1px solid ${BORDER};border-radius:12px;">
              <tr>
                <td align="center" style="padding:28px 24px 8px;">
                  <span style="font-family:Georgia,'Times New Roman',serif;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${MUTED};">Your first card</span>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding:0 24px 20px;">
                  <a href="${cardLink}" style="text-decoration:none;display:inline-block;">
                    <img src="${cardImage}" alt="${FIRST_CARD.name}" width="180" height="270" style="display:block;border:1px solid ${BORDER};border-radius:8px;width:180px;height:auto;" />
                  </a>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding:0 24px 6px;">
                  <h2 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:22px;color:${GOLD};letter-spacing:0.03em;font-weight:normal;">
                    ${FIRST_CARD.name}
                  </h2>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding:0 24px 16px;">
                  <span style="font-family:Georgia,'Times New Roman',serif;font-size:12px;letter-spacing:0.1em;color:${MUTED};text-transform:uppercase;">
                    ${FIRST_CARD.number} · ${FIRST_CARD.suit}
                  </span>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding:0 24px 18px;">
                  <span style="font-family:Georgia,'Times New Roman',serif;font-size:12px;letter-spacing:0.08em;color:${GOLD};text-transform:uppercase;">
                    ${FIRST_CARD.keywords.join(' · ')}
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding:0 28px 28px;">
                  <p style="margin:0;font-size:15px;line-height:1.7;color:${TEXT};text-align:left;">
                    ${FIRST_CARD.meaning}
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- What to expect -->
        <tr>
          <td style="padding:0 8px 24px;">
            <h3 style="margin:0 0 10px;font-family:Georgia,'Times New Roman',serif;font-size:14px;letter-spacing:0.15em;text-transform:uppercase;color:${GOLD};font-weight:normal;">
              What to expect
            </h3>
            <p style="margin:0;font-size:15px;line-height:1.75;color:${TEXT};">
              A short reflection from the 78-card deck will arrive in your inbox going forward. No marketing, no upsells — just the card and a few quiet sentences to start your day with. If a particular card catches you, every email links back to the full meaning on the site.
            </p>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td align="center" style="padding:8px 8px 36px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td align="center" style="border:1px solid ${GOLD};border-radius:8px;">
                  <a href="${allCardsLink}" style="display:inline-block;padding:12px 28px;font-family:Georgia,'Times New Roman',serif;font-size:14px;letter-spacing:0.1em;color:${GOLD};text-decoration:none;">
                    Explore all 78 cards →
                  </a>
                </td>
              </tr>
            </table>
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
              <a href="${unsubscribeUrl}" style="color:${MUTED};text-decoration:underline;">Unsubscribe in one click</a>
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
    'Welcome to TarotAxis',
    '',
    'Glad to have you. The cards have a way of catching the small things — the half-formed feeling you have not named yet, the choice you have been putting off, the truth you almost know.',
    '',
    'Your first card: ' + FIRST_CARD.name + ' (' + FIRST_CARD.number + ' · ' + FIRST_CARD.suit + ')',
    'Keywords: ' + FIRST_CARD.keywords.join(', '),
    '',
    FIRST_CARD.meaning,
    '',
    'Read the full meaning: ' + cardLink,
    '',
    '— What to expect —',
    'A short reflection from the 78-card deck will arrive in your inbox going forward. No marketing, no upsells — just the card and a few quiet sentences to start your day with.',
    '',
    'Explore all 78 cards: ' + allCardsLink,
    '',
    '---',
    'You are receiving this because you subscribed at ' + siteUrl,
    'Unsubscribe in one click: ' + unsubscribeUrl,
  ].join('\n')

  return { subject, html, text }
}
