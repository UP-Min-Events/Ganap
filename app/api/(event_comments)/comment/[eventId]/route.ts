import { postComment, getComments } from '@/app/api/_utils/event_comments';
import handleEndpointAuth from '@/app/api/_utils/handle_endpoint_auth';
import { NextRequest } from 'next/server';

type EventParamType = 'eventId';

export const POST = async (
    request: NextRequest,
    { params }: Params<EventParamType>,
) => {
    try {
        await handleEndpointAuth(request);
        const { eventId } = await params;
        const response = await postComment(
            await request.json(),
            eventId,
            'EventComments',
        );
        return response;
    } catch (error) {
        return error;
    }
};

export const GET = async (
    request: NextRequest,
    { params }: Params<EventParamType>,
) => {
    try {
        await handleEndpointAuth(request);
        const { eventId } = await params;
        const response = await getComments(eventId, 'EventComments');
        return response;
    } catch (error) {
        return error;
    }
};
