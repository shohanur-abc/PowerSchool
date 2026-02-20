import type { Metadata } from 'next';
import { ReportsAnalytics } from '@/features/dashboard/reports';

export const metadata: Metadata = {
    title: 'Reports Analytics — EduManager',
    description: 'Insights into report usage, generation trends, and data volume',
};

export default function Page() {
    return (
        <ReportsAnalytics
            usageStats={[
                { label: 'Reports Generated', value: '37', icon: 'reports', trend: '+8', trendUp: true },
                { label: 'Total Downloads', value: '142', icon: 'downloads', trend: '+23', trendUp: true },
                { label: 'Active Users', value: '48', icon: 'users', trend: '+5', trendUp: true },
                { label: 'Avg per Day', value: '6.2', icon: 'trend', trend: '+1.1', trendUp: true },
            ]}
            popularReports={[
                { name: 'Monthly Attendance Summary', category: 'Attendance', generatedCount: 24, downloadCount: 98 },
                { name: 'Fee Collection Summary', category: 'Fees', generatedCount: 18, downloadCount: 72 },
                { name: 'Exam Results Overview', category: 'Academic', generatedCount: 15, downloadCount: 61 },
                { name: 'Outstanding Fee Report', category: 'Fees', generatedCount: 12, downloadCount: 48 },
                { name: 'Subject Performance Report', category: 'Academic', generatedCount: 10, downloadCount: 40 },
                { name: 'Staff Attendance Report', category: 'Staff', generatedCount: 8, downloadCount: 30 },
            ]}
            dataVolumeStats={[
                { metric: 'Total Storage Used', value: '1.24 GB', status: 'good', icon: 'storage' },
                { metric: 'Avg Generation Time', value: '3.2 sec', status: 'normal', icon: 'avg_time' },
                { metric: 'Total Records Processed', value: '284,000', status: 'normal', icon: 'records' },
                { metric: 'Peak Usage Day', value: 'Monday', status: 'good', icon: 'trend' },
                { metric: 'Failed Generations', value: '3', status: 'good', icon: 'records' },
                { metric: 'Scheduled Reports', value: '12', status: 'normal', icon: 'avg_time' },
            ]}
        />
    );
}
