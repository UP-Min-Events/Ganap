// Components
import RequestTabs from "./RequestTabs"
import RequestCard from "./RequestCard"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function RequestFeed() {
  return (
    <section className="container flex flex-col px-8 md:max-w-[50%] lg:max-w-[40%]">
    <header className="text-2xl font-bold mb-2">
      <RequestTabs /> 
    </header>
    <ScrollArea className="max-h-[calc(100vh-16rem)] overflow-scroll w-full no-scrollbar">
      <RequestCard />
      <RequestCard />
      <RequestCard />
    </ScrollArea>
  </section>
  )
}