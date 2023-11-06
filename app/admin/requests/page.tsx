// Components
import RequestTabs from "./components/RequestTabs"
// import RequestCard from "./components/RequestCard"
import ButtonMenu from "@/components/(nav)/ButtonMenu"
import PageHeader from "@/components/(nav)/PageHeader"

export default function Requests() {
  
  return (
    <main className="min-h-screen flex flex-col items-center">
      <PageHeader />
      <section className="container flex flex-col px-8 lg:max-w-[40%]">
        <header className="text-2xl font-bold mb-2">
          <RequestTabs /> 
        </header>
        <>
          {/* <RequestCard />
          <RequestCard />
          <RequestCard /> */}
        </>
      </section>
      <ButtonMenu />
    </main>
  )
}
