// Components
import { Separator } from "@/components/ui/separator"
import BackButton from "@/components/(buttons)/BackButton"

export default function EventHeader() {
  return (
    <>
      <header className="px-6 w-full flex justify-center relative bg-red-500 text-white py-4 overflow-hidden">
          <BackButton />
          <h1 className="text-[1.75rem] font-semibold text-center">Event Title</h1>
      </header>
      <Separator className="mb-4" />
    </>
  )
}