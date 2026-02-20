import type { Metadata } from 'next';
import { StandardReports } from '@/features/dashboard/reports';

export const metadata: Metadata = {
    title: 'Standard Reports — EduManager',
    description: 'Pre-built report templates ready to generate and download',
};

export default function Page() {
    return (
        <StandardReports
            categories={[
                { label: 'All Reports', count: 24, active: true },
                { label: 'Attendance', count: 8, active: false },
                { label: 'Fees', count: 6, active: false },
                { label: 'Academic', count: 7, active: false },
                { label: 'Staff', count: 3, active: false },
            ]}
            templates={[
                { title: 'Daily Attendance Summary', description: 'Class-wise daily attendance overview with present, absent, and late counts.', category: 'Attendance', iconBg: 'bg-blue-50', iconColor: 'text-blue-500', lastGenerated: '20 Jan 2025' },
                { title: 'Monthly Attendance Report', description: 'Comprehensive monthly attendance data with percentage and trends.', category: 'Attendance', iconBg: 'bg-blue-50', iconColor: 'text-blue-500', lastGenerated: '1 Jan 2025' },
                { title: 'Student Attendance Ledger', description: 'Individual student attendance history for a selected period.', category: 'Attendance', iconBg: 'bg-blue-50', iconColor: 'text-blue-500', lastGenerated: '15 Jan 2025' },
                { title: 'Fee Collection Summary', description: 'Total fees collected, pending, and waived for a given period.', category: 'Fees', iconBg: 'bg-green-50', iconColor: 'text-green-500', lastGenerated: '18 Jan 2025' },
                { title: 'Outstanding Fee Report', description: 'List of students with pending dues, sorted by amount.', category: 'Fees', iconBg: 'bg-green-50', iconColor: 'text-green-500', lastGenerated: '10 Jan 2025' },
                { title: 'Payment History Report', description: 'Detailed transaction history for fee payments in the selected period.', category: 'Fees', iconBg: 'bg-green-50', iconColor: 'text-green-500', lastGenerated: '05 Jan 2025' },
                { title: 'Exam Results Overview', description: 'Summary of exam results including pass rate, avg score, and grade distribution.', category: 'Academic', iconBg: 'bg-purple-50', iconColor: 'text-purple-500', lastGenerated: '16 Jan 2025' },
                { title: 'Subject Performance Report', description: 'Subject-wise average scores and pass/fail statistics across all classes.', category: 'Academic', iconBg: 'bg-purple-50', iconColor: 'text-purple-500', lastGenerated: '14 Jan 2025' },
                { title: 'Top Performers List', description: 'Ranked list of top-performing students by class and subject.', category: 'Academic', iconBg: 'bg-purple-50', iconColor: 'text-purple-500', lastGenerated: '12 Jan 2025' },
                { title: 'Staff Attendance Report', description: 'Monthly staff attendance and leave summary by department.', category: 'Staff', iconBg: 'bg-orange-50', iconColor: 'text-orange-500', lastGenerated: '19 Jan 2025' },
                { title: 'Teacher Activity Report', description: 'Summary of classes conducted, topics covered, and assignments given.', category: 'Staff', iconBg: 'bg-orange-50', iconColor: 'text-orange-500', lastGenerated: '08 Jan 2025' },
            ]}
        />
    );
}
