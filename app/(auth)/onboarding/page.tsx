import PageHeader from "@/components/(nav)/PageHeader"
import OnboardingForm from "@/components/OnboardingForm"

export default function Onboarding() {
    return (
        <main className="min-h-screen flex flex-col items-center">
            <PageHeader />
            <section className="w-full lg:max-w-[20%] mt-8 px-6">
                <OnboardingForm />
            </section>
        </main>
    )
}