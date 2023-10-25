import BackButton from "@/components/(nav)/BackButton";
import ButtonMenu from "@/components/(nav)/ButtonMenu";
import { Separator } from "@/components/ui/separator"

export default function Calendar(){
    return (
        <main className="min-h-screen flex flex-col items-center">
            <header className="flex flex-col w-full pt-4">
                <BackButton />
                <h1 className="text-center text-3xl lg:text-5xl font-bold">Calendar</h1>
            </header>
            <Separator className="my-4" />
            <ButtonMenu />
        </main>
    )
}