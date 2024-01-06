import { uploadEventDetails } from '@/app/api/_utils/event';
import { NextRequest } from 'next/server';
import handleEndpointAuth from '@/app/api/_utils/handle_endpoint_auth';
import { errorBody } from '@/app/api/_utils/status_handler';

export const POST = async (request: NextRequest) => {
    try {
        await handleEndpointAuth(request);
        console.log(request);
        const response = await uploadEventDetails(
            await await request.json(),
            'EventDetails',
        );
        return response;
    } catch (error) {
        console.log('ERROR', error);
        // const message = (await (error as any).json()).message;
        // console.log('MESSAGE', message);
        return errorBody(
            parseInt((error as any).status),
            (await (error as any).json()).message as string,
        );
    }
};
