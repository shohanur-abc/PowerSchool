import type { Metadata } from 'next';
import { LoginForm } from '@/features/auth/login';
import ROUTES from '@/lib/routes';

export const metadata: Metadata = {
    title: 'Sign In — EduManager',
    description: 'Sign in to your EduManager school management account.',
};

export default function Page() {
    return (
        <LoginForm
            title="Welcome Back"
            description="Sign in to your school management account"
            forgotPasswordHref={ROUTES.auth.forgotPassword}
            signupHref={ROUTES.auth.signup}
        />
    );
}
