// Feature Components
import DataCard from "./components/(data)/DataCard"
import EventHeader from "./components/EventHeader"
import EventStatus from "./components/EventStatus"
import ScheduleCard from "./components/ScheduleCard"
import DescriptionCard from "./components/DescriptionCard"
import OrganizerCard from "./components/OrganizerCard"


export default function Event() {
	return (
		<main>
			<EventHeader />
			<section className="container flex flex-col xl:grid grid-cols-3 gap-4 md:max-w-[60%] lg:max-w-[60%] xl:max-w-[50%]">
				<div className="col-span-3"><EventStatus /></div>
				<section className="flex flex-col col-span-2 gap-4">
					<DescriptionCard />
					<DataCard />
				</section>	
				<section className="flex flex-col col-span-1 gap-4">
					<div className="col-span-1"><ScheduleCard /></div>    
					<div className="col-span-1"><OrganizerCard /></div>
				</section>	
			</section>
		</main>
	)
}