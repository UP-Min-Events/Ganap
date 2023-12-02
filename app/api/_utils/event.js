import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient, ScanCommand, QueryCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from 'uuid';
import { errorHandler, successHandler } from "./status_handler";
import endpointAuth  from "./endpoint_auth";

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

export const queryActiveEvents = async (tableName, lastEvaluatedKey = null) => {
    const date_today = new Date().toISOString();

    console.log("Date Today:", date_today);

    // TODO: Add limit for query pagination
    const params = {
        TableName: tableName,
        FilterExpression: "start_date <= :date_today AND end_date >= :date_today AND approval_status = :approval_status",
        ExpressionAttributeValues: {
            ":date_today": date_today,
            ":approval_status": "approved"
        },
        ScanIndexForward: true,
    }

    if (lastEvaluatedKey) {
        params.ExclusiveStartKey = lastEvaluatedKey;
    }

    const command = new ScanCommand(params);

    try {
        const response = await docClient.send(command);
        return successHandler(response.Items);
    } catch (error) {
        return errorHandler(error);
    }
}

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

export const queryPastEvents = async (tableName, lastEvaluatedKey = null) => {
    const date_today = new Date().toISOString();

    console.log("Date Today:", date_today);

    // TODO: Add limit for query pagination
    const params = {
        TableName: tableName,
        FilterExpression: "end_date <= :date_today AND approval_status = :approval_status",
        ExpressionAttributeValues: {
            ":date_today": date_today,
            ":approval_status": "approved"
        },
        ScanIndexForward: true,
    }

    if (lastEvaluatedKey) {
        params.ExclusiveStartKey = lastEvaluatedKey;
    }

    const command = new ScanCommand(params);

    try {
        const response = await docClient.send(command);
        return successHandler(response.Items);
    } catch (error) {
        return errorHandler(error);
    }
}

export const queryIncomingEvents = async (tableName, lastEvaluatedKey = null) => {
    const date_today = new Date().toISOString();

    // TODO: Add limit for query pagination
    const params = {
        TableName: tableName,
        FilterExpression: "start_date >= :date_today AND end_date >= :date_today AND approval_status = :approval_status",
        ExpressionAttributeValues: {
            ":date_today": date_today,
            ":approval_status": "approved"
        },
        ScanIndexForward: true,
    }

    if (lastEvaluatedKey) {
        params.ExclusiveStartKey = lastEvaluatedKey;
    }

    const command = new ScanCommand(params);

    try {
        const response = await docClient.send(command);
        return successHandler(response.Items);
    } catch (error) {
        return errorHandler(error);
    }
}

// export const updateEventDetails = async (tableName, key) => {
//     const params = {
//         TableName: tableName,
//         Key: {
//             event_id: key
//         },
//         UpdateExpression: {
            
//         }
//     }
// }
