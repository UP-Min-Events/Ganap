import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const cookieStore = cookies()

    const idTokenExists = cookieStore.has('id_token')
    const accessTokenExists = cookieStore.has('access_token')
    const refreshTokenExists = cookieStore.has('refresh_token')

    if (
        idTokenExists && 
        accessTokenExists && 
        refreshTokenExists &&
        pathname === '/login'
    ) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    if (
        !idTokenExists && 
        !accessTokenExists && 
        !refreshTokenExists &&
        pathname !== '/login'
    ) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
    
    return NextResponse.next()
}

export const config = {
    matcher: ['/login', '/'],
}
  