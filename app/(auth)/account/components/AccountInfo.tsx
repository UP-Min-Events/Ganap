// Utilities
import Link from 'next/link';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { NextRequest } from 'next/server';

// shadCN Components
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cookies } from 'next/headers';
import { Skeleton } from '@/components/ui/skeleton';

export default async function AccountInfo() {
    const cookieStore = cookies();
    const sub = cookieStore.get('sub');
    const access_token = cookieStore.get('access_token');

    const res = await fetch(
        `https://${process.env.NEXT_PUBLIC_COGNITO_DOMAIN}/oauth2/userInfo`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${access_token?.value}`,
            },
        },
    );

    const user_info_data = await res.json();
    const email = user_info_data.email;

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/users/${sub?.value}`,
    );
    const data = await response.json();

    return (
        <>
            <section className="flex flex-col items-center pb-4">
                <Avatar className="mb-4 h-32 w-32">
                    <AvatarImage src={email} />
                    <AvatarFallback>
                        <Skeleton className="h-full w-full rounded-full" />
                    </AvatarFallback>
                </Avatar>
                <>
                    <h1 className="text-2xl font-bold">{`${data.firstName} ${data.lastName}`}</h1>
                    <p>{email}</p>
                    <p>{data.studentNumber}</p>
                </>
            </section>
            <section className="flex w-[90%] flex-col items-center px-6 md:w-[50%] lg:w-[40%]">
                <section className="flex w-full flex-col items-center rounded-lg shadow-[0_2px_2px_0_rgba(0,0,0,0.2)] xl:max-w-[75%]">
                    {/* <Link
                        href={{
                            pathname: '/account/edit',
                            query: {
                                info: 'name',
                                firstName: `${data.firstName}`,
                                lastName: `${data.lastName}`,
                                sub: `${sub?.value}`,
                            },
                        }}
                        className="group flex w-full items-center justify-between rounded-t-lg border border-b-0 border-neutral-300 bg-white p-4 text-sm font-medium"
                    >
                        Name{' '}
                        <ChevronRightIcon className="h-[1.25rem] w-[1.25rem] text-black group-hover:text-red-500 group-hover:bg-red-100 rounded" />
                    </Link>
                    <Link
                        href={{
                            pathname: '/account/edit',
                            query: {
                                info: 'studentNumber',
                                studentNumber: `${data.studentNumber}`,
                            },
                        }}
                        className="group flex w-full items-center justify-between border border-b-0 border-neutral-300 bg-white p-4 text-sm font-medium"
                    >
                        Student Number{' '}
                        <ChevronRightIcon className="h-[1.25rem] w-[1.25rem] text-black group-hover:text-red-500 group-hover:bg-red-100 rounded" />
                    </Link> */}
                    <Link
                        href={{
                            pathname: '/account/edit',
                            query: {
                                info: 'yearLevel',
                                yearLevel: `${data.yearLevel}`,
                            },
                        }}
                        className="group flex w-full items-center justify-between rounded-t-lg border border-b-0 border-neutral-300 bg-white p-4 text-sm font-medium"
                        // className="group flex w-full items-center justify-between border border-b-0 border-neutral-300 bg-white p-4 text-sm font-medium"
                    >
                        Year Level{' '}
                        <ChevronRightIcon className="h-[1.25rem] w-[1.25rem] rounded text-red-500 group-hover:bg-red-100 group-hover:text-red-500" />
                    </Link>
                    <Link
                        href={{
                            pathname: '/account/edit',
                            query: {
                                info: 'degreeProgram',
                                degreeProgram: `${data.degreeProgram}`,
                            },
                        }}
                        className="group flex w-full items-center justify-between border border-b-0 border-neutral-300 bg-white p-4 text-sm font-medium"
                    >
                        Degree Program{' '}
                        <ChevronRightIcon className="h-[1.25rem] w-[1.25rem] rounded text-red-500 group-hover:bg-red-100 group-hover:text-red-500" />
                    </Link>
                    <Link
                        href={{
                            pathname: '/account/edit',
                            query: {
                                info: 'organizations',
                                organizations:
                                    'Organization 1, Organization 2, Organization 3',
                            },
                        }}
                        className="group flex w-full items-center justify-between rounded-b-lg border border-b border-neutral-300 bg-white p-4 text-sm font-medium"
                    >
                        Organizations{' '}
                        <ChevronRightIcon className="h-[1.25rem] w-[1.25rem] rounded text-red-500 group-hover:bg-red-100 group-hover:text-red-500" />
                    </Link>
                </section>
            </section>
        </>
    );
}
