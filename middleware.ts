import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from './lib/supabase/middleware'

// Paths that require a signed-in user. Anything else is public.
const PROTECTED_PATHS = [
  '/account',
  '/journal/sync',
]

function isProtected(pathname: string): boolean {
  return PROTECTED_PATHS.some(p => pathname === p || pathname.startsWith(p + '/'))
}

export async function middleware(request: NextRequest) {
  const { supabaseResponse, user } = await updateSession(request)

  // Redirect unauthenticated requests on protected paths to /auth/signin.
  if (isProtected(request.nextUrl.pathname) && !user) {
    const url = request.nextUrl.clone()
    url.pathname = '/auth/signin'
    // Preserve the original destination so signin can redirect back after auth.
    url.searchParams.set('next', request.nextUrl.pathname)
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}

export const config = {
  // Run on every page route except static assets and Next internals.
  // Note: API routes are included so that auth-required APIs get session refresh.
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|cards|cards-pastel|cards-rws|fonts|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}
