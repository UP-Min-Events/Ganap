// UI Components
import { ExitIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

export default function SignoutButton() {
    return (
        <div className="absolute right-0 pt-0 lg:pt-1">
            <form 
                action="/api/auth/signout" 
                method="GET"
            >
                <Button 
                    id="signout" 
                    variant="ghost" 
                    className="p-0 text-white hover:bg-red-500 hover:text-red-200" 
                    aria-label="Signout"
                >
                    <ExitIcon className="h-6 w-6"/>
                </Button>
            </form>
        </div>
    )
}