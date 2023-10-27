import { ExitIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SignoutButton() {
    return (
        <Link href="/login" className="fixed right-0 pr-4">
            <Button variant="ghost" className="p-0 text-var-neutral-30">
                <ExitIcon className="h-6 w-6 lg:h-8 lg:w-8"/>
            </Button>
        </Link>
    )
}
