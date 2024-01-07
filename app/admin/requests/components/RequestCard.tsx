// Utilities
import Link from 'next/link';
import moment from 'moment';

// UI Components
import { Badge } from '@/components/ui/badge';
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
import { ArrowUpRight, Paperclip, Info, MapPin, Calendar } from 'lucide-react';

export default function RequestCard({ event }: { event: EventDetails }) {
    return (
        <Link href={`/admin/requests/${event.event_id}`} className="rounded-xl">
            <Card className="group mx-auto mb-4 flex select-none items-center justify-between border-none p-4 shadow-md hover:border-red-500 lg:p-6">
                <section className="flex w-full flex-col gap-4">
                    <CardHeader className="space-y-1 py-0 pl-2 pr-0">
                        <h2 className="flex flex-row gap-2 justify-between items-center text-2xl font-bold leading-7">
                            <span className="line-clamp-1">{event.event_name}</span>
                            <Badge className="flex items-center gap-1 font-semibold [&>svg]:h-[0.75rem] [&>svg]:w-[0.75rem]">
                                <Paperclip /> 
                                <span className="hidden sm:inline">with forms</span>
                            </Badge>
                        </h2>
                        <CardDescription className="font-normal leading-3">
                            by {event.organizer}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-between py-0 pl-2 pr-0 align-bottom">
                        <section className="space-y-1 text-sm leading-3">
                            <h3 className="flex items-center gap-1 font-semibold text-red-500 [&>svg]:h-[0.75rem] [&>svg]:w-[0.75rem]">
                                <Calendar />{' '}
                                {moment(event.start_date).format('lll')}
                            </h3>
                            <h3 className="flex items-center gap-1 font-semibold [&>svg]:h-[0.75rem] [&>svg]:w-[0.75rem]">
                                <MapPin /> {event.venue}
                            </h3>
                        </section>
                        <Button
                            size="icon_s"
                            className="bg-red-100 text-red-500 group-hover:bg-red-200 group-hover:text-red-600 [&>svg]:h-[1rem] [&>svg]:w-[1rem]"
                        >
                            <ArrowUpRight />
                        </Button>
                    </CardContent>
                </section>
            </Card>
        </Link>
    );
}
