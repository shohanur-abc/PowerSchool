import type { Metadata } from 'next';
import { SessionTimeoutCard } from '@/features/auth/session-timeout';
import ROUTES from '@/lib/routes';

export const metadata: Metadata = {
    title: 'Session Expired — EduManager',
    description: 'Your session has expired. Please sign in again to continue.',
};

export default function Page() {
    return (
        <SessionTimeoutCard
            title="Session Expired"
            description="You've been signed out due to inactivity"
            loginHref={ROUTES.auth.login}
        />
    );
}
