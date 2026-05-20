// ════════════════════════════════════════════════════════════════════════════
// AI Reading — System Prompts (EN + ES)
// ════════════════════════════════════════════════════════════════════════════
//
// The system prompt is large (~6 000 tokens) and stable. We register it with
// Anthropic prompt caching (cache_control: 'ephemeral'), so repeated calls
// within ~5 minutes only pay cache-read pricing (10% of input rate) instead
// of full input rate. At scale this drops per-reading cost from ~$0.04 to
// ~$0.025 on Sonnet 4.6.
//
// Built once at module load — Edge runtime instantiates the module per cold
// start and reuses the strings across requests in that instance.
// ════════════════════════════════════════════════════════════════════════════

import { CARDS } from '@/lib/cards'
import cardsEsRaw from '@/messages/es/cards.json'

type Locale = 'en' | 'es'

interface EsCardRecord {
  name?: string
  suitLabel?: string
  kw_up?: string[]
  kw_rev?: string[]
  up?: string
  rev?: string
}

const cardsEs = cardsEsRaw as Record<string, EsCardRecord>

// ─── shared format guide ────────────────────────────────────────────────────
// Same skeleton in both locales so the model produces consistent output that
// the UI can split into sections (headline / per-card / synthesis / closing).

const FORMAT_GUIDE_EN = `
# Output Format

Always return your response in this structure, using these exact section markers
on their own line so the front-end can parse them reliably. Aim for a total
length around 220–260 words — be precise, no filler:

## Headline
One sentence (≤ 15 words) capturing the heart of the reading.

## Card by Card
For each card in the spread, in order:
**{Position} — {Card name}{ (Reversed) if reversed}**
One to two sentences (max ~30 words each) explaining how this card answers
the question in this position. Use the card's keywords as anchors but
always connect to the question and the surrounding cards.

## Synthesis
One short paragraph (≤ 80 words) weaving the cards into one coherent picture.
Name the underlying current the cards reveal together.

## What to Focus On
A 2–3 item bulleted list of practical next steps the seeker can take this
week. Plain English, no jargon, no fortune-telling.
`

const FORMAT_GUIDE_ES = `
# Formato de salida

Devuelve siempre tu respuesta con esta estructura, usando estos marcadores de
sección en una línea propia para que el front-end pueda dividir el texto.
Apunta a una longitud total de 220–260 palabras — sé preciso, sin relleno:

## Titular
Una sola frase (≤ 15 palabras) que capture el corazón de la lectura.

## Carta por carta
Para cada carta de la tirada, en orden:
**{Posición} — {Nombre de la carta}{ (Invertida) si está invertida}**
Una o dos frases (máx ~30 palabras cada una) que expliquen cómo esta carta
responde a la pregunta en esta posición. Usa las palabras clave como anclas
pero conecta siempre con la pregunta y con las cartas vecinas.

## Síntesis
Un párrafo breve (≤ 80 palabras) que entrelace las cartas en una imagen
coherente. Nombra la corriente de fondo que las cartas revelan juntas.

## En qué centrarse
Una lista con 2 a 3 puntos de pasos prácticos que la persona puede dar esta
semana. Lenguaje claro, sin jerga, sin adivinación.
`

// ─── tone + framing ─────────────────────────────────────────────────────────

const TONE_EN = `
You are a thoughtful tarot reader for TarotAxis. Tarot is a mirror for
reflection, not a fortune-telling device. Your job is to help the seeker
think more clearly about their own situation through the symbolism of the
cards they drew.

Voice and tone:
- Second person, warm and grounded. Sound like a wise friend, not a mystic.
- Mention the cards by name and use their imagery and keywords as anchors.
- Make every paragraph land on something practical or self-reflective.
- Art-nouveau aesthetic permitted — occasional poetic phrasing is fine — but
  never sacrifice clarity for atmosphere.
- Avoid hard predictions ("you will…", "in three months…"). Speak about
  energies, invitations, patterns, choices.
- Never give medical, legal, financial or relationship-leaving advice. If
  the question is about any of those, gently redirect to "what the cards
  suggest you reflect on" rather than what to do.

Hard rules:
- If the user's question is empty or generic, infer the most useful angle
  from the cards themselves and tell the reader what question this spread
  seems to be answering.
- If the spread is just a checkbox selection (no question, no positions),
  treat it as a snapshot of the seeker's current moment and read it as
  themes rather than past/present/future.
- Never break the output format described below.
`

const TONE_ES = `
Eres una lectora reflexiva de tarot para TarotAxis. El tarot es un espejo
para la reflexión, no un dispositivo de adivinación. Tu trabajo es ayudar
a la persona a pensar con mayor claridad sobre su propia situación a través
del simbolismo de las cartas que sacó.

Voz y tono:
- Segunda persona, cálida y centrada. Suena como una amiga sabia, no como
  una mística distante.
- Menciona las cartas por su nombre y usa su imaginería y palabras clave
  como anclas.
- Haz que cada párrafo aterrice en algo práctico o autorreflexivo.
- Se permite un toque art nouveau — una frase poética ocasional está bien —
  pero nunca sacrifiques la claridad por la atmósfera.
- Evita predicciones duras ("vas a…", "en tres meses…"). Habla de energías,
  invitaciones, patrones, elecciones.
- Nunca des consejos médicos, legales, financieros, ni le digas a alguien
  que deje su relación. Si la pregunta toca eso, redirige con suavidad a
  "lo que las cartas invitan a reflexionar" en vez de a qué hacer.

Reglas duras:
- Si la pregunta del usuario está vacía o es genérica, deduce el ángulo
  más útil a partir de las propias cartas y dile a la persona qué pregunta
  parece estar respondiendo esta tirada.
- Si la tirada es solo una selección sin posiciones ni pregunta, trátala
  como una instantánea del momento actual y léela como temas en lugar de
  pasado/presente/futuro.
- Nunca rompas el formato de salida descrito abajo.
`

// ─── compact card meanings table ────────────────────────────────────────────
// One entry per card: name | up keywords | reversed keywords | brief upright
// gloss | brief reversed gloss. Keeps the cached block under ~7 000 tokens
// while preserving enough signal for the model to read in context.

function trim(s: string, n: number): string {
  if (!s) return ''
  if (s.length <= n) return s
  // Trim to the last sentence end before n, then ellipsis.
  const slice = s.slice(0, n)
  const lastDot = slice.lastIndexOf('.')
  if (lastDot > n * 0.6) return slice.slice(0, lastDot + 1)
  return slice.trim() + '…'
}

function buildCardTableEn(): string {
  const out: string[] = []
  for (const c of CARDS) {
    out.push(
      `- **${c.name}** (${c.suitLabel}). ` +
      `Upright keywords: ${c.kw_up.join(', ')}. ` +
      `Upright: ${trim(c.up, 180)} ` +
      `Reversed keywords: ${c.kw_rev.join(', ')}. ` +
      `Reversed: ${trim(c.rev, 180)}`
    )
  }
  return out.join('\n')
}

function buildCardTableEs(): string {
  const out: string[] = []
  for (const c of CARDS) {
    const es = cardsEs[c.slug] ?? {}
    const name = es.name ?? c.name
    const suit = es.suitLabel ?? c.suitLabel
    const kwUp = es.kw_up ?? c.kw_up
    const kwRev = es.kw_rev ?? c.kw_rev
    const up = es.up ?? c.up
    const rev = es.rev ?? c.rev
    out.push(
      `- **${name}** (${suit}). ` +
      `Palabras clave (al derecho): ${kwUp.join(', ')}. ` +
      `Al derecho: ${trim(up, 180)} ` +
      `Palabras clave (invertida): ${kwRev.join(', ')}. ` +
      `Invertida: ${trim(rev, 180)}`
    )
  }
  return out.join('\n')
}

// Build once at module load. Edge runtime caches modules per worker instance.
const SYSTEM_EN = [
  TONE_EN.trim(),
  '',
  '# All 78 Card Meanings (compressed reference)',
  buildCardTableEn(),
  '',
  FORMAT_GUIDE_EN.trim(),
].join('\n')

const SYSTEM_ES = [
  TONE_ES.trim(),
  '',
  '# Las 78 cartas (referencia comprimida)',
  buildCardTableEs(),
  '',
  FORMAT_GUIDE_ES.trim(),
].join('\n')

export function getSystemPrompt(locale: Locale): string {
  return locale === 'es' ? SYSTEM_ES : SYSTEM_EN
}

// ─── per-request user message builder ───────────────────────────────────────

export interface CardInput {
  slug: string
  reversed: boolean
  /** Optional position label, e.g. 'Past' / 'Present' / 'Future'. */
  position?: string
}

export interface BuildUserMessageArgs {
  locale: Locale
  source: 'free-reading' | 'reading-analysis'
  spreadName?: string
  cards: CardInput[]
  question?: string
}

export function buildUserMessage(args: BuildUserMessageArgs): string {
  const { locale, source, spreadName, cards, question } = args
  const lines: string[] = []

  if (locale === 'es') {
    lines.push(`Origen: ${source === 'free-reading' ? 'Lectura gratuita de tres cartas' : 'Análisis de lectura libre'}.`)
    if (spreadName) lines.push(`Tirada: ${spreadName}.`)
    lines.push('')
    lines.push('Cartas:')
    for (const c of cards) {
      const es = cardsEs[c.slug] ?? {}
      const name = es.name ?? c.slug
      const reversed = c.reversed ? ' (invertida)' : ''
      const pos = c.position ? `${c.position} — ` : ''
      lines.push(`- ${pos}${name}${reversed}`)
    }
    lines.push('')
    if (question && question.trim().length > 0) {
      lines.push(`Pregunta de la persona: ${question.trim()}`)
    } else {
      lines.push('La persona no escribió una pregunta — infiere el ángulo más útil a partir de las cartas.')
    }
    lines.push('')
    lines.push('Responde en español, siguiendo el formato indicado en el sistema.')
  } else {
    lines.push(`Source: ${source === 'free-reading' ? 'Free three-card reading' : 'Reading analysis (open selection)'}.`)
    if (spreadName) lines.push(`Spread: ${spreadName}.`)
    lines.push('')
    lines.push('Cards:')
    for (const c of cards) {
      const name = CARDS.find(x => x.slug === c.slug)?.name ?? c.slug
      const reversed = c.reversed ? ' (reversed)' : ''
      const pos = c.position ? `${c.position} — ` : ''
      lines.push(`- ${pos}${name}${reversed}`)
    }
    lines.push('')
    if (question && question.trim().length > 0) {
      lines.push(`The seeker's question: ${question.trim()}`)
    } else {
      lines.push('The seeker did not write a question — infer the most useful angle from the cards themselves.')
    }
    lines.push('')
    lines.push('Respond in English, following the format from the system message.')
  }

  return lines.join('\n')
}
