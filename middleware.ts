import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from './lib/supabase/middleware'

// Paths that require a signed-in user. Anything else is public.
// Spanish counterparts (/es/account, /es/journal/sync) added for i18n auth flow.
const PROTECTED_PATHS = [
  '/account',
  '/journal/sync',
  '/es/account',
  '/es/journal/sync',
]

function isProtected(pathname: string): boolean {
  return PROTECTED_PATHS.some(p => pathname === p || pathname.startsWith(p + '/'))
}

// Redirect target for unauthenticated access. Spanish-prefixed protected
// paths get redirected to the Spanish signin page so the user stays in
// their locale through the auth flow.
function signinPathFor(pathname: string): string {
  return pathname.startsWith('/es/') || pathname === '/es' ? '/es/auth/signin' : '/auth/signin'
}

export async function middleware(request: NextRequest) {
  const { supabaseResponse, user } = await updateSession(request)

  // Redirect unauthenticated requests on protected paths to signin (locale-aware).
  if (isProtected(request.nextUrl.pathname) && !user) {
    const url = request.nextUrl.clone()
    url.pathname = signinPathFor(request.nextUrl.pathname)
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
