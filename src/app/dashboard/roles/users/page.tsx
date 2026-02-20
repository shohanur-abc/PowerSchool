import type { Metadata } from 'next';

import { RoleUsersTable, AssignUser } from '@/features/dashboard/roles';

// TODO: Replace static data with API calls to fetch users and their role assignments
// TODO: Add server actions for assigning and revoking user roles

const users = [
  {
    id: 'USR-001',
    name: 'Dr. Ramesh Chandra Sharma',
    email: 'ramesh.sharma@vidyalaya.edu.in',
    assignedDate: '2024-04-01',
    status: 'active' as const,
    avatar: '',
  },
  {
    id: 'USR-002',
    name: 'Smt. Kavita Devi Gupta',
    email: 'kavita.gupta@vidyalaya.edu.in',
    assignedDate: '2024-04-01',
    status: 'active' as const,
    avatar: '',
  },
  {
    id: 'USR-003',
    name: 'Shri Anil Kumar Verma',
    email: 'anil.verma@vidyalaya.edu.in',
    assignedDate: '2024-04-15',
    status: 'active' as const,
    avatar: '',
  },
  {
    id: 'USR-004',
    name: 'Mrs. Sunita Deshpande',
    email: 'sunita.deshpande@vidyalaya.edu.in',
    assignedDate: '2024-04-15',
    status: 'active' as const,
    avatar: '',
  },
  {
    id: 'USR-005',
    name: 'Mr. Rajesh Kumar Singh',
    email: 'rajesh.singh@vidyalaya.edu.in',
    assignedDate: '2024-04-01',
    status: 'active' as const,
    avatar: '',
  },
  {
    id: 'USR-006',
    name: 'Mrs. Deepa Nair',
    email: 'deepa.nair@vidyalaya.edu.in',
    assignedDate: '2024-04-10',
    status: 'active' as const,
    avatar: '',
  },
  {
    id: 'USR-007',
    name: 'Mr. Anil Joshi',
    email: 'anil.joshi@vidyalaya.edu.in',
    assignedDate: '2024-04-01',
    status: 'active' as const,
    avatar: '',
  },
  {
    id: 'USR-008',
    name: 'Mrs. Meena Rao',
    email: 'meena.rao@vidyalaya.edu.in',
    assignedDate: '2024-04-10',
    status: 'active' as const,
    avatar: '',
  },
  {
    id: 'USR-009',
    name: 'Shri Prakash Tiwari',
    email: 'prakash.tiwari@vidyalaya.edu.in',
    assignedDate: '2024-05-01',
    status: 'active' as const,
    avatar: '',
  },
  {
    id: 'USR-010',
    name: 'Mrs. Padma Krishnan',
    email: 'padma.krishnan@vidyalaya.edu.in',
    assignedDate: '2024-04-01',
    status: 'active' as const,
    avatar: '',
  },
  {
    id: 'USR-011',
    name: 'Mr. Suresh Patil',
    email: 'suresh.patil@vidyalaya.edu.in',
    assignedDate: '2024-05-01',
    status: 'inactive' as const,
    avatar: '',
  },
  {
    id: 'USR-012',
    name: 'Mrs. Anjali Bhattacharya',
    email: 'anjali.bhattacharya@vidyalaya.edu.in',
    assignedDate: '2024-04-01',
    status: 'active' as const,
    avatar: '',
  },
  {
    id: 'USR-013',
    name: 'Smt. Rekha Mishra',
    email: 'rekha.mishra@vidyalaya.edu.in',
    assignedDate: '2024-04-01',
    status: 'active' as const,
    avatar: '',
  },
  {
    id: 'USR-014',
    name: 'Mr. Vikrant Saxena',
    email: 'vikrant.saxena@vidyalaya.edu.in',
    assignedDate: '2024-04-01',
    status: 'inactive' as const,
    avatar: '',
  },
  {
    id: 'USR-015',
    name: 'Mrs. Lakshmi Iyer',
    email: 'lakshmi.iyer@vidyalaya.edu.in',
    assignedDate: '2024-04-10',
    status: 'active' as const,
    avatar: '',
  },
];

const roleOptions = [
  { label: 'Super Admin', value: 'super-admin' },
  { label: 'Principal', value: 'principal' },
  { label: 'Vice Principal', value: 'vice-principal' },
  { label: 'Teacher', value: 'teacher' },
  { label: 'Class Teacher', value: 'class-teacher' },
  { label: 'Accountant', value: 'accountant' },
  { label: 'Parent', value: 'parent' },
  { label: 'Student', value: 'student' },
];

export const metadata: Metadata = {
  title: 'Role Users',
  description:
    'View users assigned to each role, manage role assignments, and assign new roles to users in the school management system.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <RoleUsersTable
        title="Users & Role Assignments"
        users={users}
        roles={roleOptions}
        selectedRole="all"
      />

      <AssignUser title="Assign Role to User" roles={roleOptions} />
    </div>
  );
}
