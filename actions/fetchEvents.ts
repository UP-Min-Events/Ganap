'use server';

import getTokens from '@/utils/getTokens';
import { headers } from 'next/headers';

interface LastEvaluatedKeyType {
    event_id?: string;
    start_date?: string;
}

type EventType = 'past' | 'incoming' | 'active';

const fetchEvent = async (
    eventType: EventType,
    lastEvaluatedKey: LastEvaluatedKeyType | undefined = undefined,
) => {
    const { access_token, refresh_token } = getTokens();
    const headersList = headers();

    console.log('headersList', headersList.get('x-forwarded-proto'));

    // let url = `${process.env.NEXT_PUBLIC_API_URL}/event/${eventType}?refresh_token=${refresh_token}`;
    let url = `${headersList.get('x-forwarded-proto')}://${headersList.get(
        'host',
    )}/api/event/${eventType}?refresh_token=${refresh_token}`;

    if (lastEvaluatedKey) {
        const { event_id, start_date } = lastEvaluatedKey;
        url = `${url}&event_id=${event_id}&start_date=${start_date}`;
    }

    console.log('Access token', access_token);
    console.log('Refresh token', refresh_token);

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        const data = await response.json();
        console.log('DATA from FETCHEVENTS', data);
        return data;
    } catch (error) {
        console.log('Error in FetchEvents', error);
        return null;
    }
};

const fetchPastEvent = async (
    lastEvaluatedKey: LastEvaluatedKeyType | undefined = undefined,
) => {
    return fetchEvent('past', lastEvaluatedKey);
};

const fetchIncomingEvent = async (
    lastEvaluatedKey: LastEvaluatedKeyType | undefined = undefined,
) => {
    return fetchEvent('incoming', lastEvaluatedKey);
};

const fetchActiveEvent = async (
    lastEvaluatedKey: LastEvaluatedKeyType | undefined = undefined,
) => {
    return fetchEvent('active', lastEvaluatedKey);
};

export { fetchPastEvent, fetchIncomingEvent, fetchActiveEvent };
