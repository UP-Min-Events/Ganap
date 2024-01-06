import PageHeader from '@/components/(nav)/PageHeader';
import RequestForm from './components/RequestForm';

export default function Request() {
    return (
        <main className="min-h-screen flex flex-col items-center">
            <PageHeader />
            <RequestForm />
        </main>
    );
}
