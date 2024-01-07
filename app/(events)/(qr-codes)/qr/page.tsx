// Components
import PageHeader from '@/components/(nav)/PageHeader';
import ButtonMenu from '@/components/(nav)/ButtonMenu';
import AccountQrCode from './components/AccountQrCode';

export default function QR() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <PageHeader />
            <AccountQrCode />
            <ButtonMenu />
        </main>
    );
}
