import type { Metadata } from 'next';
import { PublishNotice } from '@/features/dashboard/notices';

export const metadata: Metadata = {
    title: 'Publish Notice — EduManager',
    description: 'Create and publish school notices',
};

export default function Page() {
    return (
        <PublishNotice
            noticeTypes={['General', 'Academic', 'Event', 'Finance', 'Holiday', 'Sports', 'Cultural', 'Internal']}
            audienceOptions={[
                { label: 'All', selected: true },
                { label: 'Students', selected: false },
                { label: 'Parents', selected: false },
                { label: 'Teachers', selected: false },
                { label: 'Staff', selected: false },
            ]}
        />
    );
}
