// Icons
import { Calendar, CalendarX, CalendarCheck, MapPin } from 'lucide-react';

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
import { Badge } from '@/components/ui/badge';

import moment from 'moment';

export default function ScheduleCard({
    start_date,
    end_date,
    venue,
}: EventDetails) {
    return (
        <Card className="flex flex-col">
            <CardHeader className="space-y-0.5 px-4 pb-2 pt-4 bg-red-100 rounded-t-lg text-black">
                <CardTitle className="flex justify-between">
                    <div className="flex items-center gap-[0.375rem]">
                        <Calendar className="size-4" /> Schedule
                    </div>
                    <Badge className="bg-primary text-white">
                        {moment(start_date).startOf('day').fromNow()}
                    </Badge>
                </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="p-4">
                <div className="flex justify-between">
                    <p className="flex items-center gap-1">
                        <CalendarX className="size-4" />
                        From:
                    </p>
                    <p className="font-medium">
                        {moment(start_date).format('l, LT')}
                    </p>
                </div>
                <div className="flex justify-between">
                    <p className="flex items-center gap-1">
                        <CalendarCheck className="size-4" />
                        Until:
                    </p>
                    <p className="font-medium">
                        {moment(end_date).format('l, LT')}
                    </p>
                </div>
                <div className="flex justify-between">
                    <p className="flex items-center gap-1">
                        <MapPin className="size-4" />
                        Venue
                    </p>
                    <p className="font-medium">{venue}</p>
                </div>
            </CardContent>
        </Card>
    );
}
