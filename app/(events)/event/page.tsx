// Feature Components
import DataCard from "./components/(data)/DataCard"
import EventHeader from "./components/EventHeader"
import EventStatus from "./components/EventStatus"
import ScheduleCard from "./components/ScheduleCard"
import DescriptionCard from "./components/DescriptionCard"


export default function Event() {
	return (
		<main>
			<EventHeader />
			<section className="container flex flex-col gap-4 md:max-w-[60%] lg:max-w-[40%]">
				<EventStatus />
				<ScheduleCard />    
				<DescriptionCard />
				<DataCard />
			</section>
		</main>
	)
}