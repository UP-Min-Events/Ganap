// Components
import AccountInfo from './components/AccountInfo';
import PageHeader from '@/components/(nav)/PageHeader';
import AppInfoAccordion from './components/AppInfoAccordion';

export default function Account() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <PageHeader />
            <AccountInfo />
            <AppInfoAccordion />
        </main>
    );
}
