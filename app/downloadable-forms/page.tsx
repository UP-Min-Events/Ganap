import BackButton from "@/components/(nav)/BackButton"
import DownloadableFormCard from "@/components/DownloadableFormCard"
import { Separator } from "@/components/ui/separator"
import CallToActionButton from "@/components/CallToActionButton"

export default function Forms(){
    return (
        <main className="py-4">
            <header className="flex flex-col w-full text-center px-4">
                <BackButton />
                <h1 className="sm:text-2xl lg:text-5xl font-bold">Downloadable Forms</h1>
            </header>
            <Separator className="my-4" />
            <section className="container grid gap-4 grid-cols-2 place-items-center lg:max-w-[50%]">
                <DownloadableFormCard />
                <DownloadableFormCard />
                <DownloadableFormCard />
                <DownloadableFormCard />
            </section>
            <section className="fixed bottom-12 flex w-full justify-center">
                <CallToActionButton action="Upload Form" />
            </section>
        </main>
    )
}