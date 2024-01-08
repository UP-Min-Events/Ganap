'use client';

// Components
import CalendarHeader from './CalendarHeader';
import EventInstance from './EventInstance';
import AddEvent from './AddEvent';

// Utilities
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import {
    add,
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    isEqual,
    isSameDay,
    isSameMonth,
    isToday,
    parse,
    parseISO,
    startOfToday,
} from 'date-fns';

interface Day {
    full: string;
    short: string;
}

interface Events {
    Items: EventDetails[];
    LastEvaluatedKey: LastEvaluatedKeyProp;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function CalendarTable({ events }: { events: Events }) {
    const pathname = usePathname() || '/';

    // temporary Admin Validation
    const isAdmin = pathname.includes('/admin');

    let today = startOfToday();
    let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
    let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

    let days = eachDayOfInterval({
        start: firstDayCurrentMonth,
        end: endOfMonth(firstDayCurrentMonth),
    });

    function previousMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
    }

    function nextMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
    }

    const weekdays: Day[] = [
        { full: 'Sunday', short: 'S' },
        { full: 'Monday', short: 'M' },
        { full: 'Tuesday', short: 'T' },
        { full: 'Wednesday', short: 'W' },
        { full: 'Thursday', short: 'T' },
        { full: 'Friday', short: 'F' },
        { full: 'Saturday', short: 'S' },
    ];

    const renderTableCell = (day: number, weekday: Day) => (
        <td
            key={day}
            className="ease group h-6 overflow-auto border transition duration-500 lg:h-40"
        >
            <div className="flex h-full w-full flex-col overflow-hidden">
                <div className="flex h-4 w-full justify-center lg:mb-1">
                    <span className="text-xs text-gray-500 lg:text-base">
                        {day}
                    </span>
                </div>
                <div className="bottom h-30 w-full flex-grow cursor-pointer py-1" />
            </div>
        </td>
    );

    const renderTableRow = (startDay: number) => (
        <tr key={startDay} className="h-[6rem] text-center">
            {Array.from({ length: 7 }, (_, index) => {
                const day = startDay + index;
                if (day <= 31) {
                    const weekday = weekdays[(day - 1) % 7];
                    return renderTableCell(day, weekday);
                } else {
                    return null; // To render an empty cell for days beyond the current month
                }
            })}
        </tr>
    );

    return (
        <section className="bg mb-24 w-full">
            <span className="wrapper w-full rounded bg-white shadow">
                <header className="flex flex-col-reverse items-center gap-4 px-4 md:flex-row md:justify-between">
                    <CalendarHeader
                        month={format(firstDayCurrentMonth, 'MMMM yyyy')}
                        nextMonth={nextMonth}
                        previousMonth={previousMonth}
                    />
                    {isAdmin && <AddEvent />}
                </header>
                <table className="w-full table-fixed bg-white">
                    <thead>
                        <tr>
                            {weekdays.map((day) => (
                                <th
                                    key={day.full}
                                    className="border-l border-r bg-red-500 py-1 text-xs text-white xl:text-sm"
                                >
                                    <span className="hidden sm:block md:block lg:block xl:block">
                                        {day.full}
                                    </span>
                                    <span className="block sm:hidden md:hidden lg:hidden xl:hidden">
                                        {day.short}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    {/* <tbody>
                        {[1, 8, 15, 22, 29].map((startDay) =>
                            renderTableRow(startDay),
                        )}
                    </tbody> */}
                </table>
                <div className="grid grid-cols-7">
                    {days.map((day, dayIdx) => (
                        <div
                            key={day.toString()}
                            className={classNames(
                                (dayIdx === 0 &&
                                    colStartClasses[getDay(day)]) ||
                                    '',
                                'ease group h-20 overflow-auto border transition duration-200 lg:h-40',
                            )}
                        >
                            <div className="flex h-full w-full flex-col overflow-hidden">
                                <div className="flex h-4 w-full justify-center lg:mb-1">
                                    <span
                                        className={classNames(
                                            isToday(day)
                                                ? 'font-bold text-red-500'
                                                : '',
                                            !isToday(day) &&
                                                isSameMonth(
                                                    day,
                                                    firstDayCurrentMonth,
                                                )
                                                ? 'text-gray-900'
                                                : '',
                                            !isToday(day) &&
                                                !isSameMonth(
                                                    day,
                                                    firstDayCurrentMonth,
                                                )
                                                ? 'text-gray-400'
                                                : '',
                                        )}
                                    >
                                        <time
                                            dateTime={format(day, 'yyyy-MM-dd')}
                                        >
                                            {format(day, 'd')}
                                        </time>
                                    </span>
                                </div>
                                {events.Items.map((event) => (
                                    <Link
                                        href={`/event/${event.event_id}`}
                                        key={event.event_id}
                                    >
                                        {isSameDay(
                                            parseISO(event.start_date ?? ''),
                                            day,
                                        ) && (
                                            <EventInstance
                                                event_name={event.event_name}
                                            />
                                        )}
                                    </Link>
                                ))}
                                <div className="bottom h-30 w-full flex-grow cursor-pointer py-1" />
                            </div>
                        </div>
                    ))}
                </div>
            </span>
        </section>
    );
}

let colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
];
