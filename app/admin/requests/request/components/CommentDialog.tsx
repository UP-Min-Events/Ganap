// Components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function CommentDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-full mx-auto px-8">Add Comment</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Comment to the Request</DialogTitle>
          <DialogDescription>
            This comment will only be seen by the event organizer. Make sure to be as detailed as possible.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <Label htmlFor="comment">Comment</Label>
          <Textarea id="comment" />
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button className="ml-2 bg-red-500 hover:bg-red-600">Add Comment</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}