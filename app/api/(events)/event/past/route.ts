import { queryPastEvents } from "@/app/api/_utils/event";

export const GET = async () => {
  const response = await queryPastEvents("EventDetails");
  return response;
};
