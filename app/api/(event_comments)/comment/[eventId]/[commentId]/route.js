import { deleteComment } from "../../../../_utils/event_comments"

export const DELETE = async (_, { params }) => {
    const { eventId, commentId } = await params;
    const response = await deleteComment(eventId, commentId, "EventComments");
    return response;
}