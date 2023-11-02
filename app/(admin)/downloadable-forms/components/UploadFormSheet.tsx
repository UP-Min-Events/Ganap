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

export function UploadFormSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <CallToActionButton action="Upload Form" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Upload Downloadable Form</SheetTitle>
          <SheetDescription>
            Upload a form that you want to be downloadable here. Make sure to add a title and description for the form, as well as the correct link for the file download.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="title" placeholder="Form Title" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea id="description" placeholder="Form Description" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="link" className="text-right">
              Link
            </Label>
            <Input id="link" placeholder="Google Drive Link" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button className="bg-green-300 hover:bg-green-400" type="submit">Upload Form</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
