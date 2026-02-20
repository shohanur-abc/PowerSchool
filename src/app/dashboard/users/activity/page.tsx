import type { Metadata } from 'next';
import { UserActivity } from '@/features/dashboard/users';

export const metadata: Metadata = {
    title: 'User Activity — EduManager',
    description: 'Monitor and audit user actions across the system',
};

export default function Page() {
    return (
        <UserActivity
            activities={[
                { user: 'Karim Admin', action: 'Updated user role', resource: 'Users / Farhan Hossain', ipAddress: '192.168.1.101', timestamp: 'Today, 9:45 AM' },
                { user: 'Rina Begum', action: 'Viewed report', resource: 'Reports / Term 1', ipAddress: '192.168.1.102', timestamp: 'Today, 9:30 AM' },
                { user: 'Farhan Hossain', action: 'Marked attendance', resource: 'Attendance / Class 10-A', ipAddress: '192.168.1.105', timestamp: 'Today, 8:15 AM' },
                { user: 'Karim Admin', action: 'Created notice', resource: 'Notices / Annual Day', ipAddress: '192.168.1.101', timestamp: 'Yesterday, 4:00 PM' },
                { user: 'Mr. Rahman', action: 'Viewed fees', resource: 'Fees / Student #1023', ipAddress: '10.0.0.55', timestamp: 'Yesterday, 2:20 PM' },
            ]}
        />
    );
}
