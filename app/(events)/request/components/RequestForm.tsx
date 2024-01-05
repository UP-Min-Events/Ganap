'use client';

// zod
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// shadCN Components
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { DatePicker } from './DatePicker';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';

// Utilities
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { getCookie } from 'cookies-next';
import { useToast } from '@/components/ui/use-toast';

const datetime_update = (date: Date, time: string): ISODateString => {
    const updated_date = moment(date, 'ddd MMM D YYYY HH:mm:ss ZZ');
    updated_date.set({
        h: parseInt(time.split(':')[0]),
        m: parseInt(time.split(':')[1]),
    });
    return updated_date.format().toString() as ISODateString;
};

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
        .min(3, { message: 'Organizer must be a valid name' })
        .max(30),
    accomplished_forms: z.string().url(),
});

export default function RequestForm() {
    const router = useRouter();
    const [page, setPage] = useState(0);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof request_form_schema>>({
        resolver: zodResolver(request_form_schema),
        defaultValues: {
            event_name: '',
            organizer: '',
            description: '',
            venue: '',
            start_date: undefined,
            start_time: undefined,
            end_date: undefined,
            end_time: undefined,
            accomplished_forms: '',
        },
    });

    const nextPage = async () => {
        const result = await form.trigger(['event_name', 'organizer'], {
            shouldFocus: true,
        });
        if (!result) return;
        setPage(1);
    };

    async function uploadEventRequest(params: EventDetails) {
        const refresh_token = getCookie('refresh_token');
        const access_token = getCookie('access_token');

        const url = `${process.env.NEXT_PUBLIC_API_URL}/event?refresh_token=${refresh_token}`;
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
                router.push('/login');
            }
            toast({
                title: 'Something went wrong',
                description: 'Please try again later.',
            });
        } else {
            router.push('/');
        }
    }

    function onSubmit(values: z.infer<typeof request_form_schema>) {
        const { start_time, end_time, ...body_params } = values;
        uploadEventRequest({
            ...body_params,
            start_date: datetime_update(body_params.start_date, start_time),
            end_date: datetime_update(body_params.end_date, end_time),
            approval_status: 'pending',
        });
    }

    return (
        <section className="w-full md:max-w-[50%] lg:max-w-[30%] px-6 flex flex-col gap-6">
            <header className="w-full flex gap-4 justify-between">
                <span className="w-[50%] bg-red-500 rounded-full h-1" />
                <span
                    className={`w-[50%] ${
                        page === 0 ? `bg-var-neutral-70` : `bg-red-500`
                    } rounded-full h-1`}
                />
            </header>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    {page === 0 ? (
                        <>
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
                        </>
                    ) : (
                        <>
                            <div>
                                <FormLabel htmlFor="start_date">
                                    From
                                    <div className="flex flex-row gap-4 justify-center w-full mt-2">
                                        <FormField
                                            control={form.control}
                                            name="start_date"
                                            render={({ field }) => (
                                                <FormItem style={{ flex: 1 }}>
                                                    {/* <FormLabel>From</FormLabel> */}
                                                    <FormControl>
                                                        <DatePicker
                                                            value={field.value}
                                                            onChange={(
                                                                newDate,
                                                            ) =>
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
                                                    {/* <FormLabel>Time</FormLabel> */}
                                                    <FormControl>
                                                        <Input
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
                                    <div className="flex flex-row gap-4 justify-center w-full mt-2">
                                        <FormField
                                            control={form.control}
                                            name="end_date"
                                            render={({ field }) => (
                                                <FormItem style={{ flex: 1 }}>
                                                    {/* <FormLabel>From</FormLabel> */}
                                                    <FormControl>
                                                        <DatePicker
                                                            value={field.value}
                                                            onChange={(
                                                                newDate,
                                                            ) =>
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
                                                    {/* <FormLabel>Time</FormLabel> */}
                                                    <FormControl>
                                                        <Input
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
                                                placeholder="Venue"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="accomplished_forms"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Accomplished Forms
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Input Google Drive Folder Link"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                        <FormDescription>
                                            Provide link to the Google Drive
                                            folder where your accomplished forms
                                            are located. Make sure to make them
                                            visible to other people.
                                        </FormDescription>
                                    </FormItem>
                                )}
                            />
                        </>
                    )}
                    <nav className="bottom-4 mx-auto w-full">
                        <div className="mx-auto flex flex-col gap-2 items-center">
                            {page === 0 ? (
                                <>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => nextPage()}
                                        className="w-[75%] rounded-2xl text-light-yellow-100 hover:text-white bg-red-500 hover:bg-red-600 h-[2.75rem] lg:h-[3.25rem] text-base lg:text-xl font-semibold"
                                    >
                                        Next Page
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button
                                        className="w-[10rem] rounded-xl border-red-500"
                                        type="button"
                                        variant="outline"
                                        onClick={() => setPage(0)}
                                    >
                                        Previous Page
                                    </Button>
                                    <Button
                                        className="w-[10rem] rounded-xl bg-red-500 hover:bg-var-primary-30 h-10"
                                        type="submit"
                                    >
                                        Submit Request
                                    </Button>
                                </>
                            )}
                        </div>
                    </nav>
                </form>
            </Form>
        </section>
    );
}
