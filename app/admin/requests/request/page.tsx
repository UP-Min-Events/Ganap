// UI Components
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import BackButton from "@/components/(buttons)/BackButton"

// Feature Components
import DataCard from "./components/DataCard"
import ScheduleCard from "./components/ScheduleCard"
import DescriptionCard from "./components/DescriptionCard"

export default function Request() {
    return (
        <main>
            <header className="px-6 w-full flex justify-center relative bg-red-500 text-white py-4 overflow-hidden">
                <BackButton />
                <h1 className="text-[1.5rem] md:text-[1.75rem] lg:text-4xl font-semibold text-center">Event Title</h1>
            </header>
            <Separator className="my-4" />
            <section className="container flex flex-col gap-4 md:max-w-[60%] lg:max-w-[40%]">
                <h3 className="flex justify-center items-center text-center text-sm font-medium">
                    Status:&nbsp; <Badge>Event Status</Badge>
                </h3>
                <ScheduleCard />    
                <DescriptionCard />
                <DataCard />
            </section>
        </main>
    )
}