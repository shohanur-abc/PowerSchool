import type { Metadata } from 'next';

import {
  EngagementStats,
  EngagementChart,
  AudienceBreakdown,
  TopNotices,
} from '@/features/dashboard/notices';

// TODO: Replace static data with API calls to analytics service
// TODO: Add date range filtering for analytics data

const stats = [
  {
    title: 'Total Views',
    value: '12,486',
    change: '+18.3%',
    changeType: 'up' as const,
    icon: 'Eye',
    description: 'Total notice views this month across all audiences',
  },
  {
    title: 'Total Clicks',
    value: '3,741',
    change: '+9.7%',
    changeType: 'up' as const,
    icon: 'MousePointerClick',
    description: 'Total link clicks within notices this month',
  },
  {
    title: 'Avg. Engagement',
    value: '64.2%',
    change: '+5.1%',
    changeType: 'up' as const,
    icon: 'Activity',
    description: 'Average engagement rate across all active notices',
  },
  {
    title: 'Unread Notices',
    value: '847',
    change: '-12.4%',
    changeType: 'down' as const,
    icon: 'MailWarning',
    description: 'Notices not yet read by their target audience',
  },
];

const engagementData = [
  { date: 'Feb 05', views: 842, uniqueReaders: 256 },
  { date: 'Feb 06', views: 915, uniqueReaders: 284 },
  { date: 'Feb 07', views: 780, uniqueReaders: 231 },
  { date: 'Feb 08', views: 420, uniqueReaders: 128 },
  { date: 'Feb 09', views: 380, uniqueReaders: 112 },
  { date: 'Feb 10', views: 968, uniqueReaders: 312 },
  { date: 'Feb 11', views: 1045, uniqueReaders: 345 },
  { date: 'Feb 12', views: 892, uniqueReaders: 278 },
  { date: 'Feb 13', views: 1120, uniqueReaders: 368 },
  { date: 'Feb 14', views: 756, uniqueReaders: 224 },
  { date: 'Feb 15', views: 435, uniqueReaders: 132 },
  { date: 'Feb 16', views: 398, uniqueReaders: 118 },
  { date: 'Feb 17', views: 1056, uniqueReaders: 342 },
  { date: 'Feb 18', views: 1134, uniqueReaders: 376 },
  { date: 'Feb 19', views: 1245, uniqueReaders: 398 },
];

const audienceData = [
  { role: 'Students', count: 38, color: 'var(--chart-1)' },
  { role: 'Parents', count: 32, color: 'var(--chart-2)' },
  { role: 'Teachers', count: 18, color: 'var(--chart-3)' },
  { role: 'Admin Staff', count: 8, color: 'var(--chart-4)' },
  { role: 'Others', count: 4, color: 'var(--chart-5)' },
];

const topNotices = [
  {
    id: 'NTC-001',
    title: 'Annual Day Celebration — 15th March 2026',
    views: 2456,
    readRate: 87,
    publishedDate: '2026-02-19',
    audience: ['All Students', 'Parents'],
  },
  {
    id: 'NTC-007',
    title: 'Mid-Term Exam Schedule Released',
    views: 2134,
    readRate: 82,
    publishedDate: '2026-02-13',
    audience: ['All Students', 'Parents'],
  },
  {
    id: 'NTC-002',
    title: 'PTM Scheduled for Class IX & X',
    views: 1876,
    readRate: 79,
    publishedDate: '2026-02-18',
    audience: ['Parents — Class IX & X'],
  },
  {
    id: 'PIN-001',
    title: 'Board Exam Preparation Guidelines — Class X & XII',
    views: 1654,
    readRate: 91,
    publishedDate: '2026-02-10',
    audience: ['Students — Class X & XII'],
  },
  {
    id: 'PIN-002',
    title: 'Fee Payment Deadline — Term 3',
    views: 1523,
    readRate: 76,
    publishedDate: '2026-02-08',
    audience: ['All Parents'],
  },
  {
    id: 'NTC-015',
    title: 'Scholarship Application Deadline — 10th March',
    views: 1345,
    readRate: 68,
    publishedDate: '2026-02-19',
    audience: ['Students — Class IX to XII'],
  },
  {
    id: 'NTC-006',
    title: 'Bus Route 7 Timing Change',
    views: 987,
    readRate: 72,
    publishedDate: '2026-02-14',
    audience: ['Parents — Route 7'],
  },
  {
    id: 'NTC-003',
    title: 'Winter Uniform Transition Notice',
    views: 876,
    readRate: 54,
    publishedDate: '2026-02-17',
    audience: ['All Students'],
  },
  {
    id: 'NTC-005',
    title: 'Science Exhibition Registrations Open',
    views: 765,
    readRate: 61,
    publishedDate: '2026-02-15',
    audience: ['Students — Class VI to XII'],
  },
  {
    id: 'NTC-013',
    title: 'Inter-School Quiz Competition',
    views: 654,
    readRate: 45,
    publishedDate: '2026-02-20',
    audience: ['Students — Class IX to XII'],
  },
];

export const metadata: Metadata = {
  title: 'Notice Analytics',
  description:
    'Analyze notice engagement metrics, audience breakdown, top-performing notices, and view/click trends across the school.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <EngagementStats stats={stats} />

      <EngagementChart
        title="Engagement Trend"
        description="Daily views and clicks across all notices over the last 15 days"
        data={engagementData}
      />

      <div className="grid grid-cols-1 @4xl:grid-cols-2 gap-6">
        <AudienceBreakdown
          title="Audience Breakdown"
          description="Notice readership distribution by audience segment"
          data={audienceData}
        />

        <TopNotices
          title="Top Performing Notices"
          notices={topNotices}
        />
      </div>
    </div>
  );
}
