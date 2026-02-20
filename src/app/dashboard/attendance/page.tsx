import type { Metadata } from 'next';

import {
  AttendanceStats,
  DailyTrend,
  ClassBreakdown,
  RecentRecords,
  AttendanceAlerts,
} from '@/features/dashboard/attendance';

// TODO: Replace static data with API calls to fetch real-time attendance data
// TODO: Integrate with attendance service for live statistics

const stats = [
  {
    title: 'Total Present',
    value: '1,847',
    change: '+2.4%',
    changeType: 'up' as const,
    icon: 'CalendarCheck',
    description: 'Students present today across all classes',
  },
  {
    title: 'Total Absent',
    value: '153',
    change: '-1.2%',
    changeType: 'down' as const,
    icon: 'UserX',
    description: 'Students absent today across all classes',
  },
  {
    title: 'Late Arrivals',
    value: '67',
    change: '+0.8%',
    changeType: 'up' as const,
    icon: 'Clock',
    description: 'Students who arrived late today',
  },
  {
    title: 'Attendance Rate',
    value: '92.4%',
    change: '+1.1%',
    changeType: 'up' as const,
    icon: 'TrendingUp',
    description: 'Overall attendance percentage for today',
  },
];

const dailyTrendData = [
  { date: 'Feb 03', present: 1820, absent: 160, late: 52 },
  { date: 'Feb 04', present: 1835, absent: 148, late: 58 },
  { date: 'Feb 05', present: 1810, absent: 172, late: 45 },
  { date: 'Feb 06', present: 1850, absent: 135, late: 61 },
  { date: 'Feb 07', present: 1805, absent: 178, late: 49 },
  { date: 'Feb 10', present: 1840, absent: 142, late: 55 },
  { date: 'Feb 11', present: 1825, absent: 158, late: 63 },
  { date: 'Feb 12', present: 1860, absent: 125, late: 47 },
  { date: 'Feb 13', present: 1838, absent: 145, late: 59 },
  { date: 'Feb 14', present: 1815, absent: 168, late: 54 },
  { date: 'Feb 17', present: 1842, absent: 140, late: 50 },
  { date: 'Feb 18', present: 1855, absent: 130, late: 62 },
  { date: 'Feb 19', present: 1847, absent: 153, late: 67 },
  { date: 'Feb 20', present: 1830, absent: 152, late: 56 },
];

const classBreakdownData = [
  { className: 'Class I-A', total: 45, present: 42, absent: 2, late: 1, percentage: 93 },
  { className: 'Class I-B', total: 44, present: 40, absent: 3, late: 1, percentage: 91 },
  { className: 'Class II-A', total: 46, present: 43, absent: 2, late: 1, percentage: 93 },
  { className: 'Class III-A', total: 48, present: 44, absent: 3, late: 1, percentage: 92 },
  { className: 'Class IV-A', total: 47, present: 42, absent: 3, late: 2, percentage: 89 },
  { className: 'Class V-A', total: 45, present: 41, absent: 2, late: 2, percentage: 91 },
  { className: 'Class VI-A', total: 50, present: 46, absent: 3, late: 1, percentage: 92 },
  { className: 'Class VII-A', total: 48, present: 43, absent: 4, late: 1, percentage: 90 },
  { className: 'Class VIII-A', total: 46, present: 41, absent: 3, late: 2, percentage: 89 },
  { className: 'Class IX-A', total: 50, present: 45, absent: 3, late: 2, percentage: 90 },
  { className: 'Class X-A', total: 48, present: 44, absent: 2, late: 2, percentage: 92 },
  { className: 'Class XI-Sci', total: 42, present: 39, absent: 2, late: 1, percentage: 93 },
  { className: 'Class XII-Sci', total: 40, present: 37, absent: 2, late: 1, percentage: 93 },
];

const recentRecords = [
  { id: 'ATT-001', studentName: 'Aarav Sharma', studentAvatar: '', rollNo: '1001', className: 'X', section: 'A', status: 'present' as const, time: '07:45 AM', markedBy: 'Mrs. Sunita Verma' },
  { id: 'ATT-002', studentName: 'Priya Patel', studentAvatar: '', rollNo: '1002', className: 'X', section: 'A', status: 'present' as const, time: '07:48 AM', markedBy: 'Mrs. Sunita Verma' },
  { id: 'ATT-003', studentName: 'Rohan Gupta', studentAvatar: '', rollNo: '1003', className: 'IX', section: 'B', status: 'late' as const, time: '08:15 AM', markedBy: 'Mr. Rajesh Kumar' },
  { id: 'ATT-004', studentName: 'Ananya Singh', studentAvatar: '', rollNo: '1004', className: 'IX', section: 'A', status: 'absent' as const, time: '08:00 AM', markedBy: 'Mr. Rajesh Kumar' },
  { id: 'ATT-005', studentName: 'Vikram Reddy', studentAvatar: '', rollNo: '1005', className: 'VIII', section: 'A', status: 'present' as const, time: '07:50 AM', markedBy: 'Ms. Deepa Nair' },
  { id: 'ATT-006', studentName: 'Neha Deshmukh', studentAvatar: '', rollNo: '1006', className: 'VIII', section: 'B', status: 'excused' as const, time: '08:00 AM', markedBy: 'Ms. Deepa Nair' },
  { id: 'ATT-007', studentName: 'Arjun Mehta', studentAvatar: '', rollNo: '1007', className: 'VII', section: 'A', status: 'present' as const, time: '07:42 AM', markedBy: 'Mr. Anil Joshi' },
  { id: 'ATT-008', studentName: 'Kavya Iyer', studentAvatar: '', rollNo: '1008', className: 'VII', section: 'A', status: 'late' as const, time: '08:20 AM', markedBy: 'Mr. Anil Joshi' },
  { id: 'ATT-009', studentName: 'Siddharth Nair', studentAvatar: '', rollNo: '1009', className: 'VI', section: 'B', status: 'present' as const, time: '07:55 AM', markedBy: 'Mrs. Meena Rao' },
  { id: 'ATT-010', studentName: 'Ishita Banerjee', studentAvatar: '', rollNo: '1010', className: 'VI', section: 'A', status: 'absent' as const, time: '08:00 AM', markedBy: 'Mrs. Meena Rao' },
  { id: 'ATT-011', studentName: 'Aditya Kulkarni', studentAvatar: '', rollNo: '1011', className: 'V', section: 'A', status: 'present' as const, time: '07:40 AM', markedBy: 'Mrs. Padma Krishnan' },
  { id: 'ATT-012', studentName: 'Divya Choudhury', studentAvatar: '', rollNo: '1012', className: 'V', section: 'B', status: 'present' as const, time: '07:52 AM', markedBy: 'Mrs. Padma Krishnan' },
];

const alerts = [
  { id: 'ALERT-001', studentName: 'Rahul Tiwari', studentAvatar: '', className: 'IX', section: 'A', severity: 'critical' as const, message: 'Absent for 5 consecutive school days without prior notice', attendanceRate: 62, consecutiveAbsences: 5 },
  { id: 'ALERT-002', studentName: 'Meera Joshi', studentAvatar: '', className: 'VIII', section: 'B', severity: 'critical' as const, message: 'Attendance dropped below 65% this month', attendanceRate: 64, consecutiveAbsences: 3 },
  { id: 'ALERT-003', studentName: 'Kunal Saxena', studentAvatar: '', className: 'X', section: 'A', severity: 'warning' as const, message: 'Frequently arriving late — 8 late marks this month', attendanceRate: 78 },
  { id: 'ALERT-004', studentName: 'Sneha Pillai', studentAvatar: '', className: 'VII', section: 'A', severity: 'warning' as const, message: 'Attendance rate declining over last 3 weeks', attendanceRate: 74, consecutiveAbsences: 2 },
  { id: 'ALERT-005', studentName: 'Vivek Malhotra', studentAvatar: '', className: 'VI', section: 'B', severity: 'info' as const, message: 'Returned after extended medical leave — monitor attendance', attendanceRate: 81 },
  { id: 'ALERT-006', studentName: 'Pooja Bhatt', studentAvatar: '', className: 'XI', section: 'Sci', severity: 'warning' as const, message: 'Absent 3 consecutive days — parent not reachable', attendanceRate: 71, consecutiveAbsences: 3 },
  { id: 'ALERT-007', studentName: 'Rajat Kapoor', studentAvatar: '', className: 'XII', section: 'Sci', severity: 'info' as const, message: 'Attendance improving — up from 70% to 82% this month', attendanceRate: 82 },
  { id: 'ALERT-008', studentName: 'Nandini Rao', studentAvatar: '', className: 'V', section: 'A', severity: 'critical' as const, message: 'Absent for 4 days — guardian notified but no response', attendanceRate: 58, consecutiveAbsences: 4 },
];

export const metadata: Metadata = {
  title: 'Attendance Overview',
  description:
    'View real-time attendance statistics, daily trends, class-wise breakdowns, recent attendance records, and student attendance alerts across the school.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <AttendanceStats stats={stats} />

      <DailyTrend
        title="Daily Attendance Trend"
        description="Present, absent, and late counts over the last 14 school days"
        data={dailyTrendData}
      />

      <div className="grid grid-cols-1 @4xl:grid-cols-2 gap-6">
        <ClassBreakdown
          title="Class-wise Breakdown"
          description="Attendance summary for each class today"
          classes={classBreakdownData}
        />

        <RecentRecords
          title="Recent Attendance Records"
          description="Latest attendance entries marked today"
          records={recentRecords}
        />
      </div>

      <AttendanceAlerts
        title="Attendance Alerts"
        description="Students requiring immediate attention based on attendance patterns"
        alerts={alerts}
      />
    </div>
  );
}
