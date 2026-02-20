import type { Metadata } from 'next';

import {
  PrincipalWelcome,
  SchoolMetrics,
  DepartmentOverview,
  ApprovalQueue,
  StaffAttendance,
  CriticalAlerts,
  UpcomingReviews,
} from '@/features/dashboard/principal';

// TODO: Replace static data with API calls to fetch principal-specific data
// TODO: Integrate with admin service for real-time school metrics

export const metadata: Metadata = {
  title: 'Principal Dashboard',
  description:
    'Principal portal with school metrics, department overview, approval queue, staff attendance, critical alerts, and upcoming reviews.',
};

const welcomeData = {
  name: 'Dr. R.K. Saxena',
  schoolName: 'Delhi Public School — Vasant Kunj',
  studentsPresent: 1924,
  staffPresent: 118,
  eventsToday: 3,
};

const metricsData = [
  { title: 'Student Enrollment', value: '2,048', change: '+3.2%', changeType: 'up' as const, icon: 'Users' },
  { title: 'Attendance Rate', value: '94.2%', change: '+1.5%', changeType: 'up' as const, icon: 'CalendarCheck' },
  { title: 'Fee Collection', value: '₹48,52,000', change: '+12.4%', changeType: 'up' as const, icon: 'IndianRupee' },
  { title: 'Avg. Board Score', value: '82.6%', change: '+4.1%', changeType: 'up' as const, icon: 'TrendingUp' },
  { title: 'Staff Attendance', value: '97.3%', change: '+0.8%', changeType: 'up' as const, icon: 'UserCheck' },
  { title: 'Pending Dues', value: '₹6,45,000', change: '-8.2%', changeType: 'down' as const, icon: 'Clock' },
];

const departmentData = {
  title: 'Department Overview',
  departments: [
    { id: 'DEPT-001', name: 'Mathematics', staffCount: 8, metrics: [{ label: 'Avg. Score', value: '84%' }, { label: 'Pass Rate', value: '97%' }, { label: 'Students', value: '520' }], recentUpdates: ['Unit Test 3 results published', 'Olympiad team shortlisted'] },
    { id: 'DEPT-002', name: 'Science', staffCount: 10, metrics: [{ label: 'Avg. Score', value: '81%' }, { label: 'Pass Rate', value: '95%' }, { label: 'Students', value: '520' }], recentUpdates: ['Lab equipment procurement pending', 'Board practical schedule released'] },
    { id: 'DEPT-003', name: 'English', staffCount: 7, metrics: [{ label: 'Avg. Score', value: '79%' }, { label: 'Pass Rate', value: '98%' }, { label: 'Students', value: '520' }], recentUpdates: ['Essay competition results announced'] },
    { id: 'DEPT-004', name: 'Hindi', staffCount: 6, metrics: [{ label: 'Avg. Score', value: '76%' }, { label: 'Pass Rate', value: '96%' }, { label: 'Students', value: '520' }], recentUpdates: ['Hindi Diwas event planning underway'] },
    { id: 'DEPT-005', name: 'Social Science', staffCount: 6, metrics: [{ label: 'Avg. Score', value: '82%' }, { label: 'Pass Rate', value: '97%' }, { label: 'Students', value: '520' }], recentUpdates: ['Heritage walk for Class IX scheduled'] },
    { id: 'DEPT-006', name: 'Computer Science', staffCount: 4, metrics: [{ label: 'Avg. Score', value: '87%' }, { label: 'Pass Rate', value: '99%' }, { label: 'Students', value: '340' }], recentUpdates: ['New coding lab inaugurated'] },
    { id: 'DEPT-007', name: 'Physical Education', staffCount: 3, metrics: [{ label: 'Events', value: '4' }, { label: 'Teams', value: '6' }, { label: 'Students', value: '520' }], recentUpdates: ['Sports Day postponed to March 5'] },
    { id: 'DEPT-008', name: 'Arts & Music', staffCount: 4, metrics: [{ label: 'Performances', value: '3' }, { label: 'Clubs', value: '5' }, { label: 'Students', value: '520' }], recentUpdates: ['Republic Day cultural programme rehearsals ongoing'] },
  ],
};

const approvalData = {
  title: 'Approval Queue',
  requests: [
    { id: 'APR-001', type: 'leave' as const, fromName: 'Mrs. Sunita Verma', fromAvatar: '', date: '2026-02-19', priority: 'medium' as const, status: 'pending' as const },
    { id: 'APR-002', type: 'expense' as const, fromName: 'Dr. Pooja Bhatt', fromAvatar: '', date: '2026-02-18', priority: 'high' as const, status: 'pending' as const },
    { id: 'APR-003', type: 'transfer' as const, fromName: 'Admin Office', fromAvatar: '', date: '2026-02-17', priority: 'high' as const, status: 'pending' as const },
    { id: 'APR-004', type: 'leave' as const, fromName: 'Mr. Rajesh Kumar', fromAvatar: '', date: '2026-02-16', priority: 'high' as const, status: 'pending' as const },
    { id: 'APR-005', type: 'admission' as const, fromName: 'Admin Office', fromAvatar: '', date: '2026-02-15', priority: 'medium' as const, status: 'pending' as const },
    { id: 'APR-006', type: 'expense' as const, fromName: 'Mr. Suresh Yadav', fromAvatar: '', date: '2026-02-14', priority: 'high' as const, status: 'pending' as const },
    { id: 'APR-007', type: 'leave' as const, fromName: 'Ms. Kavita Rao', fromAvatar: '', date: '2026-02-14', priority: 'low' as const, status: 'pending' as const },
    { id: 'APR-008', type: 'expense' as const, fromName: 'Mrs. Anita Desai', fromAvatar: '', date: '2026-02-11', priority: 'medium' as const, status: 'pending' as const },
  ],
};

const staffAttendanceData = {
  title: 'Staff Attendance Today',
  totalStaff: 124,
  present: 118,
  absent: 2,
  onLeave: 4,
  absentStaff: [
    { id: 'ABS-001', name: 'Mrs. Anita Desai', avatar: '', reason: 'Unplanned absence — not reachable' },
    { id: 'ABS-002', name: 'Mr. Vinod Sharma', avatar: '', reason: 'Called in sick — fever' },
    { id: 'ABS-003', name: 'Mr. Rajesh Kumar', avatar: '', reason: 'Medical leave — 5 days approved' },
    { id: 'ABS-004', name: 'Mrs. Preeti Chauhan', avatar: '', reason: 'Casual leave — family function' },
    { id: 'ABS-005', name: 'Ms. Nidhi Aggarwal', avatar: '', reason: 'Maternity leave' },
    { id: 'ABS-006', name: 'Mr. Sanjay Tiwari', avatar: '', reason: 'Earned leave — travel' },
  ],
};

const alertsData = {
  title: 'Critical Alerts',
  alerts: [
    { id: 'ALT-001', type: 'Attendance', severity: 'critical' as const, description: 'Rahul Tiwari (IX-A) absent for 5 consecutive days — guardian unreachable', actionLabel: 'Contact Parent' },
    { id: 'ALT-002', type: 'Fee', severity: 'critical' as const, description: '23 students have fees overdue by more than 30 days — total ₹3,12,000', actionLabel: 'View Details' },
    { id: 'ALT-003', type: 'Infrastructure', severity: 'warning' as const, description: 'Water supply disruption in Block B — plumber contacted' },
    { id: 'ALT-004', type: 'Staff', severity: 'warning' as const, description: 'Mr. Rajesh Kumar on unplanned medical leave — Class IX Science substitute needed', actionLabel: 'Assign Substitute' },
    { id: 'ALT-005', type: 'Safety', severity: 'warning' as const, description: 'Fire extinguisher in Lab 2 expired — replacement ordered' },
    { id: 'ALT-006', type: 'Academic', severity: 'critical' as const, description: 'Class XII board practicals start next week — lab schedule conflicts detected', actionLabel: 'Resolve Conflicts' },
    { id: 'ALT-007', type: 'Transport', severity: 'info' as const, description: 'School bus Route 3 reported late by 25 minutes — driver notified' },
    { id: 'ALT-008', type: 'Attendance', severity: 'critical' as const, description: 'Nandini Rao (V-A) attendance dropped to 58% — parent meeting required', actionLabel: 'Schedule Meeting' },
  ],
};

const reviewsData = {
  title: 'Upcoming Reviews',
  reviews: [
    { id: 'REV-001', eventTitle: 'Monthly Staff Performance Review', dateTime: 'Feb 25, 2026 — 10:00 AM', participantsCount: 12, type: 'review' as const },
    { id: 'REV-002', eventTitle: 'PTM — Class X', dateTime: 'Feb 27, 2026 — 10:00 AM', participantsCount: 85, type: 'meeting' as const },
    { id: 'REV-003', eventTitle: 'Board Exam Readiness Assessment', dateTime: 'Mar 01, 2026 — 11:00 AM', participantsCount: 18, type: 'review' as const },
    { id: 'REV-004', eventTitle: 'Annual Budget Review Meeting', dateTime: 'Mar 03, 2026 — 02:00 PM', participantsCount: 6, type: 'meeting' as const },
    { id: 'REV-005', eventTitle: 'CBSE Affiliation Compliance Audit', dateTime: 'Mar 08, 2026 — 09:00 AM', participantsCount: 4, type: 'inspection' as const },
    { id: 'REV-006', eventTitle: 'Infrastructure Upgrade Planning', dateTime: 'Mar 10, 2026 — 03:00 PM', participantsCount: 5, type: 'meeting' as const },
    { id: 'REV-007', eventTitle: 'Teacher Development Workshop', dateTime: 'Mar 12, 2026 — 10:00 AM', participantsCount: 30, type: 'workshop' as const },
  ],
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <PrincipalWelcome
        name={welcomeData.name}
        schoolName={welcomeData.schoolName}
        studentsPresent={welcomeData.studentsPresent}
        staffPresent={welcomeData.staffPresent}
        eventsToday={welcomeData.eventsToday}
      />

      <SchoolMetrics metrics={metricsData} />

      <div className="grid grid-cols-1 @4xl:grid-cols-2 gap-6">
        <DepartmentOverview
          title={departmentData.title}
          departments={departmentData.departments}
        />
        <ApprovalQueue
          title={approvalData.title}
          requests={approvalData.requests}
        />
      </div>

      <div className="grid grid-cols-1 @4xl:grid-cols-2 gap-6">
        <StaffAttendance
          title={staffAttendanceData.title}
          totalStaff={staffAttendanceData.totalStaff}
          present={staffAttendanceData.present}
          absent={staffAttendanceData.absent}
          onLeave={staffAttendanceData.onLeave}
          absentStaff={staffAttendanceData.absentStaff}
        />
        <CriticalAlerts
          title={alertsData.title}
          alerts={alertsData.alerts}
        />
      </div>

      <UpcomingReviews
        title={reviewsData.title}
        reviews={reviewsData.reviews}
      />
    </div>
  );
}
