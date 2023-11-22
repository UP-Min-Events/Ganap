'use client'

// Utilities
import { usePathname } from "next/navigation"

// Components
import Sidebar from "./Sidebar"
import BackButton from "@/components/(buttons)/BackButton"
import SignoutButton from "../(buttons)/SignoutButton"
import AccountButton from "../(buttons)/AccountButton"

// shadCN Components
import { Separator } from "@/components/ui/separator"
import AdminHeader from "./AdminHeader"

const headerNames: { [key: string]: string } = {
    '/': "GanUP",
    '/account': "Account",
    '/calendar': "Calendar",
    '/admin/calendar': "Calendar",
    '/admin/forms': "Downloadable Forms",
    '/onboarding': "Let's get to know you.",
    '/qr': "Account QR Code",
    '/request': "Request an Event",
    '/admin/requests': "Requests",
    '/scan': "Scan QR Code",
}

export default function PageHeader() {

    const pathname = usePathname()
    const user: string = 'admin'

    return (
        <>
            <header className="px-6 w-full flex items-center justify-center relative bg-red-500 text-white py-4 overflow-hidden">
                {user !== 'admin' ?
                    <nav className="flex flex-row relative justify-center items-center min-w-full md:min-w-[60%] lg:min-w-[50%] xl:min-w-[40%]">
                        {pathname == '/' ? "" : pathname == '/onboarding' ? "" : <BackButton />}
                        <h1 className="text-[1.5rem] lg:text-[1.75rem] font-semibold text-center">
                            {headerNames[pathname]}
                        </h1>
                        {pathname === '/account' ? <SignoutButton /> : pathname !== '/onboarding' ? <AccountButton /> : ""}
                    </nav>
                    :
                    <nav className="flex flex-row relative justify-center min-w-full md:min-w-[60%] lg:min-w-[50%] xl:min-w-[40%]">
                        <Sidebar />
                        <h1 className="text-[1.5rem] lg:text-[1.75rem] font-semibold text-center">
                            {headerNames[pathname]}
                        </h1>
                        {/* <nav>
                            {pathname === '/account' ? <SignoutButton /> : pathname !== '/onboarding' ? <AccountButton /> : ""}
                        </nav> */}
                    </nav>
                }
            </header>
            <Separator className="mb-4" />
        </>
    );
}
