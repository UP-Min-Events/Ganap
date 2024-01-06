import { uploadEventDetails } from '@/app/api/_utils/event';
import { NextRequest } from 'next/server';
import handleEndpointAuth from '@/app/api/_utils/handle_endpoint_auth';
import { errorBody } from '@/app/api/_utils/status_handler';

export const POST = async (request: NextRequest) => {
    try {
        await handleEndpointAuth(request);
        const response = await uploadEventDetails(
            await await request.json(),
            'EventDetails',
        );
        return response;
    } catch (error) {
        console.log('ERROR', error);
        return errorBody(400, error as string);
    }
};
