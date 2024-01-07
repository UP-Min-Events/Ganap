// Components
import EventTabs from '@/app/components/EventTabs';

export default async function EventFeed() {
    return (
        <section className="container flex flex-col px-8 md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%]">
            <header className="mb-2 text-2xl font-bold">
                <EventTabs />
            </header>
        </section>
    );
}
