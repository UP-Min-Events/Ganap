'use client';

// Utilities
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

// UI Components
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const onboarding_form_schema = z.object({
    firstName: z
        .string()
        .min(3, {
            message: 'First name must be at least 3 or more characters long.',
        })
        .max(50),
    lastName: z
        .string()
        .min(3, {
            message: 'Last name must be at least 3 or more characters long.',
        })
        .max(30),
    studentNumber: z
        .string()
        .min(6, { message: 'Invalid student number.' })
        .max(11, { message: 'Invalid student number.' }),
    yearLevel: z.string({ required_error: 'Please select your year level.' }),
    degreeProgram: z.string({
        required_error: 'Please select your degree program.',
    }),
});

export default function OnboardingForm({ sub }: { sub: string }) {
    const degreePrograms = [
        { value: 'AA Sports Science', label: 'AA Sports Science' },
        { value: 'B Sports Science', label: 'B Sports Science' },
        { value: 'BA Anthropology', label: 'BA Anthropology' },
        {
            value: 'BA Communication and Media Arts',
            label: 'BA Communication and Media Arts',
        },
        { value: 'BA English', label: 'BA English' },
        {
            value: 'BS Agribusiness Economics',
            label: 'BS Agribusiness Economics',
        },
        { value: 'BS Applied Mathematics', label: 'BS Applied Mathematics' },
        { value: 'BS Architecture', label: 'BS Architecture' },
        { value: 'BS Biology', label: 'BS Biology' },
        { value: 'BS Computer Science', label: 'BS Computer Science' },
        { value: 'BS Data Science', label: 'BS Data Science' },
        { value: 'BS Food Technology', label: 'BS Food Technology' },
        { value: 'MS Management', label: 'MS Management' },
        { value: 'PhD by Research', label: 'PhD by Research' },
        { value: 'N/A', label: 'N/A' },
    ];

    const route = `/api/users/${sub}?from=onboarding`;
    const [progress, setProgress] = useState(0);
    const form = useForm<z.infer<typeof onboarding_form_schema>>({
        resolver: zodResolver(onboarding_form_schema),
        defaultValues: {
            firstName: '',
            lastName: '',
            studentNumber: '',
            yearLevel: '',
            degreeProgram: '',
        },
    });

    // Update progress bar based on input fields filled
    useEffect(() => {
        const fields = form.getValues();
        const fields_filled = Object.keys(fields).filter(
            (field) => fields[field as keyof typeof fields] !== '',
        ).length;
        const progress = (fields_filled / 5) * 100;
        setProgress(progress);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [form.watch()]);

    return (
        <section className="flex w-full flex-col gap-6 sm:max-w-[70%] md:max-w-[50%] lg:max-w-[30%]">
            <header className="flex w-full justify-between gap-4 px-6">
                <Progress value={progress} />
            </header>
            <Form {...form}>
                <form action={route} method="POST" className="space-y-4">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem className="px-6">
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input
                                        required
                                        className="bg-white"
                                        placeholder="Juan"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem className="px-6">
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input
                                        required
                                        className="bg-white"
                                        placeholder="Dela Cruz"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="studentNumber"
                        render={({ field }) => (
                            <FormItem className="px-6">
                                <FormLabel>Student Number</FormLabel>
                                <FormControl>
                                    <Input
                                        required
                                        className="bg-white"
                                        placeholder="20XX-XXXXX"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                                <FormDescription>
                                    Write N/A if you are not a student.
                                </FormDescription>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="degreeProgram"
                        render={({ field }) => (
                            <FormItem className="px-6">
                                <FormLabel>Degree Program</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger className="bg-white">
                                            <SelectValue placeholder="Select degree program" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {degreePrograms.map((degreeProgram) => (
                                            <SelectItem
                                                key={degreeProgram.value}
                                                value={degreeProgram.value}
                                            >
                                                {degreeProgram.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="yearLevel"
                        render={({ field }) => (
                            <FormItem className="px-6">
                                <FormLabel>Year Level</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger className="bg-white">
                                            <SelectValue placeholder="Select year level" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="1">
                                            1st Year
                                        </SelectItem>
                                        <SelectItem value="2">
                                            2nd Year
                                        </SelectItem>
                                        <SelectItem value="3">
                                            3rd Year
                                        </SelectItem>
                                        <SelectItem value="4">
                                            4th Year
                                        </SelectItem>
                                        {form.watch('degreeProgram') ===
                                            'BS Architecture' && (
                                            <SelectItem value="5">
                                                5th Year
                                            </SelectItem>
                                        )}
                                        <SelectItem value="5">N/A</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <nav className="fixed bottom-4 mx-auto w-full md:relative md:pt-4">
                        <div className="mx-auto flex flex-col items-center gap-2">
                            <Button
                                className="hover:bg-var-primary-30 h-10 w-[10rem] rounded-xl bg-red-500"
                                type="submit"
                                disabled={progress < 100}
                            >
                                Get Started
                            </Button>
                        </div>
                    </nav>
                </form>
            </Form>
        </section>
    );
}
