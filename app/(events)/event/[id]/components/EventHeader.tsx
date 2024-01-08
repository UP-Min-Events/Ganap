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
        <header className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-light-yellow-100 px-6 pb-2 pt-4 text-red-500">
            <nav className="relative flex min-w-full flex-row items-center justify-center md:min-w-[60%] lg:min-w-[40%] xl:min-w-[30%]">
                <BackButton />
                <h1 className="text-center text-[1.5rem] font-bold md:text-[1.75rem]">
                    {event_name}
                </h1>
            </nav>
            <h3 className="font-medium text-black">by {organizer}</h3>
        </header>
    );
}
