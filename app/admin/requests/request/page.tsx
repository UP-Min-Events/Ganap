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
        <main className="py-4">
            <header className="flex flex-col w-full text-center px-4">
                <BackButton />
                <h1 className="text-[1.5rem] md:text-[2.25xl] lg:text-3xl font-bold">Event Title</h1>
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