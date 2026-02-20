import type { Metadata } from 'next';

import {
  ParentWelcome,
  ChildrenOverview,
  AttendanceOverview,
  AcademicProgress,
  FeeSummary,
  ParentNotices,
  Communication,
} from '@/features/dashboard/parent';

// TODO: Replace static data with API calls to fetch parent-specific data
// TODO: Integrate with parent service for real-time children data

export const metadata: Metadata = {
  title: 'Parent Dashboard',
  description:
    'Parent portal with children overview, attendance tracking, academic progress, fee summary, notices, and communication.',
};

const welcomeData = {
  name: 'Mr. Rajesh Sharma',
  avatar: '',
  childrenCount: 2,
  childrenNames: ['Aarav Sharma', 'Meera Sharma'],
};

const childrenOverviewData = {
  children: [
    { id: 'CHD-001', name: 'Aarav Sharma', avatar: '', className: 'X', section: 'A', attendancePercent: 96, lastExamGrade: 'A+' },
    { id: 'CHD-002', name: 'Meera Sharma', avatar: '', className: 'VII', section: 'B', attendancePercent: 93, lastExamGrade: 'A' },
  ],
};

const attendanceOverviewData = {
  title: 'Attendance Overview',
  description: 'Monthly attendance comparison across children',
  data: [
    { month: 'Sep', 'Aarav Sharma': 95, 'Meera Sharma': 91 },
    { month: 'Oct', 'Aarav Sharma': 97, 'Meera Sharma': 93 },
    { month: 'Nov', 'Aarav Sharma': 96, 'Meera Sharma': 92 },
    { month: 'Dec', 'Aarav Sharma': 94, 'Meera Sharma': 90 },
    { month: 'Jan', 'Aarav Sharma': 98, 'Meera Sharma': 95 },
    { month: 'Feb', 'Aarav Sharma': 96, 'Meera Sharma': 93 },
  ],
  children: ['Aarav Sharma', 'Meera Sharma'],
};

const academicProgressData = {
  title: 'Academic Progress',
  children: [
    {
      id: 'CHD-001',
      name: 'Aarav Sharma',
      recentExams: [
        { id: 'EX-001', examName: 'Mathematics', obtainedMarks: 92, totalMarks: 100, grade: 'A+' },
        { id: 'EX-002', examName: 'Science', obtainedMarks: 88, totalMarks: 100, grade: 'A' },
        { id: 'EX-003', examName: 'English', obtainedMarks: 85, totalMarks: 100, grade: 'A' },
        { id: 'EX-004', examName: 'Hindi', obtainedMarks: 78, totalMarks: 100, grade: 'B+' },
        { id: 'EX-005', examName: 'Social Science', obtainedMarks: 90, totalMarks: 100, grade: 'A+' },
      ],
      gradeTrend: 'up' as const,
      teacherRemarks: 'Consistent performer with strong analytical skills.',
    },
    {
      id: 'CHD-002',
      name: 'Meera Sharma',
      recentExams: [
        { id: 'EX-006', examName: 'Mathematics', obtainedMarks: 82, totalMarks: 100, grade: 'A' },
        { id: 'EX-007', examName: 'Science', obtainedMarks: 86, totalMarks: 100, grade: 'A' },
        { id: 'EX-008', examName: 'English', obtainedMarks: 90, totalMarks: 100, grade: 'A+' },
        { id: 'EX-009', examName: 'Hindi', obtainedMarks: 84, totalMarks: 100, grade: 'A' },
        { id: 'EX-010', examName: 'Social Science', obtainedMarks: 79, totalMarks: 100, grade: 'B+' },
      ],
      gradeTrend: 'up' as const,
      teacherRemarks: 'Excellent in languages, improving in mathematics.',
    },
  ],
};

const feeSummaryData = {
  title: 'Fee Summary',
  fees: [
    { id: 'FEE-001', name: 'Aarav Sharma', totalFees: 36300, paid: 34300, pending: 2000, dueDate: '2026-02-28', status: 'partial' as const },
    { id: 'FEE-002', name: 'Meera Sharma', totalFees: 32800, paid: 30300, pending: 2500, dueDate: '2026-02-28', status: 'partial' as const },
  ],
};

const noticesData = {
  title: 'School Notices',
  notices: [
    { id: 'NOT-001', title: 'Term 2 Examination Schedule Released', preview: 'The Term 2 final examinations will commence from March 10, 2026. Detailed timetable is available on the school portal.', date: '2026-02-18', priority: 'high' as const },
    { id: 'NOT-002', title: 'PTM Scheduled for Class X', preview: 'Parent-Teacher Meeting for Class X students is scheduled for Feb 27, 2026 from 10:00 AM to 1:00 PM.', date: '2026-02-16', priority: 'high' as const },
    { id: 'NOT-003', title: 'Annual Sports Day Postponed', preview: 'Due to predicted rain, the Annual Sports Day has been rescheduled to March 5, 2026.', date: '2026-02-14', priority: 'medium' as const },
    { id: 'NOT-004', title: 'Fee Payment Reminder — Q4', preview: 'Kindly clear all pending fee dues by Feb 28, 2026 to avoid late fee charges.', date: '2026-02-12', priority: 'high' as const },
    { id: 'NOT-005', title: 'School Bus Route Change — Route 7', preview: 'Route 7 timings have been updated effective Feb 24. Please check the revised schedule on the portal.', date: '2026-02-10', priority: 'medium' as const },
    { id: 'NOT-006', title: 'Summer Vacation Dates Announced', preview: 'Summer vacation will be from May 15 to June 30, 2026. School reopens on July 1, 2026.', date: '2026-02-08', priority: 'low' as const },
  ],
};

const communicationData = {
  title: 'Messages',
  messages: [
    { id: 'MSG-001', teacherName: 'Mrs. Sunita Verma — Class Teacher (X-A)', teacherAvatar: '', subject: 'Aarav — Excellent Performance in Unit Test 3', date: '2026-02-18', isRead: true },
    { id: 'MSG-002', teacherName: 'Dr. Pooja Bhatt — Science Teacher', teacherAvatar: '', subject: 'Science Exhibition Project Proposal Required', date: '2026-02-17', isRead: false },
    { id: 'MSG-003', teacherName: 'Mr. Anil Joshi — Class Teacher (VII-B)', teacherAvatar: '', subject: 'Meera — Attendance Improvement Noted', date: '2026-02-15', isRead: true },
    { id: 'MSG-004', teacherName: 'School Admin Office', teacherAvatar: '', subject: 'Fee Payment Confirmation — Aarav (Q3)', date: '2026-02-12', isRead: true },
    { id: 'MSG-005', teacherName: 'Mr. Suresh Yadav — Sports Dept.', teacherAvatar: '', subject: 'Aarav Selected for Inter-School Cricket Team', date: '2026-02-10', isRead: false },
    { id: 'MSG-006', teacherName: 'Principal — Dr. R.K. Saxena', teacherAvatar: '', subject: 'Important: Board Exam Preparation Guidelines', date: '2026-02-08', isRead: true },
    { id: 'MSG-007', teacherName: 'Mrs. Kavita Rao — Librarian', teacherAvatar: '', subject: 'Overdue Book Return Reminder — Meera', date: '2026-02-06', isRead: false },
  ],
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <ParentWelcome
        name={welcomeData.name}
        avatar={welcomeData.avatar}
        childrenCount={welcomeData.childrenCount}
        childrenNames={welcomeData.childrenNames}
      />

      <ChildrenOverview
        children={childrenOverviewData.children}
      />

      <div className="grid grid-cols-1 @4xl:grid-cols-2 gap-6">
        <AttendanceOverview
          title={attendanceOverviewData.title}
          description={attendanceOverviewData.description}
          data={attendanceOverviewData.data}
          children={attendanceOverviewData.children}
        />
        <AcademicProgress
          title={academicProgressData.title}
          children={academicProgressData.children}
        />
      </div>

      <FeeSummary
        title={feeSummaryData.title}
        fees={feeSummaryData.fees}
      />

      <div className="grid grid-cols-1 @4xl:grid-cols-2 gap-6">
        <ParentNotices
          title={noticesData.title}
          notices={noticesData.notices}
        />
        <Communication
          title={communicationData.title}
          messages={communicationData.messages}
        />
      </div>
    </div>
  );
}
