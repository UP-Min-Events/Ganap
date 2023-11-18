// Components
import CalendarHeader from "./CalendarHeader";

export default function Calendar() {
  const weekdays = [
    { full: "Sunday", short: "Sun" },
    { full: "Monday", short: "Mon" },
    { full: "Tuesday", short: "Tue" },
    { full: "Wednesday", short: "Wed" },
    { full: "Thursday", short: "Thu" },
    { full: "Friday", short: "Fri" },
    { full: "Saturday", short: "Sat" }
  ];

  const renderTableCell = (day: { full: string, short: string }) => (
    <td key={day.full} className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
      <div className="flex flex-col h-full w-full overflow-hidden">
        <div className="w-full flex justify-center h-4 lg:mb-1">
          <span className="text-gray-500 text-xs lg:text-base">{day.full}</span>
        </div>
        <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
      </div>
    </td>
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
            {[1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((day) => (
              <tr key={day} className="text-center h-[6rem]">
                {weekdays.map((weekday) => renderTableCell(weekday))}
              </tr>
            ))}
          </tbody>
        </table>
      </span>
    </section>
  );
}