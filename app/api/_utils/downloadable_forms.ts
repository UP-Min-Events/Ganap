import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
    PutCommand,
    DynamoDBDocumentClient,
    ScanCommand,
    QueryCommand,
    DeleteCommand,
    ScanCommandOutput,
    QueryCommandOutput,
} from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4 } from 'uuid';
import { errorHandler, successHandler } from './status_handler';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export interface FormBody {
    form_id?: string;
    form_link: string;
    form_description: string;
}

export const uploadForm = async (body: FormBody, tableName: string) => {
    const params = {
        form_id: uuidv4() as string,
        ...body,
    };

    const command = new PutCommand({
        TableName: tableName,
        Item: params,
    });

    try {
        await docClient.send(command);
        return successHandler<FormBody>(params);
    } catch (error) {
        return errorHandler(error);
    }
};

export const getForms = async (tableName: string) => {
    const command = new ScanCommand({
        TableName: tableName,
    });

    try {
        const response = await docClient.send(command);
        return successHandler<ScanCommandOutput['Items']>(response!.Items);
    } catch (error) {
        return errorHandler(error);
    }
};

export const queryForm = async (formId: string, tableName: string) => {
    const command = new QueryCommand({
        TableName: tableName,
        KeyConditionExpression: 'form_id = :form_id',
        ExpressionAttributeValues: {
            ':form_id': formId,
        },
    });

    try {
        const response = await docClient.send(command);
        return successHandler<QueryCommandOutput['Items']>(response.Items);
    } catch (error) {
        return errorHandler(error);
    }
};

export const deleteForm = async (formId: string, tableName: string) => {
    const command = new DeleteCommand({
        TableName: tableName,
        Key: {
            form_id: formId,
        },
    });

    try {
        await docClient.send(command);
        return successHandler<{ message: string }>({
            message: 'Form deleted successfully',
        });
    } catch (error) {
        return errorHandler(error);
    }
};
