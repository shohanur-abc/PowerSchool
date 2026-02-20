import type { Metadata } from 'next';
import { VerifyEmailCard } from '@/features/auth/verify-email';
import ROUTES from '@/lib/routes';

export const metadata: Metadata = {
    title: 'Verify Your Email — EduManager',
    description: 'Please verify your email address to activate your EduManager account.',
};

export default function Page() {
    return (
        <VerifyEmailCard
            title="Verify Your Email"
            description="Please verify your email address to continue using EduManager"
            loginHref={ROUTES.auth.login}
        />
    );
}
