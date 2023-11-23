// Utilities
import Link from "next/link"

// Icons
import { InfoCircledIcon, ArrowTopRightIcon } from "@radix-ui/react-icons"

// shadCN Components
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"


export default function DescriptionCard() {
	return (
		<Card className="flex flex-col">
			<CardHeader className="space-y-0.5 px-4 pt-4 pb-2">
				<CardTitle className="flex items-center gap-[0.375rem] text-lg">
					<InfoCircledIcon /> About Event
				</CardTitle>
			</CardHeader>
			<Separator />
			<CardContent className="p-4">
				<p className="indent-8">Join the University of the Philippines Mindanao as it holds its annual Dula at November 9-11, 2023! Witness as the colleges battle it out in fierce battles in varying sports!</p>
			</CardContent>
			<CardFooter className="flex justify-end px-4 pb-4">
				<Link href="/qr">
					<Button className="bg-red-500 hover:bg-red-600">
							<ArrowTopRightIcon className="mr-2 h-4 w-4" /> Attend this event
					</Button>
				</Link> 
			</CardFooter>
		</Card>
	)
}