import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Tarot for the 12 Zodiac Signs — Your Sign's Ruling Card | TarotAxis",
  description:
    "Each zodiac sign has a ruling tarot card and element. Find your sign's Major Arcana, element, and the spreads that resonate most with your energy.",
  alternates: {
    canonical: 'https://tarotaxis.com/zodiac',
    languages: {
      'en': 'https://tarotaxis.com/zodiac',
      'es': 'https://tarotaxis.com/es/zodiaco',
      'x-default': 'https://tarotaxis.com/zodiac',
    },
  },
  openGraph: {
    title: "Tarot for the 12 Zodiac Signs — Your Sign's Ruling Card",
    description:
      "Each zodiac sign has a ruling tarot card and element. Find your sign's Major Arcana, element, and the spreads that resonate most with your energy.",
  },
}

type SignData = {
  slug: string
  name: string
  symbol: string
  dates: string
  element: 'Fire' | 'Earth' | 'Air' | 'Water'
  modality: 'Cardinal' | 'Fixed' | 'Mutable'
  ruler: string
  rulingCard: { slug: string; name: string }
  theme: string
}

const ZODIAC: SignData[] = [
  { slug: 'aries',       name: 'Aries',       symbol: '♈', dates: '21 Mar — 19 Apr', element: 'Fire',  modality: 'Cardinal', ruler: 'Mars',           rulingCard: { slug: 'the-emperor',     name: 'The Emperor' },     theme: 'Initiation, courage, raw selfhood' },
  { slug: 'taurus',      name: 'Taurus',      symbol: '♉', dates: '20 Apr — 20 May', element: 'Earth', modality: 'Fixed',    ruler: 'Venus',          rulingCard: { slug: 'the-hierophant',  name: 'The Hierophant' },  theme: 'Steadiness, sensual presence, what endures' },
  { slug: 'gemini',      name: 'Gemini',      symbol: '♊', dates: '21 May — 20 Jun', element: 'Air',   modality: 'Mutable',  ruler: 'Mercury',        rulingCard: { slug: 'the-lovers',      name: 'The Lovers' },      theme: 'Curiosity, communication, holding two truths' },
  { slug: 'cancer',      name: 'Cancer',      symbol: '♋', dates: '21 Jun — 22 Jul', element: 'Water', modality: 'Cardinal', ruler: 'Moon',           rulingCard: { slug: 'the-chariot',     name: 'The Chariot' },     theme: 'Containment, emotional armour, the home we build' },
  { slug: 'leo',         name: 'Leo',         symbol: '♌', dates: '23 Jul — 22 Aug', element: 'Fire',  modality: 'Fixed',    ruler: 'Sun',            rulingCard: { slug: 'strength',        name: 'Strength' },        theme: 'Heart, visible courage, the gentle ruler' },
  { slug: 'virgo',       name: 'Virgo',       symbol: '♍', dates: '23 Aug — 22 Sep', element: 'Earth', modality: 'Mutable',  ruler: 'Mercury',        rulingCard: { slug: 'the-hermit',      name: 'The Hermit' },      theme: 'Discernment, devotion to the craft, the inward path' },
  { slug: 'libra',       name: 'Libra',       symbol: '♎', dates: '23 Sep — 22 Oct', element: 'Air',   modality: 'Cardinal', ruler: 'Venus',          rulingCard: { slug: 'justice',         name: 'Justice' },         theme: 'Balance, fair witness, the weighing of every truth' },
  { slug: 'scorpio',     name: 'Scorpio',     symbol: '♏', dates: '23 Oct — 21 Nov', element: 'Water', modality: 'Fixed',    ruler: 'Pluto/Mars',     rulingCard: { slug: 'death',           name: 'Death' },           theme: 'Transformation, what must end for life to continue' },
  { slug: 'sagittarius', name: 'Sagittarius', symbol: '♐', dates: '22 Nov — 21 Dec', element: 'Fire',  modality: 'Mutable',  ruler: 'Jupiter',        rulingCard: { slug: 'temperance',      name: 'Temperance' },      theme: 'Vision, the long arc, blending opposites with patience' },
  { slug: 'capricorn',   name: 'Capricorn',   symbol: '♑', dates: '22 Dec — 19 Jan', element: 'Earth', modality: 'Cardinal', ruler: 'Saturn',         rulingCard: { slug: 'the-devil',       name: 'The Devil' },       theme: 'Ambition, structure, the bindings we mistake for backbone' },
  { slug: 'aquarius',    name: 'Aquarius',    symbol: '♒', dates: '20 Jan — 18 Feb', element: 'Air',   modality: 'Fixed',    ruler: 'Saturn/Uranus',  rulingCard: { slug: 'the-star',        name: 'The Star' },        theme: 'Hope, collective vision, the future already inside you' },
  { slug: 'pisces',      name: 'Pisces',      symbol: '♓', dates: '19 Feb — 20 Mar', element: 'Water', modality: 'Mutable',  ruler: 'Jupiter/Neptune',rulingCard: { slug: 'the-moon',        name: 'The Moon' },        theme: 'Dissolution, dreams, the porous edge of self' },
]

const ELEMENT_COLOUR: Record<SignData['element'], string> = {
  Fire:  'rgba(201,90,60,.18)',
  Earth: 'rgba(120,140,80,.18)',
  Air:   'rgba(140,170,200,.18)',
  Water: 'rgba(90,120,180,.18)',
}

const ELEMENT_BORDER: Record<SignData['element'], string> = {
  Fire:  'rgba(201,90,60,.4)',
  Earth: 'rgba(120,140,80,.4)',
  Air:   'rgba(140,170,200,.4)',
  Water: 'rgba(90,120,180,.4)',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is my zodiac tarot card?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your zodiac tarot card is the Major Arcana card traditionally associated with your sun sign through the Golden Dawn correspondences. For example, The Emperor rules Aries, The Hierophant rules Taurus, The Lovers rules Gemini, and so on through the twelve signs. The pairing is based on the elemental and planetary qualities of the card and the sign — both express the same archetype in a different language. To find yours, look up the date range your birthday falls into and follow the link to the corresponding sign page.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are tarot and astrology connected?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tarot and astrology share the same symbolic vocabulary. Both systems map twelve archetypal energies onto the four elements — Fire, Earth, Air and Water — and both use planets, signs and elements to describe how an inner state plays out in time. The Golden Dawn, a nineteenth-century occult order, formalised the correspondences most readers still use today: each of the twenty-two Major Arcana aligns with a sign, a planet or an element, and each of the four tarot suits aligns with one of the four elements. This means a tarot reading is also, in a quiet way, an astrological reading.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does each zodiac sign have a Major Arcana card?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are twelve zodiac signs and twenty-two Major Arcana cards, so the correspondence is not one-to-one — the remaining ten cards align with planets and the elements themselves. The twelve signs are each matched to a Major Arcana whose energy mirrors theirs: Aries the initiator gets The Emperor, the founding ruler; Libra the weigher of truths gets Justice; Scorpio the transformer gets Death; and so on. These pairings are not arbitrary. They were chosen because the archetype of the card and the archetype of the sign genuinely overlap in temperament, lesson and gift.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use my zodiac tarot card for guidance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Your zodiac tarot card is one of several "signature cards" in tarot work — alongside your birth card and your year card — and many readers keep theirs visible during readings as a touchstone. Meditating on the imagery, reading its meanings, and noticing when it appears in your spreads can deepen your sense of how the sign\'s energy is moving in your life right now. It will not predict your future, but it will give you a clear and consistent mirror to consult.',
      },
    },
  ],
}

export default function ZodiacHubPage() {
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
        <span style={{ color: 'var(--gold)' }}>Zodiac</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>♈ ♉ ♊</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tarot for Your Zodiac Sign
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 580, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Tarot and astrology share the same alphabet. Every zodiac sign has a ruling Major Arcana card, an element, and a constellation of spreads that fit its temperament. Find your sign below and discover the archetype that speaks your language.
        </p>
      </div>

      {/* How tarot and astrology connect */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          How Tarot and Astrology Connect
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Tarot and astrology were not designed together, but over the centuries they have grown into one another so completely that most modern readers treat them as two dialects of the same symbolic language. The bridge between them was largely built in the late nineteenth century by the Hermetic Order of the Golden Dawn, whose members assigned every card in the Major Arcana to a specific zodiac sign, planet or element. Those correspondences are the foundation of almost every tarot deck published since — the Rider–Waite–Smith included.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            The mapping rests on the four elements. Fire is the suit of Wands and rules Aries, Leo and Sagittarius. Water is the suit of Cups and rules Cancer, Scorpio and Pisces. Air is the suit of Swords and rules Gemini, Libra and Aquarius. Earth is the suit of Pentacles and rules Taurus, Virgo and Capricorn. When a tarot reading is heavy in one suit, it is also tilted toward that element of the zodiac — and toward the kind of question that element knows how to answer.
          </p>
          <p>
            The Major Arcana adds a second layer. Each of the twelve zodiac signs is paired with a single Major card whose archetype mirrors the sign at its deepest level. The Emperor for Aries names the energy of taking the throne. Justice for Libra names the energy of fair witness. Death for Scorpio names the energy of necessary ending. These pairings are correspondences, not prescriptions — they give you a starting point, not a verdict. Use them to deepen your reading, never to flatten it.
          </p>
        </div>
      </div>

      {/* 12 sign cards grid */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          The Twelve Signs
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '.85rem' }}>
          {ZODIAC.map(sign => (
            <Link
              key={sign.slug}
              href={`/zodiac/${sign.slug}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(255,255,255,.03)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '1.1rem 1.25rem',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.6rem' }}>
                <div style={{ fontSize: '1.8rem', color: 'var(--gold)', lineHeight: 1 }}>{sign.symbol}</div>
                <span
                  style={{
                    padding: '.2rem .6rem',
                    background: ELEMENT_COLOUR[sign.element],
                    border: `1px solid ${ELEMENT_BORDER[sign.element]}`,
                    borderRadius: 20,
                    fontSize: '.65rem',
                    fontFamily: "'Cinzel',serif",
                    letterSpacing: '.1em',
                    color: 'var(--text)',
                    textTransform: 'uppercase',
                  }}
                >
                  {sign.element}
                </span>
              </div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1rem', color: 'var(--gold)', marginBottom: '.25rem' }}>
                {sign.name}
              </div>
              <div style={{ fontSize: '.75rem', color: 'var(--muted)', marginBottom: '.6rem' }}>
                {sign.dates}
              </div>
              <div style={{ fontSize: '.78rem', color: 'var(--text)', opacity: .85, marginTop: 'auto', paddingTop: '.5rem', borderTop: '1px dashed var(--border)' }}>
                Ruled by <span style={{ color: 'var(--gold)' }}>{sign.rulingCard.name}</span>
              </div>
            </Link>
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Go deeper into the cards</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Explore the full Major Arcana, calculate your birth card from your date of birth, or draw a free reading right now.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/cards" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            All Card Meanings
          </Link>
          <Link href="/birth-card" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Birth Card Calculator
          </Link>
          <Link href="/free-reading" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Free Reading
          </Link>
        </div>
      </div>
    </div>
  )
}
