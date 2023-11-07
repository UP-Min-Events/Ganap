import { getForms } from "../../_utils/downloadable_forms"

export const GET = async () => {
    const response = await getForms("DownloadableForms");
    return response;
}