import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { CARDS, CARDS_BY_SLUG } from '@/lib/cards'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return CARDS.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const card = CARDS_BY_SLUG[params.slug]
  if (!card) return {}
  return {
    title: `${card.name} Tarot Card Meaning — Upright & Reversed | Tarotify`,
    description: `${card.name} tarot card meaning: ${card.kw_up.join(', ')}. Upright, reversed, love, career and spiritual guidance.`,
    alternates: { canonical: `https://tarotify.app/cards/${card.slug}` },
    openGraph: {
      images: [`/cards/${card.slug}.webp`],
    },
  }
}

const YN_STYLE: Record<string, { bg: string; color: string; label: string }> = {
  yes:   { bg:'rgba(45,122,79,.2)',  color:'#3daa6a', label:'YES' },
  no:    { bg:'rgba(122,45,45,.2)',  color:'#aa3d3d', label:'NO'  },
  maybe: { bg:'rgba(122,94,26,.2)', color:'#c9a84c', label:'MAYBE' },
}

export default function CardPage({ params }: Props) {
  const card = CARDS_BY_SLUG[params.slug]
  if (!card) notFound()

  const yn = YN_STYLE[card.yn]
  const allCards = CARDS
  const idx = allCards.findIndex(c => c.slug === card.slug)
  const prev = allCards[idx - 1]
  const next = allCards[idx + 1]

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      {/* Breadcrumb */}
      <nav style={{ fontSize:'.78rem', color:'var(--muted)', marginBottom:'1.5rem', display:'flex', gap:'.5rem', alignItems:'center', flexWrap:'wrap' }}>
        <Link href="/" style={{ color:'var(--muted)' }}>Home</Link>
        <span>/</span>
        <Link href="/cards" style={{ color:'var(--muted)' }}>Card Meanings</Link>
        <span>/</span>
        <span style={{ color:'var(--gold)' }}>{card.name}</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign:'center', marginBottom:'2.5rem' }}>
        <div style={{ position:'relative', width:200, height:300, margin:'0 auto 1.5rem', borderRadius:12, overflow:'hidden', boxShadow:'0 8px 32px rgba(0,0,0,.4)' }}>
          <Image
            src={`/cards/${card.slug}.webp`}
            alt={`${card.name} tarot card`}
            fill
            priority
            sizes="200px"
            style={{ objectFit:'cover' }}
          />
        </div>
        <h1 style={{ fontFamily:"'Cinzel',serif", fontSize:'clamp(1.5rem,4vw,2rem)', color:'var(--gold)', marginBottom:'.5rem' }}>{card.name}</h1>
        <div style={{ display:'flex', gap:'.75rem', justifyContent:'center', alignItems:'center', flexWrap:'wrap' }}>
          <span style={{ padding:'.25rem .85rem', border:'1px solid var(--border)', borderRadius:20, fontSize:'.72rem', color:'var(--muted)', fontFamily:"'Cinzel',serif", letterSpacing:'.08em' }}>
            {card.suitLabel} · {card.number}
          </span>
          <span style={{ padding:'.25rem .85rem', borderRadius:20, fontSize:'.72rem', fontFamily:"'Cinzel',serif", letterSpacing:'.08em', background:yn.bg, color:yn.color }}>
            {yn.label}
          </span>
          <span style={{ fontSize:'.72rem', color:'var(--muted)' }}>{card.element}</span>
        </div>
      </div>

      {/* Yes/No */}
      <div style={{ background:'rgba(255,255,255,.03)', border:'1px solid var(--border)', borderRadius:12, padding:'1.25rem', marginBottom:'1.5rem' }}>
        <div style={{ fontFamily:"'Cinzel',serif", fontSize:'.7rem', letterSpacing:'.14em', color:'var(--gold)', opacity:.65, textTransform:'uppercase', marginBottom:'.6rem' }}>
          Yes or No
        </div>
        <p style={{ color:'var(--text)', lineHeight:1.7 }}>{card.yn_exp}</p>
      </div>

      {/* Keywords */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'.75rem', marginBottom:'1.5rem' }}>
        {[['Upright Keywords', card.kw_up], ['Reversed Keywords', card.kw_rev]].map(([label, kws]) => (
          <div key={label as string} style={{ background:'rgba(255,255,255,.03)', border:'1px solid var(--border)', borderRadius:12, padding:'1rem' }}>
            <div style={{ fontFamily:"'Cinzel',serif", fontSize:'.68rem', letterSpacing:'.12em', color:'var(--gold)', opacity:.65, textTransform:'uppercase', marginBottom:'.6rem' }}>{label}</div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'.35rem' }}>
              {(kws as string[]).map(k => (
                <span key={k} style={{ padding:'.2rem .55rem', background:'rgba(201,168,76,.08)', border:'1px solid rgba(201,168,76,.15)', borderRadius:20, fontSize:'.72rem', color:'var(--muted)' }}>{k}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Meanings */}
      {[['Upright Meaning', card.up], ['Reversed Meaning', card.rev]].map(([label, text]) => (
        <div key={label as string} style={{ background:'rgba(255,255,255,.03)', border:'1px solid var(--border)', borderRadius:12, padding:'1.25rem', marginBottom:'1rem' }}>
          <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:'.75rem', letterSpacing:'.12em', color:'var(--gold)', opacity:.7, textTransform:'uppercase', marginBottom:'.75rem' }}>{label}</h2>
          <p style={{ color:'var(--text)', lineHeight:1.75 }}>{text as string}</p>
        </div>
      ))}

      {/* Love / Career / Spirit */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'.75rem', marginBottom:'2rem' }}>
        {[['❤️','Love',card.love],['💼','Career',card.career],['🌿','Spirit',card.spirit]].map(([icon,label,text])=>(
          <div key={label as string} style={{ background:'rgba(255,255,255,.03)', border:'1px solid var(--border)', borderRadius:12, padding:'1rem' }}>
            <div style={{ fontSize:'1.2rem', marginBottom:'.4rem' }}>{icon}</div>
            <div style={{ fontFamily:"'Cinzel',serif", fontSize:'.68rem', letterSpacing:'.12em', color:'var(--gold)', opacity:.65, textTransform:'uppercase', marginBottom:'.5rem' }}>{label}</div>
            <p style={{ color:'var(--muted)', fontSize:'.85rem', lineHeight:1.6 }}>{text as string}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign:'center', marginBottom:'2.5rem' }}>
        <Link href="/" style={{ display:'inline-block', padding:'.85rem 2rem', background:'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border:'1px solid var(--gold)', borderRadius:12, color:'var(--gold)', fontFamily:"'Cinzel',serif", fontSize:'.9rem', letterSpacing:'.08em' }}>
          ✦ Get a Full Reading
        </Link>
      </div>

      {/* Prev / Next */}
      <div style={{ display:'flex', justifyContent:'space-between', gap:'1rem', flexWrap:'wrap' }}>
        {prev ? (
          <Link href={`/cards/${prev.slug}`} style={{ padding:'.65rem 1rem', border:'1px solid var(--border)', borderRadius:8, color:'var(--muted)', fontSize:'.82rem', display:'flex', alignItems:'center', gap:'.5rem' }}>
            ← {prev.name}
          </Link>
        ) : <span />}
        {next && (
          <Link href={`/cards/${next.slug}`} style={{ padding:'.65rem 1rem', border:'1px solid var(--border)', borderRadius:8, color:'var(--muted)', fontSize:'.82rem', display:'flex', alignItems:'center', gap:'.5rem' }}>
            {next.name} →
          </Link>
        )}
      </div>
    </div>
  )
}
