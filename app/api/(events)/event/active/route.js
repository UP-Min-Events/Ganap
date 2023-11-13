import { queryActiveEvents } from "../../../_utils/event";

export const GET = async () => {
    // TODO: Add query parameters to include last evaluated key for query pagination
    const response = await queryActiveEvents("EventDetails");
    return response;
}