import type { Metadata } from 'next';
import { UsersOverview } from '@/features/dashboard/users';

export const metadata: Metadata = {
    title: 'Users — EduManager',
    description: 'Manage all system users and their access',
};

export default function Page() {
    return (
        <UsersOverview
            stats={[
                { label: 'Total Users', value: '1,595', icon: 'total' },
                { label: 'Active Users', value: '1,421', icon: 'active' },
                { label: 'Inactive Users', value: '174', icon: 'inactive' },
                { label: 'New This Month', value: '38', icon: 'new' },
            ]}
            users={[
                { name: 'Karim Admin', email: 'admin@school.edu', role: 'Admin', status: 'active', lastLogin: '2 min ago' },
                { name: 'Rina Begum', email: 'principal@school.edu', role: 'Principal', status: 'active', lastLogin: '1 hr ago' },
                { name: 'Farhan Hossain', email: 'farhan@school.edu', role: 'Teacher', status: 'active', lastLogin: '3 hrs ago' },
                { name: 'Naila Islam', email: 'naila@school.edu', role: 'Teacher', status: 'inactive', lastLogin: '5 days ago' },
                { name: 'Mr. Rahman', email: 'rahman.parent@email.com', role: 'Parent', status: 'active', lastLogin: 'Yesterday' },
            ]}
        />
    );
}
