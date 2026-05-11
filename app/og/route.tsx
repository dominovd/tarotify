import { ImageResponse } from 'next/og'
import { CARDS_BY_SLUG, CARDS } from '@/lib/cards'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug     = searchParams.get('slug') ?? 'the-fool'
  const reversed = searchParams.get('rev')  === '1'
  const daily    = searchParams.get('type') === 'daily'

  const card = CARDS_BY_SLUG[slug] ?? CARDS[0]
  const kws  = (reversed ? card.kw_rev : card.kw_up).slice(0, 4)
  const text = (reversed ? card.rev : card.up).slice(0, 130) + '...'

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: 1200,
          height: 630,
          background: '#0d0a1f',
          alignItems: 'center',
          padding: '50px 65px',
        }}
      >
        {/* Placeholder instead of image */}
        <div
          style={{
            display: 'flex',
            flexShrink: 0,
            width: 258,
            height: 387,
            borderRadius: 16,
            border: '1.5px solid rgba(201,168,76,0.45)',
            background: 'rgba(201,168,76,0.08)',
            marginRight: 58,
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <div style={{ color: 'rgba(201,168,76,0.5)', fontSize: 15, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 14 }}>
            {daily ? 'Card of the Day  -  ' : ''}{card.suitLabel}  -  {card.element}
          </div>
          <div style={{ color: '#c9a84c', fontSize: 58, fontWeight: 700, lineHeight: 1.05, marginBottom: 20 }}>
            {card.name}{reversed ? ' (Reversed)' : ''}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 24 }}>
            {kws.map(kw => (
              <div key={kw} style={{ padding: '5px 16px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.28)', borderRadius: 20, color: 'rgba(201,168,76,0.85)', fontSize: 15, marginRight: 10, marginBottom: 10 }}>
                {kw}
              </div>
            ))}
          </div>
          <div style={{ color: 'rgba(255,255,255,0.52)', fontSize: 21, lineHeight: 1.6 }}>
            {text}
          </div>
          <div style={{ color: 'rgba(201,168,76,0.32)', fontSize: 17, letterSpacing: '0.14em', marginTop: 28 }}>
            tarotify.app
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
