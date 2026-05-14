// Supabase session refresh for Next.js middleware.
//
// Called from /middleware.ts on every request. Refreshes the auth cookies if
// they're about to expire so signed-in users stay signed in across navigations.
//
// Also exposes the user on the request so the middleware can decide whether
// to redirect protected routes.

import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          )
        },
      },
    },
  )

  // IMPORTANT: getUser() refreshes the auth token if needed. Do not skip.
  const { data: { user } } = await supabase.auth.getUser()

  return { supabaseResponse, user }
}
