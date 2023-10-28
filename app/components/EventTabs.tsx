import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EventTabs() {
    return (
        <Tabs defaultValue="upcoming" className="w-ful flex flex-col">
            <TabsList className="mx-auto">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
                <TabsTrigger value="past">Past</TabsTrigger>
            </TabsList> 
            <TabsContent value="upcoming">Upcoming Events</TabsContent>
            <TabsContent value="ongoing">Ongoing Events</TabsContent>
            <TabsContent value="past">Past Events</TabsContent>
        </Tabs>
    )
}