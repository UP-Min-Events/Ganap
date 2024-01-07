import { useToast } from '@/components/ui/use-toast';
import { PencilIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/(nav)/PageHeader';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import ConfirmEdit from './components/ConfirmEdit';

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
            <section className="px-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">
                            Editing {title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                            Note that this will{' '}
                            <span className="font-bold text-red-500">
                                need approval
                            </span>{' '}
                            from the admin before it will be reflected on your
                            account.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form
                            action={route}
                            method="POST"
                            className="flex flex-col items-center gap-4"
                        >
                            {/* <input
                                className="bg-white" type="hidden" name="from" value="account"/> */}
                            {searchParams.info === 'name' ? (
                                <>
                                    <span className="w-[90%] text-left">
                                        <h3 className="text-sm font-semibold">
                                            First Name
                                        </h3>
                                        <Input
                                            className="bg-white"
                                            type="text"
                                            name="firstName"
                                            defaultValue={
                                                searchParams.firstName
                                            }
                                        />
                                    </span>
                                    <span className="w-[90%] text-left">
                                        <h3 className="text-sm font-semibold">
                                            Last Name
                                        </h3>
                                        <Input
                                            className="bg-white"
                                            type="text"
                                            name="lastName"
                                            defaultValue={searchParams.lastName}
                                        />
                                    </span>
                                </>
                            ) : (
                                <span className="w-[90%] text-left">
                                    <h3 className="text-sm font-semibold">
                                        {title}
                                    </h3>
                                    <Input
                                        className="bg-white"
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
                            <ConfirmEdit title={title} />
                        </form>
                    </CardContent>
                </Card>
            </section>
        </main>
    );
}
