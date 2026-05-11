import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('n') ?? 'Tarot'

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
          color: '#c9a84c',
          fontSize: 72,
        }}
      >
        {name}
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
