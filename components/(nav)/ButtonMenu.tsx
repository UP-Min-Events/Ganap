'use client';

// Utilities
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Components
import { Button } from '@/components/ui/button';

// Radix Icons
import {
    RocketIcon,
    HomeIcon,
    CalendarIcon,
    DownloadIcon,
} from '@radix-ui/react-icons';

export default function ButtonMenu() {
    const pathname = usePathname();

    // temporary Admin Validation
    const isAdmin = pathname && pathname.includes('/admin');

    return (
        <nav
            className={`fixed bottom-0 flex w-full justify-around border-none lg:w-[50%] lg:justify-center lg:gap-12 bg-none${
                pathname === '/scan' ? 'border-white' : 'border-red-500'
            } overflow-hidden md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%]`}
        >
            <Link
                href={`${isAdmin ? '/admin/requests' : '/'}`}
                aria-label="Home"
                className="group flex flex-col items-center justify-center pb-1 pt-2"
            >
                <Button
                    id="home"
                    variant="ghost"
                    className={`h-6 rounded-l-2xl group-hover:bg-inherit group-hover:text-red-600 ${
                        pathname === (isAdmin ? '/admin/requests' : '/')
                            ? ' text-red-500'
                            : ''
                    }`}
                    aria-label="Home"
                >
                    <HomeIcon className="h-6 w-6" />
                </Button>
                <h3
                    className={`text-xs ${
                        pathname === (isAdmin ? '/admin/requests' : '/')
                            ? ' text-red-500'
                            : ''
                    } group-hover:text-red-600`}
                >
                    Home
                </h3>
            </Link>
            <Link
                href={isAdmin ? '/admin/calendar' : '/calendar'}
                aria-label="Calendar"
                className="group flex flex-col items-center justify-center pb-1 pt-2"
            >
                <Button
                    id="calendar"
                    variant="ghost"
                    className={`h-6 rounded group-hover:bg-inherit group-hover:text-red-600 ${
                        pathname === (isAdmin ? '/admin/calendar' : 'calendar')
                            ? ' text-red-500'
                            : ''
                    }`}
                    aria-label="Calendar"
                >
                    <CalendarIcon className="h-6 w-6" />
                </Button>
                <h3
                    className={`text-xs ${
                        pathname === (isAdmin ? '/admin/calendar' : 'calendar')
                            ? ' text-red-500'
                            : ''
                    } group-hover:text-red-600`}
                >
                    Calendar
                </h3>
            </Link>
            <Link
                href={`${isAdmin ? '/admin/forms' : '/request'}`}
                aria-label={isAdmin ? 'Forms' : 'Event Action'}
                className="group flex flex-col items-center justify-center pb-1 pt-2"
            >
                <Button
                    id="event-button"
                    variant="ghost"
                    className={`h-6 rounded-r-2xl group-hover:bg-inherit group-hover:text-red-600 ${
                        pathname ===
                        (isAdmin ? '/admin/forms' : '/request' || '/qr')
                            ? ' text-red-500'
                            : ''
                    }`}
                    aria-label={isAdmin ? 'Forms' : 'Event Action'}
                >
                    {isAdmin ? (
                        <DownloadIcon className="h-6 w-6" />
                    ) : (
                        <RocketIcon className="h-6 w-6" />
                    )}
                </Button>
                <h3
                    className={`text-xs ${
                        pathname ===
                        (isAdmin ? '/admin/forms' : '/request' || '/qr')
                            ? ' text-red-500'
                            : ''
                    } group-hover:text-red-600`}
                >
                    Forms
                </h3>
            </Link>
        </nav>
    );
}
