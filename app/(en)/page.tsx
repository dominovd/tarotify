import type { Metadata } from 'next'
import HomeClient from './HomeClient'
import SeoContent, { SeoLink, seoList, seoP, type SeoSection } from '@/components/SeoContent'

export const metadata: Metadata = {
  title: 'TarotAxis — Free AI Tarot Readings & 78 Card Meanings Online',
  description: 'Free AI tarot readings for self-reflection. Draw three cards and get a personalised AI interpretation, plus all 78 card meanings, card of the day and step-by-step spreads. No sign-up needed.',
  alternates: {
    canonical: 'https://tarotaxis.com',
    languages: {
      'en': 'https://tarotaxis.com/',
      'es': 'https://tarotaxis.com/es',
      'x-default': 'https://tarotaxis.com/',
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://tarotaxis.com/#website',
      url: 'https://tarotaxis.com',
      name: 'TarotAxis',
      description: 'Free AI tarot readings for self-reflection — personalised, streaming, no card required.',
      inLanguage: 'en',
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://tarotaxis.com/#webapp',
      name: 'TarotAxis — Free AI Tarot Readings',
      url: 'https://tarotaxis.com',
      description:
        'Free AI tarot readings for self-reflection. Draw three cards and get a personalised interpretation, plus all 78 card meanings, card of the day and spread guides.',
      applicationCategory: 'EntertainmentApplication',
      operatingSystem: 'Any',
      inLanguage: 'en',
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        'Free AI tarot reading',
        'Three-card tarot spread',
        'Yes / No oracle',
        '78 tarot card meanings',
        'Tarot combination calculator',
      ],
    },
  ],
}

const SECTIONS: SeoSection[] = [
  {
    heading: 'Free tarot readings for reflection',
    body: (
      <>
        <p style={seoP}>
          TarotAxis is a free tarot site for thinking a question through with the cards. Write your question,
          draw three cards for past, present and future, and an AI reader explains how the cards speak to each
          other and to what you asked. Your first reading needs no account and no card details.
        </p>
        <p style={seoP}>
          Treat the interpretation as a prompt for reflection rather than a forecast. The cards do not decide
          what happens next, and the AI only knows what you tell it. We explain how the AI works and where it
          falls short in <SeoLink href="/ai-limitations">AI limitations</SeoLink>, and why we read tarot as a
          mirror rather than a prediction in <SeoLink href="/reflection-vs-prediction">reflection vs prediction</SeoLink>.
        </p>
      </>
    ),
  },
  {
    heading: 'How a three-card reading works',
    body: (
      <ol style={seoList}>
        <li>Ask an open question. &ldquo;What do I need to understand about this job offer?&rdquo; gives the cards more to work with than a plain yes or no.</li>
        <li>Draw three cards. Each one takes a position (past, present, future) and can land upright or reversed.</li>
        <li>Read the AI interpretation, then open each card to see its full upright and reversed meaning.</li>
        <li>Save the reading to your journal. Over a few weeks, cards that keep returning are often the most telling part.</li>
      </ol>
    ),
  },
  {
    heading: 'Everything on TarotAxis',
    body: (
      <ul style={seoList}>
        <li><SeoLink href="/cards">Tarot card meanings</SeoLink>: all 78 cards with upright and reversed meanings, plus love, career and spiritual readings.</li>
        <li><SeoLink href="/free-reading">Free AI reading</SeoLink> with a full 78-card deck and four spreads, from a single card to a five-card love reading.</li>
        <li><SeoLink href="/daily">Card of the day</SeoLink>: one card and a short reflection, refreshed every morning.</li>
        <li><SeoLink href="/spreads">Tarot spreads</SeoLink>: step-by-step layouts, from the three-card spread to the Celtic Cross.</li>
        <li><SeoLink href="/birth-card">Birth card calculator</SeoLink>: find the Major Arcana card linked to your date of birth.</li>
        <li><SeoLink href="/journal">Tarot journal</SeoLink>: readings you save stay in your own browser.</li>
      </ul>
    ),
  },
  {
    heading: 'New to tarot?',
    body: (
      <>
        <p style={seoP}>
          A standard deck has 78 cards: 22 Major Arcana for the big themes and turning points of a life, and 56
          Minor Arcana for everyday matters, split into four suits. <SeoLink href="/tarot-suits/cups">Cups</SeoLink> deal
          with feelings and relationships, <SeoLink href="/tarot-suits/pentacles">Pentacles</SeoLink> with money, work and
          the body, <SeoLink href="/tarot-suits/swords">Swords</SeoLink> with thought and conflict,
          and <SeoLink href="/tarot-suits/wands">Wands</SeoLink> with energy and ambition.
        </p>
        <p style={seoP}>
          Start with <SeoLink href="/tarot-for-beginners">tarot for beginners</SeoLink>, then
          learn <SeoLink href="/how-to-read-tarot">how to read tarot cards</SeoLink>,{' '}
          <SeoLink href="/how-to-shuffle-tarot">how to shuffle</SeoLink> and{' '}
          <SeoLink href="/how-to-ask-tarot-questions">how to ask a good question</SeoLink>.
        </p>
      </>
    ),
  },
]

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
      <SeoContent sections={SECTIONS} />
    </>
  )
}
