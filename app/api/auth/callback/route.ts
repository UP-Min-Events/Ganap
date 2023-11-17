import { NextResponse, type NextRequest } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {

    const searchParams = request.nextUrl.searchParams
    const code = searchParams.get('code') as string

    if (code) {
        const authorizationHeader = `Basic ${Buffer.from(`${process.env.NEXT_PUBLIC_COGNITO_USER_POOL_APP_CLIENT_ID}:${process.env.NEXT_PUBLIC_COGNITO_USER_POOL_APP_CLIENT_SECRET}`).toString('base64')}`

        const requestBody = new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_APP_CLIENT_ID as string,
            code: code,
            redirect_uri: 'http://localhost:3000/api/auth/callback'
        })

        const response = await fetch(`https://${process.env.NEXT_PUBLIC_COGNITO_DOMAIN}/oauth2/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': authorizationHeader
            },
            body: requestBody
        })

        const data = await response.json()

        if (!response.ok) {
            return NextResponse.json({
                error: data.error, 
                error_description: data.error_description
            })
        }

        const cookieStore = cookies()
        cookieStore.set('id_token', data.id_token)
        cookieStore.set('access_token', data.access_token)
        cookieStore.set('refresh_token', data.refresh_token)
        
        const idTokenExists = cookieStore.has('idtoken')
        const accessTokenExists = cookieStore.has('accesstoken')
        const refreshTokenExists = cookieStore.has('refreshtoken')

        if (idTokenExists && accessTokenExists && refreshTokenExists) {
            return NextResponse.redirect('/')
        }

        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    const error = searchParams.get('error')
    return NextResponse.json({ error: error || 'Unknown error' })
} 