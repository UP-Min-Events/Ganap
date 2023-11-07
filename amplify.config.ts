export const amplifyconfig = {
    Auth: {
        userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
        region: process.env.NEXT_PUBLIC_COGNITO_REGION,
        userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_WEB_CLIENT_ID,   
        oauth: {
            domain: "ganap.auth.ap-southeast-1.amazoncognito.com",
            scope: ["email", "openid", "profile"],
            redirectSignIn: "http://localhost:3000/onboarding",
            redirectSignOut: "http://localhost:3000/",
            responseType: "code"
        }
    }
}

export default amplifyconfig