// Components
import BackButton from '@/components/(buttons)/BackButton';

export default function EventHeader({ event_title }: { event_title: string }) {
    return (
        <header className="relative flex w-full items-center justify-center overflow-hidden bg-light-yellow-100 px-6 py-4 text-red-500">
            <nav className="relative flex min-w-full flex-row items-center justify-center md:min-w-[60%] lg:min-w-[40%] xl:min-w-[30%]">
                <BackButton />
                <h1 className="text-center text-[1.75rem] font-bold">
                    {event_title}
                </h1>
            </nav>
        </header>
    );
}
