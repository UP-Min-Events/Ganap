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

        // Get tokens
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

        // Get user info
        const res = await fetch(`https://${process.env.NEXT_PUBLIC_COGNITO_DOMAIN}/oauth2/userInfo`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${data.access_token}`
            }
        })

        if (!res.ok) {
            return NextResponse.json({
                error: 'Error fetching user info'
            })
        }

        const user_info_data = await res.json()
        const sub = user_info_data.sub

        cookieStore.set('sub', sub)

        // Check if user exists
        const rez = await fetch(`http://localhost:3000/api/users/${sub}`, {
            method: 'GET',
        })

        const user_data = await rez.json()

        // Create user if it doesn't exist
        if (user_data.error) {
            const res = await fetch(`http://localhost:3000/api/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: sub,
                    firstName: null,
                    lastName: null,
                    studentNumber: null,
                    yearLevel: null,
                    degreeProgram: null
                })
            })

            const data = await res.json()

            if (data.$metadata.httpStatusCode !== 200) {
                return new NextResponse(`Error creating user: ${JSON.stringify(data)} ${data.$metadata.httpStatusCode}`)
            }

            return NextResponse.redirect(new URL('/onboarding', request.nextUrl))
        }

        if (
            user_data.data.firstName === null || 
            user_data.data.lastName === null || 
            user_data.data.studentNumber === null || 
            user_data.data.yearLevel === null || 
            user_data.data.degreeProgram === null
        ) {
            return NextResponse.redirect(new URL('/onboarding', request.nextUrl))
        }

        if (
            idTokenExists && 
            accessTokenExists && 
            refreshTokenExists &&
            sub && 
            user_data.data.firstName !== null &&
            user_data.data.lastName !== null 
        ) {
            return NextResponse.redirect(new URL('/', request.nextUrl))
        }
    }

    const error = searchParams.get('error')
    return NextResponse.json({ error: error || 'Unknown error' })
} 