// Components
import PageHeader from "@/components/(nav)/PageHeader";
import ButtonMenu from "@/components/(nav)/ButtonMenu";
import AccountQrCode from "./components/AccountQrCode";

export default function QR() {
	return (
		<main className="min-h-screen flex flex-col items-center">
			<PageHeader />
			<AccountQrCode />
			<ButtonMenu />
		</main>
	)
}