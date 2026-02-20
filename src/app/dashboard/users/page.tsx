import type { Metadata } from 'next';

import {
  UserStats,
  UserTable,
  UserGrowth,
} from '@/features/dashboard/users';

// TODO: Replace static data with API calls to fetch real-time user data
// TODO: Integrate with user management service for live statistics

const stats = [
  {
    title: 'Total Users',
    value: '1,284',
    change: '+3.2%',
    changeType: 'up' as const,
    icon: 'Users',
    description: 'All registered users across the school system',
  },
  {
    title: 'Active Users',
    value: '1,106',
    change: '+1.8%',
    changeType: 'up' as const,
    icon: 'UserCheck',
    description: 'Users who logged in within the last 30 days',
  },
  {
    title: 'New Users',
    value: '47',
    change: '+12.5%',
    changeType: 'up' as const,
    icon: 'UserPlus',
    description: 'Users added this month',
  },
  {
    title: 'Inactive Users',
    value: '178',
    change: '-2.1%',
    changeType: 'down' as const,
    icon: 'UserX',
    description: 'Users inactive for more than 30 days',
  },
];

const users = [
  { id: 'USR-001', name: 'Rajesh Kumar', email: 'rajesh.kumar@school.edu.in', role: 'Principal', status: 'active' as const, lastLogin: '2026-02-19 08:12 AM', avatar: '', created: '2023-06-15' },
  { id: 'USR-002', name: 'Sunita Verma', email: 'sunita.verma@school.edu.in', role: 'Teacher', status: 'active' as const, lastLogin: '2026-02-19 07:45 AM', avatar: '', created: '2023-07-20' },
  { id: 'USR-003', name: 'Anil Joshi', email: 'anil.joshi@school.edu.in', role: 'Teacher', status: 'active' as const, lastLogin: '2026-02-18 09:30 AM', avatar: '', created: '2023-08-10' },
  { id: 'USR-004', name: 'Deepa Nair', email: 'deepa.nair@school.edu.in', role: 'Teacher', status: 'active' as const, lastLogin: '2026-02-19 08:05 AM', avatar: '', created: '2024-01-12' },
  { id: 'USR-005', name: 'Meena Rao', email: 'meena.rao@school.edu.in', role: 'Teacher', status: 'inactive' as const, lastLogin: '2026-01-10 10:15 AM', avatar: '', created: '2023-09-01' },
  { id: 'USR-006', name: 'Vikram Sharma', email: 'vikram.sharma@school.edu.in', role: 'Accountant', status: 'active' as const, lastLogin: '2026-02-19 09:00 AM', avatar: '', created: '2023-06-20' },
  { id: 'USR-007', name: 'Padma Krishnan', email: 'padma.krishnan@school.edu.in', role: 'Teacher', status: 'active' as const, lastLogin: '2026-02-18 07:55 AM', avatar: '', created: '2024-03-15' },
  { id: 'USR-008', name: 'Suresh Patil', email: 'suresh.patil@school.edu.in', role: 'Admin', status: 'active' as const, lastLogin: '2026-02-19 08:30 AM', avatar: '', created: '2023-06-15' },
  { id: 'USR-009', name: 'Kavita Deshmukh', email: 'kavita.deshmukh@school.edu.in', role: 'Teacher', status: 'active' as const, lastLogin: '2026-02-17 08:20 AM', avatar: '', created: '2024-06-01' },
  { id: 'USR-010', name: 'Ramesh Iyer', email: 'ramesh.iyer@school.edu.in', role: 'Librarian', status: 'inactive' as const, lastLogin: '2025-12-22 11:00 AM', avatar: '', created: '2023-11-10' },
  { id: 'USR-011', name: 'Anjali Bhatt', email: 'anjali.bhatt@school.edu.in', role: 'Counsellor', status: 'active' as const, lastLogin: '2026-02-19 09:10 AM', avatar: '', created: '2024-07-20' },
  { id: 'USR-012', name: 'Mohit Saxena', email: 'mohit.saxena@school.edu.in', role: 'Teacher', status: 'active' as const, lastLogin: '2026-02-18 08:45 AM', avatar: '', created: '2024-04-05' },
];

const growthData = [
  { date: 'Mar 2025', newUsers: 32, totalUsers: 1085 },
  { date: 'Apr 2025', newUsers: 17, totalUsers: 1102 },
  { date: 'May 2025', newUsers: 8, totalUsers: 1110 },
  { date: 'Jun 2025', newUsers: 12, totalUsers: 1098 },
  { date: 'Jul 2025', newUsers: 37, totalUsers: 1135 },
  { date: 'Aug 2025', newUsers: 33, totalUsers: 1168 },
  { date: 'Sep 2025', newUsers: 27, totalUsers: 1195 },
  { date: 'Oct 2025', newUsers: 15, totalUsers: 1210 },
  { date: 'Nov 2025', newUsers: 18, totalUsers: 1228 },
  { date: 'Dec 2025', newUsers: 12, totalUsers: 1240 },
  { date: 'Jan 2026', newUsers: 18, totalUsers: 1258 },
  { date: 'Feb 2026', newUsers: 26, totalUsers: 1284 },
];

export const metadata: Metadata = {
  title: 'Users Overview',
  description:
    'View user statistics, manage all registered users, and track user growth trends across the school management system.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <UserStats stats={stats} />

      <UserTable
        title="All Users"
        users={users}
      />

      <UserGrowth
        title="User Growth"
        description="Monthly registered user count over the last 12 months"
        data={growthData}
      />
    </div>
  );
}
