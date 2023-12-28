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
import { Separator } from '@/components/ui/separator';
import moment from 'moment';

export default function ScheduleCard({
    start_date,
    end_date,
    venue,
}: EventDetails) {
    return (
        <Card className="flex flex-col">
            <CardHeader className="space-y-0.5 px-4 pt-4 pb-2">
                <CardTitle className="flex items-center gap-[0.375rem] text-lg">
                    <CalendarIcon /> Schedule
                </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="p-4">
                <div className="flex justify-between">
                    <p className="flex items-center gap-1">
                        <CalendarIcon />
                        Start on:
                    </p>
                    <p className="font-medium">
                        {moment(start_date).format('LL, h:mm A')}
                    </p>
                </div>
                <div className="flex justify-between">
                    <p className="flex items-center gap-1">
                        <ClockIcon />
                        Ends on:
                    </p>
                    <p className="font-medium">
                        {moment(end_date).format('LL, h:mm A')}
                    </p>
                </div>
                <div className="flex justify-between">
                    <p className="flex items-center gap-1">
                        <DrawingPinIcon />
                        Venue
                    </p>
                    <p className="font-medium">{venue}</p>
                </div>
            </CardContent>
        </Card>
    );
}
