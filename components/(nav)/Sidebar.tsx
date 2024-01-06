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
        { href: '/admin/logout', text: 'Log out', icon: <LogOut /> },
    ];

    return (
        <Sheet>
            <DropdownMenu>
                <SheetTrigger className="absolute left-0 pt-2">
                    <HamburgerMenuIcon className="h-6 w-6" />
                </SheetTrigger>
                <SheetContent className="p-0 bg-light-yellow-100">
                    <SheetHeader className="px-6 pt-6 pb-4">
                        <SheetTitle className="font-bold">Ganap ADMIN</SheetTitle>
                    </SheetHeader>
                    <Separator />
                    <nav className="flex flex-col text-left font-medium pt-2">
                        {links.map((link, index) => (
                            <nav key={index}>
                                <Link
                                    href={link.href}
                                    className={`flex items-center gap-2 mx-4 p-2 [&>svg]:w-[1.25rem] [&>svg]:h-[1.25rem] hover:bg-slate-100 hover:rounded py-[0.375rem] ${
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
                    </nav>
                </SheetContent>
            </DropdownMenu>
        </Sheet>
    );
}
