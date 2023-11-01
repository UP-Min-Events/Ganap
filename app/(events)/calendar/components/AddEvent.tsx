import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import CallToActionButton from "@/components/(buttons)/CallToActionButton"

export function AddEvent() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <CallToActionButton action="Add Event" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Event To Calendar</SheetTitle>
          <SheetDescription>
            Add an official event or holiday to the published calendar. Make sure to add a title and description for the event, as well as the correct link for the event.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Name
            </Label>
            <Input id="name" placeholder="Event Title" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-left">
              Description
            </Label>
            <Textarea id="description" placeholder="Event Description" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-left">
              Date
            </Label>
            <Input id="date" placeholder="Date and Time" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="memo" className="text-left">
              Memo (optional)
            </Label>
            <Input id="memo" placeholder="Upload Official Memo" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button className="bg-var-secondary-30 hover:bg-var-secondary-20"type="submit">Upload Event</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
