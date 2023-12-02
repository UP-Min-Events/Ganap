import { NextResponse } from "next/server";

export const errorBody = (statusCode, message) => {
    return new NextResponse(JSON.stringify({ message: message }), {
        status: statusCode,
        headers: { "Content-Type": "application/json" },
    });
}

export const errorHandler = (error) => {
    console.log(error.name);
    console.log(error.message);

    if (error.name === "ValidationError") {
        return errorBody(422, error.message);
    }

    if (error.name === "ResourceNotFoundException") {
        return errorBody(404, "The resource you are looking for does not exist");
    }

    if (error.$metadata && error.$metadata.httpStatusCode === 500) {
        return errorBody(500, "Internal server error");
    }


    // To catch soon: validation or authorization errors

    return errorBody(400, "Bad request");
}

export const successHandler = (response) => {
    return new NextResponse(JSON.stringify(response), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}