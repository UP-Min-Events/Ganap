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
            className={`fixed bottom-0 w-full flex justify-around border-none bg-light-yellow-100 shadow-md ${
                pathname === '/scan' ? 'border-white' : 'border-red-500'
            } overflow-hidden md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%]`}
        >
            <Link
                href={`${isAdmin ? '/admin/requests' : '/'}`}
                aria-label="Home"
                className="flex flex-col items-center justify-center pb-1 pt-2 group"
            >
                <Button
                    id="home"
                    variant="ghost"
                    className={`rounded-l-2xl h-6 group-hover:text-red-600 group-hover:bg-inherit ${
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
                className="flex flex-col items-center justify-center pb-1 pt-2 group"
            >
                <Button
                    id="calendar"
                    variant="ghost"
                    className={`rounded h-6 group-hover:text-red-600 group-hover:bg-inherit ${
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
                className="flex flex-col items-center justify-center pb-1 pt-2 group"
            >
                <Button
                    id="event-button"
                    variant="ghost"
                    className={`rounded-r-2xl h-6 group-hover:text-red-600 group-hover:bg-inherit ${
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
