"use client" 

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
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function ApproveRequest() {
  const { toast } = useToast()

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-green-300 hover:bg-green-400 rounded-full px-8 h-10">Approve Request</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[90%]">
        <AlertDialogHeader>
          <AlertDialogTitle>Approve event request?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will publish the event to the public.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction 
            className="bg-green-300 hover:bg-green-400"
            onClick={() => {
              toast({
                title: "Request Approved!",
                description: "You have successfully approved the event request."
              })
            }}
          >
            Approve
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}