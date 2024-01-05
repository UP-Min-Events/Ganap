import { NextRequest, NextResponse } from 'next/server';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
    PutCommand,
    DynamoDBDocumentClient,
    GetCommand,
    UpdateCommand,
} from '@aws-sdk/lib-dynamodb';
import { errorHandler, successHandler } from '@/app/api/_utils/status_handler';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export async function GET(_: any, context: { params: { user_id: string } }) {
    const id = context.params.user_id;

    const command = new GetCommand({
        TableName: 'Users',
        Key: { user_id: id },
    });

    try {
        const data = await docClient.send(command);

        if (!data.Item) {
            return new NextResponse(
                JSON.stringify({ error: 'User not found' }),
                {
                    status: 404,
                    headers: { 'content-type': 'application/json' },
                },
            );
        }

        return NextResponse.json(data.Item);
    } catch (err) {
        console.error(JSON.stringify(err, null, 2));
        return errorHandler(err);
    }
}

export async function POST(
    request: NextRequest,
    context: { params: { user_id: string } },
) {
    const data = await request.formData();
    const from = request.nextUrl.searchParams.get('from');

    let updateExpression = 'set ';
    const expressionAttributeValues: Record<string, any> = {};

    const updateAttributes: string[] = [
        'firstName',
        'lastName',
        'studentNumber',
        'yearLevel',
        'degreeProgram',
    ];

    updateAttributes.forEach((attribute) => {
        if (data.has(attribute)) {
            updateExpression += `${attribute} = :${attribute}, `;
            expressionAttributeValues[`:${attribute}`] = data.get(attribute);
        }
    });

    updateExpression = updateExpression.slice(0, -2);

    const command = new UpdateCommand({
        TableName: 'Users',
        Key: { user_id: context.params.user_id },
        UpdateExpression: updateExpression,
        ExpressionAttributeValues: expressionAttributeValues,
    });

    try {
        const response = await docClient.send(command);

        if (response.$metadata.httpStatusCode !== 200) {
            return new NextResponse(JSON.stringify(response), {
                status: response.$metadata.httpStatusCode,
                headers: { 'content-type': 'application/json' },
            });
        }

        if (from === 'onboarding') {
            return NextResponse.redirect(new URL('/', request.nextUrl), {
                status: 303,
            });
        } else if (from === 'account') {
            return NextResponse.redirect(new URL('/account', request.nextUrl), {
                status: 303,
            });
        }
    } catch (err) {
        console.error(JSON.stringify(err, null, 2));
        return errorHandler(err);
    }
}

export async function DELETE(request: NextRequest) {}
