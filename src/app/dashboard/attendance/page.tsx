import type { Metadata } from 'next';
import { AttendanceOverview } from '@/features/dashboard/attendance';
import ROUTES from '@/lib/routes';

export const metadata: Metadata = {
    title: 'Attendance — EduManager',
    description: 'Track and manage student attendance across all classes',
};

export default function Page() {
    return (
        <AttendanceOverview
            stats={[
                { label: 'Present Today', value: '1,145', icon: 'present', trend: '+2%', trendUp: true },
                { label: 'Absent Today', value: '89', icon: 'absent', trend: '-1%', trendUp: false },
                { label: 'Late Arrivals', value: '23', icon: 'late', trend: '+5', trendUp: false },
                { label: 'Attendance Rate', value: '92.8%', icon: 'rate', trend: '+0.3%', trendUp: true },
            ]}
            recentActivity={[
                { studentName: 'Arif Hossain', class: 'Class 10-A', status: 'present', time: '8:02 AM' },
                { studentName: 'Nadia Islam', class: 'Class 9-B', status: 'late', time: '8:47 AM' },
                { studentName: 'Tanvir Ahmed', class: 'Class 8-C', status: 'absent', time: '—' },
                { studentName: 'Sumaiya Khanam', class: 'Class 10-A', status: 'present', time: '7:58 AM' },
                { studentName: 'Raihan Kabir', class: 'Class 7-A', status: 'present', time: '8:10 AM' },
                { studentName: 'Farhan Akter', class: 'Class 9-B', status: 'absent', time: '—' },
            ]}
            quickActions={[
                { label: 'Mark Attendance', href: ROUTES.dashboard.attendance.mark, icon: 'mark' },
                { label: 'View Reports', href: ROUTES.dashboard.attendance.reports, icon: 'reports' },
                { label: 'Corrections', href: ROUTES.dashboard.attendance.corrections, icon: 'corrections' },
            ]}
        />
    );
}
