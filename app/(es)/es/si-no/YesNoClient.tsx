'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { CARDS } from '@/lib/cards'
import CardImage from '@/components/CardImage'
import { localizeCardSlug } from '@/lib/i18n/slugs'

type HistoryItem = { q: string; card: string; slug: string; yn: string }

const YN = {
  yes:   { bg:'rgba(45,122,79,.2)',  color:'#3daa6a', icon:'✓', label:'Sí' },
  no:    { bg:'rgba(122,45,45,.2)',  color:'#aa3d3d', icon:'✗', label:'No'  },
  maybe: { bg:'rgba(122,94,26,.2)', color:'#c9a84c', icon:'?', label:'Quizás' },
}

interface Props {
  cardNamesEs: Record<string, string>
  cardYnExpEs: Record<string, string>
}

export default function YesNoClient({ cardNamesEs, cardYnExpEs }: Props) {
  const [question, setQuestion] = useState('')
  const [phase, setPhase] = useState<'idle'|'flipping'|'done'>('idle')
  const [drawn, setDrawn] = useState<typeof CARDS[0] | null>(null)
  const [flipped, setFlipped] = useState(false)
  const [history, setHistory] = useState<HistoryItem[]>([])

  useEffect(() => {
    try { setHistory(JSON.parse(localStorage.getItem('tarotify_yn') || '[]')) } catch {}
  }, [])

  function draw() {
    if (phase !== 'idle') return
    const card = CARDS[Math.floor(Math.random() * CARDS.length)]
    const esName = cardNamesEs[card.slug] ?? card.name
    setDrawn(card)
    setFlipped(false)
    setPhase('flipping')
    setTimeout(() => setFlipped(true), 600)
    setTimeout(() => {
      setPhase('done')
      const h: HistoryItem[] = [{ q: question || '(sin pregunta)', card: esName, slug: card.slug, yn: card.yn }, ...history].slice(0,5)
      setHistory(h)
      try { localStorage.setItem('tarotify_yn', JSON.stringify(h)) } catch {}
    }, 1400)
  }

  function reset() {
    setPhase('idle')
    setDrawn(null)
    setFlipped(false)
    setQuestion('')
  }

  return (
    <div style={{ maxWidth:700, margin:'0 auto', padding:'3rem 1.5rem 5rem' }}>
      <div style={{ textAlign:'center', marginBottom:'2.5rem' }}>
        <div style={{ fontSize:'2.5rem', marginBottom:'1rem', opacity:.8 }}>🔮</div>
        <h1 style={{ fontFamily:"'Cinzel',serif", fontSize:'clamp(1.5rem,4vw,2.1rem)', color:'var(--gold)', marginBottom:'.75rem' }}>Tarot Sí o No</h1>
        <p style={{ color:'var(--muted)', maxWidth:480, margin:'0 auto', lineHeight:1.7 }}>Concéntrate en una pregunta clara de sí/no, saca una carta y recibe una respuesta instantánea del mazo completo de 78 cartas.</p>
      </div>

      <div style={{ background:'rgba(255,255,255,.03)', border:'1px solid var(--border)', borderRadius:14, padding:'1.5rem', marginBottom:'1.5rem' }}>
        <div style={{ fontFamily:"'Cinzel',serif", fontSize:'.72rem', letterSpacing:'.14em', color:'var(--gold)', opacity:.7, textTransform:'uppercase', marginBottom:'.75rem' }}>Tu pregunta</div>
        <textarea
          value={question}
          onChange={e => setQuestion(e.target.value)}
          disabled={phase !== 'idle'}
          placeholder="ej. ¿Funcionará esta relación? ¿Debería aceptar el nuevo trabajo?"
          style={{ width:'100%', background:'rgba(255,255,255,.04)', border:'1px solid rgba(201,168,76,.2)', borderRadius:10, color:'var(--text)', fontFamily:"'Lato',sans-serif", fontSize:'1rem', padding:'1rem', resize:'none', height:80, outline:'none' }}
        />
        {phase === 'idle' && (
          <button onClick={draw} style={{ display:'block', width:'100%', marginTop:'1rem', padding:'1rem', background:'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border:'1px solid var(--gold)', borderRadius:12, color:'var(--gold)', fontFamily:"'Cinzel',serif", fontSize:'1rem', letterSpacing:'.1em', cursor:'pointer' }}>
            ✦ Sacar una carta
          </button>
        )}
      </div>

      {/* Card flip */}
      {drawn && (
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', marginBottom:'2rem' }}>
          <div style={{ width:180, height:280, perspective:1000 }}>
            <div style={{ width:'100%', height:'100%', position:'relative', transformStyle:'preserve-3d', transition:'transform .7s cubic-bezier(.4,0,.2,1)', transform: flipped ? 'rotateY(180deg)' : 'none' }}>
              {/* Back */}
              <div style={{ position:'absolute', inset:0, backfaceVisibility:'hidden', borderRadius:12, background:'linear-gradient(145deg,#1a1a3a,#0d0d2b)', border:'2px solid rgba(201,168,76,.3)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2rem', opacity:.25 }}>☽✦☾</div>
              {/* Front — real card image */}
              <div style={{ position:'absolute', inset:0, backfaceVisibility:'hidden', transform:'rotateY(180deg)', borderRadius:12, overflow:'hidden', border:'2px solid rgba(201,168,76,.4)' }}>
                <CardImage slug={drawn.slug} alt={cardNamesEs[drawn.slug] ?? drawn.name} />
                <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'.5rem', background:'linear-gradient(to top, rgba(0,0,0,.88) 0%, transparent 100%)', textAlign:'center' }}>
                  <div style={{ fontFamily:"'Cinzel',serif", fontSize:'.7rem', color:'#e8d5a0', letterSpacing:'.06em' }}>{cardNamesEs[drawn.slug] ?? drawn.name}</div>
                  <div style={{ fontSize:'.55rem', color:'rgba(232,213,160,.6)', letterSpacing:'.1em', textTransform:'uppercase', marginTop:2 }}>{drawn.suitLabel}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Result */}
      {phase === 'done' && drawn && (() => {
        const yn = YN[drawn.yn as keyof typeof YN]
        const esName = cardNamesEs[drawn.slug] ?? drawn.name
        const esExp = cardYnExpEs[drawn.slug] ?? drawn.yn_exp
        const esSlug = localizeCardSlug(drawn.slug, 'es')
        return (
          <div style={{ textAlign:'center', animation:'fadeUp .5s ease forwards' }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:'.6rem', padding:'.6rem 2rem', borderRadius:100, fontFamily:"'Cinzel',serif", fontSize:'1.5rem', letterSpacing:'.1em', marginBottom:'1.5rem', background:yn.bg, border:`1px solid ${yn.color}`, color:yn.color }}>
              <span>{yn.icon}</span>{yn.label}
            </div>
            <p style={{ color:'var(--text)', lineHeight:1.75, maxWidth:540, margin:'0 auto 1.5rem', fontSize:'.97rem' }}>{esExp}</p>
            <Link href={`/es/cartas/${esSlug}`} style={{ color:'var(--gold)', fontSize:'.85rem', borderBottom:'1px solid rgba(201,168,76,.3)', paddingBottom:2 }}>
              Leer significado completo de {esName} →
            </Link>
            <br />
            <button onClick={reset} style={{ marginTop:'2rem', padding:'.7rem 2rem', background:'transparent', border:'1px solid var(--border)', borderRadius:10, color:'var(--muted)', fontFamily:"'Cinzel',serif", fontSize:'.85rem', letterSpacing:'.08em', cursor:'pointer' }}>
              Hacer otra pregunta
            </button>
          </div>
        )
      })()}

      {/* History */}
      {history.length > 0 && (
        <div style={{ marginTop:'3rem', borderTop:'1px solid var(--border)', paddingTop:'2rem' }}>
          <div style={{ fontFamily:"'Cinzel',serif", fontSize:'.72rem', letterSpacing:'.14em', color:'var(--gold)', opacity:.65, textTransform:'uppercase', marginBottom:'1rem' }}>Lecturas recientes</div>
          <div style={{ display:'flex', flexDirection:'column', gap:'.5rem' }}>
            {history.map((h,i) => {
              const s = YN[h.yn as keyof typeof YN]
              return (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:'.75rem', padding:'.6rem 1rem', background:'rgba(255,255,255,.02)', border:'1px solid rgba(255,255,255,.05)', borderRadius:8, fontSize:'.82rem' }}>
                  <span style={{ padding:'.15rem .5rem', borderRadius:20, fontSize:'.65rem', fontFamily:"'Cinzel',serif", background:s.bg, color:s.color }}>{s.label.toUpperCase()}</span>
                  <span style={{ flex:1, color:'var(--text)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{h.q}</span>
                  <span style={{ color:'var(--muted)', fontSize:'.75rem', whiteSpace:'nowrap' }}>{h.card}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      <div style={{ marginTop:'4rem', borderTop:'1px solid rgba(201,168,76,.1)', paddingTop:'2.5rem' }}>
        <h2 style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'1.1rem', marginBottom:'1rem', letterSpacing:'.06em' }}>Cómo funciona el tarot Sí o No</h2>
        <p style={{ color:'var(--muted)', lineHeight:1.75, fontSize:'.95rem' }}>Cada una de las 78 cartas del tarot tiene una energía inherente — algunas se inclinan hacia la expansión y la afirmación (sí), otras hacia la cautela y el bloqueo (no), y varias ocupan un espacio liminal de "todavía no" (quizás). Cuando sacas una carta para una pregunta de sí/no, el arquetipo de la carta hace emerger una respuesta desde tu subconsciente. Piénsalo como un espejo para tu intuición, no como una predicción definitiva.</p>
      </div>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </div>
  )
}
