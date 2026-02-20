import type { Metadata } from 'next';
import { OperationsOverview } from '@/features/dashboard/operations';
import ROUTES from '@/lib/routes';

export const metadata: Metadata = {
    title: 'Operations — EduManager',
    description: 'Manage school operations, staff, students and scheduling',
};

export default function Page() {
    return (
        <OperationsOverview
            stats={[
                { label: 'Total Classes', value: '42', icon: 'classes', subtitle: 'Across 10 grades' },
                { label: 'Staff Members', value: '78', icon: 'staff', subtitle: '64 teachers, 14 admin' },
                { label: 'Total Students', value: '1,245', icon: 'students', subtitle: 'Enrolled this year' },
                { label: 'Upcoming Events', value: '7', icon: 'events', subtitle: 'This month' },
            ]}
            quickLinks={[
                { category: 'Scheduling', title: 'Calendar', description: 'View and manage school events', href: ROUTES.dashboard.operations.calendar },
                { category: 'Academics', title: 'Classes', description: 'Manage classes and sections', href: ROUTES.dashboard.operations.classes },
                { category: 'Human Resources', title: 'Staff', description: 'Manage staff and teachers', href: ROUTES.dashboard.operations.staff },
                { category: 'Enrolment', title: 'Students', description: 'Manage student records', href: ROUTES.dashboard.operations.students },
                { category: 'System', title: 'Settings', description: 'Configure school preferences', href: ROUTES.dashboard.operations.settings },
            ]}
        />
    );
}
