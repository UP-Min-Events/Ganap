import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Login() {
    return (
        <main className="min-h-screen flex flex-col items-center">
            <header className="fixed mt-[10%] lg:mt-[5%]">
                <h1 className="text-[4.5rem] lg:text-[5rem] text-red-600 font-extrabold">Ganap</h1>
            </header>
            <Link href="/onboarding" className="my-auto">
                <Button className="w-40 lg:w-52 h-[2.5rem] rounded-xl bg-red-500 hover:bg-red-600 font-medium">Log in</Button>
            </Link>
        </main>
    )
}