// Utilities
import Link from 'next/link';

// UI Components
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';

export default function AccountButton() {
    return (
        <Link
            href="/account"
            className="absolute right-0 pt-0 lg:pt-1"
            aria-label="Account"
        >
            <Button
                id="account"
                variant="ghost"
                className="p-0 text-red-500 hover:bg-inherit hover:text-red-600"
                aria-label="Account"
            >
                <Icon icon="bi:person-fill" className="h-6 w-6" />
            </Button>
        </Link>
    );
}
