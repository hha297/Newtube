import { HydrateClient } from '@/trpc/server';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
export default function Home() {
        return (
                <HydrateClient>
                        <Suspense fallback="Loading...">
                                <ErrorBoundary fallback={<div>Something went wrong</div>}></ErrorBoundary>
                        </Suspense>
                </HydrateClient>
        );
}
