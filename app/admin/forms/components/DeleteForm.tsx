// Components
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Cross1Icon } from '@radix-ui/react-icons';

export default function DeleteForm() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 text-red-500 hover:text-red-600"
                >
                    <Cross1Icon className="p-0 m-0" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="w-[90%] bg-light-yellow-100">
                <AlertDialogHeader>
                    <AlertDialogTitle>Delete form?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will delete the form
                        from the database.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="bg-white">Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-red-500 hover:bg-red-600">
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
