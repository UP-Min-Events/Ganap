// Components
import { Badge } from '@/components/ui/badge';
import moment from 'moment';

function getEventStatus({ start_date, end_date }: EventDetails) {
    const now = moment(); // Current date and time

    const startDate = moment(start_date);
    const endDate = moment(end_date);

    if (now.isBefore(startDate)) {
        return 'Upcoming';
    } else if (now.isBetween(startDate, endDate)) {
        return 'Ongoing';
    } else {
        return 'Finished';
    }
}

export default function EventStatus({ start_date, end_date }: EventDetails) {
    return (
        <h3 className="flex items-center justify-center text-center text-sm font-medium mb-4">
            Status:&nbsp;{' '}
            <Badge>{getEventStatus({ start_date, end_date })}</Badge>
        </h3>
    );
}
