import { Amplify } from 'aws-amplify'
import { CognitoUser } from 'amazon-cognito-identity-js'
import amplifyconfig from "@/amplify.config"

Amplify.configure(amplifyconfig)

export const getUser = async (): Promise<CognitoUser | any> => {
    try {
        const user = await Amplify.Auth.currentAuthenticatedUser()
        return user
    } catch (error) {
        console.error(error)
        return {}
    }
}