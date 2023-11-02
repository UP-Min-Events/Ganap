// Radix Icons
import { CameraIcon } from "@radix-ui/react-icons";

// Components
import PageHeader from "@/components/(nav)/PageHeader";
import ButtonMenu from "@/components/(nav)/ButtonMenu";

export default function Scan() {
    return (
        <main className="min-h-screen flex flex-col items-center bg-red-500 bg-opacity-80">
            <PageHeader />
            <section className="flex flex-col gap-4 items-center md:max-w-[50%] lg:max-w-[30%]">
                <header className="text-center text-white">
                    <h2 className="text-xl">Logging Attendance for</h2>
                    <h1 className="font-bold text-3xl">Event Title</h1>
                </header>
                <figure className="w-full  text-red-500 pb-4 bg-white">
                    <CameraIcon className="w-56 h-56 mx-auto opacity-10" />
                </figure>
                <section className="px-6">
                    <h3 className="text-xl font-medium text-center text-white">Point the QR code in the center.</h3>
                    <p className="text-justify pt-4 text-white">Scanning a QR code results in the storage of an attendee&apos;s information in the event&apos;s database. Remember to ask for their QR code!</p>
                    <p className="text-var-primary-10 pt-4 text-justify">Disclaimer: Only scan a QR code once.</p>
                </section>
            </section>
            <ButtonMenu />
        </main>
    )
}