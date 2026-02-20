import type { Metadata } from 'next';

import {
  NoticeFilters,
  NoticeTable,
} from '@/features/dashboard/notices';

// TODO: Replace static data with API calls to fetch notices from database
// TODO: Implement server-side filtering and pagination

const notices = [
  {
    id: 'NTC-001',
    title: 'Annual Day Celebration — 15th March 2026',
    author: 'Mrs. Sunita Verma',
    date: '2026-02-19',
    priority: 'high' as const,
    audience: ['All Students', 'Parents'],
    status: 'published' as const,
    views: 2456,
  },
  {
    id: 'NTC-002',
    title: 'PTM Scheduled for Class IX & X',
    author: 'Mr. Rajesh Kumar',
    date: '2026-02-18',
    priority: 'high' as const,
    audience: ['Parents — Class IX & X'],
    status: 'published' as const,
    views: 1876,
  },
  {
    id: 'NTC-003',
    title: 'Winter Uniform Transition Notice',
    author: 'Ms. Deepa Nair',
    date: '2026-02-17',
    priority: 'medium' as const,
    audience: ['All Students'],
    status: 'published' as const,
    views: 876,
  },
  {
    id: 'NTC-004',
    title: 'Library Book Return Reminder',
    author: 'Mr. Anil Joshi',
    date: '2026-02-16',
    priority: 'medium' as const,
    audience: ['All Students'],
    status: 'published' as const,
    views: 654,
  },
  {
    id: 'NTC-005',
    title: 'Science Exhibition Registrations Open',
    author: 'Mrs. Meena Rao',
    date: '2026-02-15',
    priority: 'low' as const,
    audience: ['Students — Class VI to XII'],
    status: 'published' as const,
    views: 765,
  },
  {
    id: 'NTC-006',
    title: 'Bus Route 7 Timing Change',
    author: 'Mr. Vikram Singh',
    date: '2026-02-14',
    priority: 'medium' as const,
    audience: ['Parents — Route 7'],
    status: 'published' as const,
    views: 987,
  },
  {
    id: 'NTC-007',
    title: 'Mid-Term Exam Schedule Released',
    author: 'Mrs. Padma Krishnan',
    date: '2026-02-13',
    priority: 'high' as const,
    audience: ['All Students', 'Parents'],
    status: 'published' as const,
    views: 2134,
  },
  {
    id: 'NTC-008',
    title: 'Canteen Menu Updated',
    author: 'Ms. Kavitha Nambiar',
    date: '2026-02-12',
    priority: 'low' as const,
    audience: ['All Students', 'Staff'],
    status: 'published' as const,
    views: 432,
  },
  {
    id: 'NTC-009',
    title: 'Republic Day Celebration Rehearsals',
    author: 'Mr. Suresh Pandey',
    date: '2026-01-20',
    priority: 'high' as const,
    audience: ['Selected Students'],
    status: 'archived' as const,
    views: 1245,
  },
  {
    id: 'NTC-010',
    title: 'Holiday Homework Submission — Class VI to VIII',
    author: 'Mrs. Anjali Desai',
    date: '2026-01-15',
    priority: 'medium' as const,
    audience: ['Students — Class VI to VIII'],
    status: 'archived' as const,
    views: 567,
  },
  {
    id: 'NTC-011',
    title: 'Sports Day Postponed to 25th January',
    author: 'Mr. Harish Bhatt',
    date: '2026-01-10',
    priority: 'high' as const,
    audience: ['All Students', 'Parents'],
    status: 'archived' as const,
    views: 1532,
  },
  {
    id: 'NTC-012',
    title: 'Staff Meeting — Curriculum Review',
    author: 'Principal — Dr. Ramesh Chandra',
    date: '2026-02-11',
    priority: 'medium' as const,
    audience: ['Teaching Staff'],
    status: 'draft' as const,
    views: 0,
  },
  {
    id: 'NTC-013',
    title: 'Inter-School Quiz Competition',
    author: 'Mrs. Lakshmi Iyer',
    date: '2026-02-20',
    priority: 'medium' as const,
    audience: ['Students — Class IX to XII'],
    status: 'scheduled' as const,
    views: 0,
  },
  {
    id: 'NTC-014',
    title: 'New CCTV Installation in Corridors',
    author: 'Administration Office',
    date: '2026-02-09',
    priority: 'low' as const,
    audience: ['All Staff', 'All Students'],
    status: 'published' as const,
    views: 321,
  },
  {
    id: 'NTC-015',
    title: 'Scholarship Application Deadline — 10th March',
    author: 'Mr. Prakash Menon',
    date: '2026-02-19',
    priority: 'high' as const,
    audience: ['Students — Class IX to XII'],
    status: 'published' as const,
    views: 1345,
  },
];

export const metadata: Metadata = {
  title: 'Manage Notices',
  description:
    'Filter, search, and manage all school notices. View notice status, priority, audience, and take bulk actions on notices.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <NoticeFilters
        title="Filter Notices"
        priorities={[
          { label: 'Urgent', value: 'urgent' },
          { label: 'High', value: 'high' },
          { label: 'Medium', value: 'medium' },
          { label: 'Low', value: 'low' },
        ]}
        statuses={[
          { label: 'Published', value: 'published' },
          { label: 'Draft', value: 'draft' },
          { label: 'Scheduled', value: 'scheduled' },
          { label: 'Archived', value: 'archived' },
        ]}
        audiences={[
          { label: 'All Students', value: 'students' },
          { label: 'All Parents', value: 'parents' },
          { label: 'Teaching Staff', value: 'teachers' },
          { label: 'Admin Staff', value: 'admin' },
        ]}
      />

      <NoticeTable
        title="All Notices"
        notices={notices}
      />
    </div>
  );
}
