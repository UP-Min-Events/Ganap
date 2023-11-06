// Utilities
import Link from "next/link"
import { ChevronRightIcon } from "@radix-ui/react-icons"

export default function AccountInfo() {
  return (
    <section className="xl:max-w-[75%] flex flex-col items-center w-full shadow-[0_2px_2px_0_rgba(0,0,0,0.2)] rounded-lg">
      <Link 
        href={{
          pathname: "/account/edit",
          query: {
            info: "Name",
            name: "Nhyl Bryle", 
          }
        }}
        className="flex group justify-between items-center border border-b-0 border-neutral-300 hover:bg-neutral-100 rounded-t-lg w-full p-4 text-sm font-medium"
      >
        Name <ChevronRightIcon className="w-[1.25rem] h-[1.25rem] text-red-500" />
      </Link>
      <Link 
        href={{
          pathname: "/account/edit",
          query: {
            info: "Student Number",
            studentNumber: "2021-XXXXX", 
          }
        }}
        className="flex group justify-between items-center border border-b-0 border-neutral-300 hover:bg-neutral-100 w-full p-4 text-sm font-medium"
      >
        Student Number <ChevronRightIcon className="w-[1.25rem] h-[1.25rem] text-red-500" />
      </Link>
      <Link 
        href={{
          pathname: "/account/edit",
          query: {
            info: "Year Level",
            yearLevel: "2021-XXXXX", 
          }
        }}
        className="flex group justify-between items-center border border-b-0 border-neutral-300 hover:bg-neutral-100 w-full p-4 text-sm font-medium"
      > 
        Year Level <ChevronRightIcon className="w-[1.25rem] h-[1.25rem] text-red-500" />
      </Link>
      <Link 
        href={{
          pathname: "/account/edit",
          query: {
            info: "Degree Program",
            degreeProgram: "2021-XXXXX", 
          }
        }}
        className="flex group justify-between items-center border border-b-0 border-neutral-300 hover:bg-neutral-100 w-full p-4 text-sm font-medium"
      >
        Degree Program <ChevronRightIcon className="w-[1.25rem] h-[1.25rem] text-red-500" />
      </Link>
      <Link 
        href={{
          pathname: "/account/edit",
          query: {
            info: "Organizations",
            organizations: "2021-XXXXX", 
          }
        }}
        className="flex group justify-between items-center border border-b-0 border-neutral-300 hover:bg-neutral-100 w-full p-4 text-sm font-medium"
      >
        Organizations <ChevronRightIcon className="w-[1.25rem] h-[1.25rem] text-red-500" />
      </Link>
    </section>
  )
}