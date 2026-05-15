import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Acerca de TarotAxis — Quiénes Somos | TarotAxis',
  description: 'Acerca de TarotAxis — un sitio independiente de lecturas de tarot con IA que ofrece los significados de las 78 cartas, tiradas, rituales lunares y una guía honesta para la auto-reflexión.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/acerca-de',
    languages: {
      'en': 'https://tarotaxis.com/about',
      'es': 'https://tarotaxis.com/es/acerca-de',
      'x-default': 'https://tarotaxis.com/about',
    },
  },
  openGraph: {
    title: 'Acerca de TarotAxis — Quiénes Somos | TarotAxis',
    description: 'Acerca de TarotAxis — un sitio independiente de lecturas de tarot con IA.',
    url: 'https://tarotaxis.com/es/acerca-de',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'website',
  },
}

export default function AcercaDePage() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        <Link href="/es" style={{ color: 'var(--muted)' }}>Inicio</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Acerca de</span>
      </nav>

      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.2em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Acerca de
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '1rem', lineHeight: 1.25 }}>
          Acerca de TarotAxis
        </h1>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.95rem' }}>
          TarotAxis es un sitio independiente de lecturas de tarot con IA. Gratuito, con poca publicidad, y construido para personas que quieren pensar con claridad con la ayuda de un antiguo conjunto de imágenes — no para que les vendan un destino.
        </p>
      </div>

      <section style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>En qué Creemos</h2>
        <p style={{ color: 'var(--text)', lineHeight: 1.85, fontSize: '.9rem', marginBottom: '1rem' }}>
          El tarot es una herramienta para pensar, no una máquina de adivinación. Las 78 cartas son una biblioteca extraordinariamente compacta de la experiencia humana — reflejan lo que ya es cierto en lugar de determinar lo que será. Usadas con honestidad, las cartas convierten sentimientos vagos en preguntas concretas y te permiten ver tu situación desde ángulos a los que no habrías llegado por tu cuenta.
        </p>
        <p style={{ color: 'var(--text)', lineHeight: 1.85, fontSize: '.9rem', margin: 0 }}>
          No prometemos certeza, predicción ni intervención sobrenatural. Sí ofrecemos una herramienta de lectura gratuita bellamente construida, los significados de las 78 cartas escritos con cuidado, decenas de tiradas y rituales lunares, y la estructura para mantener tu práctica honesta.
        </p>
      </section>

      <section style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>Qué Encontrarás Aquí</h2>
        <ul style={{ color: 'var(--text)', lineHeight: 1.85, fontSize: '.9rem', paddingLeft: '1.25rem', margin: 0 }}>
          <li style={{ marginBottom: '.5rem' }}>Los significados de las 78 cartas del tarot — al derecho e invertidas, además de contexto de amor, carrera y espiritualidad.</li>
          <li style={{ marginBottom: '.5rem' }}>Una herramienta de lectura interactiva y gratuita con múltiples tiradas, guardada localmente en tu dispositivo.</li>
          <li style={{ marginBottom: '.5rem' }}>Una biblioteca de tiradas: la clásica de tres cartas y la Cruz Celta, esquemas de amor y relaciones, rituales lunares, trabajo de manifestación.</li>
          <li style={{ marginBottom: '.5rem' }}>Guías paso a paso para principiantes, incluyendo cómo leer, barajar, limpiar y llevar un diario.</li>
          <li style={{ marginBottom: 0 }}>Una carta del día, un oráculo de sí/no, una calculadora de carta de nacimiento y material de referencia sobre palos, barajas y correspondencias zodiacales.</li>
        </ul>
      </section>

      <section style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>Una Nota Sobre la IA</h2>
        <p style={{ color: 'var(--text)', lineHeight: 1.85, fontSize: '.9rem', margin: 0 }}>
          Los significados de las cartas en TarotAxis son contenido escrito, basado en la tradición estándar Rider-Waite-Smith y curado por un editor humano. El sitio utiliza asistencia automatizada para parte de la producción de contenido, pero cada página se revisa en cuanto a honestidad, precisión y tono antes de publicarse. No usamos IA para generar afirmaciones místicas en vivo sobre tu futuro — no es así como funcionan las cartas.
        </p>
      </section>

      <section style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>Contacto</h2>
        <p style={{ color: 'var(--text)', lineHeight: 1.85, fontSize: '.9rem', margin: 0 }}>
          Preguntas, comentarios, correcciones, consultas de colaboración — lo leemos todo. <a href="mailto:info@tarotaxis.com" style={{ color: 'var(--gold)', borderBottom: '1px solid rgba(201,168,76,.3)' }}>info@tarotaxis.com</a>
        </p>
      </section>

      <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="/es/lectura-gratis" style={{ padding: '.8rem 1.6rem', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.35)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Prueba una Lectura Gratis →
        </Link>
      </div>
    </div>
  )
}
