// Components
import { AddEvent } from './components/AddEvent';
import CalendarTable from './components/CalendarTable';
import PageHeader from '@/components/(nav)/PageHeader';
import ButtonMenu from '@/components/(nav)/ButtonMenu';
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
            {/* <AddEvent /> */}
            <CalendarTable events={approvedEvents} />
            <ButtonMenu />
        </main>
    );
}
