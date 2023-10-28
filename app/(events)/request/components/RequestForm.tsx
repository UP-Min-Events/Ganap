"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

import { useState } from 'react'

const formSchema = z.object({
  firstName: z.string().min(3, { message: "First name must be at least 3 or more characters long."}).max(50),
  lastName: z.string().min(3, { message: "Last name must be atleast 3 or more characters long."}).max(30),
  studentNumber: z.string(),
  yearLevel: z.string(),
  degreeProgram: z.string(),
})

export default function RequestForm() {
    const router = useRouter()
    const [page, setPage] = useState(0)

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        firstName: "",
        lastName:"",
        studentNumber:"",
        yearLevel:"",
        degreeProgram:"",
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)

      router.push("/")
    }

    return (
      <section className="w-full lg:max-w-[20%] px-6 flex flex-col gap-6">
        <header className="w-full flex gap-4 justify-between">
            <span className="w-[50%] bg-var-primary-20 rounded-full h-1" />
            <span className={`w-[50%] ${page === 0 ? `bg-var-neutral-70` : `bg-var-primary-20`} rounded-full h-1`} />
        </header>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {page === 0 ?
                <>
                  <FormField
                    control={form.control}
                    name="firstName"
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
                    name="lastName"
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
                    name="studentNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Description</FormLabel>
                        <FormControl>
                          <Input {...field} />
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
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date</FormLabel>
                        <FormControl>
                          <Input placeholder="Date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time</FormLabel>
                        <FormControl>
                          <Input placeholder="Time" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="firstName"
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
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Accomplished Forms</FormLabel>
                        <FormControl>
                          <Input placeholder="Upload File" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              }
            <nav className="w-full flex flex-col gap-4 items-center">
              { page === 0 ?
                  <Button className="w-[75%] rounded-2xl border-var-primary-20" type="button" variant="outline" onClick={() => setPage(1)}>Next Page</Button>
                :
                <>
                  <Button className="w-[75%] rounded-2xl border-var-primary-20" type="button" variant="outline" onClick={() => setPage(0)}>Previous Page</Button>
                  <Button className="w-[75%] rounded-2xl bg-var-primary-20 hover:bg-var-primary-30 h-10" type="submit">Submit Request</Button>
                </>
              }
            </nav>
          </form>
        </Form>
      </section>
    )
  }

