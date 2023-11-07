import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from 'uuid';
import { errorHandler, successHandler } from "./status_handler";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const uploadForm = async (body, tableName) => {
    const command = new PutCommand({
        TableName: tableName,
        Item: {
            form_id: uuidv4(),
            ...body
        }
    });

    try {
        await docClient.send(command);
        return successHandler({ message: "Form uploaded successfully" });
    } catch (error) {
        return errorHandler(error);
    }
}

export const getForms = async (tableName) => {
    const command = new ScanCommand({
        TableName: tableName
    });

    try {
        const response = await docClient.send(command);
        return successHandler(response.Items);
    } catch (error) {
        return errorHandler(error);
    }
}