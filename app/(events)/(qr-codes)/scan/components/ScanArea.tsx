// Radix Icon
import { CameraIcon } from '@radix-ui/react-icons';

export default function ScanArea() {
    return (
        <section className="flex flex-col items-center gap-4 md:max-w-[50%] lg:max-w-[30%]">
            <header className="text-center text-white">
                <h2 className="text-xl">Logging Attendance for</h2>
                <h1 className="text-3xl font-bold">Event Title</h1>
            </header>
            <figure className="w-full  bg-white pb-4 text-red-500">
                <CameraIcon className="mx-auto h-56 w-56 opacity-10" />
            </figure>
            <section className="px-6">
                <h3 className="text-center text-xl font-medium text-white">
                    Point the QR code in the center.
                </h3>
                <p className="pt-4 text-justify text-white">
                    Scanning a QR code results in the storage of an
                    attendee&apos;s information in the event&apos;s database.
                    Remember to ask for their QR code!
                </p>
                <p className="text-var-primary-10 pt-4 text-justify">
                    Disclaimer: Only scan a QR code once.
                </p>
            </section>
        </section>
    );
}
