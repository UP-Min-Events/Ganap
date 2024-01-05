// Components
import PageHeader from '@/components/(nav)/PageHeader';
import ScanArea from './components/ScanArea';

export default function Scan() {
    return (
        <main className="min-h-screen flex flex-col items-center bg-red-500 bg-opacity-80">
            <PageHeader />
            <ScanArea />
        </main>
    );
}
