'use client';

import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { UserCircleIcon } from 'lucide-react';
import React from 'react';

export const AuthButton = () => {
        return (
                <>
                        <SignedIn>
                                <UserButton />
                                {/* TODO: Add menu items for signed in users */}
                        </SignedIn>
                        <SignedOut>
                                <SignInButton mode="modal">
                                        <Button
                                                variant={'outline'}
                                                className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/25 rounded-full shadow-none"
                                        >
                                                <UserCircleIcon className="h-8 w-8" />
                                                Sign In
                                        </Button>
                                </SignInButton>
                        </SignedOut>
                </>
        );
};
