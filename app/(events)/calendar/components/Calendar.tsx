import { Button } from "@/components/ui/button";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Calendar() {
  return (
    <section className="w-full mb-24">
        <span className="wrapper bg-white rounded shadow w-full">
            <header className="header flex lg:max-w-[40%] mx-auto justify-between items-center border-b p-4">
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
            <table className="w-full table-fixed">
                <thead>
                    <tr>
                        <th className="bg-red-500 text-white py-1 border-l border-r xl:text-sm text-xs">
                            <span className="xl:block lg:block md:block sm:block hidden">Sunday</span>
                            <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Sun</span>
                        </th>
                        <th className=" lg:p-2 border-r xl:text-sm text-xs">
                            <span className="xl:block lg:block md:block sm:block hidden">Monday</span>
                            <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Mon</span>
                        </th>
                        <th className=" lg:p-2 border-r xl:text-sm text-xs">
                            <span className="xl:block lg:block md:block sm:block hidden">Tuesday</span>
                            <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Tue</span>
                        </th>
                        <th className=" lg:p-2 border-r xl:text-sm text-xs">
                            <span className="xl:block lg:block md:block sm:block hidden">Wednesday</span>
                            <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Wed</span>
                        </th>
                        <th className=" lg:p-2 border-r xl:text-sm text-xs">
                            <span className="xl:block lg:block md:block sm:block hidden">Thursday</span>
                            <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Thu</span>
                        </th>
                        <th className=" lg:p-2 border-r xl:text-sm text-xs">
                            <span className="xl:block lg:block md:block sm:block hidden">Friday</span>
                            <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Fri</span>
                        </th>
                        <th className=" lg:p-2 border-r xl:text-sm text-xs">
                            <span className="xl:block lg:block md:block sm:block hidden">Sunday</span>
                            <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Sat</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                  <tr className="text-center h-[6rem]">
                      <td className="group border h-6 lg:h-40 max-w-[0.5rem] overflow-auto transition duration-500 ease hover:bg-gray-300 ">
                          <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">1</span>
                            </div>  
                            <div className="bottom flex-grow py-1 max-w-full">
                              <Link href="/event">
                                <div className="bg-red-200 text-black rounded text-xs lg:text-sm mb-1 p-[0.125rem] cursor-pointer">
                                   Meeting
                                </div>
                              </Link>
                              <Link href="/event">
                                <div className="bg-green-100 text-black rounded text-xs lg:text-sm mb-1 p-[0.125rem] cursor-pointer">
                                   Meeting
                                </div>
                              </Link>
                            </div>
                          </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">2</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">3</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">4</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">6</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-hidden transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">7</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                        </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                            <span className="text-gray-500 text-xs lg:text-base">8</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                  </tr>
                  <tr className="text-center h-[6rem]">
                  <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                            <span className="text-gray-500 text-xs lg:text-base">9</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">10</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">11</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">12</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">13</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-hidden transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">14</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                        </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                            <span className="text-gray-500 text-xs lg:text-base">15</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                  </tr>
                  <tr className="text-center h-[6rem]">
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300 ">
                          <div className="flex flex-col h-full w-full overflow-hidden">
                              <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">16</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                      </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">17</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">18</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">19</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">20</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-hidden transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">21</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                        </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                            <span className="text-gray-500 text-xs lg:text-base">22</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                  </tr>
                  <tr className="text-center h-[6rem]">
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300 ">
                          <div className="flex flex-col h-full w-full overflow-hidden">
                              <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">23</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                      </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">24</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">25</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">26</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">27</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-hidden transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">28</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                        </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                            <span className="text-gray-500 text-xs lg:text-base">28</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                  </tr>
                  <tr className="text-center h-[6rem]">
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300 ">
                          <div className="flex flex-col h-full w-full overflow-hidden">
                              <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">29</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                      </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">30</span>
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="group border h-6 lg:h-40 overflow-auto transition duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-full w-full overflow-hidden">
                            <div className="w-full flex justify-center h-4 lg:mb-1">
                              <span className="text-gray-500 text-xs lg:text-base">31</span>
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