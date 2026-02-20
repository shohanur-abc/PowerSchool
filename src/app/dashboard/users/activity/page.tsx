import type { Metadata } from 'next';

import {
  ActivityLog,
  LoginChart,
} from '@/features/dashboard/users';

// TODO: Replace static data with API calls to fetch user activity logs
// TODO: Integrate with audit trail service for real-time activity tracking

const activities = [
  { id: 'ACT-001', userName: 'Rajesh Kumar', action: 'Login', timestamp: '2026-02-19 08:12:34', ipAddress: '192.168.1.101', device: 'Chrome on Windows', status: 'success' as const },
  { id: 'ACT-002', userName: 'Sunita Verma', action: 'Login', timestamp: '2026-02-19 07:45:12', ipAddress: '192.168.1.115', device: 'Safari on macOS', status: 'success' as const },
  { id: 'ACT-003', userName: 'Anil Joshi', action: 'Password Change', timestamp: '2026-02-19 09:30:45', ipAddress: '192.168.1.108', device: 'Chrome on Windows', status: 'success' as const },
  { id: 'ACT-004', userName: 'Deepa Nair', action: 'Login', timestamp: '2026-02-19 08:05:22', ipAddress: '192.168.1.122', device: 'Firefox on Linux', status: 'success' as const },
  { id: 'ACT-005', userName: 'Meena Rao', action: 'Login Failed', timestamp: '2026-02-19 10:15:08', ipAddress: '10.0.0.45', device: 'Chrome on Android', status: 'failed' as const },
  { id: 'ACT-006', userName: 'Vikram Sharma', action: 'Role Update', timestamp: '2026-02-18 14:20:55', ipAddress: '192.168.1.101', device: 'Chrome on Windows', status: 'success' as const },
  { id: 'ACT-007', userName: 'Padma Krishnan', action: 'MFA Enabled', timestamp: '2026-02-18 11:42:30', ipAddress: '192.168.1.130', device: 'Safari on macOS', status: 'success' as const },
  { id: 'ACT-008', userName: 'Suresh Patil', action: 'User Created', timestamp: '2026-02-18 09:15:18', ipAddress: '192.168.1.101', device: 'Chrome on Windows', status: 'success' as const },
  { id: 'ACT-009', userName: 'Kavita Deshmukh', action: 'Login', timestamp: '2026-02-17 08:20:41', ipAddress: '10.0.0.78', device: 'Chrome on Android', status: 'success' as const },
  { id: 'ACT-010', userName: 'Ramesh Iyer', action: 'Account Locked', timestamp: '2026-02-17 16:05:33', ipAddress: '10.0.0.92', device: 'Firefox on Windows', status: 'failed' as const },
  { id: 'ACT-011', userName: 'Anjali Bhatt', action: 'Profile Update', timestamp: '2026-02-17 12:30:15', ipAddress: '192.168.1.140', device: 'Edge on Windows', status: 'success' as const },
  { id: 'ACT-012', userName: 'Mohit Saxena', action: 'Login Failed', timestamp: '2026-02-16 07:55:20', ipAddress: '10.0.0.55', device: 'Chrome on Android', status: 'failed' as const },
];

const loginData = [
  { date: 'Feb 05', success: 245, failed: 12 },
  { date: 'Feb 06', success: 258, failed: 8 },
  { date: 'Feb 07', success: 232, failed: 15 },
  { date: 'Feb 08', success: 120, failed: 5 },
  { date: 'Feb 09', success: 98, failed: 3 },
  { date: 'Feb 10', success: 261, failed: 11 },
  { date: 'Feb 11', success: 249, failed: 9 },
  { date: 'Feb 12', success: 270, failed: 14 },
  { date: 'Feb 13', success: 255, failed: 7 },
  { date: 'Feb 14', success: 238, failed: 18 },
  { date: 'Feb 15', success: 115, failed: 4 },
  { date: 'Feb 16', success: 102, failed: 6 },
  { date: 'Feb 17', success: 264, failed: 10 },
  { date: 'Feb 18', success: 252, failed: 13 },
  { date: 'Feb 19', success: 271, failed: 9 },
];

export const metadata: Metadata = {
  title: 'User Activity',
  description:
    'Monitor user login activity, track authentication events, and review security audit logs across the school management system.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <ActivityLog
        title="Activity Log"
        activities={activities}
      />

      <LoginChart
        title="Login Activity"
        description="Successful and failed login attempts over the last 15 days"
        data={loginData}
      />
    </div>
  );
}
