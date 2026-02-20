import type { Metadata } from 'next';

import {
  StudentWelcome,
  MyAttendance,
  MyResults,
  MySchedule,
  FeeStatus,
  MyNotices,
} from '@/features/dashboard/student';

// TODO: Replace static data with API calls to fetch student-specific data
// TODO: Integrate with student service for real-time attendance and results

export const metadata: Metadata = {
  title: 'Student Dashboard',
  description:
    'Student portal with attendance summary, exam results, class schedule, fee status, and school notices.',
};

const welcomeData = {
  name: 'Aarav Sharma',
  avatar: '',
  className: 'X',
  section: 'A',
  rollNo: '01',
  classesToday: 8,
};

const attendanceData = {
  title: 'My Attendance',
  totalDays: 220,
  present: 211,
  absent: 5,
  late: 4,
  attendancePercent: 96,
};

const resultsData = {
  results: [
    { id: 'RES-001', examName: 'Term 2 Final — Mathematics', totalMarks: 100, obtainedMarks: 92, percentage: 92, grade: 'A+' as const, rank: 3 },
    { id: 'RES-002', examName: 'Term 2 Final — Science', totalMarks: 100, obtainedMarks: 88, percentage: 88, grade: 'A' as const, rank: 5 },
    { id: 'RES-003', examName: 'Term 2 Final — English', totalMarks: 100, obtainedMarks: 85, percentage: 85, grade: 'A' as const, rank: 8 },
    { id: 'RES-004', examName: 'Term 2 Final — Hindi', totalMarks: 100, obtainedMarks: 78, percentage: 78, grade: 'B+' as const, rank: 12 },
    { id: 'RES-005', examName: 'Term 2 Final — Social Science', totalMarks: 100, obtainedMarks: 90, percentage: 90, grade: 'A+' as const, rank: 2 },
    { id: 'RES-006', examName: 'Unit Test 3 — Mathematics', totalMarks: 50, obtainedMarks: 48, percentage: 96, grade: 'A+' as const, rank: 1 },
    { id: 'RES-007', examName: 'Unit Test 3 — Science', totalMarks: 50, obtainedMarks: 44, percentage: 88, grade: 'A' as const, rank: 4 },
    { id: 'RES-008', examName: 'Unit Test 3 — English', totalMarks: 50, obtainedMarks: 42, percentage: 84, grade: 'A' as const, rank: 6 },
  ],
};

const scheduleData = {
  title: "Today's Schedule",
  schedule: [
    { period: 1, time: '08:00 — 08:45', subject: 'Mathematics', teacher: 'Mrs. Sunita Verma', room: 'Room 201' },
    { period: 2, time: '08:50 — 09:35', subject: 'English', teacher: 'Ms. Ritu Kapoor', room: 'Room 201' },
    { period: 3, time: '09:40 — 10:25', subject: 'Hindi', teacher: 'Mr. Devendra Mishra', room: 'Room 201' },
    { period: 4, time: '10:45 — 11:30', subject: 'Science', teacher: 'Dr. Pooja Bhatt', room: 'Lab 1' },
    { period: 5, time: '11:35 — 12:20', subject: 'Science', teacher: 'Dr. Pooja Bhatt', room: 'Lab 1' },
    { period: 6, time: '01:00 — 01:45', subject: 'Social Science', teacher: 'Mr. Anil Joshi', room: 'Room 201' },
    { period: 7, time: '01:50 — 02:35', subject: 'Physical Education', teacher: 'Mr. Suresh Yadav', room: 'Ground' },
    { period: 8, time: '02:40 — 03:25', subject: 'Computer Science', teacher: 'Ms. Deepa Nair', room: 'Lab 4' },
  ],
  currentPeriod: 1,
};

const feeData = {
  title: 'Fee Status',
  totalFees: 38300,
  paidAmount: 36300,
  pendingAmount: 2000,
  nextDueDate: '2026-02-28',
  status: 'partial' as const,
};

const noticesData = {
  title: 'Notices',
  notices: [
    { id: 'NOT-001', title: 'Term 2 Examination Schedule Released', preview: 'The Term 2 final examinations will commence from March 10, 2026. Detailed timetable is available on the notice board and school portal.', date: '2026-02-18', priority: 'high' as const },
    { id: 'NOT-002', title: 'Republic Day Celebration — Rehearsal Notice', preview: 'All students participating in the cultural programme must attend rehearsal on Feb 22 at 10:00 AM in the auditorium.', date: '2026-02-17', priority: 'medium' as const },
    { id: 'NOT-003', title: 'Science Exhibition 2026', preview: 'Registrations for the Annual Science Exhibition are now open. Submit your project proposals to your science teacher by Feb 28.', date: '2026-02-15', priority: 'medium' as const },
    { id: 'NOT-004', title: 'Annual Sports Day Postponed', preview: 'Due to predicted rain, the Annual Sports Day has been rescheduled to March 5, 2026. Updated schedule will follow.', date: '2026-02-14', priority: 'high' as const },
    { id: 'NOT-005', title: 'Library Book Return Reminder', preview: 'All borrowed books must be returned by Feb 25 for annual stocktaking. Late returns will incur a fine of ₹5/day.', date: '2026-02-12', priority: 'low' as const },
    { id: 'NOT-006', title: 'PTM Scheduled for Class X', preview: 'Parent-Teacher Meeting for Class X students is scheduled for Feb 27, 2026 from 10:00 AM to 1:00 PM.', date: '2026-02-10', priority: 'high' as const },
  ],
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <StudentWelcome {...welcomeData} />

      <div className="grid grid-cols-1 @4xl:grid-cols-2 gap-6">
        <MyAttendance {...attendanceData} />
        <MySchedule
          title={scheduleData.title}
          schedule={scheduleData.schedule}
          currentPeriod={scheduleData.currentPeriod}
        />
      </div>

      <MyResults results={resultsData.results} />

      <div className="grid grid-cols-1 @4xl:grid-cols-2 gap-6">
        <FeeStatus {...feeData} />
        <MyNotices
          title={noticesData.title}
          notices={noticesData.notices}
        />
      </div>
    </div>
  );
}
