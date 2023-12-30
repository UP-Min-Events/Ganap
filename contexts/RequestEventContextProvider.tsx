'use client';

import React, { createContext, ReactNode, useState } from 'react';

export interface LoadMoreContextProps {
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
        return (
            <context.Provider value={{ data: value, setData: setValue }}>
                {children}
            </context.Provider>
        );
    };

    return { context, Provider };
}

const { context: PendingEventContext, Provider: PendingEventProvider } =
    createContextProvider(null);
const { context: ApprovedEventContext, Provider: ApprovedEventProvider } =
    createContextProvider(null);
const { context: RejectedEventContext, Provider: RejectedEventProvider } =
    createContextProvider(null);

const RequestEventProviders: React.FC<{ children: ReactNode }> = ({
    children,
}) => (
    <PendingEventProvider>
        <ApprovedEventProvider>
            <RejectedEventProvider>{children}</RejectedEventProvider>
        </ApprovedEventProvider>
    </PendingEventProvider>
);

export {
    RequestEventProviders,
    PendingEventContext,
    ApprovedEventContext,
    RejectedEventContext,
};
