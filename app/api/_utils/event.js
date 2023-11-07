import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient, ScanCommand, QueryCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from 'uuid';
import { errorHandler, successHandler } from "./status_handler";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const uploadEventDetails = async (body, tableName) => {
    const params = {
        event_id: uuidv4(),
        event_created: new Date(Date.now()).toISOString(),
        ...body
    }

    const command = new PutCommand({
        TableName: tableName,
        Item: params,
    });

    try {
        await docClient.send(command);
        return successHandler(params);
    } catch (error) {
        return errorHandler(error);
    }
}

export const queryEvent = async (eventId, tableName) => {
    const command = new QueryCommand({
        TableName: tableName,
        KeyConditionExpression: "event_id = :event_id",
        ExpressionAttributeValues: {
            ":event_id": eventId
        }
    });

    try {
        const response = await docClient.send(command);
        return successHandler(response.Items);
    } catch (error) {
        return errorHandler(error);
    }
}