import type { Metadata } from 'next';
import { ForgotPasswordForm } from '@/features/auth/forgot-password';
import ROUTES from '@/lib/routes';

export const metadata: Metadata = {
    title: 'Forgot Password — EduManager',
    description: 'Enter your email address to receive a password reset link.',
};

export default function Page() {
    return (
        <ForgotPasswordForm
            title="Forgot Your Password?"
            description="Enter your email and we'll send you a link to reset your password"
            loginHref={ROUTES.auth.login}
        />
    );
}
