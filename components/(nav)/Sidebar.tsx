'use client';

// shadCN Components
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

// Icons
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Album, CalendarDays, List, Folders, Mail, LogOut } from 'lucide-react';

// Utilities
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();

    const links = [
        { href: '/admin/requests', text: 'Requests', icon: <Album /> },
        { href: '/admin/calendar', text: 'Calendar', icon: <CalendarDays /> },
        { href: '/', text: 'Events List', icon: <List /> },
        { href: '/admin/forms', text: 'Downloadable Forms', icon: <Folders /> },
        { href: '/admin/notifications', text: 'Notifications', icon: <Mail /> },
    ];

    return (
        <Sheet>
            <DropdownMenu>
                <SheetTrigger className="absolute left-0">
                    <HamburgerMenuIcon className="h-6 w-6" />
                </SheetTrigger>
                <SheetContent className="bg-light-yellow-100 p-0">
                    <SheetHeader className="px-6 pb-4 pt-6">
                        <SheetTitle className="font-bold">
                            Ganap ADMIN
                        </SheetTitle>
                    </SheetHeader>
                    <Separator />
                    <nav className="flex flex-col pt-2 text-left font-medium">
                        {links.map((link, index) => (
                            <nav key={index}>
                                <Link
                                    href={link.href}
                                    className={`mx-4 flex items-center gap-2 p-2 py-[0.375rem] hover:rounded hover:bg-slate-100 [&>svg]:h-[1.25rem] [&>svg]:w-[1.25rem] ${
                                        pathname === link.href
                                            ? 'text-red-500'
                                            : ''
                                    }`}
                                    // Disable if link is notifications
                                >
                                    {link.icon} {link.text}
                                </Link>
                                {(link.text === 'Events List' ||
                                    link.text === 'Notifications') && (
                                    <Separator className="my-1" />
                                )}
                            </nav>
                        ))}
                        <form
                            className="mx-4 flex items-center gap-2 p-2 py-[0.375rem] hover:rounded hover:bg-slate-100 [&>svg]:h-[1.25rem] [&>svg]:w-[1.25rem]"
                            action="/api/auth/signout"
                            method="GET"
                        >
                            <LogOut />
                            <button>Log out</button>
                        </form>
                    </nav>
                </SheetContent>
            </DropdownMenu>
        </Sheet>
    );
}
