import PageHeader from '@/components/(nav)/PageHeader';
import OnboardingForm from '@/app/(auth)/onboarding/components/OnboardingForm';
import { cookies } from 'next/headers';

export default function Onboarding() {
    const cookieStore = cookies();
    const sub = cookieStore.get('sub');

    return (
        <main className="flex min-h-screen flex-col items-center">
            <PageHeader />
            <OnboardingForm sub={sub?.value!} />
        </main>
    );
}
