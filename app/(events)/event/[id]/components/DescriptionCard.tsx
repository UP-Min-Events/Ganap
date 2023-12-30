// Utilities
import Link from 'next/link';

// Icons
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import { Info } from 'lucide-react';

// shadCN Components
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function DescriptionCard({
    event_description,
}: {
    event_description: string;
}) {
    return (
        <Card className="flex flex-col">
            <CardHeader className="space-y-0.5 px-4 pt-4 pb-2">
                <CardTitle className="flex items-center gap-[0.375rem] text-lg">
                    <Info className="w-[1.25rem] h-[1.25rem]" /> About the event
                </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="p-4">
                <p className="indent-8">{event_description}</p>
            </CardContent>
            <CardFooter className="flex justify-end px-4 pb-4">
                <Link href="/qr">
                    <Button className="bg-red-500 hover:bg-red-600">
                        <ArrowTopRightIcon className="mr-2 h-4 w-4" /> Visit
                        Official Post
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
