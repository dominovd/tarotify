import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const name    = searchParams.get('n')    ?? 'Tarot'
    const suit    = searchParams.get('s')    ?? ''
    const element = searchParams.get('e')    ?? ''
    const kws     = (searchParams.get('k') ?? '').split(',').filter(Boolean).slice(0, 4)
    const text    = searchParams.get('t')    ?? ''
    const reversed = searchParams.get('rev') === '1'
    const daily   = searchParams.get('type') === 'daily'

    const label = [daily ? 'Card of the Day' : '', suit, element].filter(Boolean).join('  ·  ')

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
            paddingRight: 80,
            paddingBottom: 50,
            paddingLeft: 80,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

            {/* Label */}
            <div style={{ display: 'flex', color: 'rgba(201,168,76,0.5)', fontSize: 15, marginBottom: 16 }}>
              {label}
            </div>

            {/* Name */}
            <div style={{ display: 'flex', color: '#c9a84c', fontSize: 72, fontWeight: 700, marginBottom: 24 }}>
              {name}{reversed ? ' (Reversed)' : ''}
            </div>

            {/* Keywords */}
            <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 28 }}>
              {kws.map((kw, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    paddingTop: 6,
                    paddingRight: 18,
                    paddingBottom: 6,
                    paddingLeft: 18,
                    marginRight: 10,
                    marginBottom: 10,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: 'rgba(201,168,76,0.35)',
                    color: 'rgba(201,168,76,0.9)',
                    fontSize: 16,
                  }}
                >
                  {kw}
                </div>
              ))}
            </div>

            {/* Text */}
            <div style={{ display: 'flex', color: 'rgba(255,255,255,0.5)', fontSize: 20, lineHeight: 1.6, marginBottom: 32 }}>
              {text}
            </div>

            {/* Branding */}
            <div style={{ display: 'flex', color: 'rgba(201,168,76,0.3)', fontSize: 16 }}>
              tarotify.app
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
