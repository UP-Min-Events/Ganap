"use client"

import React, { createContext, ReactNode, useState } from "react";

interface LoadMoreContextProps {
    Items: EventDetails[];
    LastEvaluatedKey: LastEvaluatedKeyProp;
}

interface LoadMoreContext {
    data: LoadMoreContextProps | null;
    setData: React.Dispatch<React.SetStateAction<LoadMoreContextProps | null>>;
}

function createContextProvider(defaultValue: LoadMoreContextProps | null) {
    const defaultContextValue: LoadMoreContext = {
        data: null,
        setData: () => {},
    };

    const context = createContext<LoadMoreContext>(defaultContextValue);

    const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
        const [value, setValue] = useState(defaultValue);
        return <context.Provider value={{ data: value, setData: setValue }}>{children}</context.Provider>;
    };

    return { context, Provider };
}

const { context: UpcomingEventContext, Provider: UpcomingEventProvider } = createContextProvider(null);
const { context: ActiveEventContext, Provider: ActiveEventProvider } = createContextProvider(null);
const { context: PastEventContext, Provider: PastEventProvider } = createContextProvider(null);

const EventProviders: React.FC<{ children: ReactNode }> = ({ children }) => (
    <UpcomingEventProvider>
        <ActiveEventProvider>
        <PastEventProvider>{children}</PastEventProvider>
        </ActiveEventProvider>
    </UpcomingEventProvider>
);

export { EventProviders, UpcomingEventContext, ActiveEventContext, PastEventContext };
