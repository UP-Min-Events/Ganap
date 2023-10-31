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
    <nav>
      <NavigationMenu>
        <NavigationMenuList className="space-x-2 text-sm">
          <NavigationMenuItem>
            <Link href="/">
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-var-primary-30 hover:bg-inherit hover:text-var-primary-10`}>
                Pending Requests
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/calendar">
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-var-primary-30 hover:bg-inherit hover:text-var-primary-10`}>
                Calendar
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/">
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-var-primary-30 hover:bg-inherit hover:text-var-primary-10`}>
                Event List
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/downloadable-forms">
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-var-primary-30 hover:bg-inherit hover:text-var-primary-10`}>
                Downloadable Forms
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}