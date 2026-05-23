'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { CARDS, CARDS_BY_SLUG, type Card } from '@/lib/cards'
import CardImage from '@/components/CardImage'
import EmailCapture from '@/components/EmailCapture'
import JournalPatterns from '@/components/JournalPatterns'
import RenderedReading, { hasMarkdownMarkers } from '@/components/RenderedReading'
import { useUser } from '@/hooks/useUser'

const JOURNAL_KEY = 'tarotify_journal'
const REVERSED_SUFFIX = ' (Reversed)'

// ─── unified entry type used by the UI ─────────────────────────────────────
// Local entries come from localStorage (legacy + anonymous), cloud entries
// come from /api/saved-readings (logged-in user). Both share the same render
// shape; `source` + `id`/`localIdx` route deletes to the right backend.
interface UnifiedEntry {
  source: 'local' | 'cloud'
  id?: string         // cloud-only Supabase UUID
  localIdx?: number   // local-only index into the original localStorage array
  date: string
  question: string
  cards: string[]
  reading: string
  /** ISO-ish timestamp for sorting. */
  sortKey: string
}

interface CardChip {
  raw: string
  cleanName: string
  reversed: boolean
  card: Card | null
}

/** Local entries are stored as { date, question, cards: string[], reading }. */
function isLegacyLocalEntry(e: unknown): e is { date: string; question: string; cards: string[]; reading: string } {
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

/** Cloud entry shape returned by /api/saved-readings. */
interface CloudEntry {
  id: string
  created_at: string
  date: string
  question: string | null
  spread_id: string | null
  cards: Array<{ slug: string; reversed: boolean; position?: string | null }> | null
  interpretation: string | null
  notes: string | null
}

function cloudToUnified(e: CloudEntry): UnifiedEntry {
  // Render cards as display strings to share the rendering path with
  // legacy localStorage entries. Format matches the legacy convention so
  // parseCardChip continues to work.
  const cardStrings: string[] = (e.cards ?? []).map(c => {
    const base = CARDS_BY_SLUG[c.slug]
    const name = base?.name ?? c.slug
    const reversed = c.reversed ? REVERSED_SUFFIX : ''
    const pos = c.position ? `${c.position}: ` : ''
    return `${pos}${name}${reversed}`
  })
  return {
    source: 'cloud',
    id: e.id,
    date: e.date,
    question: e.question ?? '',
    cards: cardStrings,
    reading: e.interpretation ?? '',
    sortKey: e.created_at,
  }
}

function parseCardChip(raw: string, cardByName: Map<string, Card>): CardChip {
  // Legacy strings may include "Position: " prefix. Strip it for lookup.
  const withoutSuffix = raw.endsWith(REVERSED_SUFFIX)
    ? raw.slice(0, -REVERSED_SUFFIX.length)
    : raw
  const reversed = raw.endsWith(REVERSED_SUFFIX)
  const colonAt = withoutSuffix.indexOf(': ')
  const cleanName = colonAt >= 0 ? withoutSuffix.slice(colonAt + 2) : withoutSuffix
  return { raw, cleanName, reversed, card: cardByName.get(cleanName) || null }
}

export default function JournalClient() {
  const { user, loading: userLoading } = useUser()
  const [entries, setEntries] = useState<UnifiedEntry[]>([])
  const [hydrated, setHydrated] = useState(false)
  const [filter, setFilter] = useState('')
  const [feedback, setFeedback] = useState<string | null>(null)
  const [expanded, setExpanded] = useState<Set<string>>(new Set())

  const cardByName = useMemo(() => {
    const m = new Map<string, Card>()
    CARDS.forEach(c => m.set(c.name, c))
    return m
  }, [])

  // Load localStorage entries on mount; optionally fetch cloud entries
  // once auth state has settled.
  useEffect(() => {
    let cancelled = false
    async function load() {
      // 1) localStorage (always — works offline + for anon)
      let local: UnifiedEntry[] = []
      try {
        const raw = localStorage.getItem(JOURNAL_KEY) || '[]'
        const parsed: unknown = JSON.parse(raw)
        if (Array.isArray(parsed)) {
          local = parsed
            .map((e, idx): UnifiedEntry | null => {
              if (!isLegacyLocalEntry(e)) return null
              return {
                source: 'local',
                localIdx: idx,
                date: e.date,
                question: e.question,
                cards: e.cards,
                reading: e.reading,
                // localStorage doesn't track a timestamp; use idx for stable
                // ordering (newest entries are unshifted, so idx 0 = newest).
                sortKey: `local-${String(10_000 - idx).padStart(5, '0')}`,
              }
            })
            .filter((e): e is UnifiedEntry => e !== null)
        }
      } catch { /* ignore */ }

      if (cancelled) return

      // 2) cloud entries (if signed in)
      let cloud: UnifiedEntry[] = []
      if (user) {
        try {
          const res = await fetch('/api/saved-readings', { cache: 'no-store' })
          if (res.ok) {
            const body = (await res.json()) as { readings?: CloudEntry[] }
            cloud = (body.readings ?? []).map(cloudToUnified)
          }
        } catch { /* network failure — fall back to localStorage only */ }
      }

      if (cancelled) return

      // Sort merged list: cloud sortKey is ISO timestamp; local sortKey is
      // synthetic. Both descend lexicographically as desired (newer first).
      const merged = [...cloud, ...local].sort((a, b) =>
        a.sortKey < b.sortKey ? 1 : a.sortKey > b.sortKey ? -1 : 0
      )
      setEntries(merged)
      setHydrated(true)
    }
    if (!userLoading) load()
    return () => { cancelled = true }
  }, [user, userLoading])

  function entryKey(e: UnifiedEntry): string {
    return e.source === 'cloud' ? `c-${e.id}` : `l-${e.localIdx}`
  }

  async function deleteEntry(target: UnifiedEntry) {
    if (!window.confirm('Delete this journal entry?')) return
    if (target.source === 'cloud' && target.id) {
      try {
        await fetch(`/api/saved-readings?id=${encodeURIComponent(target.id)}`, {
          method: 'DELETE',
        })
      } catch { /* network — UI removes anyway; cloud retry on reload */ }
      setEntries(prev => prev.filter(e => entryKey(e) !== entryKey(target)))
      return
    }
    // Local entry — remove from localStorage and shift indices accordingly.
    try {
      const raw = localStorage.getItem(JOURNAL_KEY) || '[]'
      const parsed: unknown = JSON.parse(raw)
      if (Array.isArray(parsed) && target.localIdx !== undefined) {
        const next = parsed.filter((_, i) => i !== target.localIdx)
        localStorage.setItem(JOURNAL_KEY, JSON.stringify(next))
      }
    } catch { /* ignore */ }
    setEntries(prev => prev.filter(e => entryKey(e) !== entryKey(target)))
  }

  async function clearAll() {
    if (!window.confirm('Delete all journal entries on this device? Cloud-synced entries remain unless you sign in to delete them individually.')) return
    try { localStorage.removeItem(JOURNAL_KEY) } catch { /* ignore */ }
    // Keep cloud entries; only drop locals from view.
    setEntries(prev => prev.filter(e => e.source !== 'local'))
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

  function toggleExpand(key: string) {
    setExpanded(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key); else next.add(key)
      return next
    })
  }

  const filtered = useMemo(() => {
    if (!filter) return entries
    const q = filter.toLowerCase()
    return entries.filter(entry =>
      (entry.question || '').toLowerCase().includes(q) ||
      entry.cards.some(c => c.toLowerCase().includes(q)) ||
      (entry.reading || '').toLowerCase().includes(q),
    )
  }, [entries, filter])

  const cloudCount = entries.filter(e => e.source === 'cloud').length
  const localCount = entries.filter(e => e.source === 'local').length

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
          {user
            ? 'Your saved readings — cloud-synced across devices when you sign in, plus anything saved on this device before.'
            : 'The readings you have saved on this device. Sign in to sync across devices.'}
        </p>
        {!userLoading && !user && (
          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.6rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/auth/signin?next=/journal" style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.78rem',
              color: 'var(--gold)',
              background: 'rgba(201,168,76,.1)',
              border: '1px solid rgba(201,168,76,.5)',
              borderRadius: 8,
              padding: '0.5rem 1rem',
              textDecoration: 'none',
              letterSpacing: '0.06em',
            }}>
              Sign in to sync →
            </Link>
          </div>
        )}
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

      {/* Pattern memory — shown above the timeline for users with enough data */}
      {entries.length > 0 && (
        <JournalPatterns entries={entries} cardByName={cardByName} locale="en" />
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
            {filtered.map((entry) => {
              const key = entryKey(entry)
              const chips = entry.cards.map(c => parseCardChip(c, cardByName))
              const isExpanded = expanded.has(key)
              const readingPreview = entry.reading.length > 280 && !isExpanded
                ? entry.reading.slice(0, 280).trimEnd() + '…'
                : entry.reading

              return (
                <article key={key} style={{
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                      <span style={{
                        fontFamily: "'Cinzel',serif",
                        fontSize: '0.72rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--muted)',
                      }}>
                        {entry.date}
                      </span>
                      <span title={entry.source === 'cloud' ? 'Synced to your account' : 'Saved on this device'} style={{
                        fontFamily: "'Cinzel',serif",
                        fontSize: '0.6rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: entry.source === 'cloud' ? 'var(--gold)' : 'var(--muted)',
                        opacity: entry.source === 'cloud' ? 0.85 : 0.55,
                        border: `1px solid ${entry.source === 'cloud' ? 'rgba(201,168,76,.4)' : 'var(--border)'}`,
                        borderRadius: 14,
                        padding: '0.1rem 0.5rem',
                      }}>
                        {entry.source === 'cloud' ? '☁ Synced' : '◌ This device'}
                      </span>
                    </div>
                    <button
                      onClick={() => deleteEntry(entry)}
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
                          background: 'var(--on-bg-03)',
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
                      {hasMarkdownMarkers(entry.reading) ? (
                        <div style={{ marginTop: '.25rem' }}>
                          <RenderedReading text={readingPreview} fontSize=".92rem" />
                        </div>
                      ) : (
                        <p style={{
                          color: 'var(--text)',
                          fontSize: '0.92rem',
                          lineHeight: 1.7,
                          margin: 0,
                          whiteSpace: 'pre-wrap',
                        }}>
                          {readingPreview}
                        </p>
                      )}
                      {entry.reading.length > 280 && (
                        <button
                          onClick={() => toggleExpand(key)}
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
          Where your journal lives
        </h2>
        <p style={{ color: 'var(--text)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>
          {user
            ? 'Readings saved while signed in are stored in your TarotAxis account and synced across every browser you sign into. Anything saved in this browser before you signed in stays local to this device — you can see both kinds here. Use the Export button anytime to take a JSON backup with you.'
            : 'Without an account, every entry is stored only in this browser, on this device. Clearing site data, switching browsers or changing devices will not bring them with you. Sign in to keep them synced across devices, or use the Export button to keep a JSON backup.'}
          {cloudCount > 0 && localCount > 0 && (
            <span style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.82rem', color: 'var(--muted)' }}>
              You have {cloudCount} synced and {localCount} on this device.
            </span>
          )}
        </p>
      </section>

      <div style={{ marginTop: '1.5rem' }}>
        <EmailCapture
          source="journal"
          compact
          headline="Add a daily card to your practice"
          copy="One short reflection in your inbox each morning — a regular prompt for new journal entries."
          cta="Subscribe"
        />
      </div>
    </main>
  )
}
