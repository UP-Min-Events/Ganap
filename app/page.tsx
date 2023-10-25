import EventCard from "@/components/(event)/EventCard"
import Sidebar from "@/components/(nav)/Sidebar"
import EventTabs from "@/components/(event)/EventTabs"
import ButtonMenu from "@/components/(nav)/ButtonMenu"
import { Separator } from "@/components/ui/separator"


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <header className="flex items-center justify-center pt-4">
        {/* <Sidebar />  */}
        <h1 className="text-3xl text-center lg:text-5xl font-bold text-var-primary-30 select-none">Ganap </h1>
      </header>
      <Separator className="my-4" />
      <section className="container flex flex-col px-8 lg:max-w-[50%]">
        <header className="text-2xl font-bold mb-2">
          <EventTabs /> 
        </header>
        <EventCard />
        <EventCard />
        <EventCard />
      </section>
      <ButtonMenu />
    </main>
  )
}
