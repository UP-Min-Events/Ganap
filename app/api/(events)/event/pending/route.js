import { queryPendingEvents } from "../../../_utils/event";

export const GET = async (_, { params }) => {
    const response = await queryPendingEvents("EventDetails");
    return response;
}