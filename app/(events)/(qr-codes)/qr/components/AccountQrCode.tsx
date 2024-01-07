// Radix Icon
import { GroupIcon } from '@radix-ui/react-icons';

export default function AccountQrCode() {
    return (
        <section className="container flex flex-col items-center pt-16 md:max-w-[50%] lg:max-w-[30%]">
            <figure className="pb-4 text-red-500">
                <GroupIcon className="h-56 w-56" />
            </figure>
            <section>
                <h1 className="text-center text-2xl font-bold">
                    This is your personal QR code!
                </h1>
                <p className="text-justify">
                    Make sure to show this QR code to the organizers of the
                    event you&apos;re attending to. Have this QR code scanned by
                    them and your attendance for the event will be recorded in
                    the app!
                </p>
                <p className="pt-4 text-justify text-red-500">
                    Disclaimer: This QR code cannot be used by other people to
                    log their attendance.
                </p>
            </section>
        </section>
    );
}
