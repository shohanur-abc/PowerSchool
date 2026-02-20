import type { Metadata } from 'next';
import { AdminDashboard } from '@/features/dashboard/admin';
import ROUTES from '@/lib/routes';

export const metadata: Metadata = {
    title: 'Admin Dashboard — EduManager',
    description: 'System overview and administrative controls',
};

export default function Page() {
    return (
        <AdminDashboard
            stats={[
                { label: 'Total Students', value: '1,234', icon: 'students', sub: '+12 this month' },
                { label: 'Total Staff', value: '87', icon: 'staff', sub: '5 departments' },
                { label: 'Active Sessions', value: '243', icon: 'sessions' },
                { label: 'System Uptime', value: '99.8%', icon: 'uptime', sub: 'Last 30 days' },
            ]}
            systemHealth={[
                { label: 'Database', value: '12ms latency', status: 'healthy' },
                { label: 'Storage', value: '68% used', status: 'warning' },
                { label: 'Email Service', value: 'Operational', status: 'healthy' },
                { label: 'Backup', value: 'Last: 2 hrs ago', status: 'healthy' },
                { label: 'API Gateway', value: 'Operational', status: 'healthy' },
            ]}
            recentEvents={[
                { message: 'New student batch imported (42 students)', severity: 'success', timestamp: 'Today, 10:00 AM' },
                { message: 'Storage usage exceeded 65% threshold', severity: 'warning', timestamp: 'Today, 8:30 AM' },
                { message: 'Scheduled backup completed', severity: 'info', timestamp: 'Today, 7:00 AM' },
                { message: 'Failed login attempt: user unknown', severity: 'error', timestamp: 'Yesterday, 11:45 PM' },
                { message: 'System update applied successfully', severity: 'success', timestamp: 'Yesterday, 9:00 PM' },
            ]}
            quickLinks={[
                { label: 'Manage Users', href: ROUTES.dashboard.users.root },
                { label: 'Manage Roles', href: ROUTES.dashboard.roles.root },
                { label: 'View Reports', href: ROUTES.dashboard.reports.root },
                { label: 'Attendance', href: ROUTES.dashboard.attendance.root },
                { label: 'Fees', href: ROUTES.dashboard.fees.root },
                { label: 'Operations', href: ROUTES.dashboard.operations.root },
                { label: 'Notices', href: ROUTES.dashboard.notices.root },
                { label: 'Results', href: ROUTES.dashboard.results.root },
            ]}
        />
    );
}
