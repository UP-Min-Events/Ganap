import { ArrowLeftIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BackButton() {
    return (
        <Link href="/" className="left-0 md:left-[20%] lg:left-[30%] absolute ml-6">
            <Button variant="ghost" className="p-0">
                <ArrowLeftIcon className="h-6 w-6" />
            </Button>
        </Link>
    )
}
