// Utilities
import Link from "next/link"
import { ChevronRightIcon } from "@radix-ui/react-icons"

// shadCN Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AccountInfo() {
  return (
    <>
      <section className="flex flex-col items-center pb-4">
        <Avatar className="w-32 h-32 mb-4">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>HI</AvatarFallback>
        </Avatar>
        <>
            <h1 className="text-2xl font-bold">Nhyl Bryle</h1>
            <p>emailaddress@up.edu.ph</p>
            <p>2021-XXXXX</p>
        </>
      </section>
      <section className="w-[90%] md:w-[50%] lg:w-[40%] flex flex-col items-center px-6">
        <section className="xl:max-w-[75%] flex flex-col items-center w-full shadow-[0_2px_2px_0_rgba(0,0,0,0.2)] rounded-lg">
          <Link 
            href={{
              pathname: "/account/edit",
              query: {
                info: "name",
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
                info: "studentNumber",
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
                info: "yearLevel",
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
                info: "degreeProgram",
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
                info: "organizations",
                organizations: "2021-XXXXX", 
              }
            }}
            className="flex group justify-between items-center border border-b-0 border-neutral-300 hover:bg-neutral-100 w-full p-4 text-sm font-medium"
          >
            Organizations <ChevronRightIcon className="w-[1.25rem] h-[1.25rem] text-red-500" />
          </Link>
        </section>
      </section>
    </>
  )
}