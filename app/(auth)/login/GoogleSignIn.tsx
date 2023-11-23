// Components
import { Button } from "@/components/ui/button";

export default function GoogleSignIn() {
    return (
        <form action='/api/auth/signin' method="GET">
            <Button className="w-44 lg:w-52 h-[3rem] rounded-full bg-red-500 hover:bg-red-600 font-medium mb-[15rem]">Sign In</Button>
        </form>
    )
}