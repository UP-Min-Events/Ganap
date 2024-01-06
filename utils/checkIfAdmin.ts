import {
    CognitoIdentityProviderClient,
    ListUsersInGroupCommand,
} from '@aws-sdk/client-cognito-identity-provider';
import getUserInfo from './getUserInfo';

const client = new CognitoIdentityProviderClient({
    region: process.env.NEXT_PUBLIC_AWS_REGION as string,
    credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env
            .NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY as string,
    },
});

export default async function checkIfAdmin() {
    const input = {
        UserPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID as string,
        GroupName: 'admin',
    };

    try {
        const command = new ListUsersInGroupCommand(input);
        const response = await client.send(command);
        const admin_users = response.Users;

        const user_info_data = await getUserInfo();
        const sub = user_info_data?.sub;

        const user_is_admin = admin_users?.some((user) => {
            const subAttribute = user.Attributes?.find(
                (attr) => attr.Name === 'sub',
            );
            return subAttribute && subAttribute.Value === sub;
        });

        return user_is_admin;
    } catch (error) {
        console.error(error);
    }
}
