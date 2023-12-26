// Utilities
import Link from "next/link"

// UI Components
import { Button } from "@/components/ui/button"
import { Icon } from '@iconify/react';

export default function AccountButton() {
    return (
        <Link 
            href="/account" 
            className="absolute right-0 pt-0 lg:pt-1" 
            aria-label="Account"
        >
            <Button 
                id="account" 
                variant="ghost" 
                className="p-0 text-red-500 hover:text-black" 
                aria-label="Account"
            >
                <Icon icon="bi:person-fill" className="w-6 h-6" />
            </Button>
        </Link>
    )
}
