import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
    const cookieStore = cookies()

    const idTokenExists = cookieStore.has('id_token')
    const accessTokenExists = cookieStore.has('access_token')
    const refreshTokenExists = cookieStore.has('refresh_token')
    const subExists = cookieStore.has('sub')

    if (!refreshTokenExists) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
    
    const token = cookieStore.get('refresh_token')

    const response = await fetch(`https://${process.env.NEXT_PUBLIC_COGNITO_DOMAIN}/oauth2/revoke`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${Buffer.from(`${process.env.NEXT_PUBLIC_COGNITO_USER_POOL_APP_CLIENT_ID}:${process.env.NEXT_PUBLIC_COGNITO_USER_POOL_APP_CLIENT_SECRET}`).toString('base64')}`,
        },
        body : new URLSearchParams({
            token: token?.value!
        })
    })

    if (!response.ok) {
        const data = await response.json()

        return NextResponse.json({
            error: data.error, 
            error_description: data.error_description,
        })
    }

    if (response.ok) {
        if (idTokenExists) {
            cookieStore.delete('id_token')
        }

        if (accessTokenExists) {
            cookieStore.delete('access_token')
        }

        if (refreshTokenExists) {
            cookieStore.delete('refresh_token')
        }

        if (subExists) {
            cookieStore.delete('sub')
        }

        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}