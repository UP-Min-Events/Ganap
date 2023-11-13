import { postComment, getComments } from "../../../_utils/event_comments";

export const POST = async (request, { params }) => {
    const { eventId } = await params;
    const response = await postComment(await request.json(), eventId, "EventComments");
    return response;
}

export const GET = async (_, { params }) => {
    const { eventId } = await params;
    const response = await getComments(eventId, "EventComments");
    return response;
}
