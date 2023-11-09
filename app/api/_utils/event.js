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

    const validateParams = validatePostEvent(params);

    if (validateParams) {
        return validateParams;
    }

    const command = new PutCommand({
        TableName: tableName,
        Item: params,
    });

    try {
        await docClient.send(command);
        console.log(successHandler(params))
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

const validatePostEvent = (body) => {
    const approval_status_enums = ["approved", "rejected", "pending"];

    // To follow: validation for the other attributes.
    if (!approval_status_enums.includes(body.approval_status)) {
        return errorHandler({
            name: "ValidationError",
            message: "Approval status must be one of approved, rejected, or pending"
        });
    }
}

export const queryPendingEvents = async (tableName, index) => {
    const command = new QueryCommand({
        TableName: tableName,
        IndexName: index,
        KeyConditionExpression: "approval_status = :approval_status",
        ExpressionAttributeValues: {
            ":approval_status": "pending"
        },
        ScanIndexForward: true,
    });

    try {
        const response = await docClient.send(command);
        return successHandler(response.Items);
    } catch (error) {
        return errorHandler(error);
    }
}