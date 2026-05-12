import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tarot Decks — A Guide to the Most Popular Tarot Card Decks | TarotAxis',
  description: 'A guide to the most popular tarot decks for beginners and collectors — Rider-Waite, Marseille, Thoth, Wild Unknown and more. How to choose your first deck.',
  alternates: { canonical: 'https://tarotaxis.com/tarot-decks' },
  openGraph: {
    title: 'Tarot Decks — A Guide to the Most Popular Tarot Card Decks',
    description: 'A guide to the most popular tarot decks for beginners and collectors — Rider-Waite, Marseille, Thoth, Wild Unknown and more.',
    url: 'https://tarotaxis.com/tarot-decks',
    type: 'article',
  },
}

const DECKS = [
  {
    name: 'Rider-Waite-Smith',
    meta: '1909 — England',
    paragraphs: [
      "The foundational deck from which most modern tarot descends. Commissioned by occultist A. E. Waite and illustrated by Pamela Colman Smith, the deck's quietly revolutionary contribution was to make the Minor Arcana fully scenic — every numbered card depicts a small narrative scene rather than a decorative arrangement of suit symbols.",
      "Smith's clear, symbolic figures and primary colour palette have shaped the visual language of nearly every Western deck published since. If you have ever seen a tarot card in a film, on a book cover or on a tattoo, it almost certainly traces back to her hand.",
      "Most modern card meaning guides — including the ones on this site — are written with the Rider-Waite-Smith imagery in mind. For that reason it remains the most practical starting point for a new reader: every learning resource you find will line up with the deck in front of you.",
    ],
  },
  {
    name: 'Tarot de Marseille',
    meta: '16th–17th century — France & Italy',
    paragraphs: [
      "The older European tradition that predates Rider-Waite by some three centuries. The Marseille is not a single deck but a family of related decks printed across France and northern Italy from the 1600s onward, with broadly consistent imagery: bold woodcut figures, flat colour and geometric, decorative pip cards rather than illustrated scenes.",
      "Because the Minor Arcana shows only arrangements of suit symbols — six cups, eight coins — Marseille is read very differently. Meaning is drawn from numerology, suit, position and the interaction of figures across the spread, not from a scene's narrative content.",
      "It rewards study and is favoured by serious readers, French tarot scholars and anyone who wants to practise the older European method. It is not the easiest first deck, but it has a depth and austerity that many readers return to after a few years with scenic decks.",
    ],
  },
  {
    name: 'Thoth Tarot',
    meta: 'Painted 1938–43, published 1969 — England',
    paragraphs: [
      "The product of a five-year collaboration between Aleister Crowley and the artist Lady Frieda Harris. Harris's paintings are dense, geometric and visionary; Crowley's accompanying book, The Book of Thoth, embeds the deck firmly in his system of ceremonial magick and the Hermetic Qabalah.",
      "The Thoth deck renames several Major Arcana cards (Strength becomes Lust, Judgement becomes the Aeon) and re-orders some attributions. Its symbolism is layered and demanding — almost every element on a card is doing referential work.",
      "It is not a beginner's deck. Readers tend to come to Thoth after they have a working fluency in tarot and an interest in esoteric tradition. For those who do, it is one of the most rewarding decks ever made.",
    ],
  },
  {
    name: 'The Wild Unknown',
    meta: '2012 — United States',
    paragraphs: [
      "Kim Krans's nature-based reimagining of the tarot. The deck strips back the dense symbolic vocabulary of the older traditions in favour of minimalist ink illustration on a white ground, with animals frequently taking the place of human figures in the Major and court cards.",
      "The Wild Unknown was the deck that, more than any other, opened tarot to a new generation of readers in the 2010s. Its visual restraint invites intuitive reading — you respond to the image first and reach for codified meaning second.",
      "Many readers buy it as their second deck after Rider-Waite, finding that it loosens their interpretation and encourages a more personal, image-led practice.",
    ],
  },
  {
    name: 'Modern Witch Tarot',
    meta: '2019 — United States',
    paragraphs: [
      "Lisa Sterle's contemporary, fashion-forward reworking of the Rider-Waite-Smith structure. The Major Arcana and court cards are populated almost entirely by modern women, drawn in a clean illustrative style with diverse skin tones, body types and aesthetics.",
      "Structurally the deck follows Rider-Waite closely, so the existing body of card meanings still applies — you simply read those meanings through Sterle's imagery rather than Smith's.",
      "It is one of the more popular starter decks for readers who find the early-twentieth-century European imagery of the original Rider-Waite remote or unrelatable. The cards feel like they belong to the present day.",
    ],
  },
  {
    name: 'Morgan-Greer Tarot',
    meta: '1979 — United States',
    paragraphs: [
      "A close-cropped, borderless reimagining of the Rider-Waite-Smith deck by artists Bill Greer and Lloyd Morgan, working from the symbolism developed by Waite. The compositions zoom in on the figures, removing background space and pushing the imagery toward the edge of the card.",
      "The colour palette is saturated and warm — deep oranges, reds and earth tones — which gives the deck an intimate, almost cinematic feel. Readers often describe it as more emotional and direct than the original Rider-Waite.",
      "A good choice for someone who likes the Rider-Waite system but wants something visually warmer and more immediate.",
    ],
  },
  {
    name: 'Ethereal Visions',
    meta: '2018 — United States',
    paragraphs: [
      "Matt Hughes's art nouveau interpretation of the tarot, drawing on the decorative tradition of Alphonse Mucha. The cards feature flowing linework, ornate borders and gold foil accents that catch the light when laid out.",
      "The deck follows the Rider-Waite-Smith structure, so it is fully compatible with standard learning material. The appeal is primarily aesthetic — it is one of the more visually luxurious mass-market decks available.",
      "Popular with collectors and with readers who want a deck that looks beautiful on the table without straying from familiar symbolic territory.",
    ],
  },
  {
    name: 'Shadowscapes Tarot',
    meta: '2010 — United States',
    paragraphs: [
      "Stephanie Pui-Mun Law's watercolour fantasy deck. The imagery is dreamy and flowing, populated by faeries, dragons and elemental spirits set in landscapes that drift between water, air and forest.",
      "Tonally Shadowscapes is gentle and emotional — it favours mood and atmosphere over hard symbolic clarity. Card meanings broadly follow the Rider-Waite tradition but are softened by the romantic imagery.",
      "Suits readers who respond to fantasy art and who prefer a deck that feels poetic rather than declarative. Less effective for blunt practical questions; very effective for emotional reflection.",
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best tarot deck for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most beginners the Rider-Waite-Smith deck is the practical choice, because nearly every tarot book, course and online guide — including the card meanings on this site — is written with its imagery in mind. If the early-twentieth-century European look feels remote or unrelatable, the Modern Witch Tarot or The Wild Unknown are popular alternatives that keep the same underlying structure while presenting it through contemporary art.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have to be gifted your first tarot deck?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The idea that you must be gifted your first deck is a romantic piece of folklore, not a rule of the tradition. Many of the most experienced readers in the world bought their own first deck. Choosing your own deck consciously — taking time to find one whose imagery genuinely speaks to you — is a perfectly good way to begin a practice.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many cards are in a tarot deck?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard tarot deck has 78 cards: 22 Major Arcana cards depicting archetypal figures and life themes, and 56 Minor Arcana cards split across four suits (Cups, Pentacles, Swords and Wands), each suit running from Ace through Ten plus four court cards. A few independent and oracle-style decks deviate from this, but anything described as a tarot deck almost always follows the 78-card structure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I get a traditional or modern deck?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on how you want to learn. A traditional deck in the Rider-Waite-Smith lineage will let you draw on a huge body of existing books, guides and card meaning references — useful if you want to study tarot as a system. A modern, art-led deck encourages you to develop your own intuitive language with the cards, which some readers find more rewarding and others find ungrounded. Many readers end up owning one of each for different kinds of reading.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are tarot decks all the same structure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most modern Western tarot decks follow the Rider-Waite-Smith template — 78 cards arranged as 22 Major Arcana and 56 Minor Arcana, with fully illustrated scenes on every card. Older European decks such as the Tarot de Marseille keep the 78-card structure but show only decorative arrangements of suit symbols on the Minor Arcana rather than scenes. A handful of independent decks experiment with the structure itself, but the 78-card framework is the strong standard.',
      },
    },
  ],
}

export default function TarotDecksPage() {
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
        <span style={{ color: 'var(--gold)' }}>Tarot Decks</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>◈</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tarot Decks — A Guide to Choosing Your Cards
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 600, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          The deck in your hands shapes the reading as much as the cards that fall. Artwork, palette and symbolic style all change how a card lands — which is why choosing a deck is a more personal decision than most beginners realise.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['Beginner Friendly', '78 Cards Each', "Buyer's Guide"].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Why the deck matters */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Why the Deck Matters
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Tarot is read with the eye as much as with the mind. When you turn a card, the first response is visual — a colour, a posture, a figure's expression — and that response colours the meaning you arrive at. Two decks showing the same Ten of Swords can produce very different readings, not because the card has changed but because the image you are responding to has. The deck is not a neutral container; it is half of the conversation.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Decks fall along a rough spectrum from traditional to modern. Traditional decks — Rider-Waite-Smith and its many descendants, the Tarot de Marseille — carry the codified symbolism that the bulk of tarot literature is built on. Modern decks favour artistic interpretation, contemporary figures and intuitive accessibility, and they ask you to bring more of your own language to the cards. Neither approach is more valid than the other.
          </p>
          <p style={{ margin: 0 }}>
            There is no "best" deck, only the right deck for your eye and your practice. The clearest sign you have found yours is simple: you will know it when you see it. A deck that genuinely belongs to you will pull at you slightly when you look at the imagery — not because it is the most beautiful one in the shop, but because something in it recognises you back.
          </p>
        </div>
      </div>

      {/* Major Decks — A Tour */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Major Decks — A Tour
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Eight of the most widely read, taught and collected tarot decks in print, with notes on what each one does well and who it tends to suit.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: '1rem' }}>
          {DECKS.map(deck => (
            <div key={deck.name} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem' }}>
              <h3 style={{ fontFamily: "'Cinzel',serif", fontSize: '1rem', color: 'var(--gold)', marginBottom: '.3rem', letterSpacing: '.03em' }}>{deck.name}</h3>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.1em', color: 'var(--gold)', opacity: .6, textTransform: 'uppercase', marginBottom: '.85rem' }}>
                {deck.meta}
              </div>
              {deck.paragraphs.map((para, i) => (
                <p key={i} style={{ color: 'var(--text)', fontSize: '.87rem', lineHeight: 1.7, margin: 0, marginBottom: i === deck.paragraphs.length - 1 ? 0 : '.75rem' }}>
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Choosing Your First Deck */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Choosing Your First Deck
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Before you buy, browse images online. Almost every deck in print has a publisher's page or an Amazon listing with photographs of the Major Arcana and a handful of Minor Arcana cards. Look through them slowly and notice your reaction. The deck you want is the one that makes you want to reach into the screen.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Trust your eye over other people's recommendations. A friend who reads beautifully with the Wild Unknown is not a reason to buy the Wild Unknown. Your relationship with a deck is your own, and the deck someone else loves may leave you cold.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Ignore the rule that you must be gifted your first deck. It is a piece of folklore that has acquired the weight of tradition without ever having been one. Buying your own deck — choosing it carefully, paying for it consciously — is a fine way to begin.
          </p>
          <p style={{ margin: 0 }}>
            Finally, consider how the deck handles reversals. Some decks are designed with reversed meanings in mind and have imagery that holds up when flipped; others have strongly directional artwork that feels awkward upside down. If you intend to read reversals, this is worth checking before you buy.
          </p>
        </div>
      </div>

      {/* Tools to Care for Your Deck */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Tools to Care for Your Deck
        </h2>
        <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem' }}>
          <p style={{ color: 'var(--text)', fontSize: '.92rem', lineHeight: 1.8, margin: 0 }}>
            Once you have a deck, learn how to{' '}
            <Link href="/how-to-shuffle-tarot" style={{ color: 'var(--gold)' }}>shuffle it</Link>,{' '}
            <Link href="/how-to-cleanse-tarot-cards" style={{ color: 'var(--gold)' }}>cleanse it</Link>{' '}
            and start{' '}
            <Link href="/how-to-read-tarot" style={{ color: 'var(--gold)' }}>reading with it</Link>. These three habits — shuffling honestly, cleansing between sittings and reading regularly — will do more for your practice than any single deck choice.
          </p>
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Found your deck? Start reading.</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Explore the full set of 78 card meanings, learn the basics of reading, or draw a free spread to begin.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/free-reading" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Free Reading
          </Link>
          <Link href="/cards" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Card Meanings
          </Link>
          <Link href="/how-to-read-tarot" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            How to Read Tarot
          </Link>
        </div>
      </div>
    </div>
  )
}
