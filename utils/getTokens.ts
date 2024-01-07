import { cookies } from 'next/headers';

const getTokens = () => {
    const credentials = cookies();
    const access_token = credentials.get('access_token')?.value;
    const refresh_token = credentials.get('refresh_token')?.value;
    console.log('access_token', access_token);
    console.log('refresh_token', refresh_token);
    return { access_token, refresh_token };
};

export default getTokens;
