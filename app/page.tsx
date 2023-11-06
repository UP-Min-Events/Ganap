// Components
import Sidebar from "@/components/(nav)/Sidebar"
import EventCard from "@/app/components/EventCard"
import EventTabs from "@/app/components/EventTabs"
import ButtonMenu from "@/components/(nav)/ButtonMenu"
import PageHeader from "@/components/(nav)/PageHeader"

export default function Home() {
  
  return (
    <main className="min-h-screen flex flex-col items-center">
      <PageHeader />
      <section className="container flex flex-col px-8 lg:max-w-[40%]">
        <header className="text-2xl font-bold mb-2">
          <EventTabs /> 
        </header>
        <>
          <EventCard />
          <EventCard />
          <EventCard />
        </>
      </section>
      <ButtonMenu />
    </main>
  )
}
