// Utilities
import Link from "next/link"

// shadCN Components
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
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

export default function AdminHeader() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="text-sm">

          <NavigationMenuItem>
            <Link href="/">
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-red-500 hover:bg-inherit hover:text-red-100`}>
                Pending Requests
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/calendar">
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-red-500 hover:bg-inherit hover:text-red-100`}>
                Calendar
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/">
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-red-500 hover:bg-inherit hover:text-red-100`}>
                Event List
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/downloadable-forms">
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-red-500 hover:bg-inherit hover:text-red-100`}>
                Downloadable Forms
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}