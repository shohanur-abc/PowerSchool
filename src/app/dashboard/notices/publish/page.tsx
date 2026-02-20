import type { Metadata } from 'next';

import {
  ComposeNotice,
  NoticePreview,
} from '@/features/dashboard/notices';

// TODO: Integrate with notice publishing API
// TODO: Add draft auto-save functionality

export const metadata: Metadata = {
  title: 'Publish Notice',
  description:
    'Compose, preview, and publish new school notices. Set priority, audience, and schedule notices for future publication.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <div className="grid grid-cols-1 @4xl:grid-cols-2 gap-6">
        <ComposeNotice
          title="Compose Notice"
          priorities={[
            { label: 'Urgent', value: 'urgent' },
            { label: 'High', value: 'high' },
            { label: 'Medium', value: 'medium' },
            { label: 'Low', value: 'low' },
          ]}
          audienceOptions={[
            { label: 'All Students', value: 'students' },
            { label: 'All Parents', value: 'parents' },
            { label: 'Teaching Staff', value: 'teachers' },
            { label: 'Admin Staff', value: 'admin' },
            { label: 'Class IX & X', value: 'class-9-10' },
            { label: 'Class XI & XII', value: 'class-11-12' },
          ]}
        />

        <NoticePreview title="Notice Preview" />
      </div>
    </div>
  );
}
