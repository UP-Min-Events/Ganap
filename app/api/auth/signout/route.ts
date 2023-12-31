import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const {
    NEXT_PUBLIC_COGNITO_DOMAIN,
    NEXT_PUBLIC_COGNITO_USER_POOL_APP_CLIENT_ID,
    NEXT_PUBLIC_COGNITO_USER_POOL_APP_CLIENT_SECRET,
} = process.env;

export async function GET(request: NextRequest) {
    const cookieStore = cookies();

    const idTokenExists = cookieStore.has('id_token');
    const accessTokenExists = cookieStore.has('access_token');
    const refreshTokenExists = cookieStore.has('refresh_token');
    const subExists = cookieStore.has('sub');
    const adminExists = cookieStore.has('admin');

    if (!refreshTokenExists) {
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }

    const token = cookieStore.get('refresh_token');
    const authorizationHeader = `Basic ${Buffer.from(
        `${NEXT_PUBLIC_COGNITO_USER_POOL_APP_CLIENT_ID}:${NEXT_PUBLIC_COGNITO_USER_POOL_APP_CLIENT_SECRET}`,
    ).toString('base64')}`;

    const response = await fetch(
        `https://${NEXT_PUBLIC_COGNITO_DOMAIN}/oauth2/revoke`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: authorizationHeader,
            },
            body: new URLSearchParams({
                token: token?.value!,
            }),
        },
    );

    if (!response.ok) {
        const data = await response.json();

        return NextResponse.json({
            error: data.error,
            error_description: data.error_description,
        });
    }

    if (response.ok) {
        if (idTokenExists) {
            cookieStore.delete('id_token');
        }

        if (accessTokenExists) {
            cookieStore.delete('access_token');
        }

        if (refreshTokenExists) {
            cookieStore.delete('refresh_token');
        }

        if (subExists) {
            cookieStore.delete('sub');
        }

        if (adminExists) {
            cookieStore.delete('admin');
        }

        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }
}
