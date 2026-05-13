import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const slug    = searchParams.get('slug')  ?? 'the-fool'
    const name    = searchParams.get('n')     ?? 'Tarot'
    const suit    = searchParams.get('s')     ?? ''
    const element = searchParams.get('e')     ?? ''
    const kws     = (searchParams.get('k') ?? '').split(',').filter(Boolean).slice(0, 4)
    const text    = searchParams.get('t')     ?? ''
    const reversed = searchParams.get('rev')  === '1'
    const type    = searchParams.get('type')  ?? ''
    const daily   = type === 'daily'
    const feelings = type === 'feelings'

    const label = [daily ? 'Card of the Day' : feelings ? 'In a Feelings Reading' : '', suit, element].filter(Boolean).join('  ·  ')

    // Pre-fetch image as base64 — satori cannot load images from the same domain via URL
    let imgSrc = ''
    try {
      const res = await fetch(`https://tarotaxis.com/cards/${slug}.webp`)
      if (res.ok) {
        const buf = await res.arrayBuffer()
        const bytes = new Uint8Array(buf)
        let str = ''
        for (let i = 0; i < bytes.length; i += 1024) {
          str += String.fromCharCode(...Array.from(bytes.subarray(i, i + 1024)))
        }
        imgSrc = `data:image/webp;base64,${btoa(str)}`
      }
    } catch {
      // image stays empty — container still shows with border
    }

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
              {name}{reversed ? ' (Reversed)' : feelings ? ' as Feelings' : ''}
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
