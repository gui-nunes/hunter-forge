import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export default async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const url = req.nextUrl.clone();

  if (!token && url.pathname.startsWith('/dashboard')) {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  if (token && url.pathname === '/') {
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
