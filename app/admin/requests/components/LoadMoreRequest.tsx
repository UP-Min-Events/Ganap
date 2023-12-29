'use client';

import { useEffect, useState, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import Spinner from './Spinner';
import {
    fetchPendingEvent,
    fetchApprovedEvent,
    fetchRejectedEvent,
} from '@/actions/fetchRequestEvents';
import RequestCard from './RequestCard';
import {
    PendingEventContext,
    ApprovedEventContext,
    RejectedEventContext,
    LoadMoreContextProps,
} from '@/contexts/RequestEventContextProvider';

interface LoadMoreProps {
    loadMore: LastEvaluatedKeyProp | undefined;
    currentTab: string;
}

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function renderRequestCard(
    currentTab: string,
    eventData: LoadMoreContextProps | null,
) {
    if (eventData && eventData.Items) {
        return eventData.Items.map((event, index) => (
            <RequestCard key={index} event={event} />
        ));
    }
}

export default function LoadMoreRequest({
    loadMore,
    currentTab,
}: LoadMoreProps) {
    const { data: pendingEventData, setData: setPendingEventData } =
        useContext(PendingEventContext);
    const { data: approvedEventData, setData: setApprovedEventData } =
        useContext(ApprovedEventContext);
    const { data: rejectedEventData, setData: setRejectedEventData } =
        useContext(RejectedEventContext);

    const [lastEvaluatedKey, setLastEvaluatedKey] = useState<
        LastEvaluatedKeyProp | undefined
    >(loadMore);
    const [ref, inView] = useInView();

    const [isLoading, setIsLoading] = useState(false);

    const loadMoreData = async () => {
        if (lastEvaluatedKey) {
            setIsLoading(true);
            await delay(1000);

            switch (currentTab) {
                case 'approved':
                    if (
                        !approvedEventData ||
                        approvedEventData.LastEvaluatedKey !== undefined
                    ) {
                        const keyToFetch = approvedEventData
                            ? approvedEventData.LastEvaluatedKey
                            : lastEvaluatedKey;
                        const response = await fetchApprovedEvent(keyToFetch);

                        if (response && response.Items) {
                            const updatedItems = approvedEventData
                                ? [
                                      ...approvedEventData.Items,
                                      ...response.Items,
                                  ]
                                : [...response.Items];

                            setApprovedEventData({
                                Items: updatedItems,
                                LastEvaluatedKey:
                                    response.LastEvaluatedKey ?? undefined,
                            });

                            setLastEvaluatedKey(
                                response.LastEvaluatedKey || undefined,
                            );
                        }
                    }
                    break;
                case 'rejected':
                    if (
                        !rejectedEventData ||
                        rejectedEventData.LastEvaluatedKey !== undefined
                    ) {
                        const keyToFetch = rejectedEventData
                            ? rejectedEventData.LastEvaluatedKey
                            : lastEvaluatedKey;
                        const response = await fetchRejectedEvent(keyToFetch);

                        if (response && response.Items) {
                            const updatedItems = rejectedEventData
                                ? [
                                      ...rejectedEventData.Items,
                                      ...response.Items,
                                  ]
                                : [...response.Items];

                            setRejectedEventData({
                                Items: updatedItems,
                                LastEvaluatedKey:
                                    response.LastEvaluatedKey ?? undefined,
                            });

                            setLastEvaluatedKey(
                                response.LastEvaluatedKey || undefined,
                            );
                        }
                    }
                    break;
                case 'pending':
                    if (
                        !pendingEventData ||
                        pendingEventData.LastEvaluatedKey !== undefined
                    ) {
                        const keyToFetch = pendingEventData
                            ? pendingEventData.LastEvaluatedKey
                            : lastEvaluatedKey;
                        const response = await fetchPendingEvent(keyToFetch);

                        if (response && response.Items) {
                            const updatedItems = pendingEventData
                                ? [...pendingEventData.Items, ...response.Items]
                                : [...response.Items];

                            setPendingEventData({
                                Items: updatedItems,
                                LastEvaluatedKey:
                                    response.LastEvaluatedKey ?? undefined,
                            });

                            setLastEvaluatedKey(
                                response.LastEvaluatedKey || undefined,
                            );
                        }
                    }
                    break;
            }
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (inView && lastEvaluatedKey !== undefined) {
            console.log(pendingEventData);
            console.log(lastEvaluatedKey);
            loadMoreData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView, lastEvaluatedKey, loadMoreData]);

    return (
        <div className="w-full" ref={ref}>
            {/* {currentTab === 'pending' &&
                renderRequestCard(currentTab, pendingEventData)} */}
            {currentTab === 'pending' && (
                <>
                    {pendingEventData &&
                        pendingEventData?.Items &&
                        pendingEventData?.Items.map((event, index) => (
                            <RequestCard key={index} event={event} />
                        ))}
                </>
            )}
            {currentTab === 'approved' &&
                renderRequestCard(currentTab, approvedEventData)}
            {currentTab === 'rejected' &&
                renderRequestCard(currentTab, rejectedEventData)}
            {isLoading && <Spinner />}
        </div>
    );
}
