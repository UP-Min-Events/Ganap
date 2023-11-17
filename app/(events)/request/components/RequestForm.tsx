"use client"

// zod
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

// shadCN Components
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from "./DatePicker"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

// Utilities
import { useRouter } from "next/navigation"
import { useState } from 'react'
import { useForm } from "react-hook-form"

const onboarding_form_schema = z.object({
  event_name: z.string().min(3, { message: "Event name must be at least 3 or more characters long."}).max(50),
  event_host: z.string().min(3, { message: "Last name must be atleast 3 or more characters long."}).max(30),
  event_description: z.string(),
  date: z.date(),
  time: z.string(),
  venue: z.string(),
  accomplished_forms: z.string(),
})

export default function RequestForm() {
    const router = useRouter()
    const [page, setPage] = useState(0)

    // 1. Define your form.
    const form = useForm<z.infer<typeof onboarding_form_schema>>({
      resolver: zodResolver(onboarding_form_schema),
      defaultValues: {
        event_name: "",
        event_host:"",
        event_description:"",
        time:"",
        venue:"",
        accomplished_forms:"",
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof onboarding_form_schema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)

      router.push("/")
    }

    return (
      <section className="w-full md:max-w-[50%] lg:max-w-[30%] px-6 flex flex-col gap-6">
        <header className="w-full flex gap-4 justify-between">
            <span className="w-[50%] bg-red-500 rounded-full h-1" />
            <span className={`w-[50%] ${page === 0 ? `bg-var-neutral-70` : `bg-red-500`} rounded-full h-1`} />
        </header>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {page === 0 ?
                <>
                  <FormField
                    control={form.control}
                    name="event_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Event Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="event_host"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Host</FormLabel>
                        <FormControl>
                          <Input placeholder="Organization" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="event_description"
                    render={() => (
                      <FormItem>
                        <FormLabel>Event Description</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us about your event." className="min-h-[8rem]" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              : 
                <>
                  <FormField
                    control={form.control}
                    name="date"
                    render={() => (
                      <FormItem>
                        <FormLabel>Date</FormLabel>
                        <FormControl>
                          <DatePicker />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time</FormLabel>
                        <FormControl>
                          <Input placeholder="Time" type="time" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="venue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Venue</FormLabel>
                        <FormControl>
                          <Input placeholder="Venue" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="accomplished_forms"
                    render={() => (
                      <FormItem>
                        <FormLabel htmlFor="multiple_files">Accomplished Forms</FormLabel>
                        <FormControl>
                            <Input id="multiple_files" type="file" className="align-middle" multiple />
                        </FormControl>
                        <FormDescription>
                          Select multiple files by holding down the Ctrl or Shift key.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              }
            <nav className="bottom-4 mx-auto w-full">
              <div className="mx-auto flex flex-col gap-2 items-center">
                { page === 0 ?
                  <>
                    <Button className="w-[10rem] rounded-xl border-red-500" type="button" variant="outline" onClick={() => setPage(1)}>Next Page</Button>
                  </>
                  :
                  <>
                    <Button className="w-[10rem] rounded-xl border-red-500" type="button" variant="outline" onClick={() => setPage(0)}>Previous Page</Button>
                    <Button className="w-[10rem] rounded-xl bg-red-500 hover:bg-var-primary-30 h-10" type="submit">Submit Request</Button>
                  </>
                }
              </div>
            </nav>
          </form>
        </Form>
      </section>
    )
  }

