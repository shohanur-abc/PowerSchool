import type { Metadata } from 'next';

import {
  ClassGrid,
  ClassTable,
  AddClass,
} from '@/features/dashboard/operations';

// TODO: Replace static data with API calls to fetch class information
// TODO: Integrate with class management service for live data

const classes = [
  { id: 'CLS-I', name: 'Class I', sectionsCount: 2, totalStudents: 89, classTeacher: { name: 'Mrs. Padma Krishnan' } },
  { id: 'CLS-II', name: 'Class II', sectionsCount: 2, totalStudents: 89, classTeacher: { name: 'Ms. Rekha Menon' } },
  { id: 'CLS-III', name: 'Class III', sectionsCount: 1, totalStudents: 48, classTeacher: { name: 'Mr. Suresh Pillai' } },
  { id: 'CLS-IV', name: 'Class IV', sectionsCount: 1, totalStudents: 47, classTeacher: { name: 'Mrs. Meena Rao' } },
  { id: 'CLS-V', name: 'Class V', sectionsCount: 2, totalStudents: 89, classTeacher: { name: 'Mr. Anil Joshi' } },
  { id: 'CLS-VI', name: 'Class VI', sectionsCount: 2, totalStudents: 98, classTeacher: { name: 'Mr. Rajesh Kumar' } },
  { id: 'CLS-VII', name: 'Class VII', sectionsCount: 1, totalStudents: 48, classTeacher: { name: 'Mr. Vikram Rathi' } },
  { id: 'CLS-VIII', name: 'Class VIII', sectionsCount: 1, totalStudents: 46, classTeacher: { name: 'Ms. Kavita Iyer' } },
];

const classesDetailed = [
  { id: 'CLS-001', className: 'Class I', section: 'A', students: 45, classTeacher: 'Mrs. Padma Krishnan', roomNo: '101', capacity: 50, status: 'active' as const },
  { id: 'CLS-002', className: 'Class I', section: 'B', students: 44, classTeacher: 'Mrs. Anjali Sharma', roomNo: '102', capacity: 50, status: 'active' as const },
  { id: 'CLS-003', className: 'Class II', section: 'A', students: 46, classTeacher: 'Ms. Rekha Menon', roomNo: '103', capacity: 50, status: 'active' as const },
  { id: 'CLS-004', className: 'Class II', section: 'B', students: 43, classTeacher: 'Mrs. Shalini Das', roomNo: '104', capacity: 50, status: 'active' as const },
  { id: 'CLS-005', className: 'Class III', section: 'A', students: 48, classTeacher: 'Mr. Suresh Pillai', roomNo: '201', capacity: 50, status: 'active' as const },
  { id: 'CLS-006', className: 'Class IV', section: 'A', students: 47, classTeacher: 'Mrs. Meena Rao', roomNo: '202', capacity: 50, status: 'active' as const },
  { id: 'CLS-007', className: 'Class V', section: 'A', students: 45, classTeacher: 'Mr. Anil Joshi', roomNo: '203', capacity: 50, status: 'active' as const },
  { id: 'CLS-008', className: 'Class V', section: 'B', students: 44, classTeacher: 'Ms. Deepa Nair', roomNo: '204', capacity: 50, status: 'active' as const },
  { id: 'CLS-009', className: 'Class VI', section: 'A', students: 50, classTeacher: 'Mr. Rajesh Kumar', roomNo: '301', capacity: 55, status: 'active' as const },
  { id: 'CLS-010', className: 'Class VI', section: 'B', students: 48, classTeacher: 'Mrs. Sunita Verma', roomNo: '302', capacity: 55, status: 'active' as const },
  { id: 'CLS-011', className: 'Class VII', section: 'A', students: 48, classTeacher: 'Mr. Vikram Rathi', roomNo: '303', capacity: 55, status: 'active' as const },
  { id: 'CLS-012', className: 'Class VIII', section: 'A', students: 46, classTeacher: 'Ms. Kavita Iyer', roomNo: '304', capacity: 55, status: 'active' as const },
  { id: 'CLS-013', className: 'Class IX', section: 'A', students: 50, classTeacher: 'Mr. Harish Bhat', roomNo: '401', capacity: 55, status: 'active' as const },
  { id: 'CLS-014', className: 'Class IX', section: 'B', students: 48, classTeacher: 'Mrs. Lata Desai', roomNo: '402', capacity: 55, status: 'active' as const },
  { id: 'CLS-015', className: 'Class X', section: 'A', students: 48, classTeacher: 'Mr. Ramesh Patil', roomNo: '403', capacity: 55, status: 'active' as const },
  { id: 'CLS-016', className: 'Class XI', section: 'Science', students: 42, classTeacher: 'Dr. Pradeep Saxena', roomNo: '501', capacity: 50, status: 'active' as const },
  { id: 'CLS-017', className: 'Class XI', section: 'Commerce', students: 40, classTeacher: 'Mrs. Nandini Kapoor', roomNo: '502', capacity: 50, status: 'active' as const },
  { id: 'CLS-018', className: 'Class XII', section: 'Science', students: 40, classTeacher: 'Dr. Arvind Mishra', roomNo: '503', capacity: 50, status: 'active' as const },
  { id: 'CLS-019', className: 'Class XII', section: 'Commerce', students: 38, classTeacher: 'Mr. Gopal Reddy', roomNo: '504', capacity: 50, status: 'active' as const },
];

export const metadata: Metadata = {
  title: 'Class Management',
  description:
    'View and manage all classes, sections, teacher assignments, room allocations, and schedules.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <ClassGrid
        title="Class Overview"
        classes={classes}
      />

      <ClassTable
        title="All Classes — Detailed View"
        classes={classesDetailed}
      />

      <AddClass
        title="Add New Class"
        availableTeachers={[
          { label: 'Mrs. Padma Krishnan', value: 'STF-004' },
          { label: 'Mrs. Anjali Sharma', value: 'STF-020' },
          { label: 'Ms. Rekha Menon', value: 'STF-021' },
          { label: 'Mr. Suresh Pillai', value: 'STF-013' },
          { label: 'Mrs. Meena Rao', value: 'STF-008' },
          { label: 'Mr. Anil Joshi', value: 'STF-005' },
          { label: 'Ms. Deepa Nair', value: 'STF-006' },
          { label: 'Mr. Rajesh Kumar', value: 'STF-003' },
        ]}
      />
    </div>
  );
}
