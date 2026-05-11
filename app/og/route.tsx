import { ImageResponse } from 'next/og'
import { CARDS_BY_SLUG, CARDS } from '@/lib/cards'

export const runtime = 'edge'

/** Convert ArrayBuffer → base64 in Edge runtime (no Buffer available) */
function toBase64(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf)
  let str = ''
  for (let i = 0; i < bytes.length; i += 1024) {
    str += String.fromCharCode(...Array.from(bytes.subarray(i, i + 1024)))
  }
  return btoa(str)
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug     = searchParams.get('slug') ?? 'the-fool'
  const reversed = searchParams.get('rev')  === '1'
  const daily    = searchParams.get('type') === 'daily'

  const card = CARDS_BY_SLUG[slug] ?? CARDS[0]
  const base = 'https://tarotify.app'
  const kws  = (reversed ? card.kw_rev : card.kw_up).slice(0, 4)
  const text = (reversed ? card.rev : card.up).slice(0, 130) + '…'

  // Pre-fetch card image as data URL to avoid self-referential edge fetch issues
  let imgSrc = `${base}/cards/${card.slug}.webp`
  try {
    const res = await fetch(imgSrc)
    if (res.ok) {
      const buf = await res.arrayBuffer()
      imgSrc = `data:image/webp;base64,${toBase64(buf)}`
    }
  } catch {
    // fall back to URL if fetch fails
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: 1200,
          height: 630,
          background: 'linear-gradient(145deg,#0d0a1f 0%,#07071a 60%,#0d0a1f 100%)',
          alignItems: 'center',
          padding: '50px 65px',
          gap: '58px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Card image */}
        <div
          style={{
            display: 'flex',
            flexShrink: 0,
            width: 258,
            height: 387,
            borderRadius: 16,
            overflow: 'hidden',
            border: '1.5px solid rgba(201,168,76,0.45)',
            boxShadow: '0 0 70px rgba(0,0,0,0.7), 0 0 30px rgba(201,168,76,0.08)',
            transform: reversed ? 'rotate(180deg)' : undefined,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgSrc}
            alt={card.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Text */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 0 }}>

          {/* Daily label or suit */}
          <div
            style={{
              color: 'rgba(201,168,76,0.5)',
              fontSize: 15,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: 14,
            }}
          >
            {daily ? 'Card of the Day  ·  ' : ''}{card.suitLabel}  ·  {card.element}
          </div>

          {/* Card name */}
          <div
            style={{
              color: '#c9a84c',
              fontSize: 58,
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: 20,
            }}
          >
            {card.name}
            {reversed && (
              <span style={{ fontSize: 28, color: 'rgba(201,168,76,0.55)', marginLeft: 12 }}>
                Reversed
              </span>
            )}
          </div>

          {/* Keywords */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
            {kws.map(kw => (
              <div
                key={kw}
                style={{
                  padding: '5px 16px',
                  background: 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.28)',
                  borderRadius: 20,
                  color: 'rgba(201,168,76,0.85)',
                  fontSize: 15,
                }}
              >
                {kw}
              </div>
            ))}
          </div>

          {/* Meaning snippet */}
          <div
            style={{
              color: 'rgba(255,255,255,0.52)',
              fontSize: 21,
              lineHeight: 1.6,
            }}
          >
            {text}
          </div>

          {/* Branding */}
          <div
            style={{
              marginTop: 28,
              paddingTop: 24,
              color: 'rgba(201,168,76,0.32)',
              fontSize: 17,
              letterSpacing: '0.14em',
            }}
          >
            tarotify.app
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
