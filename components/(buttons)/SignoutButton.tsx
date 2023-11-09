"use client"

import { Amplify, Auth, Hub } from "aws-amplify"
import amplifyconfig from "@/amplify.config"
import { ExitIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

Amplify.configure(amplifyconfig)

export default function SignoutButton() {

    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = Hub.listen("auth", ({ payload: { event, data }}) => {
            switch (event) {
              case "signIn":
                setUser(data);
                break;
              case "signOut":
                setUser(null);
                break;
            }
        })

        getUser()

        return unsubscribe
    }, [])

    const getUser = async (): Promise<void> => {
        try {
            const currentUser = await Auth.currentAuthenticatedUser();
            console.log(currentUser)
        } catch (error) {
            console.error(error);
            console.log("Not signed in");
        }
    };

    const handleSignOut = async () => {
        console.log('signing out')

        try {
            await Auth.currentAuthenticatedUser().then(user => user.signOut())
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="absolute right-0 md:right-[20%] lg:right-[30%] mr-6">
            <Button 
                id="signout" 
                variant="ghost" 
                className="p-0 text-white hover:bg-red-500 hover:text-red-200" 
                aria-label="Signout"
                onClick={() => Auth.signOut()}
            >
                <ExitIcon className="h-6 w-6"/>
            </Button>
        </div>
    )
}