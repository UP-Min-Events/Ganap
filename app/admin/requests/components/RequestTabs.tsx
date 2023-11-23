import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EventTabs() {
    const tabData = [
        { value: "pending", label: "Pending", colorClass: "data-[state=active]:bg-red-500 data-[state=active]:text-white" },
        { value: "approved", label: "Approved", colorClass: "data-[state=active]:bg-red-500 data-[state=active]:text-neutral-100" },
        { value: "rejected", label: "Rejected", colorClass: "data-[state=active]:bg-red-500 data-[state=active]:text-neutral-100" },
    ];

    return (
        <Tabs defaultValue={"pending"} className="w-full xl:max-w-[75%] mx-auto flex flex-col gap-4">
            <TabsList className="mx-auto">
                {tabData.map((tab, index) => (
                    <TabsTrigger
                        key={index}
                        value={tab.value}
                        className={`${tab.colorClass} w-[6rem]`}
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