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

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"


export default function Sidebar() {
    return (
        <nav className="left-4 absolute">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    Ganap ADMIN
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
            </DropdownMenu>
        </nav>
        // <nav className="left-4 absolute">
        //     <Sheet>
        //         <SheetTrigger>Open</SheetTrigger>
        //         <SheetContent className="max-w-[14rem]">
        //             <SheetHeader>
        //                 <SheetTitle>Ganap ADMIN</SheetTitle>
        //                 <SheetDescription>
        //                     Hello
        //                 </SheetDescription>
        //             </SheetHeader>
        //         </SheetContent>
        //     </Sheet>
        // </nav>
        // <NavigationMenu>
        //     <NavigationMenuList>
        //         <NavigationMenuItem>
        //         <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
        //         <NavigationMenuContent>
        //             <NavigationMenuLink>Link</NavigationMenuLink>
        //         </NavigationMenuContent>
        //         </NavigationMenuItem>
        //     </NavigationMenuList>
        // </NavigationMenu>
    )
}