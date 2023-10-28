'use client'

// Utilities
import { DoubleArrowRightIcon } from "@radix-ui/react-icons"
import Link from 'next/link'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


export default function EventCard() {
    return (
        <Link href="/event">
            <Card className="flex justify-between items-center group hover:bg-neutral-200 p-4 mb-4 lg:p-6 select-none">
                <section className="flex flex-col gap-4">
                    <CardHeader className="space-y-0 pl-2 py-0">
                        <CardTitle className="text-2xl font-bold">Event Title</CardTitle>
                        <CardDescription className="leading-3">by Event Host</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm leading-3 space-y-1 pl-2 py-0">
                        <p className="font-semibold text-var-primary-20 text-normal">Event Date, Time</p>
                        <p>Venue</p>
                    </CardContent>
                </section>
                <DoubleArrowRightIcon className="w-12 h-12 group-hover:text-var-primary-20" />
            </Card>
        </Link>
    )
}