'use client'

// Utilities
import Link from 'next/link'
import { usePathname } from "next/navigation";

// Components
import { Button } from "@/components/ui/button"

// Radix Icons
import { RocketIcon, HomeIcon, CalendarIcon, DownloadIcon } from "@radix-ui/react-icons"

export default function FloatingButtonMenu() {
  const pathname = usePathname();

  // temporary Admin Validation
  const isAdmin = pathname && pathname.includes('/admin');

  return (
    <nav className={`fixed bottom-8 flex border-none bg-white shadow-md ${pathname === '/scan' ? "border-white" : "border-red-500" } rounded-2xl overflow-hidden`}>
      <Link 
        href={`${isAdmin ? '/admin/requests' : '/'}`} 
        aria-label="Home"
      >
        <Button 
          id="home" 
          variant="ghost"
          className={`rounded-l-2xl h-12 hover:bg-red-500 hover:text-white ${pathname === (isAdmin ? '/admin/requests' : '/') ? " text-red-500" : ""}`} 
          aria-label="Home"
        >
          <HomeIcon className="h-6 w-6" />
        </Button>
      </Link>
      <Link 
        href={isAdmin ? '/admin/calendar' : '/calendar'}
        aria-label="Calendar"
      >
        <Button 
          id="calendar"  
          variant="ghost"
          className={`rounded h-12 hover:bg-red-500 hover:text-white ${pathname === (isAdmin ? '/admin/calendar' : 'calendar') ? " text-red-500" : ""}`} 
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
          className={`rounded-r-2xl h-12 hover:bg-red-500 hover:text-white ${pathname === (isAdmin ? '/admin/forms' : ('/request' || '/qr')) ? " text-red-500" : ""}`} 
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