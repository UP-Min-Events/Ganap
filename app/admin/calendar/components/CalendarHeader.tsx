// Components
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
        <header className="header mx-auto flex items-center justify-between border-b p-4 lg:max-w-[40%]">
            <span className="text-lg font-bold">{month}</span>
            <nav className="flex gap-1">
                <Button
                    onClick={previousMonth}
                    variant="outline"
                    size="icon"
                    className="p-1"
                >
                    <ChevronLeftIcon className="h-4 w-4" />
                </Button>
                <Button
                    onClick={nextMonth}
                    variant="outline"
                    size="icon"
                    className="p-1"
                >
                    <ChevronRightIcon className="h-4 w-4" />
                </Button>
            </nav>
        </header>
    );
}
