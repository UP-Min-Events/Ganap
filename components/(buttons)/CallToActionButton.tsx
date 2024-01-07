// Utilities
import Link from 'next/link';

// UI Componments
import { Button } from '@/components/ui/button';

interface CallToActionButtonProps {
    action: string;
}

export default function CallToActionButton({
    action,
}: CallToActionButtonProps) {
    return (
        <Button
            id="action-button"
            className="h-[2.5rem] w-[15rem] rounded-2xl bg-red-500 text-center text-base hover:bg-red-600"
            aria-label="Call to Action"
        >
            {action}
        </Button>
    );
}
