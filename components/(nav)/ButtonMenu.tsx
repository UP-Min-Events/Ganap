'use client'

// Utilities
import Link from 'next/link'
import { usePathname } from "next/navigation";

// Components
import { Button } from "@/components/ui/button"

// Radix Icons
import { RocketIcon, HomeIcon, CalendarIcon, DownloadIcon } from "@radix-ui/react-icons"

export default function ButtonMenu() {
  const pathname = usePathname();

  // temporary Admin Validation
  const isAdmin = pathname.includes('/admin');

  return (
    <nav className={`fixed bottom-8 flex border ${pathname === '/scan' ? "border-white" : "border-red-500" } rounded-2xl overflow-hidden`}>
      <Link 
        href={`${isAdmin ? '/admin/requests' : '/'}`} 
        aria-label="Home"
      >
        <Button 
          id="home" 
          variant="ghost"
          className={`rounded-2xl h-12 hover:bg-red-500 hover:text-white ${pathname === (isAdmin ? '/admin/requests' : '/') ? " text-red-500" : ""}`} 
          aria-label="Home"
        >
          <HomeIcon className="h-6 w-6" />
        </Button>
      </Link>
      <Link 
        href="/calendar" 
        aria-label="Calendar"
      >
        <Button 
          id="calendar"  
          variant="ghost"
          className={`rounded-2xl h-12 hover:bg-red-500 hover:text-white ${pathname === '/calendar' ? " text-red-500" : ""}`} 
          aria-label="Calendar"
        >
          <CalendarIcon className="h-6 w-6"/>
        </Button>
      </Link>
      <Link 
        href={`${isAdmin ? '/admin/forms' : '/request'}`} 
        aria-label={isAdmin ? "Forms" : "Event Action"}
      >
        <Button 
          id="event-button" 
          variant="ghost" 
          className={`rounded-2xl h-12 hover:bg-red-500 hover:text-white ${pathname === (isAdmin ? '/admin/forms' : ('/request' || '/qr')) ? " text-red-500" : ""}`} 
          aria-label={isAdmin ? "Forms" : "Event Action"}
        >
          {isAdmin ? 
            <DownloadIcon className="h-6 w-6" />
          :
            <RocketIcon className="h-6 w-6"/> 
          }
        </Button>
      </Link>
    </nav>
  )
  }