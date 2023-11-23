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

// const degreePrograms = z.enum(["BS Computer Science", "BS Applied Mathematics", "BS Data Science", "BS Food Technology", "BS Biology"]);
// type degreePrograms = z.infer<typeof degreePrograms>;

const formSchema = z.object({
    firstName: z.string().min(3, { message: "First name must be at least 3 or more characters long." }).max(50),
    lastName: z.string().min(3, { message: "Last name must be atleast 3 or more characters long." }).max(30),
    studentNumber: z.string().min(6, { message: "Enter a valid student number." }),
    yearLevel: z.string(),
    degreeProgram: z.string(),
})

export default function OnboardingForm({ sub }: { sub: string }) {

    const route = `/api/users/${sub}`

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            studentNumber: "",
            yearLevel: "",
            degreeProgram: "",
        },
    })

    // 2. Define a submit handler.
    // function onSubmit(values: z.infer<typeof formSchema>) {
    //   // Do something with the form values.
    //   // ✅ This will be type-safe and validated.
    //   console.log(values)

    //   router.push("/")
    // }

    return (
        <Form {...form}>
            <form action={route} method="POST" className="w-full lg:max-w-[20%] mt-4 px-6 space-y-4">
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Juan" {...field} />
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
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Dela Cruz" {...field} />
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
                            <FormLabel>Student Number</FormLabel>
                            <FormControl>
                                <Input placeholder="20XX-XXXXX" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="yearLevel"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Year Level</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="degreeProgram"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Degree Program</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <span className="w-full flex justify-center">
                    <Button className="w-[75%] rounded-2xl bg-red-500 hover:bg-red-600 h-12" type="submit">Finish</Button>
                </span>
            </form>
        </Form>
    )
}

