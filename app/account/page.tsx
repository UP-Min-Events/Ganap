import BackButton from "@/components/(buttons)/BackButton";
import AppInfoAccordion from "@/components/AppInfoAccordion";
import CallToActionButton from "@/components/(buttons)/CallToActionButton";
import ButtonMenu from "@/components/(nav)/ButtonMenu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function Account(){
    return (
        <main className="min-h-[calc(100vh + 6rem)] flex flex-col gap-4 items-center">
            <header className="flex flex-col w-full pt-4">
                <BackButton />
                <h1 className="text-center text-3xl lg:text-5xl font-bold">Account</h1>
            </header>
            <Separator />
            <section className="flex flex-col items-center">
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
            <section className="w-[90%] md:w-[50%] lg:w-[40%] px-6">
                <AppInfoAccordion />
            </section>
            <CallToActionButton action="Sign Out" />
            <ButtonMenu />
        </main>
    )
}