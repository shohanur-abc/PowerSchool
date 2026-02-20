import type { Metadata } from 'next';
import { ManageNotices } from '@/features/dashboard/notices';

export const metadata: Metadata = {
    title: 'Manage Notices — EduManager',
    description: 'View, edit and organise all school notices',
};

export default function Page() {
    return (
        <ManageNotices
            notices={[
                { id: '1', title: 'Parent-Teacher Meeting', type: 'Event', audience: 'All', author: 'Admin', publishedAt: 'Jan 15, 2025', status: 'published' },
                { id: '2', title: 'Fee Submission Reminder', type: 'Finance', audience: 'Parents', author: 'Finance Dept', publishedAt: 'Jan 14, 2025', status: 'published' },
                { id: '3', title: 'Annual Sports Day', type: 'Event', audience: 'All', author: 'Sports Dept', publishedAt: 'Jan 12, 2025', status: 'published' },
                { id: '4', title: 'Library Hours Update', type: 'Academic', audience: 'Students', author: 'Librarian', publishedAt: '—', status: 'draft' },
                { id: '5', title: 'Exam Schedule Released', type: 'Academic', audience: 'All', author: 'Academic Dept', publishedAt: 'Jan 10, 2025', status: 'published' },
                { id: '6', title: 'Holiday Notice — Republic Day', type: 'Holiday', audience: 'All', author: 'Admin', publishedAt: 'Jan 8, 2025', status: 'archived' },
                { id: '7', title: 'Science Fair Registration', type: 'Academic', audience: 'Students', author: 'Science Dept', publishedAt: '—', status: 'draft' },
                { id: '8', title: 'Staff Meeting Reminder', type: 'Internal', audience: 'Staff', author: 'Principal', publishedAt: 'Jan 6, 2025', status: 'published' },
            ]}
        />
    );
}
