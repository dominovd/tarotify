import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import SignInForm from '../signin/SignInForm'

export const metadata: Metadata = {
  title: 'Crea una cuenta en TarotAxis',
  description: 'Crea una cuenta gratuita en TarotAxis para sincronizar tus lecturas entre dispositivos, guardar favoritos y recibir correos diarios personalizados.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/auth/signup',
    languages: {
      'en': 'https://tarotaxis.com/auth/signup',
      'es': 'https://tarotaxis.com/es/auth/signup',
      'x-default': 'https://tarotaxis.com/auth/signup',
    },
  },
  robots: { index: false, follow: false },
}

interface Props {
  searchParams: { next?: string }
}

export default async function SignUpPage({ searchParams }: Props) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (user) redirect(searchParams.next || '/es/account')

  return (
    <div style={{ maxWidth: 440, margin: '0 auto', padding: '4rem 1.5rem 5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.68rem', letterSpacing: '.22em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Cuenta gratuita
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '.8rem' }}>
          Crea tu cuenta de TarotAxis
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 380, margin: '0 auto', lineHeight: 1.7, fontSize: '.88rem' }}>
          Sincroniza el progreso del quiz y favoritos entre dispositivos, predefine tus preferencias de lectura y recibe el resumen semanal.
        </p>
      </div>

      <SignInForm next={searchParams.next} mode="signup" />

      <ul style={{ marginTop: '2rem', padding: 0, listStyle: 'none', color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.9 }}>
        <li>✦ Progreso del quiz entre dispositivos</li>
        <li>✦ Guarda tiradas y cartas favoritas</li>
        <li>✦ Preferencias de personalización (zodíaco, tema, frecuencia)</li>
        <li>✦ Resumen semanal de TarotAxis por correo</li>
      </ul>

      <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '.82rem', color: 'var(--muted)' }}>
        ¿Ya tienes una cuenta?{' '}
        <a href={`/es/auth/signin${searchParams.next ? `?next=${encodeURIComponent(searchParams.next)}` : ''}`} style={{ color: 'var(--gold)' }}>
          Inicia sesión
        </a>
      </div>
    </div>
  )
}
