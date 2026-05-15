import { ImageResponse } from 'next/og'
import { CARDS_BY_SLUG } from '../../lib/cards'
import cardsEs from '../../messages/es/cards.json'

export const runtime = 'edge'

// Locale-aware card resolver. For es locale, prefer Spanish content from
// messages/es/cards.json; fall back to EN per-field when the JSON lacks an
// entry (e.g. before batch translate has filled extended modules).
type LocaleCard = {
  name: string
  suitLabel: string
  element: string
  kw_up: string[]
  kw_rev: string[]
  up: string
  rev: string
  slug: string
}

const ELEMENT_ES: Record<string, string> = {
  Air: 'Aire',
  Water: 'Agua',
  Fire: 'Fuego',
  Earth: 'Tierra',
}

function getLocaleCard(slug: string, locale: string): LocaleCard {
  const base = CARDS_BY_SLUG[slug] ?? CARDS_BY_SLUG['the-fool']
  if (locale !== 'es') return base as LocaleCard
  const esRaw = (cardsEs as Record<string, Partial<LocaleCard>>)[base.slug] ?? {}
  return {
    slug: base.slug,
    name: esRaw.name ?? base.name,
    suitLabel: esRaw.suitLabel ?? base.suitLabel,
    element: ELEMENT_ES[base.element] ?? base.element,
    kw_up: (esRaw.kw_up as string[] | undefined) ?? base.kw_up,
    kw_rev: (esRaw.kw_rev as string[] | undefined) ?? base.kw_rev,
    up: esRaw.up ?? base.up,
    rev: esRaw.rev ?? base.rev,
  }
}

// Locale-aware UI labels.
const LABELS = {
  en: {
    cardOfDay: 'Card of the Day',
    feelings: 'In a Feelings Reading',
    tarotCombo: 'Tarot Combination',
    reversedSuffix: ' (Reversed)',
    asFeelingsSuffix: ' as Feelings',
  },
  es: {
    cardOfDay: 'Carta del Día',
    feelings: 'En una lectura de sentimientos',
    tarotCombo: 'Combinación de Tarot',
    reversedSuffix: ' (Invertida)',
    asFeelingsSuffix: ' como sentimientos',
  },
} as const

async function fetchCardImage(slug: string): Promise<string> {
  try {
    const res = await fetch(`https://tarotaxis.com/cards/${slug}.webp`)
    if (!res.ok) return ''
    const buf = await res.arrayBuffer()
    const bytes = new Uint8Array(buf)
    let str = ''
    for (let i = 0; i < bytes.length; i += 1024) {
      str += String.fromCharCode(...Array.from(bytes.subarray(i, i + 1024)))
    }
    return `data:image/webp;base64,${btoa(str)}`
  } catch {
    return ''
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const slugParam  = searchParams.get('slug')  ?? 'the-fool'
    const slug2Param = searchParams.get('slug2') ?? ''
    const reversed   = searchParams.get('rev')   === '1'
    const type       = searchParams.get('type')  ?? ''
    const localeParam = searchParams.get('locale') ?? 'en'
    const locale     = localeParam === 'es' ? 'es' : 'en'
    const L          = LABELS[locale]
    const daily      = type === 'daily'
    const feelings   = type === 'feelings'
    const combination = type === 'combination' && slug2Param.length > 0

    // ────────────────────────────────────────────────────────────────
    // Combination mode — two cards side-by-side.
    // ────────────────────────────────────────────────────────────────
    if (combination) {
      const c1 = getLocaleCard(slugParam, locale)
      const c2 = getLocaleCard(slug2Param || 'the-magician', locale)
      const [img1, img2] = await Promise.all([
        fetchCardImage(c1.slug),
        fetchCardImage(c2.slug),
      ])
      const elements = c1.element === c2.element ? c1.element : `${c1.element} + ${c2.element}`
      const label = [L.tarotCombo, elements].filter(Boolean).join('  ·  ')
      const kws = [c1.kw_up[0], c2.kw_up[0]].filter(Boolean)

      return new ImageResponse(
        (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: 1200,
              height: 630,
              background: '#0d0a1f',
              paddingTop: 50,
              paddingRight: 65,
              paddingBottom: 50,
              paddingLeft: 65,
            }}
          >
            <div style={{ display: 'flex', color: 'rgba(201,168,76,0.5)', fontSize: 15, marginBottom: 14 }}>
              {label}
            </div>

            <div style={{ display: 'flex', color: '#c9a84c', fontSize: 48, fontWeight: 700, marginBottom: 24 }}>
              {c1.name} + {c2.name}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 18 }}>
              {/* Card 1 */}
              <div
                style={{
                  display: 'flex',
                  width: 180,
                  height: 270,
                  borderRadius: 10,
                  overflow: 'hidden',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: 'rgba(201,168,76,0.4)',
                }}
              >
                {img1 && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={img1} alt={c1.name} width={180} height={270} style={{ display: 'flex', objectFit: 'cover' }} />
                )}
              </div>

              {/* + */}
              <div style={{ display: 'flex', color: '#c9a84c', fontSize: 60, fontWeight: 300, marginLeft: 28, marginRight: 28 }}>
                +
              </div>

              {/* Card 2 */}
              <div
                style={{
                  display: 'flex',
                  width: 180,
                  height: 270,
                  borderRadius: 10,
                  overflow: 'hidden',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: 'rgba(201,168,76,0.4)',
                  marginRight: 40,
                }}
              >
                {img2 && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={img2} alt={c2.name} width={180} height={270} style={{ display: 'flex', objectFit: 'cover' }} />
                )}
              </div>

              {/* Keyword pills column */}
              <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                {kws.map((kw, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      paddingTop: 6,
                      paddingRight: 16,
                      paddingBottom: 6,
                      paddingLeft: 16,
                      marginBottom: 10,
                      borderRadius: 20,
                      borderWidth: 1,
                      borderStyle: 'solid',
                      borderColor: 'rgba(201,168,76,0.35)',
                      color: 'rgba(201,168,76,0.9)',
                      fontSize: 16,
                      alignSelf: 'flex-start',
                    }}
                  >
                    {kw}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', color: 'rgba(201,168,76,0.3)', fontSize: 16 }}>
              tarotaxis.com
            </div>
          </div>
        ),
        { width: 1200, height: 630 }
      )
    }

    // ────────────────────────────────────────────────────────────────
    // Single-card mode — default.
    // ────────────────────────────────────────────────────────────────
    const card = getLocaleCard(slugParam, locale)
    const slug = card.slug
    const name = card.name
    const suit = card.suitLabel
    const element = card.element
    // Use upright keywords by default, reversed keywords when rev=1.
    // Feelings pages keep upright vocabulary — the "as Feelings" angle is in the title.
    const kws = (reversed ? card.kw_rev : card.kw_up).slice(0, 4)
    // Short flavour text — first sentence of upright/reversed reading.
    const rawText = reversed ? card.rev : card.up
    const text = rawText.split(/(?<=\.)\s/)[0].slice(0, 140)

    const label = [
      daily ? L.cardOfDay : feelings ? L.feelings : '',
      suit,
      element,
    ].filter(Boolean).join('  ·  ')

    const imgSrc = await fetchCardImage(slug)

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            width: 1200,
            height: 630,
            background: '#0d0a1f',
            alignItems: 'center',
            paddingTop: 50,
            paddingRight: 65,
            paddingBottom: 50,
            paddingLeft: 65,
          }}
        >
          {/* Card image */}
          <div
            style={{
              display: 'flex',
              flexShrink: 0,
              width: 230,
              height: 345,
              borderRadius: 12,
              overflow: 'hidden',
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: 'rgba(201,168,76,0.4)',
              marginRight: 60,
              transform: reversed ? 'rotate(180deg)' : 'none',
            }}
          >
            {imgSrc && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={imgSrc} alt={name} width={230} height={345} style={{ display: 'flex', objectFit: 'cover' }} />
            )}
          </div>

          {/* Text column */}
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>

            <div style={{ display: 'flex', color: 'rgba(201,168,76,0.5)', fontSize: 15, marginBottom: 16 }}>
              {label}
            </div>

            <div style={{ display: 'flex', color: '#c9a84c', fontSize: 60, fontWeight: 700, marginBottom: 20 }}>
              {name}{reversed ? L.reversedSuffix : feelings ? L.asFeelingsSuffix : ''}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 24 }}>
              {kws.map((kw, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    paddingTop: 6,
                    paddingRight: 16,
                    paddingBottom: 6,
                    paddingLeft: 16,
                    marginRight: 10,
                    marginBottom: 10,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: 'rgba(201,168,76,0.35)',
                    color: 'rgba(201,168,76,0.9)',
                    fontSize: 15,
                  }}
                >
                  {kw}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', color: 'rgba(255,255,255,0.5)', fontSize: 19, lineHeight: 1.6 }}>
              {text}
            </div>

            <div style={{ display: 'flex', color: 'rgba(201,168,76,0.3)', fontSize: 16, marginTop: 24 }}>
              tarotaxis.com
            </div>

          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    )
  } catch (err: unknown) {
    return new Response(String(err), { status: 500, headers: { 'content-type': 'text/plain' } })
  }
}
