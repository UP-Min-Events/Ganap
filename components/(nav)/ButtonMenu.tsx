'use client'

import { RocketIcon, HomeIcon, CalendarIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { usePathname } from "next/navigation";

export default function ButtonMenu() {
  const pathname = usePathname();

    return (
    <nav className={`fixed bottom-8 flex border ${pathname === '/scan' ? "border-white" : "border-red-500" } rounded-2xl overflow-hidden`}>
      <Link href="/request" aria-label="Event Action">
        <Button id="event-button" variant="ghost" className={`rounded-2xl h-12 hover:bg-red-500 hover:text-white ${pathname === ('/qr' || '/request') ? " text-red-500" : ""}`} aria-label="Event Action">
          <RocketIcon className="h-6 w-6" />
        </Button>
      </Link>
      <Link href="/" aria-label="Home">
        <Button id="home" variant="ghost" className={`rounded-2xl h-12 hover:bg-red-500 hover:text-white ${pathname === '/' ? " text-red-500" : ""}`} aria-label="Home">
          <HomeIcon className="h-6 w-6" />
        </Button>
      </Link>
      <Link href="/calendar" aria-label="Calendar">
        <Button id="calendar" variant="ghost" className={`rounded-2xl h-12 hover:bg-red-500 hover:text-white ${pathname === '/calendar' ? " text-red-500" : ""}`} aria-label="Calendar">
          <CalendarIcon className="h-6 w-6" />
        </Button>
      </Link>
    </nav>
    )
  }