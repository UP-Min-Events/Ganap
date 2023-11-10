import { uploadEventDetails } from "../../_utils/event";

export const POST = async (request) => {
    const response = await uploadEventDetails(await request.json(), "EventDetails");
    return response;
}