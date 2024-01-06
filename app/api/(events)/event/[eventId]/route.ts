import handleEndpointAuth from '@/app/api/_utils/handle_endpoint_auth';
import { queryEvent, updateEventDetails } from '../../../_utils/event';
import { NextRequest } from 'next/server';

type EventParamType = 'eventId';

export const GET = async (
    request: NextRequest,
    { params }: Params<EventParamType>,
) => {
    try {
        await handleEndpointAuth(request);

        const { eventId } = await params;
        const response = await queryEvent(eventId, 'EventDetails');

        return response;
    } catch (error) {
        return error as any;
    }
};

export const PUT = async (
    request: NextRequest,
    { params }: Params<EventParamType>,
) => {
    try {
        await handleEndpointAuth(request);

        const { eventId } = await params;
        const start_date =
            request.nextUrl?.searchParams
                .get('start_date')
                ?.replace(/ /g, '+') ?? null;
        const response = await updateEventDetails(
            'EventDetails',
            eventId,
            start_date!,
            await request.json(),
        );

        return response;
    } catch (error) {
        return error as any;
    }
};
