// Components
import { Separator } from "@/components/ui/separator"
import BackButton from "@/components/(buttons)/BackButton"

export default function EventHeader() {
  return (
    <>
			<header className="px-6 w-full flex items-center justify-center relative bg-red-500 text-white py-4 overflow-hidden">
				<nav className="flex flex-row relative justify-center items-center min-w-full md:min-w-[60%] lg:min-w-[40%] xl:min-w-[30%]">
          <BackButton />
          <h1 className="text-[1.75rem] font-semibold text-center">Event Title</h1>
        </nav>
      </header>
      <Separator className="mb-4" />
    </>
  )
}