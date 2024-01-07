// Icons
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
    organizer,
}: EventDetails) {
    return (
        <Card className="flex flex-col gap-2 p-4">
            <CardHeader className="space-y-0.5 p-2">
                <CardTitle className="flex items-center text-xl gap-2">
                    <Info className="size-[1.25rem]" /> About this event
                </CardTitle>
                <CardDescription>by {organizer}</CardDescription>
            </CardHeader>
            <CardContent className="p-2">
                <p className="indent-8">{description}</p>
            </CardContent>
        </Card>
    );
}
