// Components
import { AddEvent } from './components/AddEvent';
import CalendarTable from './components/CalendarTable';
import PageHeader from '@/components/(nav)/PageHeader';
import ButtonMenu from '@/components/(nav)/ButtonMenu';

export default function Calendar() {
    return (
        <main className="min-h-screen flex flex-col items-center">
            <PageHeader />
            <AddEvent />
            <CalendarTable />
            <ButtonMenu />
        </main>
    );
}
