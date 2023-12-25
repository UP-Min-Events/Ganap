/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useEffect, useState, useContext } from "react";
import { useInView } from "react-intersection-observer";
import Spinner from "./Spinner";
import { fetchActiveEvent, fetchIncomingEvent, fetchPastEvent } from "@/actions/fetchEvents";
import EventCard from "./EventCard";
import { UpcomingEventContext, ActiveEventContext, PastEventContext } from "@/contexts/EventContextProvider";

interface LoadMoreProps {
    loadMore: LastEvaluatedKeyProp | undefined;
    currentTab: string;
}

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function LoadMore({loadMore, currentTab}: LoadMoreProps) {
    const { data: upcomingEventData, setData: setUpcomingEventData } = useContext(UpcomingEventContext);
    const { data: activeEventData, setData: setActiveEventData } = useContext(ActiveEventContext);
    const { data: pastEventData, setData: setPastEventData } = useContext(PastEventContext);

    const [lastEvaluatedKey, setLastEvaluatedKey] = useState<LastEvaluatedKeyProp | undefined>(loadMore);
    const [ref, inView] = useInView();

    const [isLoading, setIsLoading] = useState(false);

    const loadMoreData = async () => {
        if (lastEvaluatedKey) {
            setIsLoading(true);
            await delay(1000);

            switch (currentTab) {
                case "past":
                    if (!pastEventData || pastEventData.LastEvaluatedKey !== undefined) {
                        const keyToFetch = pastEventData ? pastEventData.LastEvaluatedKey : lastEvaluatedKey;
                        const response = await fetchPastEvent(keyToFetch);

                        if (response && response.Items) {
                            const updatedItems = pastEventData ? [...pastEventData.Items, ...response.Items] : [...response.Items];

                            setPastEventData({
                                Items: updatedItems,
                                LastEvaluatedKey: response.LastEvaluatedKey ?? undefined
                            });

                            setLastEvaluatedKey(response.LastEvaluatedKey || undefined);
                        }
                    }
                    break;
                case "active":
                    if (!activeEventData || activeEventData.LastEvaluatedKey !== undefined) {
                        const keyToFetch = activeEventData ? activeEventData.LastEvaluatedKey : lastEvaluatedKey;
                        const response = await fetchActiveEvent(keyToFetch);

                        if (response && response.Items) {
                            const updatedItems = activeEventData ? [...activeEventData.Items, ...response.Items] : [...response.Items];

                            setActiveEventData({
                                Items: updatedItems,
                                LastEvaluatedKey: response.LastEvaluatedKey ?? undefined
                            });

                            setLastEvaluatedKey(response.LastEvaluatedKey || undefined);
                        }
                    }
                    break;
                case "upcoming":
                    if (!upcomingEventData || upcomingEventData.LastEvaluatedKey !== undefined) {
                        const keyToFetch = upcomingEventData ? upcomingEventData.LastEvaluatedKey : lastEvaluatedKey;
                        const response = await fetchIncomingEvent(keyToFetch);

                        if (response && response.Items) {
                            const updatedItems = upcomingEventData ? [...upcomingEventData.Items, ...response.Items] : [...response.Items];

                            setUpcomingEventData({
                                Items: updatedItems,
                                LastEvaluatedKey: response.LastEvaluatedKey ?? undefined
                            });

                            setLastEvaluatedKey(response.LastEvaluatedKey || undefined);
                        }
                    }
                    break;
            }
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (inView && lastEvaluatedKey !== undefined) {
            loadMoreData();
        }
    }, [inView, lastEvaluatedKey]);

    return (
        <div className="w-full" ref={ref}>
            {
                currentTab === "past" && (
                    <>
                        {pastEventData && pastEventData?.Items && pastEventData?.Items.map((event, index) => (
                            <EventCard key={index} event={event}/>
                        ))}
                    </>
                )
            }
            {
                currentTab === "active" && (
                    <>
                        {activeEventData && activeEventData?.Items && activeEventData?.Items.map((event, index) => (
                            <EventCard key={index} event={event}/>
                        ))}
                    </>
                )
            }
            {
                currentTab === "upcoming" && (
                    <>
                        {upcomingEventData && upcomingEventData?.Items && upcomingEventData?.Items.map((event, index) => (
                            <EventCard key={index} event={event}/>
                        ))}
                    </>
                )
            }
            {isLoading && <Spinner />}
        </div>
    )
}

