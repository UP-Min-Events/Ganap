import PageHeader from '@/components/(nav)/PageHeader';
import RequestForm from './components/RequestForm';

export default function Request() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <PageHeader />
            <RequestForm />
        </main>
    );
}
