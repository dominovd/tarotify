import type { ReactNode } from 'react'

// ════════════════════════════════════════════════════════════════════════════
// RenderedReading — display a tarot reading body with our markdown dialect.
// ════════════════════════════════════════════════════════════════════════════
//
//   ## Heading        →  <h3>   (Cinzel, gold)
//   **bold**          →  <strong> in gold
//   - bullet          →  <li>
//   blank line        →  paragraph break
//   everything else   →  <p>
//
// Forgiving of partial mid-stream chunks. Pass `streaming` to render a
// blinking cursor at the end while tokens are still arriving.
//
// Used by AIReadingBlock (live streaming) and JournalClient (saved
// readings). Template-generated readings (HomeClient template, etc.) have
// no markdown — they fall through as paragraphs and render correctly.
// ════════════════════════════════════════════════════════════════════════════

interface Props {
  text: string
  /** When true, render a blinking gold cursor at the very end. */
  streaming?: boolean
  /** Optional font-size override — journal uses smaller text than the live
   *  block. Anything passes through to `<p>` and `<li>`. */
  fontSize?: string
}

export default function RenderedReading({ text, streaming, fontSize }: Props) {
  const blocks: ReactNode[] = []
  const lines = text.split('\n')
  let listBuf: string[] = []

  const flushList = () => {
    if (listBuf.length === 0) return
    blocks.push(
      <ul key={`l-${blocks.length}`} style={{
        margin: '0 0 1rem',
        paddingLeft: '1.2rem',
        color: 'var(--text)',
      }}>
        {listBuf.map((item, i) => (
          <li key={i} style={{ marginBottom: '.4rem', lineHeight: 1.6, fontSize: fontSize ?? '.95rem' }}>
            {renderInline(item)}
          </li>
        ))}
      </ul>,
    )
    listBuf = []
  }

  for (const line of lines) {
    if (line.startsWith('## ')) {
      flushList()
      blocks.push(
        <h3 key={`h-${blocks.length}`} style={{
          fontFamily: "'Cinzel',serif",
          color: 'var(--gold)',
          fontSize: '1.05rem',
          letterSpacing: '.04em',
          marginTop: blocks.length === 0 ? 0 : '1.6rem',
          marginBottom: '.7rem',
        }}>
          {line.slice(3)}
        </h3>,
      )
    } else if (line.trimStart().startsWith('- ')) {
      listBuf.push(line.trimStart().slice(2))
    } else if (line.trim() === '') {
      flushList()
    } else {
      flushList()
      blocks.push(
        <p key={`p-${blocks.length}`} style={{
          color: 'var(--text)',
          fontSize: fontSize ?? '.95rem',
          lineHeight: 1.7,
          marginBottom: '.85rem',
        }}>
          {renderInline(line)}
        </p>,
      )
    }
  }
  flushList()

  return (
    <div style={{ position: 'relative' }}>
      {blocks}
      {streaming && (
        <span
          aria-hidden
          style={{
            display: 'inline-block',
            width: 8, height: 14,
            verticalAlign: 'text-bottom',
            background: 'var(--gold)',
            opacity: .8,
            animation: 'ai-blink 1s steps(2, end) infinite',
            marginLeft: 2,
          }}
        />
      )}
      <style>{`
        @keyframes ai-blink { 50% { opacity: 0; } }
      `}</style>
    </div>
  )
}

/** Render a single line's inline syntax: **bold** → <strong>. */
function renderInline(line: string): ReactNode[] {
  const out: ReactNode[] = []
  const re = /\*\*(.+?)\*\*/g
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(line)) !== null) {
    if (m.index > last) out.push(line.slice(last, m.index))
    out.push(
      <strong key={`b-${m.index}`} style={{ color: 'var(--gold)', fontWeight: 600 }}>
        {m[1]}
      </strong>,
    )
    last = re.lastIndex
  }
  if (last < line.length) out.push(line.slice(last))
  return out
}

/** True if the reading uses our markdown dialect (## or ** markers). */
export function hasMarkdownMarkers(text: string): boolean {
  return /^##\s/m.test(text) || /\*\*.+?\*\*/.test(text)
}
