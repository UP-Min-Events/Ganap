// shadCN Components
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function AppInfoAccordion() {
	return (
		<section className="w-[90%] md:w-[50%] lg:w-[40%] px-6 my-6">
			<Accordion type="single" collapsible className="w-full xl:max-w-[75%] mx-auto rounded-lg shadow-[0_2px_2px_0_rgba(0,0,0,0.2)]">    
				<AccordionItem value="item-1" className="border border-neutral-300 border-b-0 rounded-t-lg">
					<AccordionTrigger>About the app</AccordionTrigger>
					<AccordionContent className="indent-8 text-justify px-4 pt-2">
						<p>Ganap is an event management system developed by Nhyl Bryle Iba&#241;ez, Anakin Skywalker Pactores, and Rafael Paderna.</p>
						<p>This application was initially developed as a final project for CMSC 127: File and Database Management Systems. Through evolving interest, this project was continued into the application you are using right now.</p>
						<p>As of October 2023, this application is still in development in collaboration with the Student Organizations and Activities Section of the UP Mindanao&apos;s Office of Student Affairs.</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2" className="border border-neutral-300 border-b-0">
					<AccordionTrigger>Notifications</AccordionTrigger>
					<AccordionContent className="px-4 pt-2">
						<div className="flex items-center space-x-2 mb-2">
							<Switch id="toggle-notifications" />
							<Label htmlFor="enable-notifications">Enable Notifications</Label>
						</div>
						<span className="text-sm text-red-600 font-medium">This feature is not yet functional.</span>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3" className="border border-neutral-300 rounded-b-lg">
					<AccordionTrigger>Privacy and Safety</AccordionTrigger>
					<AccordionContent className="indent-8 text-justify px-4 pt-2">
						For safety purposes, all personal information will be kept confidential and will only be used for official SOAS documents such as event attendance sheets.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</section>
	)
}