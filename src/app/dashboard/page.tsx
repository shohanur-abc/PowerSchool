import type { Metadata } from 'next';
import {
  Users,
  CalendarCheck,
  DollarSign,
  ClipboardCheck,
  ClipboardList,
  Megaphone,
  BarChart3,
  UserPlus,
} from 'lucide-react';
import {
  StatsCards,
  AttendanceChart,
  RecentActivity,
  UpcomingEvents,
  FeeOverview,
  ClassPerformance,
  QuickActions,
  NoticesPreview,
  TopStudents,
  AttendanceSummary,
} from '@/features/dashboard/overview';
import { ROUTES } from '@/lib/routes';

// TODO: Replace static data with API calls to fetch real-time dashboard data
// TODO: Add role-based data filtering (admin vs teacher vs parent view)

export const metadata: Metadata = {
  title: 'Dashboard Overview',
  description:
    'School management dashboard with attendance, fees, performance, and activity summaries.',
};

const statsData = [
  {
    title: 'Total Students',
    value: '1,234',
    change: '+2.5%',
    changeType: 'up' as const,
    icon: Users,
    description: 'from last month',
  },
  {
    title: 'Attendance Rate',
    value: '94.2%',
    change: '+1.1%',
    changeType: 'up' as const,
    icon: CalendarCheck,
    description: 'vs last week',
  },
  {
    title: 'Fees Collected',
    value: '$45,321',
    change: '+8.3%',
    changeType: 'up' as const,
    icon: DollarSign,
    description: 'this month',
  },
  {
    title: 'Pending Approvals',
    value: '12',
    change: '-3',
    changeType: 'down' as const,
    icon: ClipboardCheck,
    description: 'since yesterday',
  },
];

const attendanceChartData = Array.from({ length: 30 }, (_, i) => {
  const date = new Date(2026, 1, i + 1);
  const dayLabel = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const isWeekend = date.getDay() === 0 || date.getDay() === 6;
  return {
    date: dayLabel,
    present: isWeekend ? 0 : Math.floor(Math.random() * 60 + 1100),
    absent: isWeekend ? 0 : Math.floor(Math.random() * 40 + 50),
    late: isWeekend ? 0 : Math.floor(Math.random() * 20 + 15),
  };
});

const recentActivities = [
  { id: '1', user: 'Mr. Sharma', action: 'marked attendance for', target: 'Class 10-A', time: '5 min ago', avatar: '', type: 'attendance' as const },
  { id: '2', user: 'Mrs. Patel', action: 'collected fee from', target: 'Arun Mehta (8-B)', time: '12 min ago', avatar: '', type: 'fee' as const },
  { id: '3', user: 'Mr. Khan', action: 'entered grades for', target: 'Math Mid-Term Exam', time: '25 min ago', avatar: '', type: 'grade' as const },
  { id: '4', user: 'Principal Verma', action: 'published notice', target: 'Annual Sports Day', time: '1 hour ago', avatar: '', type: 'notice' as const },
  { id: '5', user: 'Ms. Reddy', action: 'marked attendance for', target: 'Class 7-C', time: '1 hour ago', avatar: '', type: 'attendance' as const },
  { id: '6', user: 'Mr. Gupta', action: 'collected fee from', target: 'Priya Singh (9-A)', time: '2 hours ago', avatar: '', type: 'fee' as const },
  { id: '7', user: 'Mrs. Joshi', action: 'entered grades for', target: 'Science Practical Exam', time: '2 hours ago', avatar: '', type: 'grade' as const },
  { id: '8', user: 'Admin Office', action: 'published notice', target: 'Winter Break Schedule', time: '3 hours ago', avatar: '', type: 'notice' as const },
  { id: '9', user: 'Mr. Nair', action: 'marked attendance for', target: 'Class 5-B', time: '3 hours ago', avatar: '', type: 'attendance' as const },
  { id: '10', user: 'Mrs. Das', action: 'collected fee from', target: 'Vikram Rao (6-A)', time: '4 hours ago', avatar: '', type: 'fee' as const },
];

const upcomingEvents = [
  { id: '1', title: 'Mid-Term Examinations', date: '2026-03-10', time: '9:00 AM - 12:00 PM', type: 'exam' as const, location: 'All Classrooms' },
  { id: '2', title: 'Parent-Teacher Meeting', date: '2026-03-15', time: '10:00 AM - 1:00 PM', type: 'meeting' as const, location: 'School Auditorium' },
  { id: '3', title: 'Holi Holiday', date: '2026-03-17', time: 'Full Day', type: 'holiday' as const },
  { id: '4', title: 'Annual Sports Day', date: '2026-03-22', time: '8:00 AM - 4:00 PM', type: 'event' as const, location: 'School Ground' },
  { id: '5', title: 'Science Exhibition', date: '2026-03-28', time: '10:00 AM - 3:00 PM', type: 'event' as const, location: 'Science Lab Block' },
  { id: '6', title: 'Final Term Exam Prep', date: '2026-04-01', time: '9:00 AM onwards', type: 'exam' as const, location: 'All Classrooms' },
];

const feeOverviewData = [
  { category: 'Tuition', amount: 28500, fill: 'hsl(var(--chart-1))' },
  { category: 'Transport', amount: 8200, fill: 'hsl(var(--chart-2))' },
  { category: 'Lab', amount: 3800, fill: 'hsl(var(--chart-3))' },
  { category: 'Library', amount: 2500, fill: 'hsl(var(--chart-4))' },
  { category: 'Sports', amount: 2321, fill: 'hsl(var(--chart-5))' },
];

const classPerformanceData = [
  { class: 'Class 10-A', avgScore: 87, students: 42 },
  { class: 'Class 10-B', avgScore: 82, students: 40 },
  { class: 'Class 9-A', avgScore: 79, students: 45 },
  { class: 'Class 9-B', avgScore: 75, students: 43 },
  { class: 'Class 8-A', avgScore: 84, students: 38 },
  { class: 'Class 8-B', avgScore: 78, students: 41 },
  { class: 'Class 7-A', avgScore: 81, students: 44 },
  { class: 'Class 7-B', avgScore: 76, students: 39 },
];

const quickActionsData = [
  { label: 'Mark Attendance', icon: CalendarCheck, href: ROUTES.dashboard.attendance.mark, description: 'Record daily student attendance for your class' },
  { label: 'Enter Results', icon: ClipboardList, href: ROUTES.dashboard.results.enter, description: 'Enter exam scores and grades for students' },
  { label: 'Collect Fees', icon: DollarSign, href: ROUTES.dashboard.fees.collection, description: 'Process fee payments and generate receipts' },
  { label: 'Publish Notice', icon: Megaphone, href: ROUTES.dashboard.notices.publish, description: 'Create and publish announcements for the school' },
  { label: 'Generate Report', icon: BarChart3, href: ROUTES.dashboard.reports.root, description: 'Generate attendance, fee, and performance reports' },
  { label: 'Add Student', icon: UserPlus, href: ROUTES.dashboard.operations.students, description: 'Enroll a new student into the system' },
];

const noticesData = [
  { id: '1', title: 'Annual Sports Day Registration Open', content: 'All students interested in participating in the Annual Sports Day events must register with their class teachers by March 15. Events include track and field, cricket, and basketball.', date: 'Feb 18, 2026', priority: 'high' as const, author: 'Principal Verma' },
  { id: '2', title: 'Mid-Term Exam Schedule Released', content: 'The mid-term examination schedule for all classes has been posted on the notice board. Exams will commence from March 10 and end on March 14.', date: 'Feb 17, 2026', priority: 'high' as const, author: 'Exam Controller' },
  { id: '3', title: 'Library Book Return Reminder', content: 'Students with pending library books are requested to return them by February 28 to avoid late fines. Check your library account for due dates.', date: 'Feb 16, 2026', priority: 'medium' as const, author: 'Librarian Das' },
  { id: '4', title: 'School Bus Route Changes', content: 'Due to road construction on MG Road, Bus Route 5 and Route 7 will follow alternate paths starting March 1. Updated schedules are available at the front office.', date: 'Feb 15, 2026', priority: 'medium' as const, author: 'Transport Office' },
  { id: '5', title: 'Art Competition Winners Announced', content: 'Congratulations to the winners of the inter-school art competition. Certificates will be distributed during the morning assembly on Monday.', date: 'Feb 14, 2026', priority: 'low' as const, author: 'Art Department' },
];

const topStudentsData = [
  { rank: 1, name: 'Ananya Sharma', class: '10-A', avgScore: 97, avatar: '', trend: 'up' as const },
  { rank: 2, name: 'Rohan Mehta', class: '10-A', avgScore: 95, avatar: '', trend: 'up' as const },
  { rank: 3, name: 'Priya Patel', class: '10-B', avgScore: 94, avatar: '', trend: 'stable' as const },
  { rank: 4, name: 'Arjun Reddy', class: '9-A', avgScore: 93, avatar: '', trend: 'up' as const },
  { rank: 5, name: 'Kavya Nair', class: '9-A', avgScore: 92, avatar: '', trend: 'down' as const },
  { rank: 6, name: 'Aditya Singh', class: '10-B', avgScore: 91, avatar: '', trend: 'up' as const },
  { rank: 7, name: 'Meera Joshi', class: '9-B', avgScore: 90, avatar: '', trend: 'stable' as const },
  { rank: 8, name: 'Rahul Gupta', class: '8-A', avgScore: 89, avatar: '', trend: 'up' as const },
  { rank: 9, name: 'Sneha Das', class: '8-A', avgScore: 88, avatar: '', trend: 'down' as const },
  { rank: 10, name: 'Vikram Rao', class: '10-A', avgScore: 87, avatar: '', trend: 'stable' as const },
];

const attendanceSummaryData = {
  summary: {
    totalStudents: 1234,
    present: 1148,
    absent: 52,
    late: 24,
    onLeave: 10,
  },
  classBreakdown: [
    { class: 'Class 10-A', present: 39, total: 42, percentage: 93 },
    { class: 'Class 10-B', present: 37, total: 40, percentage: 93 },
    { class: 'Class 9-A', present: 43, total: 45, percentage: 96 },
    { class: 'Class 9-B', present: 40, total: 43, percentage: 93 },
    { class: 'Class 8-A', present: 36, total: 38, percentage: 95 },
    { class: 'Class 8-B', present: 38, total: 41, percentage: 93 },
    { class: 'Class 7-A', present: 42, total: 44, percentage: 95 },
    { class: 'Class 7-B', present: 36, total: 39, percentage: 92 },
  ],
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <StatsCards stats={statsData} />

      <div className="grid grid-cols-1 @4xl:grid-cols-2 gap-6">
        <AttendanceChart
          title="Attendance Trend"
          description="Daily attendance across all classes for the past 30 days"
          data={attendanceChartData}
        />
        <FeeOverview
          title="Fee Collection Overview"
          description="Distribution by fee category this month"
          data={feeOverviewData}
          totalCollected="$45,321"
          totalPending="$12,480"
        />
      </div>

      <QuickActions actions={quickActionsData} />

      <div className="grid grid-cols-1 @4xl:grid-cols-2 gap-6">
        <RecentActivity
          title="Recent Activity"
          activities={recentActivities}
        />
        <UpcomingEvents
          title="Upcoming Events"
          events={upcomingEvents}
        />
      </div>

      <div className="grid grid-cols-1 @4xl:grid-cols-2 gap-6">
        <ClassPerformance
          title="Class Performance"
          description="Average exam scores by class"
          data={classPerformanceData}
        />
        <TopStudents
          title="Top Performing Students"
          students={topStudentsData}
        />
      </div>

      <div className="grid grid-cols-1 @4xl:grid-cols-2 gap-6">
        <NoticesPreview
          title="Recent Notices"
          notices={noticesData}
        />
        <AttendanceSummary
          title="Today's Attendance Summary"
          summary={attendanceSummaryData.summary}
          classBreakdown={attendanceSummaryData.classBreakdown}
        />
      </div>
    </div>
  );
}
