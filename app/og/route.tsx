import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const name = searchParams.get('n') ?? 'Tarot'
    const suit = searchParams.get('s') ?? ''

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            width: 1200,
            height: 630,
            background: '#0d0a1f',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ color: '#c9a84c', fontSize: 72, fontWeight: 700 }}>
              {name}
            </div>
            <div style={{ color: 'rgba(201,168,76,0.5)', fontSize: 20 }}>
              {suit}
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
