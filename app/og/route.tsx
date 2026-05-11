import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: 1200,
          height: 630,
          background: '#1a0a2e',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#c9a84c',
          fontSize: 60,
        }}
      >
        tarotify.app
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
