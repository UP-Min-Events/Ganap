"use client";
// Utilities
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getUser } from "@/utils/getUser";
import { CognitoUser } from "amazon-cognito-identity-js";

// Components
import BackButton from "@/components/(buttons)/BackButton";
import SignoutButton from "../(buttons)/SignoutButton";
import AccountButton from "../(buttons)/AccountButton";

// shadCN Components
import { Separator } from "@/components/ui/separator";
import AdminHeader from "./AdminHeader";

export default function PageHeader() {

  const [userdata, setUser] = useState<CognitoUser | any>(null);
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

  useEffect(() => {
    const get_user = async () => {
      const user = await getUser();
      setUser(user);
    }
    
    get_user();
  }, [])

  useEffect(() => {
    console.log(userdata)
    console.log(userdata?.getUsername())
  }, [userdata])

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
