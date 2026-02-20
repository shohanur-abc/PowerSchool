import type { Metadata } from 'next';

import {
  CorrectionForm,
  CorrectionHistory,
} from '@/features/dashboard/attendance';

// TODO: Replace static data with API calls to fetch correction history
// TODO: Integrate with correction service for submitting and managing requests

const statusOptions = [
  { label: 'Present', value: 'present' },
  { label: 'Absent', value: 'absent' },
  { label: 'Late', value: 'late' },
  { label: 'Excused', value: 'excused' },
];

const corrections = [
  { id: 'COR-001', studentName: 'Aarav Sharma', date: '2026-02-18', oldStatus: 'absent', newStatus: 'present', reason: 'Student was present but attendance was not marked due to teacher being on leave. Verified by substitute teacher Mr. Anand.', status: 'pending' as const, requestedBy: 'Mrs. Sunita Verma' },
  { id: 'COR-002', studentName: 'Priya Patel', date: '2026-02-17', oldStatus: 'absent', newStatus: 'excused', reason: 'Student had a medical appointment at AIIMS. Medical certificate submitted and verified by office.', status: 'approved' as const, requestedBy: 'Mr. Rajesh Kumar' },
  { id: 'COR-003', studentName: 'Rohan Gupta', date: '2026-02-17', oldStatus: 'late', newStatus: 'present', reason: 'Student arrived on time but was marked late erroneously. Verified by gate register entry at 07:48 AM.', status: 'approved' as const, requestedBy: 'Ms. Deepa Nair' },
  { id: 'COR-004', studentName: 'Kavya Iyer', date: '2026-02-16', oldStatus: 'present', newStatus: 'absent', reason: 'Student left school early due to illness but was not marked absent for the remaining periods.', status: 'pending' as const, requestedBy: 'Mr. Anil Joshi' },
  { id: 'COR-005', studentName: 'Vikram Reddy', date: '2026-02-14', oldStatus: 'absent', newStatus: 'present', reason: 'System error during bulk attendance upload. Student was physically present in classroom — confirmed by class monitor.', status: 'rejected' as const, requestedBy: 'Mrs. Meena Rao' },
  { id: 'COR-006', studentName: 'Neha Deshmukh', date: '2026-02-14', oldStatus: 'absent', newStatus: 'excused', reason: 'Student was participating in inter-school science olympiad. Event permission letter approved by Principal.', status: 'approved' as const, requestedBy: 'Mrs. Padma Krishnan' },
  { id: 'COR-007', studentName: 'Siddharth Nair', date: '2026-02-13', oldStatus: 'late', newStatus: 'present', reason: 'School bus arrived late due to road construction near Andheri East. All bus route 7 students were affected.', status: 'approved' as const, requestedBy: 'Mr. Anil Joshi' },
  { id: 'COR-008', studentName: 'Arjun Mehta', date: '2026-02-13', oldStatus: 'absent', newStatus: 'late', reason: 'Student arrived at 08:25 AM but was marked absent instead of late. Gate register confirms arrival.', status: 'pending' as const, requestedBy: 'Mrs. Sunita Verma' },
  { id: 'COR-009', studentName: 'Divya Choudhury', date: '2026-02-12', oldStatus: 'present', newStatus: 'excused', reason: 'Student was present for only 2 periods and left for a family emergency. Should be marked excused per school policy.', status: 'approved' as const, requestedBy: 'Ms. Deepa Nair' },
  { id: 'COR-010', studentName: 'Aditya Kulkarni', date: '2026-02-12', oldStatus: 'absent', newStatus: 'present', reason: 'Duplicate absence entry found. Student was marked absent in period 3 but present in all other periods. Correction needed.', status: 'rejected' as const, requestedBy: 'Mr. Rajesh Kumar' },
  { id: 'COR-011', studentName: 'Ishita Banerjee', date: '2026-02-11', oldStatus: 'late', newStatus: 'excused', reason: 'Student was late due to participating in morning assembly rehearsal for Republic Day event. Confirmed by event coordinator.', status: 'approved' as const, requestedBy: 'Mrs. Padma Krishnan' },
  { id: 'COR-012', studentName: 'Manish Verma', date: '2026-02-10', oldStatus: 'absent', newStatus: 'present', reason: 'Wrong roll number was selected during attendance marking. Roll 12 was marked absent instead of Roll 21. Cross-verified with seating chart.', status: 'pending' as const, requestedBy: 'Mrs. Meena Rao' },
];

export const metadata: Metadata = {
  title: 'Attendance Corrections',
  description:
    'Submit and manage attendance correction requests. View correction history, track pending approvals, and request changes to previously recorded attendance entries.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <CorrectionForm
        title="Request Attendance Correction"
        description="Submit a correction request for an incorrect attendance record"
        statusOptions={statusOptions}
      />

      <CorrectionHistory
        title="Correction Request History"
        description="View all submitted correction requests and their approval status"
        corrections={corrections}
      />
    </div>
  );
}
