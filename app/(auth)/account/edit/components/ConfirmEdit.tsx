"use client";
// Components
import { PencilIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function ConfirmEdit({ title } : { title: string }) {
  const { toast } = useToast();

  return (
    <Button
      className="mt-12 bg-red-500 hover:bg-red-600 flex items-center"
      type="submit"
      onClick={() => {
          toast({
              title: 'Update Request Sent',
              description: 'It may take a while for the admin to approve your request.',
              duration: 5000,
          });
      }}
    >
      <PencilIcon className="size-4 mr-2" /> Update {title}
    </Button>
  )
}