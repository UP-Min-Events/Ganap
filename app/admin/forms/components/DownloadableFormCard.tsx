// Components
import DeleteForm from './DeleteForm';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

// Utilities
import Link from 'next/link';

export default function DownloadableFormCard() {
    return (
        <Card className="flex w-full flex-col gap-6 p-4 lg:gap-8 lg:p-6">
            <CardHeader className="space-y-0.5 p-0">
                <CardTitle className="flex justify-between text-2xl font-bold">
                    Form 1 <DeleteForm />
                </CardTitle>
                <CardDescription className="text-clip leading-4">
                    A form to fill out the organization&apos;s event request.
                </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end gap-4 p-0">
                <Link href="#">
                    <Button
                        className="rounded-xl bg-white hover:bg-red-100 hover:text-red-500"
                        variant="outline"
                    >
                        <Eye className="mr-2 size-4" /> Preview
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
