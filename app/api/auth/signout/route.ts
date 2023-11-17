import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
    const cookieStore = cookies()

    const idTokenExists = cookieStore.has('id_token')
    const accessTokenExists = cookieStore.has('access_token')
    const refreshTokenExists = cookieStore.has('refresh_token')

    if (idTokenExists) {
        cookieStore.delete('id_token')
    }

    if (accessTokenExists) {
        cookieStore.delete('access_token')
    }

    if (refreshTokenExists) {
        cookieStore.delete('refresh_token')
    }

    return NextResponse.redirect(new URL('/login', request.nextUrl))
}