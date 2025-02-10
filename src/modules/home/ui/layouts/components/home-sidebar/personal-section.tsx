'use client';

import {
        SidebarGroup,
        SidebarGroupContent,
        SidebarMenu,
        SidebarMenuButton,
        SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useAuth, useClerk } from '@clerk/nextjs';
import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from 'lucide-react';
import Link from 'next/link';

const items = [
        {
                title: 'History',
                url: '/playlist/history',
                icon: HistoryIcon,
                auth: true,
        },
        {
                title: 'Liked Videos',
                url: '/playlist/liked',
                icon: ThumbsUpIcon,
                auth: true,
        },
        {
                title: 'All Playlists',
                url: '/playlist',
                icon: ListVideoIcon,
                auth: true,
        },
];

export const PersonalSection = () => {
        const { isSignedIn } = useAuth();
        const clerk = useClerk();
        return (
                <SidebarGroup>
                        <SidebarGroupContent>
                                <SidebarMenu>
                                        {items.map((item) => (
                                                <SidebarMenuItem key={item.title}>
                                                        <SidebarMenuButton
                                                                tooltip={item.title}
                                                                asChild
                                                                isActive={false} // TODO: Change to look at pathname
                                                                onClick={(e) => {
                                                                        if (item.auth && !isSignedIn) {
                                                                                e.preventDefault();
                                                                                return clerk.openSignIn();
                                                                        }
                                                                }}
                                                        >
                                                                <Link href={item.url}>
                                                                        <item.icon />
                                                                        <span className="text-sm">{item.title}</span>
                                                                </Link>
                                                        </SidebarMenuButton>
                                                </SidebarMenuItem>
                                        ))}
                                </SidebarMenu>
                        </SidebarGroupContent>
                </SidebarGroup>
        );
};
