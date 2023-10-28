import { ExitIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SignoutButton() {
    return (
        <Link href="/login" className="absolute right-0 md:right-[20%] lg:right-[30%] mr-6">
            <Button variant="ghost" className="p-0 text-white">
                <ExitIcon className="h-6 w-6"/>
            </Button>
        </Link>
    )
}
