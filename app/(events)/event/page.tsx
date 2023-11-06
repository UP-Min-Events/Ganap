// Components
import BackButton from "@/components/(buttons)/BackButton"
import { Separator } from "@/components/ui/separator"
import ScheduleCard from "./components/ScheduleCard"
import DescriptionCard from "./components/DescriptionCard"
import DataCard from "./components/DataCard"

export default function Event() {
    return (
        <main>
            <header className="px-6 w-full flex justify-center relative bg-red-500 text-white py-4 overflow-hidden">
                <BackButton />
                <h1 className="text-[1.5rem] md:text-[1.75rem] lg:text-4xl font-semibold text-center">Event Title</h1>
            </header>
            <Separator className="mb-4" />
            <section className="container flex flex-col gap-4 md:max-w-[60%] lg:max-w-[40%]">
                <h3 className="text-center text-sm font-medium">Status: Event Status</h3>
                <ScheduleCard />    
                <DescriptionCard />
                <DataCard />
            </section>
        </main>
    )
}