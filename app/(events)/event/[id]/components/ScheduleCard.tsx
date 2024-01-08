// Icons
import { CalendarSearch, MapPinned } from 'lucide-react';

// shadCN Components
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

import moment from 'moment';
import EventStatus from './EventStatus';

export default function ScheduleCard({
    start_date,
    end_date,
    venue,
    event_name,
}: EventDetails) {
    return (
        <Card className="flex flex-col">
            <CardHeader className="space-y-0.5 px-4 md:px-6 pt-4 md:pt-6 pb-2 rounded-t-lg text-black">
                <CardTitle className="flex justify-between">
                    <div className="flex text-xl items-center gap-[0.375rem] text-black">
                        <CalendarSearch className="size-[1.125rem] text-red-500" /> Details
                    </div>
                    <EventStatus start_date={start_date} end_date={end_date} />
                </CardTitle>
            </CardHeader>
            {/* <Separator /> */}
            <CardContent className="px-4 md:px-6 py-4 md:pb-6 bg-white rounded-b-lg space-y-4">
                <section className="flex gap-4 items-center">
                    <div className="min-w-[3rem] min-h-[3rem] bg-white text-black border text-card-foreground shadow rounded text-center flex flex-col">
                        <span className="text-xs uppercase font-medium h-[40%]">
                            {moment(start_date).format('MMM')}
                        </span>
                        <Separator />
                        <span className="text-lg font-bold">
                            {moment(start_date).format('DD')}
                        </span>
                    </div>
                    <div>
                        <h3 className="font-bold line-clamp-2 leading-5">
                            {moment(start_date).format('dddd, MMMM D, YYYY')}
                            {moment(start_date).isSame(end_date, 'day') ? '' : ' - '}
                            {moment(end_date).format('MMMM D')}
                        </h3>
                        <p className="text-sm text-neutral-500">
                            {moment(start_date).format('LT')} - {moment(end_date).format('LT')}
                        </p>
                    </div>
                </section>
                <section className="flex gap-4 items-center">
                    <div className="min-w-[3rem] min-h-[3rem] bg-white text-black border text-card-foreground shadow rounded flex items-center justify-center">
                        <MapPinned className="size-[1.75rem]" />
                    </div>
                    <h3 className="font-bold line-clamp-2 leading-5">
                        {venue}
                    </h3>
                </section>
            </CardContent>
        </Card>
    );
}
