'use server';
import getTokens from '@/utils/getTokens';
import { headers } from 'next/headers';

interface LastEvaluatedKeyType {
    event_id?: string;
    start_date?: string;
    event_created?: string;
    approval_status?: string;
}

type EventRequestType = 'pending' | 'approved' | 'rejected';

const fetchRequestEvent = async (
    eventRequestType: EventRequestType,
    lastEvaluatedKey: LastEvaluatedKeyType | undefined = undefined,
) => {
    const { access_token, refresh_token } = getTokens();
    const headersList = headers();

    // let url = `${process.env.NEXT_PUBLIC_API_URL}/event/${eventRequestType}?refresh_token=${refresh_token}`;
    let url = `${headersList.get('x-forwarded-proto')}://${headersList.get(
        'host',
    )}/api/event/${eventRequestType}?refresh_token=${refresh_token}`;

    if (lastEvaluatedKey) {
        const { event_id, start_date, event_created, approval_status } =
            lastEvaluatedKey;
        url = `${url}&event_id=${event_id}&start_date=${start_date}&event_created=${event_created}&approval_status=${approval_status}`;
    }

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error', error);
        return null;
    }
};

const fetchPendingEvent = async (
    lastEvaluatedKey: LastEvaluatedKeyType | undefined = undefined,
) => {
    return fetchRequestEvent('pending', lastEvaluatedKey);
};

const fetchApprovedEvent = async (
    lastEvaluatedKey: LastEvaluatedKeyType | undefined = undefined,
) => {
    return fetchRequestEvent('approved', lastEvaluatedKey);
};

const fetchRejectedEvent = async (
    lastEvaluatedKey: LastEvaluatedKeyType | undefined = undefined,
) => {
    return fetchRequestEvent('rejected', lastEvaluatedKey);
};

export { fetchPendingEvent, fetchApprovedEvent, fetchRejectedEvent };
