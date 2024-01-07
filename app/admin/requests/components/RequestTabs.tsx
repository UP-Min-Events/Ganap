// UI Components
import RequestCard from './RequestCard';
import LoadMoreRequest from './LoadMoreRequest';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    fetchPendingEvent,
    fetchApprovedEvent,
    fetchRejectedEvent,
} from '@/actions/fetchRequestEvents';

interface FetchRequestedEventProps {
    Items: EventDetails[];
    LastEvaluatedKey: LastEvaluatedKeyProp;
}

type tabDataType = 'pending' | 'approved' | 'rejected';

const renderEvents = (
    events: FetchRequestedEventProps,
    tabValue: tabDataType,
) => (
    <>
        {events.Items &&
            events.Items.map((event, index) => (
                <RequestCard key={index} event={event} />
            ))}
        <LoadMoreRequest
            loadMore={events.LastEvaluatedKey}
            currentTab={tabValue}
        />
    </>
);

export default async function EventTabs() {
    const tabData = [
        {
            value: 'pending',
            label: 'Pending',
            colorClass:
                'data-[state=active]:bg-red-500 data-[state=active]:text-white',
        },
        {
            value: 'approved',
            label: 'Approved',
            colorClass:
                'data-[state=active]:bg-red-500 data-[state=active]:text-white',
        },
        {
            value: 'rejected',
            label: 'Rejected',
            colorClass:
                'data-[state=active]:bg-red-500 data-[state=active]:text-white',
        },
    ];

    let pendingEvents: FetchRequestedEventProps = await fetchPendingEvent();
    let approvedEvents: FetchRequestedEventProps = await fetchApprovedEvent();
    let rejectedEvents: FetchRequestedEventProps = await fetchRejectedEvent();

    return (
        <Tabs
            defaultValue={'pending'}
            className="mx-auto flex w-full flex-col gap-4 xl:max-w-[75%]"
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
                    <h2 className="mb-4 text-2xl font-bold">
                        {tab.label} Requests
                    </h2>
                    <ScrollArea className="no-scrollbar h-[calc(100vh-18rem)] w-full overflow-scroll px-[0.75rem]">
                        {tab.value === 'pending' &&
                            renderEvents(pendingEvents, tab.value)}
                        {tab.value === 'approved' &&
                            renderEvents(approvedEvents, tab.value)}
                        {tab.value === 'rejected' &&
                            renderEvents(rejectedEvents, tab.value)}
                    </ScrollArea>
                </TabsContent>
            ))}
        </Tabs>
    );
}
