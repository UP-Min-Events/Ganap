// Feature Components
import DataCard from './components/(data)/DataCard';
import EventHeader from './components/EventHeader';
import EventStatus from './components/EventStatus';
import ScheduleCard from './components/ScheduleCard';
import DescriptionCard from './components/DescriptionCard';
import OrganizerCard from './components/OrganizerCard';

// Utilities
import getTokens from '@/utils/getTokens';
import { headers } from 'next/headers';
import DetailsCard from './components/DetailsCard';

async function getEventDetails(eventId: string) {
    const { refresh_token, access_token } = getTokens();
    const headersList = headers();

    // const url = `${process.env.NEXT_PUBLIC_API_URL}/event/${eventId}?refresh_token=${refresh_token}`;
    const url = `${headersList.get('x-forwarded-proto')}://${headersList.get(
        'host',
    )}/api/event/${eventId}?refresh_token=${refresh_token}`;

    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token}`,
        },
    });

    // TODO: display error as toast
    if (!res.ok) {
        throw new Error('Something went wrong');
    }

    return (await res.json())[0];
}

export default async function Event({ params }: Params<'id'>) {
    const { id } = params;
    const data: EventDetails = await getEventDetails(id);
    return (
        <main>
            <EventHeader
                event_name={data.event_name!}
                organizer={data.organizer}
                start_date={data.start_date}
            />
            <section className="container mb-6 flex grid-cols-3 flex-col gap-6 md:mb-0 md:max-w-[55%] lg:max-w-[45%] xl:max-w-[35%]">
                <section className="col-span-3 mt-6 flex flex-col gap-6">
                    <DetailsCard
                        start_date={data.start_date}
                        end_date={data.end_date}
                        venue={data.venue}
                        event_name={data.event_name!}
                    />
                    {/* <OrganizerCard organizer={data.organizer} /> */}
                </section>
                <section className="col-span-3 flex flex-col gap-4">
                    <DescriptionCard
                        description={data.description!}
                        end_date={data.end_date}
                    />
                    {/* <DataCard /> */}
                </section>
            </section>
        </main>
    );
}
