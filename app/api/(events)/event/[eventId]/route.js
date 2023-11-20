import { queryEvent } from "../../../_utils/event"

export const GET = async (_, { params }) => {
    const { eventId } = await params;
    const response = await queryEvent(eventId, "EventDetails");
    return response;
}

// export const PUT = async ()