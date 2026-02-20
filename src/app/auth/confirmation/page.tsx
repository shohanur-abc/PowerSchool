import type { Metadata } from 'next';
import { ConfirmationCard } from '@/features/auth/confirmation';
import ROUTES from '@/lib/routes';

export const metadata: Metadata = {
    title: 'Check Your Email — EduManager',
    description: 'We sent a confirmation email. Please check your inbox to verify your account.',
};

interface PageProps {
    searchParams: Promise<{ email?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
    const { email } = await searchParams;
    return (
        <ConfirmationCard
            title="Check Your Email"
            description="We've sent a confirmation link to your email address"
            email={email ?? 'your email address'}
            loginHref={ROUTES.auth.login}
        />
    );
}
