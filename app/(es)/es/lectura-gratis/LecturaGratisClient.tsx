'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CARDS } from '@/lib/cards'
import { localizeCardSlug } from '@/lib/i18n/slugs'
import CardImage from '@/components/CardImage'
import AIReadingBlock, { type AIReadingCard } from '@/components/AIReadingBlock'

interface Props {
  cardNamesEs: Record<string, string>
  cardKeywordsEs: Record<string, string[]>
}

type DrawnCard = { slug: string; flipped: boolean; reversed: boolean }

const POSITIONS = ['Pasado', 'Presente', 'Futuro'] as const

const TEMPLATE =
  `Tus tres cartas conversan sobre dónde has estado, dónde estás y hacia dónde te diriges. ` +
  `{past_name} en la posición del pasado lleva la energía de {past_kw} — esta es la fuerza que ha estado dando forma al terreno bajo tus pies. ` +
  `{present_name} describe la realidad viva de tu momento presente: {present_kw} es la energía disponible para ti ahora mismo, esperando ser usada con sabiduría. ` +
  `{future_name} ilumina el camino que tienes por delante con los temas de {future_theme}. ` +
  `Lo que destaca en esta tirada es el movimiento que describe — de {past_kw} a través de {present_kw} hacia {future_theme}. ` +
  `Sostén esta tirada con ligereza pero tómala en serio. Las tres cartas juntas forman un mensaje único — lee la línea que las atraviesa, no solo los significados individuales.`

function getInterpretation(
  cards: DrawnCard[],
  cardNamesEs: Record<string, string>,
  cardKeywordsEs: Record<string, string[]>,
): string {
  const [past, present, future] = cards
  const pastKw = (cardKeywordsEs[past.slug] ?? []).slice(0, 2).join(' y ')
  const presentKw = (cardKeywordsEs[present.slug] ?? []).slice(0, 2).join(' y ')
  const futureKw = (cardKeywordsEs[future.slug] ?? []).slice(0, 2).join(' y ')
  const futureTheme = (cardKeywordsEs[future.slug] ?? []).slice(0, 3).join(', ')
  return TEMPLATE
    .replace(/{past_name}/g, cardNamesEs[past.slug] ?? past.slug)
    .replace(/{past_kw}/g, pastKw)
    .replace(/{present_name}/g, cardNamesEs[present.slug] ?? present.slug)
    .replace(/{present_kw}/g, presentKw)
    .replace(/{future_name}/g, cardNamesEs[future.slug] ?? future.slug)
    .replace(/{future_kw}/g, futureKw)
    .replace(/{future_theme}/g, futureTheme)
}

export default function LecturaGratisClient({ cardNamesEs, cardKeywordsEs }: Props) {
  const [question, setQuestion] = useState('')
  const [screen, setScreen] = useState<'home' | 'draw' | 'reading'>('home')
  const [drawn, setDrawn] = useState<DrawnCard[]>([])
  const [allFlipped, setAllFlipped] = useState(false)
  const [interpretation, setInterpretation] = useState('')
  const [typing, setTyping] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const [saved, setSaved] = useState(false)

  function drawCards() {
    const shuffled = [...CARDS].sort(() => Math.random() - 0.5)
    const three: DrawnCard[] = shuffled.slice(0, 3).map(c => ({
      slug: c.slug,
      flipped: false,
      reversed: Math.random() < 0.35,
    }))
    setDrawn(three)
    setAllFlipped(false)
    setInterpretation('')
    setDisplayText('')
    setSaved(false)
    setScreen('draw')
  }

  function flipCard(i: number) {
    setDrawn(prev => {
      const next = [...prev]
      next[i] = { ...next[i], flipped: true }
      if (next.every(c => c.flipped)) setAllFlipped(true)
      return next
    })
  }

  function revealAll() {
    setDrawn(prev => prev.map(c => ({ ...c, flipped: true })))
    setAllFlipped(true)
  }

  function getReading() {
    const text = getInterpretation(drawn, cardNamesEs, cardKeywordsEs)
    setInterpretation(text)
    setDisplayText('')
    setTyping(true)
    setScreen('reading')
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayText(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(interval)
        setTyping(false)
      }
    }, 18)
  }

  function saveToJournal() {
    if (typeof window === 'undefined') return
    try {
      const entries = JSON.parse(localStorage.getItem('tarotify_journal') || '[]')
      entries.unshift({
        date: new Date().toLocaleDateString('es-ES'),
        question: question || '(sin pregunta)',
        cards: drawn.map(d => `${cardNamesEs[d.slug] ?? d.slug}${d.reversed ? ' (Invertida)' : ''}`),
        reading: interpretation,
      })
      localStorage.setItem('tarotify_journal', JSON.stringify(entries.slice(0, 20)))
      setSaved(true)
    } catch {
      /* localStorage unavailable — fail silently */
    }
  }

  function newReading() {
    setScreen('home')
    setDrawn([])
    setAllFlipped(false)
    setInterpretation('')
    setDisplayText('')
    setSaved(false)
  }

  const g = 'var(--gold)'
  const m = 'var(--muted)'
  const b = 'var(--border)'

  // ── HOME ────────────────────────────────────────────────────────────────
  if (screen === 'home') {
    return (
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '3rem 1.5rem 5rem', textAlign: 'center' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: 0.8 }}>🌙</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.6rem,4vw,2.4rem)', color: g, marginBottom: '.75rem', lineHeight: 1.3 }}>
          Lectura de Tarot Gratis con IA
        </h1>
        <p style={{ color: m, maxWidth: 540, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          Saca tres cartas para una tirada de pasado, presente y futuro y recibe una interpretación con IA personalizada. Sin tarjeta. Tu pregunta es opcional pero ayuda a enfocar las cartas.
        </p>

        <div style={{ background: 'var(--on-bg-03)', border: `1px solid ${b}`, borderRadius: 14, padding: '1.5rem', marginBottom: '1.5rem', textAlign: 'left' }}>
          <label htmlFor="question" style={{ display: 'block', fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: g, opacity: 0.7, textTransform: 'uppercase', marginBottom: '.75rem' }}>
            Tu pregunta (opcional)
          </label>
          <textarea
            id="question"
            value={question}
            onChange={e => setQuestion(e.target.value)}
            placeholder="ej. ¿Qué necesito saber sobre esta nueva relación?"
            style={{ width: '100%', background: 'var(--on-bg-04)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 10, color: 'var(--text)', fontFamily: "'Lato',sans-serif", fontSize: '1rem', padding: '1rem', resize: 'none', height: 90, outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        <button
          onClick={drawCards}
          style={{ display: 'block', width: '100%', padding: '1rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: `1px solid ${g}`, borderRadius: 12, color: g, fontFamily: "'Cinzel',serif", fontSize: '1rem', letterSpacing: '.1em', cursor: 'pointer' }}
        >
          ✦ Sacar tres cartas
        </button>
      </div>
    )
  }

  // ── DRAW ────────────────────────────────────────────────────────────────
  if (screen === 'draw') {
    return (
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1rem 5rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: g, marginBottom: '.5rem', fontSize: '1.1rem', letterSpacing: '.08em' }}>
          Tu tirada de tres cartas
        </h2>
        {question && (
          <p style={{ color: m, fontSize: '.9rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>
            &ldquo;{question}&rdquo;
          </p>
        )}
        <p style={{ color: m, fontSize: '.82rem', marginBottom: '2rem' }}>
          Toca cada carta para revelarla
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {drawn.map((d, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.75rem' }}>
              <div style={{ fontSize: '.72rem', fontFamily: "'Cinzel',serif", letterSpacing: '.12em', color: m, textTransform: 'uppercase' }}>
                {POSITIONS[i]}
              </div>
              <div
                onClick={() => !d.flipped && flipCard(i)}
                style={{ width: 140, height: 220, perspective: 1000, cursor: d.flipped ? 'default' : 'pointer' }}
              >
                <div style={{ width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d', transition: 'transform .7s cubic-bezier(.4,0,.2,1)', transform: d.flipped ? 'rotateY(180deg)' : 'none' }}>
                  <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', borderRadius: 12, background: 'linear-gradient(145deg,#1a1a3a,#0d0d2b)', border: '2px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', opacity: 0.3 }}>
                    ☽✦☾
                  </div>
                  <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', borderRadius: 12, overflow: 'hidden', border: '2px solid rgba(201,168,76,.4)' }}>
                    <CardImage slug={d.slug} alt={cardNamesEs[d.slug] ?? d.slug} reversed={d.reversed} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '.5rem .4rem', background: 'linear-gradient(to top, rgba(0,0,0,.9) 0%, transparent 100%)', textAlign: 'center' }}>
                      <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', color: '#e8d5a0', letterSpacing: '.06em' }}>
                        {cardNamesEs[d.slug] ?? d.slug}
                      </div>
                      {d.reversed && (
                        <div style={{ fontSize: '.5rem', color: '#c9a84c', letterSpacing: '.08em', textTransform: 'uppercase', marginTop: 1 }}>
                          Invertida
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!allFlipped && (
          <button
            onClick={revealAll}
            style={{ marginBottom: '1rem', padding: '.7rem 1.5rem', background: 'transparent', border: `1px solid ${b}`, borderRadius: 10, color: m, fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', cursor: 'pointer' }}
          >
            Revelar todas
          </button>
        )}
        {allFlipped && (
          <button
            onClick={getReading}
            style={{ display: 'block', width: '100%', maxWidth: 400, margin: '0 auto', padding: '1rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: `1px solid ${g}`, borderRadius: 12, color: g, fontFamily: "'Cinzel',serif", fontSize: '1rem', letterSpacing: '.1em', cursor: 'pointer' }}
          >
            ✦ Recibir la lectura
          </button>
        )}
      </div>
    )
  }

  // ── READING ─────────────────────────────────────────────────────────────
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      <h2 style={{ fontFamily: "'Cinzel',serif", color: g, textAlign: 'center', marginBottom: '.5rem', letterSpacing: '.08em' }}>
        Tu lectura
      </h2>
      {question && (
        <p style={{ color: m, textAlign: 'center', fontSize: '.9rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>
          &ldquo;{question}&rdquo;
        </p>
      )}

      <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
        {drawn.map((d, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.4rem', padding: '.75rem', background: 'rgba(201,168,76,.06)', border: `1px solid ${b}`, borderRadius: 10, minWidth: 100 }}>
            <div style={{ width: 56, height: 84, borderRadius: 6, overflow: 'hidden', border: '1px solid rgba(201,168,76,.3)', flexShrink: 0 }}>
              <CardImage slug={d.slug} alt={cardNamesEs[d.slug] ?? d.slug} reversed={d.reversed} />
            </div>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.7rem', color: g, letterSpacing: '.06em', textAlign: 'center' }}>
              {cardNamesEs[d.slug] ?? d.slug}
            </div>
            <div style={{ fontSize: '.6rem', color: m, textTransform: 'uppercase', letterSpacing: '.08em' }}>
              {POSITIONS[i]}
            </div>
            {d.reversed && (
              <div style={{ fontSize: '.55rem', color: m, opacity: 0.7, textTransform: 'uppercase', letterSpacing: '.06em' }}>
                Invertida
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ background: 'var(--on-bg-03)', border: `1px solid ${b}`, borderRadius: 14, padding: '1.75rem', marginBottom: '1.5rem' }}>
        <h3 style={{ fontFamily: "'Cinzel',serif", color: g, marginBottom: '1rem', fontSize: '.9rem', letterSpacing: '.1em' }}>
          ✦ Tu reflexión
        </h3>
        {typing ? (
          <p style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.97rem' }}>
            {displayText}
            <span style={{ animation: 'blink 1s infinite' }}>|</span>
          </p>
        ) : (
          <p style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.97rem' }}>{displayText}</p>
        )}
      </div>

      {!typing && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '.75rem', marginBottom: '1.5rem' }}>
            {drawn.map((d, i) => (
              <Link
                key={i}
                href={`/es/cartas/${localizeCardSlug(d.slug, 'es')}`}
                style={{ padding: '1rem', background: 'var(--on-bg-02)', border: `1px solid ${b}`, borderRadius: 10, textDecoration: 'none' }}
              >
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.7rem', color: g, opacity: 0.65, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '.4rem' }}>
                  {POSITIONS[i]}
                </div>
                <div style={{ fontSize: '.85rem', color: 'var(--text)', marginBottom: '.4rem' }}>
                  {cardNamesEs[d.slug] ?? d.slug}
                </div>
                <div style={{ fontSize: '.72rem', color: g, opacity: 0.75 }}>
                  Significado completo de {cardNamesEs[d.slug] ?? d.slug} →
                </div>
              </Link>
            ))}
          </div>

          {/* AI Reading block — Spanish */}
          <AIReadingBlock
            locale="es"
            source="free-reading"
            spreadName="Pasado · Presente · Futuro"
            cards={drawn.map((d, i): AIReadingCard => ({
              slug: d.slug,
              reversed: d.reversed,
              position: POSITIONS[i],
            }))}
            question={question.trim() || undefined}
          />

          <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <button
              onClick={saveToJournal}
              disabled={saved}
              style={{ flex: 1, minWidth: 140, padding: '.85rem', background: 'transparent', border: `1px solid ${b}`, borderRadius: 10, color: m, fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.06em', cursor: saved ? 'default' : 'pointer', opacity: saved ? 0.7 : 1 }}
            >
              {saved ? 'Guardado en el diario' : '📓 Guardar en el diario'}
            </button>
            <button
              onClick={newReading}
              style={{ flex: 1, minWidth: 140, padding: '.85rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: `1px solid ${g}`, borderRadius: 10, color: g, fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.06em', cursor: 'pointer' }}
            >
              Nueva lectura
            </button>
          </div>
        </>
      )}

      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </div>
  )
}
