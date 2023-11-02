import { ArrowLeftIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BackButton() {
    return (
        <Link href="/" className="absolute left-0 md:left-[20%] lg:left-[30%] ml-6">
            <Button variant="ghost" className="p-0 hover:bg-red-500 hover:text-red-200">
                <ArrowLeftIcon className="h-6 w-6" />
            </Button>
        </Link>
    )
}
