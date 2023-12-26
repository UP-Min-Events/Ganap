import { deleteComment } from "../../../../_utils/event_comments"
import { NextRequest } from "next/server";

type EventCommentsParamType = "eventId" | "commentId";

export const DELETE = async (_: NextRequest, { params }: Params<EventCommentsParamType>) => {
    const { eventId, commentId } = await params;
    const response = await deleteComment(eventId, commentId, "EventComments");
    return response;
}