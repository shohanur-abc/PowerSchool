import type { Metadata } from 'next';
import { SignupForm } from '@/features/auth/signup';
import ROUTES from '@/lib/routes';

export const metadata: Metadata = {
    title: 'Create Account — EduManager',
    description: 'Create your EduManager account and set up your school management platform.',
};

export default function Page() {
    return (
        <SignupForm
            title="Create Your Account"
            description="Set up your school management platform in minutes"
            loginHref={ROUTES.auth.login}
        />
    );
}
