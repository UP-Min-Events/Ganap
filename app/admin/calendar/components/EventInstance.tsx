// Utilities
import Link from 'next/link';

export default function EventInstance({ event_name }: EventDetails) {
    return (
        <div className="mx-1 mb-1 mt-1 line-clamp-1 cursor-pointer rounded bg-white p-[0.125rem] px-2 text-xs font-medium text-black shadow hover:bg-red-100 hover:text-red-500 sm:mx-6 sm:mt-2 lg:text-sm">
            {event_name}
        </div>
    );
}
