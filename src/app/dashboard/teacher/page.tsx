import type { Metadata } from 'next';

import {
  WelcomeBanner,
  MyClasses,
  TodaySchedule,
  PendingTasks,
  MyStudents,
  RecentSubmissions,
} from '@/features/dashboard/teacher';

// TODO: Replace static data with API calls to fetch teacher-specific data
// TODO: Integrate with teacher service for live class and schedule data

export const metadata: Metadata = {
  title: 'Teacher Dashboard',
  description:
    'Teacher portal with class schedules, student management, pending tasks, and recent submissions overview.',
};

const welcomeData = {
  name: 'Mrs. Sunita Verma',
  avatar: '',
  date: 'Friday, 20 February 2026',
  classesToday: 5,
  pendingTasks: 8,
  upcomingEvents: 2,
};

const classesData = {
  classes: [
    { id: 'CLS-001', name: 'Class X', section: 'A', subject: 'Mathematics', studentCount: 42, nextClassTime: 'Mon, Wed, Fri — 08:00 AM' },
    { id: 'CLS-002', name: 'Class X', section: 'B', subject: 'Mathematics', studentCount: 40, nextClassTime: 'Tue, Thu, Sat — 08:00 AM' },
    { id: 'CLS-003', name: 'Class IX', section: 'A', subject: 'Mathematics', studentCount: 45, nextClassTime: 'Mon, Wed, Fri — 09:00 AM' },
    { id: 'CLS-004', name: 'Class IX', section: 'B', subject: 'Mathematics', studentCount: 43, nextClassTime: 'Tue, Thu, Sat — 09:00 AM' },
    { id: 'CLS-005', name: 'Class VIII', section: 'A', subject: 'Mathematics', studentCount: 38, nextClassTime: 'Mon, Wed, Fri — 10:30 AM' },
  ],
};

const scheduleData = {
  title: "Today's Schedule",
  schedule: [
    { period: 1, time: '08:00 — 08:45', className: 'X-A', subject: 'Mathematics', room: 'Room 201' },
    { period: 2, time: '08:50 — 09:35', className: 'IX-A', subject: 'Mathematics', room: 'Room 105' },
    { period: 3, time: '09:40 — 10:25', className: '', subject: 'Free Period', room: '' },
    { period: 4, time: '10:45 — 11:30', className: 'VIII-A', subject: 'Mathematics', room: 'Room 112' },
    { period: 5, time: '11:35 — 12:20', className: 'X-A', subject: 'Maths Lab', room: 'Lab 3' },
    { period: 6, time: '01:00 — 01:45', className: 'IX-B', subject: 'Mathematics', room: 'Room 107' },
    { period: 7, time: '01:50 — 02:35', className: '', subject: 'Free Period', room: '' },
    { period: 8, time: '02:40 — 03:25', className: 'X-B', subject: 'Mathematics', room: 'Room 203' },
  ],
  currentPeriod: 1,
};

const pendingTasksData = {
  title: 'Pending Tasks',
  tasks: [
    { id: 'TSK-001', label: 'Correct Class X-A Unit Test Papers', dueDate: '2026-02-20', priority: 'high' as const, completed: false },
    { id: 'TSK-002', label: 'Prepare IX-A Chapter 8 Lesson Plan', dueDate: '2026-02-21', priority: 'medium' as const, completed: false },
    { id: 'TSK-003', label: 'Submit Monthly Attendance Report', dueDate: '2026-02-22', priority: 'high' as const, completed: false },
    { id: 'TSK-004', label: 'Upload X-B Assignment Marks on Portal', dueDate: '2026-02-20', priority: 'medium' as const, completed: true },
    { id: 'TSK-005', label: 'Prepare Maths Olympiad Practice Sheet', dueDate: '2026-02-25', priority: 'low' as const, completed: false },
    { id: 'TSK-006', label: 'Parent Meeting Notes — Class VIII-A', dueDate: '2026-02-23', priority: 'medium' as const, completed: true },
    { id: 'TSK-007', label: 'Review and Approve IX-B Project Reports', dueDate: '2026-02-24', priority: 'high' as const, completed: false },
    { id: 'TSK-008', label: 'Update Syllabus Completion Tracker', dueDate: '2026-02-26', priority: 'low' as const, completed: true },
  ],
  completedCount: 3,
};

const studentsData = {
  title: 'My Students',
  students: [
    { id: 'STU-001', name: 'Aarav Sharma', avatar: '', rollNo: '01', attendancePercent: 96, lastGrade: 'A+' },
    { id: 'STU-002', name: 'Priya Patel', avatar: '', rollNo: '02', attendancePercent: 94, lastGrade: 'A' },
    { id: 'STU-003', name: 'Rohan Gupta', avatar: '', rollNo: '05', attendancePercent: 88, lastGrade: 'B+' },
    { id: 'STU-004', name: 'Ananya Singh', avatar: '', rollNo: '03', attendancePercent: 97, lastGrade: 'A+' },
    { id: 'STU-005', name: 'Vikram Reddy', avatar: '', rollNo: '08', attendancePercent: 91, lastGrade: 'A' },
    { id: 'STU-006', name: 'Neha Deshmukh', avatar: '', rollNo: '12', attendancePercent: 93, lastGrade: 'A' },
    { id: 'STU-007', name: 'Arjun Mehta', avatar: '', rollNo: '04', attendancePercent: 89, lastGrade: 'B+' },
    { id: 'STU-008', name: 'Kavya Iyer', avatar: '', rollNo: '07', attendancePercent: 95, lastGrade: 'A' },
    { id: 'STU-009', name: 'Siddharth Nair', avatar: '', rollNo: '11', attendancePercent: 92, lastGrade: 'A' },
    { id: 'STU-010', name: 'Ishita Banerjee', avatar: '', rollNo: '09', attendancePercent: 90, lastGrade: 'B+' },
  ],
  classes: ['X-A', 'X-B', 'IX-A', 'IX-B', 'VIII-A'],
};

const submissionsData = {
  title: 'Recent Submissions',
  submissions: [
    { id: 'SUB-001', studentName: 'Aarav Sharma', assignmentTitle: 'Trigonometry Worksheet', submittedAt: '2026-02-19 08:30 AM', status: 'graded' as const },
    { id: 'SUB-002', studentName: 'Priya Patel', assignmentTitle: 'Trigonometry Worksheet', submittedAt: '2026-02-19 08:45 AM', status: 'graded' as const },
    { id: 'SUB-003', studentName: 'Ananya Singh', assignmentTitle: 'Linear Equations Assignment', submittedAt: '2026-02-18 03:15 PM', status: 'submitted' as const },
    { id: 'SUB-004', studentName: 'Rohan Gupta', assignmentTitle: 'Probability Practice Set', submittedAt: '2026-02-18 02:00 PM', status: 'graded' as const },
    { id: 'SUB-005', studentName: 'Vikram Reddy', assignmentTitle: 'Linear Equations Assignment', submittedAt: '2026-02-18 04:10 PM', status: 'submitted' as const },
    { id: 'SUB-006', studentName: 'Neha Deshmukh', assignmentTitle: 'Quadratic Equations HW', submittedAt: '2026-02-17 09:00 AM', status: 'graded' as const },
    { id: 'SUB-007', studentName: 'Arjun Mehta', assignmentTitle: 'Mensuration Exercise', submittedAt: '2026-02-17 11:30 AM', status: 'submitted' as const },
    { id: 'SUB-008', studentName: 'Kavya Iyer', assignmentTitle: 'Mensuration Exercise', submittedAt: '2026-02-17 11:45 AM', status: 'graded' as const },
  ],
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <WelcomeBanner {...welcomeData} />

      <div className="grid grid-cols-1 @4xl:grid-cols-2 gap-6">
        <MyClasses classes={classesData.classes} />
        <TodaySchedule
          title={scheduleData.title}
          schedule={scheduleData.schedule}
          currentPeriod={scheduleData.currentPeriod}
        />
      </div>

      <PendingTasks
        title={pendingTasksData.title}
        tasks={pendingTasksData.tasks}
        completedCount={pendingTasksData.completedCount}
      />

      <div className="grid grid-cols-1 @4xl:grid-cols-2 gap-6">
        <MyStudents
          title={studentsData.title}
          students={studentsData.students}
          classes={studentsData.classes}
        />
        <RecentSubmissions
          title={submissionsData.title}
          submissions={submissionsData.submissions}
        />
      </div>
    </div>
  );
}
