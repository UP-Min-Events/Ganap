import { queryForm, deleteForm } from '../../../_utils/downloadable_forms'

export const GET = async (_, { params }) => {
    const { formId } = await params;
    const response = await queryForm(formId, "DownloadableForms");
    return response;
}

export const DELETE = async (_, { params }) => {
    const { formId } = await params;
    const response = await deleteForm(formId, "DownloadableForms");
    return response;
}
