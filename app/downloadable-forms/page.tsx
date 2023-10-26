import DownloadableFormCard from "@/components/(admin)/DownloadableFormCard"
import { UploadFormSheet } from "@/components/(admin)/UploadFormSheet"
import PageHeader from "@/components/(nav)/PageHeader"

export default function Forms(){
    return (
        <main>
            <PageHeader />
            <section className="container grid gap-4 grid-cols-2 place-items-center lg:max-w-[50%]">
                <DownloadableFormCard />
                <DownloadableFormCard />
                <DownloadableFormCard />
                <DownloadableFormCard />
            </section>
            <section className="fixed bottom-12 flex w-full justify-center">
                <UploadFormSheet />
            </section>
        </main>
    )
}