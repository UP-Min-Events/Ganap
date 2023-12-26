import { uploadForm } from '@/app/api/_utils/downloadable_forms';
import { NextRequest } from 'next/server';
import handleEndpointAuth from '@/app/api/_utils/handle_endpoint_auth';

export const POST = async (request: NextRequest) => {
    try {
        handleEndpointAuth(request);
        const response = await uploadForm(
            await request.json(),
            'DownloadableForms',
        );
        return response;
    } catch (error) {
        return error;
    }
};
