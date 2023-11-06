import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RequestTabs() {
    const tabData = [
        { value: "pending", label: "Pending", colorClass: "data-[state=active]:bg-red-400 data-[state=active]:text-white" },
        { value: "completed", label: "Completed", colorClass: "data-[state=active]:bg-red-500 data-[state=active]:text-neutral-100" },
        { value: "closed", label: "Closed", colorClass: "data-[state=active]:bg-red-600 data-[state=active]:text-neutral-100" },
    ];

    return (
        <Tabs defaultValue={"pending"} className="w-full lg:max-w-[75%] mx-auto flex flex-col">
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
                    {tab.label} Requests
                </TabsContent>
            ))}
        </Tabs>
    )
}