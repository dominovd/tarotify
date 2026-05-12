import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Will My Ex Come Back Tarot Spread — 4 Card Reading | TarotAxis',
  description: 'A 4-card tarot spread for clarity on whether reconciliation is in motion — what each person is feeling, what blocks reunion, and the honest path forward.',
  alternates: { canonical: 'https://tarotaxis.com/spreads/will-my-ex-come-back' },
  openGraph: {
    title: 'Will My Ex Come Back Tarot Spread — 4 Card Reading',
    description: 'A 4-card tarot spread for clarity on whether reconciliation is in motion — what each person is feeling, what blocks reunion, and the honest path forward.',
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'How They Feel Now',
    desc: 'Your ex\'s present emotional state regarding you and the relationship, beneath whatever has been said publicly or posted online. This card cuts past the performance of moving on and shows what is actually present in them when they sit alone with the memory of you.',
  },
  {
    num: 2,
    name: 'How You Feel Now',
    desc: 'Your honest emotional truth — including the parts you may be hiding from yourself. Sometimes we miss a person; sometimes we miss being chosen, or being known, or the version of ourselves we were inside that relationship. This card names what is really at the centre of your longing.',
  },
  {
    num: 3,
    name: 'What Blocks Reunion',
    desc: 'The real obstacle between where things stand and reconciliation. It may be internal — unhealed wounds, incompatible needs, a pattern that has not yet been broken — or external — circumstances, a third party, distance, timing. This card names it plainly so it can stop running the show from the shadows.',
  },
  {
    num: 4,
    name: 'The Most Likely Path',
    desc: 'Where this is genuinely heading if the current energies are allowed to continue. This is not destiny, and it is not a guarantee. It is the trajectory — the natural conclusion of the forces already in motion in both of you. Knowing the path gives you the chance to consciously walk it or change it.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can tarot predict if my ex will come back?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tarot does not predict in the strict sense — it reads the energy in motion at the moment of the reading and traces where it is most likely to lead. People have free will, circumstances change, and a reading taken today reflects today. What the cards can honestly show is whether the connection between you still carries living energy, whether your ex is genuinely processing or genuinely closed, and whether the conditions for reunion exist. Treat the reading as a clear mirror of present energy, not a verdict on the future.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long after a breakup should I do this reading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Give it at least two to three weeks. In the immediate aftermath of a breakup, the energy is too raw and too charged for a useful reading — both yours and theirs. You will pull cards through grief, they will be moving through their own shock, and the cards will mostly mirror the storm rather than show what lies underneath. Waiting allows the dust to settle enough that the deeper pattern becomes visible. If the breakup is very recent, it is often more useful to do a healing or grounding spread first.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cards suggest an ex will return?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Six of Cups is the classic card of nostalgic return — old connections re-emerging from the past. Judgement signals a second chance, a calling-back, an honest reckoning that can open the door to reunion. The Wheel of Fortune speaks to cycles turning and the natural return of what has gone. The Two of Cups, especially when it appears upright after a difficult reading, points to mutual recognition being possible again. The Lovers and the Page of Cups can also signal a fresh emotional opening from the other person.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if the reading says they won\'t come back?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Honour what the cards have shown you, and let that honesty be the beginning of your healing rather than the end of your hope. A clear no is a strange kind of gift — it returns your attention, your energy and your time to you. Spend the next season on the parts of your life that have been quietly waiting for you to come home to them. A spread focused on healing after heartbreak is often the right next step. See our healing-after-heartbreak spread for a structured way to begin.',
      },
    },
  ],
}

export default function WillMyExComeBackPage() {
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
        <span>/</span>
        <Link href="/spreads" style={{ color: 'var(--muted)' }}>Tarot Spreads</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Will My Ex Come Back</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Will My Ex Come Back Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          A four-card spread for clarity on whether reconciliation is in motion — what each person is honestly feeling, what stands between you, and the path the current energies are most likely to walk.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['4 Cards', 'Reconciliation', 'Honest Clarity'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* About this spread */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          About This Spread
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            There is a meaningful difference between asking this question from longing and asking it from clarity. The cards respond to both, but they respond differently. A reading carried out in the grip of fresh grief will surface the grief itself — the loops, the bargaining, the rehearsed conversations. A reading done from a settled place will show you the connection more honestly. If you cannot yet think about your ex without your chest tightening, the spread is not yet ready for you. Give it time, and let it be the right time when it comes.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            It is worth saying clearly that a positive reading does not mean you should pursue your ex. The cards may reveal that they still hold strong feeling for you, that the connection is alive, that reunion is energetically possible — and none of that answers the question of whether reunion would actually be good for either of you. A relationship that ended for real reasons does not become healthy because the longing is mutual. Use this spread to see, not to plan.
          </p>
          <p>
            There is also genuine value in doing this reading even when you do not want them back. Sometimes the lingering question itself is what keeps the door propped open in your imagination, and seeing the honest shape of things gives you permission to close it. Closure is its own kind of return — the energy returns to you. Whatever the cards show, this spread is meant to honour what is real so you can practise meeting your life from there.
          </p>
        </div>
      </div>

      {/* Spread Layout */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          The Four Positions
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Four cards, drawn in order. Each card holds a distinct layer of the situation — their feeling, your feeling, the obstacle, and the likely path.
        </p>

        {/* Visual Layout */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Card Layout
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {POSITIONS.map(pos => (
              <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
                <div style={{ width: 72, height: 108, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1.1rem', color: 'var(--gold)' }}>
                  {pos.num}
                </div>
                <div style={{ fontSize: '.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center', maxWidth: 72 }}>{pos.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {POSITIONS.map(pos => (
            <div key={pos.num} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.8rem', color: 'var(--gold)' }}>
                {pos.num}
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.88rem', color: 'var(--gold)', marginBottom: '.5rem' }}>{pos.name}</div>
                <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{pos.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {faqSchema.mainEntity.map(item => (
            <div key={item.name} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Ready to draw your four cards?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Use our free tarot reading tool to draw your cards, then return here to interpret each position with honesty.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/free-reading" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Draw Cards Now
          </Link>
          <Link href="/spreads/healing-after-heartbreak" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Healing After Heartbreak
          </Link>
          <Link href="/spreads/love" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Love Spread
          </Link>
        </div>
      </div>
    </div>
  )
}
