import { cookies } from 'next/headers';

export default async function getUserInfo() {
    const cookieStore = cookies();
    const access_token = cookieStore.get('access_token');

    try {
        const user_info_response = await fetch(
            `https://${process.env.NEXT_PUBLIC_COGNITO_DOMAIN}/oauth2/userInfo`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${access_token?.value}`,
                },
            },
        );

        if (!user_info_response.ok) {
            console.error('Error fetching user info');
            return null;
        }

        const user_info_data = await user_info_response.json();
        return user_info_data;
    } catch (error) {
        console.error(error);
    }
}
