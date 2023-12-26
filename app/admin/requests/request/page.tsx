// UI Components
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import BackButton from "@/components/(buttons)/BackButton"

// Feature Components
import ScheduleCard from "./components/ScheduleCard"
import CommentDialog from "./components/CommentDialog"
import ApproveRequest from "./components/ApproveRequest"
import DescriptionCard from "./components/DescriptionCard"

export default function Request() {
    return (
			<main>
				<header className="px-6 w-full flex items-center justify-center relative bg-red-500 text-white py-4 overflow-hidden">
					<nav className="flex flex-row relative justify-center items-center min-w-full md:min-w-[60%] lg:min-w-[40%] xl:min-w-[30%]">
						<BackButton />
						<h1 className="text-[1.75rem] font-semibold text-center">Event Title</h1>	
					</nav>
				</header>
				<Separator className="mb-4" />
				<section className="container flex flex-col gap-4 md:max-w-[60%] lg:max-w-[40%]">
					<h3 className="flex justify-center items-center text-center text-sm font-medium">
						Status:&nbsp; <Badge>Event Status</Badge>
					</h3>
					<ScheduleCard />    
					<DescriptionCard />
					<div className="flex gap-4 justify-center">
						<CommentDialog />
						<ApproveRequest />
					</div>
				</section>
			</main>
    )
}