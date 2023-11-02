import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EventTabs() {
    const user: string = 'user'

    const tabData = user === 'admin'
        ? [
            { value: "pending", label: "Pending", colorClass: "text-yellow-500" },
            { value: "completed", label: "Completed", colorClass: "text-green-300" },
            { value: "closed", label: "Closed", colorClass: "text-red-600" },
        ] : [
            { value: "upcoming", label: "Upcoming", colorClass: "text-red-600, data-[state=active]:text-green-300" },
            { value: "ongoing", label: "Ongoing", colorClass: "text-red-600, data-[state=active]:text-green-300" },
            { value: "past", label: "Past", colorClass: "text-red-600, data-[state=active]:text-green-300" },
        ];

    return (
        <Tabs defaultValue={user === 'admin' ? "pending" : "upcoming"} className="w-full flex flex-col">
            <TabsList className="mx-auto">
                {tabData.map((tab, index) => (
                    <TabsTrigger
                        key={index}
                        value={tab.value}
                        className={tab.colorClass}
                    >
                        {tab.label}
                    </TabsTrigger>
                ))}
            </TabsList>
            {tabData.map((tab) => (
                <TabsContent key={tab.value} value={tab.value}>
                    {tab.label} {user === 'admin' ? "Requests" : "Events"}
                </TabsContent>
            ))}
        </Tabs>
    )
}