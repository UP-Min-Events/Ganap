// Icons
import { CalendarIcon, ClockIcon, DrawingPinIcon } from '@radix-ui/react-icons';

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
        <Card className="flex flex-col gap-4 p-4">
            <CardHeader className="space-y-0.5 p-2">
                <CardTitle className="flex">
                    <CalendarIcon />
                    &nbsp; Schedule
                </CardTitle>
                <CardDescription>Event schedule details</CardDescription>
            </CardHeader>
            <CardContent className="p-2">
                <div className="flex justify-between">
                    <p className="flex items-center">
                        <CalendarIcon />
                        &nbsp;Start Date
                    </p>
                    <p className="font-medium">
                        {moment(start_date).format('LL, h:mm A')}
                    </p>
                </div>
                <div className="flex justify-between">
                    <p className="flex items-center">
                        <CalendarIcon />
                        &nbsp;End Date
                    </p>
                    <p className="font-medium">
                        {moment(end_date).format('LL, h:mm A')}
                    </p>
                </div>
                <div className="flex justify-between">
                    <p className="flex items-center">
                        <DrawingPinIcon />
                        &nbsp;Venue
                    </p>
                    <p className="font-medium">{venue}</p>
                </div>
            </CardContent>
        </Card>
    );
}
