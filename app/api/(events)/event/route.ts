import { uploadEventDetails } from "../../_utils/event";
import { NextRequest } from "next/server";
import handleEndpointAuth from "../../_utils/handle_endpoint_auth";

export const POST = async (request: NextRequest) => {
    try {
        await handleEndpointAuth(request);
        const response = await uploadEventDetails(await request.json(), "EventDetails");
        return response;
    } catch (error) {
        return error;
    }
}