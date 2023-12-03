import { queryPastEvents } from "@/app/api/_utils/event";
import { NextRequest } from "next/server";
import handleEndpointAuth from "@/app/api/_utils/handle_endpoint_auth";

export const GET = async (request: NextRequest) => {
  try {
    await handleEndpointAuth(request);
    const response = await queryPastEvents("EventDetails");
    return response;
  } catch (error) {
    return error;
  }
};
