import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EventTabs() {
    const user = 'admin'

    const tabData = user === 'admin'
        ? [
            { value: "pending", label: "Pending", colorClass: "text-yellow-500" },
            { value: "completed", label: "Completed", colorClass: "text-var-secondary-20" },
            { value: "closed", label: "Closed", colorClass: "text-var-primary-30" },
        ] : [
            { value: "upcoming", label: "Upcoming", colorClass: "text-var-primary-30, data-[state=active]:text-var-secondary-20" },
            { value: "ongoing", label: "Ongoing", colorClass: "text-var-primary-30, data-[state=active]:text-var-secondary-20" },
            { value: "past", label: "Past", colorClass: "text-var-primary-30, data-[state=active]:text-var-secondary-20" },
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