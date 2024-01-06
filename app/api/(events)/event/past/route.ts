import { queryPastEvents } from '@/app/api/_utils/event';
import { NextRequest } from 'next/server';
import handleEndpointAuth from '@/app/api/_utils/handle_endpoint_auth';
import { AttributeValue } from '@aws-sdk/client-dynamodb';
import { errorBody } from '@/app/api/_utils/status_handler';

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

        const response = await queryPastEvents(
            'EventDetails',
            lastEvaluatedKey as unknown as Record<string, AttributeValue>,
        );
        return response;
    } catch (error) {
        return errorBody(
            parseInt((error as any).status),
            (await (error as any).json()).message as string,
        );
    }
};

export const dynamic = 'force-dynamic';
