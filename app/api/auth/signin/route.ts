import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const {
    NEXT_PUBLIC_COGNITO_DOMAIN,
    NEXT_PUBLIC_COGNITO_USER_POOL_APP_CLIENT_ID,
} = process.env;

export async function GET(request: NextRequest) {
    let authorizeParams = new URLSearchParams();
    const origin = request.nextUrl.origin;

    const state = crypto.randomBytes(16).toString('hex');

    authorizeParams.append('response_type', 'code');
    authorizeParams.append(
        'client_id',
        NEXT_PUBLIC_COGNITO_USER_POOL_APP_CLIENT_ID as string,
    );
    authorizeParams.append('redirect_uri', `${origin}/api/auth/callback`);
    authorizeParams.append('state', state);
    authorizeParams.append('identity_provider', 'Google');
    authorizeParams.append('scope', 'email openid profile');

    return NextResponse.redirect(
        `https://${NEXT_PUBLIC_COGNITO_DOMAIN}/oauth2/authorize?${authorizeParams.toString()}`,
    );
}
