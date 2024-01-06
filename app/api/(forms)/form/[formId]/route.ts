import { queryForm, deleteForm } from '@/app/api/_utils/downloadable_forms';
import { NextRequest } from 'next/server';
import handleEndpointAuth from '@/app/api/_utils/handle_endpoint_auth';

type ParamType = 'formId';

export const GET = async (
    request: NextRequest,
    { params }: Params<ParamType>,
) => {
    try {
        await handleEndpointAuth(request);
        const { formId } = await params;
        const response = await queryForm(formId, 'DownloadableForms');
        return response;
    } catch (error) {
        return error as any;
    }
};

export const DELETE = async (
    request: NextRequest,
    { params }: Params<ParamType>,
) => {
    try {
        await handleEndpointAuth(request);
        const { formId } = await params;
        const response = await deleteForm(formId, 'DownloadableForms');
        return response;
    } catch (error) {
        return error as any;
    }
};
