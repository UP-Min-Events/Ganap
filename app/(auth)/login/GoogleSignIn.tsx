"use client"

import { useEffect, useState } from "react";
import { Amplify, Auth, Hub } from "aws-amplify"
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import amplifyconfig from "@/amplify.config"
import { Button } from "@/components/ui/button"

Amplify.configure(amplifyconfig)

export default function GoogleSignIn() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = Hub.listen('auth', ({ payload: { event, data } }) => {
            switch (event) {
                case 'signIn':
                    setUser(data);
                    break;
                case 'signOut':
                    setUser(null)
                    break;
                case 'customOAuthState':
                    console.log('customOAuthState', data);
            }
        });

        getUser();

        return unsubscribe
    }, [])

    const getUser = async (): Promise<void> => {
        try {
            const currentUser = await Auth.currentAuthenticatedUser();
            setUser(currentUser);
            console.log(currentUser)
        } catch (error) {
            console.error(error);
            console.log("Not signed in");
        }
    };

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