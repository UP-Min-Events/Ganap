import { postComment, getComments } from "../../../_utils/event_comments";
import endpointAuth from "../../../_utils/endpoint_auth";
import { errorHandler } from "../../../_utils/status_handler";
import { NextRequest } from "next/server";

type EventParamType = "eventId";

export const POST = async (request: NextRequest, { params }: Params<EventParamType>) => {
    const { eventId } = await params;
    const response = await postComment(await request.json(), eventId, "EventComments");
    return response;
}

export const GET = async (_: NextRequest, { params }: Params<EventParamType>) => {
    const { eventId } = await params;
    const response = await getComments(eventId, "EventComments");
    return response;
}
