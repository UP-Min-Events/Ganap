// Components
import BackButton from '@/components/(buttons)/BackButton';

export default function EventHeader({ event_title }: { event_title: string }) {
    return (
        <header className="px-6 w-full flex items-center justify-center relative bg-light-yellow-100 text-red-500 py-4 overflow-hidden">
            <nav className="flex flex-row relative justify-center items-center min-w-full md:min-w-[60%] lg:min-w-[40%] xl:min-w-[30%]">
                <BackButton />
                <h1 className="text-[1.75rem] font-bold text-center">
                    {event_title}
                </h1>
            </nav>
        </header>
    );
}
