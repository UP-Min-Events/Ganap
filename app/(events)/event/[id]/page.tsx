// Feature Components
import DataCard from './components/(data)/DataCard';
import EventHeader from './components/EventHeader';
import EventStatus from './components/EventStatus';
import ScheduleCard from './components/ScheduleCard';
import DescriptionCard from './components/DescriptionCard';
import OrganizerCard from './components/OrganizerCard';
import getTokens from '@/utils/getTokens';

async function getEventDetails(eventId: string) {
    const { refresh_token, access_token } = getTokens();

    const url = `${process.env.NEXT_PUBLIC_API_URL}/event/${eventId}?refresh_token=${refresh_token}`;

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
            <EventHeader event_title={data.event_name!} />
            <section className="container flex flex-col xl:grid grid-cols-3 gap-4 md:max-w-[60%] lg:max-w-[60%] xl:max-w-[50%] mb-6 md:mb-0">
                <div className="col-span-3">
                    <EventStatus
                        start_date={data.start_date}
                        end_date={data.end_date}
                    />
                </div>
                <section className="flex flex-col col-span-2 gap-4">
                    <DescriptionCard event_description={data.description!} />
                    {/* <DataCard /> */}
                </section>
                <section className="flex flex-col col-span-1 gap-4">
                    <ScheduleCard
                        start_date={data.start_date}
                        end_date={data.end_date}
                        venue={data.venue}
                    />
                    <OrganizerCard organizer={data.organizer} />
                </section>
            </section>
        </main>
    );
}
