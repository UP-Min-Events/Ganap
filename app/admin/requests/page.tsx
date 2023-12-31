// Utilities
import dynamic from 'next/dynamic';

// Components
import ButtonMenu from '@/components/(nav)/ButtonMenu';
import PageHeader from '@/components/(nav)/PageHeader';
const RequestFeed = dynamic(() => import('./components/RequestFeed'));

export default function Requests() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <PageHeader />
            <RequestFeed />
            <ButtonMenu />
        </main>
    );
}
