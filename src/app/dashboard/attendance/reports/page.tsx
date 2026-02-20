import type { Metadata } from 'next';

import {
  ReportFilters,
  AttendanceReportTable,
  MonthlyHeatmap,
} from '@/features/dashboard/attendance';

// TODO: Replace static data with API calls to fetch report data
// TODO: Integrate with analytics service for dynamic report generation

const filterClasses = [
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
  { label: 'Class XII (Science)', value: 'class-12-sci' },
];

const filterSections = [
  { label: 'Section A', value: 'section-a' },
  { label: 'Section B', value: 'section-b' },
  { label: 'Section C', value: 'section-c' },
];

const reportRows = [
  { studentId: 'STU-001', studentName: 'Aarav Sharma', rollNo: '01', className: 'X', section: 'A', daysPresent: 22, daysAbsent: 1, daysLate: 2, totalDays: 25, percentage: 88 },
  { studentId: 'STU-002', studentName: 'Ananya Singh', rollNo: '02', className: 'X', section: 'A', daysPresent: 24, daysAbsent: 0, daysLate: 1, totalDays: 25, percentage: 96 },
  { studentId: 'STU-003', studentName: 'Arjun Mehta', rollNo: '03', className: 'X', section: 'A', daysPresent: 20, daysAbsent: 3, daysLate: 2, totalDays: 25, percentage: 80 },
  { studentId: 'STU-004', studentName: 'Bhavna Joshi', rollNo: '04', className: 'X', section: 'A', daysPresent: 25, daysAbsent: 0, daysLate: 0, totalDays: 25, percentage: 100 },
  { studentId: 'STU-005', studentName: 'Chirag Patel', rollNo: '05', className: 'X', section: 'A', daysPresent: 23, daysAbsent: 1, daysLate: 1, totalDays: 25, percentage: 92 },
  { studentId: 'STU-006', studentName: 'Diya Kapoor', rollNo: '06', className: 'X', section: 'A', daysPresent: 21, daysAbsent: 2, daysLate: 2, totalDays: 25, percentage: 84 },
  { studentId: 'STU-007', studentName: 'Gaurav Tiwari', rollNo: '07', className: 'X', section: 'A', daysPresent: 18, daysAbsent: 5, daysLate: 2, totalDays: 25, percentage: 72 },
  { studentId: 'STU-008', studentName: 'Ishita Banerjee', rollNo: '08', className: 'X', section: 'A', daysPresent: 24, daysAbsent: 1, daysLate: 0, totalDays: 25, percentage: 96 },
  { studentId: 'STU-009', studentName: 'Jayesh Desai', rollNo: '09', className: 'X', section: 'A', daysPresent: 22, daysAbsent: 2, daysLate: 1, totalDays: 25, percentage: 88 },
  { studentId: 'STU-010', studentName: 'Kavya Iyer', rollNo: '10', className: 'X', section: 'A', daysPresent: 19, daysAbsent: 4, daysLate: 2, totalDays: 25, percentage: 76 },
  { studentId: 'STU-011', studentName: 'Lakshmi Nair', rollNo: '11', className: 'X', section: 'A', daysPresent: 25, daysAbsent: 0, daysLate: 0, totalDays: 25, percentage: 100 },
  { studentId: 'STU-012', studentName: 'Manish Verma', rollNo: '12', className: 'X', section: 'A', daysPresent: 23, daysAbsent: 1, daysLate: 1, totalDays: 25, percentage: 92 },
  { studentId: 'STU-013', studentName: 'Neha Deshmukh', rollNo: '13', className: 'X', section: 'A', daysPresent: 16, daysAbsent: 7, daysLate: 2, totalDays: 25, percentage: 64 },
  { studentId: 'STU-014', studentName: 'Omkar Kulkarni', rollNo: '14', className: 'X', section: 'A', daysPresent: 21, daysAbsent: 3, daysLate: 1, totalDays: 25, percentage: 84 },
  { studentId: 'STU-015', studentName: 'Priya Patel', rollNo: '15', className: 'X', section: 'A', daysPresent: 24, daysAbsent: 0, daysLate: 1, totalDays: 25, percentage: 96 },
];

const heatmapStudents = [
  { id: 'STU-001', name: 'Aarav Sharma' },
  { id: 'STU-002', name: 'Ananya Singh' },
  { id: 'STU-003', name: 'Arjun Mehta' },
  { id: 'STU-004', name: 'Bhavna Joshi' },
  { id: 'STU-005', name: 'Chirag Patel' },
  { id: 'STU-006', name: 'Diya Kapoor' },
  { id: 'STU-007', name: 'Gaurav Tiwari' },
  { id: 'STU-008', name: 'Ishita Banerjee' },
  { id: 'STU-009', name: 'Jayesh Desai' },
  { id: 'STU-010', name: 'Kavya Iyer' },
];

const heatmapDays = [
  { date: '2026-02-02', label: '2', isHoliday: false },
  { date: '2026-02-03', label: '3', isHoliday: false },
  { date: '2026-02-04', label: '4', isHoliday: false },
  { date: '2026-02-05', label: '5', isHoliday: false },
  { date: '2026-02-06', label: '6', isHoliday: false },
  { date: '2026-02-07', label: '7', isHoliday: true },
  { date: '2026-02-08', label: '8', isHoliday: true },
  { date: '2026-02-09', label: '9', isHoliday: false },
  { date: '2026-02-10', label: '10', isHoliday: false },
  { date: '2026-02-11', label: '11', isHoliday: false },
  { date: '2026-02-12', label: '12', isHoliday: false },
  { date: '2026-02-13', label: '13', isHoliday: false },
  { date: '2026-02-14', label: '14', isHoliday: true },
  { date: '2026-02-15', label: '15', isHoliday: true },
  { date: '2026-02-16', label: '16', isHoliday: false },
  { date: '2026-02-17', label: '17', isHoliday: false },
  { date: '2026-02-18', label: '18', isHoliday: false },
  { date: '2026-02-19', label: '19', isHoliday: false },
];

const heatmapData = [
  { studentId: 'STU-001', date: '2026-02-02', status: 'present' as const },
  { studentId: 'STU-001', date: '2026-02-03', status: 'present' as const },
  { studentId: 'STU-001', date: '2026-02-04', status: 'present' as const },
  { studentId: 'STU-001', date: '2026-02-05', status: 'late' as const },
  { studentId: 'STU-001', date: '2026-02-06', status: 'present' as const },
  { studentId: 'STU-001', date: '2026-02-09', status: 'present' as const },
  { studentId: 'STU-001', date: '2026-02-10', status: 'present' as const },
  { studentId: 'STU-001', date: '2026-02-11', status: 'absent' as const },
  { studentId: 'STU-001', date: '2026-02-12', status: 'present' as const },
  { studentId: 'STU-001', date: '2026-02-13', status: 'present' as const },
  { studentId: 'STU-001', date: '2026-02-16', status: 'present' as const },
  { studentId: 'STU-001', date: '2026-02-17', status: 'present' as const },
  { studentId: 'STU-001', date: '2026-02-18', status: 'late' as const },
  { studentId: 'STU-001', date: '2026-02-19', status: 'present' as const },
  { studentId: 'STU-002', date: '2026-02-02', status: 'present' as const },
  { studentId: 'STU-002', date: '2026-02-03', status: 'present' as const },
  { studentId: 'STU-002', date: '2026-02-04', status: 'present' as const },
  { studentId: 'STU-002', date: '2026-02-05', status: 'present' as const },
  { studentId: 'STU-002', date: '2026-02-06', status: 'present' as const },
  { studentId: 'STU-002', date: '2026-02-09', status: 'present' as const },
  { studentId: 'STU-002', date: '2026-02-10', status: 'present' as const },
  { studentId: 'STU-002', date: '2026-02-11', status: 'present' as const },
  { studentId: 'STU-002', date: '2026-02-12', status: 'present' as const },
  { studentId: 'STU-002', date: '2026-02-13', status: 'late' as const },
  { studentId: 'STU-002', date: '2026-02-16', status: 'present' as const },
  { studentId: 'STU-002', date: '2026-02-17', status: 'present' as const },
  { studentId: 'STU-002', date: '2026-02-18', status: 'present' as const },
  { studentId: 'STU-002', date: '2026-02-19', status: 'present' as const },
  { studentId: 'STU-003', date: '2026-02-02', status: 'present' as const },
  { studentId: 'STU-003', date: '2026-02-03', status: 'absent' as const },
  { studentId: 'STU-003', date: '2026-02-04', status: 'absent' as const },
  { studentId: 'STU-003', date: '2026-02-05', status: 'present' as const },
  { studentId: 'STU-003', date: '2026-02-06', status: 'late' as const },
  { studentId: 'STU-003', date: '2026-02-09', status: 'present' as const },
  { studentId: 'STU-003', date: '2026-02-10', status: 'absent' as const },
  { studentId: 'STU-003', date: '2026-02-11', status: 'present' as const },
  { studentId: 'STU-003', date: '2026-02-12', status: 'present' as const },
  { studentId: 'STU-003', date: '2026-02-13', status: 'late' as const },
  { studentId: 'STU-003', date: '2026-02-16', status: 'present' as const },
  { studentId: 'STU-003', date: '2026-02-17', status: 'present' as const },
  { studentId: 'STU-003', date: '2026-02-18', status: 'absent' as const },
  { studentId: 'STU-003', date: '2026-02-19', status: 'present' as const },
  { studentId: 'STU-004', date: '2026-02-02', status: 'present' as const },
  { studentId: 'STU-004', date: '2026-02-03', status: 'present' as const },
  { studentId: 'STU-004', date: '2026-02-04', status: 'present' as const },
  { studentId: 'STU-004', date: '2026-02-05', status: 'present' as const },
  { studentId: 'STU-004', date: '2026-02-06', status: 'present' as const },
  { studentId: 'STU-004', date: '2026-02-09', status: 'present' as const },
  { studentId: 'STU-004', date: '2026-02-10', status: 'present' as const },
  { studentId: 'STU-004', date: '2026-02-11', status: 'present' as const },
  { studentId: 'STU-004', date: '2026-02-12', status: 'present' as const },
  { studentId: 'STU-004', date: '2026-02-13', status: 'present' as const },
  { studentId: 'STU-004', date: '2026-02-16', status: 'present' as const },
  { studentId: 'STU-004', date: '2026-02-17', status: 'present' as const },
  { studentId: 'STU-004', date: '2026-02-18', status: 'present' as const },
  { studentId: 'STU-004', date: '2026-02-19', status: 'present' as const },
  { studentId: 'STU-005', date: '2026-02-02', status: 'present' as const },
  { studentId: 'STU-005', date: '2026-02-03', status: 'present' as const },
  { studentId: 'STU-005', date: '2026-02-04', status: 'late' as const },
  { studentId: 'STU-005', date: '2026-02-05', status: 'present' as const },
  { studentId: 'STU-005', date: '2026-02-06', status: 'present' as const },
  { studentId: 'STU-005', date: '2026-02-09', status: 'absent' as const },
  { studentId: 'STU-005', date: '2026-02-10', status: 'present' as const },
  { studentId: 'STU-005', date: '2026-02-11', status: 'present' as const },
  { studentId: 'STU-005', date: '2026-02-12', status: 'present' as const },
  { studentId: 'STU-005', date: '2026-02-13', status: 'present' as const },
  { studentId: 'STU-005', date: '2026-02-16', status: 'present' as const },
  { studentId: 'STU-005', date: '2026-02-17', status: 'late' as const },
  { studentId: 'STU-005', date: '2026-02-18', status: 'present' as const },
  { studentId: 'STU-005', date: '2026-02-19', status: 'present' as const },
  { studentId: 'STU-006', date: '2026-02-02', status: 'present' as const },
  { studentId: 'STU-006', date: '2026-02-03', status: 'absent' as const },
  { studentId: 'STU-006', date: '2026-02-04', status: 'absent' as const },
  { studentId: 'STU-006', date: '2026-02-05', status: 'present' as const },
  { studentId: 'STU-006', date: '2026-02-06', status: 'present' as const },
  { studentId: 'STU-006', date: '2026-02-09', status: 'late' as const },
  { studentId: 'STU-006', date: '2026-02-10', status: 'present' as const },
  { studentId: 'STU-006', date: '2026-02-11', status: 'present' as const },
  { studentId: 'STU-006', date: '2026-02-12', status: 'absent' as const },
  { studentId: 'STU-006', date: '2026-02-13', status: 'present' as const },
  { studentId: 'STU-006', date: '2026-02-16', status: 'present' as const },
  { studentId: 'STU-006', date: '2026-02-17', status: 'late' as const },
  { studentId: 'STU-006', date: '2026-02-18', status: 'present' as const },
  { studentId: 'STU-006', date: '2026-02-19', status: 'present' as const },
  { studentId: 'STU-007', date: '2026-02-02', status: 'absent' as const },
  { studentId: 'STU-007', date: '2026-02-03', status: 'absent' as const },
  { studentId: 'STU-007', date: '2026-02-04', status: 'present' as const },
  { studentId: 'STU-007', date: '2026-02-05', status: 'present' as const },
  { studentId: 'STU-007', date: '2026-02-06', status: 'absent' as const },
  { studentId: 'STU-007', date: '2026-02-09', status: 'late' as const },
  { studentId: 'STU-007', date: '2026-02-10', status: 'present' as const },
  { studentId: 'STU-007', date: '2026-02-11', status: 'absent' as const },
  { studentId: 'STU-007', date: '2026-02-12', status: 'present' as const },
  { studentId: 'STU-007', date: '2026-02-13', status: 'absent' as const },
  { studentId: 'STU-007', date: '2026-02-16', status: 'present' as const },
  { studentId: 'STU-007', date: '2026-02-17', status: 'late' as const },
  { studentId: 'STU-007', date: '2026-02-18', status: 'present' as const },
  { studentId: 'STU-007', date: '2026-02-19', status: 'absent' as const },
  { studentId: 'STU-008', date: '2026-02-02', status: 'present' as const },
  { studentId: 'STU-008', date: '2026-02-03', status: 'present' as const },
  { studentId: 'STU-008', date: '2026-02-04', status: 'present' as const },
  { studentId: 'STU-008', date: '2026-02-05', status: 'present' as const },
  { studentId: 'STU-008', date: '2026-02-06', status: 'present' as const },
  { studentId: 'STU-008', date: '2026-02-09', status: 'present' as const },
  { studentId: 'STU-008', date: '2026-02-10', status: 'present' as const },
  { studentId: 'STU-008', date: '2026-02-11', status: 'present' as const },
  { studentId: 'STU-008', date: '2026-02-12', status: 'absent' as const },
  { studentId: 'STU-008', date: '2026-02-13', status: 'present' as const },
  { studentId: 'STU-008', date: '2026-02-16', status: 'present' as const },
  { studentId: 'STU-008', date: '2026-02-17', status: 'present' as const },
  { studentId: 'STU-008', date: '2026-02-18', status: 'present' as const },
  { studentId: 'STU-008', date: '2026-02-19', status: 'present' as const },
  { studentId: 'STU-009', date: '2026-02-02', status: 'present' as const },
  { studentId: 'STU-009', date: '2026-02-03', status: 'present' as const },
  { studentId: 'STU-009', date: '2026-02-04', status: 'absent' as const },
  { studentId: 'STU-009', date: '2026-02-05', status: 'absent' as const },
  { studentId: 'STU-009', date: '2026-02-06', status: 'present' as const },
  { studentId: 'STU-009', date: '2026-02-09', status: 'present' as const },
  { studentId: 'STU-009', date: '2026-02-10', status: 'present' as const },
  { studentId: 'STU-009', date: '2026-02-11', status: 'late' as const },
  { studentId: 'STU-009', date: '2026-02-12', status: 'present' as const },
  { studentId: 'STU-009', date: '2026-02-13', status: 'present' as const },
  { studentId: 'STU-009', date: '2026-02-16', status: 'present' as const },
  { studentId: 'STU-009', date: '2026-02-17', status: 'present' as const },
  { studentId: 'STU-009', date: '2026-02-18', status: 'present' as const },
  { studentId: 'STU-009', date: '2026-02-19', status: 'absent' as const },
  { studentId: 'STU-010', date: '2026-02-02', status: 'absent' as const },
  { studentId: 'STU-010', date: '2026-02-03', status: 'present' as const },
  { studentId: 'STU-010', date: '2026-02-04', status: 'present' as const },
  { studentId: 'STU-010', date: '2026-02-05', status: 'absent' as const },
  { studentId: 'STU-010', date: '2026-02-06', status: 'absent' as const },
  { studentId: 'STU-010', date: '2026-02-09', status: 'present' as const },
  { studentId: 'STU-010', date: '2026-02-10', status: 'late' as const },
  { studentId: 'STU-010', date: '2026-02-11', status: 'present' as const },
  { studentId: 'STU-010', date: '2026-02-12', status: 'absent' as const },
  { studentId: 'STU-010', date: '2026-02-13', status: 'present' as const },
  { studentId: 'STU-010', date: '2026-02-16', status: 'present' as const },
  { studentId: 'STU-010', date: '2026-02-17', status: 'late' as const },
  { studentId: 'STU-010', date: '2026-02-18', status: 'present' as const },
  { studentId: 'STU-010', date: '2026-02-19', status: 'absent' as const },
];

export const metadata: Metadata = {
  title: 'Attendance Reports',
  description:
    'Generate and view comprehensive attendance reports with filters, student-wise breakdowns, and monthly attendance heatmaps for detailed attendance analysis.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <ReportFilters
        title="Report Filters"
        description="Filter by class, section, student, and date range to generate reports"
        classes={filterClasses}
        sections={filterSections}
      />

      <AttendanceReportTable
        title="Student Attendance Report"
        description="Detailed attendance breakdown for Class X, Section A — February 2026"
        rows={reportRows}
      />

      <MonthlyHeatmap
        title="Monthly Attendance Heatmap"
        description="Visual representation of daily attendance for February 2026"
        students={heatmapStudents}
        days={heatmapDays}
        data={heatmapData}
      />
    </div>
  );
}
