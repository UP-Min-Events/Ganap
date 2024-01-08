// Components
import { Badge } from '@/components/ui/badge';
import moment from 'moment';

function getEventStatus({ start_date, end_date }: EventDetails) {
    const now = moment(); // Current date and time

    const startDate = moment(start_date);
    const endDate = moment(end_date);

    if (now.isBefore(startDate)) {
        return {
            status: 'Upcoming',
            className: 'bg-red-100 text-red-500 font-medium',
        };
    } else if (now.isBetween(startDate, endDate)) {
        return {
            status: 'Ongoing',
            className: 'bg-green-400 text-white font-medium',
        };
    } else {
        return {
            status: 'Finished',
            className: 'bg-neutral-500 text-white font-medium',
        };
    }
}

export default function EventStatus({ start_date, end_date }: EventDetails) {
    const { status, className } = getEventStatus({ start_date, end_date });

    return (
        <div className="flex items-center justify-center text-center text-sm font-medium">
            <Badge className={className}>{status}</Badge>
        </div>
    );
}
