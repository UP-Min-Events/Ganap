// Components
import DownloadableFormCard from "./DownloadableFormCard";
import { ScrollArea } from "@/components/ui/scroll-area"

export default function FormFeed() {
  return (
    <ScrollArea className="max-h-[calc(100vh-12rem)] overflow-scroll w-full no-scrollbar">
      <section className="container flex flex-col gap-4 sm:grid sm:grid-cols-2 place-items-center md:max-w-[75%] lg:max-w-[75%] xl:max-w-[50%] mt-4">
          <DownloadableFormCard />
          <DownloadableFormCard />
          <DownloadableFormCard />
          <DownloadableFormCard />
      </section>
    </ScrollArea>
  )
}