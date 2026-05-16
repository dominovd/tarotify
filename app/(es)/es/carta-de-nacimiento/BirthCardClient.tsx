'use client'

import { useState } from 'react'
import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import CardImage from '@/components/CardImage'

// ─── Spanish Major Arcana lookup (ids 0–21) ──────────────────────────────────
// Inlined here because this is a client component — server-only helpers in
// lib/i18n/get-card.ts can't be imported. Slugs match localizeCardSlug('the-…', 'es').

interface EsMajor {
  id: number
  name: string
  enSlug: string
  esSlug: string
  kw: string[]
  up: string
}

const ES_MAJORS: EsMajor[] = [
  { id: 0, name: 'El Loco', enSlug: 'the-fool', esSlug: 'el-loco',
    kw: ['principios', 'espontaneidad', 'inocencia'],
    up: 'El Loco marca el inicio de un viaje completamente nuevo. Estás adentrándote en lo desconocido con apertura y disposición a vivir la vida plenamente. Confía en el proceso — lo que parece un riesgo es en realidad una invitación a crecer.' },
  { id: 1, name: 'El Mago', enSlug: 'the-magician', esSlug: 'el-mago',
    kw: ['voluntad', 'habilidad', 'manifestación'],
    up: 'El Mago te dice que todas las herramientas, habilidades y recursos que necesitas ya están en tus manos. Ahora es el momento de enfocar tu voluntad y emprender una acción deliberada. Lo que puedes concebir, lo puedes crear.' },
  { id: 2, name: 'La Sacerdotisa', enSlug: 'the-high-priestess', esSlug: 'la-sacerdotisa',
    kw: ['intuición', 'misterio', 'conocimiento interior'],
    up: 'La Sacerdotisa te insta a quedarte en silencio y escuchar la voz interior. No todas las respuestas llegan por la lógica — algunas verdades solo pueden sentirse. Confía en tu intuición incluso cuando no puedas explicarla del todo.' },
  { id: 3, name: 'La Emperatriz', enSlug: 'the-empress', esSlug: 'la-emperatriz',
    kw: ['abundancia', 'nutrición', 'creatividad'],
    up: 'La Emperatriz irradia abundancia, creatividad y calidez maternal. Este es un momento para nutrir tus proyectos, tus relaciones y a ti misma. El crecimiento es natural y seguro cuando lo cuidas con amor y paciencia.' },
  { id: 4, name: 'El Emperador', enSlug: 'the-emperor', esSlug: 'el-emperador',
    kw: ['autoridad', 'estructura', 'estabilidad'],
    up: 'El Emperador te llama a entrar en tu poder con disciplina e intención clara. Construye sobre cimientos sólidos, establece orden y asume la responsabilidad de tu dominio. El liderazgo y la estructura te servirán bien.' },
  { id: 5, name: 'El Hierofante', enSlug: 'the-hierophant', esSlug: 'el-hierofante',
    kw: ['tradición', 'guía', 'creencia'],
    up: 'El Hierofante te invita a buscar la sabiduría a través de las tradiciones establecidas, un maestro de confianza o tus propios valores arraigados. Es un momento para el estudio espiritual, el ritual y para alinear tus elecciones con tus principios más altos.' },
  { id: 6, name: 'Los Enamorados', enSlug: 'the-lovers', esSlug: 'los-enamorados',
    kw: ['amor', 'alineación', 'elección'],
    up: 'Los Enamorados hablan de conexión profunda, elección significativa y alineación entre el corazón y los valores. Una relación o decisión importante está en juego — elige desde tu yo auténtico, no desde el miedo o la presión.' },
  { id: 7, name: 'El Carro', enSlug: 'the-chariot', esSlug: 'el-carro',
    kw: ['determinación', 'victoria', 'control'],
    up: 'El Carro señala que la victoria está al alcance — pero requiere voluntad enfocada, disciplina y la capacidad de manejar fuerzas opuestas. Tienes la fuerza para superar los obstáculos. Mantén la vista en el destino.' },
  { id: 8, name: 'La Fuerza', enSlug: 'strength', esSlug: 'la-fuerza',
    kw: ['coraje', 'paciencia', 'compasión'],
    up: 'La verdadera fuerza no es fuerza bruta — es el coraje silencioso de afrontar los desafíos con gracia, paciencia y compasión. Tienes más recursos internos de los que crees. Aproxímate a tu situación con suavidad en lugar de agresión.' },
  { id: 9, name: 'El Ermitaño', enSlug: 'the-hermit', esSlug: 'el-ermitano',
    kw: ['soledad', 'introspección', 'guía interior'],
    up: 'El Ermitaño te llama hacia adentro. Aléjate del ruido del mundo y busca tu propia luz interior. Es un tiempo para el autoexamen honesto, la meditación y la sabiduría que solo el silencio puede revelar.' },
  { id: 10, name: 'La Rueda de la Fortuna', enSlug: 'wheel-of-fortune', esSlug: 'la-rueda-de-la-fortuna',
    kw: ['cambio', 'ciclos', 'destino'],
    up: 'La Rueda de la Fortuna señala un punto de inflexión — las circunstancias están cambiando a tu favor. Lo que se sentía estancado empieza a moverse. Confía en que el universo tiene un plan, aunque aún no puedas ver el cuadro completo.' },
  { id: 11, name: 'La Justicia', enSlug: 'justice', esSlug: 'la-justicia',
    kw: ['verdad', 'equidad', 'responsabilidad'],
    up: 'La Justicia exige verdad, equidad y responsabilidad. Una situación está siendo pesada cuidadosamente — el resultado reflejará las decisiones tomadas. Actúa con integridad y confía en que lo correcto prevalecerá.' },
  { id: 12, name: 'El Colgado', enSlug: 'the-hanged-man', esSlug: 'el-colgado',
    kw: ['pausa', 'rendición', 'nueva perspectiva'],
    up: 'El Colgado te pide que pares, te rindas y veas las cosas desde un ángulo completamente diferente. Lo que parece un retraso es en realidad un regalo profundo — una oportunidad para ganar la perspectiva que lo cambiará todo.' },
  { id: 13, name: 'La Muerte', enSlug: 'death', esSlug: 'la-muerte',
    kw: ['transformación', 'finales', 'renovación'],
    up: 'La Muerte en el tarot rara vez significa muerte física — anuncia una transformación profunda. Algo debe terminar para que algo nuevo pueda comenzar. Esta transición, aunque difícil, es profundamente necesaria y, en última instancia, liberadora.' },
  { id: 14, name: 'La Templanza', enSlug: 'temperance', esSlug: 'la-templanza',
    kw: ['equilibrio', 'paciencia', 'moderación'],
    up: 'La Templanza llama al equilibrio, a la paciencia y a la mezcla de opuestos. Fluye, no fuerces. El camino medio entre los extremos lleva a la armonía duradera. La integración lleva tiempo pero produce algo mucho más duradero.' },
  { id: 15, name: 'El Diablo', enSlug: 'the-devil', esSlug: 'el-diablo',
    kw: ['sombra', 'apego', 'esclavitud'],
    up: 'El Diablo te confronta con tus sombras — los hábitos, creencias y apegos que te mantienen en cadenas. La conciencia es el primer paso hacia la libertad. ¿A qué le estás cediendo tu poder?' },
  { id: 16, name: 'La Torre', enSlug: 'the-tower', esSlug: 'la-torre',
    kw: ['disrupción', 'revelación', 'convulsión'],
    up: 'La Torre trae una disrupción repentina y dramática — pero solo demuele lo que fue construido sobre cimientos falsos. Aunque sea estremecedora, esta convulsión revela la verdad y crea el espacio necesario para una reconstrucción auténtica.' },
  { id: 17, name: 'La Estrella', enSlug: 'the-star', esSlug: 'la-estrella',
    kw: ['esperanza', 'sanación', 'serenidad'],
    up: 'La Estrella llega después de las tormentas para ofrecer sanación, esperanza y un renovado sentido de dirección. El universo te está guiando hacia algo genuinamente bueno. Confía en el proceso, cree en el viaje y permítete ser renovada.' },
  { id: 18, name: 'La Luna', enSlug: 'the-moon', esSlug: 'la-luna',
    kw: ['ilusión', 'el inconsciente', 'sueños'],
    up: 'La Luna proyecta largas sombras y distorsiona la realidad. No todo es lo que parece. Los miedos ocultos, los patrones inconscientes y las ilusiones están saliendo a la superficie. Presta atención a tus sueños e intuiciones.' },
  { id: 19, name: 'El Sol', enSlug: 'the-sun', esSlug: 'el-sol',
    kw: ['alegría', 'claridad', 'éxito'],
    up: 'El Sol irradia alegría pura, claridad y éxito. Esta es una de las cartas más positivas del mazo. Estás entrando en un periodo de vitalidad, confianza y expresión auténtica de ti misma. Celebra quién eres.' },
  { id: 20, name: 'El Juicio', enSlug: 'judgement', esSlug: 'el-juicio',
    kw: ['despertar', 'renovación', 'llamada'],
    up: 'El Juicio anuncia un despertar profundo y una llamada a elevarse por encima del pasado. Se te convoca a una versión superior de ti misma — libera los viejos juicios, perdona lo que necesita ser perdonado y responde a la llamada.' },
  { id: 21, name: 'El Mundo', enSlug: 'the-world', esSlug: 'el-mundo',
    kw: ['completitud', 'totalidad', 'logro'],
    up: 'El Mundo celebra la culminación exitosa de un ciclo importante. Has integrado las lecciones, hecho el trabajo y llegado a un lugar de totalidad genuina. Honra lo que has logrado antes de adentrarte en la próxima gran aventura.' },
]

const MESES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
]

const ROMAN: Record<number, string> = {
  0: '0', 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII',
  8: 'VIII', 9: 'IX', 10: 'X', 11: 'XI', 12: 'XII', 13: 'XIII', 14: 'XIV',
  15: 'XV', 16: 'XVI', 17: 'XVII', 18: 'XVIII', 19: 'XIX', 20: 'XX',
  21: 'XXI',
}

function calcBirthCardNumber(day: number, month: number, year: number): number {
  const str = String(day).padStart(2, '0') + String(month).padStart(2, '0') + String(year)
  let sum = str.split('').reduce((a, c) => a + parseInt(c), 0)
  while (sum > 22) {
    sum = String(sum).split('').reduce((a, c) => a + parseInt(c), 0)
  }
  return sum // 22 = El Loco (id 0)
}

function buildCalcSteps(day: number, month: number, year: number, result: EsMajor): string {
  const str = String(day).padStart(2, '0') + String(month).padStart(2, '0') + String(year)
  const digits = str.split('').join('+')
  const firstSum = str.split('').reduce((a, c) => a + parseInt(c), 0)

  const steps: string[] = [`${digits} = ${firstSum}`]
  let current = firstSum
  while (current > 22) {
    const next = String(current).split('').reduce((a, c) => a + parseInt(c), 0)
    steps.push(`${String(current).split('').join('+')} = ${next}`)
    current = next
  }
  steps.push(result.name)
  return steps.join(' → ')
}

function formatDate(day: number, month: number, year: number): string {
  return `${String(day).padStart(2, '0')} de ${MESES[month - 1]} de ${year}`
}

const currentYear = new Date().getFullYear()
const years = Array.from({ length: currentYear - 1929 }, (_, i) => currentYear - i)
const days = Array.from({ length: 31 }, (_, i) => i + 1)

export default function BirthCardClient() {
  const [day, setDay] = useState<number | null>(null)
  const [month, setMonth] = useState<number | null>(null)
  const [year, setYear] = useState<number | null>(null)
  const [result, setResult] = useState<EsMajor | null>(null)
  const [calcSteps, setCalcSteps] = useState<string>('')

  function handleCalculate() {
    if (!day || !month || !year) return
    const num = calcBirthCardNumber(day, month, year)
    const card = ES_MAJORS.find(c => c.id === (num === 22 ? 0 : num))
    if (!card) return
    setResult(card)
    setCalcSteps(buildCalcSteps(day, month, year, card))
  }

  const selectStyle: React.CSSProperties = {
    background: 'var(--on-bg-04)',
    border: '1px solid var(--border)',
    borderRadius: 8,
    color: 'var(--text)',
    fontFamily: "'Cinzel',serif",
    fontSize: '0.9rem',
    padding: '0.6rem 0.75rem',
    cursor: 'pointer',
    flex: 1,
    minWidth: 90,
  }

  return (
    <main style={{ maxWidth: 680, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

      {/* Page header */}
      <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{
          fontFamily: "'Cinzel',serif",
          fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
          color: 'var(--gold)',
          marginBottom: '0.6rem',
          letterSpacing: '0.04em',
        }}>
          Calculadora de Carta de Nacimiento del Tarot
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 480, margin: '0 auto' }}>
          Descubre el Arcano Mayor que da forma a tu camino de vida
        </p>
      </header>

      {/* Date input form */}
      <section style={{
        background: 'var(--on-bg-025)',
        border: '1px solid var(--border)',
        borderRadius: 14,
        padding: '1.75rem',
        marginBottom: '2rem',
      }}>
        <p style={{
          fontFamily: "'Cinzel',serif",
          fontSize: '0.8rem',
          color: 'var(--muted)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          Introduce tu fecha de nacimiento
        </p>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          {/* Day */}
          <select
            style={selectStyle}
            value={day ?? ''}
            onChange={e => setDay(e.target.value ? parseInt(e.target.value) : null)}
            aria-label="Día"
          >
            <option value="">Día</option>
            {days.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          {/* Month */}
          <select
            style={{ ...selectStyle, flex: 2, minWidth: 130 }}
            value={month ?? ''}
            onChange={e => setMonth(e.target.value ? parseInt(e.target.value) : null)}
            aria-label="Mes"
          >
            <option value="">Mes</option>
            {MESES.map((m, i) => (
              <option key={m} value={i + 1}>{m.charAt(0).toUpperCase() + m.slice(1)}</option>
            ))}
          </select>

          {/* Year */}
          <select
            style={selectStyle}
            value={year ?? ''}
            onChange={e => setYear(e.target.value ? parseInt(e.target.value) : null)}
            aria-label="Año"
          >
            <option value="">Año</option>
            {years.map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        <button
          onClick={handleCalculate}
          disabled={!day || !month || !year}
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '0.9rem',
            letterSpacing: '0.08em',
            color: 'var(--gold)',
            background: 'transparent',
            border: '1px solid var(--gold)',
            borderRadius: 8,
            padding: '0.65rem 1.75rem',
            cursor: (!day || !month || !year) ? 'not-allowed' : 'pointer',
            opacity: (!day || !month || !year) ? 0.45 : 1,
            transition: 'opacity 0.2s',
          }}
        >
          Calcular
        </button>
      </section>

      {/* Result */}
      {result && day && month && year && (
        <section style={{
          background: 'var(--on-bg-025)',
          border: '1px solid var(--border)',
          borderRadius: 14,
          padding: '2rem 1.75rem',
          marginBottom: '2rem',
          textAlign: 'center',
        }}>
          {/* Card image — uses the canonical English slug for asset lookup */}
          <div style={{ width: 150, height: 225, borderRadius: 12, overflow: 'hidden', border: '2px solid var(--gold)', margin: '0 auto 1.25rem' }}>
            <CardImage slug={result.enSlug} alt={result.name} />
          </div>

          {/* "Tu Carta de Nacimiento" label */}
          <p style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '0.7rem',
            color: 'var(--muted)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '0.4rem',
          }}>
            Tu Carta de Nacimiento
          </p>

          {/* Card name */}
          <h2 style={{
            fontFamily: "'Cinzel',serif",
            fontSize: 'clamp(1.4rem, 3.5vw, 1.9rem)',
            color: 'var(--gold)',
            marginBottom: '0.5rem',
            letterSpacing: '0.04em',
          }}>
            {result.name}
          </h2>

          {/* Number badge */}
          <p style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '0.8rem',
            color: 'var(--muted)',
            letterSpacing: '0.1em',
            marginBottom: '1rem',
          }}>
            {ROMAN[result.id]} · Arcanos Mayores
          </p>

          {/* Keywords */}
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
            {result.kw.map(kw => (
              <span
                key={kw}
                style={{
                  fontFamily: "'Cinzel',serif",
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  border: '1px solid var(--border)',
                  borderRadius: 20,
                  padding: '0.25rem 0.75rem',
                }}
              >
                {kw}
              </span>
            ))}
          </div>

          {/* Description paragraph */}
          <p style={{
            color: 'var(--text)',
            fontSize: '0.95rem',
            lineHeight: 1.7,
            maxWidth: 520,
            margin: '0 auto 1.5rem',
            textAlign: 'left',
          }}>
            Nacida el {formatDate(day, month, year)}, tu carta de nacimiento es <strong style={{ color: 'var(--gold)' }}>{result.name}</strong>.{' '}
            {result.up}
          </p>

          {/* Link to full card meaning (Spanish) */}
          <Link
            href={`/es/cartas/${result.esSlug}`}
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.85rem',
              color: 'var(--gold)',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              display: 'inline-block',
              marginBottom: '1.5rem',
            }}
          >
            Explora el significado completo de {result.name} →
          </Link>

          {/* Share */}
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
            <ShareButton type="birth" cardName={result.name} />
          </div>
        </section>
      )}

      {/* Calculation breakdown — shown after result */}
      {result && calcSteps && day && month && year && (
        <section style={{
          background: 'var(--on-bg-025)',
          border: '1px solid var(--border)',
          borderRadius: 14,
          padding: '1.5rem 1.75rem',
          marginBottom: '2rem',
        }}>
          <h2 style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '1rem',
            color: 'var(--gold)',
            letterSpacing: '0.05em',
            marginBottom: '0.75rem',
          }}>
            ¿Cómo se calcula la Carta de Nacimiento?
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
            Cada dígito de tu fecha de nacimiento (DD·MM·AAAA) se suma y se reduce hasta que el total quede entre 1 y 22. Ese número corresponde a un Arcano Mayor. El 22 se asigna a El Loco.
          </p>
          <div style={{
            background: 'rgba(0,0,0,.25)',
            borderRadius: 8,
            padding: '0.9rem 1rem',
            fontFamily: 'monospace',
            fontSize: '0.88rem',
            color: 'var(--text)',
            lineHeight: 1.7,
            wordBreak: 'break-word',
          }}>
            <span style={{ color: 'var(--muted)', marginRight: 8 }}>
              {String(day).padStart(2, '0')} · {String(month).padStart(2, '0')} · {year}
            </span>
            → {calcSteps}
          </div>
        </section>
      )}

      {/* Explanation section */}
      <section style={{
        background: 'var(--on-bg-025)',
        border: '1px solid var(--border)',
        borderRadius: 14,
        padding: '1.75rem',
        marginBottom: '2rem',
      }}>
        <h2 style={{
          fontFamily: "'Cinzel',serif",
          fontSize: '1.15rem',
          color: 'var(--gold)',
          letterSpacing: '0.04em',
          marginBottom: '0.75rem',
        }}>
          ¿Qué es una carta de nacimiento del tarot?
        </h2>
        <p style={{ color: 'var(--text)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
          Una carta de nacimiento es el Arcano Mayor que corresponde a tu fecha de nacimiento a través de la numerología. Se calcula reduciendo los dígitos de tu fecha a un número entre 1 y 22 y asignándolo después al Arcano Mayor correspondiente. Tu carta de nacimiento representa una energía o arquetipo esencial que atraviesa tu vida como un hilo constante — no es tu destino, sino una lente fundamental a través de la cual tiendes a experimentar el mundo.
        </p>

        <h2 style={{
          fontFamily: "'Cinzel',serif",
          fontSize: '1.15rem',
          color: 'var(--gold)',
          letterSpacing: '0.04em',
          marginBottom: '0.75rem',
        }}>
          Cómo encontrar tu carta de nacimiento del tarot
        </h2>
        <p style={{ color: 'var(--text)', fontSize: '0.95rem', lineHeight: 1.75 }}>
          Introduce el día, mes y año de tu nacimiento en la calculadora de arriba y pulsa Calcular. La herramienta suma los ocho dígitos de tu fecha (dos del día, dos del mes, cuatro del año), y reduce el total sumando sus dígitos otra vez — repitiendo hasta que el número sea 22 o menos. El número resultante identifica tu Arcano Mayor personal. La aritmética en sí no tiene nada de místico; el valor está en usar la carta como un espejo reflexivo para tus propios patrones y tendencias.
        </p>
      </section>

      {/* CTA links */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        <Link
          href="/es/lectura-gratis"
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '0.85rem',
            color: 'var(--gold)',
            border: '1px solid var(--gold)',
            borderRadius: 8,
            padding: '0.65rem 1.4rem',
            textDecoration: 'none',
            letterSpacing: '0.05em',
          }}
        >
          Prueba una Lectura Completa →
        </Link>
        <Link
          href="/es/cartas"
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '0.85rem',
            color: 'var(--muted)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: '0.65rem 1.4rem',
            textDecoration: 'none',
            letterSpacing: '0.05em',
          }}
        >
          Explora las 78 Cartas →
        </Link>
      </div>

    </main>
  )
}
