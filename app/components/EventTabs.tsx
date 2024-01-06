// UI Components
import LoadMore from './LoadMore';
import EventCard from './EventCard';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    fetchIncomingEvent,
    fetchActiveEvent,
    fetchPastEvent,
} from '@/actions/fetchEvents';

interface FetchEventProps {
    Items: EventDetails[];
    LastEvaluatedKey: LastEvaluatedKeyProp;
}

type tabDataType = 'upcoming' | 'active' | 'past';

const renderEvents = (events: FetchEventProps, tabValue: tabDataType) => (
    <>
        {events.Items &&
            events.Items.map((event, index) => (
                <EventCard key={index} event={event} />
            ))}
        <LoadMore loadMore={events.LastEvaluatedKey} currentTab={tabValue} />
    </>
);

export default async function EventTabs() {
    const tabData = [
        {
            value: 'upcoming',
            label: 'Upcoming',
            colorClass:
                'data-[state=active]:bg-red-500 data-[state=active]:text-white',
        },
        {
            value: 'active',
            label: 'Active',
            colorClass:
                'data-[state=active]:bg-red-500 data-[state=active]:text-white',
        },
        {
            value: 'past',
            label: 'Past',
            colorClass:
                'data-[state=active]:bg-red-500 data-[state=active]:text-white',
        },
    ];

    let incomingEvents: FetchEventProps = await fetchIncomingEvent();
    let activeEvents: FetchEventProps = await fetchActiveEvent();
    let pastEvents: FetchEventProps = await fetchPastEvent();

    return (
        <Tabs
            defaultValue={'upcoming'}
            className="w-full xl:max-w-[75%] mx-auto flex flex-col gap-4"
        >
            <TabsList className="mx-auto bg-white">
                {tabData.map((tab, index) => (
                    <TabsTrigger
                        key={index}
                        value={tab.value}
                        className={`${tab.colorClass} w-[6rem] bg-white`}
                    >
                        {tab.label}
                    </TabsTrigger>
                ))}
            </TabsList>
            {tabData.map((tab) => (
                <TabsContent key={tab.value} value={tab.value}>
                    <h2 className="mb-4">{tab.label} Events</h2>
                    <ScrollArea className="h-[calc(100vh-18rem)] overflow-scroll w-full px-[0.75rem] no-scrollbar">
                        {tab.value === 'upcoming' &&
                            renderEvents(incomingEvents, tab.value)}
                        {tab.value === 'active' &&
                            renderEvents(activeEvents, tab.value)}
                        {tab.value === 'past' &&
                            renderEvents(pastEvents, tab.value)}
                    </ScrollArea>
                </TabsContent>
            ))}
        </Tabs>
    );
}
