import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Protect /dashboard for authenticated users (expand in production)
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  const isPro = request.cookies.get('pro_user')?.value === 'true';
  const isDashboard = url.pathname.startsWith('/dashboard');

  if (isDashboard && !isPro) {
    url.pathname = '/subscribe';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
