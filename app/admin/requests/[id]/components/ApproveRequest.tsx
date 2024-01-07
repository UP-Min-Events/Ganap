'use client';

// Components
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
// import { getCookie } from 'cookies-next';
import { redirect } from 'next/navigation';
import getTokens from '@/actions/getCookies';

export default function ApproveRequest({ event_id, start_date }: EventDetails) {
    const { toast } = useToast();

    // const refresh_token = getCookie('refresh_token');
    // const access_token = getCookie('access_token');

    if (typeof window !== 'undefined') {
        console.log('This is from client', window.location.origin);
    }

    async function approveEventRequest() {
        const { refresh_token, access_token } = await getTokens();
        let host = '';
        if (typeof window !== 'undefined') {
            host = window.location.origin;
        }
        // const url = `${process.env.NEXT_PUBLIC_API_URL}/event/${event_id}?start_date=${start_date}&refresh_token=${refresh_token}`;
        const url = `${host}/api/event/${event_id}?start_date=${start_date}&refresh_token=${refresh_token}`;

        const res = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${access_token}`,
            },
            body: JSON.stringify({
                approval_status: 'approved',
            }),
        });

        if (!res.ok) {
            if (res.status === 403) {
                // redirect('/login');
                redirect('/api/auth/signout');
            }

            toast({
                title: 'Something went wrong',
                description: 'Please try again later.',
            });
        } else {
            toast({
                title: 'Request Approved!',
                description:
                    'You have successfully approved the event request.',
            });

            return res;
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="h-10 rounded-xl bg-green-300 px-8 hover:bg-green-400">
                    Approve Request
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="w-[90%] bg-light-yellow-100">
                <AlertDialogHeader>
                    <AlertDialogTitle>Approve event request?</AlertDialogTitle>
                    <AlertDialogDescription className="text-neutral-700">
                        This action cannot be undone. This will publish the
                        event to the public.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="bg-white">
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        className="bg-green-300 hover:bg-green-400"
                        onClick={() => {
                            approveEventRequest();
                        }}
                    >
                        Approve
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
