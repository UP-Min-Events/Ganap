import {
    AttributeValue,
    DynamoDBClient,
    QueryInput,
} from '@aws-sdk/client-dynamodb';
import {
    PutCommand,
    DynamoDBDocumentClient,
    ScanCommand,
    QueryCommand,
    DeleteCommand,
    QueryCommandInput,
    QueryCommandOutput,
    ScanCommandOutput,
    UpdateCommand,
    UpdateCommandInput,
    UpdateCommandOutput,
} from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4 } from 'uuid';
import { errorHandler, successHandler } from './status_handler';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export type ISODateString = string & {
    readonly __ISODateStringBrand: unique symbol;
};

export interface EventDetails {
    event_id?: string;
    start_date?: ISODateString;
    end_date?: ISODateString;
    event_name?: string;
    event_created?: ISODateString;
    venue?: string;
    description?: string;
    organizer?: string;
    approval_status?: 'approved' | 'rejected' | 'pending';
}

export const uploadEventDetails = async (
    body: EventDetails,
    tableName: string,
) => {
    const params = {
        event_id: uuidv4() as string,
        event_created: new Date(Date.now()).toISOString() as ISODateString,
        ...body,
    };

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
        return successHandler<EventDetails>(params);
    } catch (error) {
        return errorHandler(error);
    }
};

export const queryEvent = async (
    eventId: EventDetails['event_id'],
    tableName: string,
) => {
    const command = new QueryCommand({
        TableName: tableName,
        KeyConditionExpression: 'event_id = :event_id',
        ExpressionAttributeValues: {
            ':event_id': eventId,
        },
    });

    try {
        const response = await docClient.send(command);
        return successHandler<QueryCommandOutput['Items']>(response.Items);
    } catch (error) {
        return errorHandler(error);
    }
};

const validatePostEvent = (body: EventDetails) => {
    const approval_status_enums = ['approved', 'rejected', 'pending'];

    // To follow: validation for the other attributes.
    if (!approval_status_enums.includes(body.approval_status!)) {
        return errorHandler({
            name: 'ValidationError',
            message:
                'Approval status must be one of approved, rejected, or pending',
        });
    }
};

export const queryRequestedEvents = async (
    tableName: string,
    index: any,
    lastEvaluatedKey:
        | {
              approval_status?: string;
              event_created?: string;
              event_id?: string;
              start_date?: string;
          }
        | undefined = undefined,
    status: string,
) => {
    const params = {
        TableName: tableName,
        IndexName: index,
        KeyConditionExpression: 'approval_status = :approval_status',
        ExpressionAttributeValues: {
            ':approval_status': status as unknown as AttributeValue,
        },
        ScanIndexForward: true,
        Limit: 10, // Change limit to 10 after testing
        ...(lastEvaluatedKey && { ExclusiveStartKey: lastEvaluatedKey }),
    };

    const command = new QueryCommand(params);

    try {
        const response = await docClient.send(command);
        return successHandler<
            Pick<QueryCommandOutput, 'Items' | 'LastEvaluatedKey'>
        >({
            Items: response.Items,
            LastEvaluatedKey: response.LastEvaluatedKey,
        });
    } catch (error) {
        return errorHandler(error);
    }
};

export const queryActiveEvents = async (
    tableName: string,
    lastEvaluatedKey: Record<string, AttributeValue> | null = null,
) => {
    const date_today = new Date().toISOString();

    console.log('Date Today:', date_today);

    // TODO: Add limit for query pagination
    const params: QueryInput = {
        TableName: tableName,
        FilterExpression:
            'start_date <= :date_today AND end_date >= :date_today AND approval_status = :approval_status',
        ExpressionAttributeValues: {
            ':date_today': date_today as unknown as AttributeValue,
            ':approval_status': 'approved' as unknown as AttributeValue,
        },
        ScanIndexForward: true,
        Limit: 10, // Change limit to 10 after testing
        ...(lastEvaluatedKey && { ExclusiveStartKey: lastEvaluatedKey }),
    };

    const command = new ScanCommand(params);

    try {
        const response = await docClient.send(command);
        return successHandler<
            Pick<ScanCommandOutput, 'Items' | 'LastEvaluatedKey'>
        >({
            Items: response.Items,
            LastEvaluatedKey: response.LastEvaluatedKey,
        });
    } catch (error) {
        return errorHandler(error);
    }
};

// export const queryActiveEvents = async (tableName, index) => {
//     const date_today = new Date().toISOString();

//     console.log("Date Today:", date_today);

//     const command = new QueryCommand({
//         TableName: tableName,
//         IndexName: index,
//         KeyConditionExpression: "start_date <= :date_today AND end_date >= :date_today",
//         FilterExpression: "approval_status = :approval_status",
//         ExpressionAttributeValues: {
//             ":date_today": date_today,
//             ":approval_status": "approved"
//         },
//         ScanIndexForward: true,
//     });

//     try {
//         const response = await docClient.send(command);
//         return successHandler(response.Items);
//     } catch (error) {
//         return errorHandler(error);
//     }
// }

export const queryPastEvents = async (
    tableName: string,
    lastEvaluatedKey: Record<string, AttributeValue> | null = null,
) => {
    const date_today = new Date().toISOString();

    console.log('Last Evaluated Key:', lastEvaluatedKey);

    // TODO: Add limit for query pagination
    const params: QueryInput = {
        TableName: tableName,
        FilterExpression:
            'end_date <= :date_today AND approval_status = :approval_status',
        ExpressionAttributeValues: {
            ':date_today': date_today as unknown as AttributeValue,
            ':approval_status': 'approved' as unknown as AttributeValue,
        },
        ScanIndexForward: true,
        Limit: 10, // Change limit to 10 after testing
        ...(lastEvaluatedKey && { ExclusiveStartKey: lastEvaluatedKey }),
    };

    const command = new ScanCommand(params);

    try {
        const response = await docClient.send(command);
        return successHandler<
            Pick<ScanCommandOutput, 'Items' | 'LastEvaluatedKey'>
        >({
            Items: response.Items,
            LastEvaluatedKey: response.LastEvaluatedKey,
        });
    } catch (error) {
        return errorHandler(error);
    }
};

export const queryIncomingEvents = async (
    tableName: string,
    lastEvaluatedKey: Record<string, AttributeValue> | null = null,
) => {
    const date_today = new Date().toISOString();

    // TODO: Add limit for query pagination
    const params: QueryInput = {
        TableName: tableName,
        FilterExpression:
            'start_date >= :date_today AND end_date >= :date_today AND approval_status = :approval_status',
        ExpressionAttributeValues: {
            ':date_today': date_today as unknown as AttributeValue,
            ':approval_status': 'approved' as unknown as AttributeValue,
        },
        ScanIndexForward: true,
        Limit: 10, // Change limit to 10 after testing
        ...(lastEvaluatedKey && { ExclusiveStartKey: lastEvaluatedKey }),
    };

    const command = new ScanCommand(params);

    try {
        const response = await docClient.send(command);
        return successHandler<
            Pick<ScanCommandOutput, 'Items' | 'LastEvaluatedKey'>
        >({
            Items: response.Items,
            LastEvaluatedKey: response.LastEvaluatedKey,
        });
    } catch (error) {
        return errorHandler(error);
    }
};

export const updateEventDetails = async (
    tableName: string,
    partitionKey: string,
    sortKey: string,
    newDataObject: EventDetails,
) => {
    const updateExpressionParts: string[] = [];
    const expressionAttributeValues: {
        [key: string]: { [key: string]: string | number | boolean | null };
    } = {};

    Object.entries(newDataObject).forEach(([attributeName, attributeValue]) => {
        const placeholder = `:${attributeName}`;
        updateExpressionParts.push(`${attributeName} = ${placeholder}`);
        expressionAttributeValues[placeholder] = attributeValue;
    });

    const updateExpression = `SET ${updateExpressionParts.join(', ')}`;

    const params: UpdateCommandInput = {
        TableName: tableName,
        Key: {
            event_id: partitionKey,
            start_date: sortKey,
        },
        UpdateExpression: updateExpression,
        ExpressionAttributeValues: expressionAttributeValues,
        ReturnValues: 'ALL_NEW',
    };

    const command = new UpdateCommand(params);

    try {
        const response = await docClient.send(command);
        return successHandler<UpdateCommandOutput['Attributes']>(
            response.Attributes,
        );
    } catch (error) {
        return errorHandler(error);
    }
};
