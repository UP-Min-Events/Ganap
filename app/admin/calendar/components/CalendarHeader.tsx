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
        <header className="w-full flex items-center justify-between sm:justify-start gap-6 border-b pb-4">
            <Badge className="text-lg font-bold text-card-foreground shadow bg-white hover:bg-white min-w-[10rem] justify-center  ">
                {month}
            </Badge>
            <nav className="flex gap-2">
                <Button
                    onClick={previousMonth}
                    variant="outline"
                    size="icon"
                    className="p-1 bg-white hover:bg-red-100 hover:text-red-500"
                >
                    <ChevronLeftIcon className="h-4 w-4" />
                </Button>
                <Button
                    onClick={nextMonth}
                    variant="outline"
                    size="icon"
                    className="p-1 bg-white hover:bg-red-100 hover:text-red-500"
                >
                    <ChevronRightIcon className="h-4 w-4" />
                </Button>
            </nav>
        </header>
    );
}
