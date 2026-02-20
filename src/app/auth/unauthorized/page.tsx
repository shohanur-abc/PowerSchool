import type { Metadata } from 'next';
import { UnauthorizedCard } from '@/features/auth/unauthorized';
import ROUTES from '@/lib/routes';

export const metadata: Metadata = {
    title: 'Access Denied — EduManager',
    description: 'You do not have permission to access this resource.',
};

export default function Page() {
    return (
        <UnauthorizedCard
            title="Access Denied"
            description="You don't have permission to view this page"
            loginHref={ROUTES.auth.login}
            dashboardHref={ROUTES.dashboard.home}
        />
    );
}
