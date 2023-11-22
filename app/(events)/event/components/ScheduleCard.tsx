// Icons
import { CalendarIcon, ClockIcon, DrawingPinIcon } from "@radix-ui/react-icons"

// shadCN Components
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ScheduleCard() {
    return (
        <Card className="flex flex-col">
            <CardHeader className="space-y-0.5 px-4 pt-4 pb-2">
                <CardTitle className="flex items-center gap-[0.375rem] text-lg">
                    <CalendarIcon /> Schedule
                </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="p-4">
                <div className="flex justify-between">
                    <p className="flex items-center gap-1"><CalendarIcon />Date</p> 
                    <p className="font-medium">October 25, 2023</p>
                </div>
                <div className="flex justify-between">
                    <p className="flex items-center gap-1"><ClockIcon />Time</p> 
                    <p className="font-medium">5:56 P.M.</p>
                </div>
                <div className="flex justify-between">
                    <p className="flex items-center gap-1"><DrawingPinIcon />Venue</p> 
                    <p className="font-medium">CSM Room 222</p>
                </div>
            </CardContent>
        </Card>
    )
}