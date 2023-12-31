import { NextRequest } from 'next/server';
import { queryActiveEvents } from '@/app/api/_utils/event';
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

        // if (!start_date || !event_id) {
        //     return errorBody(400, 'Bad request: missing query parameters');
        // }

        const response = await queryActiveEvents(
            'EventDetails',
            lastEvaluatedKey as unknown as Record<string, AttributeValue>,
        );
        return response;
    } catch (error) {
        console.error('Error: ', error);
        return errorBody(
            parseInt((error as any).status),
            (await (error as any).json()).message as string,
        );
    }
};

export const dynamic = 'force-dynamic';
