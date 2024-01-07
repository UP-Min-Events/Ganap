// Utilities
import Link from 'next/link';

export default function EventInstance() {
    return (
        <Link href="/event">
            <div className="mb-1 cursor-pointer rounded bg-green-100 p-[0.125rem] text-xs text-black lg:text-sm">
                Meeting
            </div>
        </Link>
    );
}
