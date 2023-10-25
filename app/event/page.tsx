import BackButton from "@/components/(nav)/BackButton"
import { Separator } from "@/components/ui/separator"
import ScheduleCard from "@/components/(event)/ScheduleCard"
import DescriptionCard from "@/components/(event)/DescriptionCard"

export default function Event() {
    return (
        <main className="py-4">
            <header className="flex flex-col w-full text-center px-4">
                <BackButton />
                <h1 className="text-3xl lg:text-5xl font-bold">Event Title</h1>
            </header>
            <Separator className="my-4" />
            <section className="container flex flex-col gap-4 lg:max-w-[50%]">
                <h3 className="text-center text-sm font-medium">Status: Event Status</h3>
                <ScheduleCard />    
                <DescriptionCard />
            </section>
        </main>
    )
}