// Utilities
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function DownloadableFormCard() {
    return (
        <Card className="flex flex-col gap-6 lg:gap-12 p-4 lg:p-6 lg:w-[80%]">
            <CardHeader className="space-y-0.5 p-0">
                <CardTitle className="text-2xl">Form 1</CardTitle>
                <CardDescription>
                    A form to fill out the organization&apos;s event request.
                </CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-col-reverse lg:flex-row lg:justify-between space-x-2 p-0">
                <Button variant="ghost" className="md:text-sm p-0">Delete</Button>
                <Button className="bg-var-primary-30 hover:bg-var-primary-20">Download</Button>
            </CardFooter>
        </Card>   
    )
}