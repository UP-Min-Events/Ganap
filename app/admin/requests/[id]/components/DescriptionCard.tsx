// Icons
import { InfoCircledIcon, ArrowTopRightIcon } from '@radix-ui/react-icons';

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
        <Card className="flex flex-col gap-4 p-4">
            <CardHeader className="space-y-0.5 p-2">
                <CardTitle className="flex">
                    <InfoCircledIcon />
                    &nbsp; About this event
                </CardTitle>
                <CardDescription>by {organizer}</CardDescription>
            </CardHeader>
            <CardContent className="p-2">
                <p className="indent-8">{description}</p>
            </CardContent>
            <CardFooter className="flex justify-end p-2">
                <Button
                    className="bg-red-500 hover:bg-red-100 hover:text-black"
                    disabled
                >
                    <ArrowTopRightIcon className="mr-2 h-4 w-4" /> Attend this
                    event
                </Button>
            </CardFooter>
        </Card>
    );
}
