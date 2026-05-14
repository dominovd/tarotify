'use client'

// Browser-side Supabase client. Uses the anon key (safe to expose) and reads
// the session from cookies via @supabase/ssr.
//
// Use this in client components and hooks only. For server components and
// route handlers, use lib/supabase/server.ts.

import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
}
