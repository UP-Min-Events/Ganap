import { ArrowLeftIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BackButton() {
    return (
        <Link href="/" className="fixed pl-4">
            <Button variant="ghost" className="p-0">
                <ArrowLeftIcon className="h-8 w-8" />
            </Button>
        </Link>
    )
}
