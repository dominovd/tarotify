'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { CARDS, type Card } from '@/lib/cards'
import CardImage from '@/components/CardImage'

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
    if (!window.confirm('Delete this journal entry?')) return
    persist(entries.filter((_, i) => i !== idx))
  }

  function clearAll() {
    if (!window.confirm('Delete all journal entries? This cannot be undone.')) return
    persist([])
    try { localStorage.removeItem(JOURNAL_KEY) } catch { /* ignore */ }
  }

  function exportJson() {
    try {
      const blob = new Blob([JSON.stringify(entries, null, 2)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `tarotaxis-journal-${new Date().toISOString().slice(0, 10)}.json`
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
      setFeedback('Exported as JSON')
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
        <p style={{ color: 'var(--muted)' }}>Opening your journal…</p>
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
          Your Tarot Journal
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '0.95rem', maxWidth: 560, margin: '0 auto' }}>
          The readings you have saved on this device. Stored locally — nothing uploaded.
        </p>
      </header>

      {/* Empty state */}
      {entries.length === 0 && (
        <section style={{
          background: 'rgba(255,255,255,.025)',
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
            No saved readings yet
          </h2>
          <p style={{ color: 'var(--text)', fontSize: '0.92rem', lineHeight: 1.7, maxWidth: 460, margin: '0 auto 1.5rem' }}>
            When you save a reading from the home page or the Reading Analyser, it will appear here. Your journal grows quietly in the background as you practise.
          </p>
          <div style={{ display: 'flex', gap: '0.65rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.85rem',
              color: 'var(--gold)',
              border: '1px solid var(--gold)',
              borderRadius: 8,
              padding: '0.65rem 1.3rem',
              textDecoration: 'none',
              letterSpacing: '0.05em',
            }}>
              Draw three cards →
            </Link>
            <Link href="/reading-analysis" style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.85rem',
              color: 'var(--muted)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '0.65rem 1.3rem',
              textDecoration: 'none',
              letterSpacing: '0.05em',
            }}>
              Analyse a home reading →
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
              placeholder="Search by card, question or note…"
              style={{
                flex: 1,
                minWidth: 180,
                fontFamily: "'Cinzel',serif",
                fontSize: '0.85rem',
                background: 'rgba(255,255,255,.04)',
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
              Export
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
              Clear all
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
              ? `${filtered.length} of ${entries.length} ${entries.length === 1 ? 'entry' : 'entries'}`
              : `${entries.length} ${entries.length === 1 ? 'entry' : 'entries'}`}
            {feedback && (
              <span style={{ color: '#5fc18a', marginLeft: 12 }}>✓ {feedback}</span>
            )}
          </p>

          {/* Filtered empty */}
          {filtered.length === 0 && (
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', textAlign: 'center', padding: '2rem' }}>
              No entries match &ldquo;{filter}&rdquo;.
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
                  background: 'rgba(255,255,255,.025)',
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
                      {entry.date}
                    </span>
                    <button
                      onClick={() => deleteEntry(originalIdx)}
                      aria-label="Delete entry"
                      title="Delete entry"
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
                      Delete
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
                          background: 'rgba(255,255,255,.03)',
                          border: '1px solid var(--border)',
                          borderRadius: 20,
                          padding: '0.2rem 0.65rem 0.2rem 0.3rem',
                          textDecoration: 'none',
                          transition: 'border-color .15s',
                        }

                        return chip.card ? (
                          <Link key={i} href={`/cards/${chip.card.slug}${chip.reversed ? '/reversed' : ''}`} style={chipStyle}>
                            {content}
                          </Link>
                        ) : (
                          <span key={i} style={chipStyle}>{content}</span>
                        )
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
                          {isExpanded ? 'Show less' : 'Read more →'}
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
              href="/reading-analysis"
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
              Analyse a new reading →
            </Link>
            <Link
              href="/tarot-journal"
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
              How to keep a tarot journal
            </Link>
          </div>
        </>
      )}

      {/* About / privacy note */}
      <section style={{
        background: 'rgba(255,255,255,.025)',
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
          Where your journal lives
        </h2>
        <p style={{ color: 'var(--text)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>
          Every entry is stored only in this browser, on this device — TarotAxis has no account system and no server-side copy. That means your readings are private, but it also means clearing your site data, switching browsers or changing devices will not bring them with you. Use the Export button to keep a JSON backup if you want to move them, and consider keeping a paper journal alongside this one.
        </p>
      </section>
    </main>
  )
}
