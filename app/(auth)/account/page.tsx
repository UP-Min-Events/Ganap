// Components
import PageHeader from "@/components/(nav)/PageHeader";
import AccountInfo from "./components/AccountInfo";
import AppInfoAccordion from "./components/AppInfoAccordion"
import CallToActionButton from "@/components/(buttons)/CallToActionButton";

// shadCN Components
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator";

export default function Account() {
    return (
        <main className="min-h-screen flex flex-col items-center">
            <PageHeader />
            <section className="flex flex-col items-center pb-4">
                <Avatar className="w-32 h-32 mb-4">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>HI</AvatarFallback>
                </Avatar>
                <>
                    <h1 className="text-2xl font-bold">Nhyl Bryle</h1>
                    <p>emailaddress@up.edu.ph</p>
                    <p>2021-XXXXX</p>
                </>
            </section>
            <section className="w-[90%] md:w-[50%] lg:w-[40%] flex flex-col items-center px-6">
                {/* <span className="flex items-center space-x-2 mb-2">
                    <Switch id="toggle-account-info" />
                    <Label htmlFor="toggle-account-info">View Account Info</Label>
                </span> */}
                <AccountInfo />
            </section>
            {/* <Separator className="my-4 w-[100%] md:w-[50%] lg:w-[40%]" /> */}
            <section className="w-[90%] md:w-[50%] lg:w-[40%] px-6 mt-6">
                <AppInfoAccordion />
            </section>
            {/* <nav className="relative mt-12">
                <CallToActionButton action="Sign Out" />
            </nav> */}
        </main>
    )
}