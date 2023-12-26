import { queryForm, deleteForm } from '../../../_utils/downloadable_forms'
import { NextRequest } from 'next/server';
import handleEndpointAuth from '@/app/api/_utils/handle_endpoint_auth';

type ParamType = "formId";

export const GET = async (_: NextRequest, { params }: Params<ParamType>) => {
    const { formId } = await params;
    const response = await queryForm(formId, "DownloadableForms");
    return response;
}

export const DELETE = async (_:NextRequest, { params }: Params<ParamType>) => {
    const { formId } = await params;
    const response = await deleteForm(formId, "DownloadableForms");
    return response;
}
