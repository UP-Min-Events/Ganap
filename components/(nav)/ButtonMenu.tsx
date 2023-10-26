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
        <Button variant="ghost" className={`rounded-2xl h-12 hover:bg-var-primary-20 hover:text-white ${pathname === "/account" ? " text-var-primary-20" : ""}`}>
          <PersonIcon className="h-6 w-6" />
        </Button>
      </Link>
      <Link href="/">
        <Button variant="ghost" className={`rounded-2xl h-12 hover:bg-var-primary-20 hover:text-white ${pathname === "/" ? " text-var-primary-20" : ""}`}>
          <HomeIcon className="h-6 w-6" />
        </Button>
      </Link>
      <Link href="/calendar">
        <Button variant="ghost" className={`rounded-2xl h-12 hover:bg-var-primary-20 hover:text-white ${pathname === "/calendar" ? " text-var-primary-20" : ""}`}>
          <CalendarIcon className="h-6 w-6" />
        </Button>
      </Link>
    </nav>
    )
  }