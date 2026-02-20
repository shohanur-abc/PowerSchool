import type { Metadata } from 'next';
import { ResetPasswordForm } from '@/features/auth/reset-password';
import ROUTES from '@/lib/routes';

export const metadata: Metadata = {
    title: 'Reset Password — EduManager',
    description: 'Create a new password for your EduManager account.',
};

export default function Page() {
    return (
        <ResetPasswordForm
            title="Create New Password"
            description="Your new password must be different from your previous password"
            loginHref={ROUTES.auth.login}
        />
    );
}
