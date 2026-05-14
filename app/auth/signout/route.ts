// POST-only sign-out endpoint. Clears the Supabase session cookies and
// redirects home. POST-only so a stray link can't accidentally sign someone
// out (CSRF-safe).

import { NextResponse, type NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  const supabase = createClient()
  await supabase.auth.signOut()
  const { origin } = new URL(request.url)
  return NextResponse.redirect(`${origin}/`, { status: 303 })
}
