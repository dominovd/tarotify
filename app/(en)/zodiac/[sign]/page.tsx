import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

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

const ELEMENT_TO_SUIT: Record<SignData['element'], { suit: string; slug: string; suitName: string }> = {
  Fire:  { suit: 'Wands',     slug: 'wands',     suitName: 'Wands' },
  Earth: { suit: 'Pentacles', slug: 'pentacles', suitName: 'Pentacles' },
  Air:   { suit: 'Swords',    slug: 'swords',    suitName: 'Swords' },
  Water: { suit: 'Cups',      slug: 'cups',      suitName: 'Cups' },
}

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

type SignContent = {
  metaDescription: string
  rulingCardParagraphs: string[]
  elementParagraphs: string[]
  spreads: { slug: string; name: string; why: string }[]
  themes: { title: string; body: string }[]
  faq: { q: string; a: string }[]
}

const CONTENT: Record<string, SignContent> = {
  aries: {
    metaDescription: 'Aries tarot guide: The Emperor is your ruling card. Discover why this Major Arcana matches Aries fire, the suit of Wands and the spreads that suit a Cardinal Fire sign.',
    rulingCardParagraphs: [
      'The Emperor rules Aries because both archetypes are about taking the throne. Aries is the first sign of the zodiac — the spark of selfhood, the moment "I am" becomes a sentence. The Emperor is the figure who has built a kingdom from that same energy: bordered, defended, governed. Where Aries supplies the courage to begin, The Emperor supplies the structure that lets a beginning become a life.',
      'Astrologically, Aries is ruled by Mars, the planet of will and assertion, and The Emperor sits squarely under that Mars signature. His armour is not decoration; it is the visible form of a boundary. When this card appears in an Aries reading, it is usually pointing to where you are being asked to claim authority over your own territory — your time, your work, your "no" — rather than waiting for someone else to set the terms.',
      'The shadow of the pairing is worth naming. Aries unbalanced becomes the bully; The Emperor unbalanced becomes the tyrant. Both lessons are the same: power that does not serve life eventually turns against it. The healthy expression is the founder who builds something others can stand on, and then steps aside to let them.',
    ],
    elementParagraphs: [
      'Fire is the element of will, vitality and the leap before the look. In tarot it lives in the suit of Wands — the staffs sprouting fresh leaves, the figures striding toward a horizon, the heat in the chest that says "go". For an Aries, the Fire signature means tarot readings tend to surface questions of momentum: where are you blocked, where are you charging without aim, where is the spark wanting to land.',
      'The Wands suit is your suit. When it dominates your readings it usually means the question is about identity and action, not feeling or thought. Pay attention to Wands cards even when they appear at the edges of a spread — they are often the engine running underneath whatever else is happening for you.',
    ],
    spreads: [
      { slug: 'new-moon',   name: 'New Moon Spread',   why: 'Aries is a Cardinal sign — the initiator. The New Moon spread is built around starting fresh, which fits the Aries rhythm of beginnings better than any other format.' },
      { slug: 'three-card', name: 'Three-Card Spread', why: 'Aries thinks in straight lines. The classic past-present-future three-card draw matches that directness — it gets you to insight without making you sit through five extra cards you do not need.' },
      { slug: 'horseshoe',  name: 'Horseshoe Spread',  why: 'When you do want depth, the horseshoe gives you obstacle, advice and outcome together. That trio answers the Aries question — "what is in my way, and how do I move it" — without losing momentum.' },
    ],
    themes: [
      { title: 'Beginnings', body: 'Your readings will keep returning to thresholds — projects, moves, relationships, identities. The card you need to watch is the one that names what you are walking toward, not just what you are leaving.' },
      { title: 'Authority',  body: 'Questions about leadership, claiming space and being your own boss recur for Aries. The Emperor and Mars-flavoured cards (the Tower, the Chariot) often appear when this theme is live.' },
      { title: 'Anger',      body: 'Aries readings benefit from being honest about anger as information. The Five of Wands, the Knight of Wands and the Tower all carry useful messages about heat that needs somewhere to go.' },
      { title: 'Patience',   body: 'The growth edge for Aries in tarot work is sitting with cards you do not like. Pulling The Hanged Man or the Four of Swords can feel like a punishment — it is usually a gift.' },
    ],
    faq: [
      { q: 'Why is The Emperor the Aries tarot card?', a: 'The Emperor rules Aries through the Golden Dawn correspondences. Both archetypes share a Mars signature — assertion, structure, the founding of a domain — and both represent the first conscious act of saying "this is mine and I will defend it." The Emperor is what Aries energy looks like once it has built something to govern.' },
      { q: 'What spread is best for Aries?', a: 'Cardinal Fire signs respond well to fast, forward-looking spreads. The New Moon spread, three-card past-present-future, and the horseshoe are all good fits. Long meditative spreads like the Celtic Cross can frustrate Aries — they are excellent but require patience.' },
      { q: 'What tarot suit matches Aries?', a: 'The suit of Wands matches Aries. All three Fire signs — Aries, Leo and Sagittarius — share the Wands suit because Wands carry the same element of will, vitality and outward motion. When Wands dominate your readings, the question is usually about action and identity.' },
      { q: 'Are Aries and Leo compatible in tarot?', a: 'Yes — both are Fire signs and both have strong Major Arcana associations (The Emperor for Aries, Strength for Leo). In tarot work these signatures complement each other: Aries supplies the spark of beginning, Leo supplies the warmth that lets the spark sustain. Readings about Aries-Leo dynamics often surface Wands cards on both sides.' },
    ],
  },

  taurus: {
    metaDescription: 'Taurus tarot guide: The Hierophant is your ruling card. Discover why this Major Arcana matches Taurus earth, the suit of Pentacles and the spreads for a Fixed Earth sign.',
    rulingCardParagraphs: [
      'The Hierophant rules Taurus because both archetypes are about what endures. The Hierophant is the keeper of tradition — the figure who carries inherited wisdom forward, blessing what has been tested by time. Taurus is the sign of the bull in the pasture, the body that knows the season by the feel of the air. Both refuse to be hurried, and both place enormous value on what is steady, sensual and real.',
      'Astrologically, Taurus is ruled by Venus, and The Hierophant softens his Mercury-and-Saturn architecture with Venusian warmth. He is not a cold authority figure; he is the teacher who remembers that ritual exists to make people feel held. When this card appears in a Taurus reading, it usually points to lineage, embodied knowledge, and the value of doing things the slow way because slow turns out to be the way that lasts.',
      'The shadow of the pairing is worth naming. Taurus unbalanced becomes stubborn; The Hierophant unbalanced becomes dogmatic. The lesson is the same: a tradition that has stopped serving the living should be allowed to retire. The healthy expression is the elder who knows the old ways and also knows when to teach something new.',
    ],
    elementParagraphs: [
      'Earth is the element of body, season and matter. In tarot it lives in the suit of Pentacles — the coins held up to the light, the gardens being tended, the craftsperson at the workbench. For a Taurus, the Earth signature means readings tend to surface questions of stability: what you can rely on, what you are building, what your body is asking for that your schedule is ignoring.',
      'The Pentacles suit is your suit. When it dominates your readings it usually means the question is about resources, health, work, or the slow accumulation of something worth having. Pentacles teach Taurus to trust patience as a strategy — the seed that takes a season to sprout is doing exactly what seeds do.',
    ],
    spreads: [
      { slug: 'year-ahead',    name: 'Year-Ahead Spread',    why: 'Taurus thinks in long arcs. A twelve-card year spread suits a Fixed sign that is willing to sit with one map for months at a time rather than redrawing it weekly.' },
      { slug: 'celtic-cross',  name: 'Celtic Cross',         why: 'The Celtic Cross is dense, layered and rewards patience — three qualities Taurus has in abundance. Other signs find it cumbersome; Taurus finds it satisfying.' },
      { slug: 'full-moon',     name: 'Full Moon Spread',     why: 'Full moon work is about honouring what has grown and releasing what has finished — a deeply Taurean rhythm of harvest and gratitude.' },
    ],
    themes: [
      { title: 'Embodiment',  body: 'Your readings will keep returning to the body — its appetites, its tiredness, the messages you have been talking over. Pentacles cards in body positions deserve more attention than most readers give them.' },
      { title: 'Resources',   body: 'Money, possessions and the relationship to enough are constant Taurean themes. The Four of Pentacles, Five of Pentacles and Nine of Pentacles together form your essential resource trio.' },
      { title: 'Stubbornness',body: 'A useful theme to track honestly. When the same card keeps appearing in your readings, it is often pointing to a position you are holding past its expiry.' },
      { title: 'Beauty',      body: 'Taurus is ruled by Venus, and your readings will often gain depth when read as questions about beauty — what nourishes the senses, what feels like home, what is worth keeping for its loveliness alone.' },
    ],
    faq: [
      { q: 'Why is The Hierophant the Taurus tarot card?', a: 'The Hierophant rules Taurus through the Golden Dawn correspondences. Both archetypes value what endures — tradition, ritual, embodied wisdom — and both move at a slow, deliberate pace. The Hierophant is the keeper of the kind of knowledge that has to be lived to be understood, which is exactly the Taurean way of learning.' },
      { q: 'What spread is best for Taurus?', a: 'Fixed Earth signs respond well to long, layered spreads. The year-ahead, the Celtic Cross and the full moon spread all reward the Taurean willingness to sit with complexity over time rather than skim it. Quick three-card draws can feel undernourishing.' },
      { q: 'What tarot suit matches Taurus?', a: 'The suit of Pentacles matches Taurus. All three Earth signs — Taurus, Virgo and Capricorn — share the Pentacles suit because Pentacles carry the element of body, resource and the slow craft of building. When Pentacles dominate your readings, the question is usually about what you are growing.' },
      { q: 'Are Taurus and Scorpio compatible in tarot?', a: 'Taurus and Scorpio sit opposite each other on the zodiac wheel, and their tarot cards (The Hierophant and Death) form a classic axis of permanence and transformation. In tarot work this opposition is fertile — readings about Taurus-Scorpio dynamics often hold both stability and change in the same spread, which is exactly the lesson the pairing exists to teach.' },
    ],
  },

  gemini: {
    metaDescription: 'Gemini tarot guide: The Lovers is your ruling card. Discover why this Major Arcana matches Gemini air, the suit of Swords and the spreads for a Mutable Air sign.',
    rulingCardParagraphs: [
      'The Lovers rules Gemini because both archetypes are about holding two truths at once. The Lovers is not, despite its name, only a card about romance — it is the card of meaningful choice, the moment when a person stands between two paths and has to decide which to honour. Gemini is the sign of the twins, the original "and" between any pair, the mind that refuses to flatten a question into one answer when two are available.',
      'Astrologically, Gemini is ruled by Mercury, and The Lovers shares that communicative, relational signature. The card asks you not what you want but what you choose — which is a Mercury question, a question about language, framing and the stories we tell to make a decision survivable. When it appears in a Gemini reading, it usually points to a choice that cannot be made by halves.',
      'The shadow of the pairing is worth naming. Gemini unbalanced becomes scattered; The Lovers unbalanced becomes paralysed. Both lessons are the same: at some point the holding of two truths has to resolve into action. The healthy expression is the curious mind that has weighed the options and is now ready to commit to one without lying about the other.',
    ],
    elementParagraphs: [
      'Air is the element of thought, language and the spaces between things. In tarot it lives in the suit of Swords — the blades held up against a clear sky, the figures negotiating with their own minds, the precision that can either liberate or wound. For a Gemini, the Air signature means readings tend to surface questions of clarity: where you are overthinking, where you have not thought enough, what story you are telling that needs rewriting.',
      'The Swords suit is your suit. When it dominates your readings it usually means the question is mental rather than emotional — what you believe, what you fear, what you need to say out loud. Swords are sometimes read as the "harshest" suit, but for a Gemini they are simply the native language of the reading.',
    ],
    spreads: [
      { slug: 'horseshoe', name: 'Horseshoe Spread', why: 'The horseshoe gives you obstacle, advice and outcome side by side — which is exactly how a Gemini mind likes to hold a problem. Multiple angles, no forced verdict.' },
      { slug: 'weekly',    name: 'Weekly Spread',    why: 'Mutable Air thrives on shorter cycles. A seven-card weekly draw lets you track shifting questions without committing to a year-long arc that you will inevitably rewrite by March.' },
      { slug: 'three-card',name: 'Three-Card Spread',why: 'For quick decisions: option A, option B, the truth between them. This is the most Gemini reading there is.' },
    ],
    themes: [
      { title: 'Communication', body: 'Your readings will keep returning to what was said, what was not said, and what is being misheard. Pages, the Knight of Swords and the Eight of Wands are all messengers worth listening to closely.' },
      { title: 'Choice',         body: 'Two-of-something cards (the Two of Swords, the Two of Wands, The Lovers itself) carry extra weight for you. They are not asking you to choose perfectly — they are asking you to choose at all.' },
      { title: 'Curiosity',      body: 'A Gemini gift. Track which cards your eye keeps returning to even when they were not the "answer" — they often hold the question you actually came to ask.' },
      { title: 'Restlessness',   body: 'The growth edge. Pulling the same card three readings in a row usually means the lesson has not landed yet — sitting still long enough to receive it is the Gemini practice.' },
    ],
    faq: [
      { q: 'Why is The Lovers the Gemini tarot card?', a: 'The Lovers rules Gemini through the Golden Dawn correspondences. Both archetypes share a Mercury signature and both are fundamentally about holding two truths in the same hand — the twins of Gemini, the choice of The Lovers. Meaningful decision, not romance, is the core of this card and of the sign.' },
      { q: 'What spread is best for Gemini?', a: 'Mutable Air signs respond well to flexible, multi-angle spreads. The horseshoe, the weekly seven-card and the three-card option-A-option-B-truth-between-them all suit the Gemini love of comparing perspectives without being forced into a single verdict too quickly.' },
      { q: 'What tarot suit matches Gemini?', a: 'The suit of Swords matches Gemini. All three Air signs — Gemini, Libra and Aquarius — share the Swords suit because Swords carry the element of mind, language and clear thought. When Swords dominate your readings, the question is usually about what you are thinking, saying or believing.' },
      { q: 'Are Gemini and Sagittarius compatible in tarot?', a: 'Gemini and Sagittarius sit opposite each other on the zodiac wheel, and their tarot cards (The Lovers and Temperance) form an axis of choice and synthesis. In tarot work this opposition is generative — readings about Gemini-Sagittarius dynamics often surface questions of "what do I choose" and "how do I blend it with what I already chose" in the same breath.' },
    ],
  },

  cancer: {
    metaDescription: 'Cancer tarot guide: The Chariot is your ruling card. Discover why this Major Arcana matches Cancer water, the suit of Cups and the spreads for a Cardinal Water sign.',
    rulingCardParagraphs: [
      'The Chariot rules Cancer because both archetypes are about containment. The crab carries its home on its back; the charioteer rides inside an armoured vehicle they are steering with willpower alone. Both protect a soft interior with a hard, deliberate exterior. Both move forward by holding themselves together against forces that would scatter them.',
      'Astrologically, Cancer is ruled by the Moon, and The Chariot — with its lunar crescents on the driver\'s shoulders and the canopy of stars overhead — wears that signature openly. The card asks how you carry your inner weather through the outer world without spilling it. When it appears in a Cancer reading, it usually points to the question of emotional armour: when to keep it on, when to lower it, when it has fused to your skin.',
      'The shadow of the pairing is worth naming. Cancer unbalanced becomes defensive; The Chariot unbalanced becomes domineering. The lesson is the same: a shell that never opens stops being a home and becomes a prison. The healthy expression is the figure who has built a strong container and also knows it is allowed to step out of it.',
    ],
    elementParagraphs: [
      'Water is the element of feeling, memory and the unconscious. In tarot it lives in the suit of Cups — the chalices held up to the heart, the figures in landscapes that look like dreams, the depth that cannot be argued with because it does not deal in argument. For a Cancer, the Water signature means readings tend to surface questions of emotional truth: what you actually feel beneath what you say you feel, what your inner life has been protecting.',
      'The Cups suit is your suit. When it dominates your readings it usually means the question is about love, family, intuition or the long memory of the heart. Cups speak to Cancer in the native tongue — pay extra attention to which Cups are upright and which are reversed, because the difference often holds the whole reading.',
    ],
    spreads: [
      { slug: 'new-moon',   name: 'New Moon Spread',   why: 'Cancer is ruled by the Moon — every new moon spread is, in a sense, a Cancer reading. The format honours your natural lunar rhythm of intention-setting.' },
      { slug: 'three-card', name: 'Three-Card Spread', why: 'Past-present-future is unusually potent for Cancer because Cancer is the sign that remembers. The "past" card often does more work for you than for any other sign.' },
      { slug: 'full-moon',  name: 'Full Moon Spread',  why: 'Release work suits the Cancer ability to feel things fully. Full moon spreads give the emotional water somewhere to go.' },
    ],
    themes: [
      { title: 'Home',       body: 'Where you live, who lives with you, and the inner home you carry inside. The Ten of Cups, the Four of Wands and the Empress all map this territory.' },
      { title: 'Family',     body: 'Cancer readings often surface ancestral and family-of-origin questions whether or not they were asked. Court cards and reversals deserve close reading here.' },
      { title: 'Intuition',  body: 'A Cancer gift. The High Priestess, the Moon and the Page of Cups are all invitations to trust the inner voice that arrives before the outer evidence does.' },
      { title: 'Boundaries', body: 'The growth edge. Cancer feels everything, including what is not yours to carry. The Chariot itself, the Two of Swords and the Knight of Cups all teach versions of this lesson.' },
    ],
    faq: [
      { q: 'Why is The Chariot the Cancer tarot card?', a: 'The Chariot rules Cancer through the Golden Dawn correspondences. Both archetypes share a lunar signature — the crescents on the charioteer\'s shoulders are the same moon that rules the crab — and both express the same gift of holding a soft interior inside a strong protective form. The Chariot is what Cancerian self-containment looks like in motion.' },
      { q: 'What spread is best for Cancer?', a: 'Cardinal Water signs respond well to spreads that honour emotional cycles. The new moon, three-card past-present-future, and the full moon spread all give Cancer the lunar rhythm and the emotional depth the sign needs. Highly analytical spreads can feel arid.' },
      { q: 'What tarot suit matches Cancer?', a: 'The suit of Cups matches Cancer. All three Water signs — Cancer, Scorpio and Pisces — share the Cups suit because Cups carry the element of feeling, intuition and the deep inner life. When Cups dominate your readings, the question is usually about the heart and what it has been holding.' },
      { q: 'Are Cancer and Capricorn compatible in tarot?', a: 'Cancer and Capricorn sit opposite each other on the zodiac wheel, and their tarot cards (The Chariot and The Devil) form an axis of self-mastery and self-binding. In tarot work this opposition is instructive — readings about Cancer-Capricorn dynamics often hold the question "what container is protecting me, and what container has become my prison" at the same time.' },
    ],
  },

  leo: {
    metaDescription: 'Leo tarot guide: Strength is your ruling card. Discover why this Major Arcana matches Leo fire, the suit of Wands and the spreads for a Fixed Fire sign.',
    rulingCardParagraphs: [
      'Strength rules Leo because both archetypes carry the lion. In the Rider–Waite–Smith image, a woman in a flower crown rests her hands gently on the muzzle of a lion who is, plainly, allowing her to. The card is named Strength but it is really a card about gentleness — the kind of power that does not need to roar because it has nothing to prove. Leo, the sign of the lion, was always going to be ruled by this card.',
      'Astrologically, Leo is ruled by the Sun, and Strength carries the solar infinity symbol above the woman\'s head. The card asks how your courage shows up not in the moment of confrontation but in the moment of restraint. When it appears in a Leo reading, it usually points to the difference between performing strength and embodying it — between being the one who roars and being the one others lean against.',
      'The shadow of the pairing is worth naming. Leo unbalanced becomes the performer who needs the audience; Strength unbalanced becomes the figure who hides their power because they fear what it would cost to claim it. Both lessons are the same: real authority does not depend on being watched. The healthy expression is the heart that warms a room simply by being itself.',
    ],
    elementParagraphs: [
      'Fire is the element of will, vitality and the leap before the look. In tarot it lives in the suit of Wands — the staffs sprouting fresh leaves, the figures striding toward horizons, the heat in the chest that says "go". For a Leo, the Fire signature is solar rather than martial — less the spark of beginning and more the steady warmth that sustains.',
      'The Wands suit is your suit. When it dominates your readings it usually means the question is about visibility, creativity and the courage to be seen as you actually are. The Page of Wands, the Six of Wands and the Sun itself form a particularly Leonine trio worth knowing well.',
    ],
    spreads: [
      { slug: 'year-ahead',    name: 'Year-Ahead Spread',    why: 'Leo is a Fixed sign — willing to commit to a long map. A twelve-card year-ahead suits the Leonine sense of life as a sustained creative project rather than a series of pivots.' },
      { slug: 'celtic-cross',  name: 'Celtic Cross',         why: 'The Celtic Cross is layered and ceremonial — which suits the Leo love of doing things properly. It also rewards the patience Fixed signs tend to underestimate in themselves.' },
      { slug: 'full-moon',     name: 'Full Moon Spread',     why: 'Leo is opposite Aquarius on the wheel, and full moons in Aquarius are dramatic for Leo placements. The full moon spread gives that energy a structured outlet.' },
    ],
    themes: [
      { title: 'Heart',       body: 'Your readings will return again and again to what you love. The Two of Cups, the Ten of Cups and the Lovers all carry weight here — but so does the Sun, which is your card in a quieter way than Strength is.' },
      { title: 'Visibility',  body: 'Being seen is a Leonine question. The Six of Wands, the Star and the Page of Wands often mark moments when the question is whether to step forward or stay in the wings.' },
      { title: 'Creativity',  body: 'A Leo gift and a Leo responsibility. The Empress, the Three of Pentacles and the Knight of Wands all speak to making — and to the courage of putting your work into the world without polishing it past honesty.' },
      { title: 'Pride',       body: 'The growth edge. Pulling the Five of Pentacles, the Seven of Swords or the Tower in a Leo reading often points to a moment when pride is the thing blocking the next step. Strength itself is the antidote.' },
    ],
    faq: [
      { q: 'Why is Strength the Leo tarot card?', a: 'Strength rules Leo through the Golden Dawn correspondences. The image is unambiguous — a lion at the centre of the card, the sign of the lion as the centre of the zodiac\'s Fixed Fire energy. Both archetypes share the same solar signature and the same lesson: real power is gentle, and it does not need to be performed.' },
      { q: 'What spread is best for Leo?', a: 'Fixed Fire signs respond well to ceremonial, sustained spreads. The year-ahead, the Celtic Cross and the full moon spread all give Leo the sense of occasion and the long arc that the sign thrives on. Quick spreads work but can feel slightly anticlimactic for the Leo temperament.' },
      { q: 'What tarot suit matches Leo?', a: 'The suit of Wands matches Leo. All three Fire signs — Aries, Leo and Sagittarius — share the Wands suit because Wands carry the element of will, vitality and visible courage. When Wands dominate your readings, the question is usually about how your fire is showing up in the world.' },
      { q: 'Are Leo and Aquarius compatible in tarot?', a: 'Leo and Aquarius sit opposite each other on the zodiac wheel, and their tarot cards (Strength and The Star) form an axis of personal and collective hope. In tarot work this opposition is unusually beautiful — readings about Leo-Aquarius dynamics often hold the question of how individual courage and shared vision meet.' },
    ],
  },

  virgo: {
    metaDescription: 'Virgo tarot guide: The Hermit is your ruling card. Discover why this Major Arcana matches Virgo earth, the suit of Pentacles and the spreads for a Mutable Earth sign.',
    rulingCardParagraphs: [
      'The Hermit rules Virgo because both archetypes are about the inward path. The Hermit stands on a mountainside in the dark, holding up a lantern that lights only the next step. Virgo is the sign of the harvest — the figure bent over the field, sorting the wheat from the chaff with patient, focused hands. Both are solitary not by accident but by design. Both know that some kinds of clarity only come when the crowd has gone.',
      'Astrologically, Virgo is ruled by Mercury, and The Hermit carries that Mercurial signature in a contemplative key — language turned inward, analysis turned toward the soul rather than the spreadsheet. The card asks what you have been trying to figure out in company that needs to be figured out alone. When it appears in a Virgo reading, it usually points to the value of withdrawal as a strategy rather than a failure.',
      'The shadow of the pairing is worth naming. Virgo unbalanced becomes the perfectionist who never finishes; The Hermit unbalanced becomes the recluse who stops returning to the village. Both lessons are the same: the inward path is meant to be a season, not a permanent address. The healthy expression is the figure who goes up the mountain, finds what they went for, and comes back with it.',
    ],
    elementParagraphs: [
      'Earth is the element of body, season and matter. In tarot it lives in the suit of Pentacles — the coins held up to the light, the gardens being tended, the craftsperson at the workbench. For a Virgo, the Earth signature is the most workmanlike of the three — Virgo is where Earth meets attention to detail, where craft becomes devotion.',
      'The Pentacles suit is your suit. When it dominates your readings it usually means the question is about work, health, daily practice or the slow refinement of skill. The Three of Pentacles, the Eight of Pentacles and the King of Pentacles together form your essential craft trio.',
    ],
    spreads: [
      { slug: 'horseshoe', name: 'Horseshoe Spread', why: 'Mutable Earth thrives on structured analysis. The horseshoe gives you obstacle, advice and outcome in a clear sequence — which suits Virgo\'s love of a well-laid plan.' },
      { slug: 'weekly',    name: 'Weekly Spread',    why: 'Virgo lives in the daily and the weekly more than the annual. A seven-card weekly draw gives you a manageable arc to track, refine and adjust.' },
      { slug: 'three-card',name: 'Three-Card Spread',why: 'For quick diagnostic work — situation, complication, advice. Virgo can extract more from three cards than most signs extract from ten.' },
    ],
    themes: [
      { title: 'Devotion',    body: 'Your readings will keep returning to what you serve. The Hierophant, the Three of Pentacles and the Two of Pentacles all carry the question of where your daily effort is being placed.' },
      { title: 'Health',      body: 'Virgo rules the digestive system in traditional astrology, and your readings often surface questions of what you are absorbing — physically and otherwise. The Star, the Temperance card and the Six of Pentacles all carry healing weight here.' },
      { title: 'Discernment', body: 'A Virgo gift. Pulling Judgement or Justice in a Virgo reading often confirms an inner verdict you have already privately reached.' },
      { title: 'Perfectionism',body:'The growth edge. The Knight of Pentacles, the Nine of Wands and the Four of Pentacles can all flag the moment when "getting it right" has crossed into "never finishing."' },
    ],
    faq: [
      { q: 'Why is The Hermit the Virgo tarot card?', a: 'The Hermit rules Virgo through the Golden Dawn correspondences. Both archetypes share a Mercurial signature — but in its inward, contemplative form rather than its communicative one. The Hermit is what Virgo discernment looks like when it turns its quiet, careful attention onto the soul instead of the harvest.' },
      { q: 'What spread is best for Virgo?', a: 'Mutable Earth signs respond well to structured, analytical spreads. The horseshoe, the weekly seven-card and the three-card diagnostic all suit Virgo\'s love of clear positions, well-defined questions and the kind of detail that rewards careful attention.' },
      { q: 'What tarot suit matches Virgo?', a: 'The suit of Pentacles matches Virgo. All three Earth signs — Taurus, Virgo and Capricorn — share the Pentacles suit because Pentacles carry the element of body, craft and the slow refinement of skill. When Pentacles dominate your readings, the question is usually about what you are tending.' },
      { q: 'Are Virgo and Pisces compatible in tarot?', a: 'Virgo and Pisces sit opposite each other on the zodiac wheel, and their tarot cards (The Hermit and The Moon) form an axis of clarity and dissolution. In tarot work this opposition is rich — readings about Virgo-Pisces dynamics often hold the question of how to honour both the discerning mind and the dreaming one without making one wrong.' },
    ],
  },

  libra: {
    metaDescription: 'Libra tarot guide: Justice is your ruling card. Discover why this Major Arcana matches Libra air, the suit of Swords and the spreads for a Cardinal Air sign.',
    rulingCardParagraphs: [
      'Justice rules Libra because both archetypes are about the weighing of truths. Justice sits enthroned with a sword in one hand and a set of scales in the other — discernment and balance, held in deliberate equilibrium. Libra is the sign of the scales itself, the only zodiac sign represented by an object rather than a creature. Both speak the same language: nothing is decided until both sides have been seen.',
      'Astrologically, Libra is ruled by Venus, and Justice softens its scales with that Venusian sense of fairness as a form of love. The card is not about punishment — it is about the moment when truth is allowed to be visible. When it appears in a Libra reading, it usually points to a situation that has been waiting for an honest accounting, where being polite has been the obstacle to being right.',
      'The shadow of the pairing is worth naming. Libra unbalanced becomes the people-pleaser who agrees to anything; Justice unbalanced becomes the judge who measures without warmth. Both lessons are the same: balance is an act, not a feeling, and it requires you to be present for both sides of a situation you would rather avoid. The healthy expression is the fair witness who can speak hard truth without losing tenderness.',
    ],
    elementParagraphs: [
      'Air is the element of thought, language and the spaces between things. In tarot it lives in the suit of Swords — the blades held up against a clear sky, the figures negotiating with their own minds, the precision that can either liberate or wound. For a Libra, the Air signature is relational — Air turned toward "us" rather than "I", the mind that thinks in terms of agreements and counterweights.',
      'The Swords suit is your suit. When it dominates your readings it usually means the question is about agreement, negotiation, or the story two people are telling each other. Libra often finds Swords cards confronting; they are also the cards that have the most to teach you about saying what you actually mean.',
    ],
    spreads: [
      { slug: 'new-moon',   name: 'New Moon Spread',   why: 'Libra is a Cardinal sign — capable of initiating beautifully when the question is framed clearly. The new moon spread provides that frame, and the lunar timing suits Venusian rhythms.' },
      { slug: 'three-card', name: 'Three-Card Spread', why: 'Option A, option B, the truth between them. Libra was made for this format — it gives the scales something honest to weigh.' },
      { slug: 'horseshoe',  name: 'Horseshoe Spread',  why: 'When the decision is heavier, the horseshoe lets Libra see obstacle, advice and outcome at once — without pretending that one card alone can resolve the matter.' },
    ],
    themes: [
      { title: 'Partnership', body: 'Your readings will keep returning to "us" — romantic, creative, professional. The Two of Cups, the Lovers and the Ten of Cups all map territory you know intimately.' },
      { title: 'Fairness',    body: 'Justice itself, Judgement and the Eight of Swords all appear when fairness is the question — sometimes asking whether you have been fair to yourself first.' },
      { title: 'Beauty',      body: 'Libra is ruled by Venus, and your readings often gain depth when read as questions about beauty and proportion. The Empress, the Star and the Four of Wands are all worth noticing.' },
      { title: 'Indecision',  body: 'The growth edge. The Two of Swords, the Seven of Cups and The Hanged Man can all flag the moment when weighing has crossed into stalling. Libra is allowed to choose.' },
    ],
    faq: [
      { q: 'Why is Justice the Libra tarot card?', a: 'Justice rules Libra through the Golden Dawn correspondences. The imagery is direct — the scales of Libra and the scales of Justice are the same scales. Both archetypes share the Venus-ruled discipline of weighing two sides with care, and both express the same lesson: fairness is a practice, and it requires presence on both sides of the question.' },
      { q: 'What spread is best for Libra?', a: 'Cardinal Air signs respond well to spreads with clearly defined positions. The new moon, the three-card option-A-option-B-truth-between-them, and the horseshoe all give Libra the framing it needs to weigh well. Open-ended spreads can feel diffuse.' },
      { q: 'What tarot suit matches Libra?', a: 'The suit of Swords matches Libra. All three Air signs — Gemini, Libra and Aquarius — share the Swords suit because Swords carry the element of mind, language and clear discernment. When Swords dominate your readings, the question is usually about an agreement that needs renegotiating or a truth that needs naming.' },
      { q: 'Are Libra and Aries compatible in tarot?', a: 'Libra and Aries sit opposite each other on the zodiac wheel, and their tarot cards (Justice and The Emperor) form an axis of balance and assertion. In tarot work this opposition is generative — readings about Libra-Aries dynamics often surface the question of how to hold the "I" and the "we" without one collapsing the other.' },
    ],
  },

  scorpio: {
    metaDescription: 'Scorpio tarot guide: Death is your ruling card. Discover why this Major Arcana matches Scorpio water, the suit of Cups and the spreads for a Fixed Water sign.',
    rulingCardParagraphs: [
      'Death rules Scorpio because both archetypes are about the necessary ending. Death in tarot is rarely about literal death — it is about the transformation that requires something to be allowed to finish so that the next thing can begin. Scorpio is the sign of the scorpion and the phoenix, the creature that ends and rises both, the only zodiac sign that has three symbols because one is not enough to hold its full transformational range.',
      'Astrologically, Scorpio is traditionally ruled by Mars and modernly by Pluto, and Death carries both signatures — Mars\'s willingness to confront, Pluto\'s capacity to take things down to the root and rebuild. The card is not punishing; it is honest. When it appears in a Scorpio reading, it usually names a chapter that has already ended in truth even if you are still pretending it has not, and asks you to make it official.',
      'The shadow of the pairing is worth naming. Scorpio unbalanced becomes the figure who burns down what could have been mended; Death unbalanced becomes the energy of needless destruction. Both lessons are the same: transformation is not the same as drama. The healthy expression is the figure who knows when a thing is finished, says so plainly, and lets the future have its room to arrive.',
    ],
    elementParagraphs: [
      'Water is the element of feeling, memory and the unconscious. In tarot it lives in the suit of Cups — the chalices held up to the heart, the figures in dreamlike landscapes, the depth that cannot be argued with. For a Scorpio, the Water signature is the deepest of the three — Water at its most concentrated, the well rather than the wave.',
      'The Cups suit is your suit. When it dominates your readings it usually means the question is about what is happening beneath the surface — the loyalty you have not named, the resentment you have not voiced, the love you have not yet allowed to be received. Scorpio reads Cups with unusual accuracy.',
    ],
    spreads: [
      { slug: 'year-ahead',   name: 'Year-Ahead Spread',   why: 'Fixed Water signs are willing to track long, layered transformations. A year-ahead suits Scorpio\'s patience for processes that unfold over seasons.' },
      { slug: 'celtic-cross', name: 'Celtic Cross',        why: 'The Celtic Cross gives Scorpio the depth it craves — multiple positions, including conscious and unconscious influences, are exactly the territory the sign thrives in.' },
      { slug: 'full-moon',    name: 'Full Moon Spread',    why: 'Release work is native Scorpio territory. The full moon spread gives transformation a structured ritual rather than a chaotic eruption.' },
    ],
    themes: [
      { title: 'Transformation', body: 'Your readings will keep returning to endings, beginnings and the threshold between them. Death, the Tower and Judgement form your essential transformation trio — and none of them mean what they look like.' },
      { title: 'Intimacy',       body: 'Scorpio rules intimacy in all its forms — sexual, emotional, financial, ancestral. The Lovers, the Two of Cups and the Ten of Pentacles all carry weight when this is the question.' },
      { title: 'Power',          body: 'A Scorpio theme worth tracking honestly. The Emperor, the Magician and the Devil all surface in readings when the question is who holds the power in a situation — and whether you are using yours or hiding it.' },
      { title: 'Secrecy',        body: 'The growth edge. The Moon, the Seven of Swords and the High Priestess can all flag the moment when privacy has crossed into hiding. Scorpio is allowed to be known.' },
    ],
    faq: [
      { q: 'Why is Death the Scorpio tarot card?', a: 'Death rules Scorpio through the Golden Dawn correspondences. Both archetypes share the same Mars-and-Pluto signature and the same fundamental lesson: transformation requires the willingness to let what is finished actually finish. The scorpion, the phoenix and the figure of Death all carry the same essential energy.' },
      { q: 'What spread is best for Scorpio?', a: 'Fixed Water signs respond well to deep, layered spreads. The year-ahead, the Celtic Cross and the full moon spread all give Scorpio the depth and the patience for unfolding the sign actually wants. Quick draws can feel undernourishing for the Scorpio temperament.' },
      { q: 'What tarot suit matches Scorpio?', a: 'The suit of Cups matches Scorpio. All three Water signs — Cancer, Scorpio and Pisces — share the Cups suit because Cups carry the element of feeling and the deep inner life. Scorpio reads Cups with particular accuracy because the sign lives at the deepest end of the Water register.' },
      { q: 'Are Scorpio and Taurus compatible in tarot?', a: 'Scorpio and Taurus sit opposite each other on the zodiac wheel, and their tarot cards (Death and The Hierophant) form a classic axis of transformation and permanence. In tarot work this opposition is fertile — readings about Scorpio-Taurus dynamics often surface the question of what to keep and what to release in the same spread.' },
    ],
  },

  sagittarius: {
    metaDescription: 'Sagittarius tarot guide: Temperance is your ruling card. Discover why this Major Arcana matches Sagittarius fire, the suit of Wands and the spreads for a Mutable Fire sign.',
    rulingCardParagraphs: [
      'Temperance rules Sagittarius because both archetypes are about the long arc and the patient blending of opposites. Temperance shows an angel pouring liquid between two cups in a steady stream that should not work but does — a small miracle of integration. Sagittarius is the sign of the archer, the figure who draws back the bow and aims at a horizon distant enough that the arrow has time to be seen in flight. Both trust the journey to do its work.',
      'Astrologically, Sagittarius is ruled by Jupiter, and Temperance carries that Jupiterian signature of expansiveness held in measure. The card is not about restraint in the dry sense — it is about the kind of blending that produces a third thing neither original element could have made alone. When it appears in a Sagittarius reading, it usually points to a synthesis that is finally available because you have lived long enough with the ingredients.',
      'The shadow of the pairing is worth naming. Sagittarius unbalanced becomes the figure who shoots arrows without aiming; Temperance unbalanced becomes the energy of endless mixing without ever pouring the result. Both lessons are the same: vision is meant to land somewhere. The healthy expression is the archer who has the patience to wait for the right shot and the courage to take it when it appears.',
    ],
    elementParagraphs: [
      'Fire is the element of will, vitality and the leap before the look. In tarot it lives in the suit of Wands — the staffs sprouting fresh leaves, the figures striding toward horizons, the heat in the chest that says "go". For a Sagittarius, the Fire signature is the most far-seeing of the three — Fire stretched toward distance, the spark sent out as an arrow rather than struck like a match.',
      'The Wands suit is your suit. When it dominates your readings it usually means the question is about direction, adventure or the next horizon worth aiming at. The Eight of Wands, the Three of Wands and the Knight of Wands form a particularly Sagittarian trio worth knowing well.',
    ],
    spreads: [
      { slug: 'horseshoe', name: 'Horseshoe Spread', why: 'Mutable Fire suits a spread that maps a journey. The horseshoe gives obstacle, advice and outcome in a clear arc — which is exactly how a Sagittarian mind already thinks.' },
      { slug: 'weekly',    name: 'Weekly Spread',    why: 'Sagittarius rhythms shift quickly. A seven-card weekly draw keeps you honest about the trajectory of the moment without forcing you to commit to a year-long map you will outgrow.' },
      { slug: 'year-ahead',name: 'Year-Ahead Spread', why: 'When the question is genuinely big — a move, a course of study, a multi-year project — the year-ahead gives Sagittarian vision the canvas it actually needs.' },
    ],
    themes: [
      { title: 'Vision',     body: 'Your readings will keep returning to what you are aiming at. The Three of Wands, the Star and the World all carry the territory of horizon-thinking.' },
      { title: 'Adventure',  body: 'The Fool, the Eight of Wands and the Six of Swords all carry the question of departure — when to leave, what to leave behind, what to take with you.' },
      { title: 'Meaning',    body: 'A Sagittarian gift. The Hierophant, Temperance and the Hermit all appear when the question is about purpose, philosophy or the framework you are trying to build a life inside.' },
      { title: 'Follow-through',body:'The growth edge. The Seven of Pentacles, the Four of Pentacles and the Eight of Pentacles all flag the moment when starting has become the substitute for finishing.' },
    ],
    faq: [
      { q: 'Why is Temperance the Sagittarius tarot card?', a: 'Temperance rules Sagittarius through the Golden Dawn correspondences. Both archetypes share Jupiter\'s signature of expansion held in measure, and both express the same lesson: vision is real, but the patience to blend opposites over time is what makes the vision actually land. Many decks show Temperance with one foot on earth and one in water — already an image of the Sagittarian range.' },
      { q: 'What spread is best for Sagittarius?', a: 'Mutable Fire signs respond well to arc-shaped spreads. The horseshoe, the weekly seven-card and the year-ahead all suit Sagittarius\'s love of trajectory, journey and the long view. Static spreads without forward motion can feel constricting.' },
      { q: 'What tarot suit matches Sagittarius?', a: 'The suit of Wands matches Sagittarius. All three Fire signs — Aries, Leo and Sagittarius — share the Wands suit because Wands carry the element of will, vitality and outward motion. Sagittarius reads Wands particularly well for questions about direction and the horizon.' },
      { q: 'Are Sagittarius and Gemini compatible in tarot?', a: 'Sagittarius and Gemini sit opposite each other on the zodiac wheel, and their tarot cards (Temperance and The Lovers) form an axis of synthesis and choice. In tarot work this opposition is generative — readings about Sagittarius-Gemini dynamics often hold the question of how to choose between two paths and how to blend them once chosen.' },
    ],
  },

  capricorn: {
    metaDescription: 'Capricorn tarot guide: The Devil is your ruling card. Discover why this Major Arcana matches Capricorn earth, the suit of Pentacles and the spreads for a Cardinal Earth sign.',
    rulingCardParagraphs: [
      'The Devil rules Capricorn, and the pairing surprises people every time. The Devil is one of the most maligned cards in the deck — but it is not, despite the imagery, a card about evil. It is a card about the things we are bound to: the contracts, the appetites, the structures we have built and then forgotten we could leave. Capricorn is the sign of the mountain goat, the architect of ambition, the figure who can build a kingdom and then mistake the walls for who they are.',
      'Astrologically, Capricorn is ruled by Saturn, and The Devil carries that Saturnian signature in its shadow form — discipline that has hardened into limitation, structure that has stopped serving the life inside it. The card asks what you are mistaking for backbone. When it appears in a Capricorn reading, it usually points to a place where ambition has become bondage in disguise — and where the chains, on closer inspection, are not even locked.',
      'The shadow of the pairing is worth naming, though here the shadow is the whole point. Capricorn unbalanced becomes the figure who sacrifices everything to a structure no longer worth the sacrifice; The Devil unbalanced becomes the figure who cannot remember they have the key. The healthy expression is the climber who knows which summit is worth their life and which one is just a hill someone else told them to climb.',
    ],
    elementParagraphs: [
      'Earth is the element of body, season and matter. In tarot it lives in the suit of Pentacles — the coins held up to the light, the gardens being tended, the craftsperson at the workbench. For a Capricorn, the Earth signature is the most architectural of the three — Earth built up rather than tended outward, the cathedral rather than the field.',
      'The Pentacles suit is your suit. When it dominates your readings it usually means the question is about work, legacy, money, or the long structures you are building with your life. The King of Pentacles, the Ten of Pentacles and the Four of Pentacles together form your essential legacy trio.',
    ],
    spreads: [
      { slug: 'new-moon',   name: 'New Moon Spread',   why: 'Capricorn is a Cardinal sign — surprisingly good at beginnings when they are dignified by structure. The new moon spread provides the framework Capricorn likes around the act of starting.' },
      { slug: 'three-card', name: 'Three-Card Spread', why: 'Capricorn is efficient. The three-card past-present-future gets you to actionable insight without ceremony — useful when you actually have work to do.' },
      { slug: 'year-ahead', name: 'Year-Ahead Spread', why: 'For the longer arc, no sign benefits more from a year-ahead than Capricorn. The willingness to commit to a multi-month map is built into the sign.' },
    ],
    themes: [
      { title: 'Ambition',  body: 'Your readings will keep returning to what you are climbing. The Eight of Pentacles, the King of Wands and the Chariot all carry weight here — and so does The Devil, in its question form.' },
      { title: 'Structure', body: 'The Hierophant, the Four of Pentacles and Justice all carry the architectural question — what you have built, what is solid, what should be allowed to crumble.' },
      { title: 'Legacy',    body: 'A Capricorn theme. The Ten of Pentacles, the World and the Emperor all surface when the question is what you are leaving behind, and whether it will outlast you in a form you are proud of.' },
      { title: 'Rest',      body: 'The growth edge. The Four of Swords, The Hanged Man and the Seven of Pentacles all flag the moment when "I will rest when I am finished" has become the lie that runs your life. Capricorn is allowed to stop.' },
    ],
    faq: [
      { q: 'Why is The Devil the Capricorn tarot card?', a: 'The Devil rules Capricorn through the Golden Dawn correspondences. Both archetypes share Saturn\'s signature — but in its shadow register, the place where discipline becomes bondage and structure becomes prison. The pairing is not pejorative; it is honest about the particular trap Capricorn is prone to, and the particular key the sign is given to escape it.' },
      { q: 'What spread is best for Capricorn?', a: 'Cardinal Earth signs respond well to spreads that produce concrete, actionable maps. The new moon, the three-card past-present-future and the year-ahead all suit Capricorn\'s love of planning and execution. Highly intuitive open-ended spreads can feel imprecise.' },
      { q: 'What tarot suit matches Capricorn?', a: 'The suit of Pentacles matches Capricorn. All three Earth signs — Taurus, Virgo and Capricorn — share the Pentacles suit because Pentacles carry the element of body, work and the slow building of structure. Capricorn reads Pentacles with particular accuracy for questions of legacy and long-term work.' },
      { q: 'Are Capricorn and Cancer compatible in tarot?', a: 'Capricorn and Cancer sit opposite each other on the zodiac wheel, and their tarot cards (The Devil and The Chariot) form an axis of binding and self-mastery. In tarot work this opposition is instructive — readings about Capricorn-Cancer dynamics often surface the question of which structures protect you and which have become your cage.' },
    ],
  },

  aquarius: {
    metaDescription: 'Aquarius tarot guide: The Star is your ruling card. Discover why this Major Arcana matches Aquarius air, the suit of Swords and the spreads for a Fixed Air sign.',
    rulingCardParagraphs: [
      'The Star rules Aquarius because both archetypes are about hope and the future already inside you. The Star shows a figure kneeling at the edge of a pool, pouring water onto the earth and into the water — a quiet act of replenishment under a sky full of stars. Aquarius is the sign of the water-bearer, the figure who carries an urn of water to share with the collective. Both are pouring something out without keeping count. Both believe the future is worth feeding.',
      'Astrologically, Aquarius is traditionally ruled by Saturn and modernly by Uranus, and The Star carries both signatures — Saturn\'s long view, Uranus\'s sudden vision of what could be. The card is one of the gentlest in the deck, but it is not naive; it follows the Tower for a reason. When it appears in an Aquarius reading, it usually points to the quiet, post-collapse moment when hope returns not as a feeling but as a practice.',
      'The shadow of the pairing is worth naming. Aquarius unbalanced becomes the figure who loves humanity in the abstract while neglecting the actual humans nearby; The Star unbalanced becomes the energy of vision detached from the work of bringing it down to earth. Both lessons are the same: the urn has to be poured onto specific ground. The healthy expression is the figure who can see far enough ahead to know what to plant, and who plants it.',
    ],
    elementParagraphs: [
      'Air is the element of thought, language and the spaces between things. In tarot it lives in the suit of Swords — the blades held up against a clear sky, the figures negotiating with their own minds, the precision that can liberate or wound. For an Aquarius, the Air signature is the most future-facing of the three — Air turned toward the collective and the not-yet, the mind that thinks in terms of what could be true if enough people decided it.',
      'The Swords suit is your suit. When it dominates your readings it usually means the question is about ideas, ideology or the story you are telling about how things should be. Aquarius can sometimes read Swords as colder than they are — they are also the suit of clarity, which is one of your great gifts.',
    ],
    spreads: [
      { slug: 'year-ahead',    name: 'Year-Ahead Spread',    why: 'Fixed Air signs are willing to track ideas across long arcs. A year-ahead suits Aquarius\'s tendency to plant intellectual and ethical seeds that take seasons to bloom.' },
      { slug: 'celtic-cross',  name: 'Celtic Cross',         why: 'The Celtic Cross is dense and structural — which suits the Aquarian mind that enjoys reading patterns across many positions simultaneously.' },
      { slug: 'full-moon',     name: 'Full Moon Spread',     why: 'Aquarius is opposite Leo on the wheel, and full moons in Leo are particularly potent for Aquarius placements. The full moon spread gives that energy a vessel.' },
    ],
    themes: [
      { title: 'Vision',      body: 'Your readings will keep returning to what you can see that others have not yet seen. The Star, the Hermit and the Three of Wands all carry this territory.' },
      { title: 'Community',   body: 'Aquarius is the most communal of the air signs. The Three of Cups, the Six of Cups and the Ten of Pentacles all surface when the question is about your people — who they are, who you are choosing.' },
      { title: 'Innovation',  body: 'An Aquarian gift. The Magician, The Fool and the Eight of Pentacles all appear when the question is about what you are inventing — and whether you are inventing it for its own sake or for someone\'s benefit.' },
      { title: 'Detachment',  body: 'The growth edge. The Four of Cups, the Hermit (in its excess) and the King of Swords can all flag the moment when distance has become a way of avoiding the warmth Aquarius secretly needs.' },
    ],
    faq: [
      { q: 'Why is The Star the Aquarius tarot card?', a: 'The Star rules Aquarius through the Golden Dawn correspondences. The imagery is almost too direct — the water-bearer of Aquarius and the figure of The Star, kneeling and pouring water for the collective good, are the same figure in two visual languages. Both archetypes share the same Saturnian-Uranian signature and the same lesson: hope is a practice of pouring without measuring.' },
      { q: 'What spread is best for Aquarius?', a: 'Fixed Air signs respond well to structurally complex spreads. The year-ahead, the Celtic Cross and the full moon spread all give Aquarius the depth and range it actually wants. Simple draws can feel under-engineered for the Aquarian temperament.' },
      { q: 'What tarot suit matches Aquarius?', a: 'The suit of Swords matches Aquarius. All three Air signs — Gemini, Libra and Aquarius — share the Swords suit because Swords carry the element of mind and clear thought. Aquarius reads Swords particularly well for questions about ideology, collective story and the architecture of belief.' },
      { q: 'Are Aquarius and Leo compatible in tarot?', a: 'Aquarius and Leo sit opposite each other on the zodiac wheel, and their tarot cards (The Star and Strength) form an axis of collective and personal courage. In tarot work this opposition is unusually beautiful — readings about Aquarius-Leo dynamics often surface the question of how the warmth of one heart meets the cool vision of the many, without either having to apologise for itself.' },
    ],
  },

  pisces: {
    metaDescription: 'Pisces tarot guide: The Moon is your ruling card. Discover why this Major Arcana matches Pisces water, the suit of Cups and the spreads for a Mutable Water sign.',
    rulingCardParagraphs: [
      'The Moon rules Pisces because both archetypes live at the porous edge of self. The Moon shows a path running between two towers, with a crayfish climbing out of the water at the bottom of the card and a moon overhead pouring its complicated light over everything. Nothing in the image is fully solid. Pisces is the sign of the two fishes swimming in opposite directions, the figure who feels everything and is sometimes not certain where they end and another person begins. Both are made of dream-stuff.',
      'Astrologically, Pisces is traditionally ruled by Jupiter and modernly by Neptune, and The Moon carries that Neptunian signature of dissolution, dream and the unconscious. The card is not asking you to think your way out of what it shows you. When it appears in a Pisces reading, it usually points to a situation where the truth is felt before it is known — and where trying to drag it into daylight prematurely will only distort it.',
      'The shadow of the pairing is worth naming. Pisces unbalanced becomes the figure who escapes into the dream rather than tending it; The Moon unbalanced becomes the energy of confusion mistaken for depth. Both lessons are the same: the imagination is a doorway, and you are meant to walk through it rather than live in the doorway forever. The healthy expression is the dreamer who returns from the dream with something useful to share.',
    ],
    elementParagraphs: [
      'Water is the element of feeling, memory and the unconscious. In tarot it lives in the suit of Cups — the chalices held up to the heart, the figures in dreamlike landscapes, the depth that cannot be argued with. For a Pisces, the Water signature is the most diffuse of the three — Water as ocean rather than river, the sense that everything is connected to everything else.',
      'The Cups suit is your suit. When it dominates your readings it usually means the question is about feeling, intuition, art, devotion or the ways your inner world is leaking into your outer one. Pisces reads Cups so natively that it is sometimes worth deliberately paying attention to other suits — they carry information your default register can otherwise overlook.',
    ],
    spreads: [
      { slug: 'horseshoe', name: 'Horseshoe Spread', why: 'Mutable Water suits a spread that maps emotional movement. The horseshoe gives Pisces a clear shape — obstacle, advice, outcome — without flattening the feeling.' },
      { slug: 'weekly',    name: 'Weekly Spread',    why: 'Pisces moods move tidally. A seven-card weekly draw lets you track the shifting current of feeling without committing to a year-long forecast that cannot account for the way you actually live.' },
      { slug: 'full-moon',  name: 'Full Moon Spread', why: 'No sign benefits more from explicit lunar work than Pisces. The full moon spread gives the diffuse Piscean register a ritual container to do its release work inside.' },
    ],
    themes: [
      { title: 'Dreams',    body: 'Your readings will keep returning to the imaginal — actual night-time dreams, daydreams, the artistic vision you cannot quite name. The Moon, the Star and the Seven of Cups all carry this territory.' },
      { title: 'Compassion',body: 'A Piscean gift. The Empress, the Six of Cups and the Hierophant all surface when the question is about what you are tending for others, sometimes more than for yourself.' },
      { title: 'Devotion',  body: 'Pisces is the sign of mystical practice. The Hierophant, the Hermit and Temperance all appear when the question is about your spiritual life and the form it wants to take.' },
      { title: 'Boundaries',body: 'The growth edge. The Two of Swords, the Knight of Cups and the Eight of Cups can all flag the moment when openness has crossed into being unable to leave. Pisces is allowed to close a door.' },
    ],
    faq: [
      { q: 'Why is The Moon the Pisces tarot card?', a: 'The Moon rules Pisces through the Golden Dawn correspondences. Both archetypes share the same Jupiterian-Neptunian signature of dream, dissolution and the porous edge of self. The two fishes of Pisces and the path between two towers in The Moon both describe the same territory — the place where the conscious world meets the deep unconscious and neither is fully in charge.' },
      { q: 'What spread is best for Pisces?', a: 'Mutable Water signs respond well to flexible, lunar-aware spreads. The horseshoe, the weekly seven-card and the full moon spread all suit the Piscean rhythm of feeling-led inquiry. Rigid, highly analytical spreads can feel like trying to nail water to a wall.' },
      { q: 'What tarot suit matches Pisces?', a: 'The suit of Cups matches Pisces. All three Water signs — Cancer, Scorpio and Pisces — share the Cups suit because Cups carry the element of feeling and the deep inner life. Pisces reads Cups so natively that deliberately attending to other suits in your readings is often worth the effort.' },
      { q: 'Are Pisces and Virgo compatible in tarot?', a: 'Pisces and Virgo sit opposite each other on the zodiac wheel, and their tarot cards (The Moon and The Hermit) form an axis of dream and discernment. In tarot work this opposition is rich — readings about Pisces-Virgo dynamics often hold the question of how to honour both the dreaming and the discerning mind without making one wrong, and how each completes what the other cannot do alone.' },
    ],
  },
}

interface Props {
  params: { sign: string }
}

export async function generateStaticParams() {
  return ZODIAC.map(s => ({ sign: s.slug }))
}

const EN_TO_ES_SIGN: Record<string, string> = {
  aries: 'aries', taurus: 'tauro', gemini: 'geminis', cancer: 'cancer',
  leo: 'leo', virgo: 'virgo', libra: 'libra', scorpio: 'escorpio',
  sagittarius: 'sagitario', capricorn: 'capricornio', aquarius: 'acuario', pisces: 'piscis',
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const sign = ZODIAC.find(s => s.slug === params.sign)
  if (!sign) return {}
  const content = CONTENT[sign.slug]
  const esSign = EN_TO_ES_SIGN[sign.slug] ?? sign.slug
  return {
    title: `${sign.name} Tarot — ${sign.rulingCard.name} Card, Element & Reading Guide | TarotAxis`,
    description: content?.metaDescription ?? `${sign.name} tarot guide. Discover ${sign.rulingCard.name} as your ruling Major Arcana, your element and the spreads that resonate most with ${sign.name} energy.`,
    alternates: {
      canonical: `https://tarotaxis.com/zodiac/${sign.slug}`,
      languages: {
        'en': `https://tarotaxis.com/zodiac/${sign.slug}`,
        'es': `https://tarotaxis.com/es/zodiaco/${esSign}`,
        'x-default': `https://tarotaxis.com/zodiac/${sign.slug}`,
      },
    },
    openGraph: {
      title: `${sign.name} Tarot — ${sign.rulingCard.name} Card, Element & Reading Guide`,
      description: content?.metaDescription ?? `${sign.name} tarot guide. ${sign.rulingCard.name} is your ruling Major Arcana.`,
      type: 'website',
    },
  }
}

export default function ZodiacSignPage({ params }: Props) {
  const sign = ZODIAC.find(s => s.slug === params.sign)
  if (!sign) notFound()

  const content = CONTENT[sign.slug]
  if (!content) notFound()

  const idx = ZODIAC.findIndex(s => s.slug === sign.slug)
  const prev = ZODIAC[(idx - 1 + ZODIAC.length) % ZODIAC.length]
  const next = ZODIAC[(idx + 1) % ZODIAC.length]
  const suit = ELEMENT_TO_SUIT[sign.element]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

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
        <Link href="/zodiac" style={{ color: 'var(--muted)' }}>Zodiac</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>{sign.name}</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--gold)', lineHeight: 1 }}>{sign.symbol}</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.5rem', lineHeight: 1.3 }}>
          {sign.name} Tarot
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto .5rem', fontSize: '.9rem' }}>
          {sign.dates} · {sign.element} · {sign.modality} · Ruled by {sign.ruler}
        </p>
        <p style={{ color: 'var(--text)', maxWidth: 580, margin: '0 auto', fontSize: '.97rem', lineHeight: 1.7, fontStyle: 'italic', opacity: .85 }}>
          {sign.theme}.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          <span style={{ padding: '.25rem .85rem', background: ELEMENT_COLOUR[sign.element], border: `1px solid ${ELEMENT_BORDER[sign.element]}`, borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--text)' }}>{sign.element}</span>
          <span style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{sign.modality}</span>
          <span style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>Ruled by {sign.ruler}</span>
        </div>
      </div>

      {/* Ruling Tarot Card */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Your Ruling Tarot Card
        </h2>
        <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <Link
            href={`/cards/${sign.rulingCard.slug}`}
            style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', textDecoration: 'none', color: 'inherit', flexWrap: 'wrap' }}
          >
            <div style={{ width: 100, height: 150, borderRadius: 10, border: '1px solid rgba(201,168,76,.35)', background: 'linear-gradient(135deg,rgba(201,168,76,.12),rgba(201,168,76,.04))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1.6rem', color: 'var(--gold)' }}>{sign.symbol}</div>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.7rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.4rem' }}>Major Arcana</div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1.3rem', color: 'var(--gold)', marginBottom: '.4rem' }}>{sign.rulingCard.name}</div>
              <div style={{ fontSize: '.82rem', color: 'var(--muted)' }}>View full card meaning →</div>
            </div>
          </Link>
          <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
            {content.rulingCardParagraphs.map((p, i) => (
              <p key={i} style={{ marginBottom: i < content.rulingCardParagraphs.length - 1 ? '1rem' : 0 }}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Element Connection */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          The {sign.element} Connection
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          {content.elementParagraphs.map((p, i) => (
            <p key={i} style={{ marginBottom: i < content.elementParagraphs.length - 1 ? '1rem' : 0 }}>{p}</p>
          ))}
        </div>
        <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px dashed var(--border)' }}>
          <Link
            href={`/tarot-suits/${suit.slug}`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.55rem 1.1rem', border: '1px solid rgba(201,168,76,.3)', borderRadius: 20, color: 'var(--gold)', fontSize: '.82rem', fontFamily: "'Cinzel',serif", letterSpacing: '.06em', textDecoration: 'none' }}
          >
            Explore the Suit of {suit.suitName} →
          </Link>
        </div>
      </div>

      {/* Spreads */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Spreads That Resonate
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          Spreads suited to {sign.name}’s {sign.modality} {sign.element} temperament. These are suggestions, not rules — every reader finds their own.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {content.spreads.map(s => (
            <Link
              key={s.slug}
              href={`/spreads/${s.slug}`}
              style={{ display: 'block', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.95rem', color: 'var(--gold)', marginBottom: '.4rem', letterSpacing: '.03em' }}>{s.name}</div>
              <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0, opacity: .9 }}>{s.why}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Themes */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Themes in Your Tarot Year
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '.75rem' }}>
          {content.themes.map(t => (
            <div key={t.title} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>{t.title}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>{t.body}</p>
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
          {content.faq.map(({ q, a }) => (
            <div key={q} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{q}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14, marginBottom: '2.5rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Go deeper with {sign.name}</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Read your ruling card in full, calculate your tarot birth card, or explore the suit that carries {sign.name}’s element.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href={`/cards/${sign.rulingCard.slug}`} style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            {sign.rulingCard.name}
          </Link>
          <Link href="/birth-card" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Birth Card
          </Link>
          <Link href={`/tarot-suits/${suit.slug}`} style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Suit of {suit.suitName}
          </Link>
        </div>
      </div>

      {/* Prev / Next */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        <Link href={`/zodiac/${prev.slug}`} style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem', textDecoration: 'none' }}>
          ← {prev.symbol} {prev.name}
        </Link>
        <Link href={`/zodiac/${next.slug}`} style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem', textDecoration: 'none' }}>
          {next.name} {next.symbol} →
        </Link>
      </div>
    </div>
  )
}
