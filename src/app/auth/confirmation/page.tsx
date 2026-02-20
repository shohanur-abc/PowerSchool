import type { Metadata } from 'next';
import { ConfirmationCard } from '@/features/auth/confirmation';
import ROUTES from '@/lib/routes';

export const metadata: Metadata = {
    title: 'Check Your Email — EduManager',
    description: 'We sent a confirmation email. Please check your inbox to verify your account.',
};

export default function Page() {
    return (
        <ConfirmationCard
            title="Check Your Email"
            description="We've sent a confirmation link to your email address"
            email="admin@school.edu"
            loginHref={ROUTES.auth.login}
        />
    );
}
