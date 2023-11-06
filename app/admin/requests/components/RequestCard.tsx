// Utilities
import Link from 'next/link'

// UI Components
import { DoubleArrowRightIcon } from "@radix-ui/react-icons"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Separator } from '@/components/ui/separator'


export default function RequestCard() {
    return (
        <Link href="/admin/requests/request">
            <Card className="mx-auto xl:max-w-[75%] flex justify-between items-center group hover:bg-neutral-100 pl-4 mb-4 min-h-32 select-none border-neutral-100">
                <section className="flex flex-col gap-4 py-4">
                    <CardHeader className="space-y-0 pl-2 py-0">
                        <h2 className="text-2xl font-bold">Event Title</h2>
                        <CardDescription className="leading-3">by Event Host</CardDescription>  
                    </CardHeader>
                    <CardContent className="text-sm leading-3 space-y-1 pl-2 py-0">
                        <p className="font-semibold text-red-500 text-normal">Event Date, Time, Venue</p>
                        <p>Accomplished # Forms</p>
                    </CardContent>
                </section>
                <section className="w-20 md:w-24 lg:w-28 xl:w-32 rounded-r-xl h-32 bg-neutral-300 group-hover:bg-neutral-400 text-center">
                  {/* <DoubleArrowRightIcon className="w-10 h-10 group-hover:text-red-500" /> */}
                  <span className='text-xs font-medium text-neutral-100'>STATUS</span>
                </section>
            </Card>
        </Link>
    )
} 