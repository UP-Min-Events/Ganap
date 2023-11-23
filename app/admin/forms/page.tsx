// Components
import FormFeed from "./components/FormFeed"
import ButtonMenu from "@/components/(nav)/ButtonMenu"
import PageHeader from "@/components/(nav)/PageHeader"
import { UploadFormSheet } from "./components/UploadFormSheet"

export default function Forms(){
    return (
        <main className="flex flex-col items-center">
            <PageHeader />
            <FormFeed />
            <UploadFormSheet />
            <ButtonMenu />
        </main>
    )
}