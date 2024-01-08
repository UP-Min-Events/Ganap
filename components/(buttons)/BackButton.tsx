'use client';

// Utilities
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// UI Components
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

export default function BackButton() {
    const router = useRouter();

    return (
        <nav
            onClick={() => router.back()}
            className="absolute left-0 pt-0 lg:pt-1"
        >
            <Button
                id="back-button"
                variant="ghost"
                className="p-0 text-red-500 hover:bg-inherit hover:text-red-600"
                aria-label="Back"
            >
                <ArrowLeftIcon className="h-6 w-6" />
            </Button>
        </nav>
    );
}
