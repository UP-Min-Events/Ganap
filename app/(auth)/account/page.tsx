// Components
import AccountInfo from './components/AccountInfo';
import PageHeader from '@/components/(nav)/PageHeader';
import AppInfoAccordion from './components/AppInfoAccordion';

export default function Account() {
    return (
        <main className="min-h-screen flex flex-col items-center">
            <PageHeader />
            <AccountInfo />
            <AppInfoAccordion />
        </main>
    );
}
