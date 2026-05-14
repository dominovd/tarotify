import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import ProfileForm from './ProfileForm'

export const metadata: Metadata = {
  title: 'Your TarotAxis account',
  description: 'Your TarotAxis account dashboard — profile, subscription status, preferences.',
  robots: { index: false, follow: false },
}

interface Profile {
  id: string
  email: string
  display_name: string | null
  zodiac_sign: string | null
  preferred_theme: string | null
  preferred_frequency: string | null
}

interface Subscription {
  status: string
  plan: string
  current_period_end: string | null
}

export default async function AccountPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/signin?next=/account')

  const { data: profileRow } = await supabase
    .from('profiles')
    .select('id, email, display_name, zodiac_sign, preferred_theme, preferred_frequency')
    .eq('id', user.id)
    .maybeSingle<Profile>()

  // Subscription is optional — most users won't have a row yet.
  const { data: subRow } = await supabase
    .from('subscriptions')
    .select('status, plan, current_period_end')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle<Subscription>()

  const isPremium = subRow?.status === 'active' || subRow?.status === 'trialing'
  const tierLabel = isPremium ? 'Premium' : 'Free'
  const tierDesc = isPremium
    ? `${subRow?.plan === 'premium-yearly' ? 'Yearly' : 'Monthly'} plan${subRow?.current_period_end ? ' · renews ' + new Date(subRow.current_period_end).toLocaleDateString() : ''}`
    : 'Free plan — upgrade for cloud journal sync and AI features when they launch.'

  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      {/* Hero */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.68rem', letterSpacing: '.22em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Your account
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '.5rem' }}>
          {profileRow?.display_name || user.email}
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', margin: 0 }}>
          {user.email}
        </p>
      </div>

      {/* Subscription card */}
      <section style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem 1.75rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap', marginBottom: '.6rem' }}>
          <div>
            <div style={{ fontSize: '.66rem', letterSpacing: '.16em', color: 'var(--muted)', fontFamily: "'Cinzel',serif", textTransform: 'uppercase', opacity: .65, marginBottom: '.4rem' }}>
              Plan
            </div>
            <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.15rem', letterSpacing: '.04em' }}>
              {tierLabel}
            </div>
          </div>
          {!isPremium && (
            <Link
              href="/pricing"
              style={{
                background: 'rgba(201,168,76,.13)',
                border: '1px solid rgba(201,168,76,.55)',
                borderRadius: 10,
                padding: '.55rem 1.25rem',
                color: 'var(--gold)',
                fontFamily: "'Cinzel',serif",
                fontSize: '.82rem',
                letterSpacing: '.08em',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Upgrade
            </Link>
          )}
        </div>
        <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>
          {tierDesc}
        </p>
      </section>

      {/* Personalisation prefs form */}
      <ProfileForm
        initial={{
          display_name: profileRow?.display_name ?? '',
          zodiac_sign: profileRow?.zodiac_sign ?? '',
          preferred_theme: profileRow?.preferred_theme ?? '',
          preferred_frequency: profileRow?.preferred_frequency ?? '',
        }}
      />

      {/* Sign out */}
      <form action="/auth/signout" method="POST" style={{ marginTop: '2rem', textAlign: 'center' }}>
        <button
          type="submit"
          style={{
            background: 'transparent',
            border: '1px solid var(--border)',
            borderRadius: 10,
            padding: '.7rem 1.6rem',
            color: 'var(--muted)',
            fontFamily: "'Cinzel',serif",
            fontSize: '.82rem',
            letterSpacing: '.08em',
            cursor: 'pointer',
          }}
        >
          Sign out
        </button>
      </form>
    </div>
  )
}
