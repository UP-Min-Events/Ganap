import { NextResponse } from 'next/server';

export const errorBody = (
    statusCode: number,
    message: string,
): NextResponse<{ message: string }> => {
    return new NextResponse(JSON.stringify({ message: message }), {
        status: statusCode,
        headers: { 'Content-Type': 'application/json' },
    });
};

export const errorHandler = (error: any) => {
    if (error.name === 'ValidationError') {
        return errorBody(422, error.message);
    }

    if (error.name === 'ResourceNotFoundException') {
        return errorBody(
            404,
            'The resource you are looking for does not exist',
        );
    }

    if (error.$metadata && error.$metadata.httpStatusCode === 500) {
        return errorBody(500, 'Internal server error');
    }

    // To catch soon: validation or authorization errors
    console.log('Error', error);

    return errorBody(400, 'Bad request');
};

export const successHandler = <T = unknown>(response: T): NextResponse<T> => {
    return new NextResponse<T>(JSON.stringify(response), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
};
