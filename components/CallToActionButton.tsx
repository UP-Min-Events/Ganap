import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CallToActionButtonProps {
  action: string;
}

export default function CallToActionButton({ action }: CallToActionButtonProps) {
    return (
        <Link href="/" className="fixed bottom-24">
            <Button className="bg-var-primary-20 w-[15rem] h-[3rem] rounded-2xl text-base text-center">
                {action}
            </Button>
        </Link>
    )
}