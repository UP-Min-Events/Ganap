// Utilities
import dynamic from 'next/dynamic';

// Components
import ButtonMenu from '@/components/(nav)/ButtonMenu';
import PageHeader from '@/components/(nav)/PageHeader';
const EventFeed = dynamic(() => import('./components/EventFeed'));

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center">
            <PageHeader />
            <EventFeed />
            <ButtonMenu />
        </main>
    );
}
