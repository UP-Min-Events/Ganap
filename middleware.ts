import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const cookieStore = cookies();

    const adminRoutes = ['/admin/*'];

    const idTokenExists = cookieStore.has('id_token');
    const accessTokenExists = cookieStore.has('access_token');
    const refreshTokenExists = cookieStore.has('refresh_token');
    const adminExists = cookieStore.has('admin');

    if (
        idTokenExists &&
        accessTokenExists &&
        refreshTokenExists &&
        pathname === '/login'
    ) {
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }

    if (
        !idTokenExists &&
        !accessTokenExists &&
        !refreshTokenExists &&
        pathname !== '/login'
    ) {
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }

    if (adminExists) {
        const isAdmin = cookieStore.get('admin')?.value === 'true';

        if (pathname.startsWith('/admin') && !isAdmin) {
            return NextResponse.redirect(new URL('/', request.nextUrl));
        } else if (!pathname.startsWith('/admin') && isAdmin) {
            return NextResponse.redirect(
                new URL('/admin/requests', request.nextUrl),
            );
        }

        if (pathname === '/admin' && isAdmin) {
            return NextResponse.rewrite(
                new URL('/admin/requests', request.nextUrl),
            );
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/',
        '/login',
        '/account',
        '/calendar',
        '/event',
        '/request',
        '/admin/:path*',
    ],
};
