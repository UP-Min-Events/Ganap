// Utilities
import { InfoCircledIcon, ArrowTopRightIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function DescriptionCard() {
    return (
        <Card className="flex flex-col gap-4 p-4">
            <CardHeader className="space-y-0.5">
                <CardTitle className="flex">
                    <InfoCircledIcon />
                    &nbsp; About this event
                </CardTitle>
                <CardDescription>by Event Host</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="indent-8">Join the University of the Philippines Mindanao as it holds its annual Dula at November 9-11, 2023! Witness as the colleges battle it out in fierce battles in varying sports!</p>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button className="bg-var-primary-20 hover:bg-var-primary-10 hover:text-black">
                    <ArrowTopRightIcon className="mr-2 h-4 w-4" /> Attend this event
                </Button>
            </CardFooter>
        </Card>
    )
}