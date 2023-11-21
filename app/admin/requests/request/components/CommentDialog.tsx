"use client"

// Dialog Components
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
import { Button } from "@/components/ui/button"

// Form Components
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  comment_id: z.string().uuid(),
  comment_content: z.string(),
})

export default function CommentDialog() {
  const { toast } = useToast()

  const comment = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment_id: "",
      comment_content: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-full px-8 h-10">Add Comment</Button>
      </DialogTrigger>
      <DialogContent className="w-[90%]">
        <DialogHeader>
          <DialogTitle>Add Comment to the Request</DialogTitle>
          <DialogDescription>
            This comment will only be seen by the event organizer. Make sure to be as detailed as possible.
          </DialogDescription>
        </DialogHeader>
        <Form {...comment}>
          <form className="grid gap-4" onSubmit={comment.handleSubmit(onSubmit)}>
            <FormField 
              name="comment_content"
              control={comment.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="comment_content">Comment</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Comment about this event request." id="comment_content" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <DialogClose asChild>
                <Button variant="ghost">Cancel</Button>
              </DialogClose>
              <Button 
                className="ml-2 bg-red-500 hover:bg-red-600" 
                type="submit"
                onClick={() => {
                  toast({
                    title: "Comment Added",
                    description: "Your comment has been added to the request.",
                  })
                }}
              >
                Add Comment
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}