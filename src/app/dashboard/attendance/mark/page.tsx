import type { Metadata } from 'next';

import {
  ClassSelector,
  StudentRoster,
  MarkSummary,
} from '@/features/dashboard/attendance';

// TODO: Replace static data with API calls to fetch classes, sections, and student roster
// TODO: Integrate with attendance service for real-time marking and submission

const classes = [
  { label: 'Class I', value: 'class-1' },
  { label: 'Class II', value: 'class-2' },
  { label: 'Class III', value: 'class-3' },
  { label: 'Class IV', value: 'class-4' },
  { label: 'Class V', value: 'class-5' },
  { label: 'Class VI', value: 'class-6' },
  { label: 'Class VII', value: 'class-7' },
  { label: 'Class VIII', value: 'class-8' },
  { label: 'Class IX', value: 'class-9' },
  { label: 'Class X', value: 'class-10' },
  { label: 'Class XI (Science)', value: 'class-11-sci' },
  { label: 'Class XI (Commerce)', value: 'class-11-com' },
  { label: 'Class XII (Science)', value: 'class-12-sci' },
  { label: 'Class XII (Commerce)', value: 'class-12-com' },
];

const sections = [
  { label: 'Section A', value: 'section-a' },
  { label: 'Section B', value: 'section-b' },
  { label: 'Section C', value: 'section-c' },
  { label: 'Section D', value: 'section-d' },
];

const students = [
  { id: 'STU-001', name: 'Aarav Sharma', avatar: '', rollNo: '01' },
  { id: 'STU-002', name: 'Ananya Singh', avatar: '', rollNo: '02' },
  { id: 'STU-003', name: 'Arjun Mehta', avatar: '', rollNo: '03' },
  { id: 'STU-004', name: 'Bhavna Joshi', avatar: '', rollNo: '04' },
  { id: 'STU-005', name: 'Chirag Patel', avatar: '', rollNo: '05' },
  { id: 'STU-006', name: 'Diya Kapoor', avatar: '', rollNo: '06' },
  { id: 'STU-007', name: 'Gaurav Tiwari', avatar: '', rollNo: '07' },
  { id: 'STU-008', name: 'Ishita Banerjee', avatar: '', rollNo: '08' },
  { id: 'STU-009', name: 'Jayesh Desai', avatar: '', rollNo: '09' },
  { id: 'STU-010', name: 'Kavya Iyer', avatar: '', rollNo: '10' },
  { id: 'STU-011', name: 'Lakshmi Nair', avatar: '', rollNo: '11' },
  { id: 'STU-012', name: 'Manish Verma', avatar: '', rollNo: '12' },
  { id: 'STU-013', name: 'Neha Deshmukh', avatar: '', rollNo: '13' },
  { id: 'STU-014', name: 'Omkar Kulkarni', avatar: '', rollNo: '14' },
  { id: 'STU-015', name: 'Priya Patel', avatar: '', rollNo: '15' },
  { id: 'STU-016', name: 'Rahul Tiwari', avatar: '', rollNo: '16' },
  { id: 'STU-017', name: 'Sakshi Choudhury', avatar: '', rollNo: '17' },
  { id: 'STU-018', name: 'Tanvi Reddy', avatar: '', rollNo: '18' },
  { id: 'STU-019', name: 'Utkarsh Malhotra', avatar: '', rollNo: '19' },
  { id: 'STU-020', name: 'Vidya Krishnan', avatar: '', rollNo: '20' },
  { id: 'STU-021', name: 'Yash Gupta', avatar: '', rollNo: '21' },
  { id: 'STU-022', name: 'Zara Khan', avatar: '', rollNo: '22' },
  { id: 'STU-023', name: 'Aditya Saxena', avatar: '', rollNo: '23' },
  { id: 'STU-024', name: 'Bhavika Rao', avatar: '', rollNo: '24' },
  { id: 'STU-025', name: 'Darshan Pillai', avatar: '', rollNo: '25' },
];

const summary = {
  total: 25,
  present: 20,
  absent: 3,
  late: 1,
  excused: 1,
};

export const metadata: Metadata = {
  title: 'Mark Attendance',
  description:
    'Mark daily attendance for students by selecting class, section, and date. View the student roster and submit attendance records with present, absent, late, or excused status.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <ClassSelector
        title="Select Class & Date"
        description="Choose the class, section, and date to load the student roster"
        classes={classes}
        sections={sections}
      />

      <div className="grid grid-cols-1 @4xl:grid-cols-3 gap-6">
        <div className="@4xl:col-span-2">
          <StudentRoster
            title="Student Roster — Class X, Section A"
            description="Mark attendance for each student individually or use bulk actions"
            students={students}
          />
        </div>

        <MarkSummary
          title="Attendance Summary"
          description="Overview of today's attendance marking"
          summary={summary}
        />
      </div>
    </div>
  );
}
