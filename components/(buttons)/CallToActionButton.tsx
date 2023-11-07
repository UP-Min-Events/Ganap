// Utilities
import Link from "next/link"

// UI Componments
import { Button } from "@/components/ui/button"

interface CallToActionButtonProps {
  action: string;
}

export default function CallToActionButton({ action }: CallToActionButtonProps) {
    return (
        <Button 
            id="action-button" 
            className="bg-red-500 hover:bg-red-600 w-[15rem] h-[2.5rem] rounded-2xl text-base text-center" 
            aria-label="Call to Action"
        >
            {action}
        </Button>
    )
}