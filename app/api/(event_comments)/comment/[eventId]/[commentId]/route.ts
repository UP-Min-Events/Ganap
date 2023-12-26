import { deleteComment } from '@/app/api/_utils/event_comments';
import { NextRequest } from 'next/server';
import handleEndpointAuth from '@/app/api/_utils/handle_endpoint_auth';

type EventCommentsParamType = 'eventId' | 'commentId';

export const DELETE = async (
    request: NextRequest,
    { params }: Params<EventCommentsParamType>,
) => {
    try {
        await handleEndpointAuth(request);
        const { eventId, commentId } = await params;
        const response = await deleteComment(
            eventId,
            commentId,
            'EventComments',
        );
        return response;
    } catch (error) {
        return error;
    }
};
