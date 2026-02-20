import type { Metadata } from 'next';

import {
  StaffStats,
  StaffDirectory,
} from '@/features/dashboard/operations';

// TODO: Replace static data with API calls to fetch staff information
// TODO: Integrate with HR service for live staff data

const stats = [
  {
    title: 'Total Staff',
    value: '186',
    change: '+2.8%',
    changeType: 'up' as const,
    icon: 'Users',
    description: 'All teaching and non-teaching staff members',
  },
  {
    title: 'Teaching Staff',
    value: '124',
    change: '+3.3%',
    changeType: 'up' as const,
    icon: 'BookOpen',
    description: 'Full-time and part-time teachers',
  },
  {
    title: 'Non-Teaching Staff',
    value: '62',
    change: '+1.6%',
    changeType: 'up' as const,
    icon: 'Briefcase',
    description: 'Administrative, support, and maintenance staff',
  },
  {
    title: 'On Leave Today',
    value: '8',
    change: '-2',
    changeType: 'down' as const,
    icon: 'UserMinus',
    description: 'Staff members on leave or absent today',
  },
];

const staff = [
  { id: 'STF-001', name: 'Dr. Arvind Mishra', employeeId: 'EMP-001', department: 'management' as const, designation: 'Principal', email: 'arvind.mishra@school.edu.in', phone: '+91 98765 43210', status: 'active' as const },
  { id: 'STF-002', name: 'Mrs. Sunita Verma', employeeId: 'EMP-002', department: 'management' as const, designation: 'Vice Principal', email: 'sunita.verma@school.edu.in', phone: '+91 98765 43211', status: 'active' as const },
  { id: 'STF-003', name: 'Mr. Rajesh Kumar', employeeId: 'EMP-003', department: 'teaching' as const, designation: 'Senior Teacher — Mathematics', email: 'rajesh.kumar@school.edu.in', phone: '+91 98765 43212', status: 'active' as const },
  { id: 'STF-004', name: 'Mrs. Padma Krishnan', employeeId: 'EMP-004', department: 'teaching' as const, designation: 'Teacher — English', email: 'padma.krishnan@school.edu.in', phone: '+91 98765 43213', status: 'active' as const },
  { id: 'STF-005', name: 'Mr. Anil Joshi', employeeId: 'EMP-005', department: 'teaching' as const, designation: 'Teacher — Science', email: 'anil.joshi@school.edu.in', phone: '+91 98765 43214', status: 'active' as const },
  { id: 'STF-006', name: 'Ms. Deepa Nair', employeeId: 'EMP-006', department: 'teaching' as const, designation: 'Teacher — Hindi', email: 'deepa.nair@school.edu.in', phone: '+91 98765 43215', status: 'active' as const },
  { id: 'STF-007', name: 'Mr. Vikram Rathi', employeeId: 'EMP-007', department: 'teaching' as const, designation: 'Teacher — Social Studies', email: 'vikram.rathi@school.edu.in', phone: '+91 98765 43216', status: 'active' as const },
  { id: 'STF-008', name: 'Mrs. Meena Rao', employeeId: 'EMP-008', department: 'teaching' as const, designation: 'Teacher — Mathematics', email: 'meena.rao@school.edu.in', phone: '+91 98765 43217', status: 'inactive' as const },
  { id: 'STF-009', name: 'Dr. Pradeep Saxena', employeeId: 'EMP-009', department: 'teaching' as const, designation: 'HOD — Physics', email: 'pradeep.saxena@school.edu.in', phone: '+91 98765 43218', status: 'active' as const },
  { id: 'STF-010', name: 'Mrs. Nandini Kapoor', employeeId: 'EMP-010', department: 'teaching' as const, designation: 'HOD — Commerce', email: 'nandini.kapoor@school.edu.in', phone: '+91 98765 43219', status: 'active' as const },
  { id: 'STF-011', name: 'Mr. Gopal Reddy', employeeId: 'EMP-011', department: 'teaching' as const, designation: 'Teacher — Accounts', email: 'gopal.reddy@school.edu.in', phone: '+91 98765 43220', status: 'active' as const },
  { id: 'STF-012', name: 'Ms. Kavita Iyer', employeeId: 'EMP-012', department: 'teaching' as const, designation: 'Teacher — Computer Science', email: 'kavita.iyer@school.edu.in', phone: '+91 98765 43221', status: 'active' as const },
  { id: 'STF-013', name: 'Mr. Suresh Pillai', employeeId: 'EMP-013', department: 'teaching' as const, designation: 'Teacher — Physical Education', email: 'suresh.pillai@school.edu.in', phone: '+91 98765 43222', status: 'inactive' as const },
  { id: 'STF-014', name: 'Mrs. Lata Desai', employeeId: 'EMP-014', department: 'support' as const, designation: 'Librarian', email: 'lata.desai@school.edu.in', phone: '+91 98765 43223', status: 'active' as const },
  { id: 'STF-015', name: 'Mr. Ramesh Patil', employeeId: 'EMP-015', department: 'support' as const, designation: 'Lab Assistant', email: 'ramesh.patil@school.edu.in', phone: '+91 98765 43224', status: 'active' as const },
  { id: 'STF-016', name: 'Mr. Harish Bhat', employeeId: 'EMP-016', department: 'admin' as const, designation: 'Office Administrator', email: 'harish.bhat@school.edu.in', phone: '+91 98765 43225', status: 'active' as const },
];

export const metadata: Metadata = {
  title: 'Staff Management',
  description:
    'View staff statistics, browse the staff directory, and manage teaching and non-teaching staff records.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <StaffStats stats={stats} />
      <StaffDirectory
        title="Staff Directory"
        staff={staff}
      />
    </div>
  );
}
