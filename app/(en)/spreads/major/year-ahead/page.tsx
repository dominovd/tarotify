import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Major Arcana Year Ahead Spread — 12-Month Tarot Layout | TarotAxis',
  description: 'A 12-card Major Arcana year-ahead tarot spread — one trump per month for an archetypal map of the year. Use it at birthdays, the New Year, or any personal threshold.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/major/year-ahead',
    languages: {
      'en': 'https://tarotaxis.com/spreads/major/year-ahead',
      'es': 'https://tarotaxis.com/es/tiradas/arcanos-mayores/anual',
      'x-default': 'https://tarotaxis.com/spreads/major/year-ahead',
    },
  },
  openGraph: {
    title: 'Major Arcana Year Ahead Spread — 12 Trumps for 12 Months',
    description: 'Twelve Major Arcana cards, one for each month — a soul-level forecast of the year\'s archetypal lessons.',
  },
}

const POSITIONS = [
  { num: 1, name: 'January', desc: 'The archetypal note of the year\'s first month. The Major card here shapes the soul-lesson of the threshold — what is closing from last year and what is being initiated.' },
  { num: 2, name: 'February', desc: 'The trump for the quiet, often inward month. It often points to interior work, dreaming, or relational tenderness that wants attention.' },
  { num: 3, name: 'March', desc: 'The archetype that breaks the winter pattern. A card of stirring — what is being asked to wake up, take root, or move forward.' },
  { num: 4, name: 'April', desc: 'The trump for the threshold of spring. Often a card of new identity, fresh courage, or a youthful archetype returning to the system.' },
  { num: 5, name: 'May', desc: 'The archetypal energy of full bloom. The Major card here colours how desire, beauty, and creative force will move through the month.' },
  { num: 6, name: 'June', desc: 'The trump at the year\'s tipping point. Often a card of decision, partnership, or arrival — a moment when a long-running theme reveals its shape.' },
  { num: 7, name: 'July', desc: 'The archetype of the high summer interior. A card that speaks to vitality, joy, exposure, or the heat of becoming visible.' },
  { num: 8, name: 'August', desc: 'The trump for the month of consolidation. Often a card of strength, integration, or working with what has now ripened.' },
  { num: 9, name: 'September', desc: 'The archetypal lesson of the harvest. A card of reckoning — what has actually grown, what is ready to be gathered, what has not borne fruit.' },
  { num: 10, name: 'October', desc: 'The trump for the descent. A card that often speaks of release, shedding, encounter with the underworld, or the willingness to let something die.' },
  { num: 11, name: 'November', desc: 'The archetype of the deep dark. The Major card here points to what is being met in the absence of distraction — grief, ancestors, hidden gifts.' },
  { num: 12, name: 'December', desc: 'The trump for the year\'s closing. A card of return, completion, or threshold — the soul-lesson the whole year has been shaping toward.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When is the best time to do a Major Arcana year-ahead spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A year-ahead spread is most powerful at a meaningful threshold — your birthday, the New Year, the spring or autumn equinox, or another personal turning point. The threshold gives the cards a clear frame and helps you sit with the reading across the months ahead. You can also use it part-way through a year if you sense a chapter has shifted.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does it mean if all 12 cards are Major Arcana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In this spread every position will be a Major card by design, since you are drawing from the trump-only deck. A genuinely fated reading of this kind suggests the entire year will operate at the soul level, with each month carrying a distinct archetypal lesson rather than ordinary practical detail. Pay particular attention to repeated themes — fire-coded trumps in several months, for example, point to a year of will and action.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I look at the whole year at once or month by month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both. Begin with a wide gaze over the entire spread to feel the year\'s overall arc and notice the largest movements — where the heavy cards land, where the lighter ones come as relief. Then revisit each month\'s card at the beginning of that month for closer reading. The card often opens up differently when you stand inside the time it describes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if a difficult card lands on an important month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A difficult Major card in an important month is not a sentence of disaster; it is an honest description of the archetypal weather. The Tower in the month of a wedding, for example, may speak to the necessary collapse of an old self-image rather than the relationship itself. Read the card with curiosity, ask what it is teaching, and remember that knowing the lesson in advance is itself a form of grace.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I draw a clarifying card for any month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If a particular month\'s card feels unclear, you can draw a single additional Major card to elaborate. Be sparing — one clarifier per month at most — or the reading loses focus. It is often better to leave the original card to ripen and return to it when the time arrives, since the meaning frequently clarifies itself in lived experience.',
      },
    },
  ],
}

export default function MajorYearAheadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/spreads" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Spreads</Link>
          <span style={{ opacity: .4 }}>›</span>
          <Link href="/spreads/major" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Major Arcana</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Year Ahead</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>☉</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Major Arcana Year Ahead Spread
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            Twelve trump cards, one for each month — a soul-level map of the archetypal lessons the year intends to teach. Draw it at a threshold and let it ripen month by month.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Before You Begin
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            A year-ahead spread is not a forecast in the weather-report sense. It is a description of the soul-curriculum the year is offering — the archetypal themes that will run through the months, the lessons that will recur, the thresholds you will be brought to. Approach it as a teaching, not a prediction.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Take out only the 22 Major Arcana. Shuffle thoroughly, holding the year ahead in mind. Lay twelve cards in order — left to right, in a single line, or in a circle if you prefer the visual reminder of a turning wheel. Sit with the whole spread before reading any single month.
          </p>
        </div>

        {/* Layout diagram */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            The Twelve Months
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Twelve trump cards in sequence. You can begin from January for a calendar year or from your birthday month for a personal year — both work, provided you choose at the start and keep to it.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '.5rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => (
              <div key={n} style={{ width: 42, height: 64, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem', background: 'rgba(201,168,76,.06)' }}>
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

        {/* Interpreting tips */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            How to Read Your Results
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Look first at the arc. Where do the heavy cards land — Death, The Tower, Judgement — and where do the lighter, more generative cards arrive as counterweight — The Sun, The Star, The World? The pattern across the months is often more revealing than any single position.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Notice runs of related archetypes. Three fire-coded cards in a row (The Magician, The Chariot, Strength) speak to a quarter of decisive will and outward action. A cluster of inward-facing cards (The Hermit, The Moon, The Hanged Man) marks a season of introspection that will not be rushed.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Photograph the spread. Keep the image somewhere you will see it at the start of each month, and re-read that month&apos;s card with fresh eyes when its time arrives. A trump that seemed obscure in advance often becomes obvious when you are standing inside the month it describes.
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
          <Link href="/spreads/major" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>More spreads</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>All Major Arcana spreads →</div>
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
