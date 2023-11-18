// Components
import CalendarHeader from "./CalendarHeader";

interface Day {
  full: string;
  short: string;
}

export default function Calendar() {
  const weekdays: Day[] = [
    { full: "Sunday", short: "Sun" },
    { full: "Monday", short: "Mon" },
    { full: "Tuesday", short: "Tue" },
    { full: "Wednesday", short: "Wed" },
    { full: "Thursday", short: "Thu" },
    { full: "Friday", short: "Fri" },
    { full: "Saturday", short: "Sat" },
  ];

  const renderTableCell = (day: number, weekday: Day) => (
    <td key={day} className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
      <div className="flex flex-col h-full w-full overflow-hidden">
        <div className="w-full flex justify-center h-4 lg:mb-1">
          <span className="text-gray-500 text-xs lg:text-base">{day}</span>
        </div>
        <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
      </div>
    </td>
  );

  const renderTableRow = (startDay: number) => (
    <tr key={startDay} className="text-center h-[6rem]">
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
    <section className="w-full mb-24">
      <span className="wrapper bg-white rounded shadow w-full">
        <CalendarHeader />
        <table className="w-full table-fixed">
          <thead>
            <tr>
              {weekdays.map((day) => (
                <th key={day.full} className="bg-red-500 text-white py-1 border-l border-r xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">{day.full}</span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">{day.short}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[1, 8, 15, 22, 29].map((startDay) => renderTableRow(startDay))}
          </tbody>
        </table>
      </span>
    </section>
  );
}
