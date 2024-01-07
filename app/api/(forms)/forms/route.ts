import { NextRequest } from 'next/server';
import { getForms } from '@/app/api/_utils/downloadable_forms';
import handleEndpointAuth from '@/app/api/_utils/handle_endpoint_auth';
import { errorBody } from '@/app/api/_utils/status_handler';

export const GET = async (request: NextRequest) => {
    try {
        await handleEndpointAuth(request);
        const response = await getForms('DownloadableForms');
        return response;
    } catch (error) {
        return errorBody(400, 'Something is wrong') as any;
    }
};
