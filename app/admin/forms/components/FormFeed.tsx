// Components
import DownloadableFormCard from './DownloadableFormCard';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function FormFeed() {
    return (
        <ScrollArea className="max-h-[calc(100vh-12rem)] overflow-scroll w-full md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] no-scrollbar">
            <section className="mx-auto flex flex-col gap-4 sm:grid sm:grid-cols-2 place-items-center w-[max-content] mt-4">
                <DownloadableFormCard />
                <DownloadableFormCard />
                <DownloadableFormCard />
                <DownloadableFormCard />
            </section>
        </ScrollArea>
    );
}
