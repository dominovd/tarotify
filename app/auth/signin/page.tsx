import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import SignInForm from './SignInForm'

export const metadata: Metadata = {
  title: 'Sign in to TarotAxis',
  description: 'Sign in to TarotAxis with a magic link sent to your email.',
  robots: { index: false, follow: false },
}

interface Props {
  searchParams: { next?: string; error?: string; sent?: string }
}

export default async function SignInPage({ searchParams }: Props) {
  // Already signed in? Send to the destination (or /account by default).
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (user) redirect(searchParams.next || '/account')

  return (
    <div style={{ maxWidth: 440, margin: '0 auto', padding: '4rem 1.5rem 5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.68rem', letterSpacing: '.22em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Welcome back
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '.8rem' }}>
          Sign in to TarotAxis
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 360, margin: '0 auto', lineHeight: 1.7, fontSize: '.88rem' }}>
          We&rsquo;ll send a one-time sign-in link to your email. No password needed.
        </p>
      </div>

      <SignInForm next={searchParams.next} initialError={searchParams.error} initialSent={searchParams.sent === '1'} />

      <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '.82rem', color: 'var(--muted)' }}>
        New to TarotAxis?{' '}
        <a href={`/auth/signup${searchParams.next ? `?next=${encodeURIComponent(searchParams.next)}` : ''}`} style={{ color: 'var(--gold)' }}>
          Create an account
        </a>
      </div>
    </div>
  )
}
