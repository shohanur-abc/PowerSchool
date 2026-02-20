import type { Metadata } from 'next';
import { AttendanceReports } from '@/features/dashboard/attendance';

export const metadata: Metadata = {
    title: 'Attendance Reports — EduManager',
    description: 'View and export attendance analytics',
};

export default function Page() {
    return (
        <AttendanceReports
            filters={{
                dateRange: 'Jun 2025',
                classes: ['All Classes', 'Class 9', 'Class 10'],
            }}
            summary={[
                { label: 'Total Students', value: '1,234', subtitle: 'Enrolled this session' },
                { label: 'Avg Attendance Rate', value: '91.4%', subtitle: 'School-wide average' },
                { label: 'Total Absences', value: '423', subtitle: 'This month' },
                { label: 'Chronic Absentees', value: '18', subtitle: 'Below 75% rate' },
            ]}
            classReports={[
                { class: 'Class 6-A', total: 42, present: 39, absent: 2, late: 1, rate: 93 },
                { class: 'Class 7-A', total: 40, present: 36, absent: 3, late: 1, rate: 90 },
                { class: 'Class 7-B', total: 38, present: 35, absent: 2, late: 1, rate: 92 },
                { class: 'Class 8-A', total: 45, present: 40, absent: 4, late: 1, rate: 89 },
                { class: 'Class 8-B', total: 44, present: 41, absent: 2, late: 1, rate: 93 },
                { class: 'Class 9-A', total: 43, present: 37, absent: 5, late: 1, rate: 86 },
                { class: 'Class 9-B', total: 41, present: 36, absent: 4, late: 1, rate: 88 },
                { class: 'Class 10-A', total: 39, present: 37, absent: 2, late: 0, rate: 95 },
                { class: 'Class 10-B', total: 40, present: 36, absent: 3, late: 1, rate: 90 },
            ]}
        />
    );
}
