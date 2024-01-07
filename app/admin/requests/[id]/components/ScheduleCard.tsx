// Icons
import {
    MapPin,
    CalendarDaysIcon,
    CalendarCheck,
    CalendarX,
} from 'lucide-react';

// shadCN Components
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import moment from 'moment';
import { start } from 'repl';

export default function ScheduleCard({
    start_date,
    end_date,
    venue,
}: EventDetails) {
    return (
        <Card className="flex flex-col gap-2 p-4">
            <CardHeader className="space-y-0.5 p-2">
                <CardTitle className="flex items-center gap-2 text-xl">
                    <CalendarDaysIcon className="size-[1.25rem]" /> Schedule
                </CardTitle>
                <CardDescription>
                    Event schedule details set by the organizer.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-2">
                <div className="flex justify-between">
                    <p className="flex items-center">
                        <CalendarX className="size-4" />
                        &nbsp;Start Date
                    </p>
                    <p className="font-medium">
                        {moment(start_date).format('LL, h:mm A')}
                    </p>
                </div>
                <div className="flex justify-between">
                    <p className="flex items-center">
                        <CalendarCheck className="size-4" />
                        &nbsp;End Date
                    </p>
                    <p className="font-medium">
                        {moment(end_date).format('LL, h:mm A')}
                    </p>
                </div>
                <div className="flex justify-between">
                    <p className="flex items-center">
                        <MapPin className="size-4" />
                        &nbsp;Venue
                    </p>
                    <p className="font-medium">{venue}</p>
                </div>
            </CardContent>
        </Card>
    );
}
