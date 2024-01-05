import { NextResponse, type NextRequest } from 'next/server';
import { cookies } from 'next/headers';

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
        cookieStore.set('id_token', token_data.id_token);
        cookieStore.set('access_token', token_data.access_token);
        cookieStore.set('refresh_token', token_data.refresh_token);

        // Get user info
        const user_info_response = await fetch(
            `https://${NEXT_PUBLIC_COGNITO_DOMAIN}/oauth2/userInfo`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token_data.access_token}`,
                },
            },
        );

        if (!user_info_response.ok) {
            return NextResponse.json({ error: 'Error fetching user info' });
        }

        const user_info_data = await user_info_response.json();
        const sub = user_info_data.sub;

        cookieStore.set('sub', sub);

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
