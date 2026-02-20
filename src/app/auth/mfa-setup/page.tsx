import type { Metadata } from 'next';
import { MfaSetupCard } from '@/features/auth/mfa-setup';
import ROUTES from '@/lib/routes';

export const metadata: Metadata = {
    title: 'Set Up Two-Factor Authentication — EduManager',
    description: 'Secure your EduManager account with two-factor authentication.',
};

export default function Page() {
    return (
        <MfaSetupCard
            title="Set Up Two-Factor Authentication"
            description="Add an extra layer of security to your school management account"
            skipHref={ROUTES.dashboard.home}
        />
    );
}
