import type { Metadata } from 'next';
import { RoleUsers } from '@/features/dashboard/roles';

export const metadata: Metadata = {
    title: 'Users by Role — EduManager',
    description: 'View and manage users assigned to each role',
};

export default function Page() {
    return (
        <RoleUsers
            roles={['Admin', 'Principal', 'Teacher', 'Parent', 'Student']}
            users={[
                { name: 'Karim Admin', email: 'admin@school.edu', role: 'Admin', status: 'active', assignedDate: 'Jan 1, 2024' },
                { name: 'Rina Begum', email: 'principal@school.edu', role: 'Principal', status: 'active', assignedDate: 'Jan 5, 2024' },
                { name: 'Farhan Hossain', email: 'farhan@school.edu', role: 'Teacher', status: 'active', assignedDate: 'Feb 10, 2024' },
                { name: 'Naila Islam', email: 'naila@school.edu', role: 'Teacher', status: 'inactive', assignedDate: 'Feb 12, 2024' },
                { name: 'Mr. Rahman', email: 'rahman.parent@email.com', role: 'Parent', status: 'active', assignedDate: 'Mar 1, 2024' },
            ]}
        />
    );
}
