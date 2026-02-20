import type { Metadata } from 'next';

import {
  NoticeStats,
  NoticeList,
  PinnedNotices,
} from '@/features/dashboard/notices';

// TODO: Replace static data with API calls to fetch real-time notice data
// TODO: Integrate with notice service for live statistics

const stats = [
  {
    title: 'Total Notices',
    value: '184',
    change: '+12.5%',
    changeType: 'up' as const,
    icon: 'FileText',
    description: 'Total notices published this academic year',
  },
  {
    title: 'Active Notices',
    value: '23',
    change: '+3.1%',
    changeType: 'up' as const,
    icon: 'Bell',
    description: 'Currently active and visible notices',
  },
  {
    title: 'Pinned Notices',
    value: '5',
    change: '0%',
    changeType: 'up' as const,
    icon: 'Pin',
    description: 'High-priority pinned notices on the board',
  },
  {
    title: 'Avg. Read Rate',
    value: '78.6%',
    change: '+4.2%',
    changeType: 'up' as const,
    icon: 'Eye',
    description: 'Average read rate across all active notices',
  },
];

const recentNotices = [
  {
    id: 'NTC-001',
    title: 'Annual Day Celebration — 15th March 2026',
    preview: 'All students and parents are cordially invited to the Annual Day Celebration. Rehearsals from 10th March onwards.',
    date: '2026-02-19',
    priority: 'high' as const,
    author: { name: 'Mrs. Sunita Verma' },
    audience: ['All Students', 'Parents'],
  },
  {
    id: 'NTC-002',
    title: 'PTM Scheduled for Class IX & X',
    preview: 'Parent-Teacher Meeting for Classes IX and X on 22nd February 2026 from 9:00 AM to 1:00 PM.',
    date: '2026-02-18',
    priority: 'high' as const,
    author: { name: 'Mr. Rajesh Kumar' },
    audience: ['Parents — Class IX & X'],
  },
  {
    id: 'NTC-003',
    title: 'Winter Uniform Transition Notice',
    preview: 'Winter uniform optional from 1st March 2026. Summer uniform compulsory from 15th March onwards.',
    date: '2026-02-17',
    priority: 'medium' as const,
    author: { name: 'Ms. Deepa Nair' },
    audience: ['All Students'],
  },
  {
    id: 'NTC-004',
    title: 'Library Book Return Reminder',
    preview: 'All borrowed books must be returned by 28th February 2026 for annual stock verification.',
    date: '2026-02-16',
    priority: 'medium' as const,
    author: { name: 'Mr. Anil Joshi' },
    audience: ['All Students'],
  },
  {
    id: 'NTC-005',
    title: 'Science Exhibition Registrations Open',
    preview: 'Registrations for Inter-House Science Exhibition open for Classes VI to XII. Last date: 5th March 2026.',
    date: '2026-02-15',
    priority: 'low' as const,
    author: { name: 'Mrs. Meena Rao' },
    audience: ['Students — Class VI to XII'],
  },
  {
    id: 'NTC-006',
    title: 'Bus Route 7 Timing Change',
    preview: 'Bus Route 7 departs 15 minutes earlier from 20th February due to road construction near Sector 14.',
    date: '2026-02-14',
    priority: 'medium' as const,
    author: { name: 'Mr. Vikram Singh' },
    audience: ['Parents — Route 7'],
  },
  {
    id: 'NTC-007',
    title: 'Mid-Term Exam Schedule Released',
    preview: 'Mid-term exam schedule for Classes I to XII uploaded on school portal. Exams from 10th March 2026.',
    date: '2026-02-13',
    priority: 'high' as const,
    author: { name: 'Mrs. Padma Krishnan' },
    audience: ['All Students', 'Parents'],
  },
  {
    id: 'NTC-008',
    title: 'Canteen Menu Updated',
    preview: 'School canteen menu revised with healthier options. Effective from 24th February 2026.',
    date: '2026-02-12',
    priority: 'low' as const,
    author: { name: 'Ms. Kavitha Nambiar' },
    audience: ['All Students', 'Staff'],
  },
];

const pinnedNotices = [
  {
    id: 'PIN-001',
    title: 'Board Exam Preparation Guidelines — Class X & XII',
    content: 'CBSE Board Examinations will begin from 15th February 2026. Students must carry their admit cards and follow the examination hall rules strictly. Extra classes will continue until the exam dates.',
    date: '2026-02-10',
    priority: 'critical' as const,
    author: 'Principal — Dr. Ramesh Chandra',
  },
  {
    id: 'PIN-002',
    title: 'Fee Payment Deadline — Term 3',
    content: 'The last date for payment of Term 3 fees is 28th February 2026. A late fee surcharge of ₹500 will be applicable after the due date. Pay online via the school portal or at the accounts office.',
    date: '2026-02-08',
    priority: 'critical' as const,
    author: 'Accounts Department',
  },
  {
    id: 'PIN-003',
    title: 'COVID-19 Safety Protocol Reminder',
    content: 'Students showing symptoms of fever, cold, or cough must stay home and inform the class teacher. Sanitisation drives will continue every Saturday. Masks are recommended in crowded areas.',
    date: '2026-02-05',
    priority: 'high' as const,
    author: 'School Health Committee',
  },
  {
    id: 'PIN-004',
    title: 'Annual Day Celebration — 15th March 2026',
    content: 'All students and parents are cordially invited. Cultural programme rehearsals begin 10th March. Participation certificates will be issued to all performers.',
    date: '2026-02-04',
    priority: 'high' as const,
    author: 'Cultural Committee',
  },
  {
    id: 'PIN-005',
    title: 'School Timings Revised for Summer',
    content: 'Effective 1st April 2026, school timings will change to 7:00 AM – 1:00 PM. Bus schedules will be updated accordingly. Parents will receive the revised timetable via SMS.',
    date: '2026-02-01',
    priority: 'medium' as const,
    author: 'Administration Office',
  },
];

export const metadata: Metadata = {
  title: 'Notices Overview',
  description:
    'View school notice board with active notices, pinned announcements, and notice statistics for the current academic session.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <NoticeStats stats={stats} />

      <div className="grid grid-cols-1 @4xl:grid-cols-2 gap-6">
        <NoticeList
          title="Recent Notices"
          notices={recentNotices}
        />

        <PinnedNotices
          title="Pinned Notices"
          notices={pinnedNotices}
        />
      </div>
    </div>
  );
}
