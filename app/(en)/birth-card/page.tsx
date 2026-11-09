import type { Metadata } from 'next'
import BirthCardClient from './BirthCardClient'
import SeoContent, { SeoLink, seoList, seoP, type SeoSection } from '@/components/SeoContent'
import { CARDS } from '@/lib/cards'

export const metadata: Metadata = {
  title: 'Tarot Birth Card Calculator — Find Your Life Card | TarotAxis',
  description: 'Calculate your tarot birth card from your date of birth. Discover your personal Major Arcana card and what it reveals about your life path and core energy.',
  alternates: {
    canonical: 'https://tarotaxis.com/birth-card',
    languages: {
      'en': 'https://tarotaxis.com/birth-card',
      'es': 'https://tarotaxis.com/es/carta-de-nacimiento',
      'x-default': 'https://tarotaxis.com/birth-card',
    },
  },
}

// Birth numbers 1-21 map to the Major Arcana card with that number; 22 is The Fool.
const MAJORS = CARDS.filter(c => c.suit === 'major').sort((a, b) => a.id - b.id)
const BY_NUMBER = [...MAJORS.slice(1), MAJORS[0]]

const SECTIONS: SeoSection[] = [
  {
    heading: 'A worked example',
    body: (
      <>
        <p style={seoP}>
          Take a birthday of 14 March 1990, written as 14·03·1990. Add every digit: 1 + 4 + 0 + 3 + 1 + 9 + 9 + 0 = 27.
          27 is above 22, so add its digits again: 2 + 7 = 9. Card number 9 is <SeoLink href="/cards/the-hermit">The Hermit</SeoLink>.
        </p>
        <p style={seoP}>
          A second example: 29·12·1999 gives 2 + 9 + 1 + 2 + 1 + 9 + 9 + 9 = 42, then 4 + 2 = 6,
          which is <SeoLink href="/cards/the-lovers">The Lovers</SeoLink>. A total of exactly 22 stays as 22 and
          points to <SeoLink href="/cards/the-fool">The Fool</SeoLink>, the card numbered 0.
        </p>
      </>
    ),
  },
  {
    heading: 'All 22 birth cards',
    body: (
      <ol style={{ ...seoList, columns: 2, columnGap: '2rem' }}>
        {BY_NUMBER.map((card, i) => (
          <li key={card.slug} value={i + 1} style={{ breakInside: 'avoid' }}>
            <SeoLink href={`/cards/${card.slug}`}>{card.name}</SeoLink>
          </li>
        ))}
      </ol>
    ),
  },
  {
    heading: 'How to work with your birth card',
    body: (
      <>
        <p style={seoP}>
          Read your card&apos;s full meaning and notice which parts feel familiar and which you resist. The
          upright meaning tends to describe the strengths you lean on; the reversed meaning often describes
          the habit that trips you up when you are tired or under pressure.
        </p>
        <ul style={seoList}>
          <li>Keep the card in mind when you draw your <SeoLink href="/daily">card of the day</SeoLink>. When it turns up in a reading, it often marks a theme close to home.</li>
          <li>Write about it in your <SeoLink href="/journal">tarot journal</SeoLink>: where did this energy show up this year?</li>
          <li>Compare it with a friend&apos;s or partner&apos;s birth card to talk about how you each meet the world.</li>
        </ul>
      </>
    ),
  },
  {
    heading: 'Birth cards and astrology',
    body: (
      <p style={seoP}>
        The birth card comes from numerology, not from the sky, so it can sit alongside your star sign
        rather than replace it. Each zodiac sign has its own Major Arcana card too; see{' '}
        <SeoLink href="/zodiac">tarot and the zodiac</SeoLink> to find yours and compare the two.
      </p>
    ),
  },
]

export default function BirthCardPage() {
  return (
    <>
      <BirthCardClient />
      <SeoContent sections={SECTIONS} maxWidth={680} />
    </>
  )
}
