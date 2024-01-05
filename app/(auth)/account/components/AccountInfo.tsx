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
                <Avatar className="w-32 h-32 mb-4">
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
            <section className="w-[90%] md:w-[50%] lg:w-[40%] flex flex-col items-center px-6">
                <section className="xl:max-w-[75%] flex flex-col items-center w-full shadow-[0_2px_2px_0_rgba(0,0,0,0.2)] rounded-lg">
                    <Link
                        href={{
                            pathname: '/account/edit',
                            query: {
                                info: 'name',
                                firstName: `${data.firstName}`,
                                lastName: `${data.lastName}`,
                                sub: `${sub?.value}`,
                            },
                        }}
                        className="flex group justify-between items-center border border-b-0 border-neutral-300 hover:bg-neutral-100 rounded-t-lg w-full p-4 text-sm font-medium"
                    >
                        Name{' '}
                        <ChevronRightIcon className="w-[1.25rem] h-[1.25rem] text-red-500" />
                    </Link>
                    <Link
                        href={{
                            pathname: '/account/edit',
                            query: {
                                info: 'studentNumber',
                                studentNumber: `${data.studentNumber}`,
                            },
                        }}
                        className="flex group justify-between items-center border border-b-0 border-neutral-300 hover:bg-neutral-100 w-full p-4 text-sm font-medium"
                    >
                        Student Number{' '}
                        <ChevronRightIcon className="w-[1.25rem] h-[1.25rem] text-red-500" />
                    </Link>
                    <Link
                        href={{
                            pathname: '/account/edit',
                            query: {
                                info: 'yearLevel',
                                yearLevel: `${data.yearLevel}`,
                            },
                        }}
                        className="flex group justify-between items-center border border-b-0 border-neutral-300 hover:bg-neutral-100 w-full p-4 text-sm font-medium"
                    >
                        Year Level{' '}
                        <ChevronRightIcon className="w-[1.25rem] h-[1.25rem] text-red-500" />
                    </Link>
                    <Link
                        href={{
                            pathname: '/account/edit',
                            query: {
                                info: 'degreeProgram',
                                degreeProgram: `${data.degreeProgram}`,
                            },
                        }}
                        className="flex group justify-between items-center border border-b-0 border-neutral-300 hover:bg-neutral-100 w-full p-4 text-sm font-medium"
                    >
                        Degree Program{' '}
                        <ChevronRightIcon className="w-[1.25rem] h-[1.25rem] text-red-500" />
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
                        className="flex group justify-between items-center border border-b rounded-b-lg border-neutral-300 hover:bg-neutral-100 w-full p-4 text-sm font-medium"
                    >
                        Organizations{' '}
                        <ChevronRightIcon className="w-[1.25rem] h-[1.25rem] text-red-500" />
                    </Link>
                </section>
            </section>
        </>
    );
}
