// Components
import Sidebar from "@/components/(nav)/Sidebar"
import EventCard from "@/app/components/EventCard"
import EventTabs from "@/app/components/EventTabs"
import ButtonMenu from "@/components/(nav)/ButtonMenu"
import PageHeader from "@/components/(nav)/PageHeader"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Home() {
  
  return (
    <main className="min-h-screen flex flex-col items-center">
      <PageHeader />
      <section className="container flex flex-col px-8 md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%]">
        <header className="text-2xl font-bold mb-2">
          <EventTabs /> 
        </header>
        <ScrollArea className="max-h-[calc(100vh-16rem)] overflow-scroll w-full no-scrollbar">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </ScrollArea>
      </section>
      <ButtonMenu />
    </main>
  )
}
