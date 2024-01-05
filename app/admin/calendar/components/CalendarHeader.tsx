// Components
import { Button } from '@/components/ui/button';
import { ChevronRightIcon, ChevronLeftIcon } from '@radix-ui/react-icons';

export default function CalendarHeader() {
    return (
        <header className="header flex lg:max-w-[40%] mx-auto justify-between items-center border-b p-4">
            <span className="text-lg font-bold">2023 November</span>
            <nav className="flex gap-1">
                <Button variant="outline" size="icon" className="p-1">
                    <ChevronLeftIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="p-1">
                    <ChevronRightIcon className="h-4 w-4" />
                </Button>
            </nav>
        </header>
    );
}
