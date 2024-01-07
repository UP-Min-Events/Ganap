// UI Components
import { Badge } from '@/components/ui/badge';
import ScheduleCard from './components/ScheduleCard';
import CommentDialog from './components/CommentDialog';
import ApproveRequest from './components/ApproveRequest';
import DescriptionCard from './components/DescriptionCard';

// Utils
import { headers } from 'next/headers';
import getTokens from '@/utils/getTokens';
import { redirect } from 'next/navigation';
import RequestHeader from './components/RequestHeader';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

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
            <RequestHeader event_title={data.event_name!} />
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
                {/* Test, to fix UI later */}
                {comments &&
                    comments.length > 0 &&
                    <Card className="flex flex-col gap-2 p-4">
                        <h3 className="text-[1.125rem] text-center font-bold">Admin Comments</h3>
                        {comments.map((comment, index) => (
                            <article
                                className="flex flex-col gap-1 rounded-md border p-4"
                                key={index}
                            >
                                <h4 className="text-neutral-700 font-bold text-xs">08 Jan 2024</h4>
                                <p>{comment.comment_content}</p>
                            </article>
                        ))}
                    </Card>
                }
                <div className="flex justify-center gap-4 mb-4">
                    <CommentDialog event_id={id} />
                    <ApproveRequest
                        event_id={id}
                        start_date={data.start_date}
                    />
                </div>
            </section>
        </main>
    );
}
