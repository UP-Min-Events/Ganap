import { queryIncomingEvents } from "@/app/api/_utils/event";

export const GET = async () => {
  const response = await queryIncomingEvents("EventDetails");
  return response;
};
