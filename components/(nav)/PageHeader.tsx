"use client";
// Utilities
import { usePathname } from "next/navigation";

// Components
import BackButton from "@/components/(buttons)/BackButton";
import SignoutButton from "../(buttons)/SignoutButton";
import AccountButton from "../(buttons)/AccountButton";
import Sidebar from "@/components/(nav)/Sidebar"

// shadCN Components
import { Separator } from "@/components/ui/separator";
import AdminHeader from "./AdminHeader";


export default function PageHeader() {
  const pathname = usePathname();
  const user: string = '';

  const headerNames: { [key: string]: string } = {
    '/': "Ganap",
    '/account': "Account",
    '/calendar': "Calendar",
    '/admin/forms': "Downloadable Forms",
    '/onboarding': "Let's get to know you.",
    '/qr': "Account QR Code",
    '/request': "Request an Event",
    '/admin/requests': "Event Requests",
    '/scan': "Scan QR Code",
  };

  return (
    <>
      <header className="px-6 w-full flex justify-center relative bg-red-500 text-white py-4 overflow-hidden">
        {user !== 'admin' ?
          <>
            <nav>
              {pathname !== '/' ? <BackButton /> : ""}
            </nav>
            <h1 className="text-[1.75rem] font-semibold text-center">
              {headerNames[pathname]}
            </h1>
            <nav>
              {pathname === '/account' ? <SignoutButton /> : pathname !== '/onboarding' ? <AccountButton /> : ""}
            </nav>
          </>
        :
          <>
            <AdminHeader /> 
          </>
        }
      </header>
      <Separator className="mb-4" />  
    </>
  );
}
