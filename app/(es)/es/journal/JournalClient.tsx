'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { CARDS, type Card } from '@/lib/cards'
import { localizeCardSlug } from '@/lib/i18n/slugs'
import CardImage from '@/components/CardImage'
import EmailCapture from '@/components/EmailCapture'

// localStorage key shared with EN — do NOT change.
const JOURNAL_KEY = 'tarotify_journal'
const REVERSED_SUFFIX = ' (Reversed)'

interface JournalEntry {
  date: string
  question: string
  cards: string[]
  reading: string
}

interface CardChip {
  raw: string
  cleanName: string
  reversed: boolean
  card: Card | null
}

function isJournalEntry(e: unknown): e is JournalEntry {
  if (!e || typeof e !== 'object') return false
  const x = e as Record<string, unknown>
  return (
    typeof x.date === 'string' &&
    typeof x.question === 'string' &&
    Array.isArray(x.cards) &&
    x.cards.every(c => typeof c === 'string') &&
    typeof x.reading === 'string'
  )
}

function parseCardChip(raw: string, cardByName: Map<string, Card>): CardChip {
  const reversed = raw.endsWith(REVERSED_SUFFIX)
  const cleanName = reversed ? raw.slice(0, -REVERSED_SUFFIX.length) : raw
  return { raw, cleanName, reversed, card: cardByName.get(cleanName) || null }
}

function formatDateEs(dateStr: string): string {
  // Try to parse and format in Spanish; fall back to raw string.
  const d = new Date(dateStr)
  if (Number.isNaN(d.getTime())) return dateStr
  try {
    return d.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return dateStr
  }
}

export default function JournalClient() {
  const [entries, setEntries] = useState<JournalEntry[]>([])
  const [hydrated, setHydrated] = useState(false)
  const [filter, setFilter] = useState('')
  const [feedback, setFeedback] = useState<string | null>(null)
  const [expanded, setExpanded] = useState<Set<number>>(new Set())

  const cardByName = useMemo(() => {
    const m = new Map<string, Card>()
    CARDS.forEach(c => m.set(c.name, c))
    return m
  }, [])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(JOURNAL_KEY) || '[]'
      const parsed: unknown = JSON.parse(raw)
      if (Array.isArray(parsed)) {
        setEntries(parsed.filter(isJournalEntry))
      }
    } catch {
      /* ignore */
    }
    setHydrated(true)
  }, [])

  function persist(next: JournalEntry[]) {
    setEntries(next)
    try { localStorage.setItem(JOURNAL_KEY, JSON.stringify(next)) } catch { /* ignore */ }
  }

  function deleteEntry(idx: number) {
    if (!window.confirm('¿Eliminar esta entrada del diario?')) return
    persist(entries.filter((_, i) => i !== idx))
  }

  function clearAll() {
    if (!window.confirm('¿Eliminar todas las entradas del diario? Esto no se puede deshacer.')) return
    persist([])
    try { localStorage.removeItem(JOURNAL_KEY) } catch { /* ignore */ }
  }

  function exportJson() {
    try {
      const blob = new Blob([JSON.stringify(entries, null, 2)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `tarotaxis-diario-${new Date().toISOString().slice(0, 10)}.json`
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
      setFeedback('Exportado como JSON')
      setTimeout(() => setFeedback(null), 2200)
    } catch {
      /* ignore */
    }
  }

  function toggleExpand(idx: number) {
    setExpanded(prev => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx); else next.add(idx)
      return next
    })
  }

  const filtered = useMemo(() => {
    if (!filter) return entries.map((e, i) => ({ entry: e, originalIdx: i }))
    const q = filter.toLowerCase()
    return entries
      .map((e, i) => ({ entry: e, originalIdx: i }))
      .filter(({ entry }) =>
        (entry.question || '').toLowerCase().includes(q) ||
        entry.cards.some(c => c.toLowerCase().includes(q)) ||
        (entry.reading || '').toLowerCase().includes(q),
      )
  }, [entries, filter])

  if (!hydrated) {
    return (
      <main style={{ maxWidth: 820, margin: '0 auto', padding: '3rem 1.5rem 5rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--muted)' }}>Abriendo tu diario…</p>
      </main>
    )
  }

  return (
    <main style={{ maxWidth: 820, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

      {/* Hero */}
      <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '2rem', marginBottom: '0.4rem' }}>📓</div>
        <h1 style={{
          fontFamily: "'Cinzel',serif",
          fontSize: 'clamp(1.6rem, 4.2vw, 2.2rem)',
          color: 'var(--gold)',
          marginBottom: '0.5rem',
          letterSpacing: '0.04em',
        }}>
          Tu Diario de Tarot
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '0.95rem', maxWidth: 560, margin: '0 auto' }}>
          Las lecturas que has guardado en este dispositivo. Almacenado localmente — nada subido.
        </p>
      </header>

      {/* Empty state */}
      {entries.length === 0 && (
        <section style={{
          background: 'var(--on-bg-025)',
          border: '1px solid var(--border)',
          borderRadius: 14,
          padding: '2.5rem 1.75rem',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '0.6rem', opacity: 0.6 }}>🜂</div>
          <h2 style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '1.05rem',
            color: 'var(--gold)',
            letterSpacing: '0.04em',
            marginBottom: '0.65rem',
          }}>
            Aún no hay lecturas guardadas
          </h2>
          <p style={{ color: 'var(--text)', fontSize: '0.92rem', lineHeight: 1.7, maxWidth: 460, margin: '0 auto 1.5rem' }}>
            Cuando guardes una lectura desde la página principal o el Analizador de Lecturas, aparecerá aquí. Tu diario crece silenciosamente en segundo plano a medida que practicas.
          </p>
          <div style={{ display: 'flex', gap: '0.65rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/es" style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.85rem',
              color: 'var(--gold)',
              border: '1px solid var(--gold)',
              borderRadius: 8,
              padding: '0.65rem 1.3rem',
              textDecoration: 'none',
              letterSpacing: '0.05em',
            }}>
              Prueba una lectura gratis →
            </Link>
            <Link href="/es/lectura-gratis" style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.85rem',
              color: 'var(--muted)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '0.65rem 1.3rem',
              textDecoration: 'none',
              letterSpacing: '0.05em',
            }}>
              Tirada de tres cartas →
            </Link>
          </div>
        </section>
      )}

      {/* Toolbar + entries */}
      {entries.length > 0 && (
        <>
          {/* Toolbar */}
          <div style={{
            display: 'flex',
            gap: '0.6rem',
            marginBottom: '1rem',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}>
            <input
              type="text"
              value={filter}
              onChange={e => setFilter(e.target.value)}
              placeholder="Busca por carta, pregunta o nota…"
              style={{
                flex: 1,
                minWidth: 180,
                fontFamily: "'Cinzel',serif",
                fontSize: '0.85rem',
                background: 'var(--on-bg-04)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                color: 'var(--text)',
                padding: '0.55rem 0.85rem',
                letterSpacing: '0.03em',
              }}
            />
            <button
              onClick={exportJson}
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: '0.78rem',
                color: 'var(--gold)',
                background: 'transparent',
                border: '1px solid var(--gold)',
                borderRadius: 8,
                padding: '0.55rem 1rem',
                cursor: 'pointer',
                letterSpacing: '0.05em',
              }}
            >
              Exportar
            </button>
            <button
              onClick={clearAll}
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: '0.78rem',
                color: '#e07b7b',
                background: 'transparent',
                border: '1px solid rgba(224,123,123,.5)',
                borderRadius: 8,
                padding: '0.55rem 1rem',
                cursor: 'pointer',
                letterSpacing: '0.05em',
              }}
            >
              Borrar todo
            </button>
          </div>

          {/* Stats line */}
          <p style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '0.72rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: '1.25rem',
          }}>
            {filter
              ? `${filtered.length} de ${entries.length} ${entries.length === 1 ? 'entrada' : 'entradas'}`
              : `${entries.length} ${entries.length === 1 ? 'entrada' : 'entradas'}`}
            {feedback && (
              <span style={{ color: '#5fc18a', marginLeft: 12 }}>✓ {feedback}</span>
            )}
          </p>

          {/* Filtered empty */}
          {filtered.length === 0 && (
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', textAlign: 'center', padding: '2rem' }}>
              Ninguna entrada coincide con &ldquo;{filter}&rdquo;.
            </p>
          )}

          {/* Entries */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filtered.map(({ entry, originalIdx }) => {
              const chips = entry.cards.map(c => parseCardChip(c, cardByName))
              const isExpanded = expanded.has(originalIdx)
              const readingPreview = entry.reading.length > 280 && !isExpanded
                ? entry.reading.slice(0, 280).trimEnd() + '…'
                : entry.reading

              return (
                <article key={originalIdx} style={{
                  background: 'var(--on-bg-025)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: '1.25rem 1.4rem',
                }}>
                  {/* Header */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    gap: '0.75rem',
                    flexWrap: 'wrap',
                    marginBottom: '0.6rem',
                  }}>
                    <span style={{
                      fontFamily: "'Cinzel',serif",
                      fontSize: '0.72rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--muted)',
                    }}>
                      {formatDateEs(entry.date)}
                    </span>
                    <button
                      onClick={() => deleteEntry(originalIdx)}
                      aria-label="Eliminar entrada"
                      title="Eliminar entrada"
                      style={{
                        fontFamily: "'Cinzel',serif",
                        fontSize: '0.7rem',
                        letterSpacing: '0.06em',
                        color: '#e07b7b',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0.2rem 0.4rem',
                      }}
                    >
                      Eliminar
                    </button>
                  </div>

                  {/* Question */}
                  {entry.question && (
                    <h2 style={{
                      fontFamily: "'Cinzel',serif",
                      fontSize: '1rem',
                      color: 'var(--gold)',
                      letterSpacing: '0.03em',
                      marginBottom: '0.85rem',
                      lineHeight: 1.4,
                    }}>
                      {entry.question}
                    </h2>
                  )}

                  {/* Card chips */}
                  {chips.length > 0 && (
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '0.85rem',
                    }}>
                      {chips.map((chip, i) => {
                        const content = (
                          <>
                            {chip.card && (
                              <span style={{
                                width: 22,
                                aspectRatio: '2/3',
                                borderRadius: 3,
                                overflow: 'hidden',
                                border: '1px solid var(--border)',
                                flexShrink: 0,
                              }}>
                                <CardImage slug={chip.card.slug} alt={chip.cleanName} reversed={chip.reversed} />
                              </span>
                            )}
                            <span style={{
                              fontFamily: "'Cinzel',serif",
                              fontSize: '0.78rem',
                              letterSpacing: '0.03em',
                              color: 'var(--text)',
                            }}>
                              {chip.cleanName}
                            </span>
                            {chip.reversed && (
                              <span style={{
                                fontSize: '0.6rem',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                color: '#e07b7b',
                                fontFamily: "'Cinzel',serif",
                              }}>
                                R
                              </span>
                            )}
                          </>
                        )

                        const chipStyle: React.CSSProperties = {
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          background: 'var(--on-bg-03)',
                          border: '1px solid var(--border)',
                          borderRadius: 20,
                          padding: '0.2rem 0.65rem 0.2rem 0.3rem',
                          textDecoration: 'none',
                          transition: 'border-color .15s',
                        }

                        // Cards stored on Spanish journal entries use English
                        // canonical names (CARDS lookup). Link to the
                        // localised Spanish card route via slug map.
                        if (chip.card) {
                          const esSlug = localizeCardSlug(chip.card.slug, 'es')
                          const href = chip.reversed
                            ? `/es/cartas/${esSlug}/invertida`
                            : `/es/cartas/${esSlug}`
                          return (
                            <Link key={i} href={href} style={chipStyle}>
                              {content}
                            </Link>
                          )
                        }
                        return <span key={i} style={chipStyle}>{content}</span>
                      })}
                    </div>
                  )}

                  {/* Reading */}
                  {entry.reading && (
                    <>
                      <p style={{
                        color: 'var(--text)',
                        fontSize: '0.92rem',
                        lineHeight: 1.7,
                        margin: 0,
                        whiteSpace: 'pre-wrap',
                      }}>
                        {readingPreview}
                      </p>
                      {entry.reading.length > 280 && (
                        <button
                          onClick={() => toggleExpand(originalIdx)}
                          style={{
                            fontFamily: "'Cinzel',serif",
                            fontSize: '0.76rem',
                            color: 'var(--gold)',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0.5rem 0 0',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {isExpanded ? 'Mostrar menos' : 'Leer más →'}
                        </button>
                      )}
                    </>
                  )}
                </article>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)',
          }}>
            <Link
              href="/es/lectura-gratis"
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: '0.85rem',
                color: 'var(--gold)',
                border: '1px solid var(--gold)',
                borderRadius: 8,
                padding: '0.7rem 1.4rem',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
            >
              Prueba una lectura gratis →
            </Link>
            <Link
              href="/es"
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: '0.85rem',
                color: 'var(--muted)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                padding: '0.7rem 1.4rem',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
            >
              Volver al inicio
            </Link>
          </div>
        </>
      )}

      {/* About / privacy note */}
      <section style={{
        background: 'var(--on-bg-025)',
        border: '1px solid var(--border)',
        borderRadius: 14,
        padding: '1.5rem 1.6rem',
        marginTop: '3rem',
      }}>
        <h2 style={{
          fontFamily: "'Cinzel',serif",
          fontSize: '0.95rem',
          color: 'var(--gold)',
          letterSpacing: '0.05em',
          marginBottom: '0.6rem',
        }}>
          Dónde vive tu diario
        </h2>
        <p style={{ color: 'var(--text)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>
          Cada entrada se guarda solo en este navegador, en este dispositivo — TarotAxis no tiene una copia en el servidor para entradas locales. Eso significa que tus lecturas son privadas, pero también que borrar los datos del sitio, cambiar de navegador o de dispositivo no las traerá contigo. Usa el botón Exportar para mantener una copia JSON si quieres moverlas, y considera llevar un diario en papel junto a este.
        </p>
      </section>

      <div style={{ marginTop: '1.5rem' }}>
        <EmailCapture
          source="journal-es"
          compact
          headline="Añade una carta diaria a tu práctica"
          copy="Una breve reflexión en tu bandeja de entrada cada mañana — un impulso regular para nuevas entradas del diario."
          cta="Suscribirse"
        />
      </div>
    </main>
  )
}
