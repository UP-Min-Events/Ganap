// Components
import BackButton from '@/components/(buttons)/BackButton';
import { Separator } from '@/components/ui/separator';
import moment from 'moment';

export default function EventHeader({ 
    event_name,
    organizer,
    start_date, 
}: EventDetails) {
    return (
        <header className="relative flex flex-col w-full items-center justify-center overflow-hidden bg-light-yellow-100 px-6 pt-4 pb-2 text-red-500">
            <nav className="relative flex min-w-full flex-row items-center justify-center md:min-w-[60%] lg:min-w-[40%] xl:min-w-[30%]">
                <BackButton />
                <h1 className="text-center text-[1.5rem] md:text-[1.75rem] font-bold">
                    {event_name}
                </h1>
            </nav>
            <h3 className="text-black font-medium">
                by {organizer}
            </h3>
        </header>
    );
}
