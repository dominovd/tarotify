import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Compatibility Tarot Spread — 5-Card Partner Alignment Reading | TarotAxis',
  description: 'A 5-card compatibility tarot spread that reads what you each value, where you genuinely align, where you honestly differ, and whether those differences serve the bond.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/partner/partner-alignment',
    languages: {
      'en': 'https://tarotaxis.com/spreads/partner/partner-alignment',
      'es': 'https://tarotaxis.com/es/tiradas/pareja/alineacion-de-pareja',
      'x-default': 'https://tarotaxis.com/spreads/partner/partner-alignment',
    },
  },
  openGraph: {
    title: 'Partner Alignment Tarot Spread — Conscious Compatibility',
    description: 'A five-card reading for couples checking whether their values, energies and differences fit — without forcing a yes-or-no verdict.',
  },
}

const POSITIONS = [
  { num: 1, name: 'What I Value in Love', desc: 'The values you carry into partnership — the things that matter most to you, whether or not you have ever said them out loud. The real list, not the polite one.' },
  { num: 2, name: 'What They Value', desc: 'The values the other person is bringing. Often subtly different from yours in ways that only become visible when the relationship is examined this honestly.' },
  { num: 3, name: 'Where We Genuinely Align', desc: 'The overlap — the soil you both stand on. This card shows the actual common ground rather than the surface preferences you happen to share.' },
  { num: 4, name: 'Where We Honestly Differ', desc: 'The genuine divergences. Not a verdict on the relationship — many strong partnerships are built across real differences — but a clear naming of where you are not the same.' },
  { num: 5, name: 'Whether the Differences Serve Us', desc: 'The most important card in the spread. It asks whether the differences between you sharpen, soften and stretch each other in good ways, or whether they grind against something essential.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is this spread a yes or no on compatibility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, and that is the point. Real compatibility is rarely a simple yes or no. This spread maps where you align and where you differ, then asks the more useful question — whether those differences serve the bond. Two well-matched people will often have meaningful differences; two poorly matched people will sometimes overlap on the surface.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I read this spread before getting into a relationship?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can, and it works particularly well at the threshold between dating and committing. Hold the question with care — you are working with limited information about the other person, so position 2 will give you a felt sense rather than a forensic read. Treat the spread as a conversation starter with yourself.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does it mean if position 4 has very difficult cards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Difficult cards in position 4 do not automatically mean the relationship is doomed — they mean the differences between you are real and need to be respected. Many lasting partnerships include genuine difference. Read position 5 carefully — it tells you whether those differences are an edge that grows you or a friction that wears you down.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from a soulmate reading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A soulmate spread asks who you are becoming and who is meant to meet that. An alignment spread is more grounded — it asks how two specific people, here and now, actually fit. Both are useful, but the alignment spread is the better tool when a real decision is on the table.',
      },
    },
  ],
}

export default function PartnerAlignmentSpreadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/spreads" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Spreads</Link>
          <span style={{ opacity: .4 }}>›</span>
          <Link href="/spreads/partner" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Partner</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Partner Alignment</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>⚖️</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Partner Alignment Tarot Spread
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            A 5-card spread for honest compatibility checks. Designed to reveal real alignment and real difference — and to ask whether those differences are serving you both.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            What Alignment Actually Means
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Compatibility is one of the most misunderstood ideas in relationships. We sometimes imagine it as a checklist of matching preferences, or as the absence of conflict. In practise, alignment is closer to a shared sense of what matters most — a quiet agreement about which way you both want to be growing. Two people can be deeply aligned and still disagree about almost everything else.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            This spread is built to read for that deeper kind of alignment. It does not try to score you out of ten. It tries to show you where the ground beneath your feet is shared, where it is not, and what the difference is actually doing in the relationship.
          </p>
        </div>

        {/* Layout */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            The 5-Card Layout
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Cards 1 and 2 sit side by side — your values, theirs. Cards 3 and 4 sit above them — alignment and difference. Card 5 crowns the spread, holding the deeper question.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {[1, 2, 3, 4, 5].map(n => (
              <div key={n} style={{ width: 52, height: 80, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>
                {n}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS.map(({ num, name, desc }) => (
              <div key={num} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.1rem', background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12 }}>
                <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem' }}>{num}</div>
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', marginBottom: '.3rem' }}>{name}</div>
                  <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interpreting */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Reading Your Spread
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Start with positions 1 and 2 side by side. Do not rush to compare them — just hear what each card is saying first. Frequently you will notice that one person values structure where the other values flow, or that one is oriented toward security while the other is oriented toward exploration. These are not wrong; they are simply different starting points.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Then look at the overlap in position 3. This is the soil. If the card is one of substance — Three of Cups, Six of Pentacles, The Star — the foundation is genuine. If it is more sparse, that does not condemn the relationship, but it does mean the shared ground will need conscious tending.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Position 4 names the difference; position 5 evaluates it. Read them as a pair. A challenging card in 4 paired with a generative card in 5 often signals a difference that has been a gift in disguise. A pleasant card in 4 paired with a heavy card in 5 can mean a subtle mismatch that you have both been quietly bearing. The spread is asking, gently, whether the differences are still serving the love.
          </p>
        </div>

        {/* FAQ */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '1.1rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {faqSchema.mainEntity.map((item, i, arr) => (
              <div key={item.name} style={{ paddingBottom: i < arr.length - 1 ? '1.1rem' : 0, borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <p style={{ fontFamily: "'Cinzel',serif", fontSize: '.85rem', color: 'var(--gold)', margin: '0 0 .4rem' }}>{item.name}</p>
                <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related links */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <Link href="/spreads/partner" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>More spreads</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>All partner spreads →</div>
          </Link>
          <Link href="/free-reading" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Try it now</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Free tarot reading →</div>
          </Link>
        </div>

      </div>
    </>
  )
}
