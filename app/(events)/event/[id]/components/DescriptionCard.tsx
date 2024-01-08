// Utilities
import Link from 'next/link';
import moment from 'moment';

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

export default function DescriptionCard({
    description,
    end_date,
}: EventDetails) {
    return (
        <Card className="flex flex-col">
            <CardHeader className="space-y-0.5 rounded-t-lg px-4 pb-2 pt-4 text-black md:px-6 md:pt-6">
                <CardTitle className="flex items-center gap-[0.375rem] text-xl">
                    <Info className="size-[1.125rem] text-red-500" /> About
                    Event
                </CardTitle>
            </CardHeader>
            <CardContent className="px-4 py-4 md:px-6">
                <p className="indent-8">{description}</p>
            </CardContent>
            <CardFooter className="flex justify-end px-4 pb-4 md:px-6 md:pb-6">
                <Button
                    className="bg-red-500 hover:bg-red-600"
                    disabled={moment().isAfter(end_date)}
                >
                    <Link href="/qr" className="flex items-center gap-2">
                        <ArrowTopRightIcon className="size-4" />
                        Attend event
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
