import type { Metadata } from 'next';
import { ReportsOverview } from '@/features/dashboard/reports';
import ROUTES from '@/lib/routes';

export const metadata: Metadata = {
    title: 'Reports — EduManager',
    description: 'Generate, view, and manage school reports',
};

export default function Page() {
    return (
        <ReportsOverview
            stats={[
                { label: 'Total Reports', value: '284', icon: 'reports', sub: 'All time' },
                { label: 'Scheduled', value: '12', icon: 'scheduled', sub: 'This week' },
                { label: 'Active Users', value: '48', icon: 'users', sub: 'Accessed today' },
                { label: 'This Month', value: '37', icon: 'analytics', sub: 'Generated' },
            ]}
            reportCategories={[
                {
                    title: 'Attendance Reports',
                    count: 8,
                    description: 'Daily, weekly, and monthly attendance summaries for classes and students.',
                    icon: 'attendance',
                    iconBg: 'bg-blue-100',
                    iconColor: 'text-blue-600',
                    href: ROUTES.dashboard.reports.standard,
                },
                {
                    title: 'Fee Reports',
                    count: 6,
                    description: 'Fee collection summaries, pending dues, and payment history.',
                    icon: 'fees',
                    iconBg: 'bg-green-100',
                    iconColor: 'text-green-600',
                    href: ROUTES.dashboard.reports.standard,
                },
                {
                    title: 'Academic Reports',
                    count: 10,
                    description: 'Exam results, grade distributions, and performance trends.',
                    icon: 'academic',
                    iconBg: 'bg-purple-100',
                    iconColor: 'text-purple-600',
                    href: ROUTES.dashboard.reports.standard,
                },
                {
                    title: 'Custom Reports',
                    count: 14,
                    description: 'Build tailored reports with custom fields, filters, and date ranges.',
                    icon: 'custom',
                    iconBg: 'bg-orange-100',
                    iconColor: 'text-orange-600',
                    href: ROUTES.dashboard.reports.custom,
                },
            ]}
            recentReports={[
                { name: 'Monthly Attendance Summary — January', category: 'Attendance', generatedBy: 'Admin', date: '20 Jan 2025', format: 'PDF' },
                { name: 'Fee Collection Report — Q4 2024', category: 'Fees', generatedBy: 'Accountant', date: '18 Jan 2025', format: 'Excel' },
                { name: 'Mid-Term Results Overview', category: 'Academic', generatedBy: 'Principal', date: '16 Jan 2025', format: 'PDF' },
                { name: 'Class 10 Performance Analysis', category: 'Academic', generatedBy: 'Teacher', date: '14 Jan 2025', format: 'CSV' },
                { name: 'Staff Attendance Report', category: 'Attendance', generatedBy: 'HR', date: '12 Jan 2025', format: 'PDF' },
            ]}
        />
    );
}
