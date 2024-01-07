import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
    PutCommand,
    DynamoDBDocumentClient,
    ScanCommand,
    QueryCommand,
    DeleteCommand,
    ScanCommandOutput,
} from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4 } from 'uuid';
import { errorHandler, successHandler } from './status_handler';
import moment from 'moment';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

interface CommentBody {
    event_id?: string;
    comment_id?: string;
    comment_content?: string;
}

export const postComment = async (
    body: CommentBody,
    eventId: CommentBody['event_id'],
    tableName: string,
) => {
    const params = {
        event_id: eventId,
        comment_id: uuidv4() as string,
        posted_on: moment().utcOffset('+0800').format(),
        ...body,
    };
    const command = new PutCommand({
        TableName: tableName,
        Item: params,
    });

    try {
        await docClient.send(command);
        return successHandler<CommentBody>(params);
    } catch (error) {
        return errorHandler(error);
    }
};

export const getComments = async (
    eventId: CommentBody['event_id'],
    tableName: string,
) => {
    const command = new ScanCommand({
        TableName: tableName,
        FilterExpression: 'event_id = :event_id',
        ExpressionAttributeValues: {
            ':event_id': eventId,
        },
    });

    try {
        const response = await docClient.send(command);
        return successHandler<ScanCommandOutput['Items']>(response.Items);
    } catch (error) {
        return errorHandler(error);
    }
};

export const deleteComment = async (
    event_id: string,
    comment_id: CommentBody['comment_id'],
    tableName: string,
) => {
    const command = new DeleteCommand({
        TableName: tableName,
        Key: {
            event_id: event_id,
            comment_id: comment_id,
        },
    });

    try {
        await docClient.send(command);
        return successHandler<{ message: string }>({
            message: 'Comment deleted successfully',
        });
    } catch (error) {
        return errorHandler(error);
    }
};
