// Components
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRightIcon, ChevronLeftIcon } from '@radix-ui/react-icons';

interface Props {
    month: string;
    nextMonth: () => void;
    previousMonth: () => void;
}

export default function CalendarHeader({
    month,
    nextMonth,
    previousMonth,
}: Props) {
    return (
        <header className="flex w-full items-center justify-between gap-6 border-b pb-4 sm:justify-start">
            <Badge className="min-w-[10rem] justify-center bg-white text-lg font-bold text-card-foreground shadow hover:bg-white  ">
                {month}
            </Badge>
            <nav className="flex gap-2">
                <Button
                    onClick={previousMonth}
                    variant="outline"
                    size="icon"
                    className="bg-white p-1 hover:bg-red-100 hover:text-red-500"
                >
                    <ChevronLeftIcon className="h-4 w-4" />
                </Button>
                <Button
                    onClick={nextMonth}
                    variant="outline"
                    size="icon"
                    className="bg-white p-1 hover:bg-red-100 hover:text-red-500"
                >
                    <ChevronRightIcon className="h-4 w-4" />
                </Button>
            </nav>
        </header>
    );
}
