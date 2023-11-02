import { Button } from "@/components/ui/button";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";

export default function Calendar() {
  return (
    <section className="container mx-auto mt-4 mb-24">
        <span className="wrapper bg-white rounded shadow w-full">
            <header className="header flex justify-between border-b p-2">
                <span className="text-lg font-bold">2023 November</span>
                <nav className="buttons">
                    <Button variant="outline" size="icon" className="p-1">
                        <ChevronLeftIcon className="h-4 w-4" />
                    </Button>   
                    <Button variant="outline" size="icon" className="p-1">
                        <ChevronRightIcon className="h-4 w-4" />
                    </Button>   
                </nav>
            </header>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="p-2 border-l border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                            <span className="xl:block lg:block md:block sm:block hidden">Sunday</span>
                            <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Sun</span>
                        </th>
                        <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                            <span className="xl:block lg:block md:block sm:block hidden">Monday</span>
                            <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Mon</span>
                        </th>
                        <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                            <span className="xl:block lg:block md:block sm:block hidden">Tuesday</span>
                            <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Tue</span>
                        </th>
                        <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                            <span className="xl:block lg:block md:block sm:block hidden">Wednesday</span>
                            <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Wed</span>
                        </th>
                        <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                            <span className="xl:block lg:block md:block sm:block hidden">Thursday</span>
                            <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Thu</span>
                        </th>
                        <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                            <span className="xl:block lg:block md:block sm:block hidden">Friday</span>
                            <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Fri</span>
                        </th>
                        <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                            <span className="xl:block lg:block md:block sm:block hidden">Sunday</span>
                            <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Sat</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                  <tr className="text-center h-20">
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
                          <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                              <div className="top h-5 w-full">
                              <span className="text-gray-500">1</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                              <div className="event bg-red-100 text-black rounded p-1 text-sm mb-1">
                                  <span className="event-name">Meeting&nbsp;</span>
                                  <span className="time">12:00~14:00</span>
                              </div>
                              <div className="event bg-green-100 text-black rounded p-1 text-sm mb-1">
                                  <span className="event-name">Meeting&nbsp;</span>
                                  <span className="time">18:00~20:00</span>
                              </div>
                          </div>
                      </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                              <span className="text-gray-500">2</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                              <span className="text-gray-500">3</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                              <span className="text-gray-500">4</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                              <span className="text-gray-500">6</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                              <span className="text-gray-500">7</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                        </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                            <span className="text-gray-500 text-sm">8</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                  </tr>
                  <tr className="text-center h-20">
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
                          <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                              <div className="top h-5 w-full">
                              <span className="text-gray-500">9</span>
                              <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                          </div>
                      </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                              <span className="text-gray-500">10</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                              <span className="text-gray-500">11</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                              <span className="text-gray-500">12</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                              <span className="text-gray-500">13</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                              <span className="text-gray-500">14</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                        </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                            <span className="text-gray-500 text-sm">15</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                  </tr>
                  <tr className="text-center h-20">
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
                          <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                              <div className="top h-5 w-full">
                              <span className="text-gray-500">16</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                      </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                              <span className="text-gray-500">17</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                              <span className="text-gray-500">18</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                              <span className="text-gray-500">19</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                              <span className="text-gray-500">20</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                              <span className="text-gray-500">21</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                        </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                            <span className="text-gray-500 text-sm">22</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                  </tr>
                  <tr className="text-center h-20">
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
                          <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                              <div className="top h-5 w-full">
                              <span className="text-gray-500">23</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                      </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                              <span className="text-gray-500">24</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                              <span className="text-gray-500">25</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                              <span className="text-gray-500">26</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                              <span className="text-gray-500">27</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                              <span className="text-gray-500">28</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                        </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                            <span className="text-gray-500 text-sm">28</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                  </tr>
                  <tr className="text-center h-20">
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
                          <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                              <div className="top h-5 w-full">
                              <span className="text-gray-500">29</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                      </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                              <span className="text-gray-500">30</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-6 lg:h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-6 lg:h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                            <div className="top h-5 w-full">
                              <span className="text-gray-500">31</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                  </tr>
                </tbody>
            </table>
        </span>
    </section>
  )
}