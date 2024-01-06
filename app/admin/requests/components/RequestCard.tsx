// Utilities
import Link from 'next/link';
import moment from 'moment';

// UI Components
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

// Icons
import { ArrowUpRight, Calendar, MapPin, Paperclip } from 'lucide-react';

export default function RequestCard({ event }: { event: EventDetails }) {
    return (
        <Link href={`/admin/requests/${event.event_id}`} className="rounded-xl">
            <Card className="mx-auto flex justify-between items-center group shadow-md border-none hover:border-red-500 p-4 mb-4 lg:p-6 select-none">
                <section className="w-full flex flex-col gap-4">
                    <CardHeader className="space-y-1 pl-2 pr-0 py-0">
                        <h2 className="text-2xl font-bold leading-7">
                            {event.event_name}
                        </h2>
                        <CardDescription className="leading-3 font-normal">
                            by {event.organizer}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-between align-bottom pl-2 pr-0 py-0">
                        <section className="text-sm leading-3 space-y-1">
                            <h3 className="font-semibold text-red-500 flex items-center gap-1 [&>svg]:w-[0.75rem] [&>svg]:h-[0.75rem]">
                                <Calendar />{' '}
<<<<<<< HEAD
                                {moment(event.start_date).format('LL, h:mm A')},
                                &nbsp;
                                <MapPin /> {event.venue}
                            </h3>
                            <h3 className="font-semibold flex items-center gap-1 [&>svg]:w-[0.75rem] [&>svg]:h-[0.75rem]">
                                <Paperclip /> &nbsp; With Accomplished Forms
=======
                                {moment(event.start_date).format('LL, h:mm A')},{' '}
                                {/* <MapPin /> {event.venue} */}
                            </h3>
                            <h3 className="font-semibold flex items-center gap-1 [&>svg]:w-[0.75rem] [&>svg]:h-[0.75rem]">
                                <Paperclip /> With Accomplished Forms
>>>>>>> 62fb14fa04a460dab8cd2cde6068c784adcb26d6
                            </h3>
                        </section>
                        <Button
                            size="icon_s"
                            className="bg-red-100 group-hover:bg-red-200 text-red-500 group-hover:text-red-600 [&>svg]:w-[1rem] [&>svg]:h-[1rem]"
                        >
                            <ArrowUpRight />
                        </Button>
                    </CardContent>
                </section>
            </Card>
        </Link>
    );
}
