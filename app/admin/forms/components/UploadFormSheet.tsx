"use client"

// Form Components
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

// UI Components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  form_id: z.string(),
  form_title: z.string(),
  form_link: z.string(),
  form_description: z.string(),
})

export function UploadFormSheet() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      form_id: "",
      form_title: "",
      form_link:"",
      form_description:"",
    },
  }) 

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Upload Form</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Upload Downloadable Form</SheetTitle>
          <SheetDescription>
            Upload a form that you want to be downloadable here. Make sure to add a title and description for the form, as well as the correct link for the file download.
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col gap-2">
                <FormField 
                  control={form.control}
                  name="form_title"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel htmlFor="Form Title">
                        Title
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Form Title"
                          {...field} 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField 
                  control={form.control}
                  name="form_description"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel htmlFor="Form Description">
                        Description
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Form Description"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField 
                  control={form.control}
                  name="form_link"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel htmlFor="Form Link">
                        Link
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Google Drive Link"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button className="bg-green-300 hover:bg-green-400" type="submit">Upload Form</Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  )
}
