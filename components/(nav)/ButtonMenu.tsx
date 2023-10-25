'use client'

import { HomeIcon, CalendarIcon, PersonIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { usePathname } from "next/navigation";

export default function ButtonMenu() {
  const pathname = usePathname();

    return (
    <nav className="fixed bottom-8 flex border border-var-primary-20 rounded-2xl overflow-hidden">
      <Link href="/account">
        <Button variant="ghost" className={`rounded-2xl h-12 hover:bg-var-primary-20 hover:text-white ${pathname === "/account" ? "bg-var-primary-20 text-white" : ""}`}>
          <PersonIcon className="h-6 w-6" />
        </Button>
      </Link>
      <Link href="/">
        <Button variant="ghost" className={`rounded-2xl h-12 hover:bg-var-primary-20 hover:text-white ${pathname === "/" ? "bg-var-primary-20 text-white" : ""}`}>
          <HomeIcon className="h-6 w-6" />
        </Button>
      </Link>
      <Link href="/calendar">
        <Button variant="ghost" className={`rounded-2xl h-12 hover:bg-var-primary-20 hover:text-white ${pathname === "/calendar" ? "bg-var-primary-20 text-white" : ""}`}>
          <CalendarIcon className="h-6 w-6" />
        </Button>
      </Link>
    </nav>
    )
  }