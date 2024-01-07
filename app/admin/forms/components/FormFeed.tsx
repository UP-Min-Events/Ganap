// Components
import DownloadableFormCard from './DownloadableFormCard';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function FormFeed() {
    return (
        <ScrollArea className="no-scrollbar max-h-[calc(100vh-12rem)] w-full overflow-scroll md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%]">
            <section className="mx-auto mt-4 flex w-[max-content] flex-col place-items-center gap-4 sm:grid sm:grid-cols-2">
                <DownloadableFormCard />
                <DownloadableFormCard />
                <DownloadableFormCard />
                <DownloadableFormCard />
            </section>
        </ScrollArea>
    );
}
