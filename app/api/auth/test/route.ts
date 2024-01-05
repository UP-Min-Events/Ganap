import { NextRequest, NextResponse } from 'next/server';
import {
    CognitoIdentityProviderClient,
    ListUsersInGroupCommand,
} from '@aws-sdk/client-cognito-identity-provider';
import getUserInfo from '@/utils/getUserInfo';

const client = new CognitoIdentityProviderClient({});

export async function GET(request: NextRequest) {
    const command = new ListUsersInGroupCommand({
        UserPoolId: 'ap-southeast-1_JLAIlXzwj',
        GroupName: 'admin',
    });

    try {
        const response = await client.send(command);
        console.log('response', response);
        return new NextResponse(JSON.stringify(response));
    } catch (error) {
        console.log('error', error);
        return new NextResponse(JSON.stringify(error));
    }

    return new NextResponse(JSON.stringify(response));

    const admin_users = response.Users;

    const user_info_data = await getUserInfo();
    const sub = user_info_data?.sub;

    const user_is_admin = admin_users?.some((user) => user.Username === sub);
    console.log('user_is_admin', user_is_admin);

    return new NextResponse(JSON.stringify({ user_is_admin }));
}
