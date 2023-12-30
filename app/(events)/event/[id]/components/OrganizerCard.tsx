// Icons
import { Users, ArrowUpRightSquare, Mail } from 'lucide-react';

// shadCN Components
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export default function OrganizerCard({ organizer }: EventDetails) {
    return (
        <Card className="flex flex-col">
            <CardHeader className="space-y-0.5 px-4 pt-4 pb-2">
                <CardTitle className="flex items-center gap-[0.375rem] [&>svg]:w-4 [&>svg]:h-4 text-lg">
                    <Users /> Organizer
                </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="flex flex-col items-center gap-4 p-4">
                <h3 className="font-bold">{organizer}</h3>
                <p className="text-xs">
                    Organizer details are placed here to let participants know
                    about the organizer/s of the event.
                </p>
                <nav className="flex w-full justify-between">
                    <Button
                        size="sm"
                        className="bg-neutral-500 hover:bg-neutral-600 [&>svg]:w-4 [&>svg]:h-4 flex gap-2"
                    >
                        <ArrowUpRightSquare />
                        View Organizer
                    </Button>
                    <Button
                        size="sm"
                        variant="ghost"
                        className=" [&>svg]:w-4 [&>svg]:h-4 flex gap-1"
                    >
                        <Mail />
                        Contact
                    </Button>
                </nav>
            </CardContent>
        </Card>
    );
}
