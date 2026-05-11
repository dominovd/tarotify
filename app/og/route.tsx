import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug    = searchParams.get('slug') ?? 'the-fool'
  const name    = searchParams.get('n')    ?? 'Tarot'
  const suit    = searchParams.get('s')    ?? ''
  const element = searchParams.get('e')    ?? ''
  const kws     = (searchParams.get('k') ?? '').split(',').filter(Boolean).slice(0, 4)
  const text    = searchParams.get('t')    ?? ''
  const reversed = searchParams.get('rev') === '1'
  const daily   = searchParams.get('type') === 'daily'

  const imgUrl = `https://tarotify.app/cards/${slug}.webp`

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
            width: 258,
            height: 387,
            borderRadius: 16,
            overflow: 'hidden',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'rgba(201,168,76,0.45)',
            marginRight: 58,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgUrl}
            alt={name}
            width={258}
            height={387}
            style={{ objectFit: 'cover', display: 'flex' }}
          />
        </div>

        {/* Text column */}
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>

          {/* Suit / label */}
          <div style={{ color: 'rgba(201,168,76,0.5)', fontSize: 15, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 14 }}>
            {daily ? 'Card of the Day  -  ' : ''}{suit}{suit && element ? '  -  ' : ''}{element}
          </div>

          {/* Card name */}
          <div style={{ color: '#c9a84c', fontSize: 56, fontWeight: 700, lineHeight: 1.05, marginBottom: 20 }}>
            {name}{reversed ? ' (Reversed)' : ''}
          </div>

          {/* Keywords */}
          <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 24 }}>
            {kws.map((kw, i) => (
              <div
                key={i}
                style={{
                  paddingTop: 5,
                  paddingRight: 16,
                  paddingBottom: 5,
                  paddingLeft: 16,
                  background: 'rgba(201,168,76,0.1)',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: 'rgba(201,168,76,0.28)',
                  borderRadius: 20,
                  color: 'rgba(201,168,76,0.85)',
                  fontSize: 15,
                  marginRight: 10,
                  marginBottom: 10,
                }}
              >
                {kw}
              </div>
            ))}
          </div>

          {/* Text snippet */}
          <div style={{ color: 'rgba(255,255,255,0.52)', fontSize: 20, lineHeight: 1.6 }}>
            {text}
          </div>

          {/* Branding */}
          <div style={{ color: 'rgba(201,168,76,0.32)', fontSize: 17, letterSpacing: 2, marginTop: 28 }}>
            tarotify.app
          </div>

        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
