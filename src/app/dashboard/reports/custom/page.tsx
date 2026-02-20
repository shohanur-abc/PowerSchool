import type { Metadata } from 'next';

import {
  ReportBuilder,
  SavedReports,
} from '@/features/dashboard/reports';

// TODO: Replace static data with API calls to fetch available data sources and saved reports
// TODO: Integrate with report builder engine for dynamic field loading

const dataSources = [
  {
    id: 'DS-STUDENT',
    name: 'Student Information',
    description: 'Student demographics, enrolment details, and personal information',
    columns: [
      { id: 'student_name', label: 'Student Name', description: 'Full name of the student' },
      { id: 'admission_no', label: 'Admission Number', description: 'Unique admission number' },
      { id: 'class_section', label: 'Class & Section', description: 'Current class and section' },
      { id: 'roll_no', label: 'Roll Number', description: 'Class roll number' },
      { id: 'dob', label: 'Date of Birth', description: 'Student date of birth' },
      { id: 'gender', label: 'Gender', description: 'Male / Female / Other' },
      { id: 'category', label: 'Category (SC/ST/OBC/General)', description: 'Reservation category' },
      { id: 'parent_name', label: 'Parent/Guardian Name', description: 'Father or guardian name' },
      { id: 'contact', label: 'Contact Number', description: 'Primary contact number' },
      { id: 'address', label: 'Address', description: 'Residential address' },
    ],
  },
  {
    id: 'DS-ATTENDANCE',
    name: 'Attendance Records',
    description: 'Student and staff attendance data with daily and monthly summaries',
    columns: [
      { id: 'att_percentage', label: 'Attendance Percentage', description: 'Overall attendance rate' },
      { id: 'days_present', label: 'Days Present', description: 'Total days present in selected period' },
      { id: 'days_absent', label: 'Days Absent', description: 'Total days absent in selected period' },
      { id: 'late_count', label: 'Late Arrivals Count', description: 'Number of late arrivals' },
      { id: 'leave_apps', label: 'Leave Applications', description: 'Leave applications submitted' },
    ],
  },
  {
    id: 'DS-ACADEMICS',
    name: 'Academic Performance',
    description: 'Exam marks, grades, and subject-wise performance across all terms',
    columns: [
      { id: 'subject_marks', label: 'Subject Marks', description: 'Marks obtained in each subject' },
      { id: 'grade', label: 'Grade', description: 'Grade as per CBSE grading scale' },
      { id: 'class_rank', label: 'Class Rank', description: 'Rank within the class/section' },
      { id: 'term_percent', label: 'Term Percentage', description: 'Overall percentage for the term' },
      { id: 'subject_teacher', label: 'Subject Teacher', description: 'Name of the subject teacher' },
    ],
  },
  {
    id: 'DS-FINANCE',
    name: 'Fee & Finance',
    description: 'Fee structure, collection status, dues, and concession details',
    columns: [
      { id: 'total_fee', label: 'Total Fee', description: 'Total fee for the current term' },
      { id: 'amount_paid', label: 'Amount Paid', description: 'Total amount paid so far' },
      { id: 'pending_dues', label: 'Pending Dues', description: 'Outstanding fee amount' },
      { id: 'payment_date', label: 'Payment Date', description: 'Date of last payment' },
      { id: 'concession_type', label: 'Concession Type', description: 'RTE, merit, sibling, staff-ward, etc.' },
    ],
  },
  {
    id: 'DS-TRANSPORT',
    name: 'Transport',
    description: 'Bus routes, pick-up points, and transport fee management',
    columns: [
      { id: 'route', label: 'Transport Route', description: 'Assigned bus route name/number' },
      { id: 'pickup_point', label: 'Pick-up Point', description: 'Designated pick-up location' },
      { id: 'transport_fee', label: 'Transport Fee Status', description: 'Paid / Pending / Exempt' },
    ],
  },
  {
    id: 'DS-COCURRICULAR',
    name: 'Co-Curricular & Library',
    description: 'House allocation, sports, clubs, and library records',
    columns: [
      { id: 'house', label: 'House Name', description: 'Assigned school house' },
      { id: 'sports', label: 'Sports Activity', description: 'Enrolled sports activities' },
      { id: 'club', label: 'Club Membership', description: 'Club memberships held' },
      { id: 'library_books', label: 'Library Books Issued', description: 'Currently issued books count' },
    ],
  },
];

const savedReports = [
  {
    id: 'CUST-001',
    name: 'Class X Board Eligible Students',
    createdAt: '2026-01-10T09:00:00Z',
    lastRunAt: '2026-02-18T14:30:00Z',
    columnsCount: 5,
    schedule: 'Weekly',
  },
  {
    id: 'CUST-002',
    name: 'Fee Defaulters with Contact Details',
    createdAt: '2025-11-05T10:15:00Z',
    lastRunAt: '2026-02-19T08:00:00Z',
    columnsCount: 5,
    schedule: 'Daily',
  },
  {
    id: 'CUST-003',
    name: 'Low Attendance with Academics',
    createdAt: '2025-12-01T11:30:00Z',
    lastRunAt: '2026-02-15T16:45:00Z',
    columnsCount: 6,
    schedule: 'Weekly',
  },
  {
    id: 'CUST-004',
    name: 'SC/ST/OBC Student Enrolment',
    createdAt: '2025-08-20T09:30:00Z',
    lastRunAt: '2026-02-10T10:00:00Z',
    columnsCount: 6,
  },
  {
    id: 'CUST-005',
    name: 'Transport Route Utilisation',
    createdAt: '2026-01-15T14:00:00Z',
    lastRunAt: '2026-02-12T11:20:00Z',
    columnsCount: 5,
  },
  {
    id: 'CUST-006',
    name: 'Topper List — All Sections',
    createdAt: '2026-02-05T08:45:00Z',
    lastRunAt: '2026-02-17T13:00:00Z',
    columnsCount: 6,
    schedule: 'After each exam',
  },
  {
    id: 'CUST-007',
    name: 'Scholarship & Concession Beneficiaries',
    createdAt: '2025-09-10T10:00:00Z',
    lastRunAt: '2026-02-08T09:30:00Z',
    columnsCount: 6,
  },
  {
    id: 'CUST-008',
    name: 'Student Activities & House Report',
    createdAt: '2026-01-20T13:00:00Z',
    lastRunAt: '2026-02-14T15:10:00Z',
    columnsCount: 5,
  },
];

export const metadata: Metadata = {
  title: 'Custom Reports',
  description:
    'Build custom reports by selecting data fields across student, academic, financial, and administrative categories, and manage saved custom report templates.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <ReportBuilder
        title="Report Builder"
        description="Select a data source and choose columns to build your custom report"
        dataSources={dataSources}
      />

      <SavedReports
        title="Saved Custom Reports"
        reports={savedReports}
      />
    </div>
  );
}
