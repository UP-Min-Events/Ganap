import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient, ScanCommand, QueryCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from 'uuid';
import { errorHandler, successHandler } from "./status_handler";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const uploadForm = async (body, tableName) => {
    const params = {
        form_id: uuidv4(),
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

export const queryForm = async (formId, tableName) => {
    const command = new QueryCommand({
        TableName: tableName,
        KeyConditionExpression: "form_id = :form_id",
        ExpressionAttributeValues: {
            ":form_id": formId
        }
    });

    try {
        const response = await docClient.send(command);
        return successHandler(response.Items);
    } catch (error) {
        return errorHandler(error);
    }
}

export const deleteForm = async (formId, tableName) => {
    const command = new DeleteCommand({
        TableName: tableName,
        Key: {
            form_id: formId
        },
    });

    try {
        await docClient.send(command);
        return successHandler({ message: "Form deleted successfully" });
    } catch (error) {
        return errorHandler(error);
    }
}