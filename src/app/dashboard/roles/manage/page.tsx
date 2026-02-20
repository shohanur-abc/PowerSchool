import type { Metadata } from 'next';
import { ManageRoles } from '@/features/dashboard/roles';

export const metadata: Metadata = {
    title: 'Manage Roles — EduManager',
    description: 'Create and configure roles for your organization',
};

export default function Page() {
    return (
        <ManageRoles
            roles={[
                { name: 'Admin', description: 'Full system access', userCount: 5, permissionsCount: 48, status: 'active' },
                { name: 'Principal', description: 'School management and oversight', userCount: 2, permissionsCount: 36, status: 'active' },
                { name: 'Teacher', description: 'Class and student management', userCount: 42, permissionsCount: 24, status: 'active' },
                { name: 'Parent', description: 'View child progress and notices', userCount: 312, permissionsCount: 12, status: 'active' },
                { name: 'Student', description: 'View schedule, grades, notices', userCount: 1234, permissionsCount: 8, status: 'active' },
            ]}
        />
    );
}
