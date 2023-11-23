import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {

    const body = request.body?.toString()

    return NextResponse.json({ body: body })

    const domain = process.env.NEXT_PUBLIC_COGNITO_DOMAIN
    const response = await fetch(`https://${domain}/oauth2/userInfo`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_COGNITO_USER_POOL_APP_CLIENT_ID}`
        }
    })
}