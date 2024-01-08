// Components
import PageHeader from '@/components/(nav)/PageHeader';
import ButtonMenu from '@/components/(nav)/ButtonMenu';
import CalendarTable from '@/app/admin/calendar/components/CalendarTable';
import { fetchApprovedEvent } from '@/actions/fetchRequestEvents';

interface FetchRequestedEventProps {
    Items: EventDetails[];
    LastEvaluatedKey: LastEvaluatedKeyProp;
}
export default async function Calendar() {
    let approvedEvents: FetchRequestedEventProps = await fetchApprovedEvent();

    return (
        <main className="flex min-h-screen flex-col items-center">
            <PageHeader />
            <CalendarTable events={approvedEvents} />
            <ButtonMenu />
        </main>
    );
}
