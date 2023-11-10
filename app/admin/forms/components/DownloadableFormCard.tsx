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
import { Cross1Icon } from "@radix-ui/react-icons"

export default function DownloadableFormCard() {
    return (
        <Card className="flex flex-col gap-6 lg:gap-12 p-4 lg:p-6 max-w-[90%]">
            <CardHeader className="space-y-0.5 p-0">
                <CardTitle className="flex justify-between text-2xl">Form 1 <Cross1Icon /></CardTitle>
                <CardDescription className="text-clip leading-4">
                    A form to fill out the organization&apos;s event request.
                </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end gap-4 p-0">
                <Button variant="ghost">Preview</Button>
                <Button className="bg-red-500 hover:bg-red-600 rounded-xl px-8 h-10">Download</Button>
            </CardFooter>
        </Card>     
    )
}   