import { queryPendingEvents } from "../../../_utils/event";

export const GET = async (_, { params }) => {
    const response = await queryPendingEvents("EventDetails", "approval_status-event_created-index");
    return response;
}