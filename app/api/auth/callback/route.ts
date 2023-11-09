import { NextResponse, type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {

    const searchParams = request.nextUrl.searchParams
    const code = searchParams.get('code') as string
    const state = searchParams.get('state') as string

    if (code) {

        // let authorizeParams = new URLSearchParams()

        // authorizeParams.append('response_type', 'code')
        // authorizeParams.append('client_id', process.env.NEXT_PUBLIC_COGNITO_USER_POOL_WEB_CLIENT_ID as string)
        // authorizeParams.append('redirect_uri', 'http://localhost:3000/api/auth/callback')
        // authorizeParams.append('state', state)
        // authorizeParams.append('scope', 'email openid profile')

        // return new NextResponse(`https://${process.env.NEXT_PUBLIC_COGNITO_DOMAIN}/oauth2/authorize?${authorizeParams.toString()}`)

        // const authorizeResponse = await fetch(`https://${process.env.NEXT_PUBLIC_COGNITO_DOMAIN}/oauth2/authorize?${authorizeParams.toString()}`)

        // return new NextResponse(authorizeResponse.body, {
        //     status: authorizeResponse.status,
        //     headers: authorizeResponse.headers
        // })

        // const authorizeData = await authorizeResponse.json()

        // return NextResponse.json({ data: authorizeData })

        // ================================================================================


        // let params = new URLSearchParams()

        // params.append('grant_type', 'authorization_code')
        // params.append('client_id', process.env.NEXT_PUBLIC_COGNITO_USER_POOL_WEB_CLIENT_ID as string)
        // params.append('client_secret', process.env.NEXT_PUBLIC_COGNITO_USER_POOL_WEB_CLIENT_SECRET as string)
        // params.append('code', code)
        // params.append('redirect_uri', 'http://localhost:3000/api/auth/callback' as string)

        // // return new NextResponse(`https://${process.env.NEXT_PUBLIC_COGNITO_DOMAIN}/oauth2/token&grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_COGNITO_USER_POOL_WEB_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_COGNITO_USER_POOL_WEB_CLIENT_SECRET}&code=${code}&redirect_uri=http://localhost:3000/api/auth/callback`)
        // // return new NextResponse(`https://${process.env.NEXT_PUBLIC_COGNITO_DOMAIN}/oauth2/token?${params.toString()}`)

        // const response = await fetch(`https://${process.env.NEXT_PUBLIC_COGNITO_DOMAIN}/oauth2/token`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //         'Authorization': 'Basic NWViOW4zNjh0Ymh1Ymc0cHE1cmUxb3A5bzQ6YWs3MWkwbzAzdHRjdWM4cnZjdXZmZDEwYjY5aW5oZDRjaDdrZHRnMzgwb20wOTlldmJm'
        //     },
        //     body: `https://${process.env.NEXT_PUBLIC_COGNITO_DOMAIN}/oauth2/token&grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_COGNITO_USER_POOL_WEB_CLIENT_ID}&code=${code}&redirect_uri=http://localhost:3000/api/auth/callback`
        // })

        // return new NextResponse(response.body, {
        //     status: response.status,
        //     headers: response.headers
        // })

        // const data = await response.json()

        // if (data.error) {
        //     return NextResponse.json({ error: data.error, error_description: data.error_description })
        // }

        // return NextResponse.json({ data: data })
        // return NextResponse.redirect(new URL('/login', request.nextUrl))
    }

    const error = searchParams.get('error')

    return NextResponse.json({ error: error || 'Unknown error'})
} 