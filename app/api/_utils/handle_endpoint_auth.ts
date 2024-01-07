import endpointAuth from './endpoint_auth';
import { errorBody } from './status_handler';
import { NextRequest } from 'next/server';

const handleEndpointAuth = async (request: NextRequest) => {
    const authorizationHeader = request.headers?.get('authorization') ?? null;
    const refreshTokenQueryParam =
        request.nextUrl?.searchParams.get('refresh_token') ?? null;

    console.log('authorizationHeader', authorizationHeader);
    console.log('refreshTokenQueryParam', refreshTokenQueryParam);

    if (
        typeof authorizationHeader !== 'string' ||
        typeof refreshTokenQueryParam !== 'string'
    ) {
        throw errorBody(
            400,
            'Missing authorization header or HTTP request body.',
        );
    } else {
        const accessToken = authorizationHeader.split('Bearer ')[1] as string;
        const refreshToken = refreshTokenQueryParam as string;

        const isAuthorized = await endpointAuth({ accessToken, refreshToken });

        if (!isAuthorized) {
            throw errorBody(403, 'Forbidden');
        }
    }
};

export default handleEndpointAuth;
