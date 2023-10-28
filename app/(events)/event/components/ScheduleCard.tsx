// Utilities
import { CalendarIcon, ClockIcon, DrawingPinIcon } from "@radix-ui/react-icons"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function ScheduleCard() {
    return (
        <Card className="flex flex-col gap-4 p-4">
            <CardHeader className="space-y-0.5 p-2">
                <CardTitle className="flex">
                    <CalendarIcon />
                    &nbsp; Schedule
                </CardTitle>
                <CardDescription>Event schedule details</CardDescription>
            </CardHeader>
            <CardContent className="p-2">
                <div className="flex justify-between">
                    <p className="flex items-center"><CalendarIcon />&nbsp;Date</p> 
                    <p className="font-medium">October 25, 2023</p>
                </div>
                <div className="flex justify-between">
                    <p className="flex items-center"><ClockIcon />&nbsp;Time</p> 
                    <p className="font-medium">5:56 P.M.</p>
                </div>
                <div className="flex justify-between">
                    <p className="flex items-center"><DrawingPinIcon />&nbsp;Venue</p> 
                    <p className="font-medium">CSM Room 222</p>
                </div>
            </CardContent>
        </Card>
    )
}