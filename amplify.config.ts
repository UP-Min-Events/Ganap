export const amplifyconfig = {
    Auth: {
        userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
        region: process.env.NEXT_PUBLIC_COGNITO_REGION,
        userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_WEB_CLIENT_ID,   
        oauth: {
            domain: process.env.NEXT_PUBLIC_COGNITO_DOMAIN,
            scope: ["email", "openid", "profile"],
            redirectSignIn: "http://localhost:3000/",
            redirectSignOut: "http://localhost:3000/login",
            responseType: "code"
        }
    }
}

export default amplifyconfig