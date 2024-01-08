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
import { Separator } from '@/components/ui/separator';

import moment from 'moment';
import EventStatus from './EventStatus';

export default function DetailsCard({
    start_date,
    end_date,
    venue,
}: EventDetails) {
    return (
        <Card className="flex flex-col">
            <CardHeader className="space-y-0.5 rounded-t-lg px-4 pb-2 pt-4 text-black md:px-6 md:pt-6">
                <CardTitle className="flex justify-between">
                    <div className="flex items-center gap-[0.375rem] text-xl text-black">
                        <CalendarSearch className="size-[1.125rem] text-red-500" />{' '}
                        Details
                    </div>
                    <EventStatus start_date={start_date} end_date={end_date} />
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 rounded-b-lg bg-white px-4 py-4 md:px-6 md:pb-6">
                <section className="flex items-center gap-4">
                    <div className="flex min-h-[3rem] min-w-[3rem] flex-col rounded border bg-white text-center text-black text-card-foreground shadow">
                        <span className="h-[40%] text-xs font-medium uppercase">
                            {moment(start_date).format('MMM')}
                        </span>
                        <Separator />
                        <span className="text-lg font-bold">
                            {moment(start_date).format('DD')}
                        </span>
                    </div>
                    <div>
                        <h3 className="line-clamp-2 font-bold leading-5">
                            {moment(start_date).format('dddd, MMMM D, YYYY')}
                            {moment(start_date).isSame(end_date, 'day')
                                ? ''
                                : ' - '}
                            {moment(end_date).format('MMMM D')}
                        </h3>
                        <p className="text-sm text-neutral-500">
                            {moment(start_date).format('LT')} -{' '}
                            {moment(end_date).format('LT')}
                        </p>
                    </div>
                </section>
                <section className="flex items-center gap-4">
                    <div className="flex min-h-[3rem] min-w-[3rem] items-center justify-center rounded border bg-white text-black text-card-foreground shadow">
                        <MapPinned className="size-[1.75rem]" />
                    </div>
                    <h3 className="line-clamp-2 font-bold leading-5">
                        {venue}
                    </h3>
                </section>
            </CardContent>
        </Card>
    );
}
