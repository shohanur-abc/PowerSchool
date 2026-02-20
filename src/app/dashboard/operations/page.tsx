import type { Metadata } from 'next';

import {
  OperationsStats,
  QuickLinks,
} from '@/features/dashboard/operations';
import { ROUTES } from '@/lib/routes';

// TODO: Replace static data with API calls to fetch real-time operations data
// TODO: Integrate with operations service for live statistics

const stats = [
  {
    title: 'Total Students',
    value: '2,450',
    change: '+3.2%',
    changeType: 'up' as const,
    icon: 'GraduationCap',
    description: 'Currently enrolled students across all classes',
  },
  {
    title: 'Total Staff',
    value: '186',
    change: '+1.5%',
    changeType: 'up' as const,
    icon: 'Users',
    description: 'Teaching and non-teaching staff members',
  },
  {
    title: 'Active Classes',
    value: '64',
    change: '0%',
    changeType: 'up' as const,
    icon: 'School',
    description: 'Classes running in the current academic year',
  },
  {
    title: 'Upcoming Events',
    value: '12',
    change: '+4',
    changeType: 'up' as const,
    icon: 'CalendarDays',
    description: 'Scheduled events in the next 30 days',
  },
];

const links = [
  {
    title: 'Academic Calendar',
    description: 'View and manage academic calendar, holidays, and events',
    href: ROUTES.dashboard.operations.calendar,
    icon: 'Calendar',
  },
  {
    title: 'Class Management',
    description: 'Manage classes, sections, and room assignments',
    href: ROUTES.dashboard.operations.classes,
    icon: 'LayoutGrid',
  },
  {
    title: 'Staff Directory',
    description: 'Browse and manage teaching and non-teaching staff',
    href: ROUTES.dashboard.operations.staff,
    icon: 'UserCog',
  },
  {
    title: 'Student Directory',
    description: 'View and manage student records and enrolment',
    href: ROUTES.dashboard.operations.students,
    icon: 'BookUser',
  },
  {
    title: 'School Settings',
    description: 'Configure school information and academic settings',
    href: ROUTES.dashboard.operations.settings,
    icon: 'Settings',
  },
];

export const metadata: Metadata = {
  title: 'Operations Overview',
  description:
    'School operations dashboard with key metrics, quick access to calendar, classes, staff, students, and settings.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <OperationsStats stats={stats} />
      <QuickLinks links={links} />
    </div>
  );
}
