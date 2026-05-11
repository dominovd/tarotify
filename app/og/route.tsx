import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// No cards import — all data comes from URL params to stay within Edge bundle limit

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const slug     = searchParams.get('slug') ?? 'the-fool'
  const name     = searchParams.get('n')    ?? 'The Fool'
  const suit     = searchParams.get('s')    ?? 'Major Arcana'
  const element  = searchParams.get('e')    ?? 'Air'
  const kws      = (searchParams.get('k') ?? '').split(',').filter(Boolean).slice(0, 4)
  const text     = searchParams.get('t')    ?? ''
  const reversed = searchParams.get('rev') === '1'
  const daily    = searchParams.get('type') === 'daily'

  const base = 'https://tarotify.app'
  const imgUrl = `${base}/cards/${slug}.webp`

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
        {/* Card image placeholder — image loading from same domain fails in Edge */}
        <div
          style={{
            display: 'flex',
            flexShrink: 0,
            width: 258,
            height: 387,
            borderRadius: 16,
            border: '1.5px solid rgba(201,168,76,0.45)',
            background: 'rgba(201,168,76,0.06)',
            marginRight: 58,
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 64,
          }}
        >
          ✦
        </div>

        {/* Text column */}
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>

          <div style={{ color: 'rgba(201,168,76,0.5)', fontSize: 15, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 14 }}>
            {daily ? 'Card of the Day  -  ' : ''}{suit}  -  {element}
          </div>

          <div style={{ color: '#c9a84c', fontSize: 58, fontWeight: 700, lineHeight: 1.05, marginBottom: 20 }}>
            {name}{reversed ? ' (Reversed)' : ''}
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
