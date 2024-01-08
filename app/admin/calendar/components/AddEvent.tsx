'use client';

// Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { DatePicker } from '@/app/(events)/request/components/DatePicker';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';

// Icons
import { PlusSquare } from 'lucide-react';

// Utilities
import moment from 'moment';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import getTokens from '@/actions/getCookies';
import { useToast } from '@/components/ui/use-toast';

// zod
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const request_form_schema = z.object({
    event_name: z
        .string()
        .min(3, {
            message: 'Event name must be at least 3 or more characters long.',
        })
        .max(50),
    start_date: z.date().min(new Date(), {
        message: 'Invalid date. Date must not be earlier than today.',
    }),
    start_time: z.string(),
    end_date: z.date().min(new Date(), {
        message: 'Invalid date. Date must not be earlier than today.',
    }),
    end_time: z.string(),
    venue: z
        .string()
        .min(3, { message: 'Venue must have 3 or more characters.' }),
    description: z.string(),
    organizer: z
        .string()
        .min(3, { message: 'Organizer must be a valid name!' })
        .max(30),
    accomplished_forms: z.string().url(),
});

const datetime_update = (date: Date, time: string): ISODateString => {
    const updated_date = moment(date, 'ddd MMM D YYYY HH:mm:ss ZZ');
    updated_date.set({
        h: parseInt(time.split(':')[0]),
        m: parseInt(time.split(':')[1]),
    });
    return updated_date.format().toString() as ISODateString;
};

export default function AddEvent() {
    const router = useRouter();
    const { toast } = useToast();
    const form = useForm<z.infer<typeof request_form_schema>>({
        resolver: zodResolver(request_form_schema),
        defaultValues: {
            event_name: '',
            organizer: '',
            description: '',
            venue: '',
            start_date: undefined,
            start_time: '',
            end_date: undefined,
            end_time: '',
            accomplished_forms: '',
        },
    });

    async function uploadEventRequest(params: EventDetails) {
        const { refresh_token, access_token } = await getTokens();
        let host = '';

        if (typeof window !== 'undefined') {
            host = window.location.origin;
        }

        // const url = `${process.env.NEXT_PUBLIC_API_URL}/event?refresh_token=${refresh_token}`;
        const url = `${host}/api/event?refresh_token=${refresh_token}`;
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${access_token}`,
            },
            body: JSON.stringify(params),
        });

        if (!res.ok) {
            if (res.status === 403) {
                // router.push('/login');
                router.push('/api/auth/signout');
            }
            toast({
                title: 'Something went wrong',
                description: 'Please try again later.',
            });
        } else {
            toast({
                title: 'Event Uploaded',
                description: 'The event has been published to the calendar.',
            });
        }
    }

    function onSubmit(values: z.infer<typeof request_form_schema>) {
        const { start_time, end_time, ...body_params } = values;
        uploadEventRequest({
            ...body_params,
            start_date: datetime_update(body_params.start_date, start_time),
            end_date: datetime_update(body_params.end_date, end_time),
            approval_status: 'approved',
        });
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="absolute right-4 top-4 flex items-center gap-2 bg-red-500 px-2 hover:bg-red-600 md:relative md:right-0 md:top-0 md:mb-4 md:px-4">
                    <PlusSquare className="size-[1.25rem]" />
                    <span className="hidden md:inline">Add Event</span>
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-light-yellow-100 overflow-scroll md:overflow-auto flex flex-col gap-4 items-start">
                <SheetHeader>
                    <SheetTitle>Add Event To Calendar</SheetTitle>
                    <SheetDescription className="text-start">
                        Add an official event or holiday to the published
                        calendar. Make sure to add a title and description for
                        the event, as well as the correct link for the event.
                    </SheetDescription>
                </SheetHeader>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4 w-full"
                    >
                        <FormField
                            control={form.control}
                            name="event_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Event Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            required
                                            className="bg-white"
                                            placeholder="Event Name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="organizer"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Host</FormLabel>
                                    <FormControl>
                                        <Input
                                            required
                                            className="bg-white"
                                            placeholder="Organization"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Event Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell us about your event."
                                            className="min-h-[8rem] bg-white"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div>
                            <FormLabel htmlFor="start_date">
                                From
                                <div className="mt-2 flex w-full flex-row justify-center gap-4">
                                    <FormField
                                        control={form.control}
                                        name="start_date"
                                        render={({ field }) => (
                                            <FormItem style={{ flex: 1 }}>
                                                <FormControl>
                                                    <DatePicker
                                                        className="bg-white"
                                                        value={field.value}
                                                        onChange={(newDate) =>
                                                            form.setValue(
                                                                'start_date',
                                                                newDate!,
                                                            )
                                                        }
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="start_time"
                                        render={({ field }) => (
                                            <FormItem style={{ flex: 1 }}>
                                                <FormControl>
                                                    <Input
                                                        className="bg-white"
                                                        type="time"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </FormLabel>
                        </div>
                        <div className="mt-2">
                            <FormLabel htmlFor="end_date">
                                To
                                <div className="mt-2 flex w-full flex-row justify-center gap-4">
                                    <FormField
                                        control={form.control}
                                        name="end_date"
                                        render={({ field }) => (
                                            <FormItem style={{ flex: 1 }}>
                                                <FormControl>
                                                    <DatePicker
                                                        className="bg-white"
                                                        value={field.value}
                                                        onChange={(newDate) =>
                                                            form.setValue(
                                                                'end_date',
                                                                newDate!,
                                                            )
                                                        }
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="end_time"
                                        render={({ field }) => (
                                            <FormItem style={{ flex: 1 }}>
                                                <FormControl>
                                                    <Input
                                                        className="bg-white"
                                                        type="time"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </FormLabel>
                        </div>
                        <FormField
                            control={form.control}
                            name="venue"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Venue</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="bg-white"
                                            placeholder="Venue"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <nav className="mx-auto w-full">
                            <div className="mx-auto mt-6 flex flex-col items-end gap-2">
                                <SheetClose>
                                    <Button
                                        className="hover:bg-var-primary-30 h-10 w-[10rem] rounded-xl bg-green-300 hover:bg-green-400"
                                        type="submit"
                                    >
                                        Upload Event
                                    </Button>
                                </SheetClose>
                            </div>
                        </nav>
                    </form>
                </Form>
        
                {/* <form className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-left">
                            Name
                        </Label>
                        <Input
                            id="name"
                            placeholder="Event Title"
                            className="col-span-3 bg-white"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-left">
                            Description
                        </Label>
                        <Textarea
                            id="description"
                            placeholder="Event Description"
                            className="col-span-3 bg-white"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="date" className="text-left">
                            Date
                        </Label>
                        <Input
                            type="date"
                            id="date"
                            placeholder="Date"
                            className="col-span-3 bg-white"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="time" className="text-left">
                            Time
                        </Label>
                        <Input
                            type="time"
                            id="time"
                            placeholder="Time"
                            className="col-span-3 bg-white"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="memo" className="text-left">
                            Memo (optional)
                        </Label>
                        <Input
                            id="memo"
                            placeholder="Upload Official Memo"
                            className="col-span-3 bg-white"
                        />
                    </div>
                </form> */}



                {/* <SheetFooter>
                    <SheetClose asChild>
                        <Button
                            className="bg-green-300 hover:bg-green-400"
                            type="submit"
                        >
                            Upload Event
                        </Button>
                    </SheetClose>
                </SheetFooter> */}
            </SheetContent>
        </Sheet>
    );
}
