import type { Metadata } from 'next';
import { RolesOverview } from '@/features/dashboard/roles';

export const metadata: Metadata = {
    title: 'Roles — EduManager',
    description: 'Manage user roles and access control',
};

export default function Page() {
    return (
        <RolesOverview
            stats={[
                { label: 'Total Roles', value: '5', icon: 'roles' },
                { label: 'Total Users', value: '1,595', icon: 'users' },
                { label: 'Active Roles', value: '5', icon: 'active' },
                { label: 'Permission Sets', value: '128', icon: 'permissions' },
            ]}
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
