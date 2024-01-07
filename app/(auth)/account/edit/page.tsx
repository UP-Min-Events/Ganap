// Components
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import BackButton from '@/components/(buttons)/BackButton';
import { PencilIcon } from 'lucide-react';
import PageHeader from '@/components/(nav)/PageHeader';

export default function Edit({
    searchParams,
}: {
    searchParams: {
        info: string;
        firstName: string;
        lastName: string;
        studentNumber: string;
        yearLevel: string;
        degreeProgram: string;
        organizations: string;
        sub: string;
    };
}) {
    const title =
        searchParams.info === 'name'
            ? 'Name'
            : searchParams.info === 'studentNumber'
              ? 'Student Number'
              : searchParams.info === 'yearLevel'
                ? 'Year Level'
                : searchParams.info === 'degreeProgram'
                  ? 'Degree Program'
                  : searchParams.info === 'organizations'
                    ? 'Organizations'
                    : '';

    const route = `/api/users/${searchParams.sub}?from=account`;

    return (
        <main className="flex min-h-screen flex-col items-center">
            <PageHeader />
            <section className="flex w-full flex-col items-center p-6 md:w-[50%] lg:w-[40%]">
                <h2 className="mb-6 flex items-center gap-1 text-xl font-bold">
                    <PencilIcon />
                    {title}
                </h2>
                <form
                    action={route}
                    method="POST"
                    className="flex flex-col items-center gap-4"
                >
                    {/* <input type="hidden" name="from" value="account"/> */}
                    {searchParams.info === 'name' ? (
                        <>
                            <span className="w-[90%] text-left">
                                <h3 className="text-sm font-semibold">
                                    First Name
                                </h3>
                                <Input
                                    type="text"
                                    name="firstName"
                                    defaultValue={searchParams.firstName}
                                />
                            </span>
                            <span className="w-[90%] text-left">
                                <h3 className="text-sm font-semibold">
                                    Last Name
                                </h3>
                                <Input
                                    type="text"
                                    name="lastName"
                                    defaultValue={searchParams.lastName}
                                />
                            </span>
                        </>
                    ) : (
                        <span className="w-[90%] text-left">
                            <h3 className="text-sm font-semibold">{title}</h3>
                            <Input
                                type="text"
                                name={searchParams.info}
                                defaultValue={
                                    searchParams[
                                        searchParams.info as keyof typeof searchParams
                                    ]
                                }
                            />
                        </span>
                    )}
                    <Button
                        className="mt-12 bg-red-500 hover:bg-red-600"
                        type="submit"
                    >
                        Update {title}
                    </Button>
                </form>
            </section>
        </main>
    );
}
