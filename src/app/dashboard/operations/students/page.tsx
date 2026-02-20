import type { Metadata } from 'next';

import {
  StudentStats,
  StudentDirectory,
} from '@/features/dashboard/operations';

// TODO: Replace static data with API calls to fetch student information
// TODO: Integrate with student management service for live data

const stats = [
  {
    title: 'Total Enrolled',
    value: '2,450',
    change: '+3.2%',
    changeType: 'up' as const,
    icon: 'GraduationCap',
    description: 'Students currently enrolled for 2025–26 session',
  },
  {
    title: 'New Admissions',
    value: '185',
    change: '+12.5%',
    changeType: 'up' as const,
    icon: 'UserPlus',
    description: 'New students admitted this academic year',
  },
  {
    title: 'Boys',
    value: '1,280',
    change: '+2.8%',
    changeType: 'up' as const,
    icon: 'User',
    description: 'Total male students enrolled',
  },
  {
    title: 'Girls',
    value: '1,170',
    change: '+3.7%',
    changeType: 'up' as const,
    icon: 'User',
    description: 'Total female students enrolled',
  },
];

const students = [
  { id: 'STU-001', name: 'Aarav Sharma', className: 'X', section: 'A', rollNo: '1001', parentName: 'Mr. Vikash Sharma', phone: '+91 98765 11001', status: 'active' as const },
  { id: 'STU-002', name: 'Priya Patel', className: 'X', section: 'A', rollNo: '1002', parentName: 'Mr. Dinesh Patel', phone: '+91 98765 11002', status: 'active' as const },
  { id: 'STU-003', name: 'Rohan Gupta', className: 'IX', section: 'B', rollNo: '1003', parentName: 'Mrs. Savita Gupta', phone: '+91 98765 11003', status: 'active' as const },
  { id: 'STU-004', name: 'Ananya Singh', className: 'IX', section: 'A', rollNo: '1004', parentName: 'Mr. Manoj Singh', phone: '+91 98765 11004', status: 'inactive' as const },
  { id: 'STU-005', name: 'Vikram Reddy', className: 'VIII', section: 'A', rollNo: '1005', parentName: 'Mr. Srinivas Reddy', phone: '+91 98765 11005', status: 'active' as const },
  { id: 'STU-006', name: 'Neha Deshmukh', className: 'VIII', section: 'B', rollNo: '1006', parentName: 'Mrs. Priya Deshmukh', phone: '+91 98765 11006', status: 'active' as const },
  { id: 'STU-007', name: 'Arjun Mehta', className: 'VII', section: 'A', rollNo: '1007', parentName: 'Mr. Rakesh Mehta', phone: '+91 98765 11007', status: 'active' as const },
  { id: 'STU-008', name: 'Kavya Iyer', className: 'VII', section: 'A', rollNo: '1008', parentName: 'Mr. Suresh Iyer', phone: '+91 98765 11008', status: 'active' as const },
  { id: 'STU-009', name: 'Siddharth Nair', className: 'VI', section: 'B', rollNo: '1009', parentName: 'Mr. Gopinath Nair', phone: '+91 98765 11009', status: 'active' as const },
  { id: 'STU-010', name: 'Ishita Banerjee', className: 'VI', section: 'A', rollNo: '1010', parentName: 'Mr. Debashis Banerjee', phone: '+91 98765 11010', status: 'active' as const },
  { id: 'STU-011', name: 'Aditya Kulkarni', className: 'V', section: 'A', rollNo: '1011', parentName: 'Mr. Prasad Kulkarni', phone: '+91 98765 11011', status: 'active' as const },
  { id: 'STU-012', name: 'Divya Choudhury', className: 'V', section: 'B', rollNo: '1012', parentName: 'Mrs. Anuradha Choudhury', phone: '+91 98765 11012', status: 'active' as const },
  { id: 'STU-013', name: 'Rahul Tiwari', className: 'IX', section: 'A', rollNo: '1013', parentName: 'Mr. Om Prakash Tiwari', phone: '+91 98765 11013', status: 'active' as const },
  { id: 'STU-014', name: 'Meera Joshi', className: 'VIII', section: 'B', rollNo: '1014', parentName: 'Mr. Ashok Joshi', phone: '+91 98765 11014', status: 'active' as const },
  { id: 'STU-015', name: 'Kunal Saxena', className: 'X', section: 'A', rollNo: '1015', parentName: 'Mr. Rajendra Saxena', phone: '+91 98765 11015', status: 'active' as const },
  { id: 'STU-016', name: 'Sneha Pillai', className: 'VII', section: 'A', rollNo: '1016', parentName: 'Mr. Krishnan Pillai', phone: '+91 98765 11016', status: 'active' as const },
];

export const metadata: Metadata = {
  title: 'Student Management',
  description:
    'View student enrolment statistics, browse the student directory, and manage student records across all classes.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <StudentStats stats={stats} />
      <StudentDirectory
        title="Student Directory"
        students={students}
      />
    </div>
  );
}
