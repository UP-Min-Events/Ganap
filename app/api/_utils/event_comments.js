import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient, ScanCommand, QueryCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from 'uuid';
import { errorHandler, successHandler } from "./status_handler";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const postComment = async (body, eventId, tableName) => {
    const command = new PutCommand({
        TableName: tableName,
        Item: {
            event_id: eventId,
            comment_id: uuidv4(),
            ...body
        }
    });

    try {
        await docClient.send(command);
        return successHandler({ message: "Comment uploaded successfully" });
    } catch (error) {
        return errorHandler(error);
    }
}

export const getComments = async (eventId, tableName) => {
    const command = new ScanCommand({
        TableName: tableName,
        FilterExpression: "event_id = :event_id",
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

export const deleteComment = async (event_id, comment_id, tableName) => {
    const command = new DeleteCommand({
        TableName: tableName,
        Key: {
            event_id: event_id,
            comment_id: comment_id,
        }
    });

    try {
        await docClient.send(command);
        return successHandler({ message: "Comment deleted successfully" });
    } catch (error) {
        return errorHandler(error);
    }
}