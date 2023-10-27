"use client";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import BackButton from "@/components/(buttons)/BackButton";

export default function PageHeader() {
  const pathname = usePathname();

  const headerNames: { [key: string]: string } = {
    '/': "Ganap",
    '/account': "Account",
    '/calendar': "Calendar",
    '/downloadable-forms': "Downloadable Forms",
    '/onboarding': "Let's get to know you.",
    '/qr': "Account QR Code",
    '/scan': "Scan QR Code"
  };

  return (
    <>
      <header className="px-6 w-full flex justify-center relative bg-var-primary-30 text-white py-4">
          {pathname === '/' ? "" : <BackButton /> }
          <h1 className="text-[1.5rem] md:text-[1.75rem]lg:text-4xl font-semibold text-center">
            {headerNames[pathname]}
          </h1>
      </header>
      <Separator className="mb-4" />  
    </>
  );
}
