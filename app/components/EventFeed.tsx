// Components
import EventCard from "@/app/components/EventCard"
import EventTabs from "@/app/components/EventTabs"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function EventFeed() {
  return (
    <section className="container flex flex-col px-8 md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%]">
      <EventTabs /> 
      <ScrollArea className="max-h-[calc(100vh-13rem)] overflow-scroll w-full no-scrollbar rounded-xl">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </ScrollArea>
    </section>
  )
}