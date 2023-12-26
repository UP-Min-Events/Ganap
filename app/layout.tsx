// Utilities
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { EventProviders } from '@/contexts/EventContextProvider';

// Components
import PageHeader from '@/components/(nav)/PageHeader';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Ganap',
    description: 'An event management system for UP Mindanao',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <EventProviders>{children}</EventProviders>
                </ThemeProvider>
                <Toaster />
            </body>
        </html>
    );
}
