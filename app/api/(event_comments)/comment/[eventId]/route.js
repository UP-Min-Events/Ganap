import { postComment } from "../../../_utils/event_comments";

export const POST = async (request, { params }) => {
    const { eventId } = await params;
    const response = await postComment(await request.json(), eventId, "EventComments");
    return response;
}
