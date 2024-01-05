import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const cookieStore = cookies();
    // const isAdmin = await checkIfAdmin()
    // const adminRoutes = ['/admin/requests', '/admin/forms', '/admin/calendar']

    const idTokenExists = cookieStore.has('id_token');
    const accessTokenExists = cookieStore.has('access_token');
    const refreshTokenExists = cookieStore.has('refresh_token');

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

    // if (adminRoutes.includes(pathname) && !isAdmin) {
    //     return NextResponse.redirect(new URL('/', request.nextUrl))
    // }

    // if (!adminRoutes.includes(pathname) && isAdmin) {
    //     return NextResponse.redirect(new URL('/admin/requests', request.nextUrl))
    // }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/login',
        '/',
        '/admin/requests',
        '/admin/forms',
        '/admin/calendar',
    ],
};
