import PageHeader from "@/components/(nav)/PageHeader";
import ButtonMenu from "@/components/(nav)/ButtonMenu";

export default function Calendar(){
    return (
        <main className="min-h-screen flex flex-col items-center">
            <PageHeader />
            <ButtonMenu />
        </main>
    )
}