import type { Metadata } from 'next';

import { RoleTable, CreateRole } from '@/features/dashboard/roles';

// TODO: Replace static data with API calls to fetch roles from the database
// TODO: Add server actions for creating, updating, and deleting roles

const roles = [
  {
    id: 'ROLE-001',
    name: 'Super Admin',
    description: 'Full access to all modules including system configuration and audit logs',
    usersCount: 2,
    permissionsCount: 42,
    status: 'active' as const,
    created: '2024-04-01',
  },
  {
    id: 'ROLE-002',
    name: 'Principal',
    description: 'School-wide oversight with access to reports, approvals, and staff management',
    usersCount: 1,
    permissionsCount: 28,
    status: 'active' as const,
    created: '2024-04-01',
  },
  {
    id: 'ROLE-003',
    name: 'Vice Principal',
    description: 'Assists the principal with academic coordination and school operations',
    usersCount: 2,
    permissionsCount: 22,
    status: 'active' as const,
    created: '2024-04-15',
  },
  {
    id: 'ROLE-004',
    name: 'Teacher',
    description: 'Manage class attendance, upload results, and access student profiles',
    usersCount: 48,
    permissionsCount: 18,
    status: 'active' as const,
    created: '2024-04-01',
  },
  {
    id: 'ROLE-005',
    name: 'Class Teacher',
    description: 'Extended teacher role with class-level reports and parent communication',
    usersCount: 26,
    permissionsCount: 21,
    status: 'active' as const,
    created: '2024-04-10',
  },
  {
    id: 'ROLE-006',
    name: 'Accountant',
    description: 'Manage fee collection, generate receipts, and handle financial reports',
    usersCount: 4,
    permissionsCount: 12,
    status: 'active' as const,
    created: '2024-05-01',
  },
  {
    id: 'ROLE-007',
    name: 'Parent',
    description: 'View child attendance, results, fee status, and school notices',
    usersCount: 2200,
    permissionsCount: 8,
    status: 'active' as const,
    created: '2024-04-01',
  },
  {
    id: 'ROLE-008',
    name: 'Student',
    description: 'Access timetable, view results, and download study materials',
    usersCount: 57,
    permissionsCount: 6,
    status: 'active' as const,
    created: '2024-06-01',
  },
  {
    id: 'ROLE-009',
    name: 'Librarian',
    description: 'Manage book inventory, issue and return records, and library reports',
    usersCount: 3,
    permissionsCount: 9,
    status: 'inactive' as const,
    created: '2024-07-01',
  },
  {
    id: 'ROLE-010',
    name: 'Transport Coordinator',
    description: 'Manage bus routes, vehicle tracking, and transport fee records',
    usersCount: 2,
    permissionsCount: 7,
    status: 'inactive' as const,
    created: '2024-08-01',
  },
];

const baseRoles = [
  { label: 'Super Admin', value: 'super-admin' },
  { label: 'Principal', value: 'principal' },
  { label: 'Vice Principal', value: 'vice-principal' },
  { label: 'Teacher', value: 'teacher' },
  { label: 'Class Teacher', value: 'class-teacher' },
  { label: 'Accountant', value: 'accountant' },
  { label: 'Parent', value: 'parent' },
  { label: 'Student', value: 'student' },
];

const colors = [
  { label: 'Blue', value: 'blue', hex: '#3B82F6' },
  { label: 'Green', value: 'green', hex: '#22C55E' },
  { label: 'Red', value: 'red', hex: '#EF4444' },
  { label: 'Purple', value: 'purple', hex: '#A855F7' },
  { label: 'Orange', value: 'orange', hex: '#F97316' },
  { label: 'Teal', value: 'teal', hex: '#14B8A6' },
  { label: 'Indigo', value: 'indigo', hex: '#6366F1' },
  { label: 'Amber', value: 'amber', hex: '#F59E0B' },
];

export const metadata: Metadata = {
  title: 'Manage Roles',
  description:
    'Create, edit, and manage roles in the school management system. View role details, permissions, and assigned user counts.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <RoleTable title="All Roles" roles={roles} />

      <CreateRole title="Create New Role" baseRoles={baseRoles} colors={colors} />
    </div>
  );
}
