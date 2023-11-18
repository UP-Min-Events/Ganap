import { NextResponse } from "next/server"
import crypto from 'crypto'

export async function GET() {
    let authorizeParams = new URLSearchParams()

    const state = crypto.randomBytes(16).toString('hex')

    authorizeParams.append('response_type', 'code')
    authorizeParams.append('client_id', process.env.NEXT_PUBLIC_COGNITO_USER_POOL_APP_CLIENT_ID as string)
    authorizeParams.append('redirect_uri', 'http://localhost:3000/api/auth/callback')
    authorizeParams.append('state', state)
    authorizeParams.append('identity_provider', 'Google')
    authorizeParams.append('scope', 'email openid profile')
    
    return NextResponse.redirect(`https://${process.env.NEXT_PUBLIC_COGNITO_DOMAIN}/oauth2/authorize?${authorizeParams.toString()}`)
}