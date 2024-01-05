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
            <Button className=" bg-red-500 hover:bg-red-600 text-light-yellow-100 hover:text-white w-full h-[2.75rem] lg:h-[3.5rem] rounded-2xl text-base lg:text-xl font-semibold">
                Sign in
            </Button>
        </form>
    );
}
