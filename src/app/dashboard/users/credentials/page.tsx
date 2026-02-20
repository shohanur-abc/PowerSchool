import type { Metadata } from 'next';
import { UserCredentials } from '@/features/dashboard/users';

export const metadata: Metadata = {
    title: 'User Credentials — EduManager',
    description: 'Manage passwords and credential security for all users',
};

export default function Page() {
    return (
        <UserCredentials
            users={[
                { name: 'Karim Admin', email: 'admin@school.edu', lastPasswordChange: '3 days ago', credentialStatus: 'normal' },
                { name: 'Rina Begum', email: 'principal@school.edu', lastPasswordChange: '1 week ago', credentialStatus: 'normal' },
                { name: 'Farhan Hossain', email: 'farhan@school.edu', lastPasswordChange: '30 days ago', credentialStatus: 'force-change' },
                { name: 'Naila Islam', email: 'naila@school.edu', lastPasswordChange: '90 days ago', credentialStatus: 'locked' },
                { name: 'Mr. Rahman', email: 'rahman.parent@email.com', lastPasswordChange: '2 weeks ago', credentialStatus: 'normal' },
            ]}
        />
    );
}
