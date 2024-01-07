'use client';

// Dialog Components
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

// Form Components
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';

import { getCookie } from 'cookies-next';
import { redirect } from 'next/navigation';

const formSchema = z.object({
    // comment_id: z.string().uuid(),
    comment_content: z.string(),
});

export default function CommentDialog({ event_id }: EventDetails) {
    console.log('123', event_id);
    const { toast } = useToast();

    const comment = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            // comment_id: '',
            comment_content: '',
        },
    });

    async function uploadComment(comment: string) {
        const refresh_token = getCookie('refresh_token');
        const access_token = getCookie('access_token');
        let host = '';
        if (typeof window !== 'undefined') {
            host = window.location.origin;
        }

        try {
            // const url = `${process.env.NEXT_PUBLIC_API_URL}/comment/${event_id}?refresh_token=${refresh_token}`;
            const url = `${host}/api/comment/${event_id}?refresh_token=${refresh_token}`;
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${access_token}`,
                },
                body: JSON.stringify({
                    comment_content: comment,
                }),
            });

            if (!res.ok) {
                if (res.status === 403) {
                    // redirect('/login');
                    redirect('/api/auth/signout');
                }
                throw new Error('Something went wrong');
            }

            toast({
                title: 'Comment Added',
                description: 'Your comment has been added to the request.',
            });

            return await res.json();
        } catch (error) {
            console.log(error);
            toast({
                title: 'Something went wrong',
                description: 'Please try again later.',
            });
        }
    }

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        await uploadComment(values.comment_content);
    }
    console.log(comment.watch());

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="h-10 rounded-full px-8">
                    Add Comment
                </Button>
            </DialogTrigger>
            <DialogContent className="w-[90%]">
                <DialogHeader>
                    <DialogTitle>Add Comment to the Request</DialogTitle>
                    <DialogDescription>
                        This comment will only be seen by the event organizer.
                        Make sure to be as detailed as possible.
                    </DialogDescription>
                </DialogHeader>
                <Form {...comment}>
                    <form
                        className="grid gap-4"
                        onSubmit={comment.handleSubmit(onSubmit)}
                    >
                        <FormField
                            name="comment_content"
                            control={comment.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="comment_content">
                                        Comment
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Comment about this event request."
                                            id="comment_content"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end">
                            <DialogClose asChild>
                                <Button variant="ghost">Cancel</Button>
                            </DialogClose>
                            <DialogClose>
                                <Button
                                    className="ml-2 bg-red-500 hover:bg-red-600"
                                    type="submit"
                                >
                                    Add Comment
                                </Button>
                            </DialogClose>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
