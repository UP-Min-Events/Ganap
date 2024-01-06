import { NextRequest, NextResponse } from 'next/server';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
    PutCommand,
    DynamoDBDocumentClient,
    ScanCommand,
    QueryCommand,
    DeleteCommand,
    GetCommand,
} from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export async function GET(_: any) {
    const command = new ScanCommand({
        TableName: 'Users',
    });

    try {
        const data = await docClient.send(command);
        return NextResponse.json({ data: data.Items });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: err });
    }
}

export async function POST(request: NextRequest) {
    let data,
        user_id,
        firstName,
        lastName,
        studentNumber,
        yearLevel,
        degreeProgram;

    if (request.headers.get('Content-Type')?.includes('application/json')) {
        data = await request.json();
        user_id = data.user_id;
        firstName = data.firstName;
        lastName = data.lastName;
        studentNumber = data.studentNumber;
        yearLevel = data.yearLevel;
    } else {
        data = await request.formData();
        firstName = data.get('firstName');
        lastName = data.get('lastName');
        studentNumber = data.get('studentNumber');
        yearLevel = data.get('yearLevel');
        degreeProgram = data.get('degreeProgram');
    }

    const command = new PutCommand({
        TableName: 'Users',
        Item: {
            user_id: user_id,
            firstName: firstName,
            lastName: lastName,
            studentNumber: studentNumber,
            yearLevel: yearLevel,
            degreeProgram: degreeProgram,
        },
    });

    try {
        const response = await docClient.send(command);
        return NextResponse.json(response);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: err });
    }
}
