// Utilities
import Link from 'next/link';
import moment from 'moment';

// UI Components
import { DoubleArrowRightIcon } from '@radix-ui/react-icons';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

export default function EventCard({ event }: { event: EventDetails }) {
    return (
        <Link href="/event">
            <Card className="mx-auto xl:max-w-[75%] flex justify-between items-center group hover:bg-neutral-100 p-4 mb-4 lg:p-6 select-none">
                <section className="flex flex-col gap-4">
                    <CardHeader className="space-y-0 pl-2 py-0">
                        <h2 className="text-2xl font-bold">
                            {event.event_name}
                        </h2>
                        <CardDescription className="leading-3">
                            by {event.organizer}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm leading-3 space-y-1 pl-2 py-0">
                        <p className="font-semibold text-red-500 text-normal">
                            {moment(event.start_date).format('LL, h:mm a')}
                        </p>
                        <p>{event.venue}</p>
                    </CardContent>
                </section>
                <DoubleArrowRightIcon className="w-10 h-10 group-hover:text-red-500" />
            </Card>
        </Link>
    );
}
