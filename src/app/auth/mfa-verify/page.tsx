import type { Metadata } from 'next';
import { MfaVerifyForm } from '@/features/auth/mfa-verify';
import ROUTES from '@/lib/routes';

export const metadata: Metadata = {
    title: 'Two-Factor Authentication — EduManager',
    description: 'Enter your authentication code to sign in to EduManager.',
};

export default function Page() {
    return (
        <MfaVerifyForm
            title="Two-Factor Authentication"
            description="Enter the 6-digit code from your authenticator app"
            loginHref={ROUTES.auth.login}
        />
    );
}
