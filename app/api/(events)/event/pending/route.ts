import { queryRequestedEvents } from '@/app/api/_utils/event';
import { NextRequest } from 'next/server';
import handleEndpointAuth from '@/app/api/_utils/handle_endpoint_auth';
import { AttributeValue } from '@aws-sdk/client-dynamodb';
import { errorBody } from '@/app/api/_utils/status_handler';

export const GET = async (request: NextRequest) => {
    try {
        await handleEndpointAuth(request);

        const approval_status =
            request.nextUrl?.searchParams.get('approval_status') ?? null;
        const event_created =
            request.nextUrl?.searchParams.get('event_created') ?? null;
        const event_id = request.nextUrl?.searchParams.get('event_id') ?? null;
        const start_date =
            request.nextUrl?.searchParams.get('start_date') ?? null;

        let lastEvaluatedKey = null;

        if (
            typeof approval_status === 'string' ||
            typeof event_created === 'string' ||
            typeof event_id === 'string' ||
            typeof start_date === 'string'
        ) {
            lastEvaluatedKey = {
                approval_status: approval_status,
                event_created: event_created,
                event_id: event_id,
                start_date: start_date,
            };
        }

        const response = await queryRequestedEvents(
            'EventDetails',
            'approval_status-event_created-index',
            lastEvaluatedKey as unknown as Record<string, AttributeValue>,
            'pending',
        );

        return response;
    } catch (error) {
        return errorBody(400, error as string);
    }
};
