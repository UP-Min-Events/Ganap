// Radix Icons
import { GroupIcon } from "@radix-ui/react-icons";

// Components
import PageHeader from "@/components/(nav)/PageHeader";
import ButtonMenu from "@/components/(nav)/ButtonMenu";

export default function QR() {
    return (
        <main className="min-h-screen flex flex-col items-center">
            <PageHeader />
            <section className="container flex flex-col items-center pt-16 md:max-w-[50%] lg:max-w-[30%]">
                <figure className="text-red-500 pb-4">
                    <GroupIcon className="w-56 h-56" />
                </figure>
                <section>
                    <h1 className="text-2xl font-bold text-center">This is your personal QR code!</h1>
                    <p className="text-justify">Make sure to show this QR code to the organizers of the event you&apos;re attending to. Have this QR code scanned by them and your attendance for the event will be recorded in the app!</p>
                    <p className="text-red-500 pt-4 text-justify">Disclaimer: This QR code cannot be used by other people to log their attendance.</p>
                </section>
            </section>
            <ButtonMenu />
        </main>
    )
}