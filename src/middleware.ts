
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });


    if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
     
        return NextResponse.redirect(new URL('/signin', request.url));
    }

    if (!token && request.nextUrl.pathname.startsWith('/admin-pannel')) {
      
      return NextResponse.redirect(new URL('/signin', request.url));
  }

    if (token && token.role !== 'job-provider' && request.nextUrl.pathname.startsWith('/admin-pannel')) {
       
        return NextResponse.redirect(new URL('/unauthorised', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/admin-pannel/:path*'],
};
