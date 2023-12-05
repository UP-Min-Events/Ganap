import { uploadForm } from "app/api/_utils/downloadable_forms"
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
    const response = await uploadForm(await request.json(), "DownloadableForms");
    return response;
}