import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RequestCard from './RequestCard';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
    fetchPendingEvent,
    fetchApprovedEvent,
    fetchRejectedEvent,
} from '@/actions/fetchRequestEvents';
import LoadMoreRequest from './LoadMoreRequest';

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
                'data-[state=active]:bg-red-500 data-[state=active]:text-neutral-100',
        },
        {
            value: 'rejected',
            label: 'Rejected',
            colorClass:
                'data-[state=active]:bg-red-500 data-[state=active]:text-neutral-100',
        },
    ];

    let pendingEvents: FetchRequestedEventProps = await fetchPendingEvent();
    let approvedEvents: FetchRequestedEventProps = await fetchApprovedEvent();
    let rejectedEvents: FetchRequestedEventProps = await fetchRejectedEvent();

    return (
        <Tabs
            defaultValue={'pending'}
            className="w-full xl:max-w-[75%] mx-auto flex flex-col gap-4"
        >
            <TabsList className="mx-auto">
                {tabData.map((tab, index) => (
                    <TabsTrigger
                        key={index}
                        value={tab.value}
                        className={`${tab.colorClass} w-[6rem]`}
                    >
                        {tab.label}
                    </TabsTrigger>
                ))}
            </TabsList>
            {/* {tabData.map((tab) => (
                <TabsContent key={tab.value} value={tab.value}>
                    {tab.label} Requests
                </TabsContent>
            ))} */}
            {tabData.map((tab) => (
                <TabsContent key={tab.value} value={tab.value}>
                    {tab.label} Requests
                    <ScrollArea className="h-[calc(100vh-18rem)] overflow-scroll w-full no-scrollbar">
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
