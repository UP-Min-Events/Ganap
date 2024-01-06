import { NextResponse, type NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import getUserInfo from '@/utils/getUserInfo';
import checkIfAdmin from '@/utils/checkIfAdmin';

const {
    NEXT_PUBLIC_COGNITO_DOMAIN,
    NEXT_PUBLIC_COGNITO_USER_POOL_APP_CLIENT_ID,
    NEXT_PUBLIC_COGNITO_USER_POOL_APP_CLIENT_SECRET,
} = process.env;

export async function GET(request: NextRequest) {
    try {
        const origin = request.nextUrl.origin;
        const searchParams = request.nextUrl.searchParams;
        const code = searchParams.get('code') as string;

        if (!code) {
            const error = searchParams.get('error');
            return NextResponse.json({ error: error || 'Unknown error' });
        }

        const authorizationHeader = `Basic ${Buffer.from(
            `${NEXT_PUBLIC_COGNITO_USER_POOL_APP_CLIENT_ID}:${NEXT_PUBLIC_COGNITO_USER_POOL_APP_CLIENT_SECRET}`,
        ).toString('base64')}`;

        const requestBody = new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: NEXT_PUBLIC_COGNITO_USER_POOL_APP_CLIENT_ID as string,
            code: code,
            redirect_uri: `${origin}/api/auth/callback`,
        });

        // Get tokens
        const token_response = await fetch(
            `https://${NEXT_PUBLIC_COGNITO_DOMAIN}/oauth2/token`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: authorizationHeader,
                },
                body: requestBody,
            },
        );

        const token_data = await token_response.json();

        if (!token_response.ok) {
            return NextResponse.json({
                error: token_data.error,
                error_description: token_data.error_description,
            });
        }

        // Set tokens as cookies
        const cookieStore = cookies();

        cookieStore.set({
            name: 'id_token',
            value: token_data.id_token,
            secure: true,
            sameSite: 'none',
            path: '/',
            httpOnly: true,
        });

        cookieStore.set({
            name: 'access_token',
            value: token_data.access_token,
            secure: true,
            sameSite: 'none',
            path: '/',
            httpOnly: true,
        });

        cookieStore.set({
            name: 'refresh_token',
            value: token_data.refresh_token,
            secure: true,
            sameSite: 'none',
            path: '/',
            httpOnly: true,
        });

        // Get user info
        const user_info_data = await getUserInfo();
        const sub = user_info_data.sub;

        cookieStore.set({
            name: 'sub',
            value: sub,
            secure: true,
            sameSite: 'none',
            path: '/',
            httpOnly: true,
        });

        // Check if Admin
        const isAdmin = await checkIfAdmin();

        if (isAdmin) {
            cookieStore.set({
                name: 'admin',
                value: 'true',
                secure: true,
                sameSite: 'none',
                path: '/',
                httpOnly: true,
            });
        } else {
            cookieStore.set({
                name: 'admin',
                value: 'false',
                secure: true,
                sameSite: 'none',
                path: '/',
                httpOnly: true,
            });
        }

        // Check if user exists
        const user_response = await fetch(`${origin}/api/users/${sub}`, {
            method: 'GET',
        });

        const user_data = await user_response.json();

        // Create user if it doesn't exist
        if (user_data.error) {
            const res = await fetch(`${origin}/api/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: sub,
                    firstName: null,
                    lastName: null,
                    studentNumber: null,
                    yearLevel: null,
                    degreeProgram: null,
                }),
            });

            const data = await res.json();

            if (data.$metadata.httpStatusCode !== 200) {
                return new NextResponse(
                    `Error creating user: ${JSON.stringify(data)} ${
                        data.$metadata.httpStatusCode
                    }`,
                );
            }

            return NextResponse.redirect(
                new URL('/onboarding', request.nextUrl),
            );
        }

        // Redirect to onboarding page if user data is incomplete
        if (
            user_data.firstName === null ||
            user_data.lastName === null ||
            user_data.studentNumber === null ||
            user_data.yearLevel === null ||
            user_data.degreeProgram === null
        ) {
            return NextResponse.redirect(
                new URL('/onboarding', request.nextUrl),
            );
        }

        // Redirect to home page if user exists
        if (
            sub &&
            user_data.firstName !== null &&
            user_data.lastName !== null
        ) {
            return NextResponse.redirect(new URL('/', request.nextUrl));
        }

        const error = searchParams.get('error');
        return NextResponse.json({ error: error || 'Unknown error' });
    } catch (error) {
        return NextResponse.json({ error: error });
    }
}

export const dynamic = 'force-dynamic';
