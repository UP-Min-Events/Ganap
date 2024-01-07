// Components
import CalendarHeader from './CalendarHeader';

interface Day {
    full: string;
    short: string;
}

export default function CalendarTable() {
    const weekdays: Day[] = [
        { full: 'Sunday', short: 'Sun' },
        { full: 'Monday', short: 'Mon' },
        { full: 'Tuesday', short: 'Tue' },
        { full: 'Wednesday', short: 'Wed' },
        { full: 'Thursday', short: 'Thu' },
        { full: 'Friday', short: 'Fri' },
        { full: 'Saturday', short: 'Sat' },
    ];

    const renderTableCell = (day: number, weekday: Day) => (
        <td
            key={day}
            className="ease group h-6 overflow-auto border transition duration-500 hover:bg-gray-300 lg:h-40"
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
        <section className="mb-24 w-full">
            <span className="wrapper w-full rounded bg-white shadow">
                <CalendarHeader />
                <table className="w-full table-fixed">
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
                    <tbody>
                        {[1, 8, 15, 22, 29].map((startDay) =>
                            renderTableRow(startDay),
                        )}
                    </tbody>
                </table>
            </span>
        </section>
    );
}
