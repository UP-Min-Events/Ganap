import { NextApiRequest } from "next/types";
import endpointAuth from "./endpoint_auth";
import { errorBody } from "./status_handler";

const handleEndpointAuth = async (request: any) => {
  const accessToken = request.headers
    ?.get("authorization")
    .split("Bearer ")
    .at(1) as string;

  const refreshToken = request.nextUrl?.searchParams.get(
    "refresh_token"
  ) as string;
  console.log("AccessToken", accessToken);
  if (!accessToken && !refreshToken) {
    throw errorBody(400, "Missing authorization header or HTTP request body.");
  }

  const isAuthorized = await endpointAuth({ accessToken, refreshToken });

  if (!isAuthorized) {
    throw errorBody(403, "Forbidden");
  }
};

export default handleEndpointAuth;
