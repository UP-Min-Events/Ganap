// UI Components
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import BackButton from '@/components/(buttons)/BackButton';

// Feature Components
import ScheduleCard from './components/ScheduleCard';
import CommentDialog from './components/CommentDialog';
import ApproveRequest from './components/ApproveRequest';
import DescriptionCard from './components/DescriptionCard';
import getTokens from '@/utils/getTokens';

import moment from 'moment';
import { date } from 'zod';
import { redirect } from 'next/navigation';
import { comment } from 'postcss';
import { headers } from 'next/headers';

async function getEventDetails(eventId: string) {
    const { refresh_token, access_token } = getTokens();
    const headersList = headers();

    // const url = `${process.env.NEXT_PUBLIC_API_URL}/event/${eventId}?refresh_token=${refresh_token}`;
    const url = `${headersList.get('x-forwarded-proto')}://${headersList.get(
        'host',
    )}/api/event/${eventId}?refresh_token=${refresh_token}`;

    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token}`,
        },
    });

    // TODO: display error as toast
    if (!res.ok) {
        if (res.status === 403) {
            // redirect('/login');
            redirect('/api/auth/signout');
        }
        throw new Error('Something went wrong');
    }

    return (await res.json())[0];
}

async function getEventComments(eventId: string) {
    const { refresh_token, access_token } = getTokens();

    const headersList = headers();

    try {
        // const url = `${process.env.NEXT_PUBLIC_API_URL}/comment/${eventId}?refresh_token=${refresh_token}`;
        const url = `${headersList.get(
            'x-forwarded-proto',
        )}://${headersList.get(
            'host',
        )}/api/comment/${eventId}?refresh_token=${refresh_token}`;

        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${access_token}`,
            },
        });

        if (!res.ok) {
            if (res.status === 403) {
                // redirect('/login');
                redirect('/api/auth/signout');
            }
            throw new Error('Something went wrong');
        }

        return await res.json();
    } catch (error) {
        console.error(error);
    }
}

export default async function Request({ params }: Params<'id'>) {
    const { id } = params;
    const data: EventDetails = await getEventDetails(id);
    const comments: CommentDetails[] = await getEventComments(id);
    return (
        <main>
            <header className="relative flex w-full items-center justify-center overflow-hidden bg-red-500 px-6 py-4 text-white">
                <nav className="relative flex min-w-full flex-row items-center justify-center md:min-w-[60%] lg:min-w-[40%] xl:min-w-[30%]">
                    <BackButton />
                    <h1 className="text-center text-[1.75rem] font-semibold">
                        {data.event_name}
                    </h1>
                </nav>
            </header>
            <Separator className="mb-4" />
            <section className="container flex flex-col gap-4 md:max-w-[60%] lg:max-w-[40%]">
                <h3 className="flex items-center justify-center text-center text-sm font-medium">
                    Status:&nbsp;{' '}
                    <Badge>
                        {data.approval_status?.charAt(0).toUpperCase()! +
                            data.approval_status?.slice(1)}
                    </Badge>
                </h3>
                <ScheduleCard
                    start_date={data.start_date}
                    end_date={data.end_date}
                    venue={data.venue}
                />
                <DescriptionCard
                    organizer={data.organizer}
                    description={data.description}
                />
                <div className="flex justify-center gap-4">
                    <CommentDialog event_id={id} />
                    <ApproveRequest
                        event_id={id}
                        start_date={data.start_date}
                    />
                </div>
                {/* Test, to fix UI later */}
                {comments &&
                    comments.length > 0 &&
                    comments.map((comment, index) => (
                        <div
                            className="rounded-md bg-neutral-100 p-4"
                            key={index}
                        >
                            <p>{comment.comment_content}</p>
                        </div>
                    ))}
            </section>
        </main>
    );
}
