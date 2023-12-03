import { queryEvent } from "../../../_utils/event";
import { NextRequest } from 'next/server'

type EventParamType = "eventId";

export const GET = async (_: NextRequest, { params }:Params<EventParamType>) => {
    const { eventId } = await params;
    const response = await queryEvent(eventId, "EventDetails");
    return response;
}

// export const PUT = async ()