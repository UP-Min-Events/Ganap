import PageHeader from "@/components/(nav)/PageHeader";
import ButtonMenu from "@/components/(nav)/ButtonMenu";
import Calendar from "./components/Calendar";

export default function calendar() {
    return (
        <main className="min-h-screen flex flex-col items-center">
            <PageHeader />
            <Calendar />
            <ButtonMenu />
        </main>
    )
}