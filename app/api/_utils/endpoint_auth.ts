import { CognitoJwtVerifier } from 'aws-jwt-verify';
import { JwtExpiredError } from 'aws-jwt-verify/error';
import { CognitoAccessTokenPayload } from 'aws-jwt-verify/jwt-model';

interface EndpointAuthProps {
    accessToken: string;
    refreshToken: string;
}

const verifyToken = async ({
    accessToken,
    refreshToken,
}: EndpointAuthProps): Promise<string | CognitoAccessTokenPayload> => {
    const verifier = CognitoJwtVerifier.create({
        userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID as string,
        tokenUse: 'access',
        clientId: process.env
            .NEXT_PUBLIC_COGNITO_USER_POOL_APP_CLIENT_ID as string,
    });

    try {
        const payload = await verifier.verify(accessToken);
        return payload;
    } catch (error) {
        if (error instanceof JwtExpiredError) {
            try {
                return await getNewTokens(refreshToken);
            } catch (error) {
                console.error('GetNewTokens error', error);
                throw error;
            }
        }

        console.error('VerifyAccessToken error', error);
        throw error;
    }
};

const getNewTokens = async (refreshToken: string): Promise<string> => {
    const requestBody = new URLSearchParams({
        grant_type: 'refresh_token',
        client_id: process.env
            .NEXT_PUBLIC_COGNITO_USER_POOL_APP_CLIENT_ID as string,
        refresh_token: refreshToken,
    }).toString();

    const response = await fetch(
        `https://${process.env.NEXT_PUBLIC_COGNITO_DOMAIN}/oauth2/token`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${Buffer.from(
                    `${process.env.NEXT_PUBLIC_COGNITO_USER_POOL_APP_CLIENT_ID}:${process.env.NEXT_PUBLIC_COGNITO_USER_POOL_APP_CLIENT_SECRET}`,
                ).toString('base64')}`,
            },
            body: requestBody,
        },
    );

    if (response.ok) {
        const data = (await response.json()) as string;
        console.log('GetToken data', data);
        return data;
    } else {
        const { error } = await response.json();
        console.error('GetToken error', error);
        throw error;
    }
};

const endpointAuth = async ({
    accessToken,
    refreshToken,
}: EndpointAuthProps) => {
    try {
        await verifyToken({ accessToken, refreshToken });
        return true;
    } catch (error) {
        console.error('EndpointAuth error', error);
        return false;
    }
};

export default endpointAuth;
