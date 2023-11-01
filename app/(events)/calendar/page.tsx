import PageHeader from "@/components/(nav)/PageHeader";
import ButtonMenu from "@/components/(nav)/ButtonMenu";
import Calendar from "./components/Calendar";
import { AddEvent } from "./components/AddEvent";

export default function calendar() {
    return (
        <main className="min-h-screen flex flex-col items-center">
            <PageHeader />
            <AddEvent />
            <Calendar />
            <ButtonMenu />
        </main>
    )
}