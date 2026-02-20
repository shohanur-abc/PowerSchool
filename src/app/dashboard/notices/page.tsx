import type { Metadata } from 'next';
import { NoticesOverview } from '@/features/dashboard/notices';

export const metadata: Metadata = {
    title: 'Notices — EduManager',
    description: 'Manage school notices and communications',
};

export default function Page() {
    return (
        <NoticesOverview
            stats={[
                { label: 'Total Notices', value: '248', icon: 'bell' },
                { label: 'Published', value: '186', icon: 'check' },
                { label: 'Draft', value: '42', icon: 'file' },
                { label: 'This Week', value: '12', icon: 'calendar' },
            ]}
            recentNotices={[
                { id: '1', title: 'Parent-Teacher Meeting', type: 'Event', audience: 'All', publishedAt: 'Today', status: 'published' },
                { id: '2', title: 'Fee Submission Reminder', type: 'Finance', audience: 'Parents', publishedAt: 'Yesterday', status: 'published' },
                { id: '3', title: 'Annual Sports Day', type: 'Event', audience: 'All', publishedAt: '3 days ago', status: 'published' },
                { id: '4', title: 'Library Hours Update', type: 'Academic', audience: 'Students', publishedAt: 'Draft', status: 'draft' },
            ]}
        />
    );
}
