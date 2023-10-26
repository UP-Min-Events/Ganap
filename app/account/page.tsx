import SignoutButton from "@/components/(buttons)/SignoutButton";
import AppInfoAccordion from "@/components/(account)/AppInfoAccordion";
import ButtonMenu from "@/components/(nav)/ButtonMenu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { AccountInfoTabs } from "@/components/(account)/AccountInfoTabs";
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
            {/* <CallToActionButton action="Sign Out" /> */}
            <ButtonMenu />
        </main>
    )
}