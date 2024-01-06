// Components
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import BackButton from '@/components/(buttons)/BackButton';
import { PencilIcon } from 'lucide-react';

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
        <main className="min-h-screen flex flex-col items-center">
            <header className="px-6 w-full flex items-center justify-center relative bg-red-500 text-white py-4 overflow-hidden">
                <nav className="flex flex-row relative justify-center items-center min-w-full md:min-w-[60%] lg:min-w-[40%] xl:min-w-[30%]">
                    <BackButton />
                    <h1 className="text-[1.5rem] lg:text-[1.75rem]] font-semibold text-center">
                        Edit Account Info
                    </h1>
                </nav>
            </header>
            <section className="w-full md:w-[50%] lg:w-[40%] flex flex-col items-center p-6">
                <h2 className="text-xl font-bold mb-6 flex gap-1 items-center">
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
                            <span className="text-left w-[90%]">
                                <h3 className="text-sm font-semibold">
                                    First Name
                                </h3>
                                <Input
                                    type="text"
                                    name="firstName"
                                    defaultValue={searchParams.firstName}
                                />
                            </span>
                            <span className="text-left w-[90%]">
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
                        <span className="text-left w-[90%]">
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
