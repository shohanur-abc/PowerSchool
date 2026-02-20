import type { Metadata } from 'next';

import {
  ReportStats,
  FavoriteReports,
  RecentReports,
} from '@/features/dashboard/reports';

// TODO: Replace static data with API calls to fetch real-time report statistics
// TODO: Integrate with report generation service for live data

const stats = [
  {
    title: 'Total Reports Generated',
    value: '1,248',
    change: '+8.3%',
    changeType: 'up' as const,
    icon: 'FileText',
    description: 'Reports generated this academic session (2025–26)',
  },
  {
    title: 'This Month',
    value: '87',
    change: '+12.1%',
    changeType: 'up' as const,
    icon: 'CalendarDays',
    description: 'Reports generated in February 2026',
  },
  {
    title: 'Scheduled Reports',
    value: '14',
    change: '+2',
    changeType: 'up' as const,
    icon: 'Clock',
    description: 'Reports scheduled for auto-generation',
  },
  {
    title: 'Avg. Generation Time',
    value: '3.2s',
    change: '-0.8s',
    changeType: 'down' as const,
    icon: 'Zap',
    description: 'Average time to generate a report',
  },
];

const favoriteReports = [
  {
    id: 'FAV-001',
    name: 'Daily Attendance Summary',
    description: 'Class-wise attendance summary with present, absent, and late counts for the day',
    icon: 'CalendarCheck',
    lastRunAt: '2026-02-19T08:15:00Z',
  },
  {
    id: 'FAV-002',
    name: 'Fee Collection Status',
    description: 'Monthly fee collection report with pending dues and payment breakdowns per class',
    icon: 'IndianRupee',
    lastRunAt: '2026-02-18T14:30:00Z',
  },
  {
    id: 'FAV-003',
    name: 'Term Exam Results',
    description: 'Consolidated marks and grades for Unit Test III across all sections',
    icon: 'GraduationCap',
    lastRunAt: '2026-02-17T10:00:00Z',
  },
  {
    id: 'FAV-004',
    name: 'Student Strength Report',
    description: 'Class-wise and section-wise student enrolment with category and gender breakdown',
    icon: 'Users',
    lastRunAt: '2026-02-15T09:45:00Z',
  },
  {
    id: 'FAV-005',
    name: 'Staff Attendance Report',
    description: 'Teaching and non-teaching staff attendance with leave records for the month',
    icon: 'UserCheck',
    lastRunAt: '2026-02-19T07:30:00Z',
  },
  {
    id: 'FAV-006',
    name: 'Transport Route Summary',
    description: 'Bus route-wise student count and fee collection status',
    icon: 'Bus',
    lastRunAt: '2026-02-14T11:20:00Z',
  },
];

const recentReports = [
  {
    id: 'RPT-2026-0219-001',
    name: 'Class X Board Exam Readiness Report',
    type: 'Academic',
    generatedAt: '2026-02-19T09:30:00Z',
    format: 'PDF' as const,
    generatedBy: { name: 'Mrs. Sunita Verma', avatar: '' },
  },
  {
    id: 'RPT-2026-0219-002',
    name: 'February Fee Collection Summary',
    type: 'Finance',
    generatedAt: '2026-02-19T08:45:00Z',
    format: 'Excel' as const,
    generatedBy: { name: 'Mr. Arvind Saxena', avatar: '' },
  },
  {
    id: 'RPT-2026-0218-003',
    name: 'Weekly Attendance Analysis (10–14 Feb)',
    type: 'Attendance',
    generatedAt: '2026-02-18T16:20:00Z',
    format: 'PDF' as const,
    generatedBy: { name: 'Mr. Rajesh Kumar', avatar: '' },
  },
  {
    id: 'RPT-2026-0218-004',
    name: 'Unit Test III Marks Entry Status',
    type: 'Academic',
    generatedAt: '2026-02-18T14:10:00Z',
    format: 'CSV' as const,
    generatedBy: { name: 'Ms. Deepa Nair', avatar: '' },
  },
  {
    id: 'RPT-2026-0217-005',
    name: 'Student Category-wise Enrolment',
    type: 'Administrative',
    generatedAt: '2026-02-17T11:00:00Z',
    format: 'Excel' as const,
    generatedBy: { name: 'Mrs. Padma Krishnan', avatar: '' },
  },
  {
    id: 'RPT-2026-0217-006',
    name: 'CBSE Affiliation Compliance Checklist',
    type: 'Compliance',
    generatedAt: '2026-02-17T09:15:00Z',
    format: 'PDF' as const,
    generatedBy: { name: 'Dr. Ramesh Iyer', avatar: '' },
  },
  {
    id: 'RPT-2026-0216-007',
    name: 'Library Book Issue & Return Log',
    type: 'Administrative',
    generatedAt: '2026-02-16T15:30:00Z',
    format: 'CSV' as const,
    generatedBy: { name: 'Mrs. Kavita Menon', avatar: '' },
  },
  {
    id: 'RPT-2026-0215-008',
    name: 'Scholarship & Fee Concession Report',
    type: 'Finance',
    generatedAt: '2026-02-15T10:45:00Z',
    format: 'Excel' as const,
    generatedBy: { name: 'Mr. Arvind Saxena', avatar: '' },
  },
];

export const metadata: Metadata = {
  title: 'Reports Overview',
  description:
    'View report generation statistics, access favourite reports, and browse recently generated reports across academic, financial, and administrative categories.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <ReportStats stats={stats} />

      <FavoriteReports
        title="Favourite Reports"
        description="Quickly access your most frequently used reports"
        reports={favoriteReports}
      />

      <RecentReports
        title="Recently Generated Reports"
        description="Reports generated in the last 7 days across all departments"
        reports={recentReports}
      />
    </div>
  );
}
