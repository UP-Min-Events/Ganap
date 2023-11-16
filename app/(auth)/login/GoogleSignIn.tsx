"use client"

import { useEffect, useState } from "react";
import { Amplify, Auth } from "aws-amplify"
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Button } from "@/components/ui/button"
import { getUser } from "@/utils/getUser";
import { CognitoUser } from "amazon-cognito-identity-js";
import amplifyconfig from "@/amplify.config"

Amplify.configure(amplifyconfig)

export default function GoogleSignIn() {

    const [user, setUser] = useState<CognitoUser | any>(null);

    const bruh = async () => {
        const user = await getUser();
        setUser(user);
    }

    useEffect(() => {
        bruh()
    }, [])

    return (
        <>
            <div>{user?.getUsername()}</div>
            <Button
                className="w-40 lg:w-52 h-[2.5rem] rounded-xl bg-red-500 hover:bg-red-600 font-medium"
                onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })}
            >
                Log in
            </Button>
        </>
    )
}