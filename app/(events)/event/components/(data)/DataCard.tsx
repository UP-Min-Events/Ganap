// Utilities
import { Attendee, columns } from "./DataColumns"
import { DataTable } from "./DataTable"

// Icons
import { FileTextIcon, DownloadIcon } from "@radix-ui/react-icons"

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

  async function getEventData(): Promise<Attendee[]> {
	// Fetch data from your API here.
	return [
	  {
		id: "728ed52f",
		fullName: "Anakin Pactores",
		yearLevel: "1",
		degreeProgram: "BSFT"
	  },
		{
			id: "729ed52f",
			fullName: "Rafael Paderna",
			yearLevel: "2",
			degreeProgram: "BSAM"
		},
		{
			id: "730ed52f",
			fullName: "Nhyl Bryle",
			yearLevel: "3",
			degreeProgram: "BSCS"
		},
	  // ...
	]
  }

export default async function DataCard() {
	const data = await getEventData()

  return (
		<Card className="flex flex-col gap-4 p-4">
			<CardHeader className="space-y-0.5 p-2">
				<CardTitle className="flex">
					<FileTextIcon />
					&nbsp; Statistics
				</CardTitle>
				<CardDescription># Participants</CardDescription>
			</CardHeader>
			<CardContent className="p-2">
				<DataTable columns={columns} data={data} />
			</CardContent>
			<CardFooter className="flex justify-end p-2">
				<Button className="bg-red-500 hover:bg-red-100 hover:text-black">
					<DownloadIcon className="mr-2 h-4 w-4" /> Download CSV
				</Button>
			</CardFooter>
		</Card>
  )
}