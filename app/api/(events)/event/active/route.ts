import { NextRequest } from "next/server";
import { queryActiveEvents } from "../../../_utils/event";
import handleEndpointAuth from "../../../_utils/handle_endpoint_auth";

export const GET = async (request: NextRequest) => {
    try {
        await handleEndpointAuth(request);

        // TODO: Add query parameters to include last evaluated key for query pagination
        const response = await queryActiveEvents("EventDetails");
        return response;
    } catch (error) {
        return error;
    }
};
