import type { Metadata } from 'next';

import {
  SystemHealth,
  AuditLog,
  BackupStatus,
  SystemConfig,
  DatabaseStats,
  ApiUsage,
} from '@/features/dashboard/admin';

// TODO: Replace static data with API calls to fetch real-time system administration data
// TODO: Add role-based access control — only super admins should access this page
// TODO: Integrate with monitoring service for live system health metrics

export const metadata: Metadata = {
  title: 'System Administration',
  description:
    'Monitor system health, audit logs, backup status, database statistics, and API usage for the school management platform.',
};

const systemHealthMetrics = [
  {
    title: 'CPU Usage',
    value: '34',
    unit: '%',
    percentage: 34,
    status: 'healthy' as const,
    icon: 'Cpu',
    description: 'Average load across 4 vCPUs — well within safe limits',
  },
  {
    title: 'Memory Usage',
    value: '6.2',
    unit: 'GB / 16 GB',
    percentage: 39,
    status: 'healthy' as const,
    icon: 'MemoryStick',
    description: 'RAM consumption stable — no memory leaks detected',
  },
  {
    title: 'Disk Usage',
    value: '142',
    unit: 'GB / 200 GB',
    percentage: 71,
    status: 'warning' as const,
    icon: 'HardDrive',
    description: 'Storage nearing 75% threshold — consider archiving old records',
  },
  {
    title: 'Network Latency',
    value: '12',
    unit: 'ms',
    percentage: 8,
    status: 'healthy' as const,
    icon: 'Wifi',
    description: 'Response time within optimal range for Mumbai region',
  },
  {
    title: 'Active Sessions',
    value: '287',
    unit: 'users',
    percentage: 57,
    status: 'healthy' as const,
    icon: 'Users',
    description: 'Currently connected teachers, parents, and staff',
  },
  {
    title: 'Error Rate',
    value: '0.03',
    unit: '%',
    percentage: 3,
    status: 'healthy' as const,
    icon: 'ShieldAlert',
    description: 'Minimal errors in the last 24 hours — system stable',
  },
];

const auditLogEntries = [
  { id: 'AUD-001', timestamp: '2026-02-19T09:15:32', adminUser: 'Mr. Arvind Mehta', action: 'Updated fee structure for Academic Year 2026-27', actionType: 'update' as const, module: 'Fees', details: 'Revised tuition fees for Classes I–XII as per management directive', ip: '192.168.1.10' },
  { id: 'AUD-002', timestamp: '2026-02-19T08:48:17', adminUser: 'Mrs. Sunita Sharma', action: 'Created new user account for Mr. Deepak Tiwari', actionType: 'create' as const, module: 'Users', details: 'Added Hindi teacher role with Class VI–VIII access', ip: '192.168.1.25' },
  { id: 'AUD-003', timestamp: '2026-02-19T08:30:05', adminUser: 'System', action: 'Automated daily database backup completed', actionType: 'config' as const, module: 'Backup', details: 'Full backup — 4.8 GB compressed to cloud storage', ip: '10.0.0.1' },
  { id: 'AUD-004', timestamp: '2026-02-19T08:12:44', adminUser: 'Mr. Arvind Mehta', action: 'Logged in to admin panel', actionType: 'login' as const, module: 'Auth', details: 'Successful MFA-verified login from admin workstation', ip: '192.168.1.10' },
  { id: 'AUD-005', timestamp: '2026-02-18T17:30:00', adminUser: 'Mrs. Sunita Sharma', action: 'Deleted inactive student record — Ravi Tiwari (graduated 2024)', actionType: 'delete' as const, module: 'Students', details: 'Record archived as per data retention policy before deletion', ip: '192.168.1.25' },
  { id: 'AUD-006', timestamp: '2026-02-18T16:45:22', adminUser: 'Mr. Arvind Mehta', action: 'Updated SMTP email configuration', actionType: 'config' as const, module: 'Settings', details: 'Changed outbound email provider to SendGrid for improved deliverability', ip: '192.168.1.10' },
  { id: 'AUD-007', timestamp: '2026-02-18T15:20:11', adminUser: 'Mrs. Sunita Sharma', action: 'Created new class section XII-Commerce-B', actionType: 'create' as const, module: 'Classes', details: 'Added section to accommodate 38 new Commerce stream admissions', ip: '192.168.1.25' },
  { id: 'AUD-008', timestamp: '2026-02-18T14:05:33', adminUser: 'Mr. Arvind Mehta', action: 'Updated examination schedule for Mid-Term 2026', actionType: 'update' as const, module: 'Exams', details: 'Rescheduled Class X Math exam from March 5 to March 8', ip: '192.168.1.10' },
  { id: 'AUD-009', timestamp: '2026-02-18T11:40:18', adminUser: 'System', action: 'Session timeout policy enforced', actionType: 'config' as const, module: 'Security', details: 'Terminated 14 idle sessions exceeding 30-minute inactivity threshold', ip: '10.0.0.1' },
  { id: 'AUD-010', timestamp: '2026-02-18T09:00:00', adminUser: 'Mr. Arvind Mehta', action: 'Logged in to admin panel', actionType: 'login' as const, module: 'Auth', details: 'Successful login from school network', ip: '192.168.1.10' },
];

const backupData = {
  lastBackupDate: '2026-02-19',
  lastBackupTime: '08:30 AM IST',
  backupSize: '4.8 GB',
  nextScheduled: '2026-02-20 at 08:30 AM IST',
  backupType: 'auto' as const,
  status: 'success' as const,
};

const systemConfigData = {
  siteName: 'Saraswati Vidya Mandir — School Management System',
  maintenanceMode: false,
  smtpHost: 'smtp.sendgrid.net',
  smtpPort: '587',
  smtpUser: 'noreply@saraswatividya.edu.in',
  sessionTimeout: '30',
  passwordMinLength: '8',
  apiKey: '',
};

const databaseStatsData = [
  {
    title: 'Total Records',
    value: '2,84,531',
    icon: 'Database',
    description: 'Across all collections — students, staff, fees, attendance, exams',
  },
  {
    title: 'Student Records',
    value: '1,234',
    icon: 'GraduationCap',
    description: 'Active student profiles for Academic Year 2025-26',
  },
  {
    title: 'Staff Records',
    value: '98',
    icon: 'UserCog',
    description: 'Teaching and non-teaching staff accounts',
  },
  {
    title: 'Attendance Entries',
    value: '1,87,420',
    icon: 'CalendarCheck',
    description: 'Daily attendance logs since system deployment',
  },
  {
    title: 'Fee Transactions',
    value: '45,210',
    icon: 'IndianRupee',
    description: 'Payment records with receipt references',
  },
  {
    title: 'Storage Used',
    value: '18.6',
    unit: 'GB',
    icon: 'HardDrive',
    description: 'MongoDB Atlas M10 cluster — 50 GB allocated',
  },
];

const apiUsageData = [
  { date: 'Feb 05', requests: 12450 },
  { date: 'Feb 06', requests: 13200 },
  { date: 'Feb 07', requests: 11800 },
  { date: 'Feb 08', requests: 4200 },
  { date: 'Feb 09', requests: 3800 },
  { date: 'Feb 10', requests: 14100 },
  { date: 'Feb 11', requests: 13750 },
  { date: 'Feb 12', requests: 15200 },
  { date: 'Feb 13', requests: 14800 },
  { date: 'Feb 14', requests: 13900 },
  { date: 'Feb 15', requests: 4500 },
  { date: 'Feb 16', requests: 3900 },
  { date: 'Feb 17', requests: 14600 },
  { date: 'Feb 18', requests: 15100 },
  { date: 'Feb 19', requests: 11320 },
];

export default function Page() {
  return (
    <div className="@container space-y-6">
      <SystemHealth metrics={systemHealthMetrics} />

      <div className="grid grid-cols-1 @4xl:grid-cols-2 gap-6">
        <BackupStatus
          title="Backup Status"
          backup={backupData}
        />

        <SystemConfig
          title="System Configuration"
          defaultValues={systemConfigData}
        />
      </div>

      <DatabaseStats stats={databaseStatsData} />

      <ApiUsage
        title="API Usage — Last 15 Days"
        description="Total REST API requests from the school portal, mobile app, and third-party integrations"
        data={apiUsageData}
      />

      <AuditLog
        title="Recent Audit Log"
        entries={auditLogEntries}
      />
    </div>
  );
}
