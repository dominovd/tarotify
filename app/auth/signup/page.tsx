import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import SignInForm from '../signin/SignInForm'

export const metadata: Metadata = {
  title: 'Create a TarotAxis account',
  description: 'Create a free TarotAxis account to sync your readings across devices, save favourites, and get personalised daily emails.',
  robots: { index: false, follow: false },
}

interface Props {
  searchParams: { next?: string }
}

export default async function SignUpPage({ searchParams }: Props) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (user) redirect(searchParams.next || '/account')

  return (
    <div style={{ maxWidth: 440, margin: '0 auto', padding: '4rem 1.5rem 5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.68rem', letterSpacing: '.22em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Free account
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '.8rem' }}>
          Create your TarotAxis account
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 380, margin: '0 auto', lineHeight: 1.7, fontSize: '.88rem' }}>
          Sync quiz progress and favourites across devices, pre-fill your reading preferences, and receive the weekly digest.
        </p>
      </div>

      <SignInForm next={searchParams.next} mode="signup" />

      <ul style={{ marginTop: '2rem', padding: 0, listStyle: 'none', color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.9 }}>
        <li>✦ Cross-device quiz progress</li>
        <li>✦ Save favourite spreads &amp; cards</li>
        <li>✦ Pre-fill personalisation prefs (zodiac, theme, frequency)</li>
        <li>✦ Weekly TarotAxis digest email</li>
      </ul>

      <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '.82rem', color: 'var(--muted)' }}>
        Already have an account?{' '}
        <a href={`/auth/signin${searchParams.next ? `?next=${encodeURIComponent(searchParams.next)}` : ''}`} style={{ color: 'var(--gold)' }}>
          Sign in
        </a>
      </div>
    </div>
  )
}
