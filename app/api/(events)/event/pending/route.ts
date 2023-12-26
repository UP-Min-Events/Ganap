import { queryPendingEvents } from '../../../_utils/event';
import { NextRequest } from 'next/server';
import handleEndpointAuth from '@/app/api/_utils/handle_endpoint_auth';

export const GET = async (request: NextRequest) => {
    try {
        await handleEndpointAuth(request);
        const response = await queryPendingEvents(
            'EventDetails',
            'approval_status-event_created-index',
        );
        return response;
    } catch (error) {
        return error;
    }
};
