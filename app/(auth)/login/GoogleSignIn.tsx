"use client"

import { Amplify, Auth, Hub } from "aws-amplify"
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import amplifyconfig from "@/amplify.config"
import { Button } from "@/components/ui/button"

Amplify.configure(amplifyconfig)

export default function GoogleSignIn() {
    return (
        <Button 
            className="w-40 lg:w-52 h-[2.5rem] rounded-xl bg-red-500 hover:bg-red-600 font-medium"
            onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })}
        >
            Log in
        </Button>
    )
}