import AppInfoAccordion from "./components/AppInfoAccordion"
import CallToActionButton from "@/components/(buttons)/CallToActionButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AccountInfoTabs } from "./components/AccountInfoTabs"
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import PageHeader from "@/components/(nav)/PageHeader";

export default function Account() {
    return (
        <main className="min-h-[calc(100vh + 6rem)] flex flex-col items-center">
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
            <section className="w-[90%] md:w-[50%] lg:w-[40%] flex flex-col items-center">
                <span className="flex items-center space-x-2 mb-2">
                    <Switch id="toggle-account-info" />
                    <Label htmlFor="toggle-account-info">View Account Info</Label>
                </span>
                {/* <AccountInfoTabs /> */}
            </section>
            <section className="w-[90%] md:w-[50%] lg:w-[40%] px-6">
                <AppInfoAccordion />
            </section>
            <nav className="relative mt-12">
                <CallToActionButton action="Sign Out" />
            </nav>
            {/* <ButtonMenu /> */}
        </main>
    )
}