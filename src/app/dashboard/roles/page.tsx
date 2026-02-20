import type { Metadata } from 'next';

import { RoleStats, RoleList } from '@/features/dashboard/roles';

// TODO: Replace static data with API calls to fetch roles from the database
// TODO: Integrate with role management service for live statistics

const stats = [
  {
    title: 'Total Roles',
    value: '8',
    change: '+1',
    changeType: 'up' as const,
    icon: 'Shield',
    description: 'Active roles configured in the system',
  },
  {
    title: 'Admin Users',
    value: '5',
    change: '0',
    changeType: 'up' as const,
    icon: 'ShieldCheck',
    description: 'Users with administrative privileges',
  },
  {
    title: 'Teaching Staff',
    value: '48',
    change: '+3',
    changeType: 'up' as const,
    icon: 'GraduationCap',
    description: 'Users assigned teaching roles',
  },
  {
    title: 'Total Users',
    value: '2,340',
    change: '+12',
    changeType: 'up' as const,
    icon: 'Users',
    description: 'Total users with assigned roles across the school',
  },
];

const roles = [
  {
    id: 'ROLE-001',
    name: 'Super Admin',
    description: 'Full access to all modules including system configuration, user management, and audit logs',
    userCount: 2,
    permissionsCount: 42,
    color: '#dc2626',
    icon: 'ShieldAlert',
  },
  {
    id: 'ROLE-002',
    name: 'Principal',
    description: 'School-wide oversight with access to reports, approvals, staff management, and academic monitoring',
    userCount: 1,
    permissionsCount: 35,
    color: '#7c3aed',
    icon: 'Crown',
  },
  {
    id: 'ROLE-003',
    name: 'Vice Principal',
    description: 'Assists the principal with academic coordination, discipline, and day-to-day school operations',
    userCount: 2,
    permissionsCount: 28,
    color: '#2563eb',
    icon: 'ShieldCheck',
  },
  {
    id: 'ROLE-004',
    name: 'Teacher',
    description: 'Manage class attendance, upload results, communicate with parents, and access student profiles',
    userCount: 48,
    permissionsCount: 18,
    color: '#059669',
    icon: 'BookOpen',
  },
  {
    id: 'ROLE-005',
    name: 'Class Teacher',
    description: 'Extended teacher role with class-level reports, parent communication, and student remarks',
    userCount: 26,
    permissionsCount: 22,
    color: '#0891b2',
    icon: 'ClipboardList',
  },
  {
    id: 'ROLE-006',
    name: 'Accountant',
    description: 'Manage fee collection, generate fee receipts, track dues, and handle financial reports',
    userCount: 4,
    permissionsCount: 14,
    color: '#ca8a04',
    icon: 'IndianRupee',
  },
  {
    id: 'ROLE-007',
    name: 'Parent',
    description: 'View child attendance, results, fee status, notices, and communicate with class teachers',
    userCount: 2200,
    permissionsCount: 8,
    color: '#ec4899',
    icon: 'Heart',
  },
  {
    id: 'ROLE-008',
    name: 'Student',
    description: 'Access timetable, view results, download study materials, and check attendance records',
    userCount: 57,
    permissionsCount: 6,
    color: '#f97316',
    icon: 'Backpack',
  },
];

export const metadata: Metadata = {
  title: 'Roles Overview',
  description:
    'View all roles configured in the school management system, their descriptions, assigned user counts, and permissions summary.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <RoleStats stats={stats} />

      <RoleList roles={roles} />
    </div>
  );
}
