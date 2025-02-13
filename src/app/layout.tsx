import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { TRPCProvider } from '@/trpc/client';

const leagueSpartan = League_Spartan({
        subsets: ['latin'],
        variable: '--font-league-spartan',
});
export const metadata: Metadata = {
        title: 'NewTube',
        description: 'NewTube',
};

export default function RootLayout({
        children,
}: Readonly<{
        children: React.ReactNode;
}>) {
        return (
                <ClerkProvider afterSignOutUrl={'/'}>
                        <html lang="en">
                                <body className={leagueSpartan.className}>
                                        <TRPCProvider>{children}</TRPCProvider>
                                </body>
                        </html>
                </ClerkProvider>
        );
}
