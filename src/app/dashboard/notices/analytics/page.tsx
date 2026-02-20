import type { Metadata } from 'next';
import { NoticesAnalytics } from '@/features/dashboard/notices';

export const metadata: Metadata = {
    title: 'Notice Analytics — EduManager',
    description: 'Track engagement and reach of school notices',
};

export default function Page() {
    return (
        <NoticesAnalytics
            stats={[
                { label: 'Total Views', value: '14,820', icon: 'views', change: '+18%', changeUp: true },
                { label: 'Total Reads', value: '9,645', icon: 'reads', change: '+12%', changeUp: true },
                { label: 'Audience Reached', value: '2,310', icon: 'reach', change: '+5%', changeUp: true },
                { label: 'Avg Read Rate', value: '65%', icon: 'trend', change: '-2%', changeUp: false },
            ]}
            noticeEngagement={[
                { id: '1', title: 'Annual Sports Day', type: 'Event', publishedAt: 'Jan 12, 2025', views: 1842, reads: 1540, readRate: 84 },
                { id: '2', title: 'Exam Schedule Released', type: 'Academic', publishedAt: 'Jan 10, 2025', views: 2100, reads: 1890, readRate: 90 },
                { id: '3', title: 'Fee Submission Reminder', type: 'Finance', publishedAt: 'Jan 14, 2025', views: 980, reads: 620, readRate: 63 },
                { id: '4', title: 'Parent-Teacher Meeting', type: 'Event', publishedAt: 'Jan 15, 2025', views: 750, reads: 410, readRate: 55 },
                { id: '5', title: 'Staff Meeting Reminder', type: 'Internal', publishedAt: 'Jan 6, 2025', views: 320, reads: 145, readRate: 45 },
            ]}
            audienceReach={[
                { audience: 'Students', reached: 1120, total: 1245 },
                { audience: 'Parents', reached: 840, total: 1050 },
                { audience: 'Teachers', reached: 68, total: 72 },
                { audience: 'Staff', reached: 42, total: 55 },
            ]}
        />
    );
}
