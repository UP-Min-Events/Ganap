import { NextRequest } from 'next/server';
import { queryActiveEvents } from '@/app/api/_utils/event';
import handleEndpointAuth from '@/app/api/_utils/handle_endpoint_auth';
import { AttributeValue } from '@aws-sdk/client-dynamodb';

export const GET = async (request: NextRequest) => {
    try {
        await handleEndpointAuth(request);

        const event_id = request.nextUrl?.searchParams.get('event_id') ?? null;
        const start_date =
            request.nextUrl?.searchParams.get('event_id') ?? null;
        let lastEvaluatedKey = null;

        if (typeof event_id === 'string' || typeof start_date === 'string') {
            lastEvaluatedKey = { event_id: event_id, start_date: start_date };
        }

        const response = await queryActiveEvents(
            'EventDetails',
            lastEvaluatedKey as unknown as Record<string, AttributeValue>,
        );
        return response;
    } catch (error) {
        return error;
    }
};
