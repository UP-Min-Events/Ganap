'use client'

// Utilities
import Link from "next/link"
import { useRouter } from 'next/navigation'

// UI Components
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "@radix-ui/react-icons"

export default function BackButton() {
    const router = useRouter();

    return (
        <nav onClick={() => router.back()} className="absolute left-0 pt-1 md:left-[20%] lg:left-[30%] ml-6" aria-label="Back">
            <Button id="back-button" variant="ghost" className="p-0 hover:bg-red-500 hover:text-red-200" aria-label="Back">
                <ArrowLeftIcon className="h-6 w-6" />
            </Button>
        </nav>
    )
}
