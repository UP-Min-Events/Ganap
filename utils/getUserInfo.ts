import { cookies } from "next/headers"

export default async function getUserInfo() {
    
    const cookieStore = cookies()
    const access_token = cookieStore.get('access_token')

    const user_info_response = await fetch(`https://${process.env.NEXT_PUBLIC_COGNITO_DOMAIN}/oauth2/userInfo`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${access_token?.value}`
        }
    })

    if (!user_info_response.ok) {
        return null
    }

    const user_info_data = await user_info_response.json()
    console.log('user_info_data', user_info_data)

    return user_info_data
}