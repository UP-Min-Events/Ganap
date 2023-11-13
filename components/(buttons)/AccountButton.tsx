// Utilities
import Link from "next/link"

// UI Components
import { Button } from "@/components/ui/button"
import { PersonIcon } from "@radix-ui/react-icons"

export default function AccountButton() {
    return (
        <Link 
            href="/account" 
            className="absolute right-0 pt-1 md:right-[20%] xl:right-[30%] mr-6 " 
            aria-label="Account"
        >
            <Button 
                id="account" 
                variant="ghost" 
                className="p-0 text-white hover:bg-red-500 hover:text-red-200" 
                aria-label="Account"
            >
                <PersonIcon className="h-6 w-6"/>
            </Button>
        </Link>
    )
}
