// Utilities
import Link from 'next/link';

export default function EventInstance({ event_name }: EventDetails) {
    return (
        <div className="mx-1 sm:mx-6 mt-1 sm:mt-2 mb-1 px-2 cursor-pointer rounded bg-white hover:bg-red-100 text-black hover:text-red-500 font-medium p-[0.125rem] text-xs lg:text-sm line-clamp-1 shadow">
            {event_name}
        </div>
    );
}
