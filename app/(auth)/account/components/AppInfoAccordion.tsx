// shadCN Components
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function AppInfoAccordion() {
    return (
        <section className="my-6 w-[90%] px-6 md:w-[50%] lg:w-[40%]">
            <Accordion
                type="single"
                collapsible
                className="mx-auto w-full rounded-lg shadow-[0_2px_2px_0_rgba(0,0,0,0.2)] xl:max-w-[75%]"
            >
                <AccordionItem
                    value="item-1"
                    className="rounded-t-lg border border-b-0 border-neutral-300"
                >
                    <AccordionTrigger className="bg-white hover:bg-white hover:text-red-500 text-black rounded-t-lg">
                        About the app
                    </AccordionTrigger>
                    <AccordionContent className="bg-white px-4 pt-2 text-justify indent-8">
                        <p>
                            Ganap is an event management system developed by
                            Nhyl Bryle Iba&#241;ez, Anakin Skywalker Pactores,
                            and Rafael Paderna.
                        </p>
                        <p>
                            This application was initially developed as a final
                            project for CMSC 127: File and Database Management
                            Systems. Through evolving interest, this project was
                            continued into the application you are using right
                            now.
                        </p>
                        <p>
                            As of January 2024, this application is still in
                            continuous development in collaboration with the Student
                            Organizations and Activities Section of the UP
                            Mindanao&apos;s Office of Student Affairs.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem
                    value="item-2"
                    className="border border-b-0 border-neutral-300"
                >
                    <AccordionTrigger className="bg-white hover:bg-white hover:text-red-500 text-black rounded">
                        Notifications
                    </AccordionTrigger>
                    <AccordionContent className="bg-white px-4 pt-2">
                        <div className="mb-2 flex items-center space-x-2">
                            <Switch id="toggle-notifications" />
                            <Label htmlFor="enable-notifications">
                                Enable Notifications
                            </Label>
                        </div>
                        <span className="text-sm font-medium text-red-500">
                            This feature is not yet functional.
                        </span>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem
                    value="item-3"
                    className="rounded-b-lg border border-neutral-300"
                >
                    <AccordionTrigger className="bg-white hover:bg-white hover:text-red-500 text-black rounded-b-lg">
                        Privacy and Safety
                    </AccordionTrigger>
                    <AccordionContent className="bg-white px-4 pt-2 text-justify indent-8 rounded-b-lg">
                        For safety purposes, all personal information will be
                        kept confidential and will only be used for official
                        SOAS documents.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    );
}
