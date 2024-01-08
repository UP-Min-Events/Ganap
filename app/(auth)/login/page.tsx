// Components
import GoogleSignIn from './GoogleSignIn';

// Utilities
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
    return (
        <main className="container flex min-h-[100svh] flex-col items-center justify-between py-[20%] lg:py-[10%]">
            <header className="align-center flex flex-col justify-center text-center">
                <figure className="flex justify-center">
                    <Image
                        src="/icon-512x512.png"
                        width={200}
                        height={200}
                        alt="Ganap Logo"
                    />
                </figure>
                <section>
                    <h1 className="leading-12 text-[3rem] font-extrabold text-red-500 lg:text-[5rem]">
                        Ganap
                    </h1>
                    <h3 className="text-lg leading-6 lg:text-2xl">
                        Your one-stop guide for all events in UP Mindanao.
                    </h3>
                </section>
            </header>
            <section className="flex flex-col justify-center gap-2 lg:max-w-[30%]">
                <GoogleSignIn />
                <h3 className="text-[0.875rem] text-neutral-300 lg:text-base">
                    <span className="italic">Anong ganap? </span>
                    Catch up now by accessing the app through your
                    <Link
                        href="https://itdc.up.edu.ph/uis/the-up-mail"
                        target="_blank"
                        className="font-semibold text-red-500 hover:underline"
                    >
                        {' '}
                        UP mail
                    </Link>
                    .
                </h3>
            </section>
        </main>
    );
}
