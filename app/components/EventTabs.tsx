import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EventTabs() {
    const tabData = [
        { value: "upcoming", label: "Upcoming", colorClass: "data-[state=active]:bg-red-500 data-[state=active]:text-white" },
        { value: "active", label: "Active", colorClass: "data-[state=active]:bg-red-500 data-[state=active]:text-neutral-100" },
        { value: "past", label: "Past", colorClass: "data-[state=active]:bg-red-500 data-[state=active]:text-neutral-100" },
    ];

    return (
        <header>
            <Tabs defaultValue={"upcoming"} className="w-full xl:max-w-[75%] mx-auto flex flex-col gap-2 text-2xl font-bold my-4">
                <TabsList className="mx-auto bg-white w-full">
                    {tabData.map((tab, index) => (
                        <TabsTrigger
                            key={index}
                            value={tab.value}
                            className={`${tab.colorClass} w-[33.33%]`}
                        >
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>
        </header>
    )
}