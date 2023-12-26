'use client'

// Utilities
import { usePathname } from "next/navigation"
import Image from "next/image"

// Components
import Sidebar from "./Sidebar"
import BackButton from "@/components/(buttons)/BackButton"
import SignoutButton from "../(buttons)/SignoutButton"
import AccountButton from "../(buttons)/AccountButton"

// shadCN Components
import { Separator } from "@/components/ui/separator"

const headerNames: { [key: string]: string } = {
    '/': "Ganap",
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
	const pathname = usePathname() || '/';
	
	// temporary Admin Validation
	const isAdmin = pathname.includes('/admin');

	return (
		<>
			<header className="px-6 w-full flex items-center justify-center relative bg-light-yellow-100 text-red-500 min-h-[4rem] overflow-hidden">
				<nav className="flex flex-row relative justify-start items-center min-w-full md:min-w-[60%] lg:min-w-[40%] xl:min-w-[30%]">
					{isAdmin 
						? <Sidebar /> 
						: pathname == '/' 
							? <div className="flex flex-row gap-2 items-center">
									<Image src="/icon-192x192.png" width={32} height={32} alt="Ganap Logo" />
									<h1 className="text-[1.5rem] lg:text-[1.75rem] font-bold">Ganap</h1>
								</div>
							: pathname == '/onboarding' 
								? <div className="flex grow justify-center">
										<h1 className="text-[1.5rem] lg:text-[1.75rem] font-bold">Let's get to know you.</h1>
									</div>
								: <div className="flex grow justify-center">
										<BackButton />
										<h1 className="text-[1.5rem] lg:text-[1.75rem] font-bold text-center">{headerNames[pathname]}</h1>
									</div>
					}
					{/* <h1 className="text-[1.5rem] lg:text-[1.75rem] font-semibold text-center">
						{headerNames[pathname]}
					</h1> */}
					{isAdmin 
						? "" 
						: pathname === '/account' 
							? <SignoutButton /> 
							: pathname == '/onboarding'
								? ""
								: pathname == '/request'
									? ""
									: <AccountButton />
					}
				</nav>
			</header>
			{/* <Separator className="mb-4 bg-black" /> */}
		</>
	);
}
