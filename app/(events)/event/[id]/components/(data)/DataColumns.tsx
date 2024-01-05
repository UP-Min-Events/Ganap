'use client';

import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Attendee = {
    id: string;
    fullName: string;
    yearLevel: string;
    degreeProgram: string;
};

export const columns: ColumnDef<Attendee>[] = [
    {
        accessorKey: 'fullName',
        header: 'Full Name',
    },
    {
        accessorKey: 'yearLevel',
        header: 'Year Level',
    },
    {
        accessorKey: 'degreeProgram',
        header: 'Degree Program',
    },
];
