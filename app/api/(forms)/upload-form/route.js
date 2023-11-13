import { uploadForm } from "app/api/_utils/downloadable_forms"

export const POST = async (request) => {
    const response = await uploadForm(await request.json(), "DownloadableForms");
    return response;
}