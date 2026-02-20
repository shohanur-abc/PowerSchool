import type { Metadata } from 'next';
import { RolePermissions } from '@/features/dashboard/roles';

export const metadata: Metadata = {
    title: 'Role Permissions — EduManager',
    description: 'Configure feature access for each role',
};

export default function Page() {
    return (
        <RolePermissions
            roles={['Admin', 'Principal', 'Teacher', 'Parent', 'Student']}
            selectedRole="Admin"
            permissions={[
                { feature: 'Students', read: true, write: true, delete: true },
                { feature: 'Attendance', read: true, write: true, delete: true },
                { feature: 'Results', read: true, write: true, delete: true },
                { feature: 'Fees', read: true, write: true, delete: true },
                { feature: 'Notices', read: true, write: true, delete: true },
                { feature: 'Reports', read: true, write: true, delete: true },
                { feature: 'Users', read: true, write: true, delete: true },
                { feature: 'Roles', read: true, write: true, delete: true },
            ]}
        />
    );
}
