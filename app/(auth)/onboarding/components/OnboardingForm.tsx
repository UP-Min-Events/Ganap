"use client"

// Utilities
import * as z from "zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"

// shadCN Components
import { Input } from "@/components/ui/input"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { de } from "date-fns/locale"

// const degreePrograms = z.enum(["BS Computer Science", "BS Applied Mathematics", "BS Data Science", "BS Food Technology", "BS Biology"]);
// type degreePrograms = z.infer<typeof degreePrograms>;

const formSchema = z.object({
  firstName: z.string().min(3, { message: "First name must be at least 3 or more characters long."}).max(50),
  lastName: z.string().min(3, { message: "Last name must be atleast 3 or more characters long."}).max(30),
  studentNumber: z.string().min(6, { message: "Enter a valid student number."}),
  yearLevel: z.string({ required_error: "Please select your year level."}),
  degreeProgram: z.string({ required_error: "Please select your degree program."}),
})

export default function OnboardingForm({ sub }: { sub: string }) {
  const degreePrograms = [
    { value: "AA Sports Science", label: "AA Sports Science" },
    { value: "B Sports Science", label: "B Sports Science" },
    { value: "BA Anthropology", label: "BA Anthropology" },
    { value: "BA Communication and Media Arts", label: "BA Communication and Media Arts" },
    { value: "BA English", label: "BA English" },
    { value: "BS Agribusiness Economics", label: "BS Agribusiness Economics" },
    { value: "BS Applied Mathematics", label: "BS Applied Mathematics" },
    { value: "BS Architecture", label: "BS Architecture" },
    { value: "BS Biology", label: "BS Biology" },
    { value: "BS Computer Science", label: "BS Computer Science" },
    { value: "BS Data Science", label: "BS Data Science" },
    { value: "BS Food Technology", label: "BS Food Technology" },
    { value: "MS Management", label: "MS Management" },
    { value: "PhD by Research", label: "PhD by Research" }
  ];

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
          <form action={route} method="POST" className="w-full sm:max-w-[50%] md:max-w-[45%] lg:max-w-[35%] xl:max-w-[20%] mt-4 px-6 space-y-4">
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
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select year level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">1st Year</SelectItem>
                        <SelectItem value="2">2nd Year</SelectItem>
                        <SelectItem value="3">3rd Year</SelectItem>
                        <SelectItem value="4">4th Year</SelectItem>
                        <SelectItem value="5">5th Year</SelectItem>
                      </SelectContent>
                    </Select>
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
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select degree program" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {degreePrograms.map(degreeProgram => (
                          <SelectItem key={degreeProgram.value} value={degreeProgram.value}>{degreeProgram.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <span className="w-full flex justify-center py-4">
              <Button className="w-[75%] rounded-2xl bg-red-500 hover:bg-red-600 h-[2.5rem]" type="submit">Finish</Button>
            </span>
          </form>
        </Form>
    )
}

