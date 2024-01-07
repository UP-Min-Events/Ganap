// Components
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

export default function GoogleSignIn() {
    return (
        <form
            action="/api/auth/signin"
            method="GET"
            className="flex justify-center"
        >
            <Button className=" h-[2.75rem] w-full rounded-2xl bg-red-500 text-base font-semibold text-light-yellow-100 hover:bg-red-600 hover:text-white lg:h-[3.5rem] lg:text-xl">
                Sign in
            </Button>
        </form>
    );
}
