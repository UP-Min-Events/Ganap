// shadCN Components
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import {
Sheet,
SheetContent,
SheetDescription,
SheetHeader,
SheetTitle,
SheetTrigger,
} from "@/components/ui/sheet"

// Radix Icons
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export default function Sidebar() {
    return (
        <>
            {/* <DropdownMenu>
                <DropdownMenuTrigger className="absolute left-0 pt-0 lg:pt-2">
                    <HamburgerMenuIcon className="h-6 w-6" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="rounded-none min-w-[14rem] min-h-screen">
                    <DropdownMenuLabel>Ganap ADMIN</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Pending Requests</DropdownMenuItem>
                    <DropdownMenuItem>Calendar</DropdownMenuItem>
                    <DropdownMenuItem>Event List</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Downloadable Forms</DropdownMenuItem>
                    <DropdownMenuItem>Notifications</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu> */}
            <Sheet>
                <DropdownMenu>
                    <SheetTrigger className="absolute left-0 pt-2">
                            <HamburgerMenuIcon className="h-6 w-6" />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Ganap ADMIN</SheetTitle>
                        </SheetHeader>
                        <Separator />
                        <nav className="flex flex-col text-left font-medium">
                            <div className="flex flex-col gap-2 pt-4">
                                <Link href="/admin/requests">Requests</Link>
                                <Link href="/calendar">Calendar</Link>
                                <Link href="/">Events List</Link>
                                <Separator />
                            </div>
                            <div className="flex flex-col gap-2 pt-4">
                                <Link href="/admin/forms">Downloadable Forms</Link>
                                <Link href="/admin/requests">Notifications</Link>
                                <Separator />
                            </div>
                            <Link href="/admin/requests" className="pt-4">Log out</Link>
                        </nav>
                    </SheetContent>
                </DropdownMenu>
            </Sheet>
        </>
    )
}